"use client";
// import { client } from "../../sanityClient";
import Script from "next/script";
import Link from "next/link";
import styles from "./blogs.module.css";
import BlogCardPlaceholder from "./BlogCard/BlogCardPlaceholder";
import { useRouter } from "next/navigation";
// import dynamic from "next/dynamic";
import SmoothScrollLink from "@/components/SmoothScrollLink";
// const BlogCard = dynamic(() => import("./BlogCard/BlogCard"), { ssr: false });
import BlogCard from "./BlogCard/BlogCard";

const formatCategoryDisplayName = (name) => {
  return name.replace(/_/g, ' ').toUpperCase();
};

const getCategoryId = (name) => {
  return name.toUpperCase().split(" ").join("");
};



const Blogs = ({ latest2BlogData, latestBlogData, categories }) => {
  const data = latest2BlogData;
  console.log("data", data);
  const router = useRouter();
  const latestBlog = latestBlogData;
  // const [data, setData] = useState(latest2BlogData);
  // const [latestBlog, setLatestBlog] = useState(latestBlogData);

  return (
    <>
    
   

      {/* Categories Bar Section */}
      <div className={styles.categoriesBar}>
        <ul>
          {categories?.map((category) => (
            <li key={category.slug}>
                <SmoothScrollLink
                href={`#${getCategoryId(category.name)}`}
                  topMargin={55}
                >
                <span className={styles.categoriesBar_link}>
                  {formatCategoryDisplayName(category.name)}
                </span>
                </SmoothScrollLink>
              </li>
          ))}
        </ul>
      </div>

      {/* Blog Visibility Section */}
      <div className={styles.mainContainer}>
        <div className={styles.left}>
          {categories?.map((category) => (
            <div key={category.slug} className={styles.categoryBlogsSection}>
            <div className={styles.categoryHeading}>
                <h1 id={getCategoryId(category.name)}>{category.name}</h1>
                <Link href={`blogs/category/${category.name}`}>
                  View All &gt;
                            </Link>
            </div>
            <div className={styles.blogcard_main_container}>
              {data ? (
                data
                    ?.filter((item) => item.name === category.name)
                  .map((item) => {
                    if (item.Blogs.length > 0) {
                        return item.Blogs
                          .sort((a, b) => 
                            (b.pubDate || b.updatedAt) - (a.pubDate || a.updatedAt)
                      )
                        .slice(0, 2)
                          .map((blog) => (
                            <Link href={`/blogs/${blog.slug}`} key={blog._id}>
                              <BlogCard
                                Title={blog.Title}
                                slug={blog.slug}
                                thumbnail={blog.thumbnail}
                                pubDate={blog.pubDate || blog.updatedAt}
                                description={blog.description}
                                thumbnailAlt={blog.thumbnailAlt}
                                thumbnailBlurHash={blog.thumbnailBlurHash}
                              />
                            </Link>
                          ));
                    }
                    return (
                      <>
                          <BlogCardPlaceholder key={`${category.slug}-1`} />
                          <BlogCardPlaceholder key={`${category.slug}-2`} />
                      </>
                    );
                  })
              ) : (
                <>
                  <BlogCardPlaceholder />
                  <BlogCardPlaceholder />
                </>
              )}
            </div>
          </div>
          ))}
        </div>

        <div className={styles.right}>
          <div className={styles.right_heading}>
            <h3>Latest Posts</h3>
          </div>
          <div className={styles.latestBlogCard} rel="canonical">
            {latestBlog ? (
              <div
                onClick={() => {
                  router.push(`/blogs/${latestBlog.slug}`);
                }}
                key={latestBlog._id}
              >
                <BlogCard
                  Title={latestBlog.Title}
                  slug={latestBlog.slug}
                  thumbnail={latestBlog.thumbnail}
                  pubDate={latestBlog.pubDate || latestBlog.updatedAt}
                  description={latestBlog.description}
                  thumbnailAlt={latestBlog.thumbnailAlt}
                  thumbnailBlurHash={latestBlog.thumbnailBlurHash}
                />
              </div>
            ) : (
              <BlogCardPlaceholder />
            )}
          </div>

     
     
          <div className={styles.right_heading}>
            <h4 className={styles.uc}>Follow Us</h4>
          </div>
          <div>
            <div className={styles.social}>
              <Link
                passHref
                href="https://www.facebook.com/urbanculture.beauty"
                target="_blank"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </Link>
              <Link
                passHref
                href="https://www.instagram.com/urbanculture_beauty"
                target="_blank"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
              <Link
                passHref
                href="https://www.twitter.com/urbanculture_beauty"
                target="_blank"
              >
                <ion-icon name="logo-twitter"></ion-icon>
              </Link>
            </div>
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

export default Blogs;
