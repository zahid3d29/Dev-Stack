import Logo from "../assets/img/logo-text.png";

const Footer = () => {
  return (
    // Four column footer with links and copyright information
    <footer className="bg-white text-gray-600 py-16">
      <div className="footer container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <img
            src={Logo}
            alt="Dev-stack Logo"
            className="mb-2"
          />
          <p className="text-sm">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="social-link flex gap-2 mt-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Github
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Product</h4>
          <ul className="text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tecnologies
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Projects
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Company</h4>
          <ul className="text-sm">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contacts
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Legal</h4>
          <ul className="text-sm">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center mt-4 py-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* left side  */}
        <div className="copyright text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Dev-stack. All rights reserved.
        </div>
        {/* Right side */}
        <div className="legal-links text-sm text-gray-400">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:underline">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
