import React from 'react';
import { Mail, BookOpen, Calendar } from 'lucide-react';
import { useAppData } from '../sanity/SanityDataContext';

interface ExperienceProps {
  onCopyEmail: (e: React.MouseEvent) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onCopyEmail }) => {
  const { siteSettings } = useAppData();
  const {
    displayName, bio, avatarUrl, githubUrl, linkedinUrl,
    stats, educationTitle, educationPeriod, educationStatus, educationDesc,
  } = siteSettings;

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: '邮箱联系',
      onClick: onCopyEmail,
      tooltip: '点击复制邮箱',
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
      label: 'GitHub',
      href: githubUrl,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      label: 'LinkedIn',
      href: linkedinUrl,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-surface-alt/30 relative overflow-hidden">
      {/* 装饰背景 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 font-quicksand">
            个人经历 <span className="text-accent-purple-hover">.</span>
          </h2>
          <div className="w-12 h-1.5 bg-gradient-to-r from-accent-pink to-accent-purple mx-auto rounded-full" />
          <p className="text-text-secondary mt-4 max-w-md mx-auto text-sm md:text-base">
            扎实的数据科学背景，专注于大语言模型的数据工程与对齐训练。
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-surface-alt/40 border-2 border-text/15 shadow-[4px_4px_0px_0px_var(--chiikawa-pink)] hover:shadow-[8px_8px_0px_0px_var(--chiikawa-pink)] hover:-translate-y-1 rounded-3xl p-8 flex flex-col items-center transition-all duration-500">

              <div className="relative group">
                {/* 头像呼吸灯边框 */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-accent-pink to-accent-purple rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-soft" />

                {/* 头像 */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-surface border-4 border-bg overflow-hidden flex items-center justify-center">
                  {avatarUrl ? (
                    <img src={avatarUrl} alt={displayName} className="w-full h-full object-cover" />
                  ) : (
                    <svg className="w-full h-full text-accent-pink/40 p-4" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="100" r="80" fill="#FAF8F5" />
                      <circle cx="100" cy="85" r="30" fill="currentColor" />
                      <path d="M50 150C50 120 72.3858 105 100 105C127.614 105 150 120 150 150" fill="currentColor" />
                      <circle cx="85" cy="85" r="4" fill="#4A3E3D" />
                      <circle cx="115" cy="85" r="4" fill="#4A3E3D" />
                      <path d="M95 95C95 95 98 98 100 98C102 98 105 95 105 95" stroke="#4A3E3D" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="75" cy="92" r="8" fill="#FFC5D9" opacity="0.6" />
                      <circle cx="125" cy="92" r="8" fill="#FFC5D9" opacity="0.6" />
                    </svg>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-text mt-6 font-quicksand">{displayName}</h3>

              {/* 角色 Tag Badges */}
              <div className="flex gap-2 mt-2 flex-wrap justify-center">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full border bg-[#FFD5E5]/60 text-[#853D55] border-[#FFD5E5] font-quicksand">AI Trainer</span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full border bg-[#D2EBF7]/60 text-[#2B5E75] border-[#D2EBF7] font-quicksand">Data Scientist</span>
              </div>

              {/* 个人介绍文字 */}
              <div className="mt-5 text-center">
                {bio.split('\n').map((line, i) => (
                  <p key={i} className="text-text-secondary text-sm md:text-base leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>

              {/* 社交链接 */}
              <div className="flex gap-4 mt-7">
                {socialLinks.map((link, index) => {
                  const buttonClass = "p-3 rounded-full bg-surface border-2 border-text text-text-secondary hover:text-text hover:bg-usagi-yellow transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(74,62,61,1)] hover:shadow-[4px_4px_0px_0px_rgba(74,62,61,1)] hover:-translate-y-0.5 flex items-center justify-center relative group";
                  if (link.onClick) {
                    return (
                      <button
                        key={index}
                        onClick={link.onClick}
                        className={buttonClass}
                        title={link.tooltip}
                      >
                        {link.icon}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-text text-bg text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                          {link.tooltip}
                        </span>
                      </button>
                    );
                  }
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target={link.target}
                      rel={link.rel}
                      className={buttonClass}
                      title={link.label}
                    >
                      {link.icon}
                    </a>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Right: Stats & Education */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Education Card */}
            <div className="card-healing flex flex-col md:flex-row gap-6 items-start md:items-center shadow-[4px_4px_0px_0px_var(--momonga-purple)] hover:shadow-[8px_8px_0px_0px_var(--momonga-purple)] hover:border-text">
              <div className="p-4 rounded-2xl bg-[#E8DDF2]/60 border-2 border-text text-text flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(74,62,61,1)]">
                <BookOpen className="w-6 h-6 text-[#63437A]" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-text-tertiary mb-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {educationPeriod}
                  </span>
                  {educationStatus && (
                    <span className="px-2 py-0.5 rounded-full bg-[#FFF1C5]/60 text-[#7A5F13] border border-[#FFF1C5] text-[10px] font-bold">{educationStatus}</span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-text">{educationTitle}</h4>
                <p className="text-sm text-text-secondary mt-1">
                  {educationDesc}
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => {
                // 统计卡片多色硬投影
                let shadowColor = "shadow-[4px_4px_0px_0px_var(--hachiware-blue)] hover:shadow-[8px_8px_0px_0px_var(--hachiware-blue)]";
                if (index === 1) shadowColor = "shadow-[4px_4px_0px_0px_var(--usagi-yellow)] hover:shadow-[8px_8px_0px_0px_var(--usagi-yellow)]";
                if (index === 2) shadowColor = "shadow-[4px_4px_0px_0px_var(--chiikawa-pink)] hover:shadow-[8px_8px_0px_0px_var(--chiikawa-pink)]";
                if (index === 3) shadowColor = "shadow-[4px_4px_0px_0px_var(--momonga-purple)] hover:shadow-[8px_8px_0px_0px_var(--momonga-purple)]";

                return (
                  <div
                    key={index}
                    className={`card-healing p-6 flex flex-col justify-between hover:border-text ${shadowColor} group`}
                  >
                    <div>
                      <span className="text-xs font-semibold text-text-tertiary block mb-2">
                        {stat.label}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl md:text-4xl font-bold text-text font-quicksand group-hover:bg-gradient-to-r group-hover:from-accent-pink-hover group-hover:to-accent-purple-hover group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {stat.value}
                        </span>
                        {stat.unit && (
                          <span className="text-sm font-semibold text-text-secondary">
                            {stat.unit}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-text-secondary mt-3 border-t-2 border-text/10 pt-3">
                      {stat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
