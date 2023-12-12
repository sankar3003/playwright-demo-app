import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';





test.describe("fasdf", async()=>{

  test('main navigation', async ({page}) => {
    // await page.pause()
        // Assertions use the expect API.
       await page.goto('https://demoqa.com/links');
      expect(page.locator("//div[@class='main-header']")).toBeVisible()
        expect(page.locator("//a[@id='simpleLink']")).toHaveAttribute("target",'_blank')
      });
   
    
})



