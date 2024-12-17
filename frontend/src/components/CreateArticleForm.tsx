import { FC, useState } from "react";
import styles from "./CreateArticleForm.module.scss";
import Button from "./Button";
import Input from "./Input";
import { usePostArticles } from "@/services/generated/article/article";
import AutocompleteAuthor from "./AutocompleteAuthor";
import AutocompleteCat from "./AutocompleteCat";

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

   const { trigger: createArticle, isMutating } = usePostArticles();

   const handleChange = ({ target: { id, value } }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
         ...prev,
         [id]: value,
      }));
   };

   const handleAuthorChange = (author: { id: string; name: string }) => {
      setFormData((prev) => ({
         ...prev,
         author,
      }));
   };

   const handleCategoryChange = (category: { id: string; name: string }) => {
      setFormData((prev) => ({
         ...prev,
         category,
      }));
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const { title, description, author, category } = formData;

      if (!title || !description || !author || !category) {
         alert("All fields are required!");
         return;
      }

      try {
         const articleRequest = {
            data: {
               title,
               description,
               author: Number(author.id),
               category: Number(category.id),
            },
         };
         console.log(author.id);

         await createArticle(articleRequest);
         console.log(author.id);
         alert("Article created successfully!");
         setFormData({
            title: "",
            description: "",
            author: null,
            category: null,
         });
      } catch {
         console.error("Failed to create article:");
         alert("Error: Failed to create article.");
      }
   };

   return (
      <section className={styles.createArticleSection}>
         <AutocompleteAuthor onAuthorChange={handleAuthorChange} />
         <AutocompleteCat onCategoryChange={handleCategoryChange} />
         <form className={styles.createArticleForm} onSubmit={handleSubmit}>
            <h2 className={styles.articleHeader}>Create or Select a Article</h2>
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
            <Button variant="primary" size="md" disabled={isMutating}>
               {isMutating ? "Submitting..." : "Create Article "}
            </Button>
         </form>
      </section>
   );
};

export default CreateArticleForm;
