import { Author } from "./author";

export interface Comment {
    id:number;
    author:string;
    content:string;
    date:Date;
    postId:number;
}
