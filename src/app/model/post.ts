import { Author } from "./author";
import { Category } from "./category";
import { Comment } from "./comment";

export interface Post {
    id:number;
    title:string;
    excerpt:string;
    content:string;
    date:Date;
    author:Author;
    category:Category;
    comments?:Comment[];
}
