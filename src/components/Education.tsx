import { useEffect, useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Education as EducationType } from '../types';

const Education = () => {
  const [education, setEducation] = useState<EducationType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = async () => {
    try {
      const { data, error } = await supabase
        .from('education')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setEducation(data || []);
    } catch (error) {
      console.error('Error fetching education:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="education" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="group bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-slate-900">
                        {edu.course}
                      </h3>
                      <span className="text-lg font-semibold text-slate-600 mt-2 md:mt-0">
                        {edu.grade}
                      </span>
                    </div>
                    <p className="text-lg text-slate-700 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-slate-600 mb-3">
                      {edu.passing_year}
                    </p>
                    {edu.key_focus && (
                      <p className="text-slate-600 italic">
                        {edu.key_focus}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
