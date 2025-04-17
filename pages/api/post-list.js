const { Post } = require("../../class/post");

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Метод не дозволено" });
  }

  try {
    const list = Post.getList();
    return res.status(200).json({
      list: list.map(({ id, username, text, date }) => ({
        id,
        username,
        text,
        date,
      })),
    });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
}
