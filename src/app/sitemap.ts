import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch("http://localhost:3000/api/blog");
  const blogs: any = await response.json();

  const postEntries: MetadataRoute.Sitemap = blogs.map((blog: any) => ({
    url: `http://localhost:3000/api/blog/${blog._id}`,
    lastModified: new Date(blog.updatedAt),
    // changeFrequency:,
    // priority:
  }));

  return [
    {
      url: `http://localhost:3000/api/blog`,
      //   lastModified: new Date(),
    },
    ...postEntries,
  ];
}
