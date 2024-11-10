const Footer = () => {
  return (
    <>
      <footer className="bg-[#16312B] text-white py-4">
        <div className="container mx-auto px-4 border-t border-white mt-4 pt-4">
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:justify-between">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h1 className="text-4xl font-bold mb-2 font-oswald uppercase">Pejantara</h1>
            </div>
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h3 className="font-bold mb-2">About</h3>
              <ul>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Company Overview
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Press & Media
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h3 className="font-bold mb-2">Resources</h3>
              <ul>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Webinars & Event
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h3 className="font-bold mb-2">Support & Contact</h3>
              <ul>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Technical Support
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Feedback
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Community Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center text-center md:flex-row md:justify-between border-t border-white mt-4 pt-4 text-sm">
            <p className="mb-2 md:mb-0">Copyright © 2024 Agritech by Infinite Learning</p>
            <div className="flex gap-5">
              <a href="#" className="hover:underline">
                Term Of Use
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
