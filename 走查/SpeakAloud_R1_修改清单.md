# Speak Aloud 设计走查 · R1 修改清单

对应报告：[SpeakAloud_R1_报告.md](SpeakAloud_R1_报告.md)。状态：待确认 → 待提单 → 已提单 → 已改 / 搁置。复核时在本表勾销，不另开文件。按 APACUIX-466 约定，先给 pamper / Xiaoyue 确认，再在 APACUIX-466 下建子 issue（带 Design QA 标签）。

| # | 页面 | 问题 | 优先级 | 状态 | Linear | 截图 |
| -- | -- | -- | -- | -- | -- | -- |
| 1 | Preview / 学生作答 / 成绩页 / Monitor 抽屉 | Language 标签样式不统一（白底描边、蓝底白字、13px），应统一灰底 12px 无描边 | 中 | 待确认 | | [01](截图/speak-aloud-r1/01_language_badge.png) |
| 2 | 编辑页 | `Text for Students to Speak` 标签 14px，应 16px / 24px `#0A0A0A` | 中 | 待确认 | | [02](截图/speak-aloud-r1/02_editor_label_and_instructions.png) |
| 3 | 编辑页 | Instructions 填写后字重 500，应 400 | 中 | 待确认 | | [02](截图/speak-aloud-r1/02_editor_label_and_instructions.png) |
| 4 | 编辑页 | 目标文本 placeholder `#71717A`，应 `#888` | 低 | 待确认 | | [03](截图/speak-aloud-r1/03_editor_target_placeholder.png) |
| 5 | 编辑页 | 空白题卡底部缺 `No standards added yet.` | 低 | 待确认 | | [04](截图/speak-aloud-r1/04_editor_empty_no_standards.png) |
| 6 | 编辑页 | 题卡底部提示 / 报错 16px + 感叹号图标，应 14px + Info / XCircle | 低 | 待确认 | | [05](截图/speak-aloud-r1/05_editor_footer_message.png) |
| 7 | 编辑页 Question Settings | 副标题 `audience` vs `students`；空白题 Bloom's / Level 默认 Analyze / Medium vs N/A | 低 · 需确认 | 待确认 | | [06](截图/speak-aloud-r1/06_editor_settings_drawer.png) |
| 8 | 编辑页 Question Settings | Language 下拉选中项灰底 + 勾，应淡紫底无勾 | 低 | 待确认 | | [07](截图/speak-aloud-r1/07_editor_language_menu.png) |
| 9 | 编辑页加题弹窗 | 关闭图标 16px，应 24px | 低 | 待确认 | | [08](截图/speak-aloud-r1/08_add_dialog.png) |
| 10 | 老师 Preview | 点 Try again 后被拦截，文案写 `Your last recording is still saved.`，应用首次被拦截文案 | 中 | 待确认 | | [09](截图/speak-aloud-r1/09_preview_mic_blocked_after_try_again.png) |
| 11 | 学生作答 / Preview | 被拦截、保存失败说明文字 12px，应 14px / 20px | 低 | 待确认 | | [10](截图/speak-aloud-r1/10_exam_error_desc_size.png) |
| 12 | 学生作答 | 分数 `1 pt` vs 设计 `- / 1 pt` | 低 · 需确认 | 待确认 | | [11](截图/speak-aloud-r1/11_exam_points_chip.png) |
| 13 | 学生作答 | 断网时一直 Processing、不能重录，应进入「存在本机」状态 | 中 | 待确认 | | [18](截图/speak-aloud-r1/18_exam_offline.png) |
| 14 | 学生作答（老页面） | `You have 1 unanswered questions` 单复数 | 低 | 待确认 | | [19](截图/speak-aloud-r1/19_submit_dialog_plural.png) |
| 15 | 成绩页 / Monitor 抽屉 | 未作答 Your Response 只有一行字，应灰框 + MicrophoneSlash 图标 | 中 | 待确认 | | [12](截图/speak-aloud-r1/12_results_not_answered_empty.png) |
| 16 | 成绩页 | 题头到 Instructions 约 36px（应 16）；Instructions 16px（应 18px） | 低 | 待确认 | | [13](截图/speak-aloud-r1/13_results_spacing.png) |
| 17 | 成绩页 Grading in Progress | 副标题文案、Answer Record 题号样式 | 低 · 需确认 | 待确认 | | [14](截图/speak-aloud-r1/14_results_grading_in_progress.png) |
| 18 | 成绩页（报告未发布） | 多出蓝色提示条；未作答仍显示 `Not answered` 标签 | 低 · 需确认 | 待确认 | | [15](截图/speak-aloud-r1/15_results_unreleased.png) |
| 19 | Monitor 作答抽屉 | 目标文本拆成词块、标签 `Expected Text`，应复用成绩页题卡 | 中 | 待确认 | | [16](截图/speak-aloud-r1/16_monitor_drawer.png) |
| 20 | 批改页 | 改分后出现 `Your teacher changed this score. The answer marks still show the correct choice.` | 中 | 待确认 | | [17](截图/speak-aloud-r1/17_grading_override_notice.png) |

## 设计稿待同步

| # | 内容 | 状态 |
| -- | -- | -- |
| D1 | 批改页未作答帧改成 PRD 口径（Insufficient Response 横幅 + 0 / 1 pt + No audio submitted） | 待改 |
| D2 | 编辑页补 Preview Audio 加载态 | 待改 |
| D3 | 学生作答补「Recording saved on this device」断网帧 | 待改 |
