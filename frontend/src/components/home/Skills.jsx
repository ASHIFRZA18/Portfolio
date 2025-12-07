import React from 'react';
import { Code2, Boxes, Wrench, Lightbulb } from 'lucide-react';
import { skills } from '../../data/mock';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      items: skills.languages,
      color: 'amber',
    },
    {
      title: 'Frameworks & Libraries',
      icon: Boxes,
      items: skills.frameworks,
      color: 'orange',
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      items: skills.tools,
      color: 'amber',
    },
    {
      title: 'Concepts & Practices',
      icon: Lightbulb,
      items: skills.concepts,
      color: 'orange',
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-amber-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <CardContent className="p-8">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-500 transition-colors">
                      <Icon className="w-6 h-6 text-amber-500 group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-white dark:bg-black border border-gray-300 dark:border-amber-500/30 text-gray-700 dark:text-gray-300 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300 px-4 py-2 text-sm cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;