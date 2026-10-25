---
name: kira-apac-design-issue-intake
description: >-
  Kira 设计侧唯一的 Linear 建单 Skill。用户说「建 ticket / 建单 / 查重 / 开个单」，或把
  UI 走查结论、截图、Slack、staging、Figma、Notion 链接转成 Linear issue 时自动使用。
  覆盖 ENG APAC - FE / BE 修复单、Design QA 汇总单、设计子任务单、设计同步单，以及只查重。
  先查重、出草稿，用户确认后才 save_issue。不要从记忆或 Linear 托管副本建单。
license: Proprietary
compatibility: Requires Linear MCP (list_issues, get_issue, save_issue, list_projects, list_milestones, list_issue_statuses, list_issue_labels, get_user); Figma MCP get_screenshot for 预期图.
metadata:
  origin: kira
  scope: kira
  version: "1.0"
  upstream: "Kira-Learning-Platform/skills · kira-apac-issue-intake v3.0（2026-10-15 Linear 副本）"
---

# Kira 设计侧建单

目标：PO、QA、工程师和设计师 30 秒看懂一张单。先放图，文字只补图说不清的部分。

本文件是 Kira 设计侧建单的唯一规则来源，以官方 `kira-apac-issue-intake` v3.0 为底，加上 Kira 设计侧的流程关卡、设计单类型和走查转单。不要调用 Linear `get_agent_skill` 拿托管副本，也不要沿用旧对话里的建单规则。官方版本升级时，按文末「上游同步」对比后再合入。

## 1. 前置条件

- 查重模式只需 `list_issues`、`get_issue`。
- 建单模式还需 `save_issue`、`list_projects`、`list_milestones`、`list_issue_statuses`、`list_issue_labels`、`get_user`。
- 预期图需要 Figma MCP `get_screenshot`；拿不到时降级为 Figma 链接（见 §8）。
- 缺少当前模式需要的 Linear 工具：停下，告诉用户连接 Linear MCP。不用本地草稿冒充已建单。

## 2. 流程

复制并逐项勾选：

```
- [ ] 模式：建单 / 只查重
- [ ] 来源拆成条目；每条定好单型、分层、类型（Bug / Feature）
- [ ] 每条查重（Linear + Ticket索引.md）
- [ ] 每条选好图示，备好图
- [ ] 缺的事实一次问完（仅在需要时）
- [ ] 在对话里给出完整草稿 → 用户明确说「建」
- [ ] save_issue，全部属性一次设好
- [ ] 本地图片上传并嵌入正文
- [ ] get_issue 回读标签、字段、正文
- [ ] Ticket索引.md 追加一行；设计记录补「建单」一节
```

完成标准：
- 建单模式：每张新单回读时标签齐全（FE / BE 单含 `intake`），正文第一块是图或一句话症状；`Ticket索引.md` 已追加。
- 遇到重复：用户已看到已有单，且没有出现第二张活着的同问题单。
- 查重模式：每条都给出了结论。

## 3. 人工关卡（Human Gate）

建单是对外可见操作，以下关卡任何时候都不跳过：

1. 先查重，再起草。草稿写在对话里：标题、字段、正文、拆几张、关系、图从哪来。
2. 用户明确说「建 / 按推荐建」后才调用 `save_issue`。消息带「你觉得呢」类征询时按讨论处理，不先建。
3. 用户说「直接建 / 不用给我看」时可以跳过草稿展示，但查重、标签、project 仍然必须满足，也不建第二张同问题活单。
4. 不顺手做：不发评论、不 @ 人、不改已有单的状态，除非用户当次明确授权。新单的初始状态按 §9 设置。
5. 建完本地登记：`Ticket索引.md` 只追加一行，标注 `[Cursor]` / `[Codex]` / `[Claude Code]`，写明父单和本地设计记录链接；对应设计记录补「建单」一节，写 ticket 号和时间。

## 4. 何时建单、建哪种

| 情况 | 单型 | 分层 |
| --- | --- | --- |
| 走查发现实现偏差，需要前端改 | 走查修复单 | FE |
| 同一页面 / 同一 PR / 同一负责人能一次修完的多条偏差 | Design QA 汇总单 | FE |
| 问题出在接口、数据、缓存、权限等服务端 | 修复单 | BE |
| 设计任务要拆成可独立交付的部分 | 设计子任务单 | 设计 |
| 前端已经直接改了界面，设计稿要跟上 | 设计同步单 | 设计 |
| 只是疑问、待 PM 拍板、或一两句提醒 | 不建单，在相关 ticket 下准备评论草稿 | — |

汇总还是拆开：同页面、同 PR、同负责人能一次修完 → 一张汇总单；负责人、风险或波及范围不同（例如共用组件的全局改动）→ 单独拆出。

## 5. 分层

每条只有一个分层。分层决定 team、分层标签和证据要求。

|  | FE | BE | 设计 |
| --- | --- | --- | --- |
| 问题在 | UI、布局、与 Figma 不一致、文案、CSS、纯前端行为 | 服务端、数据库、缓存：接口状态或返回、schema / DTO、数据、迁移、查询、服务端权限 | 设计稿本身：要补的状态、要拆的设计任务、要跟上前端改动的设计稿 |
| Team | `ENG APAC - FE` | `ENG APAC - BE` | `APAC - Design`；设计子任务单跟设计父单同 team |
| 分层标签（APAC teams 组，单选） | `FE` | `BE` | `UI/UX` |
| Bug 证据 | 页面链接或环境，加上实际 / 预期或截图 | 环境（staging / production），实际 / 预期，加一个服务端信号：接口 + 状态或返回、查询或表、缓存 key、日志或 trace。只有 UI 截图不够 | — |
| Feature / 任务证据 | 要做什么 | 接口、契约、schema、缓存层面要做什么，或 job、backfill、迁移、数据改动的行为 | 设计对象、要补或要拆的内容、设计父单或对应 FE 单 / PR |

规则：
- UI 上看到的问题，但接口返回就是错的 → BE，截图作为证据。接口返回正确 → FE。
- 两层都有问题 → 拆成一张 FE、一张 BE。FE 修复依赖 BE 先修时设 BE `blocks` FE，否则设 `relatedTo`。
- 来源看不出分层：问一次，不猜。
- 用户点名的 team 不是上面三个：不建，说明本 Skill 只建这三个 team 的单。

## 6. 拆单与分类

- 一个独立问题或一块独立工作 = 一张单；来源里有几条独立条目就拆几张。
- 不合并无关条目；默认不建 sub-issue；同一条目的新证据补在同一张单上。
- Bug：现在就坏了或不对，包括回归、QA 发现、UI 与设计不一致、UX 缺陷、数据错误、缓存过期。
- Feature：新工作、产品改动、新接口、schema 改动、job、backfill、重构、删除。
- 拿不准：现在不对 → Bug；其余 → Feature。
- 设计子任务单、设计同步单不分 Bug / Feature。

## 7. 查重

每条起草前都查：

1. `rg` 查 `Ticket索引.md` 里同页面、同症状的行。
2. `list_issues` 在该分层的 team 里按「同页面 / 组件 / 接口 + 同症状」搜索：先查同 project，再查全 team；有父单时先看父单下的子单。用多组关键词：来源原话、页面或组件或接口名、关键症状的中英文。跳过汇总 / umbrella 单，它们是父单。
3. 按状态**类型**判断（`triage`、`backlog`、`unstarted`、`started`、`completed`、`canceled`、`duplicate`），不按状态名，各 team 的名字不一样。

每条给一个结论：
- 同一问题、仍未关闭：不新建。展示已有单，问是否把新证据补上去。
- 同一问题、状态类型 `duplicate`：展示，不新建。
- 同一问题、状态类型 `completed` 或 `canceled`（含 not reproducible）：问一次是否回归。回归 = 新建一张，并 `relatedTo` 旧单。
- 已经存在第二张同问题活单：建单模式下设 `duplicateOf` 原单，状态设为 `duplicate` 类型；查重模式只报告。不用 `dedup` 标签（已废弃）。
- 相关但不是同一问题：不算重复。建单模式下新建，并设 `relatedTo` 或 `parentId`；查重模式只报告。
- 无匹配：建单模式新建；查重模式只报告。
- 关键词只是弱重叠，不算重复。
- 已修过的同类项：正文写「不含 XXX 已修项」。

每个候选展示 identifier、标题、状态、链接。拿不准的交给用户判断，不自己定。

## 8. 先放图

每张单以一个不读文字也能看懂的图开头，选最小够用的那种。模板见 [references/visuals.md](references/visuals.md)。

| 要说明的是 | 用 |
| --- | --- |
| 界面现在长什么样 | 来源截图或录屏；问题区域不明显时圈出来 |
| 和设计稿哪里不一样 | `实际` / `预期` 两栏图：实际 = staging 截图，预期 = Figma `get_screenshot` 对应节点 |
| 具体数值差多少（间距、字号、颜色、圆角、状态） | 设计差异表：属性、实际、预期、Token / Figma node |
| 用户操作步骤 | Mermaid `flowchart LR` |
| UI、接口、数据库、缓存、job 之间的调用顺序 | Mermaid `sequenceDiagram` |
| 状态切换错了 | Mermaid `stateDiagram-v2`，标出错误的那条转换 |
| 波及哪些页面、组件、服务 | Mermaid `flowchart TD` 或表格 |
| 一次请求和返回 | 表格：方法和接口、状态码、错误字段、预期值 |
| 报错 | 日志或 trace 节选，放代码块，不超过 15 行，去掉密钥和个人信息 |
| 多个取值、环境或角色 | Markdown 表格 |
| 设计子任务 / 设计同步 | 设计稿截图、要补的状态清单表，或前端现状截图 + 对应 Figma 节点 |

规则：
- Linear 会把正文里的 ```` ```mermaid ```` 代码块渲染成图，所有图都用 Mermaid。
- 一张图不超过 12 个节点；节点标签 1–4 个词，用单的语言；双语单用英文标签。
- 不画只是重复文字的图；一张截图能说明白就只放截图。
- 只用来源里有的图片、录屏、日志和数值。不做 mockup，不编接口、表名、缓存 key、状态码、token。
- 预期图拿不到（没有 Figma MCP 或没有节点）：Figma 链接放进 `References`，正文写「预期：见 Figma」。
- 环境里有 `mmdc` 时，建单前检查每张图：`mmdc -i diagram.mmd -o <scratchpad>/diagram.svg`，改到不报错为止。
- 截图、Figma 导出图只放 scratchpad 并上传 Linear，不存进本地项目目录。

## 9. 属性

`save_issue` 不能套 Linear 模板，所有属性在创建时一次设好。

| 字段 | 口径 |
| --- | --- |
| `team` | 分层对应的 team（§5） |
| `labels` | 见下方「标签」 |
| `project` | `list_projects` 找到唯一匹配。有父单时跟父单的 project。零个或多个匹配时问。不建没有 project 的单 |
| `priority` | 来源或用户写了就按写的；否则 Medium。不问。来源没说就不设 Urgent |
| `estimate` | 来源写了点数就按写的；否则 2。不问。设计子任务单 / 设计同步单只按来源，没写就不设 |
| `milestone` | 来源点名的 milestone；否则 `list_milestones` 读该 project 每个 milestone 的名称和**描述**，按描述匹配（各 project 名称不同）。恰好一个明显合适就用；零个或多个就留空。不猜，不问 |
| `parentId` | 见下方「父单」 |
| `assignee` | 默认 Asher（`asher@kira-learning.com`，视为用户点名），由 Asher 再转给修复人；用户当次另指定时以当次为准。不从父单继承 |
| `state` | `list_issue_statuses` 按类型选：有 assignee → `unstarted` 类型（FE / BE 里叫 `Todo`）；用户当次明确要求不指派 → `triage` 类型 |
| 其他 | cycle、due date、SLA 不设，除非用户要求 |

milestone 描述参考（APAC 常见）：
- 发布阻塞：偏离 PRD、Figma 或验收标准，或功能坏了，不管是谁发现的。走查修复单、Bug 一般落这里。
- 不阻塞发布：超出原 spec 的改进，可以在发布后继续。改进类落这里。

### 标签

按名称传，`save_issue.labels` 会整组替换。

| 单型 | 必选 | 按来源加 |
| --- | --- | --- |
| FE 单 | `FE`、`Bug` 或 `Feature`、`intake` | 视觉 / Figma 偏差加 `Design QA`；功能坏了加 `Functional QA`；Design Aspect 组选一个（`UI` / `UX` / `Content` / `Consistency`），只在来源明确支持时加 |
| BE 单 | `BE`、`Bug` 或 `Feature`、`intake` | 功能坏了加 `Functional QA`；不加设计类标签 |
| 设计子任务单 | `UI/UX`、`Design Task` | Design Aspect 组选一个（`UI` / `UX` / `Content` / `Consistency`），按内容判断 |
| 设计同步单 | `UI/UX` | Design Aspect 组选一个（`UI` / `UX` / `Content` / `Consistency`），按内容判断 |

- `FE` / `BE` / `UI/UX` 同属 APAC teams 组，单选，一张单只能有一个。
- Design Aspect 组也是单选。
- 不传组名 `via-skill`、`APAC teams`、`Design Aspect`；不用已废弃的 `dedup`。
- 设计单不打 `intake`（`intake` 只计 FE / BE 建单用量）。

### 父单

- 走查修复单：挂被走查的实现单（如 APACFE-3936）；没有实现单时挂功能父单。
- Design QA 汇总单：挂功能父单或实现单。
- 来源没给父单时，在该 team 搜汇总单（标题形如 `[{Project}][FE / BE][{Surface}]` 并含「汇总」或 umbrella）：唯一匹配就用，并只继承它的 project；多个匹配就问；没有就不挂。
- 设计子任务单：挂设计父单（`APAC-` / `APACUIX-` 等），team 跟父单相同。
- 设计同步单：一般不挂父单，用关系连到 FE 单 / PR。

## 10. 关系

同一来源建出的多张单不能互相孤立。

- 同一个汇总单 / 父单下：各自设 `parentId`。
- 同一来源的独立条目：互相 `relatedTo`。
- 一条必须先做：`blocks` / `blockedBy`。FE 修复依赖的 BE 修复 `blocks` FE 单。
- 走查修复单 `relatedTo` 对应的设计单（如 APAC-6207）。
- 设计同步单 `relatedTo` 对应的 FE 单 / PR。
- 先把单都建出来，再用 Linear 返回的 identifier 设关系。

## 11. 语言

- APAC 单默认简体中文：标题和正文都是。
- 涉及非 APAC 成员时才用双语：中文在前，然后一行 `---`，再写美式英文；标题写成 `{中文标题} / {English title}`。
- 非 APAC 成员 = 不是 Team APAC 或其子 team 成员，也不是 workspace admin 的人。起草前对这些人调用 `get_user`：报告人、assignee、来源里点名的人、父单和关联单的 assignee 与创建人。都不是非 APAC 成员 → 只写中文。查不了成员关系 → 只写中文，并告诉用户。
- 在已有单上补评论或证据时重新判断；新出现非 APAC 成员时新文字用双语，旧文字不改。
- UI 文案、组件名、token、路由、产品名保持英文原样。常见工程词（`staging`、`token`、`API`、`cache`）在中文里也保持英文。同一句里不混两种语言。

## 12. 标题

| 单型 | 格式 |
| --- | --- |
| FE Bug | `[{Project/Area}][FE][{Surface}] {问题}` |
| BE Bug | `[{Project/Area}][BE][{Endpoint/Job}] {问题}` |
| FE / BE Feature | `[{Project/Area}][FE 或 BE] {要做什么}`（不写第三段） |
| Design QA 汇总单 | `[{Project/Area}][Design QA][{页面}] {对象}与 Figma 不一致` |
| 设计子任务单 | `[Design] {对象}：{要补 / 要拆的内容}`；角色拆分沿用 `Teacher's view` / `Student's view` |
| 设计同步单 | `[设计同步] {时间段或功能} 前端直接改动的界面，设计稿待同步` |

用 §11 选定的语言写。产品名、路由、ID 保持来源写法。project 或页面不清楚时写一个简短的事实性标题，不猜。单的类型放在标签里，不写进标题或 milestone。

## 13. 正文

图、表、链接只出现一次，只有短文字随语言变化。不写 Linear 侧边栏已经显示的内容（team、project、状态、assignee、priority、标签、父单、关联单）。来源没给的行或字段直接省略，不写 `N/A`、占位符或编的细节。

### 13.1 Bug（含走查修复单）

```markdown
<图：截图、实际/预期两栏图、设计差异表、mermaid、请求/返回表或日志节选>

| 环境 | 页面或接口 | 账号 / 角色 |
| --- | --- | --- |
| staging | /route 或 GET /api/... | teacher |

**实际：** 一句话。
**预期：** 一句话。PRD §x.x：「<英文原句>」（预期来自 PRD 时）
**步骤：** 1. … 2. …（图里看不出步骤时才写，最多 5 步）
**不在范围内：** 明确不改的相邻行为（防止扩 scope，有才写）

## References

- Figma：<带 node-id 的链接>
- 代码：[<文件>:<行号>](<固定 commit 的 GitHub 链接>)
- PRD / PR / Slack：<link>
```

### 13.2 Design QA 汇总单

```markdown
| 对象 | 设计稿 | 对照实现 | 证据层级 |
| --- | --- | --- | --- |
| <页面 / 组件> | <Figma Section> | <分支 @commit / PR> | 静态代码对照 / staging 实测 |

**1. <一句话问题>（P1）**

| 实际 | 预期 |
| --- | --- |
| ![实际](…) | ![预期](…) |

| 属性 | 实际 | 预期 | Token / Figma node |
| --- | --- | --- | --- |
| padding-top | 12px | 16px | `spacing/4` · 123:456 |

影响：<波及页面 / 共用组件>。建议：<改动方向>。

**2. …**

## References

- …
```

- 每条问题标走查严重度 P0–P3；单本身的 Priority 按 §9，两者不联动。
- 只收屏幕上看得到的样式和交互差异。

### 13.3 Feature

```markdown
<图：设计稿、流程图 / 时序图、范围表>

**要做：** 一两句话。
**验收：**
- QA 或接口使用方能看到的一个结果
- …

## References

- <links>
```

### 13.4 设计子任务单 / 设计同步单

```markdown
<图：设计稿截图、要补的状态清单表，或「前端现状截图 | 对应 Figma 节点」两栏>

**要做：** 一两句话（补哪些状态 / 同步哪些改动）。
**完成标准：**
- 设计稿上能看到的一个结果
- …

## References

- 设计父单 / FE 单 / PR / Figma：<links>
```

### 13.5 双语

英文块放在中文块之后、`References` 之前；表头写成双语（如 `环境 / Env`）：

```markdown
---

**Actual:** one sentence.
**Expected:** one sentence.
**Steps:** 1. … 2. …
```

Feature 和设计单在英文块里用 `**Build:**` 和 `**Acceptance:**`。

### 13.6 写作规则

- 单问题单每个语言块不超过 6 行；超了说明图不够，改图或加图。汇总单每条问题的文字不超过 2 行。
- 每条问题写全四要素：现象、预期、位置（Figma 节点 + 代码行号）、影响。写不全的标「未验证」，不编。
- Figma 链接一律带 node-id；代码链接用固定 commit，不用 `main`（`main` 会漂移）。
- 写明证据层级：静态代码对照 / staging 实测 / 截图。不把静态对照写成已复现。
- 共用组件的改动必须写出波及范围（例：`AddStudentsSection` 影响 Create New Assignment、Survey 等布置弹窗）。
- 症状、接口、报错保留来源原话；双语时翻译到另一块。
- 每个链接只出现一次，放在 `References`；来源 URL 同时传给 `save_issue.links`。
- 待 PM 拍板的来源冲突不写进修复单正文，另在父单下准备评论草稿。
- 不写问候语；正文和标题里不写 `via-skill:`。

## 14. 图片

- 公开图片 URL 或已经在 `uploads.linear.app` 上的：直接用 `![短标签](url)` 嵌入。
- 本地文件、需要登录的 Slack / 聊天附件、Figma `get_screenshot` 导出的图：先建单，再逐个文件调用 `prepare_attachment_upload`，用 `curl -X PUT --data-binary @file` 加上返回的签名 header 原样上传，再调 `create_attachment_from_upload`；然后更新正文，在图示块里放 `![短标签](assetUrl)`。
- 传不上去：来源链接留在 `References`，告诉用户该手动贴哪张图。

## 15. 缺信息时问

起草前，来源必须提供：
- Bug：症状，加上该分层的 Bug 证据。
- Feature：该分层的 Feature 证据，加上来源链接或验收结果。
- 设计单：设计对象，加上设计父单或对应 FE 单 / PR。
- 所有条目：一个分层、一个 project 匹配、查重已有结论。

缺了就问一轮，只问缺的事实和重复候选。不问 priority、estimate、milestone、cycle、来源语言。assignee 默认 Asher，不用问。

## 16. 回读

每张单建完调用 `get_issue`：
- 标签缺了（FE / BE 单的 `intake`、分层标签、`Bug` / `Feature`；设计单的 `UI/UX`；设计子任务单的 `Design Task`）：马上补。`save_issue.labels` 会整组替换，要把现有标签加上缺的一起发。
- 核对 parent、team、assignee、milestone、关系和正文链接。
- 正文丢了 ```` ```mermaid ```` 围栏或图片链接：修好。图还是渲染不了就改成表格。
- 只在已有单上补评论或证据时，不加 `intake`。

最后给用户每张单的链接、标题和一句话摘要。

## 17. 从 UI 走查转单

承接 [kira-ui-implementation-review](../kira-ui-implementation-review/SKILL.md) 的走查报告。走查本身只读；用户说「把走查结果建单」后才进入本 Skill。

1. 逐条读报告：每条已经带 Figma 节点、PRD 定位、代码位置和截图证据，直接复用，不重新编。
2. 按 §4 合并或拆分：同页面、同 PR、同负责人 → 一张汇总单；共用组件或风险不同 → 单独拆。BE 问题拆成 BE 单。
3. 标了「未验证」或「来源冲突」的条目不进修复单：未验证的先列给用户；来源冲突在父单下准备评论草稿。
4. 每条按 §7 查重，按 §8 备图（staging 截图 + Figma 节点截图 + 设计差异表）。
5. 一次性给出全部草稿：每张单的标题、字段、正文和关系，标出合并 / 拆分理由。用户确认后再按 §3 逐张建单、回读、登记。

## 18. 上游同步

- 上游：FE 团队官方 `Kira-Learning-Platform/skills` 的 `skills/kira-apac-issue-intake`；Linear 托管副本只用来对照，不从它建单。
- 本 Skill 与上游的差异：§3 人工关卡、§4 设计单型、§5 设计分层、§9 assignee 默认 Asher、§12–§13 设计单模板与设计差异表、§17 走查转单、`Ticket索引.md` 登记。其余规则与上游 v3.0 一致。
- 上游升级时：先只读对比，列出差异给 Asher 确认，再合进本文件并升版本号；改动属于工作区规则修改，改完回总文件夹 `./sync.sh --from <域>`。
