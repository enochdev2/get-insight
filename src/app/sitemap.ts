import { MetadataRoute } from "next";


export const revalidate = 3600 // revalidate at most every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch("https://www.dev-noch.com.ng/api/blog");
  const blogs: any = await response.json();

  const postEntries: MetadataRoute.Sitemap = blogs?.map((blog: any) => ({
    url: `https://www.dev-noch.com.ng/api/blog/${blog._id}`,
    lastModified: new Date(blog.updatedAt),
    changeFrequency: "weekly",
    // priority: 
  }));

  return [
    {
      url: `https://www.dev-noch.com.ng/api/blog`,
      //   lastModified: new Date(),
    },
    {
      url: `https://www.dev-noch.com.ng/`,
      //   lastModified: new Date(),
    },
    ...postEntries,
  ];
}
