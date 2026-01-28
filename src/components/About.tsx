import { Target, TrendingUp, Lightbulb, User } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Career Orientation',
      description: 'Focused on building a strong foundation in finance and accounting with hands-on experience in financial reporting, data management, and organizational processes.',
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Vision',
      description: 'Aspiring to become a strategic finance leader who drives organizational growth through data-driven insights and innovative financial solutions.',
    },
    {
      icon: Lightbulb,
      title: 'Learning Mindset',
      description: 'Continuously expanding technical skills in financial modeling, data analytics, and business intelligence tools to stay ahead in the evolving finance landscape.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Who Am I
            </h2>
            <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex justify-center">
              <div className="w-full group">
                 <img
                   src="https://i.imgur.com/QO8EEax.png"
                   alt="Profile photo"
                   className="rounded-2xl shadow-2xl w-full transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
                   />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                I am a finance and accounting professional currently pursuing B.Com Honours at Ramanujan College, University of Delhi. 
                With a strong academic foundation and practical experience in financial operations, I am committed to excellence in every endeavor.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                My journey spans across various domains including financial reporting, data management, career development leadership, 
                and entrepreneurship initiatives. I believe in the power of strategic thinking combined with meticulous execution.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Through hands-on experience in accounting systems, financial analysis, and business operations, 
                I am building the expertise needed to make meaningful contributions to organizational success.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
