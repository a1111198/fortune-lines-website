import Blogs from "./Blogs";
import { client } from "@/sanity/client";
import { BreadCrumbStructuredDataBlogs } from "@/components/StructuredData";
import BlogsHeader from "@/components/Header/blogsHeader";
export const metadata = {
  title:
    "The Urban Strokes - Beauty, Hair, Makeup & Skin Care Blogs | Urban Culture",
  description:
    "Explore Urban Culture's blog for insights on beauty, hair, makeup, and skin care. Discover guides, tips, and the latest trends.",
};

const Blogss = async () => {
  const categories = await client.fetch(
    `*[_type == "category"] | order(_createdAt desc){
            name,
            "slug": slug.current
        }`
  );
  const latest2BlogData = await client.fetch(
    `*[_type == "category"] | order(_createdAt desc){
            name,
            "Blogs": *[_type == "Blogs" && references(^._id)] | order(_createdAt desc){
              Title,
              "slug": slug.current,
              "thumbnail": thumbnail.asset->url ,
              "thumbnailAlt": thumbnail.alt,
              'thumbnailBlurHash': thumbnail.blurHash,
              pubDate,
              "updatedAt": _updatedAt,
              description,
              name,
              _id,
            }[0...2]
        }`
  );

  const latestBlogData = await client.fetch(
    `*[_type == "Blogs"] | order(_createdAt desc){
      Title,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url ,
      "thumbnailAlt": thumbnail.alt,
      'thumbnailBlurHash': thumbnail.blurHash,
      pubDate,
      "updatedAt": _updatedAt,
      description
    }[0]`
  );

  return (
    <>
      <BlogsHeader />
      
      <Blogs
        latest2BlogData={latest2BlogData}
        latestBlogData={latestBlogData}
        categories={categories}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadCrumbStructuredDataBlogs) }}
      />
    </>
  );
};

export default Blogss;
