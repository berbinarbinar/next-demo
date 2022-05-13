import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState();
  const [isLoading, setLoading] = useState(false);
  console.log(post);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <Link href="/posts">
        <h1 style={{ textAlign: "center" }}>Back to Posts</h1>
      </Link>
      <h1 style={{ textAlign: "center" }}>Post number {id}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            flexDirection: "row",
            justifyContent: "center",
            textAlign: "center",
            maxWidth: "400px",
            border: "1px solid black",
            padding: "10px",
            margin: "10px 10px",
            borderRadius: "8px",
            boxShadow: "3px 3px 3px black",
          }}
        >
          {isLoading && <h1 style={{ textAlign: "center" }}>Loading...</h1>}
          <h2> {post?.title}</h2>
          <h4> {post?.body}</h4>
        </div>
      </div>
    </>
  );
}
