"use client";
// import { useRouter } from 'next/navigation'
import React from "react";
import styles from "./blogSingle.module.css";
import Link from "next/link";
import Script from "next/script";
import BlogCard from "../BlogCard/BlogCard";
import BlogCardPlaceholder from "../BlogCard/BlogCardPlaceholder";
import CustomPortableText from "@/components/CustomPortableText";
import TableOfContent from "./TableOfContent";
import { getChildrenText } from "./TableOfContent";
import speakingurl from "speakingurl";
import useReadingProgress from "@/customHooks/useReadingProgress";

const BlogSingle = ({ blogPostData, latestBlogData }) => {
  // const slug = params.title || window.location.pathname.split("/")[2];
  // const [currentBlogData, setCurrentBlogData] = useState(null);
  // const [latestBlog, setLatestBlog] = useState(null);
  const currentBlogData = blogPostData[0];
  console.log("currentBlogData", currentBlogData.bodyOfBlog);
  const latestBlog = latestBlogData;
  const readingProgress = useReadingProgress();

  function formatDate(date) {
    const dateObject = new Date(date);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return dateObject.toLocaleDateString(undefined, options);
  }

  const filter = (ast, match) =>
    ast?.reduce((acc, node) => {
      if (match(node)) acc.push(node);
      if (node.children) acc.push(...filter(node.children, match));
      return acc;
    }, []);

  // const findHeadings = (ast) => filter(ast, (node) => /h\d/.test(node.style));

  const findHeadings = (ast) =>
    filter(ast, (node) => /h\d/.test(node.style))?.map((node) => {
      const text = getChildrenText(node);
      const slug = speakingurl(text);

      return { ...node, text, slug };
    });

  const get = (object, path) => path.reduce((prev, curr) => prev[curr], object);
  const getObjectPath = (path) =>
    path.length === 0
      ? path
      : ["subheadings"].concat(path.join(".subheadings.").split("."));

  const parseOutline = (ast) => {
    const outline = { subheadings: [] };
    const headings = findHeadings(ast);
    const path = [];
    let lastLevel = 0;

    headings?.forEach((heading) => {
      const level = Number(heading.style.slice(1));
      heading.subheadings = [];

      if (level < lastLevel)
        for (let i = lastLevel; i >= level; i--) path.pop();
      else if (level === lastLevel) path.pop();

      const prop = get(outline, getObjectPath(path));
      prop.subheadings.push(heading);
      path.push(prop.subheadings.length - 1);
      lastLevel = level;
    });

    return outline.subheadings;
  };

  // console.log(parseOutline(currentBlogData?.bodyOfBlog));
  const outline = parseOutline(currentBlogData?.bodyOfBlog);

  const handleClick = (e) => {
    e.preventDefault();
    // document.querySelector(".arrow").classList.toggle("open");
    document.querySelector(".TOC_Dropdown").classList.toggle("open");
  };
  return (
    <>
      <style>
        {`
          .open {
            transform: scale(1);
            opacity: 1;
            z-index: 100 !important;
          }
        `}
      </style>
      <div className={styles.header}>
        <span
          style={{ transform: `translateX(${readingProgress - 100}%)` }}
          className="absolute bg-[#d61d72] h-1 w-full bottom-0"
        />
      </div>
      <div className={styles.TOC_onlyForMobile}>
        <div
          className={`${styles.toggleButton} toggleButton`}
          onClick={handleClick}
        >
          <span>Table of Content</span>
          <ion-icon
            name="chevron-down-outline"
            className={styles.arrow}
          ></ion-icon>
        </div>
        <div className={`${styles.TOC_Dropdown} TOC_Dropdown`}>
          <TableOfContent outline={outline} />
        </div>
      </div>

      <div className={styles.blogContainer}>
        <div className={styles.right}>
          <h2 className="text-2xl font-bold pb-3">On this Page</h2>
          <TableOfContent outline={outline} />
          <div className={styles.right_heading}>
            <h3>Latest Posts</h3>
          </div>
          <div className={styles.latestBlogCard}>
            {latestBlog ? (
              <Link
                href={{
                  pathname: `/blogs/${latestBlog.slug}`,
                  query: { latestBlog: "latestBlog" },
                }}
                key={latestBlog._id}
              >
                <BlogCard
                  key={latestBlog._id}
                  Title={latestBlog.Title}
                  slug={latestBlog.slug}
                  thumbnail={latestBlog.thumbnail}
                  pubDate={latestBlog.pubDate || latestBlog.updatedAt}
                  description={latestBlog.description}
                  thumbnailAlt={latestBlog.thumbnailAlt}
                  latestBlog={latestBlog}
                />
              </Link>
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
        <div className={styles.left}>
          <div className={styles.blogPath}>
            <Link href="/blogs">Blogs</Link>
            <span>/</span>
            <Link
              href={`/blogs/category/${currentBlogData?.maincategory}`}
              className={styles.currentBlogPath}
            >
              {currentBlogData?.maincategory}
            </Link>
            <span>/</span>
            <Link
              href={`/blogs/${currentBlogData?.slug}`}
              className={styles.currentBlogPath}
            >
              {currentBlogData?.Title}
            </Link>
          </div>
          <div className={styles.blogTitle}>
            <h1>{currentBlogData?.Title}</h1>
          </div>
          <div className={styles.blogDate}>
            <span>
              Published at:{" "}
              {formatDate(currentBlogData?.pubDate) ||
                formatDate(currentBlogData?.updatedAt)}
            </span>
          </div>
          <div className={styles.blogContent}>
            <CustomPortableText value={currentBlogData?.bodyOfBlog} />
          </div>
          <div className={styles.blogContent}>
            <CustomPortableText value={currentBlogData?.faq} />
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

export default BlogSingle;
