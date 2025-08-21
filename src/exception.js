export class MyException extends Error {

}

export const callMe = (name) => {
    if (name === "Vicry") {
        throw new MyException("Ups my exceptions happens");
    } else {
        return "OK";
    }
};