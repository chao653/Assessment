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
