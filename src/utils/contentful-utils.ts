import { createClient } from "contentful";

export function contentFullClient() {
  return createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    space: process.env.CONTENTFUL_SPACE_ID!,
  });
}

export async function getAllData() {
  const client = contentFullClient();
  try {
    const data = await client.getEntries();
    return data.items;
  } catch (error) {
    console.error("Error fetching data from Contentful", error);
    return [];
  }
}

// export const contentData = getAllData().then(e=>e).catch(err=>err)