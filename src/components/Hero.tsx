import { ArrowRight, Mail, FileText } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onProjectsClick: () => void;
}

const Hero = ({ onContactClick, onProjectsClick }: HeroProps) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 pt-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Finance & Accounting
            <span className="block text-slate-700">Professional</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-4 font-light">
            Aspiring High-Impact Finance Leader
          </p>
          <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building expertise in financial analysis, accounting systems, and strategic business decision-making
            to drive organizational growth and financial excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onProjectsClick}
              className="group flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              View Projects
              <FileText size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onContactClick}
              className="group flex items-center gap-2 border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-300 font-medium"
            >
              Contact Me
              <Mail size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
