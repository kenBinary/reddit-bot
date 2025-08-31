import { chromium } from "playwright";
import browserSettings from "./config/browserSettings.json" with {type: "json"};


async function main() {
  const browser = await chromium.launch({
    headless: browserSettings.headless,
    executablePath: browserSettings.executablePath,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://example.com");

  const heading = await page.textContent("h1");
  console.log("Heading:", heading);  
  await browser.close();
}


main().catch(console.error);