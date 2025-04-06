"use client";
import Script from "next/script";
import styles from "./categoriesWiseBlogs.module.css";
import BlogCardPlaceholder from "../../BlogCard/BlogCardPlaceholder";
import BlogCard from "../../BlogCard/BlogCard";
import Link from "next/link";

const CategoryPage = ({ categoryData, params }) => {
  console.log("params", params);
 
  
  const formatDisplayCategory = (cat) => {
    return cat
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  if (!categoryData || !categoryData.Blogs) {
    return (
      <div className={styles.mainContainer}>
        <div>
          <h1 className={styles.heading}>
            {formatDisplayCategory(params)} Blogs
          </h1>
          <div className={styles.blogLayout}>
            <BlogCardPlaceholder />
            <BlogCardPlaceholder />
            <BlogCardPlaceholder />
            <BlogCardPlaceholder />
            <BlogCardPlaceholder />
            <BlogCardPlaceholder />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <div>
          <h1 className={styles.heading}>
            {formatDisplayCategory(params)} Blogs
          </h1>
          <div className={styles.blogLayout}>
            {categoryData.Blogs.length > 0 ? (
              categoryData.Blogs.map((blog) => (
                <Link href={`/blogs/${blog.slug}`} key={blog._id}>
                  <BlogCard
                    Title={blog.Title}
                    slug={blog.slug}
                    thumbnail={blog.thumbnail}
                    thumbnailAlt={blog.thumbnailAlt}
                    pubDate={blog.pubDate || blog.updatedAt}
                    description={blog.description}
                  />
                </Link>
              ))
            ) : (
              <div>No blogs found in this category</div>
            )}
          </div>
        </div>
      </div>

      <Script
        defer
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script
        defer
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></Script>
    </>
  );
};

export default CategoryPage;
