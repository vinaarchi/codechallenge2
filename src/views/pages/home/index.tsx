import contentfulClient from "@/lib/contentfulClient";
import { TypeProductSkeleton, TypeProductAsset } from "@/types/product.type";
import Image from "next/image";

const getProducts = async () => {
  try {
    const product = await contentfulClient.getEntries<TypeProductSkeleton>({
      content_type: "product",
    });
    console.log(product.items[0].fields.image);

    return product;
  } catch (error) {
    console.log(error);
  }
};

interface ProductProps {
  isLandingPage?: boolean;
}

export default async function Product({ isLandingPage = false }: ProductProps) {
  const product = await getProducts();

  return (
    <div
      className={`${
        isLandingPage
          ? "flex flex-row items-center overflow-x-auto space-x-8 py-4"
          : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3"
      }`}
    >
      {product &&
        product.items?.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="font-rafeny text-customPink text-2xl">
              {product.fields.title}
            </p>
            <div className="w-64 h-auto overflow-hidden">
              <Image
                src={`https:${
                  (product.fields.image as TypeProductAsset)?.fields.file.url
                }`}
                alt={product.fields.title}
                className="w-full h-auto rounded-md"
              />
            </div>
            <p className="font-helvetica text-customDarkBlue mb-10">
              {" "}
              Rp {product.fields.price}
            </p>
          </div>
        ))}
    </div>
  );
}
