import React from 'react';
import styles from '../../styles/Blogs_Page/blogcardpage.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Blogcardpage(props) {
	const router = useRouter();
	function makeDescription(html_string) {
		const parser = new DOMParser();
		const doc = parser.parseFromString(html_string, 'text/html');
		const firstP = doc.querySelector('p');
		return firstP.innerHTML.substring(0, 100) + '...';
	}
	const handleClick = () => {
		localStorage.setItem('blog_thumbnail', props.blogimg);
		localStorage.setItem('blog_title', props.blogheading);
		localStorage.setItem('blog_content', props.blogcontent);
		localStorage.setItem('blog_date', props.date);
		localStorage.setItem('blog_cat', props.cat);
		router.push(`/blog/${props.blogheading.toLowerCase().replace(/ /g, '-')}`);
	};
	// console.log("Props of BlogCardPage are: ", props)
	return (
		<div className={styles.blogcard_container} style={{ margin: '0px' }}>
			<div className={styles.img}>
				<Image loading="lazy"  src={props.blogimg} alt="Blog Image" width={335} height={250} />
			</div>

			<div className={styles.blogcard_content}>
				<h1>{props.date}</h1>
				<h3>{props.blogheading}</h3>
				<p>{makeDescription(props.blogcontent)}</p>
				<button>
					{/* <Link
						key={props.blogheading}
						href={`/blog/${props.blogheading.toLowerCase().replace(/ /g, '-')}`}
						rel="noopener noreferrer"
						>
						</Link> */}
						<span onClick={handleClick}>Read More</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className={styles.arrow}
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}

export default Blogcardpage;
