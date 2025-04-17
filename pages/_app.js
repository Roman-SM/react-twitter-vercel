import dynamic from "next/dynamic";

const PostList = dynamic(() => import("../container/post-list"), {
  ssr: false, // Відключаємо серверний рендеринг для цього компонента
});

function App() {
  return (
    <Page>
      <PostList />
    </Page>
  );
}

export default App;
