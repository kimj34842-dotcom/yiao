import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { useAppData } from '../sanity/SanityDataContext';

export const Projects: React.FC = () => {
  const { projects } = useAppData();

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* 装饰背景 */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-accent-pink/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 font-quicksand">
            精选项目 <span className="text-accent-pink-hover">.</span>
          </h2>
          <div className="w-12 h-1.5 bg-gradient-to-r from-accent-pink to-accent-purple mx-auto rounded-full" />
          <p className="text-text-secondary mt-4 max-w-md mx-auto text-sm md:text-base">
            在校期间参与的 AI 训练与数据工程实践，展示专业实操能力。
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card-healing p-8 md:p-10 flex flex-col lg:flex-row gap-8 items-stretch ${project.borderColor} ${project.shadowColor} group`}
            >
              {/* Left: Project Cover Placeholder with Healing Gradient */}
              <div className={`lg:w-1/3 rounded-2xl bg-gradient-to-tr ${project.color} border-2 border-text/15 p-8 flex flex-col justify-between relative overflow-hidden min-h-[220px] lg:min-h-auto shadow-[3px_3px_0px_0px_rgba(74,62,61,0.15)]`}>
                {/* Background grid pattern for texture */}
                <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#4A3E3D_1px,transparent_1px),linear-gradient(to_bottom,#4A3E3D_1px,transparent_1px)] bg-[size:20px_20px]" />
                
                {/* Background floating sparkles */}
                <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <Sparkles className="w-5 h-5 text-text" />
                </div>
                
                {/* Project Icon Container with multi-layer shadow */}
                <div className="w-14 h-14 rounded-2xl bg-surface border-2 border-text flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(74,62,61,1)] z-10 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>

                {/* Cover Text */}
                <div className="mt-auto z-10">
                  <span className="text-xs font-bold text-text-secondary tracking-widest font-quicksand block mb-2">
                    PROJECT 0{index + 1}
                  </span>
                  <p className="text-4xl font-bold text-text font-quicksand leading-none mb-1">
                    {project.stat}
                  </p>
                  <p className="text-xs font-semibold text-text-secondary font-quicksand">
                    {project.statLabel}
                  </p>
                </div>
              </div>

              {/* Right: Project Details */}
              <div className="lg:w-2/3 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-text group-hover:text-accent-purple-hover transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-4 line-clamp-3">
                    {project.desc}
                  </p>

                  {/* 查看详情 */}
                  <Link to={`/projects/${project.slug}`} className="flex items-center gap-1 text-sm font-semibold text-text-secondary hover:text-text transition-colors duration-300 mb-6 w-fit group/link">
                    <span className="font-quicksand">查看详情</span>
                    <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1.5">→</span>
                  </Link>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${project.tagStyle} font-quicksand`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
