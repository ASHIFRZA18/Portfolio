import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/mock';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog & <span className="text-amber-500">Articles</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Thoughts, tutorials, and insights on web development
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-white dark:bg-black border-gray-200 dark:border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden group cursor-pointer"
            >
              {/* Post Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent to-transparent opacity-70"></div>
                <Badge
                  variant="outline"
                  className="absolute top-4 right-4 border-amber-500 text-amber-500 bg-white/80 dark:bg-black/80 backdrop-blur-sm"
                >
                  {post.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                {/* Post Meta */}
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* Post Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Post Excerpt */}
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <Button
                  variant="ghost"
                  className="text-amber-500 hover:text-amber-400 hover:bg-amber-500/10 p-0 h-auto font-semibold group/btn"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black px-8 py-6 text-lg transition-all transform hover:scale-105"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;