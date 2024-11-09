export default function getRandomObjects<T>(array: T[] | undefined, count: number): T[] {
   if (!array || array.length === 0) {
      return []; // Return an empty array if the input array is undefined or empty
   }

   const shuffledArray = array.sort(() => 0.5 - Math.random());
   const data = shuffledArray.slice(0, count);

   return data;
}
