# APACFE-4023 评论草稿

按 Linear 工单流程：草稿由 agent 写，用户确认后手动发到工单，agent 不代发。

---

Design is ready for review: [Figma · Zoom In on Images During the Test](https://www.figma.com/design/g2rLVoesfS2hDM4yblRrid/Assessment-Feedback---Iteration?node-id=13682-864) (Student page).

**What's in the section**

- Default size: an image at the content width (900 px in the question card), and a tall image capped at **440 px** high (27.5 rem, grows with page zoom).
- Full image view: fitted, tall image fitted, zoomed 200% and dragged, and 400% (max).
- Answer choices: large images with the label (clicking the image selects the answer, only the label opens the view), the view opened from a choice, and small images with no label.
- Tablet (1180 × 820): fitted and pinch to zoom.
- Teacher preview, student results, and the editor, all at the same image size.
- Specs column: 5 new components (View Full Image Label, Question Image / Student, Close Button, Zoom Toolbar, Option Row / Student / Image) and a rules card with sizes, keyboard and screen reader behavior, test rules, and the new en-US strings.

**Numbers for FE**

- Max height 440 px; images never display larger than the original.
- Label: 10 px from the image's bottom-right corner; hidden when the original is narrower than 360 px (prototype rule). I also hide it when the original is shorter than 120 px, pending PM confirmation.
- View: starts below the top bar (and the preview banner); fill/neutral/primary; caption = alt text; Close 40 × 40; stage 24 px side padding.
- Zoom: 100% = fitted, +50% per step, max 400%; pinch is continuous; Reset returns to fitted. Close, Esc, or an outside click only closes while fitted.
- Dialog: role="dialog", aria-modal, focus to Close on open, focus trap, focus returns to the trigger on close.

**Open questions**

1. Hide the label for originals shorter than 120 px as well? (prototype checks width only)
2. Caption fallback when a question or passage image has no alt text.

cc @Frank Wang @Suya Tang
