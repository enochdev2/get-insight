export const fetchBlog = async () => {
  const res = await fetch(`http://get-insight.vercel.app/api/blog`, { cache: 'no-store' }) 
  const data = res.json();
  return data;
}



export const fetchSingleBlog = async (id:string | number) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`, { cache: 'no-store' }) 
  const data = res.json();
  return data;
}
export const fetchComment = async (id:string | number) => {
  const res = await fetch(`http://localhost:3000/api/comment/${id}`, { cache: 'no-store' }) 
  const data = res.json();
  return data;
}



export const fetchRecentPost = async () => {
  try {
    
    const res = await fetch(`http://localhost:3000/api/blog/recentPost`, { cache: 'no-store' }) 
    const data = await res.json();
    return data
    
  } catch (error) {
    console.log(error);
    
  }
}

export const fetchRelatedPost = async (categories:string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/blog/relatedPost?categories=${categories}`, { cache: 'no-store' }) 
      const data = await res.json();
      return data
    } catch (error) {
      console.log(error);
      
    }
  }


export const fetchCategoriesPost = async (categories:string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/blog/categories?categories=${categories}`, { cache: 'no-store' }) 
      const data = await res.json();
      return data
    } catch (error) {
      console.log(error);
      
    }
  }



// export const fetchRelatedPost = async () => {
//     try {
//       const res = await fetch(`http://localhost:3000/api/blog/relatedPost?${categories}`, { cache: 'no-store' }) 
//       const data = await res.json();
//       setRelatedPosts(data);
//     } catch (error) {
      
//     }
//   }

// export const fetchComment = async (id:string) => {
//     const res = await fetch(`http://localhost:3000/api/comment/${id}`, {
//       cache: "no-store"
//     })
//     const data = res.json();
//     return data;
// };