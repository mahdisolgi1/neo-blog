import { FC, useState } from "react";
import styles from "./CreateArticleForm.module.scss";
import Button from "./Button";
import Input from "./Input";
import { usePostArticles } from "@/services/generated/article/article";
import CreateAuthor from "./CreateAuthorForm";
import CreateCat from "./CreateCatForm";
import toast, { Toaster } from "react-hot-toast";

interface FormData {
   title: string;
   description: string;
   author: { id: string; name: string } | null;
   category: { id: string; name: string } | null;
}

const CreateArticleForm: FC = () => {
   const [formData, setFormData] = useState<FormData>({
      title: "",
      description: "",
      author: null,
      category: null,
   });
   const [selectedFile, setSelectedFile] = useState<File | null>(null);
   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
   const { trigger: createArticle, isMutating } = usePostArticles();

   const handleChange = ({ target: { id, value } }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [id]: value }));
   };

   const handleAuthorChange = (author: { id: string; name: string }) => {
      setFormData((prev) => ({ ...prev, author }));
   };

   const handleCategoryChange = (category: { id: string; name: string }) => {
      setFormData((prev) => ({ ...prev, category }));
   };

   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      if (file) {
         if (previewUrl) URL.revokeObjectURL(previewUrl);
         setPreviewUrl(URL.createObjectURL(file));
         setSelectedFile(file);
      }
   };

   const uploadAvatar = async (): Promise<string | null> => {
      if (!selectedFile) return null;

      const fileData = new FormData();
      fileData.append("files", selectedFile);
      const baseUrl = import.meta.env.VITE_BACK_END_BASE_URL;

      try {
         const response = await fetch(`${baseUrl}/api/upload`, { method: "POST", body: fileData });
         const result = await response.json();
         return result[0]?.id || null;
      } catch (error) {
         console.error("Failed to upload cover:", error);
         return null;
      }
   };

   const resetForm = () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setFormData({
         title: "",
         description: "",
         author: null,
         category: null,
      });
      setSelectedFile(null);
      setPreviewUrl(null);
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const { title, description, author, category } = formData;

      if (!title || !description || !author || !category) {
         alert("All fields are required!");
         return;
      }

      let uploadedCoverID = null;
      if (selectedFile) {
         uploadedCoverID = await uploadAvatar();
      }

      try {
         const articleRequest = {
            data: {
               title,
               description,
               author: Number(author.id),
               category: Number(category.id),
               cover: uploadedCoverID?.toString(),
            },
         };

         await createArticle(articleRequest);
         toast.success("Article created successfully!");
         resetForm();
      } catch (error) {
         console.error("Failed to create article:", error);
         toast.error("Error: Failed to create article.");
      }
   };

   return (
      <section className={styles.createArticleSection}>
         <Toaster
            position="bottom-right"
            toastOptions={{
               style: {
                  fontSize: "2rem",
               },
            }}
         />
         <CreateAuthor onAuthorChange={handleAuthorChange} />
         <CreateCat onCategoryChange={handleCategoryChange} />
         <form className={styles.createArticleForm} onSubmit={handleSubmit}>
            <h2 className={styles.articleHeader}>Create or Select an Article</h2>
            <div className={styles.createArticleInputBox}>
               <label className={styles.createArticleLabel} htmlFor="title">
                  Title:
               </label>
               <Input
                  type="text"
                  id="title"
                  placeholder="Enter Article Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className={styles.createArticleInputBox}>
               <label className={styles.createArticleLabel} htmlFor="description">
                  Description:
               </label>
               <textarea
                  className={styles.articleDescription}
                  id="description"
                  placeholder="Enter Article Description"
                  value={formData.description}
                  onChange={handleChange}
                  required
               />
            </div>
            <div>
               <label className={styles.createArticleLabel}>Cover:</label>
               <input type="file" accept="image/*" onChange={handleFileChange} className={styles.articleFile} />
            </div>
            {previewUrl && <img src={previewUrl} alt="Preview" className={styles.articleFilePreview} />}
            <Button variant="primary" size="md" disabled={isMutating}>
               {isMutating ? "Submitting..." : "Create Article"}
            </Button>
         </form>
      </section>
   );
};

export default CreateArticleForm;
