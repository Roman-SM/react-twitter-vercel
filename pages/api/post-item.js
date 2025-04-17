const { Post } = require("../../class/post");

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Метод не дозволено" });
  }

  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: "Потрібно передати ID поста" });
    }

    const post = Post.getById(Number(id));

    if (!post) {
      return res.status(400).json({ message: "Пост з таким ID не існує" });
    }

    return res.status(200).json({
      post: {
        id: post.id,
        username: post.username,
        text: post.text,
        date: post.date,
        reply: post.reply.map((reply) => ({
          id: reply.id,
          username: reply.username,
          text: reply.text,
          date: reply.date,
        })),
      },
    });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
}
