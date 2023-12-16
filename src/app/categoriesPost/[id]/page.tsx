import {  fetchCategoriesPost, fetchRelatedPost } from '@/Services'
import CategoriesPostDetals from '@/components/categoriesPostDetals';



const CategoriesPost = async({params}:any) => {


  const id = params.id




  const categoriesPost = await fetchCategoriesPost(id)

 return (
  <>
  <CategoriesPostDetals categoriesPost={categoriesPost} />
  </>
 );
}

export default CategoriesPost
