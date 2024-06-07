// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity";

type Data = {
  products: Product[];
}  ;

const query = groq`*[_type == 'product']{
    _id,
    ...
} `

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const products:Product[] = await sanityClient.fetch(query);
  res.status(200).json({ products });
//   res.status(200).json({ name: "John Doe" });
}
