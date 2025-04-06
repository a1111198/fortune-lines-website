import React from "react";
import Blogcardpage from './blogcardpage';

function SubCategory(props) {
  // console.log("SubCatogy props are: ",props)
  return (
      <>
      <Blogcardpage
        blogimg={props.subs.thumbnail}
        // blogimg={blog1}
        date={props.subs.pubDate}
        blogheading={props.subs.title}
        blogcontent={props.subs.description}
        bloglink={props.subs.link}
        cat={props.cat}
      /> 
      </>
  );
}

export default SubCategory;
