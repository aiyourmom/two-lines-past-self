import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY: string = [
  "Don't buy the 'one size fits all' suit for your sister's wedding.",
  "It fit no one, the photos are forever, and your sister still introduces you as 'the one in the tent.'",
].join("\n");

// Gate: 1-280 characters, exactly 2 lines. The gate applies to the file
// that is written, so count the trailing newline too.
const FILE_TEXT: string = ENTRY + "\n";
const chars: number = [...FILE_TEXT].length;
if (chars < 1 || chars > 280) {
  throw new Error(`entry file is ${chars} characters, outside gate 1-280`);
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
