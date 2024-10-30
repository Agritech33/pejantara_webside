const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-white py-4">
        <div className="container mx-auto px-4 border-t border-white mt-4 pt-4">
          <div className="flex justify-between">
            <div className="w-1/3">
              <img
                src="./logo header.png"
                alt="Company logo with a green leaf and the text 'pejantara' underneath"
                className="mb-4"
                width="150"
                height="150"
              />
            </div>
            <div className="w-1/3">
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
            <div className="w-1/3">
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
            <div className="w-1/3">
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
          <div className="flex justify-between border-t border-white mt-4 pt-4 text-center text-sm">
            <p>Copyright © 2024 Agritech by Infinite Learning</p>
            <div className="">
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
        </div>
      </footer>
    </>
  );
};

export default Footer;
