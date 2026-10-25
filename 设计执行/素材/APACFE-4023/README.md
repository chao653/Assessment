# APACFE-4023 题图素材

Figma「Zoom In on Images During the Test」Section 里用到的题图源文件（SVG）。上传到 Figma 的是用 cairosvg 按 2 倍导出的 PNG。

| 文件 | 原图尺寸 | 用在哪 |
| --- | --- | --- |
| `fig3-food-web.svg` | 1400 × 900 | Figure 3 食物网，原型同款（`assessment-prototype-new.vercel.app/food-web.svg`）。完整查看、教师预览、学生成绩页 |
| `fig2-chart.svg` | 1600 × 700 | 宽图：按内容宽度（900）显示、不触发高度上限 |
| `fig4-food-chain.svg` | 640 × 1160 | 高图：受 440 高度上限约束 |
| `opt-a.svg` ~ `opt-d.svg` | 720 × 180 | 大尺寸选项图，显示「View full image」标签 |
| `sw-p.svg` `sw-b.svg` `sw-d.svg` `sw-x.svg` | 160 × 72 | 小尺寸选项图（原图宽度小于 360），不显示标签，也打不开完整查看 |

重新导出：`python3 -c "import cairosvg; cairosvg.svg2png(url='fig3-food-web.svg', write_to='fig3-food-web@2x.png', scale=2)"`
