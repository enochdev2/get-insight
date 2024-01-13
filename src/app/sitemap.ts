import { MetadataRoute } from "next"; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const response = await fetch("https://get-insight.vercel.app/api/blog");
    const blogs:any  = await response.json();
  
  const postEntries: MetadataRoute.Sitemap = blogs.map((blog:any) => ({
    url: `https://get-insight.vercel.app/api/blog/${blog._id}`,
    lastModified: new Date(blog.updatedAt),
    // changeFrequency:,
    // priority:
  }));

  return [
    {
      url: `https://get-insight.vercel.app/api/blog`,
    //   lastModified: new Date(),
    },
    ...postEntries,
  ];
}