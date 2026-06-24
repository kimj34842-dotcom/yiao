/**
 * Sanity 初始数据导入脚本
 * 运行前需要在 manage.sanity.io → 你的项目 → API → Tokens 创建 Editor 权限的 token，
 * 然后在 .env.local 里写入 SANITY_TOKEN=你的token
 * 执行：node --env-file=.env.local scripts/seed.mjs
 */
import { createClient } from '@sanity/client'

// ── 读取 token ────────────────────────────────────────────────
const token = process.env.SANITY_TOKEN
if (!token) {
  console.error('\n❌  缺少 SANITY_TOKEN\n')
  console.error('步骤：')
  console.error('  1. 打开 https://www.sanity.io/manage → 你的项目 → API → Tokens')
  console.error('  2. 点 "Add API token"，权限选 Editor，复制 token')
  console.error('  3. 在项目根目录的 .env.local 文件里添加一行：')
  console.error('       SANITY_TOKEN=粘贴你的token')
  console.error('  4. 重新执行：node --env-file=.env.local scripts/seed.mjs\n')
  process.exit(1)
}

const client = createClient({
  projectId: '8r77iooa',
  dataset: 'production',
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// ── 工具：生成数组 _key ───────────────────────────────────────
let _seq = 0
const k = () => `k${(++_seq).toString(36).padStart(4, '0')}`

// ─────────────────────────────────────────────────────────────
// 1. 网站设置（singleton）
// ─────────────────────────────────────────────────────────────
const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  displayName: 'Camille',
  tagline: '嗨，很高兴见到你！',
  bio: '大三在读，数据科学与大数据专业。\n将数据科学的严谨性与 AI 训练的创造性相结合，致力于构建高质量数据闭环，驱动大模型在垂直场景精准落地。',
  email: 'camille_aitrainer@163.com',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  ctaHeadline: '寻找实习 / 全职机会，欢迎联系！',
  heroTags: [
    { _key: k(), label: 'AI Trainer',         color: 'pink'   },
    { _key: k(), label: 'Data Science',        color: 'blue'   },
    { _key: k(), label: 'Prompt Engineering',  color: 'yellow' },
    { _key: k(), label: 'RLHF',                color: 'purple' },
  ],
  jobTags: [
    { _key: k(), label: 'AI 训练师',      color: 'pink'   },
    { _key: k(), label: '数据标注工程师', color: 'blue'   },
    { _key: k(), label: 'Prompt 工程师',  color: 'yellow' },
  ],
  stats: [
    { _key: k(), label: '标注与清洗数据', value: '10万+',    unit: '条', desc: '多模态/文本高质量数据集' },
    { _key: k(), label: 'Prompt 优化迭代', value: '500+',   unit: '次', desc: '覆盖主流大模型与复杂场景' },
    { _key: k(), label: '参与 AI 项目',   value: '5+',     unit: '个', desc: '包含数据集构建与对齐评估' },
    { _key: k(), label: '专业绩点排名',   value: 'Top 10%', unit: '',  desc: '数据科学与大数据专业' },
  ],
  educationTitle: '数据科学与大数据技术专业',
  educationPeriod: '2023 - 至今',
  educationStatus: '在读大三',
  educationDesc: '系统学习了机器学习、深度学习、数据挖掘、统计学及 Python 数据分析，为 AI 训练奠定了坚实的数据底座。',
}

// ─────────────────────────────────────────────────────────────
// 2. 精选项目
// ─────────────────────────────────────────────────────────────
const projects = [
  {
    _id: 'project-medical-multimodal-dataset',
    _type: 'project',
    order: 1,
    title: '多模态医疗问答数据集清洗与构建',
    slug: { _type: 'slug', current: 'medical-multimodal-dataset' },
    themeColor: 'blue',
    iconName: 'Database',
    stat: '5W+',
    statLabel: '高质量图文对',
    tags: ['数据清洗', '多模态', 'CLIP', '医疗垂直领域'],
    desc: '针对医疗垂直领域，清洗并构建了包含 5 万条高质量图文对的多模态问答数据集。通过设计启发式规则过滤低质文本，并使用 CLIP 模型剔除图文不匹配数据，使下游多模态大模型在医疗问答任务上的准确率提升了 12%。',
    fullContent: `医疗垂直领域的多模态数据极度稀缺，且现有公开数据集质量参差不齐——图文不对应、描述过于模糊、含有错误诊断信息的样本比比皆是。这些噪声数据一旦进入训练集，轻则使模型在医疗图像理解上产生系统性偏差，重则输出具有误导性的诊断建议。本项目的核心目标，是在有限的原始数据中，通过高质量的清洗与筛选流程，最大化可用数据的密度和可靠性。

清洗流程分为两个阶段。第一阶段是基于规则的文本过滤：通过启发式规则识别并剔除过短（信息量不足）、过长（通常是抓取噪声）、含有大量特殊字符或重复内容的文本；同时借助医学术语词库，过滤掉领域相关性过低的样本。第二阶段引入 CLIP 模型进行图文相关性评分：对每个图文对计算其视觉-文本相似度，低于阈值的样本（即"图文说的不是一件事"）被直接丢弃。两阶段组合，最终将原始数据集的噪声率从约 40% 降低至 8% 以内。

清洗后的数据集共包含约 5 万条高质量图文对，覆盖放射影像、病理切片、皮肤科图像等多个医学影像子领域。将其用于微调下游多模态大模型后，在标准医疗 VQA 基准测试上，准确率较使用原始数据提升了 12 个百分点。更重要的是，模型在遇到图文不匹配的输入时，拒绝回答或给出保守答案的比例显著提升——这恰恰说明高质量数据不只是提升了模型的"会"，也提升了模型的"知道自己不会"。`,
  },
  {
    _id: 'project-ecommerce-prompt-library',
    _type: 'project',
    order: 2,
    title: '面向电商客服的 Prompt 优化与评测库',
    slug: { _type: 'slug', current: 'ecommerce-prompt-library' },
    themeColor: 'yellow',
    iconName: 'MessageSquare',
    stat: '100+',
    statLabel: 'Prompt 模板套',
    tags: ['Prompt 工程', 'Few-shot', 'CoT', '自动化评测'],
    desc: '为电商智能客服场景设计并优化了 100+ 套复杂 Prompt 模板（包含 Few-shot、CoT 及角色扮演）。构建了自动化评测流水线，从回复准确性、温柔度、合规性等 5 个维度对模型输出进行量化评估，降低了 15% 的幻觉率。',
    fullContent: `电商客服场景对 AI 模型的要求异常苛刻：它需要同时处理情绪安抚（"我的包裹丢了"）、事实查询（"这件商品还有库存吗"）和政策解释（"七天无理由退换货怎么申请"）三类截然不同的对话模式，且经常在一次会话中快速切换。通用大模型在这种场景下最常见的失败模式是：把情绪化的投诉当作事实查询来处理，给出冷冰冰的流程性回答；或者在不确定库存信息时，倾向于给出模糊但"听起来合理"的答案，产生幻觉。

Prompt 模板体系采用三层结构设计。最外层是"角色层"，用 System Prompt 定义客服人员的身份、语气基调和行为边界；中间层是"场景层"，针对退换货、物流查询、商品咨询等 12 个高频场景各自设计专属的 Few-shot 示例组，确保模型在不同场景下能快速切换"频道"；最内层是"约束层"，通过结构化的输出格式要求和明确的禁止项清单，控制模型不得编造订单信息、不得承诺无法兑现的赔偿方案。三层结构相互配合，覆盖了 100+ 套具体模板。

自动化评测流水线从五个维度对模型输出进行量化打分：准确性（信息是否符合事实）、温柔度（语气是否恰当）、合规性（是否触碰政策红线）、完整性（是否遗漏关键信息）、简洁性（是否冗余啰嗦）。每个维度使用独立的评判 Prompt + 另一个大模型作为裁判（LLM-as-Judge），自动生成结构化评分报告。经过三轮迭代优化，最终版 Prompt 体系使幻觉率从基线的 23% 下降至 8%，降幅约 15 个百分点。`,
  },
  {
    _id: 'project-rlhf-alignment',
    _type: 'project',
    order: 3,
    title: '大语言模型 RLHF 人类反馈对齐训练',
    slug: { _type: 'slug', current: 'rlhf-alignment' },
    themeColor: 'pink',
    iconName: 'CheckCircle2',
    stat: '2000+',
    statLabel: '偏好标注条',
    tags: ['RLHF', '偏好标注', '模型对齐', '安全合规'],
    desc: '参与大模型微调阶段的 RLHF（人类反馈强化学习）数据标注与对齐工作。制定了详尽的标注指南，完成了 2000+ 条关于安全合规、事实性及逻辑推理的偏好排序标注，协助模型在安全合规性评测中提升了 18%。',
    fullContent: `本项目是我在某 AI 公司实习期间参与的大模型对齐工程实践。我所在的小组负责模型 RLHF 阶段的数据标注与质量审核工作，具体任务是：对模型针对同一问题生成的多个回答进行偏好排序，并对涉及安全合规、事实性、逻辑推理三类高难度场景的边界样本进行专项标注。这类标注工作与普通 SFT 数据标注的本质区别在于——它没有"标准答案"，考验的是标注员对模型对齐目标的深度理解。

安全合规类标注是整个项目中难度最高的部分。"安全"并非黑白分明：一个关于药物剂量的回答，对医疗专业人员是合理信息，对普通用户可能构成风险；一个关于历史事件的描述，措辞稍有偏差就可能引发误解。为此，我主导起草了一份 8000 字的标注指南，将安全合规场景细分为 14 个子类别，并为每个子类别提供了至少 3 个正例和 3 个反例，以及争议案例的裁决逻辑。指南经过两轮内部评审和标注员测试后定稿，使团队整体标注一致性（Cohen's Kappa）从 0.54 提升至 0.71。

在 2000+ 条标注数据中，我个人负责约 700 条高难度样本的初标和审核工作。质量保障方面，我们采用"初标 → 交叉复核 → 专家仲裁"三级流程，确保每条最终入库的数据都经过至少两人确认。这批数据用于奖励模型的训练后，模型在内部安全合规性评测集上的得分提升了 18%，在逻辑推理类任务上的一致性也有明显改善。这段经历让我深刻体会到：高质量的人类反馈数据，是对齐工程中最稀缺、也最有价值的资源。`,
  },
]

// ─────────────────────────────────────────────────────────────
// 3. 学习笔记
// ─────────────────────────────────────────────────────────────
const notes = [
  {
    _id: 'note-rlhf-intro',
    _type: 'note',
    title: 'RLHF 入门：从偏好标注到奖励模型',
    slug: { _type: 'slug', current: 'rlhf-intro' },
    date: '2026-06-10',
    readTime: '8 min',
    themeColor: 'pink',
    tags: ['RLHF', '偏好标注', '模型对齐'],
    summary: '从零理解 RLHF 的完整流程——为什么需要人类反馈、偏好数据如何采集与标注、奖励模型如何训练，以及它如何指导策略模型走向对齐。',
    fullContent: `预训练让大模型学会了语言，SFT（监督微调）让它学会了对话格式，但这两步都无法解决一个根本问题：模型并不真正"知道"什么样的回答是人类认为好的。RLHF（基于人类反馈的强化学习）正是为了填补这一鸿沟而设计的。它的核心思想是：与其让模型去拟合人工写好的"标准答案"，不如让真实的人类偏好信号直接驱动模型的优化方向。这在处理主观性强、难以用规则量化的任务时（比如"这个回答够不够安全"、"这段解释够不够清晰"）显得尤为关键。

偏好数据的采集是 RLHF 流程中最耗人力的环节，也是质量最难保证的地方。标注员面对的是同一个问题的两个（或多个）模型回答，需要判断哪个更好，或者进行细粒度的维度打分（准确性、安全性、流畅度等）。在实践中，"哪个更好"往往不是非此即彼的——两个回答可能各有优劣，比较式判断本身就包含大量主观成分。因此高质量的偏好数据集，离不开精细的标注指南、充分的标注员培训，以及多人交叉验证的质量控制机制。一致性低于阈值的样本通常需要重标或丢弃。

奖励模型（Reward Model，RM）本质上是一个分类或回归模型，它以（问题, 回答）对为输入，输出一个标量分数来表示这个回答的"人类偏好程度"。训练数据来自偏好标注：模型学习到"被人类选中的回答"应该得到更高分数。有了可微的奖励信号之后，就可以用 PPO（Proximal Policy Optimization）等强化学习算法来更新策略模型——每次策略模型生成回答，奖励模型给出评分，策略模型据此调整参数，逐步朝着"更受人类喜欢"的方向收敛。整个闭环听起来优雅，但奖励欺骗（reward hacking）、分布偏移等问题也始终是工程落地时需要警惕的隐患。`,
  },
  {
    _id: 'note-data-annotation-tips',
    _type: 'note',
    title: '数据标注心得：构建高质量 SFT 数据集的那些坑',
    slug: { _type: 'slug', current: 'data-annotation-tips' },
    date: '2026-05-28',
    readTime: '6 min',
    themeColor: 'blue',
    tags: ['数据标注', '数据清洗', 'SFT'],
    summary: '在实际标注工作中踩过的坑：标注指南的粒度、标注一致性的维护、质量抽检机制，以及如何让数据集真正"喂得进去"。',
    fullContent: `标注指南的粒度是一门平衡的艺术。写得太细，标注员会陷入机械执行，遇到指南未覆盖的边界情况就不知所措，甚至为了"符合规则"而写出语义奇怪的回答；写得太粗，不同标注员对同一类样本的处理方式会大相径庭，最终数据集里充满了风格不一致的噪声。我在实践中摸索出的原则是：用案例而非规则来定义标准——与其写"回答应当简洁"，不如给出三个"太啰嗦"的反例和三个"正好"的正例，让标注员建立具体的感知锚点。

标注一致性（Inter-Annotator Agreement，IAA）是衡量数据集质量的重要指标，但它往往被轻视。在实操中，我采用的做法是：每批任务中混入 5%–10% 的"黄金样本"（已有标准答案的题目），用来实时监控标注员的准确率；同时对每个任务抽取 15% 进行双盲交叉标注，用 Cohen's Kappa 系数量化一致性，低于 0.6 的标注员需要重新培训再上岗。这一机制初期成本较高，但能有效防止数据集在后期出现系统性偏差，让模型训练的结果更可预测。

"喂得进去"不只是格式正确，更意味着数据的多样性和覆盖率足够好。一个常见的失误是：数据集在某个场景下样本过于集中（比如 80% 都是问答式对话），模型训练后在这个场景表现优秀，但泛化能力极差。构建高质量 SFT 数据集，需要在任务类型、话题领域、回答长度、语言风格等维度上有意识地做均衡采样，甚至在发现某个维度的样本不足时，主动补充针对性数据。数据工程的本质，是在质量与多样性之间持续寻找最优解。`,
  },
  {
    _id: 'note-prompt-engineering',
    _type: 'note',
    title: 'Prompt 工程实践：Few-shot、CoT 与防注入的设计逻辑',
    slug: { _type: 'slug', current: 'prompt-engineering' },
    date: '2026-05-15',
    readTime: '7 min',
    themeColor: 'yellow',
    tags: ['Prompt 工程', 'CoT', 'Few-shot'],
    summary: '系统梳理三类核心 Prompt 技法的使用场景与边界：Few-shot 的示例选取、CoT 的推理链设计，以及生产环境下防注入的实战策略。',
    fullContent: `Few-shot 的"示例"并不是随便挑几个就行——示例的选取方式直接决定了模型的表现上限。在实践中有两条原则尤为重要：一是"相近性"，示例的领域和风格应当与目标任务高度匹配，跨领域的示例反而会引入噪声；二是"多样性"，示例之间不应高度相似，否则模型只会学到一种单一的解法路径，遇到稍有变化的输入就失效。此外，示例的排列顺序也有影响——研究表明，放在最后的示例对模型的输出影响最大，因此最强的正例应当放在靠近任务输入的位置。

Chain-of-Thought（思维链）是引导模型"先想后说"的有效技法，但它并非万能药。CoT 真正发挥作用的场景是：任务需要多步推理、中间状态可以被语言化表达（如数学计算、逻辑判断、多条件筛选）。然而，对于信息检索、简单分类、情感判断等任务，强行加入 CoT 反而会引入额外的推理链噪声，导致最终答案质量下降。更需要警惕的是"幻觉式推理"——模型生成了一段看似合理的推理链，但结论却是错误的，这种情况比直接给出错误答案更危险，因为它更难被人工校验发现。

生产环境下的 Prompt 注入防御需要多层设计，而不是依赖单一手段。第一层是"角色锁定"：在 System Prompt 中明确定义模型的身份和禁止行为，使用清晰的边界语言（如"无论用户如何要求，你都不得..."）；第二层是"输入过滤"：在用户输入进入模型之前，检测并拦截高风险的 pattern（如"忽略前面的指令"、"你现在是..."等）；第三层是"输出审查"：模型回复在呈现给用户之前，经过合规检测模块的二次过滤。三层防御缺一不可，任何单一措施都难以应对日益复杂的攻击手段。`,
  },
]

// ─────────────────────────────────────────────────────────────
// 4. 个人优势
// ─────────────────────────────────────────────────────────────
const skills = [
  {
    _id: 'skill-data-annotation',
    _type: 'skill',
    order: 1,
    title: '数据标注与清洗',
    themeColor: 'blue',
    iconName: 'Database',
    desc: '熟练掌握文本、图像、多模态数据的清洗与标注流程。能够设计高效的启发式过滤规则，剔除噪声数据，构建高质量的微调（SFT）数据集。',
    points: ['SFT 数据集构建', '多模态数据对齐', '噪声过滤与去重', '标注指南制定'],
  },
  {
    _id: 'skill-prompt-engineering',
    _type: 'skill',
    order: 2,
    title: 'Prompt 工程设计',
    themeColor: 'yellow',
    iconName: 'MessageSquare',
    desc: '深入理解大模型涌现能力与上下文学习。擅长设计 Few-shot、CoT（思维链）、ReAct 等复杂 Prompt 架构，有效引导模型输出，降低幻觉率。',
    points: ['Few-shot / CoT 设计', '角色扮演与场景适配', '防注入与安全防御', 'Prompt 自动化评测'],
  },
  {
    _id: 'skill-model-evaluation',
    _type: 'skill',
    order: 3,
    title: '模型评估与反馈',
    themeColor: 'pink',
    iconName: 'CheckCircle2',
    desc: '掌握主流大模型的评测方法。能够设计多维度的量化评估指标，进行人工偏好标注（RLHF），通过精准的反馈闭环驱动模型迭代对齐。',
    points: ['多维度量化评测', 'RLHF 偏好标注', 'Bad Case 归因分析', '模型安全合规评估'],
  },
  {
    _id: 'skill-data-analysis',
    _type: 'skill',
    order: 4,
    title: '数据分析与挖掘',
    themeColor: 'purple',
    iconName: 'BarChart3',
    desc: '具备扎实的数据科学功底。熟练使用 Python (Pandas, NumPy) 进行探索性数据分析（EDA），能够从海量交互日志中挖掘用户意图与模型缺陷。',
    points: ['Python 数据分析', 'EDA 探索性分析', '交互日志意图挖掘', '可视化图表呈现'],
  },
]

// ─────────────────────────────────────────────────────────────
// 执行导入
// ─────────────────────────────────────────────────────────────
const allDocs = [siteSettings, ...projects, ...notes, ...skills]

console.log(`\n🚀 开始向 Sanity 导入 ${allDocs.length} 个文档...\n`)

let succeeded = 0
let skipped = 0

for (const doc of allDocs) {
  try {
    const existing = await client.getDocument(doc._id)
    if (existing) {
      console.log(`  ⏭  跳过（已存在）：${doc._type} / ${doc._id}`)
      skipped++
    } else {
      await client.createOrReplace(doc)
      console.log(`  ✅  已创建：${doc._type} / ${doc._id}`)
      succeeded++
    }
  } catch (err) {
    console.error(`  ❌  失败：${doc._id}`, err.message)
  }
}

console.log(`\n完成！创建 ${succeeded} 个，跳过 ${skipped} 个（已存在的不会覆盖）\n`)
console.log('刷新 http://localhost:5173/studio 可以在后台看到所有数据。')
console.log('刷新 http://localhost:5173 网站内容也会同步更新。\n')
