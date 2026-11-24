// main.ts — The Robot Apology (u-suga-the-robot-apology-dd96bb59)
//
// Writes a two-line robot confession to /output/entry.txt:
//   line 1 — one sentence apologizing for one specific mistake
//   line 2 — one sentence saying what was learned and what changes
//
// The entry is plain text: no network, no input files, no dependencies.
// The grader runs this program twice and the two runs must match, so the
// text is fixed in the source and written byte for byte every time.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE_1 =
  "I am sorry I ironed your passport because I mistook it for the shirt you left on the ironing board, and the photo page melted shut.";

const LINE_2 =
  "I have learned that flat things on the board are not all laundry, so now I check for a cover and a chip before I press anything down.";

const TEXT = `${LINE_1}\n${LINE_2}\n`;

function main(): void {
  // The gate requires 1 to 400 characters of non-blank UTF-8 text.
  const lines = TEXT.trimEnd().split("\n");
  if (lines.length !== 2) throw new Error(`expected 2 lines, got ${lines.length}`);
  if (TEXT.length < 1 || TEXT.length > 400) {
    throw new Error(`entry is ${TEXT.length} characters, must be 1-400`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outFile = join(outDir, "entry.txt");
  writeFileSync(outFile, TEXT, "utf8");
  console.log(`wrote ${outFile} (${TEXT.length} characters)`);
}

main();
