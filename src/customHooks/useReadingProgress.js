import { useEffect, useState } from "react";

const useReadingProgress = () => {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const scrollListener = () => {
      const currentProgress = window.scrollY;
      const pageHeight = document.body.scrollHeight - window.innerHeight;
      if (pageHeight) {
        setReadingProgress(
          Number((currentProgress / pageHeight).toFixed(2) * 100)
        );
      }
    };
    window.addEventListener("scroll", scrollListener);

    //   return readingProgress;
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return readingProgress;
};

export default useReadingProgress;
