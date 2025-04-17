import React, { useEffect } from "react";
import Page from "../component/page";
import PostList from "../container/post-list";
import "./index.css";
import "./normalize.css";

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
