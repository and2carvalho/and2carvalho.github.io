import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const htmlDir = path.join(root, "cv-src", "out");
const outDir = path.join(root, "public", "cv");

const jobs = [
  {
    html: path.join(htmlDir, "andre-carvalho-desenvolvedor.html"),
    pdf: path.join(outDir, "andre-carvalho-desenvolvedor.pdf"),
  },
  {
    html: path.join(htmlDir, "andre-carvalho-developer.html"),
    pdf: path.join(outDir, "andre-carvalho-developer.pdf"),
  },
];

await fs.mkdir(outDir, { recursive: true });

const chromeExecutablePath =
  process.env.PUPPETEER_EXECUTABLE_PATH ||
  process.env.PUPPETEER_CHROME_PATH ||
  process.env.CHROME_PATH ||
  undefined;

if (!chromeExecutablePath) {
  throw new Error(
    "No Chrome/Chromium executable found. Set PUPPETEER_EXECUTABLE_PATH (or CHROME_PATH) to a local Chrome/Chromium binary, then re-run `npm run cv:pdf`."
  );
}

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox"],
  executablePath: chromeExecutablePath,
});

try {
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(120_000);
  page.setDefaultTimeout(120_000);
  await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 2 });
  await page.emulateMediaType("print");

  for (const job of jobs) {
    const html = await fs.readFile(job.html, "utf8");
    await page.setContent(html, { waitUntil: "load" });
    await page.pdf({
      path: job.pdf,
      format: "A4",
      printBackground: true,
      margin: { top: "0mm", bottom: "0mm", left: "0mm", right: "0mm" },
    });
  }
} finally {
  await browser.close();
}

