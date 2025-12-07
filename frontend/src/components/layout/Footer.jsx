import React from 'react';
import { Github, Linkedin, Instagram, Palette, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/mock';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  palette: Palette,
  'message-circle': MessageCircle,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-amber-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-amber-500 mb-4 font-mono">&lt;AR/&gt;</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Full-Stack Developer crafting modern web experiences with passion and precision.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon] || Github;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-amber-500/10 hover:bg-amber-500 text-amber-500 hover:text-black transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-amber-500" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-amber-500 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-amber-500" />
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-amber-500 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-amber-500" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-amber-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Designed & Built with <span className="text-amber-500">passion</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;