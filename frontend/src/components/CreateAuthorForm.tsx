import React, { useEffect, useState } from "react";
import { Author, AuthorRequest } from "@/services/generated/models";
import { useGetAuthors, usePostAuthors } from "@/services/generated/author/author";
import Input from "./Input";
import Button from "./Button";
import styles from "./CreateAuthorForm.module.scss";
import toast, { Toaster } from "react-hot-toast";

interface CreateAuthorFormProps {
   onAuthorChange?: (author: { id: string; name: string }) => void;
}

const CreateAuthorForm: React.FC<CreateAuthorFormProps> = ({ onAuthorChange }) => {
   const [authorName, setAuthorName] = useState("");
   const [selectedAuthorId, setSelectedAuthorId] = useState<string | null>(null);
   const [createdAuthors, setCreatedAuthors] = useState<Author[]>([]);
   const [selectedFile, setSelectedFile] = useState<File | null>(null);
   const [previewUrl, setPreviewUrl] = useState<string | null>(null);

   const { data: authorsData, error: authorsError, isLoading: isLoadingAuthors } = useGetAuthors();
   const { trigger: createAuthor, isMutating: isCreating } = usePostAuthors();

   const baseUrl = import.meta.env.VITE_BACK_END_BASE_URL;

   useEffect(() => {
      if (authorsError) {
         console.error(authorsError);
      } else if (authorsData?.data?.data) {
         setCreatedAuthors(authorsData.data.data);
      }
   }, [authorsData, authorsError]);

   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      if (file) {
         setPreviewUrl(URL.createObjectURL(file));
         setSelectedFile(file);
      }
   };
   const uploadAvatar = async (): Promise<string | null> => {
      if (!selectedFile) return null;

      const fileData = new FormData();
      fileData.append("files", selectedFile);

      try {
         const response = await fetch(`${baseUrl}/api/upload`, {
            method: "POST",
            body: fileData,
         });

         const result = await response.json();
         return result[0]?.id || null;
      } catch (error) {
         console.error("Failed to upload avatar:", error);
         return null;
      }
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!authorName.trim()) {
         alert("Name is required.");
         return;
      }

      let uploadedAvatarID = null;
      if (selectedFile) {
         uploadedAvatarID = await uploadAvatar();
         console.log(String(uploadedAvatarID));
      }

      try {
         const authorRequest: AuthorRequest = {
            data: {
               name: authorName,
               avatar: uploadedAvatarID !== null ? uploadedAvatarID : undefined,
            },
         };
         const response = await createAuthor(authorRequest);

         const createdAuthor = response?.data?.data;
         if (createdAuthor) {
            toast.success("Author created successfully!");

            onAuthorChange?.({
               id: createdAuthor.id?.toString() || "",
               name: createdAuthor.name || "",
            });

            resetForm();
         } else {
            toast.error("Failed to create author.");
         }
      } catch (error) {
         console.error("Failed to create author:", error);
         toast.error("Failed to create author.");
      }
   };
   const resetForm = () => {
      if (previewUrl) {
         URL.revokeObjectURL(previewUrl);
      }
      setAuthorName("");
      setSelectedAuthorId(null);
      setSelectedFile(null);
      setPreviewUrl(null);
   };

   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedId = e.target.value;
      const selectedAuthor = createdAuthors.find((author) => author.id?.toString() === selectedId);

      if (selectedAuthor) {
         onAuthorChange?.({
            id: selectedAuthor.id?.toString() || "",
            name: selectedAuthor.name || "",
         });
      }

      setSelectedAuthorId(selectedId);
   };

   return (
      <form className={styles.authorForm}>
         {" "}
         <Toaster
            position="bottom-right"
            toastOptions={{
               style: {
                  fontSize: "2rem",
               },
            }}
         />
         <h2 className={styles.authorHeader}>Create or Select an Author</h2>
         {!selectedAuthorId && (
            <>
               <div className={styles.authorInputBox}>
                  <label className={styles.authorLabel}>Name:</label>
                  <Input
                     placeholder="Enter Author Name"
                     type="text"
                     value={authorName}
                     onChange={(e) => setAuthorName(e.target.value)}
                     required
                  />
               </div>

               <div>
                  <label className={styles.authorLabel}>Avatar:</label>
                  <input type="file" accept="image/*" onChange={handleFileChange} className={styles.authorFile} />
               </div>
               {previewUrl && (
                  <div className={styles.previewContainer}>
                     <p className={styles.authorLabel}>Preview:</p>
                     <img src={previewUrl} alt="Avatar Preview" className={styles.authorFilePreview} />
                  </div>
               )}

               <Button variant="primary" size="md" onClick={handleSubmit} type="button" disabled={isCreating}>
                  {isCreating ? "Creating..." : "Create Author"}
               </Button>
            </>
         )}
         {isLoadingAuthors ? (
            <p className={styles.authorLoading}>Loading authors...</p>
         ) : (
            <div className={styles.authorSelectBox}>
               <select className={styles.authorSelect} value={selectedAuthorId ?? ""} onChange={handleSelectChange}>
                  <option className={styles.authorOption} value="">
                     -- Select Author --
                  </option>
                  {createdAuthors.map((author) => (
                     <option className={styles.authorOption} key={author.id} value={author.id}>
                        {author.name}
                     </option>
                  ))}
               </select>
            </div>
         )}
         {selectedAuthorId && (
            <p className={styles.authorSelectedP}>
               Selected Author:{" "}
               {createdAuthors.find((author) => author.id === Number(selectedAuthorId))?.name || "Unknown"}
            </p>
         )}
      </form>
   );
};

export default CreateAuthorForm;
