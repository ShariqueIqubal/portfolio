import { Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sharique Iqubal</h3>
              <p className="text-slate-300">
                Finance & Accounting Professional dedicated to excellence and continuous growth.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#education" className="text-slate-300 hover:text-white transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-slate-300 hover:text-white transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/sharique-iqubal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:sharique.iqubal.51@gmail.com"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Sharique Iqubal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
