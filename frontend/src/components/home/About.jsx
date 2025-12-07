import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { about, education } from '../../data/mock';
import { Card, CardContent } from '../ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-900 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white mb-4">
            About <span className="text-amber-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-400 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Get to know more about my background, skills, and passion for development
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Description */}
          <div>
            <h3 className="text-2xl font-semibold text-white dark:text-white mb-6">
              Who I Am
            </h3>
            <p className="text-gray-300 dark:text-gray-300 text-lg leading-relaxed mb-6">
              {about.description}
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-300 dark:text-gray-300">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-white dark:text-white mb-6">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <Card
                  key={edu.id}
                  className="bg-black border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-amber-500">
                        {edu.degree}
                      </h4>
                      <span className="text-sm text-gray-400 dark:text-gray-400 bg-amber-500/10 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-white dark:text-white mb-2">{edu.institution}</p>
                    <p className="text-gray-400 dark:text-gray-400 text-sm">
                      Grade: <span className="text-amber-500 font-semibold">{edu.grade}</span>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;