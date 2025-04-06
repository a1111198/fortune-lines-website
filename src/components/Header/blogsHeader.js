import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const BlogsHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo/Brand with sun icon */}
        <div className={styles.brandContainer}>
        
          <Link href="/" className={styles.brand}>
          <Image 
            src="/icons/logoblack.svg"  // Replace with your sun icon path
            alt="Sun Icon"
            width={113}
            height={32}
          />
          </Link>
        </div>

        {/* Social Links with SVG icons */}
        <div className={styles.socialLinks}>
          <Link href="https://x.com/auriaverse" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/icons/twitter.svg"  // Replace with your X/Twitter icon path
              alt="Twitter"
              width={20}
              height={20}
            />
          </Link>
          <Link href="https://www.linkedin.com/company/auriahq" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/icons/linkedIn.svg"  // Replace with your LinkedIn icon path
              alt="LinkedIn"
              width={20}
              height={20}
            />
          </Link>
          <Link href="https://www.instagram.com/auriaverse" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/icons/instagram.svg"  // Replace with your Instagram icon path
              alt="Instagram"
              width={20}
              height={20}
            />
          </Link>
          <button className={styles.blogButton}>
            Blog
          </button>
        </div>
      </nav>
    </header>
  );
};

export default BlogsHeader; 