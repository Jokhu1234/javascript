/*
export const name = "Suzanne Jokhu";
export const phone = "1234567890";
export const car = "Lexus";
*/

/*
const name = "Suzanne Jokhu";
const phone = "1234567890";
const car = "Lexus";

export { name, phone, car };
*/

//Default Export

const message = () => {
    const name = "Suzanne Jokhu";
    const phone = "1234567890";
    const car = "Lexus";
    return "My name is " + name +  " and my Phone # is " + phone + " and my next car will be a " + car;
};
    
  export default message;