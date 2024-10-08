import { notFound } from "next/navigation";

export const localhost = process.env.domain;

export const fetchBlog = async (page = 1) => {
  // const res = await fetch(`https://www.dev-noch.com.ng/api/blog`, {
  //   next: {revalidate: 21600}
  // });
  const res = await fetch(
    `https://www.dev-noch.com.ng/api/allblogs?page=${page}`,
    {
      cache: "no-store",
      // next: {revalidate: 21600}
    }
  );
  const data = await res.json();
  // console.log("🚀 ~ fetchBlog ~ data:", data)
  return data;
};

export const fetchBlogs = async () => {
  const res = await fetch(`https://www.dev-noch.com.ng/api/blog`, {
    // cache: "no-store"
    next: { revalidate: 21600 },
  });

  const data = await res.json();
  return data;
};

export const fetchSingleBlog = async (id: string | number) => {
  const res = await fetch(`https://www.dev-noch.com.ng/api/blog/${id}`, {
    next: { revalidate: 3600 },
  });
  const data = res.json();
  if (res.status === 404) {
    notFound();
  }

  return data;
};

export const fetchRecentPost = async () => {
  try {
    const res = await fetch(`https://www.dev-noch.com.ng/api/blog/recentPost`, {
      next: { revalidate: 21600 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchRelatedPost = async (categories: string) => {
  try {
    const res = await fetch(
      `https://www.dev-noch.com.ng/api/blog/relatedPost?categories=${categories}`,
      { next: { revalidate: 21600 } }
    );
    const data = await res.json();
    console.log("🚀 ~ fetchRelatedPost ~ data:", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategoriesPost = async (categories: string) => {
  try {
    const res = await fetch(
      `https://www.dev-noch.com.ng/api/blog/categories?categories=${categories}`,
      { next: { revalidate: 21600 } }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
