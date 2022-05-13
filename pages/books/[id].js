import { useRouter } from "next/router";

export default function Book() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1>ini dalem book detail nomor {id}</h1>
    </>
  );
}
