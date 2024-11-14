import { createClient } from "contentful";


const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
});

// untuk env ini akses token nya bisa string, bisa undefined

export default contentfulClient;
