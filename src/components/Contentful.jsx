import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "sjcmuit7plc8",
    accessToken: "05KDwv7udT5AgHaUV1dZWBWaVqDXdX7DLcIJH3PC2rw",
    host: "cdn.contentful.com",
  });

  const getBlogs = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "blog",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item) => {
        const media = item.fields.media.fields;

        return {
          ...item.fields,
          media,
        };
      });
      return entries;
    } catch (error) {
      console.log(`Error fetching blogs: ${error}`);
    }
  };
  return { getBlogs };
};
export default useContentful;
