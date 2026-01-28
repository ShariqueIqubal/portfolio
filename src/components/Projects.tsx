import { useEffect, useState } from 'react';
import { Folder, ExternalLink } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Project } from '../types';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="projects" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Projects
            </h2>
            <div className="w-24 h-1 bg-slate-800 mx-auto"></div>
          </div>

          {projects.length === 0 ? (
            <div className="text-center text-slate-600">
              <p className="text-lg">Projects will be added soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Folder size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools_used.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  {project.project_url && (
                    <a
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium transition-colors"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
