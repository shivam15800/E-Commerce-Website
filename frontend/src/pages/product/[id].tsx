import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Product Details - {id}</h1>
      <p>More details about product {id} will be displayed here.</p>
    </div>
  );
}
