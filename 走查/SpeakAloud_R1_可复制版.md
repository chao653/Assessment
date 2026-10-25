# Speak Aloud 设计走查 R1

走查时间 2026-10-22 18:00–18:50（UTC+8） · staging · Chrome 156 · 1440×900 · 范围：老师端（编辑页、Preview、Monitor 作答抽屉、批改页）+ 学生端（作答、成绩页）

[Slack 原帖](https://kiralearning.slack.com/archives/C0C2J6GNP41/p1792658296631009) · [APACUIX-466](https://linear.app/kira-learning/issue/APACUIX-466) · [Figma](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11436-35232) · [PRD](https://app.notion.com/p/3e270a1b99248169bd37fb0eec960a5e)

## 结论

共 20 条问题：中 8 条，低 12 条（其中 #7、#12、#17、#18 需要先和 PM / 设计确认口径）。2 张已提单在 staging 复测已修复。

**先处理：**
1. Language 标签 5 个页面 4 种样子，只有批改页和设计一致（#1）
2. 断网时录音一直停在 Processing，不能重录（#13）
3. Monitor 作答抽屉没有复用成绩页题卡（#19）

## 问题清单

### 跨页面

#### #1 【中】Speak Aloud 语言标签在 Preview、学生作答、成绩页、Monitor 抽屉的样式与设计稿灰底不一致

**页面：** 老师 Preview、学生作答、学生成绩页、Monitor 作答抽屉（编辑页字号）

**实际：**
- 编辑页：灰底，文字 13px。
- 老师 Preview、学生作答：白底 + 1px 灰描边，13px。
- 学生成绩页、Monitor 作答抽屉：蓝底 `#2563EB` + 白字，13px。
- 批改页：灰底 12px（APACFE-4318 已修好，和设计一致）。

**预期：**
- 所有页面统一用设计稿 Language Badge：底色 `#F4F4F5`、无描边、文字 Inter Medium 12px / 16px `#18181B`、地球图标 12px。

**备注：** APACFE-4267（编辑页）、APACFE-4318（批改页）只覆盖各自页面；Preview、学生作答、成绩页、Monitor 抽屉 4 处是新问题。

**截图（左设计稿 / 右 staging）：**

![#1 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/01_language_badge.png)

**Figma：** [Teacher Preview](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11788-45050) · [Student 作答](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11519-49124) · [Student 成绩页](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11523-17545)

**环境：** staging · 老师 Luke Larkin / 学生 Hwa、Leola、Rebekah、Aura（code 9Z66F7）

### 老师端 · 编辑页

#### #2 【中】Speak Aloud「Text for Students to Speak」标签字号比设计稿小

**页面：** 编辑页 Speak Aloud 题卡

**实际：**
- 标签 14px / 行高 14px，颜色 `#222`。

**预期：**
- Inter Medium 16px / 24px，`#0A0A0A`。

**备注：** APACFE-4269 修了字重，字号还没改。

**截图（左设计稿 / 右 staging）：**

![#2 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/02_editor_label_and_instructions.png)

**Figma：** [Speak Aloud Over 80 Words](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11925-47055)

**环境：** staging · 老师 Luke Larkin · [编辑页](https://staging.kira-learning.com/ai-tools/assessment/edit/01a16311-1b09-758f-94a8-b0bb6e9a43a8/)

#### #3 【中】Speak Aloud Instructions 填写后文字字重比设计稿粗

**页面：** 编辑页 Speak Aloud 题卡

**实际：**
- 填写后的 Instructions 是 500（Medium），和下面的目标文本一样粗。

**预期：**
- Instructions 用 Regular 400，只有目标文本用 Medium，两者要有层级差。

**截图（左设计稿 / 右 staging）：**

![#3 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/02_editor_label_and_instructions.png)

**Figma：** [Speak Aloud Over 80 Words](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11925-47055)

**环境：** staging · 老师 Luke Larkin · [编辑页](https://staging.kira-learning.com/ai-tools/assessment/edit/01a16311-1b09-758f-94a8-b0bb6e9a43a8/)

#### #4 【低】Speak Aloud 目标文本 placeholder 颜色比设计稿深

**页面：** 编辑页 Speak Aloud 空白题卡

**实际：**
- `Enter the exact text you want the student to say...` 颜色 `#71717A`，比上面 Instructions 的 placeholder（`#888`）深，看起来像已填内容。

**预期：**
- `#888`，和 Instructions placeholder 一致。

**截图（左设计稿 / 右 staging）：**

![#4 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/03_editor_target_placeholder.png)

**Figma：** [Speak Aloud Empty Landed](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11437-44297)

**环境：** staging · 老师 Luke Larkin · [编辑页](https://staging.kira-learning.com/ai-tools/assessment/edit/01a16311-1b09-758f-94a8-b0bb6e9a43a8/)

#### #5 【低】Speak Aloud 新加的空白题卡底部缺少 No standards added yet.

**页面：** 编辑页 Speak Aloud 空白题卡

**实际：**
- 空白题卡底部什么都没有；填完目标文本后才出现 `No standards added yet.`。

**预期：**
- 空白题卡也显示 `No standards added yet.`；点 Assign 被拦时由 `Missing expected text.` 替换。

**截图（左设计稿 / 右 staging）：**

![#5 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/04_editor_empty_no_standards.png)

**Figma：** [Speak Aloud Empty Landed](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11437-44297)

**环境：** staging · 老师 Luke Larkin · [编辑页](https://staging.kira-learning.com/ai-tools/assessment/edit/01a16311-1b09-758f-94a8-b0bb6e9a43a8/)

#### #6 【低】题卡底部提示和报错的字号、图标与设计稿不一致

**页面：** 编辑页 Speak Aloud 题卡底部

**实际：**
- `No standards added yet.`、`Missing expected text.`、`Use 80 words or fewer...` 都是 16px / 24px，图标是感叹号圆圈。

**预期：**
- 14px / 20px Medium；提示用 Info 图标、`#888`；报错用 XCircle 图标、红色。

**备注：** 报错时 staging 整张卡描边变红，设计是卡片保持选中紫边、只有输入框变红；「输入框变红」已在 APACFE-4178 取消，这里只提字号和图标。

**截图（左设计稿 / 右 staging）：**

![#6 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/05_editor_footer_message.png)

**Figma：** [Speak Aloud Assign Blocked](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11925-46124)

**环境：** staging · 老师 Luke Larkin · [编辑页](https://staging.kira-learning.com/ai-tools/assessment/edit/01a16311-1b09-758f-94a8-b0bb6e9a43a8/)

#### #7 【低 · 需确认】Question Settings 副标题文案、空白题 Bloom's / Level 默认值与设计稿不一致（需确认）

**页面：** 编辑页 → Speak Aloud 题卡 → Question Settings

**实际：**
- 副标题 `Adjust the question settings to tailor the experience for your audience.`
- 新建的空白 Speak Aloud 显示 `Bloom's Taxonomy: Analyze`、`Level: Medium`。

**预期：**
- 设计：副标题结尾 `for your students.`；空白题 Bloom's / Level 都是 `N/A`。

**备注：** 需确认：副标题是所有题型共用的老文案；老师没设置时 Bloom's / Level 是否显示 N/A。

**截图（左设计稿 / 右 staging）：**

![#7 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/06_editor_settings_drawer.png)

**Figma：** [Question Settings Open](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11491-13498)

**环境：** staging · 老师 Luke Larkin · [编辑页](https://staging.kira-learning.com/ai-tools/assessment/edit/01a16311-1b09-758f-94a8-b0bb6e9a43a8/)

#### #8 【低】Question Settings 的 Language 下拉选中项样式与设计稿不一致

**页面：** 编辑页 → Question Settings → Language

**实际：**
- 选中项灰底 + 右侧对勾。

**预期：**
- 选中项淡紫底、无对勾。

**备注：** 共用 Select 组件，可能影响其他下拉，改前确认范围。

**截图（左设计稿 / 右 staging）：**

![#8 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/07_editor_language_menu.png)

**Figma：** [Language Open](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11540-18763)

**环境：** staging · 老师 Luke Larkin · [编辑页](https://staging.kira-learning.com/ai-tools/assessment/edit/01a16311-1b09-758f-94a8-b0bb6e9a43a8/)

#### #9 【低】加题弹窗关闭图标比设计稿小

**页面：** 编辑页 → Add Question 弹窗

**实际：**
- 右上角 × 约 16px。

**预期：**
- 24px。弹窗其他部分（Blank question、Speak Aloud 图标、Quantity、Add blank question）都一致。

**截图（左设计稿 / 右 staging）：**

![#9 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/08_add_dialog.png)

**Figma：** [Speak Aloud Type Selected](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11682-41469)

**环境：** staging · 老师 Luke Larkin · [编辑页](https://staging.kira-learning.com/ai-tools/assessment/edit/01a16311-1b09-758f-94a8-b0bb6e9a43a8/)

### 老师端 · Preview

#### #10 【中】Speak Aloud 点 Try again 后麦克风被拦截，提示说上一段录音还在

**页面：** 编辑页 → Preview → Speak Aloud 题

**实际：**
- 先录一段 → 点 Try again → 麦克风被拦截，说明是 `Allow microphone access in your browser to record again. Your last recording is still saved.`（学生端重录的文案）。Preview 的录音不保存，这句话不成立。

**预期：**
- 和首次被拦截一样：`Allow microphone access in your browser to answer this question. You can keep working on the other questions.`

**备注：** APACFE-4308 测的是首次被拦截，已修好；这是点过 Try again 之后的分支。

**截图（左设计稿 / 右 staging）：**

![#10 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/09_preview_mic_blocked_after_try_again.png)

**Figma：** [Teacher Preview - Microphone Blocked](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11788-45115)

**环境：** staging · 老师 Luke Larkin · [编辑页](https://staging.kira-learning.com/ai-tools/assessment/edit/01a16311-1b09-758f-94a8-b0bb6e9a43a8/) → Preview

### 学生端 · 作答

#### #11 【低】Speak Aloud 麦克风被拦截、保存失败的说明文字比设计稿小

**页面：** 学生作答、老师 Preview 的录音区

**实际：**
- 说明文字 12px / 16px（首次和重录、Preview 和学生端都是）。

**预期：**
- Inter Regular 14px / 20px，`#525252`，宽 480。

**截图（左设计稿 / 右 staging）：**

![#11 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/10_exam_error_desc_size.png)

**Figma：** [Microphone Blocked](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11521-14921) · [Re-record - Microphone Blocked](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=12180-33589) · [Save Failed](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11521-14934)

**环境：** staging · 学生 Hwa Marvin（code 9Z66F7）

#### #12 【低 · 需确认】Speak Aloud 作答时分数显示 1 pt，设计稿是 - / 1 pt（需确认）

**页面：** 学生作答题卡右上角

**实际：**
- `1 pt`。

**预期：**
- 设计：学生作答所有帧都是 `- / 1 pt`（老师 Preview 是 `1 pt`）。

**备注：** 需确认：作答中显示 `- / 1 pt` 是否是想要的（其他题型作答时只显示分值），确认后改设计或改实现。

**截图（左设计稿 / 右 staging）：**

![#12 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/11_exam_points_chip.png)

**Figma：** [Not Recorded](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11519-49124)

**环境：** staging · 学生 Hwa Marvin（code 9Z66F7）

#### #13 【中】Speak Aloud 断网时录音一直停在 Processing，不能重录

**页面：** 学生作答 → 录音中断网 → 点停止

**实际：**
- 一直显示 `Processing...` / `Saving your recording. You can't record again until this finishes.`，等了 45 秒以上没变化，停止按钮一直转圈；页面顶部有 `Connection lost...` 提示。
- 联网后 0.5 秒内变成 `Audio recorded`，录音补交成功。

**预期：**
- PRD §4.4（Figma 没有这一帧）：显示 `Recording saved on this device` / `It will be sent when you're back online.` + `Try again`，无播放器；算已作答，可以重录。

**备注：** APACFE-4288 修的是「联网后不补交」，补交现在没问题；卡在 Processing 是另一个问题。设计也需要补这一帧。

**截图（左设计稿 / 右 staging）：**

![#13 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/18_exam_offline.png)

**环境：** staging · 学生 Hwa Marvin（code 9Z66F7）

#### #14 【低】交卷确认弹窗「1 unanswered questions」单复数错误

**页面：** 学生作答 → Submit 确认弹窗（老页面）

**实际：**
- 只剩 1 道没答时显示 `You have 1 unanswered questions in this section.`

**预期：**
- 1 道用 `question`，2 道及以上用 `questions`。

**截图（左设计稿 / 右 staging）：**

![#14 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/19_submit_dialog_plural.png)

**环境：** staging · 学生 Hwa Marvin（code 9Z66F7）

### 学生端 · 成绩页

#### #15 【中】Speak Aloud 未作答时 Your Response 区缺少灰框和图标

**页面：** 学生成绩页、Monitor 作答抽屉（未作答的题）

**实际：**
- `No recording was saved for this question.` 只是一行灰字。

**预期：**
- 放在和播放器同尺寸的灰色描边框里（高 64），左边 MicrophoneSlash 图标（Audio Row / Student / Empty）。

**截图（左设计稿 / 右 staging）：**

![#15 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/12_results_not_answered_empty.png)

**Figma：** [Graded - Not Answered](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11523-17556)

**环境：** staging · 学生 Hwa / Leola / Rebekah（code 9Z66F7；报告未发布用 code AKC8GC）

#### #16 【低】Speak Aloud 题卡间距和 Instructions 字号与设计稿不一致

**页面：** 学生成绩页 → See what you answered

**实际：**
- 题头（题号行）到 Instructions 约 36px；Instructions 16px / 24px。

**预期：**
- 题头到内容 16px；Instructions Regular 18px / 28px（目标文本块 18px 已一致）。

**截图（左设计稿 / 右 staging）：**

![#16 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/13_results_spacing.png)

**Figma：** [Graded - Full Points](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11521-50954)

**环境：** staging · 学生 Hwa / Leola / Rebekah（code 9Z66F7；报告未发布用 code AKC8GC）

#### #17 【低 · 需确认】Grading in Progress 副标题文案和题号样式与设计稿不一致（需确认）

**页面：** 学生交卷后的成绩页（评分中）

**实际：**
- 副标题 `Your assessment has been submitted. Your score will appear here automatically once grading is complete.`
- Answer Record 题号白底紫描边。

**预期：**
- 设计：副标题 `Your assessment has been submitted. Scores will be available after teacher review.`；已答题号淡紫实底、未答灰底。

**备注：** 需确认：AI Grading 几秒就出分，staging 的文案可能更准确，确认后统一设计或实现。

**截图（左设计稿 / 右 staging）：**

![#17 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/14_results_grading_in_progress.png)

**Figma：** [Results - Grading in Progress](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=12054-47854)

**环境：** staging · 学生 Hwa / Leola / Rebekah（code 9Z66F7；报告未发布用 code AKC8GC）

#### #18 【低 · 需确认】报告未发布时多出提示条，未作答仍显示状态标签（需确认）

**页面：** 学生成绩页（Manual Grading，老师未发布）

**实际：**
- 题卡上方多了蓝色提示条 `You're viewing your submitted answers. Scores, explanations, and feedback will appear here once your report is released.`
- 未作答的题仍显示 `Not answered` 标签。

**预期：**
- 设计：没有提示条；未作答只显示 `- / 1 pt`、不显示状态标签（Report-Ungraded: no badge）。

**备注：** 需确认：提示条是不是所有题型共用的老逻辑；未发布时未作答要不要显示状态。

**截图（左设计稿 / 右 staging）：**

![#18 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/15_results_unreleased.png)

**Figma：** [Submitted Ungraded - Not Answered](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11523-17523)

**环境：** staging · 学生 Hwa / Leola / Rebekah（code 9Z66F7；报告未发布用 code AKC8GC）

### 老师端 · Monitor 作答抽屉

#### #19 【中】Speak Aloud 作答抽屉没有复用成绩页题卡：目标文本拆成词块、标签写 Expected Text

**页面：** Monitor → 点学生的 Speak Aloud 格子

**实际：**
- 目标文本拆成一个个灰色词块；标签写 `Expected Text`；语言标签蓝底（见 #1）；未作答空状态只有一行字（见 #15）。

**预期：**
- PRD §6：和学生成绩页同一张卡，目标文本整句纯文本（灰底块，18px），标签 `Text for Students to Speak`；回答区标签 `Student Response`（staging 已对）。逐词结果只在批改页看。

**截图（左设计稿 / 右 staging）：**

![#19 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/16_monitor_drawer.png)

**Figma：** [Student 成绩页题卡](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11523-17545)

**环境：** staging · 老师 Luke Larkin · [Monitor](https://staging.kira-learning.com/ai-tools/assessment/session/01a16321-ceae-75f2-8ea3-8217d1448de8/)

### 老师端 · 批改页

#### #20 【中】Speak Aloud 改分后出现学生口吻、选择题口吻的提示

**页面：** 批改页 → 修改 Speak Aloud 分数

**实际：**
- 老师把分数从 0 改成 1 后，题卡顶部出现 `Your teacher changed this score. The answer marks still show the correct choice.`
- 这是老师自己看的页面却写「Your teacher」；Speak Aloud 没有「choice」，标记的是逐词绿 / 红。

**预期：**
- 按设计不显示；如果要保留，改成老师视角、适用于 Speak Aloud 的文案（例如说明逐词颜色仍是自动评分结果），需 PM 定文案。

**截图（左设计稿 / 右 staging）：**

![#20 设计稿 vs staging](https://raw.githubusercontent.com/chao653/Assessment/1a5da6785f845b34c14d7409e8f7fc252a457cf5/%E8%B5%B0%E6%9F%A5/%E6%88%AA%E5%9B%BE/speak-aloud-r1/17_grading_override_notice.png)

**Figma：** [Override Score Updated](https://www.figma.com/design/WLKOeNoCrS33jWIpbjcE9h/Question-Library?node-id=11657-71004)

**环境：** staging · 老师 Luke Larkin · [Monitor](https://staging.kira-learning.com/ai-tools/assessment/session/01a16321-ceae-75f2-8ea3-8217d1448de8/) → Grade

## 已提单复测

| 单 | 内容 | 复测结果 |
| -- | -- | -- |
| [APACFE-4308](https://linear.app/kira-learning/issue/APACFE-4308) | Teacher Preview 处理中 / 已录 / 麦克风被拦截文案 | 已修复：处理中、已录只剩 `Preview recordings aren't saved or scored.`；首次被拦截文案正确。点过 Try again 后被拦截的分支见 #10 |
| [APACFE-4318](https://linear.app/kira-learning/issue/APACFE-4318) | 批改页语言标签蓝底 | 已修复：灰底 `#F5F5F5`、12px |

## 设计稿需要同步（不是前端问题）
- 批改页未作答：staging 显示 `Insufficient Response` 横幅 + `Insufficient response: no answer was provided.`、`0 / 1 pt`、`No audio submitted`，和 PRD §5 一致（APACPO-336 已定）；设计 Unanswered 帧还是 `Not submitted` + `- / 1 pt`。
- 编辑页 Preview Audio：点击后约 1 秒按钮转圈 + 置灰，再变 Stop Audio；设计没有加载态。
- 学生作答断网「Recording saved on this device」没有 Figma 帧（见 #13）。

## 其他观察（不在本次范围）
- 状态标签大小写在同一页面前后两次加载不一样：`Grading in Progress` / `Grading in progress`、`Not Answered` / `Not answered`、`Rubric Graded` / `Rubric graded`。标签写法由 APAC-6434 统一处理，这里只提醒「同页会变」。
- Monitor 矩阵交卷后，0 分的 Speak Aloud 格子（包括 Insufficient Response）是红色 `0`，和选择题答错同色；PRD 要求 Speak Aloud 不出现 Correct / Incorrect，是否需要区分待 PM 判断。
- 编辑页选中题卡描边是 2px `#7452E4`，设计 token 是 1px `#4F33D4`，所有题型共用。

## 没覆盖到的
- 自动停止（听全所有词后自动停）：依赖浏览器语音识别，测试机不可用。
- Needs grading（自动评分不可用）：批改页、成绩页、Monitor 抽屉这一态无法在 staging 人为触发。
- 真实朗读满分：合成语音都被判 0 分，满分态是老师改分得到的。
- Safari、移动端、小屏。

## 测试数据
- 老师：Luke Larkin（teacher1-design-test，账号见 Notion「How to log into staging with test accounts」）
- 测验：Copy - Kindergarten Math: Counting, Shapes & Patterns（只留 2 道 Speak Aloud：Q1 Spanish，Q2 English）· [编辑页](https://staging.kira-learning.com/ai-tools/assessment/edit/01a16311-1b09-758f-94a8-b0bb6e9a43a8/)
- 布置 1：Speak Aloud Design QA 1022（AI Grading，code 9Z66F7）· [Monitor](https://staging.kira-learning.com/ai-tools/assessment/session/01a16321-ceae-75f2-8ea3-8217d1448de8/)
- 布置 2：Speak Aloud QA Manual（Manual Grading，code AKC8GC，只给 Hwa，用来看报告未发布）
- 学生：Hwa Marvin（两题都录，Q2 老师改满分）、Leola West（静音 → Insufficient Response）、Rebekah Shanahan（不答直接交）、Aura Dooley（只录 Q2）
