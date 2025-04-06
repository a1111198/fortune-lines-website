import { client } from "@/sanity/client";

const sitemap = async () => {
  const baseUrl = "https://auriahq.com";

  // Get all Blog Post URLs
  const blogPosts = await client.fetch(`*[_type == "Blogs"]{
        "slug": slug.current,
    }`);
  const blogPostUrls = blogPosts.map((post) => {
    return {
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: new Date(),
      priority: 0.6,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      priority: 0.8,
    },
    // {
    //   url: `${baseUrl}/about-us`,
    //   lastModified: new Date(),
    //   priority: 0.8,
    // },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      priority: 0.8,
    },
    // {
    //   url: `${baseUrl}/user-data`,
    //   lastModified: new Date(),
    //   priority: 0.8,
    // },

    // {
    //   url: `${baseUrl}/location-information`,
    //   lastModified: new Date(),
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/disclaimer`,
    //   lastModified: new Date(),
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/my-bag`,
    //   lastModified: new Date(),
    //   priority: 0.8,
    // },

    {
      url: `${baseUrl}/blogs/category/lifestyle-impact`,
      lastModified: new Date(),
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blogs/category/product-science`,
      lastModified: new Date(),
      priority: 0.4,
    },

    {
      url: `${baseUrl}/blogs/category/myths-vs-facts`,
      lastModified: new Date(),
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blogs/category/skin-basics`,
      lastModified: new Date(),
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blogs/category/skin-conditions`,
      lastModified: new Date(),
      priority: 0.4,
    },
    ...blogPostUrls,
  ];
};

export default sitemap;
