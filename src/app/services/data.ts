import { Author } from "../model/author";
import { Category } from "../model/category";
import { Comment } from "../model/comment";
import { Post } from "../model/post";

export const authors:Author[] = [
    {
        id:1,
        pseudo:"Ermina"
    },
    {
        id:2,
        pseudo:"Avalia"
    },
    {
        id:1,
        pseudo:"Hadrien"
    }
];

export const categories:Category[] = [
    {
        id:1,
        name:"Voyage"
    },
    {
        id:2,
        name:"Lecture"
    },
    {
        id:3,
        name:"Ecriture"
    }
];

export const posts:Post[] = [
    {
        id:1,
        title:"Lorem Ipsum",
        excerpt:"lorem ipsum sit amet dolorem nihil sic ut, consectetur adipiscing elit.",
        content: "Nunc efficitur ligula enim. Integer quis purus rutrum, vulputate est ut, finibus eros. Suspendisse ut lectus vel augue dignissim vulputate. Praesent placerat mauris vel neque maximus elementum. Nulla et leo nunc. Quisque a scelerisque sem. Vestibulum consectetur est ac tellus pretium, at fringilla diam rhoncus. Nam pharetra rutrum sollicitudin. Quisque odio turpis, ultricies tincidunt rutrum et, eleifend non mi. Vivamus sit amet rutrum nibh, non dictum nibh. Ut ornare erat eu orci convallis rhoncus. Vivamus eget ex ac turpis commodo tincidunt sit amet ac leo. Quisque eget viverra sapien, at imperdiet purus.",
        date: new Date(),
        author: authors[0],
        category: categories[0]
    },
    {
        id:2,
        title:"Dignissima Molestia",
        excerpt:"Ut id scelerisque leo, at pulvinar neque. Ut tristique ac leo eu cursus.",
        content: "Mauris vitae eros sit amet metus scelerisque sodales. Suspendisse eget mollis massa. Nulla euismod, ante non euismod facilisis, ante felis scelerisque neque, vel finibus erat ex id urna. Suspendisse maximus, nulla eu iaculis accumsan, turpis felis dictum lectus, at mattis velit arcu non lectus. Sed efficitur nibh a tortor vulputate, nec ultrices ligula placerat. Donec suscipit enim non felis gravida mollis. Integer at est tellus. Vestibulum porta elit ut lacinia feugiat.",
        date: new Date(),
        author: authors[0],
        category: categories[0]
    },
    {
        id:3,
        title:"Nunc efficitur ligula enim",
        excerpt:"Duis dignissim molestie risus, eget commodo libero sagittis id.",
        content: "Maecenas neque tellus, sollicitudin a dolor eget, scelerisque tristique quam. Phasellus sit amet orci eleifend, pellentesque leo at, gravida ipsum. Ut fringilla nisi libero. Nam pellentesque blandit enim, a suscipit arcu convallis quis. Fusce placerat tempor turpis, in tincidunt tellus fermentum ac. Nam diam sapien, posuere eu rutrum ut, elementum eu sem. Nulla non sapien vitae nulla fermentum imperdiet eu et dolor. Proin eu sagittis sem. Nam quis nisi tincidunt, consectetur ligula ut, hendrerit urna. Etiam vel elit justo. Proin eget lacinia metus. Nam dapibus pulvinar magna nec malesuada. Suspendisse nec dui efficitur, eleifend quam a, rutrum nibh. Curabitur in euismod ipsum, ut tempus dolor. Suspendisse vel sapien ornare, commodo ipsum vitae, imperdiet neque.",
        date: new Date(),
        author: authors[0],
        category: categories[1]
    },
    {
        id:4,
        title:"Nulla et leo nunc",
        excerpt:"lorem ipsum sit amet dolorem nihil sic ut, consectetur adipiscing elit.",
        content: "Nunc efficitur ligula enim. Integer quis purus rutrum, vulputate est ut, finibus eros. Suspendisse ut lectus vel augue dignissim vulputate. Praesent placerat mauris vel neque maximus elementum. Nulla et leo nunc. Quisque a scelerisque sem. Vestibulum consectetur est ac tellus pretium, at fringilla diam rhoncus. Nam pharetra rutrum sollicitudin. Quisque odio turpis, ultricies tincidunt rutrum et, eleifend non mi. Vivamus sit amet rutrum nibh, non dictum nibh. Ut ornare erat eu orci convallis rhoncus. Vivamus eget ex ac turpis commodo tincidunt sit amet ac leo. Quisque eget viverra sapien, at imperdiet purus.",
        date: new Date(),
        author: authors[0],
        category: categories[1]
    },
    {
        id:5,
        title:"Nullam non mauris",
        excerpt:"Ut id scelerisque leo, at pulvinar neque. Ut tristique ac leo eu cursus.",
        content: "Mauris vitae eros sit amet metus scelerisque sodales. Suspendisse eget mollis massa. Nulla euismod, ante non euismod facilisis, ante felis scelerisque neque, vel finibus erat ex id urna. Suspendisse maximus, nulla eu iaculis accumsan, turpis felis dictum lectus, at mattis velit arcu non lectus. Sed efficitur nibh a tortor vulputate, nec ultrices ligula placerat. Donec suscipit enim non felis gravida mollis. Integer at est tellus. Vestibulum porta elit ut lacinia feugiat.",
        date: new Date(),
        author: authors[0],
        category: categories[0]

    },
    {
        id:6,
        title:"Quisque eget viverra",
        excerpt:"Duis dignissim molestie risus, eget commodo libero sagittis id.",
        content: "Maecenas neque tellus, sollicitudin a dolor eget, scelerisque tristique quam. Phasellus sit amet orci eleifend, pellentesque leo at, gravida ipsum. Ut fringilla nisi libero. Nam pellentesque blandit enim, a suscipit arcu convallis quis. Fusce placerat tempor turpis, in tincidunt tellus fermentum ac. Nam diam sapien, posuere eu rutrum ut, elementum eu sem. Nulla non sapien vitae nulla fermentum imperdiet eu et dolor. Proin eu sagittis sem. Nam quis nisi tincidunt, consectetur ligula ut, hendrerit urna. Etiam vel elit justo. Proin eget lacinia metus. Nam dapibus pulvinar magna nec malesuada. Suspendisse nec dui efficitur, eleifend quam a, rutrum nibh. Curabitur in euismod ipsum, ut tempus dolor. Suspendisse vel sapien ornare, commodo ipsum vitae, imperdiet neque.",
        date: new Date(),
        author: authors[0],
        category: categories[1]
    }
];

export const comments:Comment[] = [
    {
        id:1,
        author: authors[1].pseudo,
        content: "lorem ipsum sit amet",
        date: new Date(),
        postId: posts[0].id
    },
    {
        id:2,
        author: authors[2].pseudo,
        content: "lorem ipsum sit amet",
        date: new Date(),
        postId: posts[1].id
    },
    {
        id:3,
        author: authors[1].pseudo,
        content: "lorem ipsum sit amet",
        date: new Date(),
        postId: posts[2].id
    },
    {
        id:3,
        author: authors[2].pseudo,
        content: "Nulla et metus at dui malesuada aliquet. Cras ultrices in sapien et vestibulum.",
        date: new Date(),
        postId: posts[2].id
    },
    {
        id:1,
        author: authors[2].pseudo,
        content: "lorem ipsum sit amet. Nulla et metus at dui malesuada aliquet. Cras ultrices in sapien et vestibulum.",
        date: new Date(),
        postId: posts[0].id
    },
    {
        id:2,
        author: authors[1].pseudo,
        content: "lorem ipsum sit amet",
        date: new Date(),
        postId: posts[1].id
    },
    {
        id:3,
        author: authors[2].pseudo,
        content: "lorem ipsum sit amet",
        date: new Date(),
        postId: posts[2].id
    },
    {
        id:3,
        author: authors[1].pseudo,
        content: "Nulla et metus at dui malesuada aliquet. Cras ultrices in sapien et vestibulum.",
        date: new Date(),
        postId: posts[2].id
    }
];

