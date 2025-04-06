import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import { PortableText } from "@portabletext/react";
import speakingurl from "speakingurl";

const CustomPortableText = ({ value, }) => {
  console.log(value);
  const portableTextComponents = {
    types: {
      image: ({ value, }) => {
        const { width, height } = getImageDimensions(value);
        const imageUrl = imageUrlBuilder(client)
          .image(value)
          .width(1100)
          .fit("max")
          .auto("format")
          .url();
        return (
          <div className="my-3">
            <Image loading="lazy"
              src={imageUrl}
              alt={value.alt}
              width={700}
              height={700}
              style={{
                display: "block",
                aspectRatio: width / height,
              }}
            
            />
          </div>
        );
      },
    },
    block: {
      h1: ({ children }) => {
        return <h1 className="text-3xl font-bold py-6  !z-0">{children}</h1>;
      },
      h2: ({ children }) => {
        return (
          <h2
            className=" text-2xl font-bold py-2 text-[#333] !z-0"
            id={`a${speakingurl(children[0])}`}
          >
            {children}
          </h2>
        );
      },
      h3: ({ children }) => {
        return (
          <h3
            className=" text-[20px] py-2 font-semibold text-[#333] !z-0"
            id={`a${speakingurl(children[0])}`}
          >
            {children}
          </h3>
        );
      },
      h4: ({ children }) => {
        return (
          <h4
            className="text-lg font-semibold text-[#333]"
            id={`${speakingurl(children[0])}`}
          >
            {children}
          </h4>
        );
      },
      h5: ({ children }) => (
        <h5
          className="text-base font-semibold text-[#333]"
          id={`${speakingurl(children[0])}`}
        >
          {children}
        </h5>
      ),
      h6: ({ children }) => (
        <h6
          className="text-sm font-semibold text-[#333]"
          id={`${speakingurl(children[0])}`}
        >
          {children}
        </h6>
      ),
      normal: ({ children }) => (
        <p className="text-base text-justify pr-4 py-1 text-[#555] !z-0">
          {children}
        </p>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="my-1.5 text-[#333]">{children}</ul>
      ),
      number: ({ children }) => <ol className="my-4">{children}</ol>,
    },
    listItem: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => (
        <li className="list-disc ml-12 text-[#555] py-1">{children}</li>
      ),
      // Ex. 2: rendering custom list items
      checkmarks: ({ children }) => <li> {children}</li>,
      number: ({ children }) => (
        <li className="list-decimal ml-12 text-[#555] py-1">{children}</li>
      ),
    },
  };
  return <PortableText value={value} components={portableTextComponents} />;
};

export default CustomPortableText;
