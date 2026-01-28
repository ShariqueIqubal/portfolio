import { useEffect, useState } from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Publication } from '../types';

const Publications = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    try {
      const { data, error } = await supabase
        .from('publications')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setPublications(data || []);
    } catch (error) {
      console.error('Error fetching publications:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="publications" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="publications" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Publications
            </h2>
            <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
          </div>

          {publications.length === 0 ? (
            <div className="text-center text-slate-600">
              <p className="text-lg">Publications will be added soon.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {publications.map((publication) => (
                <div
                  key={publication.id}
                  className="group bg-slate-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FileText size={24} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                        <h3 className="text-xl font-bold text-slate-900">
                          {publication.title}
                        </h3>
                        <span className="text-slate-600 font-medium mt-1 md:mt-0">
                          {publication.year}
                        </span>
                      </div>
                      <span className="inline-block px-3 py-1 bg-white text-slate-700 text-sm rounded-full font-medium mb-4">
                        {publication.type}
                      </span>
                      <div>
                        <a
                          href={publication.publication_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium transition-colors"
                        >
                          View Publication
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Publications;
