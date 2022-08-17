/*A 01/solution/js/summarize.js fájlban dolgozz!
Készíts egy függvényt summarize néven!
Ez a paraméterként kapott tetszőleges darabszámú, tetszőleges értékű egész számot összeadja, és visszatér az összeadás végeredményével.
A paraméterként kapott értékek egyszerű number típusúak legyenek!
Amennyiben bármelyik paraméter értéke vagy a részeredmény meghaladja a biztonságos tartományt, 
automatikusan konvertáljad BigInt-be, és természetesen a visszatérési érték is BigInt típusú legyen!*/

const summerize = (...numbers) => {
  const newArray = [...numbers].filter(num => Number.isInteger(num));
  let finalArray;

  newArray.some(num => num  > Number.MAX_SAFE_INTEGER) === true ? finalArray = newArray.map(num => BigInt(num)) : finalArray = newArray.map(num => Number(num))

  return finalArray.reduce((acc, sum) => acc + sum)

 };
  
  export default summerize;


