import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#102446] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          <Link 
            href="/contact-us" 
            className="hover:underline"
          >
            Contact Us
          </Link>
          <Link 
            href="/refund-policy" 
            className="hover:underline"
          >
            Refund Policy
          </Link>
          <Link 
            href="/terms-and-conditions" 
            className="hover:underline"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 