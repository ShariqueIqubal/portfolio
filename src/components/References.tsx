import { useEffect, useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Reference } from '../types';

const References = () => {
  const [references, setReferences] = useState<Reference[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReferences();
  }, []);

  const fetchReferences = async () => {
    try {
      const { data, error } = await supabase
        .from('professional_references')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setReferences(data || []);
    } catch (error) {
      console.error('Error fetching references:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="references" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="references" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              References
            </h2>
            <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
          </div>

          {references.length === 0 ? (
            <div className="text-center text-slate-600">
              <p className="text-lg">Professional references will be added soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {references.map((reference) => (
                <div
                  key={reference.id}
                  className="group bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {reference.name}
                  </h3>
                  <p className="text-slate-700 font-medium mb-1">
                    {reference.designation}
                  </p>
                  <p className="text-slate-600 mb-4">
                    {reference.organization}
                  </p>
                  <a
                    href={reference.letter_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium transition-colors"
                  >
                    View Letter
                    <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default References;
