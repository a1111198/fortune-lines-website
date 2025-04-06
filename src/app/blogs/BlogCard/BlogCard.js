import styles from "./blogCard.module.css";
import Image from "next/image";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

const BlogCard = ({
  Title,
  thumbnail,
  pubDate,
  description,
  thumbnailAlt,
  thumbnailBlurHash,
}) => {
  // const router = useRouter();
  // const url = urlForImage(thumbnail).url();
  console.log("thumbnail", thumbnail, "thumbnailAlt", thumbnailAlt, "thumbnailBlurHash", thumbnailBlurHash);

  function formatDate(inputDate) {
    const dateObject = new Date(inputDate);

    const options = {
      year: "numeric",
      month: "short", // Use 'short' for abbreviated month names (e.g., 'Aug')
      day: "numeric",
    };

    return new Intl.DateTimeFormat("en-US", options).format(dateObject);
  }

  // const handleClick = () => {
  //   router.push(`/blogs/${slug.current}`);
  // };

  return (
    <>
      {/* <Link
        href={{
          pathname: `/blogs/${slug.current}`,
          query: {latestBlog: latestBlog},
        }}
      > */}
      <div className={styles.mainContainerOfBlogCard}>
        <Image loading="lazy"
          src={thumbnail}
          alt={thumbnailAlt}
          width={320}
          height={250}
        />
        <div className={styles.CardDetails}>
          <span className={styles.date}>{formatDate(pubDate)}</span>
          <h3 className={styles.BlogCardTitle}>{Title}</h3>
          <p className={styles.BlogCardDescription}>{description}</p>
          <span className={styles.readMore}>Read More</span>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};

export default BlogCard;
