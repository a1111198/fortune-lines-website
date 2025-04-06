import styles from "./blogCardPlaceholder.module.css";

const BlogCard = () => {
  return (
    <>
      <div className={styles.mainContainerOfBlogCard}>
        <div className={`${styles.ImageSection} ${styles.shimmerBG}`}></div>
        <div className={styles.CardDetails}>
          <h1 className={`${styles.date} ${styles.shimmerBG}`}></h1>
          <h3 className={`${styles.BlogCardTitle} ${styles.shimmerBG}`}></h3>
          <h3
            className={`${styles.BlogCardTitleHalf} ${styles.shimmerBG}`}
          ></h3>
          <p
            className={`${styles.BlogCardDescription} ${styles.shimmerBG}`}
          ></p>
          <p
            className={`${styles.BlogCardDescription} ${styles.shimmerBG}`}
          ></p>
          <p
            className={`${styles.BlogCardDescriptionHalf} ${styles.shimmerBG}`}
          ></p>
          <h1 className={`${styles.readMore} ${styles.shimmerBG}`}></h1>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
