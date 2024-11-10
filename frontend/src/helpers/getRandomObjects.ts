export default function getRandomObjects<T>(array: T[] | undefined, count: number): T[] {
   if (!array?.length) {
      return [];
   }
   const shuffledArray = array.sort(() => 0.5 - Math.random());
   const data = shuffledArray.slice(0, count);

   return data;
}
