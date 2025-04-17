import dynamic from "next/dynamic";

// Динамічно імпортуємо компонент з відключенням SSR
const PostList = dynamic(() => import("../container/post-list"), {
  ssr: false, // Відключаємо SSR для цього компонента
});

function App() {
  useEffect(() => {
    // Тільки на клієнті доступно document
    if (typeof document !== "undefined") {
      console.log("App is rendered on the client-side");
    }
  }, []);

  return (
    <Page>
      <PostList />
    </Page>
  );
}

export default App;
