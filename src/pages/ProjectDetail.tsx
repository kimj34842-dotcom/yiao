import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Layers } from 'lucide-react';
import { Layout } from '../components/Layout';
import { useAppData } from '../sanity/SanityDataContext';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { projects } = useAppData();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 pt-20">
          <p className="text-text-secondary font-quicksand text-lg">找不到这个项目 :(</p>
          <Link to="/" className="btn-primary text-sm py-2 px-6">返回首页</Link>
        </div>
      </Layout>
    );
  }


  return (
    <Layout>
      <main className="pt-28 pb-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">

          {/* 返回按钮 */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-text transition-colors duration-200 font-quicksand mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            返回精选项目
          </Link>

          {/* 项目头部 */}
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${project.tagStyle} font-quicksand text-xs font-bold mb-6`}>
            <Layers className="w-3 h-3" />
            精选项目
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-text font-quicksand leading-tight mb-6">
            {project.title}
          </h1>

          {/* 核心数据 */}
          <div className="flex items-center gap-3 mb-6">
            <span className={`text-3xl font-bold font-quicksand ${project.accentText}`}>
              {project.stat}
            </span>
            <span className="text-sm font-semibold text-text-secondary font-quicksand">
              {project.statLabel}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${project.tagStyle} font-quicksand`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 摘要 */}
          <div className={`${project.accentBg} border-l-4 ${project.accentText} rounded-r-2xl px-6 py-4 mb-10`}>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed italic">
              {project.desc}
            </p>
          </div>

          {/* 分隔线 */}
          <div className="h-px bg-border mb-10" />

          {/* 正文 */}
          <div className="space-y-7">
            {project.fullContent.map((paragraph, i) => (
              <p key={i} className="text-base md:text-lg text-text-secondary leading-[1.9] tracking-wide">
                {paragraph}
              </p>
            ))}
          </div>

          {/* 底部返回 */}
          <div className="mt-16 pt-8 border-t-2 border-border/50">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-text transition-colors duration-200 font-quicksand group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              返回精选项目
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};
