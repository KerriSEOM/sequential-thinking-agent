#!/usr/bin/env node

const prompt = process.argv.slice(2).join(" ");

if (!prompt) {
  console.log("❗ Please provide a prompt. Example:
npx github:KerriSEOM/sequential-thinking-agent "Summarize the report"");
  process.exit(1);
}

console.log(`🧠 Sequential Thinking Agent`);
console.log(`Prompt: "${prompt}"`);
console.log(`
🧠 Thinking...`);

const steps = [
  "1. Analyze prompt",
  "2. Identify key objectives",
  "3. Break into actionable steps",
  "4. Deliver summary",
];

steps.forEach(step => console.log(step));

console.log(`
✅ Done. Response complete.`);
