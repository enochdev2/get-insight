export const localhost = process.env.domain;

export const fetchBlog = async () => {
  const res = await fetch(`https://www.dev-noch.com.ng/api/blog`, { cache: "no-store" });
  const data = res.json();
  return data;
};

export const fetchSingleBlog = async (id: string | number) => {
  const res = await fetch(`https://get-insight.vercel.app/api/blog/${id}`, {
    cache: "no-store",
  });
  const data = res.json();
  return data;
};


export const fetchRecentPost = async () => {
  try {
    const res = await fetch(`https://www.dev-noch.com.ng/api/blog/recentPost`, {
      cache: "no-store",
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
      `https://get-insight.vercel.app/api/blog/relatedPost?categories=${categories}`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategoriesPost = async (categories: string) => {
  try {
    const res = await fetch(
      `https://get-insight.vercel.app/api/blog/categories?categories=${categories}`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

