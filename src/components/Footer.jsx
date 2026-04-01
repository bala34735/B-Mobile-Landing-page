// Footer.jsx

import footerLogo from '../assets/images/footer_logo_main.webp';
import footerLogoxl from '../assets/images/footer_logo_dark.webp';
import twitter from '../assets/images/twitter_icon.webp';
import linkedin from '../assets/images/linkedin_icon.webp';
import facebook from '../assets/images/fb_icon.webp';
import youTube from '../assets/images/youtube_icon.webp';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 py-12 pb-4 grid gap-10 md:grid-cols-1">
        {/* Logo */}
          <img
            src={footerLogo}
            alt="Company Logo"
            className="footer_logo w-sm w-xs"
          />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-6 grid gap-10 md:grid-cols-3 footer_top_section">
        
        {/* Logo + Contact */}
        <div>
          

          <h2 className="text-green-500 font-semibold text-lg mb-4">
            Contact Us
          </h2>

          <address className="not-italic text-sm space-y-2 leading-relaxed">
            <p>250 Bobwhite Ct. Suite 300 <br />  
            Boise, Idaho 83706.<br />
           
              Email:{" "}
              <a href="#" className="hover:text-white">
                info@bmobileroute.com
              </a> <br />
            Phone: +1(888) 900-5667 <br />
            Office: (208) 331-5667
            </p>
          </address>
        </div>

        {/* Support Links */}
        <div>
          <h2 className="text-green-500 font-semibold text-lg mb-4">
            Support
          </h2>

         <ul className="space-y-2 text-sm font-semibold">
          <li>
            <a href="/about" className="hover:text-white">
              About Us
            </a>
          </li>

          <li>
            <a href="/blog" className="hover:text-white">
              Blog
            </a>
          </li>

          <li>
            <a href="/contact" className="hover:text-white">
              Contact
            </a>
          </li>

          <li>
            <a href="/support" className="hover:text-white">
              Request Support
            </a>
          </li>

          <li>
            <a href="/sitemap" className="hover:text-white">
              Sitemap
            </a>
          </li>

          <li>
            <a href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>
          </li>
        </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-green-500 font-semibold text-lg mb-4">
            Social Media
          </h2>

          <div className="flex items-center gap-4 social_media">
            <img
              src={linkedin}
              alt="LinkedIn"
              className="cursor-pointer hover:opacity-80"
            />
            <img
              src={facebook}
              alt="Facebook"
              className="cursor-pointer hover:opacity-80"
            />
            <img
              src={twitter}
              alt="Twitter"
              className="cursor-pointer hover:opacity-80"
            />
            <img
              src={youTube} 
              alt="YouTube"
              className="cursor-pointer hover:opacity-80"
            />
          </div>
        </div>
      </div>

      <div className="footer_btm flex justify-center px-6 py-12 grid gap-5 md:grid">
        <img
          src={footerLogoxl}
          alt="Background Logo"
          className="w-[100%] max-w-2xl"
        />

         <div className="py-6 text-center text-sm text-gray-500 relative z-10">
        <p>Copyright © bmobileroute 2025. All rights reserved</p>
      </div>
      </div>
     
    </footer>
  );
};

export default Footer;