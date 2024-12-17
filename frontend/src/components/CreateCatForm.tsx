import React, { useEffect, useState } from "react";
import { useGetCategories, usePostCategories } from "@/services/generated/category/category";
import { Category, CategoryRequest } from "@/services/generated/models";
import Input from "./Input";
import Button from "./Button";
import styles from "./CreateCatForm.module.scss";

interface CreateCatFormProps {
   onCategoryChange?: (category: { id: string; name: string; description: string }) => void;
}

const CreateCatForm: React.FC<CreateCatFormProps> = ({ onCategoryChange }) => {
   const [categoryName, setCategoryName] = useState("");
   const [categoryDescription, setCategoryDescription] = useState("");
   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
   const [createdCategory, setCreatedCategory] = useState<Category[]>([]);
   const { data: categoriesData, error: categoriesError } = useGetCategories();
   const { trigger: createCategory, isMutating: isCreating } = usePostCategories();

   useEffect(() => {
      if (categoriesError) {
         console.error(categoriesError);
      } else if (categoriesData?.data?.data) {
         setCreatedCategory(categoriesData.data.data);
      }
   }, [categoriesData, categoriesError]);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!categoryName.trim()) {
         alert("Name is required.");
         return;
      }

      try {
         const categoryRequest: CategoryRequest = {
            data: {
               name: categoryName,
               description: categoryDescription,
            },
         };

         const response = await createCategory(categoryRequest);

         alert("Category created successfully!");
         const createdCategory = response?.data?.data;

         onCategoryChange?.({
            id: createdCategory?.id?.toString() || "",
            name: createdCategory?.name || "",
            description: createdCategory?.description || "",
         });

         resetForm();
      } catch (error) {
         console.error("Failed to create category:", error);
         alert("Failed to create category.");
      }
   };

   const resetForm = () => {
      setCategoryName("");
      setCategoryDescription("");
      setSelectedCategory(null);
   };

   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedId = Number(e.target.value);
      const selectedCategory = createdCategory?.find((category) => category.id === selectedId);

      if (selectedCategory) {
         onCategoryChange?.({
            id: selectedCategory.id?.toString() || "",
            name: selectedCategory.name || "",
            description: selectedCategory.description || "",
         });
      }

      setSelectedCategory(selectedId.toString());
   };

   return (
      <form className={styles.catForm}>
         <h2 className={styles.catHeader}>Create or Select a Category</h2>
         {!selectedCategory && (
            <>
               <div className={styles.catInputBox}>
                  <label className={styles.catLabel}>Name:</label>
                  <Input
                     placeholder="Enter Article Category"
                     type="text"
                     value={categoryName}
                     onChange={(e) => setCategoryName(e.target.value)}
                     required
                  />
               </div>

               <div className={styles.catInputBox}>
                  <label className={styles.catLabel}>Description:</label>
                  <textarea
                     placeholder="Enter Article Category Description"
                     className={styles.categoryDescription}
                     value={categoryDescription}
                     onChange={(e) => setCategoryDescription(e.target.value)}
                  />
               </div>

               <Button variant="primary" size="md" onClick={handleSubmit} disabled={isCreating}>
                  {isCreating ? "Creating..." : "Create Category"}
               </Button>
            </>
         )}
         <div className={styles.catSelectBox}>
            <select className={styles.catSelect} value={selectedCategory ?? ""} onChange={handleSelectChange}>
               <option className={styles.catOption} value="">
                  -- Select Category --
               </option>
               {createdCategory?.map((category: Category) => (
                  <option className={styles.catOption} key={category.id} value={category.id}>
                     {category.name}
                  </option>
               ))}
            </select>
         </div>{" "}
         {selectedCategory && (
            <p className={styles.catSelectedP}>
               Selected Category:{" "}
               {createdCategory.find((cat) => cat.id === Number(selectedCategory))?.name || "Unknown"}
            </p>
         )}
      </form>
   );
};

export default CreateCatForm;
