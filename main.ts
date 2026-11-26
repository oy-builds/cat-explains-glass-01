// Five Seconds to Explain the Glass
// Writes the cat's defence to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const line =
  "The glass had been working for the floor all along — I merely exposed the traitor before it could leak the location of the good sunbeam.";

// The gate allows 1–200 characters; fail loudly instead of shipping an invalid line.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry is ${line.length} characters, must be 1-200`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = out.endsWith("entry.txt") ? out : join(out, "entry.txt");
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, line);
