# SAT Analytics · Figma 操作日志

> 口径：已确认 = PRD / Linear 写明；设计判断 = 本次设计自行决定，可推翻；需用户确认 = 需要 PM 或设计负责人拍板。

## 2026-10-15 · 按 APAC-6071 更新设计稿（六处出图点）

### 任务来源

- Linear：[APAC-6071 [Design] SAT Analytics](https://linear.app/kira-learning/issue/APAC-6071/design-sat-analytics)（父单 [APAC-6070](https://linear.app/kira-learning/issue/APAC-6070/assessment-sat-analytics)）
- PRD：[[PRD] Assessment: SAT Analytics](https://app.notion.com/p/3e270a1b992480cb981ad7801d981ef1) §3–§8
- 原型：[Assessment 4.0 SAT](https://assessment-actandtcap.vercel.app/assessment-4.0.html)（SAT assignment → Monitor → Analytics）
- 学生报告参照：[APAC-6269 SAT 学生报告全部场景](https://linear.app/kira-learning/issue/APAC-6269)（已完成，与 staging 一致）
- 落稿位置：[Assessment 4.0 - SAT · Analytics 页 · Section「SAT Analytics」](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2260-2850)。Linear 评论里旧文件 `Assessment Feedback - Iteration` 的节点 12297:79410 已删除，稿子已整体迁到这个新文件，本次只在新文件上改。
- Designer：Chao；Product Manager：Xiaoyue

### 本次要出图的六处（Ticket 原文）与处理结果

| # | Ticket 要求 | 处理 | 规范板位置 |
| --- | --- | --- | --- |
| 1 | 分数单元格三档，学生报告 / 班级 Analytics / 学生表共用一套，Not Yet Approaching 不用告警红 | 新建 `Analytics SAT / Score Cell`：Meets or Exceeds 绿、Approaching 琥珀、Not Yet Approaching 中性灰、无分 `—`。学生表 230 个单元格按分数重新算档后换成新组件；班级层（分布 meta 卡）三档前加同色圆点 | Visual Spec 第 1 块 |
| 2 | 分布图柱色三档，不和上面那套共用配色 | 新建 `Analytics SAT / Distribution Bar`：品牌紫三档（Above 实色 / Includes 浅紫加品牌描边 / Below 最浅紫），图例用方块，学生档位图例用圆点，形状也分开 | 第 2 块 |
| 3 | 域行 Band 标签若上色，复用学生报告的 band 配色 | 新建 `Analytics SAT / Band Label`：Band 5–7 绿、3–4 琥珀（与学生报告相同 token），1–2 中性灰（学生报告是红，见待确认 #1） | 第 3 块 |
| 4 | Skills Insight 展开区：两段官方陈述 + 顶部灰字限定语 + 底部来源行 | 改成行内白色内嵌面板：顶部 Info 图标 + 灰字限定语 → 两段（标题 medium + 原文 bullet）→ 分隔线 + 来源行 | 第 4 块 |
| 5 | 域行选中态明显，Show less 下置顶保持可见 | 默认行改白底细描边；选中 = 品牌浅紫底 + 1.5px 品牌描边 + 紫色名称 + 紫色勾；Show less 跨科筛选时在「{Section} · Selected」分组下置顶 | 第 5 块 |
| 6 | 加载占位与空态卡片沿用现网分析模块样式 | 加载：每层一个灰块（沿用）+ 标注现网微光动效；空态 / 失败：描边卡片 + 一行居中灰字，高度随内容，去掉固定 200 高 | 第 6 块 |

### 交付节点

画布沿用本 Section 既有排版：左侧需求说明卡，右侧每列顶部一张黄色标题卡，状态稿 1440 宽纵向排列。本次新增最右一列「Visual Spec · APAC-6071」。

| 列 | 状态稿 | node_id |
| --- | --- | --- |
| 需求说明卡 | `SAT Analytics`（Designer 改为 Chao，Notes 补配色决策，Linear 改链 APAC-6071，补原型链接） | [2260:3003](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2260-3003) |
| All Students | Default · Distribution Collapsed | [2260:2851](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2260-2851) |
| All Students | Reading & Writing · Distribution Expanded | [2260:3011](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2260-3011) |
| Domain Filtered & Skills Insight | Domain Filtered · Skills Insight (Gap) | [2260:3133](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2260-3133) |
| Domain Filtered & Skills Insight | Skills Insight Expanded (Class) | [2260:3249](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2260-3249) |
| Math Selected | Math Selected · Domain Filtered | [2260:3328](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2260-3328) |
| Math Selected | Math · Histogram Hover | [2260:3445](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2260-3445) |
| See All 8 & Pinned Selection | See All 8 · Cross-Section Filter | [2260:3563](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2260-3563) |
| See All 8 & Pinned Selection | Show Less · Selected Row Pinned | [2260:3641](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2260-3641) |
| Section With No Scores | Math Selected · No Math Scores Yet | [2260:3716](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2260-3716) |
| No Scores, Failed & Loading | No Scores Yet (AI grading) | [2260:2930](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2260-2930) |
| No Scores, Failed & Loading | No Released Scores Yet (Manual grading) | [2260:2948](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2260-2948) |
| No Scores, Failed & Loading | Failed | [2260:2966](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2260-2966) |
| No Scores, Failed & Loading | Loading | [2260:2983](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2260-2983) |
| Single Section (Math Only) | Math Only · Zero-Gap Domain | [2260:3798](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2260-3798) |
| Visual Spec · APAC-6071（新增） | 六处出图点的规范板 | [2687:5261](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2687-5261)（标题卡 [2686:5250](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2686-5250)） |

关键节点挂了 9 条 Dev Mode 注释（Annotations），写明规则和 token：分布图柱色、学生表档位图例、分布 meta 卡、选中域行、Skills Insight（班级 / 筛选两种锚定）、Show less 置顶、加载占位、空态卡片。

### 新建 / 本地化的业务组件

全部放在「🧱 UI Components」页新建的 Section「[SAT Analytics · Components (APAC-6071)](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2674-4342)」。颜色、间距、圆角、文字样式全部绑 `Design System 2.0 Foundations` 的语义 token。

| 组件 | node_id | 变体 / 属性 | 说明 |
| --- | --- | --- | --- |
| `Analytics SAT / Score Cell` | [2674:4303](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2674-4303) | `Tier=Meets or Exceeds / Approaching / Not Yet Approaching / No Score`，文本属性 `Score` | 新建。Meets `fill/positive/quaternary` + `text/positive`；Approaching `fill/warning/quaternary` + `text/warning`；Not Yet `fill/neutral/subtle` + `text/secondary`；无分 `—` `text/tertiary` |
| `Analytics SAT / Distribution Bar` | [2674:4338](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2674-4338) | `Position=Above BM / Includes BM / Below BM` | 新建。`fill/brand/primary/default` / `fill/brand/primary/secondary` + `border/brand` / `fill/brand/primary/tertiary`；顶部圆角 `sm` |
| `Analytics SAT / Band Label` | [2674:4312](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2674-4312) | `Tone=Band 5–7 / Band 3–4 / Band 1–2`，文本属性 `Band` | 新建。前两档与学生报告 band 徽标同 token |
| `Analytics SAT / Legend Item` | [2674:4319](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2674-4319) | `Kind=Meets or Exceeds / Approaching / Not Yet Approaching / Above BM / Includes BM / Below BM` | 新建。档位用圆点（`icon/positive` / `icon/warning` / `icon/tertiary`），柱子位置用方块 |
| `Analytics SAT / Skills Insight` | [2676:4306](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2676-4306) | — | 从旧母版本地化后改版式（见操作摘要） |
| `Analytics SAT / Domain Row` | [2677:4510](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2677-4510) | `State=Default / Selected / Disabled` × `Insight=Collapsed / Expanded` | 从旧母版本地化；Band 文本换成 `Band Label` 实例；默认 / 选中态重做；内嵌 Skills Insight 换成本地版 |
| `Analytics SAT / Section Summary Card` | [2679:4451](https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2679-4451) | `State=Default / No scores` | 从旧母版本地化；三档前加档位圆点；approaching 改为字重强调 |

为什么要本地化：稿子里的 SAT 业务组件原本挂在旧文件 `Assessment Feedback - Iteration` 的「🧩 Components › SAT Analytics · Components」，那个文件没有作为库发布，新文件里的实例改不了也更新不了母版。所以把需要改结构的三个组件复制成新文件的本地组件，再把稿子里的实例全部换过来。`Analytics SAT / Student Row` 结构没变，仍链接旧母版，只在实例上换了嵌套的分数单元格。

### 操作摘要

- **学生表**：115 行、230 个分数单元格。按单元格里的分数和所在列重新计算档位（R&W BM 480 / Math BM 530，Approaching = BM 下方 20 分以内），再换成 `Score Cell` 对应变体。原稿 Approaching 用的是信息蓝、Not Yet 用的是警示橙，现在分别是琥珀和中性灰。
- **分布图**：35 根柱子按「科目 + band 号」算位置（R&W：1–2 Below、3 Includes、4–7 Above；Math：1–3 Below、4 Includes、5–7 Above），换成 `Distribution Bar`，宽度保留原 band 宽度，高度按每名学生 16px（与原稿比例一致），0 人的柱子是 4px、40% 透明度的短条。`BM 480 / BM 530` 标签由 primitive `violet/700` 改绑 `text/brand/default`。45 个图例项换成新 `Legend Item`。
- **分布 meta 卡**：6 个实例换成本地版；Math 状态的 4 张卡片把图标恢复为 `MathOperations`。
- **域行**：45 个实例换成本地版，逐个回填域名、题量、band、缺口人数、分母、图标和 Skills Insight 文案，band 标签按 band 号自动选色调。默认行从灰底卡片改成白底 + `border/primary` 1px。band 药丸比原来的纯文本宽 16px，统计行在 480 宽的列里会和「What this band means」撞在一起，所以去掉了药丸和人数之间的「·」分隔点（药丸本身已能分隔）。
- **Skills Insight**：改为白色内嵌面板（`surface/layer/primary` + `border/primary`，圆角 `sm`，内边距 / 间距 12）；限定语前加 Phosphor `Info` 图标；两段标题从 semibold 改为 `text/xxs/medium`（规范一般不用 semibold）；陈述文字绑 `text/xxs/regular`，保留 bullet，段间距 4；来源行加顶部分隔线。
- **空态 / 失败态**：3 张卡片高度从固定 200 改为随内容（上下 24 内边距），提示文字从 `text/secondary` 改为 `text/tertiary`（现网是 #909090 灰字）；分布区和表格里的空态文字同步改灰。画板高度随内容收缩，「No Scores, Failed & Loading」列重新等距排列。加载态的灰块（`surface/layer/secondary`，圆角 8）原本就符合「每层一个灰块」，保留，动效写进注释。
- **需求说明卡**：Designer `Asher` → `Chao`，Last Updated `10/15/2026 - Chao`，Linear 链接改为 APAC-6071，Prototype 链接补上原型地址，Notes 补充配色和选中态决策。状态药丸仍是 `In Progress`。

### 结果状态

六处出图点全部落稿，14 张状态稿已切换到新组件，新增规范板一张。待 Chao 自查后提 PM 走查。

参考截图（`参考截图/`）：

| 文件 | 内容 |
| --- | --- |
| `2026-10-15-apac-6071-section-overview.png` | 整个 Section 缩略图 |
| `2026-10-15-apac-6071-visual-spec.png` | 新增规范板 |
| `2026-10-15-apac-6071-components.png` | SAT Analytics · Components |
| `2026-10-15-apac-6071-rw-distribution-expanded.png` | R&W 分布展开（改后） |
| `2026-10-15-apac-6071-domain-filtered-skills-insight.png` | 域行筛选 + Skills Insight（改后） |
| `2026-10-15-apac-6071-math-histogram-hover.png` | Math 分布悬停（改后） |
| `2026-10-15-apac-6071-show-less-pinned.png` | Show less 选中行置顶（改后） |
| `2026-10-15-apac-6071-no-math-scores.png` | Math 无分 |
| `2026-10-15-apac-6071-requirement-card.png` | 需求说明卡（改后） |
| `2026-10-15-apac-6071-before-*.png` | 改前对照（R&W 分布展开、域行筛选） |

### 已确认（来自 PRD / Linear）

- 分数单元格用官方三档 `Meets or Exceeds`（≥ BM）/ `Approaching`（R&W 460–470、Math 510–520）/ `Not Yet Approaching`，没有 `At BM` 档；学生报告、班级 Analytics、学生表共用一套，不可分叉；Not Yet Approaching 不用告警红。
- 分布柱按 band 相对 BM 的位置分三档：Above（下限 > BM）/ Includes（下限 ≤ BM ≤ 上限）/ Below；中间档叫 `Includes BM` 不叫 `At BM`；柱色不能和单元格三档共用，Includes BM 不是 Approaching。
- 柱宽跟随 band 区间（宽度不编码信息，高度编码人数）；0 人不显示计数、不出 tooltip；不加「Standard 上限」之类的解释。
- Band 必须带区间写（`Band 3 · 420–480`）；域行 band 是班级均值所在 band，不跟随筛选变化；若上色，复用学生报告 band 配色。
- Skills Insight：行尾 `What this band means` 独立于行点击，可同时展开多行；两段官方原文（第二段 Band 7 时隐藏）+ 顶部灰字限定语 + 底部 `Source: College Board Skills Insight for the SAT Suite`；筛选状态下改用缺口学生的中位数 band，已展开的面板原地替换。
- 选中域行要有明显选中态和勾；同时只能有一个筛选；Show less 下选中行置顶可见。
- 加载：整块面板每层一个灰块；失败：一行 `Failed to load analytics. Please try again.`，没有 Retry；整页空态：一张描边卡片 + 一行灰字，无插图，Manual 未发布时换文案。

### 设计判断（可推翻）

1. **三档配色**：Meets 用 positive 绿、Approaching 用 warning 琥珀（与学生报告的绿 / 黄一致），Not Yet Approaching 用中性灰（`fill/neutral/subtle` + `text/secondary`）。原稿 Approaching 是信息蓝，和学生报告的黄不一致，一并改掉。
2. **柱子用品牌紫三档**：设计系统里没有专门的图表色 token，为了和单元格的绿 / 琥珀 / 灰彻底分开，柱子只用品牌紫的三个层级；Includes BM 加品牌描边，和 Below BM 拉开区分。图例形状也分开：档位圆点、柱子方块。
3. **Band 标签上色**：复用学生报告 band 徽标 token（5–7 绿、3–4 琥珀）；Band 1–2 用中性灰而不是学生报告的红，理由同 Not Yet Approaching（老师页不出现告警红）。
4. **默认域行改白底细描边**：原稿是灰底卡片，学生报告的浅色药丸放在灰底上几乎看不出形状；白底也让选中态的浅紫底更容易拉开对比。
5. **选中态**：品牌浅紫底（`fill/brand/primary/quaternary`）+ 1.5px `border/brand` + 名称品牌色 + 勾 `icon/brand`。
6. **去掉统计行里的「·」分隔点**：药丸本身已能分隔，省出的宽度让统计组和切换链接在 480 宽的列里不重叠。
7. **Skills Insight 用白色内嵌面板**：在白底默认行和浅紫选中行上都能读清；限定语加 Info 图标，提示这是一条「使用限制」。
8. **分布 meta 卡加档位圆点**：Ticket 的「班级 Analytics」就是这三行三档，加圆点后和学生表图例对得上；approaching 只用字重强调，不用颜色。
9. **空态 / 失败卡片高度随内容**：现网分析模块是一行灰字的短卡片，原稿 200 高的大卡偏离现网。
10. **组件本地化到新文件**：原因见上文；旧文件里的母版这次没动。

### 需用户确认

| # | 问题 | 背景 | 提给谁 | 状态 |
| --- | --- | --- | --- | --- |
| 1 | 学生报告的 `Not Yet Approaching` 药丸（和 Band 1–2 徽标）目前是红色（`fill/negative/quaternary` + `text/negative`），与本单「三处共用一套、不用告警红」冲突 | APAC-6269 已完成、与 staging 一致，红色已上线。本次 Analytics 按 Ticket 用中性灰，学生报告需要同步改成中性才算「不分叉」 | PM（Xiaoyue）+ 学生报告前端 | 待确认 |
| 2 | Band 写法两边不一致：学生报告是 `Band 6: 610–670`（冒号），Analytics PRD 要求 `Band 3 · 420–480`（中点） | 稿子按 Analytics PRD；PRD 说两边同一写法 | PM | 待确认 |
| 3 | Band 3–4 与 `Approaching` 同为 warning 琥珀（沿用学生报告），在同一张卡片里是否会被读成同一件事 | 这是复用学生报告配色的代价；如不接受，可改为 band 标签不上色（中性药丸） | PM / 设计负责人 | 待确认 |
| 4 | Below BM 柱用最浅品牌紫，图形对比度偏低（人数靠柱顶数字传达） | 目的是不让 Below 柱显得刺眼；如需更强，可换成 `fill/brand/primary/secondary` 并把 Includes 加深 | 设计负责人 | 待确认 |
| 5 | 旧文件 `Assessment Feedback - Iteration` 里的 SAT Analytics 母版是否归档 | 新文件已有本地版，两套并存容易引用错 | 设计负责人 | 待确认 |
| 6 | `Analytics SAT / Student Row` 是否也本地化 | 目前仍链接旧文件未发布的母版，以后改不了母版 | 设计负责人 | 待确认 |
| 7 | 无分科目的禁用域行文案 | 原稿是 `Band —` + `— below benchmark`，原型是 `—` + `No scores yet`；PRD 没写死，本次未改 | PM | 待确认 |
| 8 | 需求说明卡状态是否改为 `Ready for Review` | 本次保持 `In Progress`，等 Chao 自查 | Chao | 待确认 |

### Linear 评论草稿（不代发，需要时手动贴）

> APAC-6071 六处出图点已更新到新设计稿：Assessment 4.0 - SAT · Analytics · SAT Analytics
> https://www.figma.com/design/OVpujOifLrARaLV9F503rq/Assessment-4.0---SAT?node-id=2260-2850
>
> - 分数单元格三档：Meets 绿 / Approaching 琥珀 / Not Yet Approaching 中性灰（不用红），学生表和分布 meta 卡共用一套
> - 分布柱三档：品牌紫 Above / Includes（浅紫 + 描边）/ Below（最浅紫），和单元格配色完全分开
> - 域行 Band 标签：复用学生报告 band 配色（5–7 绿、3–4 琥珀），1–2 用中性灰
> - Skills Insight：灰字限定语（Info 图标）+ 两段官方原文 + 来源行，白色内嵌面板
> - 选中域行：浅紫底 + 品牌描边 + 勾，Show less 下置顶
> - 加载 / 空态：每层灰块 + 一行灰字描边卡片，对齐现网
> - 新列「Visual Spec · APAC-6071」汇总规则和 token；组件在 🧱 UI Components › SAT Analytics · Components
>
> 待确认 8 项，最关键的是 #1：学生报告的 Not Yet Approaching 现在是红色，要和 Analytics 保持一套，需要学生报告同步改成中性。详见设计日志。
> cc @Xiaoyue
