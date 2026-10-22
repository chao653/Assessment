# APACFE-4023 · 考试中放大查看题图

Figma 文件：[Assessment Feedback - Iteration](https://www.figma.com/design/g2rLVoesfS2hDM4yblRrid/Assessment-Feedback---Iteration)，Student 页。

## 2026-10-22 · 新建 Section「Zoom In on Images During the Test」

**任务来源**：Linear [APACFE-4023](https://linear.app/kira-learning/issue/APACFE-4023/fe-let-students-enlarge-stimulus-images-during-the-test)（父单 APAC-6221），PRD [Zoom In on Images During the Test](https://app.notion.com/p/3f570a1b99248181b865f217ec1ed351)，[原型](https://assessment-prototype-new.vercel.app/)。用户给的落点是空的 `Section 1`（13682:864）。

**结果状态**：已完成，待用户走查。

### Section 与说明卡

| 内容 | node_id | 链接 |
| --- | --- | --- |
| Section（由 `Section 1` 改名，尺寸 7331 × 7386） | 13682:864 | [打开](https://www.figma.com/design/g2rLVoesfS2hDM4yblRrid/Assessment-Feedback---Iteration?node-id=13682-864) |
| 需求说明卡（Documentation Helper / Card） | 13735:864 | [打开](https://www.figma.com/design/g2rLVoesfS2hDM4yblRrid/Assessment-Feedback---Iteration?node-id=13735-864) |
| 节点卡（Annotation Component / Header，Yellow）×7 | 13735:924 / 938 / 952 / 966 / 980 / 994 / 1008 | — |
| Specs and Rules 说明卡 | 13743:2519 | [打开](https://www.figma.com/design/g2rLVoesfS2hDM4yblRrid/Assessment-Feedback---Iteration?node-id=13743-2519) |

说明卡字段：Designer 填 Asher（同页 Anti-Cheat 卡片的写法），Product Manager 和 Date finished 填 `-`，链接行填了 APACFE-4023、PRD、Prototype、APAC-6221。

### 新建的本地组件（放在 Specs 列）

| 组件 | node_id | 属性 |
| --- | --- | --- |
| Question Image / View Full Image Label | 13736:1027 | — |
| Question Image / Student | 13736:1044 | State = Default / Hover / Focus；Show Label |
| Image Viewer / Close Button | 13736:1063 | State = Default / Hover / Focus |
| Image Viewer / Zoom Toolbar | 13737:1149 | Zoom = Fitted / Zoomed / Max |
| Option Row / Student / Image | 13737:1205 | State = Default / Hover / Selected；Image = Large / Small；Show Text；Content Text |

全部用 ShadCN-Default 的 Button、Design System 2.0 Icons（CornersOut、MagnifyingGlassMinus/Plus、ArrowCounterClockwise、X）和 Foundations 的 semantic token。Option Row / Student / Image 的内边距、圆角、描边沿用库里 Option Row 的变量。

### 画面（桌面 1440 × 1024，平板 1180 × 820）

| 列 | 画面 | node_id |
| --- | --- | --- |
| Default Size: Content Width | Student Answer Page / Desktop - Image at Content Width | 13738:3813 |
| | Student Answer Page / Desktop - Tall Image Height Limit | 13739:1302 |
| Full Image View: Fitted | Full Image View / Desktop - Fitted | 13740:1905 |
| | Full Image View / Desktop - Fitted - Tall Image | 13741:1967 |
| Full Image View: Zoom and Drag | Full Image View / Desktop - Zoomed 200% and Dragged | 13741:1977 |
| | Full Image View / Desktop - Zoomed 400% (Max) | 13741:1987 |
| Answer Choice Images | Student Answer Page / Desktop - Answer Choice Images | 13739:1316 |
| | Full Image View / Desktop - Answer Choice Image | 13741:1997 |
| | Student Answer Page / Desktop - Small Answer Choice Images | 13739:1330 |
| Tablet: Pinch to Zoom | Full Image View / Tablet - Fitted | 13742:2283 |
| | Full Image View / Tablet - Pinch to Zoom | 13742:2293 |
| Preview, Results, and Editor | Teacher Preview / Desktop - Full Image View | 13741:2007 |
| | Student Results / Desktop - Image at Content Width | 13742:2304 |
| | Assessment Editor / Desktop - Image at Content Width | 13745:3125 |

每个画面下方有一条 `_Annotation / Note` 说明交互规则。

### 操作要点

- 页面框架用了库里现成的组件：Assessment Top Bar（Assessment Testing / Assessment Edit）、Single Answer 系列（Header、Question Preview、Option Row）、Question navigation、Assessment -Top nav（Result page）、库里的 Question Image（编辑器画面的 Hover 态）。Single Answer 没有题图位置，所以只拆了外层包裹（detach 一层，编辑器拆两层），里面的 Header、Question Preview、Option Row 仍是库实例。
- 题图是自己导出的 PNG（源文件在 `设计执行/素材/APACFE-4023/`），Figure 3 和原型同一张图。
- 平板画面里的 Assessment Top Bar 把内层改成撑满宽度（实例覆盖，没有 detach）。1024 宽时 Hide 和 Tools 会重叠，所以平板用 1180 × 820。
- 过程中用过一个临时画板 `_Scratch / Delete Me`（x=20000）预览库组件、接收上传的图片，已删除。
- 克隆出的画面一度落在页面层级（盖到了 Anti-Cheat Section 上方），已全部移回本 Section，现在页面顶层只有原来的 4 个节点。

### 参考截图

PR 里附了 Section 总览和几个关键画面的截图。
