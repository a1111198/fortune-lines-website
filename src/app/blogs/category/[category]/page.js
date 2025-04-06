// import Blogs from "./Blogs";
import { client } from "@/sanity/client";
import CategoryPage from "./CategoryPage";

export const metadata = {
  title:
    "Category: The Urban Strokes - Beauty, Hair, Makeup & Skin Care Blogs | Urban Culture",
  description:
    "Explore Urban Culture's blog for insights on beauty, hair, makeup, and skin care. Discover guides, tips, and the latest trends.",
};




// Add this function to generate Sanity reference ID for categories
function getCategoryRef(categoryName) {
  // Sanity convention for generating IDs
  return `category-${sanitizeCategoryName(categoryName)}`;
}
// Add your utility functions
function sanitizeCategoryName(name) {
  // First decode the URL-encoded string
  // Handle special cases like "MYTHS%20vs%20FACTS"
  if (name.includes('%20vs%20')) {
    return "myths-facts"
  }
  const decodedName = decodeURIComponent(name);
  
  // Then sanitize it
  return decodedName.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
}
const Blogss = async ({ params }) => {
  // Await the params
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  console.log("category", category);
  const _ref= getCategoryRef(category);
  console.log("ref", _ref);
  const categoryData = await client.fetch(
    `*[_type == "category" && _id == '${_ref}'][0]{
      title,
      "Blogs": *[_type == "Blogs" && references(^._id)] | order(_createdAt desc){
        Title,
        "slug": slug.current,
        "thumbnail": thumbnail.asset->url,
        "thumbnailAlt": thumbnail.alt,
        pubDate,
        "updatedAt": _updatedAt,
        description,
        _id
      }
    }`,
    { slug: category } // Pass the slug parameter here
  );
 
  return <CategoryPage categoryData={categoryData} params={decodedCategory} />;
};

export default Blogss;
