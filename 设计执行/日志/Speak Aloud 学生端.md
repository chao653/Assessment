# Speak Aloud 学生端 · Figma 操作日志

文件：[Question-Library](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library) › 页面 `Speak Aloud` › Section `Student`（`11501:11438`）

## 2026-10-13 · APACUIX-445 PM Review 学生端第 1–4 条

**任务来源**：[APACUIX-445 PM Review：Speak Aloud 设计稿问题汇总](https://linear.app/kira-learning/issue/APACUIX-445) 学生端（Chao）第 1–4 条，加上 pamper 在评论里补的一条（Speak Aloud 没有 Explanation）。规则对照 [PRD](https://app.notion.com/p/3e270a1b99248169bd37fb0eec960a5e) §4、§5。

**结果状态**：Figma 已改完，待 PM 复核。

### 逐条处理

| # | PM 要求 | 改了什么 | 涉及节点 |
| --- | --- | --- | --- |
| 1 | 成绩页不显示 Correct / Incorrect，目标文本不标逐词对错，Your Response 放学生自己的录音，可回听 | 5 张成绩页加 2 张 Submitted Ungraded 页，题卡全部换成新组件 `Speak Aloud / Student Report`：目标文本改成整句显示，不再拆词块、也不标红绿；`Student Response` 改为 `Your Response`；播放器换成老师批改用的同一个（Audio Row · Teacher/Default），能播放，也不按对错染色；各状态的标签和分数按 PM 规则（见下表） | [Full Points](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11521-50954) · [0 Points](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11523-17534) · [Insufficient Response](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11523-17545) · [Not Answered](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11523-17556) · [Needs Grading](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11523-17567) · [Ungraded - Answered](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11521-50943) · [Ungraded - Not Answered](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11523-17523) |
| 2 | 录音时只留停止按钮，去掉取消 | 录音区隐藏 `Discard Recording`（×），只留下 `Finish Recording`（✓，也就是停止按钮） | [Recording](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11521-14856) |
| 3 | 麦克风被拦截时回到 Tap to Speak，不用 Try again，这题算未作答 | `Try again` 按钮改为 `Tap to Speak`，图标换成 Microphone；被拦截的提示文案保留 | [Microphone Blocked](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11521-14921) |
| 4 | 状态标签统一为图标加文字 | 新建 `Student Result Badge` 组件：Correct、Incorrect 不变；Rubric Graded 从蓝字改为灰字（text/secondary），加 Scroll 图标；Not Answered 改为更浅的灰（text/tertiary），加 MinusCircle 图标；新增 Insufficient Response，用琥珀色（text/warning）加 WarningCircle 图标 | [Student Result Badge](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11942-47763) |
| 补充 | Speak Aloud 没有 Explanation | 所有成绩页去掉 Explanation | 同第 1 条 |

### 各状态最终表现（`Speak Aloud / Student Report` 的 State 变体）

| State | 标签 | 分数 | Your Response | 反馈入口 | 用在哪张画板 |
| --- | --- | --- | --- | --- | --- |
| Full Points | Rubric Graded | 1 / 1 pt | 播放器 | Feedback Notes（收起）+ View My Feedback | Graded - Full Points（原 Graded - Correct） |
| 0 Points | Rubric Graded | 0 / 1 pt | 播放器 | Feedback Notes（收起）+ View My Feedback | Graded - 0 Points（原 Graded - Incorrect） |
| Insufficient Response | Insufficient Response | 0 / 1 pt | 播放器，下方提示 `No speech was heard in this recording.` | View My Feedback | Graded - Insufficient Response |
| Not Released | 无 | - / 1 pt（灰底） | 播放器 | 无 | Graded - Needs Grading、Submitted Ungraded - Answered |
| Not Answered | Not Answered | - / 1 pt | 无播放器，显示 `No recording was saved for this question.` | View My Feedback | Graded - Not Answered |
| Not Released - Not Answered | 无 | - / 1 pt（灰底） | 无播放器，显示 `No recording was saved for this question.` | 无 | Submitted Ungraded - Not Answered |

### 其他改动

- 新建 Section `Student Components`（[`11942:47686`](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11942-47686)），放在 `Student` 正下方，里面是两个本地组件：`Student Result Badge`（[`11942:47763`](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11942-47763)）和 `Speak Aloud / Student Report`（[`11944:48842`](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11944-48842)）。颜色用 Design System 2.0 Foundations 变量，图标用 Design System 2.0 Icons（Phosphor），文字样式用 `text/lg/regular`、`text/sm/regular`。
- 画板改名：`Graded - Correct` 改为 `Graded - Full Points`，`Graded - Incorrect` 改为 `Graded - 0 Points`。学生端不再出现对错，原来的名字会误导。
- 左侧需求卡 `Speak Aloud Student Requirement`（[`11519:14431`](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11519-14431)）的描述、Solution、Notes 已按新规则更新：报告里可以回听，不显示对错，麦克风被拦截时回到 Tap to Speak，没有 Explanation。

### 结论分类

**已确认**（Linear / PRD 原文）
- 第 1–4 条及补充 Explanation 的全部要求，按上表落地。

**设计判断**（PM 没明说，按 PRD 或原型补的）
- 目标文本标签由 `Expected Text` 改为 `Text for Students to Speak`：PRD §4.1 写学生看到的就是这个名字，PM 原型也这么写。
- Feedback Notes 只放在满分和 0 分两个状态；Insufficient Response 和 Not Answered 只放 View My Feedback。这是照 PM 原型画的。
- 停止按钮沿用现有的 ✓（Finish Recording），只去掉 ×，提示文案 `Tap the check when you finish...` 不变。
- 麦克风被拦截的说明文案保留，只把按钮换成 `Tap to Speak`。
- 题卡布局沿用当前的单题回顾页（Back + Section），和已上线的 Multiple Choice 成绩页一致，没有改成原型里的 Detailed Results 长列表。

**需用户确认 / 未处理**
1. **组件库还没同步**。Speak Aloud 相关的母版都在 `Kira Custom Components (TO BE ARCHIVED)` 库里：Questions Answer State、Speak Aloud（Role=Student, Scene=Report / Report-Ungraded）、Audio Row（Role=Student 仍是不可回放）、Recording Area（Recording 态仍有 ×，Mic Blocked 态仍是 Try again）。这次只在本文件里用本地组件和实例覆盖改了，要有库权限的人把改动搬回库里再发布。第 4 条覆盖所有主观题（Free Response、Essay），那些页面得等库里的 Questions Answer State 更新后才会变。
2. **PM 第④条提到的顶部成绩卡**（Grading in Progress、不显示 Download PDF）属于成绩总览页，这组 Speak Aloud 学生稿里没有这张页面，这次没改。要不要补，请确认。
3. **答题页右上的 `— / 1 pts`**（单数写成了复数）不在学生端清单里，这次没动。它和其他题型共用考试外壳，要改的话建议一起统一。

### Linear 评论草稿（用户手动回评，不代发）

> 学生端第 1–4 条和补充的 Explanation 已在 Figma 改完：
>
> 1. 成绩页：不显示 Correct / Incorrect；目标文本整句显示，不标逐词对错；`Your Response` 换成老师批改用的同一个播放器，可回听，不按对错染色。各状态：满分和 0 分显示 Rubric Graded + 分数，加 Feedback Notes（默认收起）和 View My Feedback；没听到声音显示 Insufficient Response + 0 / 1 pt，播放器下方提示 `No speech was heard in this recording.`；未评完或未发布不显示状态，分数 `- / 1 pt`，不显示反馈入口；未作答显示 Not Answered + `- / 1 pt`，没有播放器。Explanation 全部去掉。
>    [Full Points](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11521-50954) · [0 Points](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11523-17534) · [Insufficient Response](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11523-17545) · [Not Answered](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11523-17556) · [Not Released](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11523-17567)
> 2. 录音时去掉取消（×），只留停止；紧接着的 Processing 态也去掉了置灰的 ×。[Recording](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11521-14856) · [Processing](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11521-14869)
> 3. 麦克风被拦截时按钮改为 Tap to Speak，不再用 Try again。[Microphone Blocked](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11521-14921)
> 4. 状态标签统一为图标加文字，新组件 [Student Result Badge](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11942-47763)：Rubric Graded 改为灰字加 Scroll 图标；Not Answered 改为浅灰加 MinusCircle；新增 Insufficient Response（琥珀色加 WarningCircle）。
>
> 另外，有鼠标交互的画板都补了 pointer 指针，被指的按钮切成 Hover 态，口径和老师端 Preview 一致。
>
> 待确认：① 母版还在 Kira Custom Components (TO BE ARCHIVED) 库里，需要有库权限的人同步并发布，Free Response / Essay 的 Rubric Graded 才会跟着变；② 第④条的顶部成绩卡（Grading in Progress）属于成绩总览页，这组稿里没有，要不要补？③ 答题页 `— / 1 pts` 的复数没改，建议和其他题型一起统一。
>
> cc @Xiaoyue

### 参考截图

存在 `参考截图/`，命名为 `2026-10-13-apacuix-445-<before|after>-<画板>.png`。

## 2026-10-13 · 复核

**任务来源**：用户要求检查学生端是否都已完成。

**Linear 变化**：issue 在 08:15 更新过。学生端第 1–4 条内容不变，只是第 1 条最后一句去掉了「学生端」三个字。老师端新增第 9 条（Monitor 作答抽屉里的 Speak Aloud 题卡要和学生成绩页一致，标题写 `Student Response`），属于 Asher 的范围，这次没动；做的时候可以直接复用 `Speak Aloud / Student Report`。

**逐画板检查结果**（脚本遍历 Student Section 全部 17 张画板）

| 检查项 | 结果 |
| --- | --- |
| 7 张成绩页没有 Correct、Incorrect、Explanation、Expected Text、Student Response、词块 | 通过 |
| 标签和分数：Full Points `Rubric Graded · 1 / 1 pt`；0 Points `Rubric Graded · 0 / 1 pt`；Insufficient `Insufficient Response · 0 / 1 pt`；Not Answered `Not Answered · - / 1 pt`；Needs Grading 和两张 Submitted Ungraded 无标签 `- / 1 pt` | 通过 |
| 有录音的状态都用 Audio Row · Teacher/Default（可播放，不染色）；未作答用 Student/Empty，文案 `No recording was saved for this question.` | 通过 |
| Insufficient 播放器下方有 `No speech was heard in this recording.` | 通过 |
| Feedback Notes 和 View My Feedback 只出现在应出现的状态 | 通过 |
| 题号全部是 2 | 通过 |
| Recording：只剩 ✓ | 通过 |
| Microphone Blocked：按钮是 `Tap to Speak` | 通过 |
| **Processing：还显示置灰的 ×** | **已补改**：隐藏 `Discard Recording`（[`11521:14869`](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11521-14869)），和录音中的控件一致 |
| Try Again Available 的 `Try again`、Save Failed 的 `Record again` | 保留。这两个是 Allow Try Again 和保存失败重试，和第 3 条无关 |
| 本地组件没有默认图层名，新建容器的填充都已清空或绑了 token | 通过 |
| 题号底色未绑 token（从库里的 Report 变体继承来的） | **已补改**：绑到 `fill/neutral/subtle`（#F4F4F5 → #F5F5F5，肉眼无差别）。题号数字是 #18181B，对不上 `text/primary`（#0A0A0A），为了不改外观保持原样 |

**仍待确认**：和上一节「需用户确认 / 未处理」的 3 条相同。

## 2026-10-13 · 鼠标示意

**任务来源**：用户要求「有鼠标交互的，图上都要加鼠标示意」。

**沿用的先例**：老师端 Preview 和批改页的做法——库里的 `Cursor` 组件（`cursor=pointer`），作为画板的最上层子图层，绝对定位，指针中心对准控件中心，图层名 `Cursor / <交互对象>`；被指的按钮切成 `State=Hover`；Section 里在需求卡下方放 `_Annotation / Cursor` 指针图例。

**加指针的口径**：题卡里有可点的控件，就在主要操作上加 pointer；系统处理中、按钮被禁用、或没有可点控件的画板不加。

| 画板 | 指向 | 按钮切 Hover |
| --- | --- | --- |
| Not Recorded | Tap to Speak | 是 |
| Recording | ✓ 停止（Finish Recording） | 是 |
| Try Again Available | Try again | 是 |
| Recording Cleared | Tap to Speak | 是 |
| Microphone Blocked | Tap to Speak | 是 |
| Save Failed | Record again | 是 |
| Graded - Full Points / 0 Points / Insufficient Response / Needs Grading、Submitted Ungraded - Answered | 播放按钮 | 播放器没有 Hover 变体，和老师批改页 Play Recording Hover 的做法一样只放指针 |
| Graded - Not Answered | View My Feedback | 是 |

**不加的画板**：Processing（系统保存中）、Audio Recorded（Allow Try Again 关闭，题卡里没有可点的操作）、Paused - Not Recorded 和 Paused - Audio Recorded（按钮被禁用）、Submitted Ungraded - Not Answered（题卡里没有可点的操作）。

**图例**：从 Teacher Grading 复制 `_Annotation / Cursor` 到 Student Section，放在需求卡下方（[`11972:47597`](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11972-47597)）。

**结果状态**：已逐张截图核对，指针都落在对应控件上，Hover 态生效。

## 2026-10-13 · pamper 评论：去掉 feedback 和 Mark for Review

**任务来源**：[pamper 的评论](https://linear.app/kira-learning/issue/APACUIX-445#comment-343c2c1e)：「speak aloud 题没有 explanation 也没有 feedback；而且这个 Detailed Results（详细结果）页也不应该有 mark for review 按钮」。

**改了什么**

| 改动 | 范围 | 涉及节点 |
| --- | --- | --- |
| 去掉分隔线、Feedback Notes 和 View My Feedback | `Speak Aloud / Student Report` 的全部 6 个 State，7 张成绩页跟着组件一起变 | [`11944:48842`](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11944-48842) |
| 去掉底部的 Mark for Review，Prev / Next 改为靠右 | 7 张成绩页：Graded 下 5 张，Submitted Ungraded 下 2 张 | [Full Points](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11521-50954) 等 |
| 删掉 `Cursor / View My Feedback` | Graded - Not Answered。按钮没了，题卡里也就没有可点的操作，按鼠标示意的口径不再放指针 | [Not Answered](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11523-17556) |
| Notes 补一句 `Speak Aloud has no Explanation and no feedback. The results page has no Mark for Review.` | 左侧需求卡 | [`11519:14431`](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11519-14431) |
| 组件描述删掉 Feedback 相关的说明 | `Speak Aloud / Student Report` | 同上 |

**没动的**：10 张答题页的 Mark for Review 保留，PRD §4 写明考试中 Mark for Review 一直显示。

**和之前口径的差异**：PM 原型第①②条画了 Feedback Notes 和 View My Feedback，这次按 pamper 的评论去掉了。上面「各状态最终表现」表里的反馈入口一列已经不适用，现在所有状态都没有反馈入口。

**检查结果**：脚本遍历 17 张画板，成绩页里没有 Mark for Review、Feedback Notes、View My Feedback 和 Explanation；答题页的 Mark for Review 都还在；播放指针位置不变。

### 回复 pamper 的评论草稿（用户手动回评，不代发）

> 已按评论修改：
>
> 1. 学生成绩页的 Speak Aloud 去掉了 Feedback Notes 和 View My Feedback（Explanation 之前已经去掉），满分、0 分、Insufficient Response、未作答、未发布的所有状态都没有反馈入口了。
> 2. 成绩页（Detailed Results）去掉了 Mark for Review，Prev / Next 靠右。答题页的 Mark for Review 保留。
>
> [Student](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11501-11438) · [Full Points](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11521-50954) · [Insufficient Response](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11523-17545) · [Not Answered](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11523-17556)
>
> cc @pamper @Xiaoyue

## 2026-10-14 · 分值统一为 pt

**任务来源**：[Xiaoyue 10/13 的评论](https://linear.app/kira-learning/issue/APACUIX-445)：「学生端没问题……另外分值统一写 1 pt / - / 1 pt（编辑器空卡和学生答题中现在是 pts）」；Asher 10/14 回复「学生答题中的 pts 在学生端，由 @chao 跟进」。

**改了什么**：10 张答题页右上的分值从 `— / 1 pts` 改为 `- / 1 pt`（复数改单数，长破折号改为和成绩页一致的 `-`）。分值文字在实例里没有绑定组件属性，所以直接改的实例文字。

涉及画板：Not Recorded、Recording、Processing、Audio Recorded、Try Again Available、Recording Cleared、Microphone Blocked、Save Failed、Paused - Not Recorded、Paused - Audio Recorded。

**检查结果**：脚本扫了 Student 和 Student Components 两个 Section，已经没有 `pts` 和 `— /`。现在的分值写法有三种：`- / 1 pt` 14 处，`1 / 1 pt` 1 处，`0 / 1 pt` 2 处，组件母版里另有 6 处，写法也都是这三种。

**库里待同步**：分值文字来自库组件 `Speak Aloud`（Role=Student, Scene=Preview）的默认值，这次只改了本文件的实例。库里同步的时候要把默认值一起改掉，不然新拖出来的实例还会是 `— / 1 pts`。上一节「需用户确认」第 3 条（答题页 `— / 1 pts`）现在已经处理。

### 回复评论草稿（用户手动回评，不代发）

> 学生答题中的分值已统一为 `- / 1 pt`（原来是 `— / 1 pts`），10 张答题页都改了；成绩页之前已经是 `1 / 1 pt`、`0 / 1 pt`、`- / 1 pt`。
>
> [Student](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11501-11438)
>
> cc @Xiaoyue

## 2026-10-14 · 补成绩页顶部的 Grading in Progress

**任务来源**：PM 第 1 条第④点「未评完或报告未发布：顶部成绩卡显示 Grading in Progress，没有 Download PDF」。用户确认要补，库组件同步由用户负责。

**沿用的先例**：Multiple Choice Student Section 的 Results 列（`Grading in Progress`、`Submitted Answers Review`）。那几张是 staging 截图（图片填充），不能直接复用，所以这张页面用组件按 staging 和 PM 原型④重新搭出来。

**新增画板**：`Assessment Player / Desktop - Speak Aloud Results - Grading in Progress`（[`12054:47854`](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=12054-47854)），放在 Submitted Ungraded 列最上面。原来的两张逐题回顾页往下挪，顺序和学生的实际流程一致：提交 → 成绩页 → 点 See what you answered → 逐题回顾。

| 区块 | 做法 |
| --- | --- |
| 顶栏 | 复制成绩页的 `Assessment -Top nav` 后分离（实例改不了对齐方式）；返回改成 House 图标（16px，`icon/primary`）加 `Back to Home`（`text/sm/medium`）；删掉 Section 下拉。**不放 Download PDF** |
| 顶部成绩卡 | 库组件 `Result Page Header`，`Type=Type3`（Grading in Progress 变体）：标题 `Chao Zhang: Water Cycle Quiz Results`，用时 `12min 30sec`；沙漏、`Grading in Progress`、`Your assessment has been submitted. Scores will be available after teacher review.` 用组件默认；隐藏组件自带的 AI Insights（评分中还没有 insights，staging 也不显示） |
| Answer Details | 库组件 `My Question Record` 是 SAT 结构，分离后改成通用测验评分中的样子：Tabs 改为 Section 1–4，选中 Section 2；表头 `Category / Questions / Answered / Not Answered`，删掉 Accuracy 列，只留两行（`Overall (Section 2)` 23 / 21 / 2，`MS-ESS2-4 · Cycling of Water` 8 / 7 / 1）；`Answer Record` 去掉 Correct / Wrong 筛选和 Field-test 区，23 个题号格用 `Question item` 的 pending（已答）和 skipped（未答，14、20）；按钮改为 `See what you answered`。卡片底色绑 `fill/neutral/invert`；SAT 组件里带的隐藏层（Essay submitted 文案、隐藏的题号区）已删掉，默认图层名已全部改掉 |
| 鼠标示意 | `See what you answered` 切 Hover，加 `Cursor / See What You Answered` |

**其他**：需求卡 Notes 补了「the results top card shows Grading in Progress with no Download PDF」。

**结果状态**：已截图核对。上一节「需用户确认」第 2 条（顶部成绩卡）已完成；第 1 条（库同步）由用户负责。

### 回复评论草稿（用户手动回评，不代发）

> 补了第④条的成绩页：未评完或报告未发布时，顶部成绩卡显示 Grading in Progress，没有 Download PDF；下面是 Answer Details（按 Section 统计已答 / 未答）和 Answer Record，点 See what you answered 进逐题回顾，题卡不显示状态，分数 `- / 1 pt`，录音可回听。
>
> [Results - Grading in Progress](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=12054-47854) · [Submitted Ungraded - Answered](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11521-50943)
>
> cc @Xiaoyue

## 2026-10-14 · 同步到组件库 Kira Custom Components (TO BE ARCHIVED)

**任务来源**：用户给出库文件 [Kira Custom Components (TO BE ARCHIVED)](https://www.figma.com/design/JxbsqAsQTlEL4ZHvL7pekx/Kira-Custom-Components--TO-BE-ARCHIVED-?node-id=74-28044)，要求找到要改的组件并修改。组件都在 `Assessment - WIP` 页（`16131:22844`）。

**结果状态**：库文件已修改，**尚未发布**。插件 API 不能发布库，需要用户在 Figma 里手动 Publish。发布后，Question-Library 要接受库更新。

| 组件 | 改动 | 影响范围 |
| --- | --- | --- |
| `Questions Answer State`（[`16131:27095`](https://www.figma.com/design/JxbsqAsQTlEL4ZHvL7pekx/Kira-Custom-Components--TO-BE-ARCHIVED-?node-id=16131-27095)） | Rubric Graded：蓝字改灰字（`text/secondary`），加 Scroll 图标（`icon/secondary`）；Not Answered：改浅灰（`text/tertiary`），加 MinusCircle 图标（`icon/tertiary`）；**新增** `State=Insufficient Response`：琥珀色（`text/warning`）+ WarningCircle 图标（`icon/warning`）；Correct / Incorrect 不变；组件集改为宽度自适应；补组件描述 | 所有题型都在用。Rubric Graded 的灰字也会出现在 Coding / Essay / Short / Long Response 的老师端 Report 场景；Not Answered 的新样式会出现在各题型学生 Report-Ungraded 里。这是第 4 条「所有主观题统一」要的效果 |
| `Speak Aloud / Audio Row`（[`17216:336621`](https://www.figma.com/design/JxbsqAsQTlEL4ZHvL7pekx/Kira-Custom-Components--TO-BE-ARCHIVED-?node-id=17216-336621)） | Student / Default 换成和 Teacher / Default 一样的可播放播放器；**删除** Student / Correct、Incorrect、Insufficient（学生端不按对错染色。库里原本只有 Speak Aloud 学生 Report 在用，删除前已把它改成 Student / Default）；Student / Empty 的图标换成 MicrophoneSlash（`icon/tertiary`）；描述改掉「Student=不可回放」 | 只影响 Speak Aloud 学生端。Teacher 变体没动。删掉的变体如需恢复，可从 Figma 版本历史找回 |
| `Speak Aloud / Recording Area`（[`17217:336704`](https://www.figma.com/design/JxbsqAsQTlEL4ZHvL7pekx/Kira-Custom-Components--TO-BE-ARCHIVED-?node-id=17217-336704)） | Recording、Processing 删掉 `Discard Recording`（×），只留 ✓；Mic Blocked 按钮改为 `Tap to Speak` + Microphone 图标；更新描述 | 学生答题页和老师 Preview（Asher 第 6 条，要求相同）都用这个组件 |
| `Speak Aloud`（[`17242:500`](https://www.figma.com/design/JxbsqAsQTlEL4ZHvL7pekx/Kira-Custom-Components--TO-BE-ARCHIVED-?node-id=17242-500)）· Role=Student, Scene=Report | 标签改成 Rubric Graded，分值 `1 / 1 pt`；`Expected Text` 改为 `Text for Students to Speak`；词块换成整句的 Target Text Block（复用 Ungraded 组件里已有的那块）；`Student Response` 改为 `Your Response`；删掉 Separator 和 Explanation Footer；**新增布尔属性 `Show No Speech Notice`**（默认关），控制播放器下方的 `No speech was heard in this recording.` | 其他状态靠覆盖切换：Insufficient Response 把标签切到 Insufficient Response、分值改 `0 / 1 pt`、打开布尔；Not Answered 把标签切到 Not Answered、分值 `- / 1 pt`，Audio Row 换成 Student / Empty |
| `Speak Aloud` · Role=Student, Scene=Report-Ungraded | 同样换成整句目标文本、`Your Response`、可播放的播放器；分值 `- / 1 pt` | — |
| `Speak Aloud` · Role=Student, Scene=Preview | 分值默认值从 `- / 2 pts` 改为 `- / 1 pt` | 新拖出来的答题卡默认就是 `- / 1 pt` |
| `Speak Aloud - Student Report - Ungraded`（[`17225:140`](https://www.figma.com/design/JxbsqAsQTlEL4ZHvL7pekx/Kira-Custom-Components--TO-BE-ARCHIVED-?node-id=17225-140)） | Answered / Unanswered 的分值改为 `- / 1 pt`；补组件描述 | — |

**没动的**：Speak Aloud 的老师端变体（Edit / Preview / Report / Grading）、Word Chip、Audio Row 的 Teacher 变体，都属于 Asher 的范围。

**检查**：每个组件改完都截图核对过；另外临时放了一个实例，打开 `Show No Speech Notice`、切到 Insufficient Response，确认布尔属性和标签切换都能用，看完已删除。

**发布后的后续**：Question-Library 里学生成绩页现在用的是本地组件 `Student Result Badge` 和 `Speak Aloud / Student Report`。库发布后，可以把这 7 张成绩页的题卡换回库里的 `Speak Aloud`（Role=Student, Scene=Report / Report-Ungraded）加覆盖，然后删掉本地组件，让设计稿直接引用库。答题页里之前做的覆盖（隐藏 ×、Tap to Speak、`- / 1 pt`）发布后和库默认值一致，保留不影响。

## 2026-10-16 · 不确定项按 PRD 定稿

**任务来源**：用户要求把核对 APACUIX-445 时列出的不确定项「以 PRD 为准」改设计稿。依据的是 [PRD](https://app.notion.com/p/3e270a1b99248169bd37fb0eec960a5e) 10/13 15:15 的版本。

| 不确定项 | PRD 依据 | 结论 |
| --- | --- | --- |
| 原型里的 Feedback Notes / View My Feedback | §5：成绩页不显示 Feedback Notes、View My Feedback | 稿子早已去掉，不用改 |
| 已评分、未作答的分数 | §5 评分表：Unanswered → 0 分 | **改为 `0 / 1 pt`**（ticket ⑤ 写的是 `- / 1 pt`） |
| 成绩页的 Mark for Review | §5：成绩页不显示 Mark for Review | 稿子早已去掉，不用改 |
| 录音时去掉取消（与「控件和课程一致」冲突） | §4.2 只写「学生可以停止」，没有取消 | 保留现状：只有停止按钮 |
| 未发布且未作答 | §5：未评完或报告未发布，不显示状态、分数显示 `-` | 保留现状：不显示标签，`- / 1 pt` |
| Rubric Graded 灰字是否波及 Coding、老师端 | §5：所有主观题的 Rubric Graded 都改；Coding 的 Report 用的也是 Rubric Graded | 保留 |
| Not Answered 的颜色 | §5 只写「Not Answered 加图标」，没说改浅灰（浅灰来自 ticket 汇总图） | **恢复原来的深灰**：`text/secondary` + `icon/secondary`，对比度从 3.25:1 回到 7.17:1 |
| 老师改了 Insufficient Response 的分数后学生看到什么；Rubric Graded 的叫法 | PRD 没写前者；后者 PRD 明确就叫 Rubric Graded | 不改 |

**改动**

| 文件 | 节点 | 改动 |
| --- | --- | --- |
| Question-Library | `Speak Aloud / Student Report` · State=Not Answered（[`11944:48673`](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11944-48673)） | 分值 `- / 1 pt` → `0 / 1 pt`；[Graded - Not Answered](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11523-17556) 跟着组件更新 |
| Question-Library | `Student Result Badge` · State=Not Answered（[`11942:47762`](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11942-47762)） | 文字和图标改为 `text/secondary`、`icon/secondary` |
| 组件库 | `Questions Answer State` · State=Not Answered | 文字和图标改为 `text/secondary`、`icon/secondary` |
| 两边 | 组件描述 | 补上上面的口径（未作答计 0 分，Not Answered 维持原来的颜色） |

**发现的发布状态**：组件库已经发布过一次，Question-Library 也接受了更新。`Speak Aloud`、`Recording Area`、`Audio Row` 的改动都已生效（例如录音中画板里的取消按钮图层已经没了）。**但 `Questions Answer State` 没在那次发布里**，Question-Library 拿到的还是旧版：没有图标，没有 Insufficient Response。另外，`Speak Aloud` 的组件描述今天又更新过，需要再发一次才同步。

**另一处变化（不是这次改的）**：本地组件 `Speak Aloud / Student Report` 里的 Language 标签已经换成 `Variant=Secondary`（灰色描边），看起来是手动调整的，保持不动。

**检查**：已截图核对 Graded - Not Answered 画板，以及两边的状态标签组件。

## 2026-10-19 · APACPO-329 PM Design Review 2（学生端）

**任务来源**：[APACPO-329 [PM Design Review 2] Student View: Speak aloud](https://linear.app/kira-learning/issue/APACPO-329/pm-design-review-2-student-view-speak-aloud)。用户要求只改学生端。规则以 [PRD](https://app.notion.com/p/3e270a1b99248169bd37fb0eec960a5e) 10/19 09:45 版为准：测评没有 Allow Try Again 开关，交卷前随时可以重录；已录状态有播放器；录音时用停止图标；Processing 时停止按钮显示加载状态；重录各分支的文案写在 §4.5。

### 逐条处理

| # | 要求 | 改了什么 |
| --- | --- | --- |
| 1 | 作答页、回看页用 staging 的页面外壳 | 答题页：顶栏改为 `Staging / Exam Top Bar`（左边 Back to Home，计时器在右边；去掉标题、Tools、缩放、More、违规计数）；去掉 Section 进度条；底栏去掉左右箭头，只留 6 个题号，右侧为 View All + `Next`。回看页：顶栏改为 `Staging / Review Top Bar`（只有 ← Back，去掉 Section 下拉）；`Prev` 改为 `Previous`；底栏去掉箭头。所有画板统一为 1440×900 |
| 2 | 已录状态保留 Try again；点了 Try again 回到 Tap to Speak；重录失败时保留上一段录音 | 已录状态始终显示 Try again。点了 Try again 后的提示改为 `Your last recording is still saved. Record again to replace it.`。新增「重录成功」画板（播放器换成新录音 0:07），以及「重录时麦克风被拒」「重录保存失败」两张画板（文案按 PRD §4.5） |
| 3 | 暂停不用单独画题卡 | 删除 `Paused - Not Recorded`、`Paused - Audio Recorded` 两张画板，改为一张 `Assignment Paused`：用 `surface/layer/scrim` 遮罩加背景模糊，盖住 staging 页面；弹窗用 ShadCN Alert Dialog，只留 `Back to Dashboard` 按钮 |
| 4 | 已录状态加播放器 | 已录状态显示 Audio recorded、`Your teacher can listen to this recording.`、播放器和 Try again；播放器宽 540px，和录音波形条一样宽。另新增「已录 - 播放中」画板（暂停图标，0:04 / 0:08，进度条走到 50%）。点了 Try again 之后不显示播放器 |
| 5 | 录音时用停止图标，并改提示文案 | 结束录音的按钮由 ✓ 改为 Stop（Phosphor Fill，白色 `icon/invert`）；提示改为 `Tap stop when you finish. Recording stops on its own once every word is heard, or after 100 seconds.`。Processing 时停止按钮里换成加载图标 CircleNotch（PRD §4.2），并去掉状态行里重复的那个加载图标 |

### 画板排列（Student Section）

- **Record Answer**：Not Recorded → Recording → Processing → Recorded → Recorded - Playing
- **Try Again**：Try Again - Ready to Re-record（原 Recording Cleared）→ Re-recorded
- **Recording Errors**：Microphone Blocked → Save Failed → Re-record - Microphone Blocked → Re-record - Save Failed
- **Paused or Locked**：Assignment Paused
- **Submitted Ungraded**：Results - Grading in Progress → Submitted Ungraded - Answered → Not Answered
- **Graded**：Full Points → 0 Points → Insufficient Response → Not Answered → Needs Grading

鼠标示意按之前的口径重新放过：每张有可点控件的画板，在主要操作上放 pointer；是按钮的话切到 Hover 态。

### 组件

| 位置 | 组件 | 改动 | 是否影响老师端 |
| --- | --- | --- | --- |
| 组件库 | `Speak Aloud / Recording Area` | **新增**布尔属性 `Show Player`（默认关），Recorded 状态里加了播放器（Audio Row · Student / Default，宽 540） | 不影响。默认关闭，老师端 Preview 看不到 |
| 组件库 | `Speak Aloud / Audio Row` | **新增**变体 `Role=Student, State=Playing` | 不影响。只新增了一个学生端变体 |
| Question-Library 本地组件 | `Staging / Exam Top Bar`、`Staging / Review Top Bar` | staging 的页面外壳，库里没有对应的组件 | — |
| Question-Library 本地组件 | `Speak Aloud / Student Recorded Area`（Recorded、Recorded - Playing） | 临时替身：库里新加的 `Show Player` 和 `Student / Playing` 发布前，Question-Library 用不上，先用本地组件顶上 | — |

学生画板上用覆盖完成的改动（共享组件 `Recording Area` 的默认值没动，老师端不受影响）：Stop 图标和新提示文案、Processing 的加载图标、打开 Try again、点了 Try again 后的提示、重录失败的提示。

**没有按 ticket 图做的一处**：ticket 第 3 张（处理中）图里按钮还是置灰的 ✓。我按第 5 条和 PRD §4.2 做成了停止按钮的加载状态。

### 待跟进

1. **发布组件库**：`Recording Area`（Show Player）、`Audio Row`（Student / Playing），以及之前还没发的 `Questions Answer State`。发布后，可以把 Recorded 相关的 4 张画板（Recorded、Recorded - Playing、Re-recorded、Assignment Paused）里的录音区换回库组件（打开 `Show Player`），再删掉本地的 `Speak Aloud / Student Recorded Area`。
2. **老师端 Preview**：PRD 要求 Preview 的录音控件和学生端一样。按用户「只改学生端」的要求，这次没有动老师端；Asher 那边如需同步，可以用同样的覆盖方法，或者把库里的默认值改掉。
3. Xiaoyue 在评论里提到可以建 sub-issue，这次没有建。

### 回复评论草稿（用户手动回评，不代发）

> 学生端按 PRD Design Review 2 改完了：
>
> 1. 作答页和交卷后回看页换成 staging 原样的顶栏、按钮和底栏题号，去掉了 Section 进度条、标题、Tools 和违规计数。
> 2. 已录状态有播放器和 Try again；点了 Try again 回到 Tap to Speak，并提示上一段录音还在；补了重录成功、重录时麦克风被拒、重录保存失败三张画板。
> 3. 两张 Paused 题卡删了，换成 staging 的 Assignment Paused 弹窗。
> 4. 录音中用停止图标，提示改为 `Tap stop when you finish…`；处理中时停止按钮显示加载状态。
>
> [Student](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11501-11438)
>
> cc @Xiaoyue @pamper

## 2026-10-19 · 补改组件库 Recording Area 的默认值

**任务来源**：用户指出组件库里录音中的控件（[`17562:16418` Recording Actions](https://www.figma.com/design/JxbsqAsQTlEL4ZHvL7pekx/Kira-Custom-Components--TO-BE-ARCHIVED-?node-id=17562-16418)）还是旧样式，问为什么没有改。

**原因**：上一轮我把「只改学生端」理解成「不改学生和老师 Preview 共用组件的默认值」，所以只在学生画板上用覆盖改了图标和文案，库里的组件本身没动。这个理解太保守了：`Recording Area` 只在测评里用（课程用的是另一个组件），而 PRD 要求老师 Preview 的录音控件和学生端一致，所以默认值本来就该改。

**改动**（组件库 `Speak Aloud / Recording Area`，[`17217:336704`](https://www.figma.com/design/JxbsqAsQTlEL4ZHvL7pekx/Kira-Custom-Components--TO-BE-ARCHIVED-?node-id=17217-336704)）

| 状态 | 改动 |
| --- | --- |
| Recording | `Finish Recording`（✓）改为 `Stop Recording`，图标换成 Phosphor Stop（Fill），颜色绑 `icon/invert`；提示改为 `Tap stop when you finish. Recording stops on its own once every word is heard, or after 100 seconds.` |
| Processing | 停止按钮改为加载状态，图标换成 CircleNotch；删掉 Processing Status 里重复的加载图标 |
| Recorded | `Show Try Again`、`Show Player` 的默认值都改为开启：测评没有 Allow Try Again 开关，交卷前的已录状态一律显示播放器和 Try again |
| Recorded + Disabled | 删掉 Try again 按钮：暂停、锁定、交卷后都不能重录。这个按钮原来绑在 `Show Try Again` 上，默认值改为开启后会误显示，所以删掉 |
| 组件描述 | 改掉过时的说法：「Allow Try Again」「Try again 会清掉当前录音」「答题时不能回放」 |
| 布局 | Recorded 变体加了播放器后变高，把后面的变体依次下移，组件集高度跟着调整 |

**影响**：发布并在各文件接受更新后，老师端 Preview（Asher）里的录音中、处理中、已录也会变成停止图标、加载状态、带播放器和 Try again，和 PRD 一致。Asher 那边如果有画板依赖旧默认值（比如 Try Again Off 的已录态），需要他看一下。Question-Library 学生画板上之前做的覆盖，和新的默认值一致，不受影响。

**检查**：已截图核对 `Recording Area` 全部 8 个变体。

## 2026-10-19 · Processing 状态改回和 ticket 截图一致

**任务来源**：用户指出组件库的 Processing 状态（[`17217:336700`](https://www.figma.com/design/JxbsqAsQTlEL4ZHvL7pekx/Kira-Custom-Components--TO-BE-ARCHIVED-?node-id=17217-336700)）和 ticket 第 3 张截图对不上。

**原因**：我按 PRD §4.2「the stop button shows a loading state」，把转圈图标放进了停止按钮，同时删掉了「Processing...」前面的转圈。但 ticket 截图的样子是：置灰按钮、转圈在文字前面。这是我自己的发挥，和截图不一致。

**改动**：布局照截图：置灰的停止按钮、「Processing...」前面有转圈、下面是说明文字。唯一和截图不同的是按钮图标：截图里还是 ✓，但同一张 ticket 的第 5 条明确要求结束按钮把 ✓ 换成停止图标，所以用停止图标。

| 位置 | 改动 |
| --- | --- |
| 组件库 `Recording Area` · State=Processing | 按钮图标从 CircleNotch 换回 Stop（Fill，白色），按钮保持 Disabled；在 Processing Status 里重新加上 CircleNotch（16px，`icon/primary`），放在「Processing...」前面；组件描述改为「while processing the stop button is disabled and Processing... shows a spinner」 |
| Question-Library · Processing 画板 | 按钮覆盖改为 Stop（白色），保持 Disabled |

**还差一步**：Question-Library 已经接受了你今天 10:20 之后发布的那版库（那一版删掉了转圈）。实例里没法新增图层，所以这张画板的转圈要等你**再发布一次组件库**、并在 Question-Library 里接受更新之后才会出现。

**检查**：已截图核对组件库的 Processing 状态（和截图布局一致）和 Question-Library 的 Processing 画板（按钮已改好，转圈要等发布）。

## 2026-10-19 · Processing 停止按钮逐像素对 ticket

**任务来源**：用户再次指出组件库 Processing 状态的停止按钮（[`17562:16529`](https://www.figma.com/design/JxbsqAsQTlEL4ZHvL7pekx/Kira-Custom-Components--TO-BE-ARCHIVED-?node-id=17562-16529)）不对。

**原因**：上一轮只核对了属性，没在 1x 下和 ticket 截图逐像素比。实际有两处问题：

1. **组件集没有底色**。`Recording Area` 的变体都是透明的，直接压在深灰 Section（#444）上。Disabled 按钮是 50% 不透明度，叠在深灰上变成暗紫色、白色方块变成灰色，和截图的浅紫按钮（压在 #FAFAFA 的题卡上）完全两样。同 Section 里的 Audio Row、Edit、Student Report 组件集都有白底，只有这个没有。
2. **停止图标多了一圈描边**。从 ✓ 换成 Stop 时，✓ 图标上的描边覆盖（`icon/invert`，1.33px）被带了过来。Phosphor Stop（Fill）本身只有填充、没有描边。录音中的停止按钮也有同样问题。

**改动**

| 位置 | 改动 |
| --- | --- |
| 组件库 `Speak Aloud / Recording Area` 组件集 | 底色设为 `fill/neutral/surface`（#FAFAFA，DS 2.0 Foundations），和学生端题卡里录音区的底色一致。只影响组件集本身的展示，不影响实例 |
| 组件库 Recording、Processing 的停止按钮 | 去掉 Stop 图标上带过来的描边，只保留 `icon/invert` 填充 |
| Question-Library Recording、Processing 画板 | 同样去掉描边（覆盖值和库里一致，发布后不冲突） |

**核对结果**（1x 截图和 ticket 第 2、3 张逐像素比）

| 项目 | ticket | 现在 |
| --- | --- | --- |
| Processing 按钮颜色 | (183, 166, 239) | (183, 166, 239)，就是 Primary 50% 叠在 #FAFAFA 上 |
| 按钮尺寸、位置 | 40px，波形下方 16px | 40px，波形下方 16px |
| 「Processing...」、说明文字的位置 | 距波形顶部 120–133、156–169 | 一致 |
| 停止方块 | 12px | 11px：DS 2.0 Icons 的 Phosphor Stop（Fill）在 16px 下就是 11px。ticket 截图用的不是同一套图标，按 DS 标准尺寸保留 |

ticket 第 2 张的按钮颜色是 (130, 100, 231)，是 Primary 加上 Hover 的 10% 白色叠加，也就是截图时鼠标停在按钮上，和组件的 Hover 状态一致。

**还差一步**：Question-Library 的 Processing 画板里「Processing...」前面仍然没有转圈，因为它用的还是已发布的旧版库。需要**发布组件库**，再在 Question-Library 里接受更新，转圈、去掉的描边、组件集底色才会同步。

## 2026-10-19 · 组件库发布后检查 Question-Library

**任务来源**：用户发布了组件库，要求检查 [Question-Library › Speak Aloud](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11436-35232) 是否正确。

**发现的问题**

1. **切换过状态的录音区没有跟着更新。** 文件已经接受了库更新，但只有题卡里默认的 Idle 录音区换成了新版。画板上切到 Recording、Processing、Mic Blocked、Save Failed 的录音区，还指向旧版变体（`11731:` 开头的组件副本）。学生端 6 张、老师端 Preview 4 张都是这样。
2. **处理中画板的转圈被一条旧覆盖隐藏了。** 上一轮把转圈挪进按钮时，在画板上把状态行里的 CircleNotch 设成了隐藏。库里加回转圈后，这条覆盖还在，所以发布后也显示不出来。之前几次检查用的脚本默认跳过隐藏图层，所以没发现。
3. **本地替身 `Speak Aloud / Student Recorded Area` 还在用。** 它是发布前的临时组件，库里的 `Show Player` 和 `Student / Playing` 发布后就该换掉。

**改动**（只动学生端）

| 位置 | 改动 |
| --- | --- |
| 学生端 6 张画板（Recording、Processing、Microphone Blocked、Save Failed、两张 Re-record 失败） | 录音区切到最新版变体。文案、按钮状态都核对过：切换后有 3 个按钮从 Hover 掉回 Default（录音中的停止按钮、两张麦克风被拒的 Tap to Speak），已改回 Hover，和鼠标示意对应 |
| Processing 画板 | 取消隐藏状态行里的 CircleNotch |
| Recorded、Recorded - Playing、Re-recorded、Assignment Paused | 本地替身换回库里的 `Recording Area` · State=Recorded（`Show Player`、`Show Try Again` 打开）。Re-recorded 保留时长 `0:00 / 0:07`；Recorded - Playing 的播放器用库里的 `Role=Student, State=Playing`。替换前后逐像素对比，4 张完全一致 |
| Student Components | 删除 `Speak Aloud / Student Recorded Area`（删除前确认整个文件已没有实例） |

**没换的：成绩页的 `Speak Aloud / Student Report` 和 `Student Result Badge`。** 先在 Graded - Full Points 上试着换成库里的 `Speak Aloud` · Role=Student, Scene=Report，发现库里的目标句是白底描边的小字框，本地版本和 ticket 第 15 张都是灰底大字块，卡片也因此矮了 12px、鼠标示意错位。已换回本地组件，逐像素确认和替换前一致。要换回库组件，需要先把库里 Report、Report-Ungraded 的目标句改成和 ticket 一致，再发布一次。

**核对结果**：6 张录音区画板和 ticket 第 2、3、8–11 张对比，结构、按钮、文案都一致。录音中和两张重录失败的说明文字换行位置和 ticket 差一两个词，原因是 ticket 里 PM 改过的文字渲染得更窄，字号、行高和文字框宽度都没问题（首次失败的两张，第一行宽度和 ticket 完全相同：464px、449px），不改。

**`Questions Answer State` 仍未发布**（**10/20 更正：判断有误，已经发布了**，见下一节）：从 Question-Library 导入的已发布版本只有 Correct、Incorrect、Not Answered、Rubric Graded 四个变体，没有 Insufficient Response，Rubric Graded 也没有图标。和 10/16 那次一样，这个组件没包含在发布里。学生成绩页现在用的是本地 `Student Result Badge`，画面不受影响；但其他题型的成绩页、以及成绩页换回库组件，都要等它发布。

**老师端 Preview（没改，需要 Asher 处理）**：Recording、Processing、Audio Recorded、Microphone Blocked 4 张也还指向旧版变体，所以录音中、处理中仍是 ✓，已录没有播放器。按「只改学生端」的要求没动；处理方式和学生端一样，把录音区切到最新版变体即可。

## 2026-10-20 · 库里的学生成绩卡对齐 ticket

**任务来源**：用户说「继续」。接着处理上一轮留下的问题：成绩页换不回库组件，因为库里 `Speak Aloud` 的学生端 Report、Report-Ungraded 和 ticket 不一致。

**更正上一轮的结论：`Questions Answer State` 其实已经发布了。**（**10/21 再更正：这个判断也不对**，新版只是作为 `Speak Aloud` 的依赖被带进来，组件集本身没有发布，见「2026-10-21 · 学生端统一到最新发布版本」。） Question-Library 里这个组件有两份副本：`12097:44487` 是新版（5 个变体，带图标，有 Insufficient Response），随 `Speak Aloud` 嵌套进来；`11157:54318` 是旧版（4 个变体）。按 key 导入时返回的是旧副本，所以上一轮误判为未发布。两份副本都只在其他库组件内部用到，画布上没有直接实例。

**改动**（组件库 `Speak Aloud`，[`17242:500`](https://www.figma.com/design/JxbsqAsQTlEL4ZHvL7pekx/Kira-Custom-Components--TO-BE-ARCHIVED-?node-id=17242-500)，只动学生端两个变体）

| 变体 | 改动 |
| --- | --- |
| Role=Student, Scene=Report | 目标句块：白底描边、5px 圆角、10/12 内边距 → `fill/neutral/surface` 灰底、无描边、圆角 `md`（12）、内边距 `4`（16）、间距 `2`（8）；里面的 `Question Content` 实例换成文字（`text/lg/regular`，`text/primary`）。Header 改为随宽度填充，放进 752px 宽的题卡不用再加覆盖。题号方块底色从写死的 (244, 244, 245) 绑到 `fill/neutral/subtle`（两个变体都改） |
| Role=Student, Scene=Report-Ungraded | 目标句块同上。Header 原来嵌的是所有题型共用的 `Header / Role=Student, Scene=Report-Ungraded`（小号题号、14px 标题、浅灰分数），和 ticket 第 13 张不一致；共用组件有 21 处实例，改它会波及其他题型，所以只在 Speak Aloud 这个变体里换成和 Report 一样的 Header：不放状态标签，分数块用 `fill/neutral/subtle` + `text/primary` |

Question-Library 本地组件用的 `input/bg-disabled`、`input/text` 来自另一套变量库，库文件里没有；按实际颜色换成 DS 2.0 里值完全相同的变量：(245, 245, 245) → `fill/neutral/subtle`，(10, 10, 10) → `text/primary`。

**核对**：库变体和 Question-Library 本地组件逐像素对比。

| 状态 | 怎么配 | 结果 |
| --- | --- | --- |
| 满分 | Report 默认 | 一致 |
| 未出分 | Report-Ungraded 默认 | 一致 |
| Insufficient Response | Report + 标签切 Insufficient Response + `0 / 1 pt` + 打开 `Show No Speech Notice` | 一致（截图边界差 2px，对齐后最大色差 15） |
| Not Answered | Report + 标签切 Not Answered + `0 / 1 pt` + Audio Row 换 Student / Empty | 一致（空录音图标有 2 个像素的抗锯齿差异） |
| 未出分、没作答 | Report-Ungraded + Audio Row 换 Student / Empty | 一致（同上） |

测试用的临时实例已删除。

**还差一步**：库改动需要**再发布一次**（`Speak Aloud`）。发布后，在 Question-Library 把 7 张成绩页的题卡从本地 `Speak Aloud / Student Report` 换成库里的这两个变体，逐张和替换前的截图对比，再删除本地的 `Student Report`、`Student Result Badge`。

## 2026-10-20 · 对照 APACPO-329 逐张检查学生端

**任务来源**：用户要求对照 [APACPO-329](https://linear.app/kira-learning/issue/APACPO-329/pm-design-review-2-student-view-speak-aloud) 再检查一遍 [Student](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11501-11438)。

**方法**：下载 ticket 的 18 张参考图（1440×900），和对应画板的 1x 截图逐像素比，分顶栏、题卡、底栏三块统计差异，再逐处放大确认。组件库 `Speak Aloud` 的成绩卡改动这时还没发布，成绩页继续用本地组件。

**发现的问题：staging 外壳没有照截图做准。** ticket 说明这些图是「staging 的真实页面，只把题卡换成 Speak Aloud」，所以外壳部分要和截图一致。之前做外壳时只对了结构，样式和尺寸有不少偏差：

| 位置 | ticket（staging） | 之前 |
| --- | --- | --- |
| 作答页顶栏「Back to Home」 | 图标 x=38，文字 x=81，Regular，(24, 24, 27) | 图标 x=18，文字 x=41，Medium，(10, 10, 10) |
| 作答页计时器 | 130×51 的框，6px 圆角，`base/border` 描边，(250, 250, 250) 底；数字 20px；冒号和大写 HR / MIN / SEC 是 (113, 113, 122) | 没有框，小写 hr / min / sec，冒号是全角「：」，间距更宽 |
| 作答页底栏题号 | 普通题号 (244, 244, 245) 底、(113, 113, 122) 字；第 1 题也是普通样式；当前题 (124, 58, 237) | 普通题号 (250, 250, 250) 底、(144, 144, 144) 字；第 1 题浅紫（已作答）；当前题 (116, 82, 228) |
| 作答页 View All、Next | 6px 圆角；View All 宽 112，和 Next 间隔 16 | 胶囊形；View All 宽 110，间隔 12 |
| 题卡里的 Prev / Previous / Next | 按内容自适应：Prev 88、Previous 116、Next 89；成绩页两按钮间隔 4 | 固定 101 宽，「Previous」文字顶到右边框；间隔 8 |
| Mark for Review | 宽 166（图标和文字间距 10） | 宽 164（间距 8） |
| 成绩页内容位置 | 白色面板从 y=92 开始 | 从 y=100 开始，整体低 8px |
| 成绩页底栏 | 第 1 题浅红 (255, 205, 195)、深红字 (180, 0, 0)；当前题 (124, 58, 237) 叠 80% 不透明度 = (150, 97, 240)；其他普通样式；顶部 1px `base/border` 线 | 按对错上绿、橙色；当前题白底深绿描边；没有顶部线 |
| 老师暂停弹窗 | 600 宽、垂直居中；正文 16/24；按钮高 36；遮罩 50% 黑，背景模糊到看不清字 | 512 宽、偏上 40px；正文 14/20；按钮高 40；遮罩 64% 黑，模糊 4，字还读得出 |

**改动**（都在 Question-Library，只动学生端）

| 位置 | 改动 |
| --- | --- |
| 本地组件 `Staging / Exam Top Bar` | 左边距 36、图标和文字间距 28；文字改 Regular，文字和图标用 `base/foreground`；下边线用 `base/border`。计时器重做：130×51 框，`base/sidebar-background` 底、`base/border` 描边、6px 圆角；数字 Inter Medium 20/24，冒号和标签 `base/muted-foreground`，标签 Regular 14/16 大写，每个标签和上面的数字居中对齐 |
| **新建**本地组件集 `Staging / Bottom Bar`（Student Components） | 从原来的底栏复制。`Page=Exam`：题号 `base/secondary` 底 + `base/muted-foreground` 字，当前题 `violet/600`；View All、Next 6px 圆角，View All 图标间距 10，两按钮间隔 16。`Page=Review`：第 1 题浅红（staging 专用色，没有对应变量，写死），当前题 `violet/600` + 图层不透明度 80%，去掉 Next，View All 保持胶囊形，顶部 1px `base/border` 外描边 |
| 19 张画板 | 底栏从库组件 `Question navigation` 换成 `Staging / Bottom Bar`：12 张作答页（含 Assignment Paused）用 Exam，7 张成绩页用 Review |
| 19 张画板的题卡按钮 | Prev / Previous / Next 改为按内容自适应宽度，图标间距 10；Mark for Review 图标间距 10；成绩页两按钮间隔 4 |
| 7 张成绩页 | Content 顶部内边距 40 → 32，鼠标示意跟着上移 8px |
| Assignment Paused | 弹窗宽 600，内边距 25（staging 的 1px 边框在 24px 内边距之外，Figma 内描边要多 1px 才等价），正文 16/24，按钮换成 `Size=sm`（高 36）并把左右内边距改回 16（宽 159），放在 (420, 357) 居中；遮罩改成 50% 黑（DS 里没有 50% 的变量，最接近的是 48%，按 staging 写死），背景模糊 4 → 16；鼠标示意跟到按钮上 |

**核对结果**（和 ticket 差异超过 40 的像素数）

| 画板 | 之前 | 现在 | 剩下的差异 |
| --- | --- | --- | --- |
| 作答页 1–11 | 4,247–8,416 | 2,837–7,021 | 计时器的时间不同（我们 00:38:25，ticket 每张不一样）；鼠标示意；文字渲染；下面「没改的」几项 |
| 老师暂停 12 | 93,125 | 4,761 | 背景是另一个状态的页面，模糊后有色块差异；顶栏、底栏已经是 0 |
| 成绩页 13–18 | 20,309–29,960 | 1,063–1,250 | 鼠标示意和文字渲染（字形边界相差都不超过 1px） |

**没改的，以及原因**

1. **Try again 按钮是白底，ticket 第 4、5、7 张是灰底。** 第 1、6、8–11 张里的灰底按钮，和我们画板上加了鼠标示意的 Hover 状态逐像素重合，说明 PM 是用我们之前带悬停效果的画板做的图；第 4、5、7 张的 Try again 是 PM 照着悬停样式补画的。staging 里题卡内的按钮（Mark for Review、Prev、Next）默认都是白底，所以 Try again 保持 DS 的 Outline 默认样式。
2. **已录状态播放器比 ticket 低 8px**（「Your teacher can listen…」到播放器 18px、播放器到 Try again 16px；ticket 是 10 和 24）。这部分也是 PM 补画的新内容，我们按 16px 节奏排，不改。
3. **播放中进度**：ticket 是 0:03、约 38%，我们是 0:04、50%，只是示意。
4. **说明文字换行差一两个词**：ticket 里 PM 改过的文字渲染得更窄，字号行高没问题（上一轮已核对）。
5. **Next 宽 90，ticket 89**：浏览器和 Figma 对「Next」文字宽度取整不同，和 Prev 保持同一套间距。
6. **计时器的时间**：不改成 ticket 的值，各画板统一 00:38:25。

**另外注意到的**：检查过程中 Student 区域高度从 5749 变成 6289，Student Components 从 y=200 移到 y=2274。这次的脚本没有改过这两个区域，应该是有人同时在调整文件。

## 2026-10-20 · 成绩页换回库组件

**任务来源**：用户发布了组件库（`Speak Aloud` 学生端成绩卡），要求处理后续。

**确认发布内容**：从 Question-Library 取到的最新副本（`12232:33350`）里，Report、Report-Ungraded 的目标句块已是灰底文字块，Header 随宽度填充，和 10/20 改的一致。

**改动**（Question-Library 学生端 7 张成绩页）

| 画板 | 换成 | 覆盖 |
| --- | --- | --- |
| Submitted Ungraded - Answered | Report-Ungraded | 题号 2 |
| Submitted Ungraded - Not Answered | Report-Ungraded | 题号 2；Audio Row 换 Student / Empty |
| Graded - Needs Grading | Report-Ungraded | 题号 2 |
| Graded - Full Points | Report | 题号 2 |
| Graded - 0 Points | Report | 题号 2；`0 / 1 pt` |
| Graded - Insufficient Response | Report | 题号 2；`0 / 1 pt`；标签切 Insufficient Response；打开 `Show No Speech Notice` |
| Graded - Not Answered | Report | 题号 2；`0 / 1 pt`；标签切 Not Answered；Audio Row 换 Student / Empty |

**核对**：替换前后逐像素对比。5 张完全一致；两张未作答的只在空录音图标上有 2 个像素差异（最大色差 25），是新旧两版图标的抗锯齿不同。

**清理**：确认整个文件没有其他实例后，删除本地组件 `Speak Aloud / Student Report` 和 `Student Result Badge`。Student Components 里剩下的 `Staging / Exam Top Bar`、`Staging / Review Top Bar`、`Staging / Bottom Bar` 重新排到区域顶部，区域高度 1622 → 688。

**发现：Question-Library 还没接受最新的库更新。** 除了这 7 张成绩页，页面上其余 `Speak Aloud` 实例都还指向上一版副本（`12192`）：学生端 12 张作答页、老师端 Preview 5 张、Teacher Editor 20 张、Teacher Grading 20 张。这次发布只改了学生端成绩卡，所以旧版实例画面不受影响。建议在 Question-Library 接受一次库更新，让版本统一；接受后需要再检查一遍作答页里切换过状态的录音区（10/19 出现过只更新默认状态、其余状态停在旧版的问题）。

## 2026-10-20 · 处理中按钮里的方块改成加载

**任务来源**：Xiaoyue 在 [APACPO-329](https://linear.app/kira-learning/issue/APACPO-329/pm-design-review-2-student-view-speak-aloud) 回复「设计稿已经更新」（评论 `cacf1d46`）：「还没过。处理中圆按钮留着，里面的方块换成加载，这一步不能再点。旁边的小加载去掉，文案仍是 `Processing...`。其余不用改。」附图左边是现在的样子（方块 + 文案旁的小转圈），右边是建议（圆按钮里一条加载圆弧，文案旁没有小转圈）。

**改动**（只动处理中这一态，学生端）

| 位置 | 改动 |
| --- | --- |
| 组件库 `Speak Aloud / Recording Area` · State=Processing（[`17217:336700`](https://www.figma.com/design/JxbsqAsQTlEL4ZHvL7pekx/Kira-Custom-Components--TO-BE-ARCHIVED-?node-id=17217-336700)） | 圆按钮保持 `Variant=Default, State=Disabled, Size=icon`（40px，不可点，颜色仍是置灰紫）。里面的 Stop 方块换成按钮库的 `Icon / LoaderCircle`（白色 `icon/invert`，圆头描边，描边加粗到 2.5，16px 槽里才看得清）。状态行里的 CircleNotch 隐藏。文案仍是 `Processing...`（Medium 14）。说明文字、波形、间距都没动 |
| Question-Library 学生端 Processing 画板（[`11521:14869`](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11521-14869)） | 同一套覆盖：按钮图标换成 `Icon / LoaderCircle`，旁边的小加载隐藏。这张画板的录音区还指向上一版已发布副本，所以先用覆盖让画面跟上，等发布后再收 |

按钮中心颜色仍是 (183, 166, 239)，和置灰按钮、也和评论附图右边的圆按钮一致。重录走的是同一个 Processing 变体，没有单独的画板。

**没改成附图的两点**

1. 附图里的圆弧开口朝下，用的是手绘示意。按钮库里的加载图标 `Icon / LoaderCircle` 开口朝右，实例里改不了旋转，按图标本身的方向放。
2. 附图里的圆弧比 16px 图标槽大一圈。按钮把图标锁在 16px，拉不大。描边加到 2.5 是为了在这个尺寸下和附图一样粗；图标默认描边是 1，缩到 16px 后几乎看不见。

老师端 Preview 的 Processing 没单独改。这个变体是学生端和老师端共用的，但老师端那张画板指向的是更早的副本，发布后不会自己变，见下一节。

**可以回复 Xiaoyue 的草稿（未发送）**

> @xiaoyue 处理中已改：圆按钮留着，这一步不能再点；里面的方块换成加载圆弧，旁边的小加载去掉了，文案仍是 Processing...。其余没动。
> 学生端：https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11521-14869

**还差一步**：组件库的 `Recording Area` 需要再发布一次。发布后 Question-Library 里这张画板的覆盖可以收掉，改成直接用新版变体。

## 2026-10-20 · 处理中加载圆弧发布后的处理

**任务来源**：用户发布了组件库（`Recording Area` 的 Processing 加载圆弧），要求继续。

**确认发布内容**：按 key 从 Question-Library 取到的新版 Processing 变体里，圆按钮仍是 Disabled，图标是 `Icon / LoaderCircle`（白色 `icon/invert`，描边 2.5），状态行的 CircleNotch 隐藏，文案 `Processing...`，和上一节改的一致。

**改动**（Question-Library 学生端 Processing 画板 [`11521:14869`](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11521-14869)）

1. 录音区从上一版副本 `12192:33491` 换到新版 `12258:33276`。
2. 清掉上一节手加的 4 条覆盖：按钮的图标属性、加载图标的尺寸、描边颜色和粗细、状态行 CircleNotch 的隐藏。现在只剩录音区自身的 640×172（题卡宽度需要）。

**核对**

- 换版、清覆盖前后整张画板 1x 截图逐像素对比，差异为 0；按钮中心仍是 (183, 166, 239)。
- Student 区域里只有这一张用到 Processing 态（重录没有单独的处理中画板）。
- 其余 11 张作答页的录音区还指向 `12192`。把 Idle、Recording、Recorded、Mic Blocked、Save Failed 五个状态的新旧副本逐层比对（图层、尺寸、文字、填充、描边、组件属性），完全一致（Recording 只是属性顺序不同），所以不用跟着换。

**老师端（没改）**：Teacher Preview 的 Processing 画板（`11788:45076`）还指向更早的副本 `11731`，按钮仍是 Discard。发布后不会自己更新，需要 Asher 把录音区切到最新版，或者在 Question-Library 接受一次库更新。

**可以回复 Xiaoyue 的草稿（未发送）**：沿用上一节的草稿即可，画面和当时一致，组件库也已发布。

## 2026-10-21 · 学生端统一到最新发布版本

**任务来源**：用户说「我发布好了 recording area，你去做后续处理」。

**确认发布内容**：按 key 拿到的 `Recording Area` 最新版仍是 `12258`，和组件库里的源组件逐层一致（Processing 里是 `Icon / LoaderCircle`，状态行的 CircleNotch 隐藏）。组件库里 `Recording Area`、`Speak Aloud` 的发布状态都是最新（CURRENT）。这就是 10/20 处理过的那次发布，没有新的画面改动。APACPO-329、APACUIX-445 也没有新评论。

**改动**（Question-Library，只动 Student 区域）

| 内容 | 从 | 到 | 数量 |
| --- | --- | --- | --- |
| `Speak Aloud`（Preview、Report、Report-Ungraded） | `12232` | `12267`（本次导入编号 `12269`） | 19 |
| `Speak Aloud / Recording Area` | `12192` | `12258` | 11（加上 10/20 换好的 Processing，学生端 12 个全部是 `12258`） |

换之前，学生端用到的每个变体都把新旧两版逐层比过（图层、尺寸、文字、填充、描边、组件属性），完全一致。所以这次只是统一版本，目标是画面不变。

**核对**：19 张画板换之前、换之后各截一张 1x 图，逐像素对比。

| 画板 | 结果 |
| --- | --- |
| Processing、Recorded、Recorded - Playing、Save Failed、Re-recorded、Re-record - Save Failed、Assignment Paused、7 张成绩页 | 完全一致 |
| Recording | 换完后停止方块变成深色 (23, 23, 23)，还多了一圈 1.33px 的 (250, 250, 250) 描边（Hover 按钮自带的，库里早就去掉了）。按钮切成 Hover 后，库里给方块设的白色没有跟过来。已把方块重新绑到 `icon/invert`、去掉描边，复查完全一致 |
| Not Recorded、Try Again - Ready to Re-record、Microphone Blocked、Re-record - Microphone Blocked | Tap to Speak 的文字从 (24, 24, 27) 变成 (10, 10, 10)，最大色差 17，其他地方一致。**保留新的颜色**，原因见下 |

Tap to Speak 文字颜色为什么不改回去：组件库的 `Recording Area` 把这个按钮的文字设成 `text/primary` (10, 10, 10)。之前 4 张悬停画板显示的 (24, 24, 27) 是 Hover 按钮自带的 `base/accent-foreground`，说明库里的设置当时没生效。Save Failed 和重录保存失败的 Record again 一直是 (10, 10, 10)。现在 5 个悬停的描边按钮颜色一致，悬停和不悬停时文字颜色也一样（悬停只改底色）。如果要和之前的截图逐像素一致，在这 4 个按钮的文字上加回 `base/accent-foreground` 覆盖即可。

**播放器**：Recorded、Re-recorded、Assignment Paused 的播放器（Audio Row · Student / Default）还是 `12192`。Audio Row 这次没有新发布，新版录音区里嵌的也是这份，所以它就是最新版，不用换。

**更正：`Speak Aloud / Audio Row` 和 `Questions Answer State` 并没有单独发布新版本。** 组件库里这两个组件集的发布状态都是「有未发布的改动」（CHANGED）。按 key 去拿已发布的版本：

- Audio Row 已发布的只有 7 个变体，没有 `Role=Student, State=Playing`。
- Questions Answer State 的 Insufficient Response 查不到。Not Answered、Rubric Graded 拿到的也是没有图标的旧样子。

Question-Library 里能看到这些新变体（`12192` 的 Audio Row 带 Playing；`12097` 的 Questions Answer State 有 5 个变体、带图标），是因为它们嵌在 `Speak Aloud`、`Recording Area` 里，作为依赖被一起带过来了。10/20 我判断「已经发布了」，依据就是 `12097` 这份副本，所以那个结论不对。学生端画面现在不受影响。但「已录 - 播放中」那张画板直接用了 Playing 变体：组件面板里搜不到这个变体，以后库里改了它也收不到更新。其他题型的成绩页也用不到新的 Insufficient Response 和带图标的状态标签。

**需要用户操作**：在组件库发布 `Speak Aloud / Audio Row` 和 `Questions Answer State`。发布后我再按 key 确认这两个变体能拿到，并把「已录 - 播放中」的播放器换到正式发布的副本。

老师端没有改动。

## 2026-10-21 · 发布 Audio Row、Questions Answer State 后的检查

**任务来源**：用户说「我都发布了，你再看看」。

| 组件 | 组件库里的发布状态 | Question-Library 按 key 拿到的 | 结论 |
| --- | --- | --- | --- |
| `Speak Aloud / Audio Row` | 最新（CURRENT） | 8 个变体，包括 `Role=Student, State=Playing`；Playing、Student / Default、Student / Empty 都和组件库逐层一致 | 已发布。「已录 - 播放中」的播放器拿到的就是 `12192:33347`，内容和发布版本完全一样，不用换 |
| `Questions Answer State` | 仍是「有未发布的改动」（CHANGED），隔一会儿再查还是一样 | Insufficient Response 还是查不到 | **这次没发出去** |

查了 `Questions Answer State` 本身，没有挡住发布的问题：它在 `Assessment - WIP` 页的 `Question Components` 区里，名字不以 `.` 或 `_` 开头，5 个变体的属性没有冲突，里面的图标都来自其他已发布的库。最可能是发布时没有勾选它。

**需要用户操作**：在组件库的发布面板里找到 `Questions Answer State`（[`16131:27095`](https://www.figma.com/design/JxbsqAsQTlEL4ZHvL7pekx/Kira-Custom-Components--TO-BE-ARCHIVED-?node-id=16131-27095)），勾选后再发布一次。这个组件是所有题型成绩页共用的，发布后其他题型的成绩页也会拿到新样式（Rubric Graded 灰色 + 图标、Not Answered 加图标、新增 Insufficient Response），这是 APACUIX-445 第 4 条要的。学生端 Speak Aloud 成绩页现在用的是 `Speak Aloud` 带进来的新版，画面已经是对的，发布后不会变。

## 2026-10-21 · 再次对照 APACPO-329 检查学生端

**任务来源**：用户要求再对照 [APACPO-329](https://linear.app/kira-learning/issue/APACPO-329/pm-design-review-2-student-view-speak-aloud) 检查一遍 [Student](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11501-11438)。

**ticket 有什么变化**：描述在 10/21 09:09 更新过，「3. 处理中」下面加了一张「左为现在、右为建议」的图，和 10/20 Xiaoyue 评论里的图逐像素相同，已经按它改过。其余 18 张参考图的地址和 10/20 下载时完全一样，内容没变。评论区只多了用户 06:55 回复 Pamper 的「设计稿已更新」。

**方法**：20 张学生端画板重新截 1x 图，和 ticket 参考图、10/20 收尾时的截图、今天 02:30 统一版本后的截图分别做逐像素对比，找出哪些是新变化。

**从 10/20 收尾到现在的变化**

| 画板 | 变化 | 来源 |
| --- | --- | --- |
| Processing | 圆按钮里换成加载圆弧，去掉文案旁的小加载 | 10/20 PM 评论，符合 ticket 新图 |
| Not Recorded、Try Again | Tap to Speak 文字 (24, 24, 27) 变为 (10, 10, 10) | 今天 02:30 统一版本（见上一节） |
| Recorded、Recorded - Playing、Re-recorded、Microphone Blocked、Save Failed、两张重录失败、Assignment Paused | 录音区变矮：Recorded 矮 14px，Mic Blocked 矮 18px，Save Failed 矮 34px | 今天 02:43 之后组件库的 `Recording Area` 被改过并重新发布（副本 `12314`），Question-Library 也接受了更新 |
| 7 张成绩页 | 没有变化 | 和 10/20 收尾时逐像素一致（14、18 两张只有 10/20 换库组件时空录音图标 2 个像素的抗锯齿差异） |

**组件库 `Recording Area` 今天的改动，和 ticket 不一致（没改，需要用户决定）**

Recorded、Mic Blocked、Save Failed 三个状态，把状态行和说明文字合进了新的 `Status Message` 组：

- 组内间距 6px，原来是 16px。
- 说明文字从 14/20 改成了 12/16。

和 ticket 第 4、5、7–11 张的差别：

- ticket 里这三个状态的说明文字都是 14px。
- Save Failed 在 ticket 里是两行，现在一行；Mic Blocked 的换行位置也不同。
- Recorded 的播放器比 ticket 高 6px，题卡比 ticket 矮 14px。

另外，组件内部现在不统一：Idle（含 Try Again 后的 Your last recording is still saved…）、Recording、Processing、Idle / Disabled、Recorded / Disabled 的说明文字仍是 14/20、间距 16。这次改动是有意做的、也已经发布，所以没有改回去。两个方向选一个：把这三个状态改回 14/20 + 16，和 ticket、其他状态一致；或者把 12/16 + 6 推到所有状态。

**这次修的**

1. **鼠标示意跟着按钮挪回原位。** 录音区变矮后按钮上移，鼠标示意是画板上的独立图层，没有跟着动。「重录保存失败」的鼠标已经悬在按钮下方的空白处，另外 6 张也往下偏了。按各自按钮上移的距离把鼠标挪回去：Recorded、Recorded - Playing、Re-recorded 上移 14px，两张 Mic Blocked 上移 18px，Re-record - Save Failed 上移 34px。Save Failed 那张的鼠标之前已经有人挪过 18px，所以直接放到 y=420，和重录那张一致。挪完后，每个鼠标和按钮的相对位置都和改版前逐像素一致。
2. **Assignment Paused 背景里的录音区改成 `State=Recorded, Interaction=Disabled`。** ticket 第 2 条写「交卷后、暂停或锁定时不出现 Try again」，但这张画板弹窗下方还能看到 Try again 的模糊色块。Disabled 是组件库专门给暂停、锁定、交卷后用的状态，没有 Try again 和播放器。ticket 第 12 张的背景是 staging 里另一道普通题，看不出录音区状态，所以按文字规则改。改完后背景题卡下沿正好在弹窗下方，Prev、Next 那一行从弹窗右侧露出来，布局和 ticket 第 12 张更接近。弹窗本身没变。

**逐条核对 ticket 的文字要求**

| ticket | 结果 |
| --- | --- |
| 问题 1：外壳用 staging | 顶栏、底栏、题卡按钮和 10/20 收尾时一致 |
| 问题 2：已录保留 Try again；点了回到 Tap to Speak，提示 `Your last recording is still saved. Record again to replace it.`；失败提示见第 10、11 张；暂停时不出现 Try again | 文案逐字一致；暂停画板已改成 Disabled（见上） |
| 问题 3：暂停用整页 Assignment Paused | 一致 |
| 问题 4：播放器只在已录状态出现，点 Try again 后不显示 | 一致 |
| 问题 5：停止图标，提示 `Tap stop when you finish. Recording stops on its own once every word is heard, or after 100 seconds.` | 一致 |
| 3. 处理中（新图） | 圆按钮置灰不可点，里面是加载圆弧，文案旁没有小加载，文案 `Processing...` |

**组件库发布状态**：`Recording Area`、`Audio Row` 是最新。`Questions Answer State` 仍未发布。`Speak Aloud` 显示有未发布的改动：8 个变体和已发布版本逐层一致，应该是里面嵌的 `Recording Area` 重新发布后被标成了已改动，学生端画面不受影响。

## 2026-10-22 · APACPO-330：未作答的分数显示「-」

**任务来源**：用户要求处理 [APACPO-330](https://linear.app/kira-learning/issue/APACPO-330/pm-design-review-2-speak-aloud-设计稿走查)。ticket 描述只有一句「Speak aloud 设计稿走查 issue 汇总」，目前只有 Pamper 的一条评论（10/22 10:32，北京时间）：

> 学生成绩页 Speak Aloud「未作答」这张设计稿（[`11523-17558`](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11523-17558)），现在画的是 `0 / 1 pt`，需要改成 `- / 1 pt`。按 APACPO-329 走查定下的规则，题目没作答时题卡上分数显示「-」，不显示 0（算总分时仍按 0 分计）。所有题型都是这样，staging 上 Short Response 没作答也显示 `- / 4 pts`。

`11523:17558` 是 Graded - Not Answered 画板（`11523:17556`）的 Content。

**改动**（Question-Library，只动这一张）

| 画板 | 改前 | 改后 |
| --- | --- | --- |
| Graded - Not Answered | `0 / 1 pt` | `- / 1 pt` |

分数块的样式不变（已出分的紫底 + 深紫字，Inter Medium 14），只改文字覆盖。分数块宽 62 → 60，右边缘不动，左边的 Not Answered 标签跟着右移 2px，间距不变。改前改后整张画板 1x 截图对比，只有这两处像素变化。

**其余画板逐张核对过分数**

- 作答中 12 张、还没出分的 3 张（Submitted Ungraded 两张、Graded - Needs Grading）本来就是 `- / 1 pt`。
- Graded - Full Points 是 `1 / 1 pt`。
- Graded - 0 Points 和 Graded - Insufficient Response 保留 `0 / 1 pt`：前者答了但得 0 分，后者录了音但没听到声音，都算已作答，按规则显示 0。

**可以回复 Pamper 的草稿（未发送）**

> @pamper 已改：学生成绩页「已出分、未作答」的分数改成 `- / 1 pt`。其余成绩页核对过：没出分的本来就是 `-`，0 分和 Insufficient Response 两张是已作答，保留 `0 / 1 pt`。
> https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11523-17556

## 2026-10-22 · 录音区说明文字恢复 14px

**任务来源**：用户决定「说明文字保持 14px」，也就是 10/21 列的第一个方向：Recorded、Mic Blocked、Save Failed 三个状态改回 14/20 + 间距 16，和 ticket、组件里其他状态一致。

**改动**（组件库 `Speak Aloud / Recording Area`，[`17217:336704`](https://www.figma.com/design/JxbsqAsQTlEL4ZHvL7pekx/Kira-Custom-Components--TO-BE-ARCHIVED-?node-id=17217-336704)）

| 状态 | 说明文字 | `Status Message` 组内间距 | 高度 |
| --- | --- | --- | --- |
| Recorded | `text/xxs/regular`（12/16）→ `text/sm/regular`（14/20） | 6 → 16 | 194 → 208 |
| Mic Blocked | 同上 | 6 → 16 | 118 → 136 |
| Save Failed | 同上 | 6 → 16 | 102 → 136 |

颜色本来就是 `text/secondary`，没动。`Status Message` 这层分组保留，只是间距改回 16，所以几何和改版前完全一样（三个高度都回到了改版前的 208、136、136）。截图核对：Mic Blocked 在「You」后换行、Save Failed 在「record」后换行，和 ticket 第 8、9 张一致。

**没改的：状态行里图标和文字的间距。** 改版时 Mic Blocked、Save Failed 的 `Error Status` 图标间距也从 16 改成了 6。ticket 第 8–11 张是 16（实测图标和文字之间的空白，ticket 18–20px，现在 8–10px），所以现在图标比 ticket 靠近文字 10px。这次用户只定了说明文字，这一处没动，列给用户决定。

**还差一步**：组件库需要再发布一次 `Recording Area`。发布后，Question-Library 这 7 张画板的录音区会恢复到改版前的高度：Recorded、Recorded - Playing、Re-recorded、Microphone Blocked、Save Failed、两张重录失败（Assignment Paused 用的是 Recorded / Disabled，不受影响）。10/21 跟着改版上移的鼠标示意，要再挪回原位：已录三张下移 14px，两张 Mic Blocked 下移 18px，两张 Save Failed 下移 34px。挪完逐像素和 10/21 02:30 的截图对比。

## 2026-10-22 · 说明文字 14px 发布后的处理

**任务来源**：用户发布了组件库，要求处理后续。

**发布状态**：`Recording Area`、`Questions Answer State`、`Audio Row` 都是最新（CURRENT）。

- `Questions Answer State` 这次终于发出去了：Insufficient Response 能按 key 拿到，发布版本的 5 个变体和组件库逐层一致。
- `Speak Aloud` 仍显示有未发布的改动，原因同 10/21：它嵌的 `Recording Area` 重新发布过，变体内容和发布版本一致。

**改动**（Question-Library，只动 Student 区域）

1. **录音区换到新版 `12383`。** Question-Library 没有接受更新，学生端 12 个录音区里 10 个还在改版那一版 `12314`（说明文字 12px），2 个在 `12258`。全部换到 `12383`。Recorded 高度 194 → 208，Mic Blocked、Save Failed 118 / 102 → 136，回到改版前。换完复查：录音中的停止方块仍是白色、没有描边、按钮仍是 Hover。
2. **鼠标示意挪回原位**：已录三张 456，两张 Mic Blocked 和两张 Save Failed 454，都是改版前的位置。

**核对**：12 张作答页 1x 截图逐像素对比。

| 画板 | 对比对象 | 结果 |
| --- | --- | --- |
| Not Recorded、Recording、Processing、Recorded、Recorded - Playing、Try Again、Re-recorded | 10/21 02:30（改版前） | 完全一致 |
| Assignment Paused | 10/21 改成 Disabled 后 | 完全一致 |
| Microphone Blocked、Save Failed、两张重录失败 | 10/21 02:30 | 只有状态行（y 355–370）不同：图标和文字的间距现在是 6，改版前是 16 |

和 ticket 的差异像素（超过 40 的）明显下降：

| 画板 | 改版后 | 现在 |
| --- | --- | --- |
| Recorded | 8,562 | 5,367 |
| Mic Blocked | 12,043 | 4,585 |
| Save Failed | 9,866 | 4,790 |

两张重录失败是 8,751、8,399。改版前就是 7,734、7,153，原因是 10/19 记过的说明文字换行差一两个词，多出来的约 1,000 来自图标间距，和首次失败那两张一样。

**还没定的**：状态行图标间距（6 还是改回 ticket 的 16），见上一节。
