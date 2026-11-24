import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY: string = [
  "When the recruiter asks what you want, don't blurt out the first number in your head.",
  "You said $52,000, and it took four years and two jobs to climb back to what you were already worth.",
].join("\n");

// Gate: 1-280 characters, exactly 2 lines.
const chars: number = [...ENTRY].length;
if (chars < 1 || chars > 280) {
  throw new Error(`entry is ${chars} characters, outside gate 1-280`);
}
const lines: string[] = ENTRY.split("\n");
if (lines.length !== 2) {
  throw new Error(`entry must be exactly 2 lines, got ${lines.length}`);
}
for (const line of lines) {
  if (line.length === 0 || line.trim() !== line) {
    throw new Error("each line must be non-empty with no leading/trailing whitespace");
  }
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
