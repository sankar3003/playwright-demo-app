import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';

let page: Page;


test('sause demo app', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/", )
    await page.locator("//input[@id='user-name']").fill("standard_user")
    await page.locator("//input[@id='password']").fill("secret_sauce")
     await page.locator("//input[@id='login-button']").click()
     expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");
     await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click()
    await page.locator("//a[@class='shopping_cart_link']").click()
    await page.locator("//button[@id='checkout']").click()
    await page.locator("//input[@id='first-name']").fill("DSFSD")
    await page.locator("//input[@id='last-name']").fill("DSF")
    await page.locator("//input[@id='postal-code']").fill("345345")
    await page.locator("//input[@id='continue']").click()
    expect(page.locator("//div[@class='cart_desc_label']")).toBeVisible()
    await page.locator("//button[@id='finish']").click()
    expect(page.locator("//h2[normalize-space()='Thank you for your order!']")).toBeVisible()
    await page.locator("//button[@id='react-burger-menu-btn']").click()
    await page.waitForTimeout(1000)
    expect(page.locator("//button[@id='react-burger-cross-btn']")).toBeVisible()
   await page.locator("//a[@id='logout_sidebar_link']").click()
     expect(page.url()).toBe("https://www.saucedemo.com/")

})
