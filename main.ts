// Last Text at One Percent — entry for make.fun
// u-azazex-last-text-at-one-percent-ba9fc876
// Writes one final text (1-200 chars) from a dying phone at one
// percent battery, to /output/entry.txt.
// The phone dies a snitch: it kept the receipts, and its final act
// is telling the owner the secrets outlive it.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const ENTRY =
  "I kept receipts on everything. Your 3am searches. The ex's profile. All 47 tabs. I'm dying, but your secrets aren't. Good luck.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY, "utf8");
