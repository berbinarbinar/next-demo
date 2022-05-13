import { useState, useEffect } from "react";

export default function Posts() {
  const dataMock = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
  ];

  // CSR (CLIENT SIDE RENDERING)
  const [posts, setPosts] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setTimeout(() => {
          setLoading(false);
        }, [3000]);
      });
  }, []);

  if (isLoading) return <h1 style={{ textAlign: "center" }}>Loading...</h1>;

  return (
    <>
      <h1 style={{ textAlign: "center" }}>List Comments </h1>
      {posts?.map((e) => (
        <div
          key={e.id}
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
            <h2> {e?.title}</h2>
            <h4> {e?.body}</h4>
          </div>
        </div>
      ))}
    </>
  );
}
