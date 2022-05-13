import Link from "next/link";

export default function Books() {
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
    </>
  );
}
