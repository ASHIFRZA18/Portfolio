import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/mock';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-amber-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of my latest work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-zinc-900 via-transparent to-transparent opacity-60"></div>
                <Badge
                  variant="outline"
                  className="absolute top-4 right-4 border-amber-500 text-amber-500 bg-white/80 dark:bg-black/80 backdrop-blur-sm"
                >
                  {project.year}
                </Badge>
              </div>

              <CardContent className="p-8">
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-500 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-white dark:bg-black border border-gray-300 dark:border-amber-500/30 text-gray-700 dark:text-gray-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition-all"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-amber-500 hover:bg-amber-600 text-black transition-all"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;