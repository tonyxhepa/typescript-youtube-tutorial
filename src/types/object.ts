//
let user = {
  name: "John",
  email: "test@example.com",
  age: 30,
};

let admin: {
  name: string;
  email: string;
  age: number;
  isAdmin: boolean;
} = {
  name: "John",
  email: "test@example.com",
  age: 30,
  isAdmin: true,
};

let post: {
  title: string;
  body: string;
  author: string;
  likes: number;
  isPublished: boolean;
  imageUrl?: string;
};
post = {
  title: "Post title",
  body: "Post body",
  author: "Post author",
  likes: 5,
  isPublished: true,
  imageUrl: "http://example.com/image.png",
};
