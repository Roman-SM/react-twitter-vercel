import { Post } from "../../class/post";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, text, postId } = req.body;

    if (!username || !text) {
      return res.status(400).json({ message: "Потрібно передати всі дані" });
    }

    let post = postId ? Post.getById(Number(postId)) : null;
    const newPost = Post.create(username, text, post);

    return res.status(200).json({
      post: {
        id: newPost.id,
        username: newPost.username,
        text: newPost.text,
        date: newPost.date,
      },
    });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
