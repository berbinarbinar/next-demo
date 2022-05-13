import { useRouter } from "next/router";

export default function Article() {
  const router = useRouter();
  const { params } = router.query;
  console.log(params, "ini params");
  console.log(router.query, "ini query🤨");
  return (
    <>
      <h1> ini dari articles, ada params... liat aja sendiri di console</h1>
    </>
  );
}
