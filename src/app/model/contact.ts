import { ContactInterface } from "./contactInterface";

export class Contact implements ContactInterface {

    constructor(
        public name:string, 
        public email:string, 
        public subject:string,
        public content:string
    ) { }
}