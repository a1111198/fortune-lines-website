import SmoothScrollLink from "@/components/SmoothScrollLink";

export const getChildrenText = (props) =>
  props.children
    .map((node) => (typeof node === "string" ? node : node.text || ""))
    .join("");

const TableOfContent = (props) => (
  <>
    <ul className="">
      {props.outline.map((heading, index) => {
        // console.log("a" + heading.slug);

        return (
          <li
            key={index}
            className="ml-7 list-disc text-[#333] hover:text-[#d61d72]"
          >
            <SmoothScrollLink href={"#a" + heading.slug} topMargin={15}>
              {getChildrenText(heading)}
            </SmoothScrollLink>
            {heading.subheadings.length > 0 && (
              <TableOfContent outline={heading.subheadings} />
            )}
          </li>
        );
      })}
    </ul>
  </>
);

export default TableOfContent;
