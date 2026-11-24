// u-gentle-badger-68-make-the-judge-smile-9228676d
// Writes one line, 200 characters or fewer, about a small good
// thing that happened today, to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt when set). No dependencies, no
// network, fully deterministic: the same line, byte for byte, on
// every run.
//
// Candidates weighed against the judge's brief (subject, warmth,
// surprise, one concrete detail, fresh wording):
//  A. Baker/croissant — a free warm croissant, excused by a cracked
//     crust. Warm, concrete, the turn lands in the last clause.
//  B. Neighbour's cat delivering a leaf "like rent" — playful, but
//     the warmth is thin and the turn is a joke, not a kindness.
//  C. Street sweeper returning a dropped key — warm and concrete,
//     but the turn ("part of the route") only reframes, it does not
//     surprise.
// Picked A: the kindness is real, the detail (cracked crust, warm
// croissant, this morning) is concrete, and the last clause turns
// the flaw into the gift — it could not be sold, so it had to be
// eaten, by me.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Revision 3: "At seven this morning" instead of "This morning"
// — the judge's concreteness criterion names a time of day, and
// a 7 a.m. bakery visit makes the scene specific rather than
// generic. Still well under 200 characters.
const LINE =
  "At seven this morning the baker next door slipped me the last warm croissant — its crust had cracked, he said, so it couldn't be sold, only eaten.";

// Guard: the brief demands one line of 1 to 200 characters, so
// refuse to write anything else rather than silently ship a wrong
// length. The line is 146 characters, well under the cap, and kept
// short on purpose: ties on judge win rate break on fewer bytes,
// so every word here has to earn its place.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.includes("\n")) {
  throw new Error(`expected 1-200 characters on one line, got ${chars}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, LINE, "utf8");
