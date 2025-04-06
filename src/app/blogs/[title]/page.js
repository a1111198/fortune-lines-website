import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import BlogPost from "./BlogPost";

export async function generateMetadata({ params: promisedParams, searchParams }) {
  // Await the parameters before using them
  const params = await promisedParams;
  const title = decodeURIComponent(params?.title || searchParams.get("title"));

  
  console.log(title); 

  const metaData = await client.fetch(
    `*[_type == "Blogs" && slug.current == '${title}'] {
      metaTitle,
      metaDescription
    }`
  );

  return {
    title: metaData[0].metaTitle,
    description: metaData[0].metaDescription,
  };
}

export default async function Blog_Single({ params: promisedParams, searchParams }) {
  // Await the parameters before accessing their properties
  const params = await promisedParams;
  const slug = params?.title || searchParams.get("title");

  const blogPostData = await client.fetch(
    `*[_type == "Blogs" && slug.current == '${slug}'] {
      Title,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
      "thumbnailAlt": thumbnail.alt,
      pubDate,
      "updatedAt": _updatedAt,
      description,
      name,
      bodyOfBlog,
      faq,
      maincategory,
    }`
  );

  const latestBlogData = await client.fetch(
    `*[_type == "Blogs"] | order(_createdAt desc){
      Title,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
      "thumbnailAlt": thumbnail.alt,
      pubDate,
      "updatedAt": _updatedAt,
      description
    }[0]`
  );

  const generateSchema = (slug, blogPostData) => {
    const allImagesOfBodyOfBlog = [];

    for (const body of blogPostData[0].bodyOfBlog) {
      if (body._type === "image") {
        allImagesOfBodyOfBlog.push(
          imageUrlBuilder(client)
            .image(body)
            .width(1100)
            .fit("max")
            .auto("format")
            .url()
        );
      }
    }

    const formatDate = (date) => {
      const dateObj = new Date(date);
      return `${dateObj.getUTCFullYear()}-${String(dateObj.getUTCMonth() + 1).padStart(2, "0")}-${String(
        dateObj.getUTCDate()
      ).padStart(2, "0")}`;
    };

    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://urbanculture.me/blogs/${slug}`,
      },
      headline: `${blogPostData[0].Title}`,
      image: allImagesOfBodyOfBlog,
      author: {
        "@type": "Organization",
        name: "Urban Culture",
        url: "https://urbanculture.me/about-us",
      },
      publisher: {
        "@type": "Organization",
        name: "Urban Culture",
        logo: {
          "@type": "ImageObject",
          url: "https://urbanculture.me/",
        },
      },
      datePublished: formatDate(blogPostData[0].pubDate),
      dateModified: formatDate(blogPostData[0].updatedAt),
    };
  };

  return (
    <>
      <BlogPost blogPostData={blogPostData} latestBlogData={latestBlogData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSchema(slug, blogPostData)),
        }}
      />
    </>
  );
}
