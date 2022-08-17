/*A 02/solution/js/numericConverter.js fájlban dolgozz!
Készíts egy függvényt numericConverter néven!
Ez a paraméterként megadott tízes számrendszerbeli számot átkonvertálja kettes, nyolcas és tizenhatos számrendszerbe is.
Ezeket az értékeket egy objektumban add vissza. A property-k neve legyen: binary, octal, hexa.*/

 function numericConverter (number) {
     let newObject = {
         binary: number.toString(2),
         octal: number.toString(8),
         hexa: number.toString(16)
     }
    
     return newObject

    //    let binary = number.toString(2);
    //    let octal = number.toString(8);
    //    let hexa = number.toString(16)

    //    return {
    //       binary: binary,
    //       octal: octal,
    //       hexa: hexa
    //   }
 }

 export default numericConverter;