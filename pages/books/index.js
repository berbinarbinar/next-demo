import Link from "next/link";
import { useBooks } from "../../context/BookContext";

export default function Books() {
  const { books, setBooks } = useBooks();
  return (
    <>
      <div style={{ display: "flex" }}>
        <Link style={{ flexDirection: "column" }} href="/">
          <h1 style={{ cursor: "pointer" }}>Home</h1>
        </Link>
        <h1 style={{ flexDirection: "column", marginLeft: "20px" }}>
          This is inside /books
        </h1>
      </div>
      <h4 style={{ flexDirection: "column" }}>{books}</h4>
    </>
  );
}
