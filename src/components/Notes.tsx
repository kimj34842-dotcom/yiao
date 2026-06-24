import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock } from 'lucide-react';
import { useAppData } from '../sanity/SanityDataContext';

export const Notes: React.FC = () => {
  const { notes } = useAppData();
  const [featured, ...rest] = notes;

  if (!featured) return null;

  return (
    <section id="notes" className="py-24 md:py-32 relative overflow-hidden">
      {/* 装饰背景 */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-chiikawa-yellow/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-chiikawa-pink/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 font-quicksand">
            学习笔记 <span className="text-[#7A5F13]">.</span>
          </h2>
          <div className="w-12 h-1.5 bg-gradient-to-r from-accent-pink to-accent-purple mx-auto rounded-full" />
          <p className="text-text-secondary mt-4 max-w-md mx-auto text-sm md:text-base">
            记录 AI 训练师学习路上的思考与实践，持续更新中。
          </p>
        </div>

        {/* Featured Card */}
        <div className={`card-healing p-0 overflow-hidden flex flex-col lg:flex-row mb-8 ${featured.shadowColor} hover:border-text group`}>
          {/* Left accent block */}
          <div className={`lg:w-1/4 ${featured.accentBg} p-8 flex flex-col justify-between relative overflow-hidden min-h-[160px] lg:min-h-auto`}>
            <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#4A3E3D_1px,transparent_1px),linear-gradient(to_bottom,#4A3E3D_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="w-12 h-12 rounded-2xl bg-surface border-2 border-text flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(74,62,61,1)] z-10 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className={`w-5 h-5 ${featured.accentIcon}`} />
            </div>
            <div className="z-10">
              <span className="text-[10px] font-bold text-text-secondary tracking-widest font-quicksand block mb-1.5">LATEST</span>
              <div className="flex items-center gap-1 text-xs font-semibold text-text-secondary font-quicksand">
                <Clock className="w-3 h-3" />
                <span>{featured.readTime} 阅读</span>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="h-px lg:h-auto lg:w-px bg-text/10 lg:self-stretch" />

          {/* Right content */}
          <div className="lg:w-3/4 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-text-tertiary font-quicksand block mb-3">
                {featured.date}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-text mb-3 group-hover:text-accent-purple-hover transition-colors duration-300 line-clamp-2 font-quicksand">
                {featured.title}
              </h3>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-4 line-clamp-3">
                {featured.summary}
              </p>
              <Link to={`/notes/${featured.slug}`} className="flex items-center gap-1 text-sm font-semibold text-text-secondary hover:text-text transition-colors duration-300 mb-6 w-fit group/link">
                <span className="font-quicksand">阅读笔记</span>
                <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1.5">→</span>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 pt-5 border-t-2 border-text/10">
              {featured.tags.map((tag, i) => (
                <span key={i} className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${featured.tagStyle} font-quicksand`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Two smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rest.map((note, index) => (
            <div key={index} className={`card-healing p-8 flex flex-col justify-between ${note.shadowColor} hover:border-text group`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-text-tertiary font-quicksand">{note.date}</span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-text-tertiary font-quicksand">
                    <Clock className="w-3 h-3" />
                    <span>{note.readTime} 阅读</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-text mb-3 group-hover:text-accent-purple-hover transition-colors duration-300 line-clamp-2 font-quicksand">
                  {note.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-5 line-clamp-2">
                  {note.summary}
                </p>
                <Link to={`/notes/${note.slug}`} className="flex items-center gap-1 text-sm font-semibold text-text-secondary hover:text-text transition-colors duration-300 w-fit group/link">
                  <span className="font-quicksand">阅读笔记</span>
                  <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1.5">→</span>
                </Link>
              </div>
              <div className="flex flex-wrap gap-2 pt-5 border-t-2 border-text/10 mt-5">
                {note.tags.map((tag, i) => (
                  <span key={i} className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${note.tagStyle} font-quicksand`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
