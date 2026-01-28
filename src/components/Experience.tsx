import { useEffect, useState } from 'react';
import { Briefcase, Users, Heart, ExternalLink } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Experience as ExperienceType } from '../types';

const Experience = () => {
  const [experiences, setExperiences] = useState<{
    internship: ExperienceType[];
    leadership: ExperienceType[];
    volunteering: ExperienceType[];
  }>({
    internship: [],
    leadership: [],
    volunteering: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const { data, error } = await supabase
        .from('experience')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;

      const grouped = {
        internship: data?.filter((exp) => exp.type === 'internship') || [],
        leadership: data?.filter((exp) => exp.type === 'leadership') || [],
        volunteering: data?.filter((exp) => exp.type === 'volunteering') || [],
      };

      setExperiences(grouped);
    } catch (error) {
      console.error('Error fetching experiences:', error);
    } finally {
      setLoading(false);
    }
  };

  const ExperienceCard = ({ exp }: { exp: ExperienceType }) => (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            {exp.title}
          </h3>
          <p className="text-lg text-slate-700 font-medium mb-1">
            {exp.organization}
          </p>
        </div>
        <span className="text-slate-600 font-medium mt-2 md:mt-0 whitespace-nowrap">
          {exp.start_date} - {exp.end_date}
        </span>
      </div>
      <ul className="space-y-2 mb-4">
        {exp.description.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-slate-600">
            <span className="text-slate-400 mt-1.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {exp.certificate_url && (
        <a
          href={exp.certificate_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium transition-colors"
        >
          View Certificate
          <ExternalLink size={16} />
        </a>
      )}
    </div>
  );

  if (loading) {
    return (
      <section id="experience" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
          </div>

          {experiences.internship.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Briefcase size={20} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Internships</h3>
              </div>
              <div className="grid gap-6">
                {experiences.internship.map((exp) => (
                  <ExperienceCard key={exp.id} exp={exp} />
                ))}
              </div>
            </div>
          )}

          {experiences.leadership.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Users size={20} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Leadership Experience</h3>
              </div>
              <div className="grid gap-6">
                {experiences.leadership.map((exp) => (
                  <ExperienceCard key={exp.id} exp={exp} />
                ))}
              </div>
            </div>
          )}

          {experiences.volunteering.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Heart size={20} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Volunteering Experience</h3>
              </div>
              <div className="grid gap-6">
                {experiences.volunteering.map((exp) => (
                  <ExperienceCard key={exp.id} exp={exp} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
