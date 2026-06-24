import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Brain, Database } from 'lucide-react';
import { useAppData } from '../sanity/SanityDataContext';
import { colorMap } from '../sanity/colorMap';

export const Hero: React.FC = () => {
  const { siteSettings } = useAppData();
  const { tagline, heroTags } = siteSettings;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 治愈系漂浮背景光斑 (Aurora Background) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 粉色光斑 */}
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-chiikawa-pink/30 blur-[80px] md:blur-[120px] animate-float-slow" />
        {/* 紫色光斑 */}
        <div className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-chiikawa-purple/25 blur-[80px] md:blur-[120px] animate-float-medium" />
        {/* 辅助暖黄光斑 */}
        <div className="absolute top-1/2 right-1/3 w-[200px] md:w-[350px] h-[200px] md:h-[350px] rounded-full bg-usagi-yellow/20 blur-[60px] md:blur-[100px] animate-float-fast" />
      </div>

      {/* 装饰性小元素 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 right-[10%] md:right-1/4 animate-pulse-soft">
          <Sparkles className="w-6 h-6 text-accent-pink" />
        </div>
        <div className="absolute bottom-1/3 left-[10%] md:left-1/4 animate-pulse-soft" style={{ animationDelay: '1.5s' }}>
          <Brain className="w-5 h-5 text-accent-purple" />
        </div>
        <div className="absolute top-1/4 left-[15%] md:left-1/3 animate-pulse-soft" style={{ animationDelay: '0.8s' }}>
          <Database className="w-4 h-4 text-accent-pink/80" />
        </div>
      </div>

      {/* 漂浮花瓣与小圆点 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 花瓣 — 粉 左上 */}
        <div className="absolute top-[13%] left-[7%] animate-float-slow">
          <div className="w-2 h-3 rounded-full bg-chiikawa-pink/55 rotate-[20deg]" />
        </div>
        {/* 花瓣 — 紫 右上 */}
        <div className="absolute top-[22%] right-[9%] animate-float-medium" style={{ animationDelay: '1.3s' }}>
          <div className="w-1.5 h-2.5 rounded-full bg-chiikawa-purple/50 rotate-[-25deg]" />
        </div>
        {/* 花瓣 — 蓝 右中，仅桌面可见 */}
        <div className="absolute top-[42%] right-[11%] hidden md:block animate-float-fast" style={{ animationDelay: '0.6s' }}>
          <div className="w-2 h-3 rounded-full bg-chiikawa-blue/55 rotate-[40deg]" />
        </div>
        {/* 花瓣 — 粉 左下 */}
        <div className="absolute top-[70%] left-[8%] animate-float-slow" style={{ animationDelay: '3.5s' }}>
          <div className="w-2.5 h-3.5 rounded-full bg-chiikawa-pink/45 rotate-[-12deg]" />
        </div>
        {/* 花瓣 — 紫 右下 */}
        <div className="absolute top-[65%] right-[7%] animate-float-medium" style={{ animationDelay: '2s' }}>
          <div className="w-2 h-3 rounded-full bg-chiikawa-purple/40 rotate-[55deg]" />
        </div>
        {/* 小圆点 — 黄 左中 */}
        <div className="absolute top-[55%] left-[5%] w-2 h-2 rounded-full bg-chiikawa-yellow/65 animate-float-slow" style={{ animationDelay: '2.8s' }} />
        {/* 小圆点 — 粉 左上偏内 */}
        <div className="absolute top-[30%] left-[13%] w-1.5 h-1.5 rounded-full bg-chiikawa-pink/60 animate-float-medium" style={{ animationDelay: '4.1s' }} />
      </div>

      {/* 主体内容 */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center z-10 flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border-2 border-text shadow-[2px_2px_0px_0px_rgba(74,62,61,1)] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent-pink animate-pulse-soft" />
          <span className="text-xs md:text-sm font-bold text-text-secondary tracking-wider font-quicksand">
            HELLO, I'M CAMILLE
          </span>
        </motion.div>

        {/* 英文大标题 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 font-quicksand leading-tight"
        >
          <span className="bg-gradient-to-r from-accent-pink-hover to-accent-purple-hover bg-clip-text text-transparent">
            {tagline}
          </span>
        </motion.h1>

        {/* 角色 Tag 行 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {heroTags.map((tag, i) => {
            const cm = colorMap[tag.color];
            return (
              <span key={tag._key ?? i} className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${cm.tagStyle} font-quicksand`}>
                {tag.label}
              </span>
            );
          })}
        </motion.div>

        {/* CTA 按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a href="#experience" className="btn-primary flex items-center gap-2">
            了解我的经历
            <ArrowDown className="w-4 h-4" />
          </a>
          <a href="#contact" className="btn-secondary">
            与我聊聊
          </a>
        </motion.div>
      </div>

      {/* 底部滚动提示 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs font-semibold text-text-tertiary tracking-widest font-quicksand">
          SCROLL DOWN
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1.5 h-1.5 rounded-full bg-accent-purple"
          />
        </div>
      </div>
    </section>
  );
};
