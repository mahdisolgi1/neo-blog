export default function truncateTextByWords(text: string | undefined, wordLimit: number): string {
   if (!text) return "Invalid text";
   const words = text.split(" ");
   if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
   }
   return text;
}
