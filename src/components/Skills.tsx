import React from 'react';
import { useAppData } from '../sanity/SanityDataContext';

export const Skills: React.FC = () => {
  const { skills } = useAppData();

  return (
    <section id="skills" className="py-24 md:py-32 bg-surface-alt/30 relative overflow-hidden">
      {/* 装饰背景 */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 font-quicksand">
            个人优势 <span className="text-accent-purple-hover">.</span>
          </h2>
          <div className="w-12 h-1.5 bg-gradient-to-r from-accent-pink to-accent-purple mx-auto rounded-full" />
          <p className="text-text-secondary mt-4 max-w-md mx-auto text-sm md:text-base">
            围绕 AI 训练师岗位核心诉求，构建全链路的数据与模型对齐能力。
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`card-healing p-8 flex flex-col justify-between ${skill.shadowColor} group`}
            >
              <div>
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 border-text ${skill.color} shadow-[2px_2px_0px_0px_rgba(74,62,61,1)] group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text font-quicksand group-hover:text-accent-purple-hover transition-colors duration-300">
                    {skill.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-6">
                  {skill.desc}
                </p>
              </div>

              {/* Points as Tags */}
              <div className="border-t-2 border-text/10 pt-6">
                <div className="flex flex-wrap gap-2">
                  {skill.points.map((point, pointIndex) => (
                    <span
                      key={pointIndex}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${skill.tagStyle} font-quicksand`}
                    >
                      {point}
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
