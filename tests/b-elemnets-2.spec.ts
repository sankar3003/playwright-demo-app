import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';

let page: Page;


test.describe.serial("fasdf", async()=>{
    test('elemt ', async ({ page }) => {
        // Assertions use the expect API.
        console.log(" i m secomnf");
        
        await page.goto('https://demoqa.com/');
        await expect( page.locator("//*[text()='Elements']")).toBeVisible();
        await page.locator("//*[text()='Elements']").click();
        await expect(page.locator("//div[text()='Please select an item from left to start practice.']")).toBeVisible();
        await page.locator("//span[text()='Text Box']").click();
        
        await expect(page.locator("//div[text()='Text Box']")).toBeVisible();
        await page.locator("//input[@placeholder='Full Name']").fill("dfsf")
        await page.locator("//input[@placeholder='name@example.com']").fill("dfsf@s.cd")
        await page.locator("//textarea[@placeholder='Current Address']").fill("test 123")
        await page.locator("//textarea[@id='permanentAddress']").fill("test 3434")
        await page.locator("//button[@id='submit']").click();


      
          });


      
    
})

