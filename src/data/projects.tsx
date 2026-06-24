import React from 'react';
import { Database, MessageSquare, CheckCircle2 } from 'lucide-react';

export interface ProjectData {
  slug: string;
  title: string;
  desc: string;
  fullContent: string[];
  tags: string[];
  icon: React.ReactNode;
  color: string;
  shadowColor: string;
  borderColor: string;
  stat: string;
  statLabel: string;
  tagStyle: string;
  accentBg: string;
  accentText: string;
}

export const projects: ProjectData[] = [
  {
    slug: 'medical-multimodal-dataset',
    title: '多模态医疗问答数据集清洗与构建',
    desc: '针对医疗垂直领域，清洗并构建了包含 5 万条高质量图文对的多模态问答数据集。通过设计启发式规则过滤低质文本，并使用 CLIP 模型剔除图文不匹配数据，使下游多模态大模型在医疗问答任务上的准确率提升了 12%。',
    fullContent: [
      '医疗垂直领域的多模态数据极度稀缺，且现有公开数据集质量参差不齐——图文不对应、描述过于模糊、含有错误诊断信息的样本比比皆是。这些噪声数据一旦进入训练集，轻则使模型在医疗图像理解上产生系统性偏差，重则输出具有误导性的诊断建议。本项目的核心目标，是在有限的原始数据中，通过高质量的清洗与筛选流程，最大化可用数据的密度和可靠性。',
      '清洗流程分为两个阶段。第一阶段是基于规则的文本过滤：通过启发式规则识别并剔除过短（信息量不足）、过长（通常是抓取噪声）、含有大量特殊字符或重复内容的文本；同时借助医学术语词库，过滤掉领域相关性过低的样本。第二阶段引入 CLIP 模型进行图文相关性评分：对每个图文对计算其视觉-文本相似度，低于阈值的样本（即"图文说的不是一件事"）被直接丢弃。两阶段组合，最终将原始数据集的噪声率从约 40% 降低至 8% 以内。',
      '清洗后的数据集共包含约 5 万条高质量图文对，覆盖放射影像、病理切片、皮肤科图像等多个医学影像子领域。将其用于微调下游多模态大模型后，在标准医疗 VQA 基准测试上，准确率较使用原始数据提升了 12 个百分点。更重要的是，模型在遇到图文不匹配的输入时，拒绝回答或给出保守答案的比例显著提升——这恰恰说明高质量数据不只是提升了模型的"会"，也提升了模型的"知道自己不会"。',
    ],
    tags: ['数据清洗', '多模态', 'CLIP', '医疗垂直领域'],
    icon: <Database className="w-6 h-6 text-[#2B5E75]" />,
    color: 'from-[#D2EBF7] to-[#E8DDF2]',
    shadowColor:
      'shadow-[4px_4px_0px_0px_var(--hachiware-blue)] hover:shadow-[8px_8px_0px_0px_var(--hachiware-blue)]',
    borderColor: 'hover:border-text',
    stat: '5W+',
    statLabel: '高质量图文对',
    tagStyle: 'bg-[#D2EBF7]/60 text-[#2B5E75] border-[#D2EBF7]',
    accentBg: 'bg-[#D2EBF7]/40',
    accentText: 'text-[#2B5E75]',
  },
  {
    slug: 'ecommerce-prompt-library',
    title: '面向电商客服的 Prompt 优化与评测库',
    desc: '为电商智能客服场景设计并优化了 100+ 套复杂 Prompt 模板（包含 Few-shot、CoT 及角色扮演）。构建了自动化评测流水线，从回复准确性、温柔度、合规性等 5 个维度对模型输出进行量化评估，降低了 15% 的幻觉率。',
    fullContent: [
      '电商客服场景对 AI 模型的要求异常苛刻：它需要同时处理情绪安抚（"我的包裹丢了"）、事实查询（"这件商品还有库存吗"）和政策解释（"七天无理由退换货怎么申请"）三类截然不同的对话模式，且经常在一次会话中快速切换。通用大模型在这种场景下最常见的失败模式是：把情绪化的投诉当作事实查询来处理，给出冷冰冰的流程性回答；或者在不确定库存信息时，倾向于给出模糊但"听起来合理"的答案，产生幻觉。',
      'Prompt 模板体系采用三层结构设计。最外层是"角色层"，用 System Prompt 定义客服人员的身份、语气基调和行为边界；中间层是"场景层"，针对退换货、物流查询、商品咨询等 12 个高频场景各自设计专属的 Few-shot 示例组，确保模型在不同场景下能快速切换"频道"；最内层是"约束层"，通过结构化的输出格式要求和明确的禁止项清单，控制模型不得编造订单信息、不得承诺无法兑现的赔偿方案。三层结构相互配合，覆盖了 100+ 套具体模板。',
      '自动化评测流水线从五个维度对模型输出进行量化打分：准确性（信息是否符合事实）、温柔度（语气是否恰当）、合规性（是否触碰政策红线）、完整性（是否遗漏关键信息）、简洁性（是否冗余啰嗦）。每个维度使用独立的评判 Prompt + 另一个大模型作为裁判（LLM-as-Judge），自动生成结构化评分报告。经过三轮迭代优化，最终版 Prompt 体系使幻觉率从基线的 23% 下降至 8%，降幅约 15 个百分点。',
    ],
    tags: ['Prompt 工程', 'Few-shot', 'CoT', '自动化评测'],
    icon: <MessageSquare className="w-6 h-6 text-[#7A5F13]" />,
    color: 'from-[#FFF1C5] to-[#FFD5E5]',
    shadowColor:
      'shadow-[4px_4px_0px_0px_var(--usagi-yellow)] hover:shadow-[8px_8px_0px_0px_var(--usagi-yellow)]',
    borderColor: 'hover:border-text',
    stat: '100+',
    statLabel: 'Prompt 模板套',
    tagStyle: 'bg-[#FFF1C5]/60 text-[#7A5F13] border-[#FFF1C5]',
    accentBg: 'bg-[#FFF1C5]/40',
    accentText: 'text-[#7A5F13]',
  },
  {
    slug: 'rlhf-alignment',
    title: '大语言模型 RLHF 人类反馈对齐训练',
    desc: '参与大模型微调阶段的 RLHF（人类反馈强化学习）数据标注与对齐工作。制定了详尽的标注指南，完成了 2000+ 条关于安全合规、事实性及逻辑推理的偏好排序标注，协助模型在安全合规性评测中提升了 18%。',
    fullContent: [
      '本项目是我在某 AI 公司实习期间参与的大模型对齐工程实践。我所在的小组负责模型 RLHF 阶段的数据标注与质量审核工作，具体任务是：对模型针对同一问题生成的多个回答进行偏好排序，并对涉及安全合规、事实性、逻辑推理三类高难度场景的边界样本进行专项标注。这类标注工作与普通 SFT 数据标注的本质区别在于——它没有"标准答案"，考验的是标注员对模型对齐目标的深度理解。',
      '安全合规类标注是整个项目中难度最高的部分。"安全"并非黑白分明：一个关于药物剂量的回答，对医疗专业人员是合理信息，对普通用户可能构成风险；一个关于历史事件的描述，措辞稍有偏差就可能引发误解。为此，我主导起草了一份 8000 字的标注指南，将安全合规场景细分为 14 个子类别，并为每个子类别提供了至少 3 个正例和 3 个反例，以及争议案例的裁决逻辑。指南经过两轮内部评审和标注员测试后定稿，使团队整体标注一致性（Cohen\'s Kappa）从 0.54 提升至 0.71。',
      '在 2000+ 条标注数据中，我个人负责约 700 条高难度样本的初标和审核工作。质量保障方面，我们采用"初标 → 交叉复核 → 专家仲裁"三级流程，确保每条最终入库的数据都经过至少两人确认。这批数据用于奖励模型的训练后，模型在内部安全合规性评测集上的得分提升了 18%，在逻辑推理类任务上的一致性也有明显改善。这段经历让我深刻体会到：高质量的人类反馈数据，是对齐工程中最稀缺、也最有价值的资源。',
    ],
    tags: ['RLHF', '偏好标注', '模型对齐', '安全合规'],
    icon: <CheckCircle2 className="w-6 h-6 text-[#853D55]" />,
    color: 'from-[#FFD5E5] to-[#E8DDF2]',
    shadowColor:
      'shadow-[4px_4px_0px_0px_var(--chiikawa-pink)] hover:shadow-[8px_8px_0px_0px_var(--chiikawa-pink)]',
    borderColor: 'hover:border-text',
    stat: '2000+',
    statLabel: '偏好标注条',
    tagStyle: 'bg-[#FFD5E5]/60 text-[#853D55] border-[#FFD5E5]',
    accentBg: 'bg-[#FFD5E5]/40',
    accentText: 'text-[#853D55]',
  },
];
