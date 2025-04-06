import Link from "next/link";

const SmoothScrollLink = ({ href, children, topMargin }) => {
    const handleClick = (e) => {
        e.preventDefault();

        let target = document.querySelector(href);

        if (target) {
            let targetPosition = target.getBoundingClientRect().top + window.scrollY;
            // let viewportHeight = window.innerHeight;
            let scrollToPosition = targetPosition - topMargin;

            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Link passHref href={href} onClick={handleClick}>
            {children}
        </Link>
    );
};

export default SmoothScrollLink;