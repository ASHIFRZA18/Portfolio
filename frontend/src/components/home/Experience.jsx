import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience, certificates } from '../../data/mock';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="text-amber-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            My professional journey and achievements
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <div className="space-y-8">
            {experience.map((exp) => (
              <Card
                key={exp.id}
                className="bg-white dark:bg-black border-gray-200 dark:border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start gap-4 mb-4 lg:mb-0">
                      <div className="p-3 bg-amber-500/10 rounded-lg">
                        <Briefcase className="w-6 h-6 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-amber-500 mb-2">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-3">
                    {exp.responsibilities.map((resp, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {resp}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <Card
                key={cert.id}
                className="bg-white dark:bg-black border-gray-200 dark:border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <Badge
                    variant="outline"
                    className="mb-4 border-amber-500 text-amber-500 bg-amber-500/10"
                  >
                    {cert.year}
                  </Badge>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.issuer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;