import {
  Hotel,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="dark:bg-[#020617] border-t dark:border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-tr from-accent to-blue-600 rounded-lg">
                <Hotel className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-bold dark:text-white tracking-wide">
                ORRIO
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the future of hospitality today. We combine luxury with
              cutting-edge technology to provide an unforgettable stay.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="dark:text-white font-bold mb-6">Company</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                "About Orrio",
                "Careers",
                "Press Center",
                "Sustainability",
                "Partner with us",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="dark:text-white font-bold mb-6">Support</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                "Help Center",
                "Safety Information",
                "Cancellation Options",
                "Our COVID-19 Response",
                "Report a Concern",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="dark:text-white font-bold mb-6">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">
              Join our newsletter to get the latest futuristic deals.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="dark:bg-white/5 border dark:border-white/10 rounded-lg px-4 py-2 text-sm dark:text-white w-full focus:outline-none focus:border-primary"
              />
              <button className="bg-primary hover:bg-blue-600 dark:text-white p-2 rounded-lg transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 ORRIO Hospitality Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
