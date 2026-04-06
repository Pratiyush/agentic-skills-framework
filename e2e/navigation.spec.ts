import { test, expect } from "@playwright/test";

test.describe("Site Navigation", () => {
  test("home page loads with correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Agentic Skills Framework/);
    await expect(page.locator("h1")).toContainText("Agent Skills");
  });

  test("concepts page loads", async ({ page }) => {
    await page.goto("/concepts.html");
    await expect(page).toHaveTitle(/Concepts/);
  });

  test("specification page loads", async ({ page }) => {
    await page.goto("/specification.html");
    await expect(page).toHaveTitle(/Specification/);
  });

  test("nav links are present on all pages", async ({ page }) => {
    for (const path of ["/", "/concepts.html", "/specification.html"]) {
      await page.goto(path);
      await expect(page.locator('.nav-links a[href="specification.html"]')).toBeVisible();
    }
  });

  test("specification link navigates correctly from home", async ({ page }) => {
    await page.goto("/");
    await page.click('a[href="specification.html"]');
    await expect(page).toHaveURL(/specification/);
    await expect(page.locator("h1")).toHaveText("Specification Reference");
  });
});
