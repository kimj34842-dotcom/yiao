import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen } from 'lucide-react';
import { Layout } from '../components/Layout';
import { useAppData } from '../sanity/SanityDataContext';

export const NoteDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { notes } = useAppData();
  const note = notes.find((n) => n.slug === slug);

  if (!note) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 pt-20">
          <p className="text-text-secondary font-quicksand text-lg">找不到这篇笔记 :(</p>
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
            to="/#notes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-text transition-colors duration-200 font-quicksand mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            返回学习笔记
          </Link>

          {/* 文章头部 */}
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${note.tagStyle} font-quicksand text-xs font-bold mb-6`}>
            <BookOpen className="w-3 h-3" />
            学习笔记
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-text font-quicksand leading-tight mb-6">
            {note.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-semibold text-text-tertiary font-quicksand">
            <span>{note.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {note.readTime} 阅读
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {note.tags.map((tag, i) => (
              <span
                key={i}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${note.tagStyle} font-quicksand`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 摘要 */}
          <div className={`${note.accentBg} border-l-4 ${note.accentIcon} rounded-r-2xl px-6 py-4 mb-10`}>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed italic">
              {note.summary}
            </p>
          </div>

          {/* 分隔线 */}
          <div className="h-px bg-border mb-10" />

          {/* 正文 */}
          <div className="space-y-7">
            {note.fullContent.map((paragraph, i) => (
              <p key={i} className="text-base md:text-lg text-text-secondary leading-[1.9] tracking-wide">
                {paragraph}
              </p>
            ))}
          </div>

          {/* 底部返回 */}
          <div className="mt-16 pt-8 border-t-2 border-border/50">
            <Link
              to="/#notes"
              className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-text transition-colors duration-200 font-quicksand group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              返回学习笔记
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};
