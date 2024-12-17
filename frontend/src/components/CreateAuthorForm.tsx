import React, { useEffect, useState } from "react";
import { Author, AuthorRequest } from "@/services/generated/models";
import { useGetAuthors, usePostAuthors } from "@/services/generated/author/author";
import Input from "./Input";
import Button from "./Button";
import styles from "./CreateAuthorForm.module.scss";

interface CreateAuthorFormProps {
   onAuthorChange?: (author: { id: string; name: string }) => void;
}

const CreateAuthorForm: React.FC<CreateAuthorFormProps> = ({ onAuthorChange }) => {
   const [authorName, setAuthorName] = useState("");
   const [selectedAuthorId, setSelectedAuthorId] = useState<string | null>(null);
   const [createdAuthors, setCreatedAuthors] = useState<Author[]>([]);

   const { data: authorsData, error: authorsError, isLoading: isLoadingAuthors } = useGetAuthors();
   const { trigger: createAuthor, isMutating: isCreating } = usePostAuthors();

   useEffect(() => {
      if (authorsError) {
         console.error(authorsError);
      } else if (authorsData?.data?.data) {
         setCreatedAuthors(authorsData.data.data);
      }
   }, [authorsData, authorsError]);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!authorName.trim()) {
         alert("Name is required.");
         return;
      }

      try {
         const authorRequest: AuthorRequest = {
            data: { name: authorName },
         };

         const response = await createAuthor(authorRequest);

         const createdAuthor = response?.data?.data;
         if (createdAuthor) {
            alert("Author created successfully!");

            onAuthorChange?.({
               id: createdAuthor.id?.toString() || "",
               name: createdAuthor.name || "",
            });

            resetForm();
         } else {
            alert("Failed to create author.");
         }
      } catch (error) {
         console.error("Failed to create author:", error);
         alert("Failed to create author.");
      }
   };

   const resetForm = () => {
      setAuthorName("");
      setSelectedAuthorId(null);
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
         <h2 className={styles.authorHeader}>Create or Select an Author</h2>
         {!selectedAuthorId && (
            <>
               <div className={styles.authorInputBox}>
                  <label className={styles.authorLabel}>Name:</label>
                  <Input
                     placeholder="Enter Articel Author"
                     type="text"
                     value={authorName}
                     onChange={(e) => setAuthorName(e.target.value)}
                     required
                  />
               </div>

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
