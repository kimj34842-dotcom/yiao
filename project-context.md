# Project Context: Camille's AI Trainer Portfolio

本项目是为大三在读的数据科学与大数据专业学生 Camille 打造的个人作品集网站，定位为 AI 训练师岗位求职。

## 1. 基本信息
- **姓名**: Camille
- **身份**: AI 训练师（在读大三，数据科学与大数据专业，目标求职 AI 训练师相关岗位）
- **技术栈**: React + Vite + Tailwind CSS + Framer Motion + Lucide React
- **视觉风格**: 浅色治愈风，参考 chiikawa 的视觉感受——米白底色、柔和粉紫色调、圆润字体、温柔不压抑。简约但有个人气质，不要像通用模板网站。

## 2. 页面结构
1. **全屏 Hero 首页**:
   - 动态背景：使用纯 CSS 动画实现柔和漂浮的粉紫色渐变光斑（性能极佳，无卡顿）。
   - 大标题：展示 Camille 和 AI Trainer 身份，带优雅的动效入场。
   - 顶部导航栏。
   - 联系按钮（锚点跳转到底部）。
2. **个人经历模块**:
   - 圆润头像区域（带粉紫呼吸灯边框）。
   - 个人介绍：大三在读，数据科学与大数据专业，专注 AI 训练方向。
   - 社交链接：预留邮箱、GitHub、LinkedIn 入口。
   - 数据卡片：展示 AI 训练师专属指标（如标注数据量、Prompt 优化数、参与项目数），带 hover 浮起和渐变边框。
3. **精选项目模块**:
   - 3 个大卡片展示，采用精致大卡片布局。
   - 卡片 hover 时：封面图微放大、卡片整体上浮、边框显现粉紫渐变。
   - 占位项目设计为 AI 训练师相关虚拟项目（如：多模态数据集清洗、Prompt 优化库、大模型对齐评估）。
4. **个人优势模块**:
   - 围绕 AI 训练师核心能力（数据标注与清洗、模型评估与反馈、Prompt 工程、数据分析）设计 4 张卡片。
   - 每张卡片配有专属的 Lucide 图标（粉紫色调）和微动效。
5. **底部联系方式模块**:
   - 做成整屏收尾页，大字 slogan 渐变展示。
   - 极简联系入口，版权信息。

## 3. 巧思设计点
- **复制邮箱/联系方式**: 复制邮箱/联系方式时，弹出治愈系小气泡提示 "已复制到剪贴板啦 (•͈⌔•͈⑅)" 并伴随微缩放动画。

## 4. 改动历史
- **2026-06-23**: 初始化 Vite + React + TypeScript 项目，安装 Tailwind CSS、Framer Motion、Lucide React，并创建 `project-context.md` 和 `DESIGN.md`。
- **2026-06-23**: 导航栏精修（方向 A）— 移除包裹所有导航项的胶囊硬框（`border-2 border-text rounded-full shadow`），导航项改为以 `gap-8` 独立浮动排列，hover 小圆点交互保留。
- **2026-06-23**: Hero 首屏精修（方向 B）— Eyebrow ping 动效改为 pulse-soft；H1 后插入四色角色 Tag 行（AI Trainer / Data Science / Prompt Engineering / RLHF）；副标题精简为两句专业表述并自然断行；CTA 入场时序整体后移 0.15s 配合新 Tag 行。
- **2026-06-23**: 个人经历精修（方向 B）— 左侧 Profile 区加入背景卡容器（surface-alt/40 底色 + 暖褐边框 + 吉伊粉 4px 硬投影，hover 上浮）；"AI TRAINER / DATA SCIENTIST" 纯文本改为双 Tag Badge；副标题拆为两句自然断行。
- **2026-06-23**: 精选项目精修（方向 B）— 修复左侧缩略图标题截断 bug（`split(' ')[0]` → 量化数字锚点）；各项目加入核心统计数字（5W+ / 100+ / 2000+）；右侧标题改为 `line-clamp-2` 完整显示；移除顶部 ExternalLink 图标按钮，新增"查看详情 →"文字链接（hover 时箭头 Q 弹右移）。
- **2026-06-23**: 新增学习笔记模块（方向 B）— 新建 `Notes.tsx`；大卡置顶（RLHF 吉伊粉，左侧装饰色块 + 右侧内容）+ 两张并排小卡（数据标注小八蓝 / Prompt 工程乌萨奇黄）；严格沿用 DESIGN.md 卡片规范（白底 + 暖褐边框 + 彩色硬投影 + 阅读笔记 → 箭头交互）；App.tsx 插入于 Projects 和 Skills 之间；Navbar 同步加入"笔记"入口。
- **2026-06-23**: 个人优势精修（方向 B）— 卡片标题加 `font-quicksand` + `group-hover:text-accent-purple-hover`；要点列表由"Sparkles 图标 + 文字"改为主题色 Tag 胶囊（各卡对应马卡龙四色），与全站 Tag 系统统一；移除 Sparkles 导入。
- **2026-06-23**: CTA 联系区精修（方向 B）— 移除 spacer hack div；Slogan 句末"."并入渐变 span；副文本精简为一句情感收尾语；新增三枚求职意向 Tag（AI 训练师吉伊粉 / 数据标注工程师小八蓝 / Prompt 工程师乌萨奇黄），位于副文本与 CTA 按钮之间。
- **2026-06-23**: Footer 精修（方向 B）— 中间版权文字替换为五项锚点导航快链（首页 · 经历 · 项目 · 笔记 · 优势）；版权信息独立下沉为第二行居中展示；去除 🤍 emoji 和重复的 Camille. 字段；Scroll to Top hover 色由 chiikawa-purple 统一为 usagi-yellow。
