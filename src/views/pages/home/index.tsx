// import contentfulClient from "@/lib/contentfulClient";
// import { TypeProductSkeleton, TypeProductAsset } from "@/types/product.type";


// const getProducts = async () => {
//   try {
//     const product = await contentfulClient.getEntries<TypeProductSkeleton>({
//       content_type: "product",
//     });
//     console.log(product.items[0].fields.image);

//     return product;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default async function Product() {
//   const product = await getProducts();

//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 m-2 mb-10 mt-10">
//       {product &&
//         product.items?.map((product, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <p className="font-rafeny text-customPink text-2xl">
//               {product.fields.title}
//             </p>
//             <img
//               src={`https:${
//                 (product.fields.image as TypeProductAsset)?.fields.file.url
//               }`}
//               alt={product.fields.title}
//               className="w-full h-auto rounded-md" // Tidak perlu margin tambahan jika gap digunakan
//             />
//             <p className="font-helvetica text-customDarkBlue mb-10">
//               {" "}
//               Rp {product.fields.price}
//             </p>
//           </div>
//         ))}
//     </div>
//   );
// }
