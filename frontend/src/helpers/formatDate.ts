export default function formatDate(dateString?: string): string {
   if (!dateString) return "Invalid date";
   const date = new Date(dateString);
   return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(date);
}
