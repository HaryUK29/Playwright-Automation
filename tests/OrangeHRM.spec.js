// const {test,expect} = require('@playwright/test');

// test.only('Test Login', async({browser})=>
// {
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     const userName = page.locator("[placeholder='Username']");
//     const password = page.locator("[placeholder='Password']");
//     const buttonLogin = page.locator("[type='submit']");
//     await page.goto("https://opensource-demo.orangehrmlive.com/");
//     console.log(await page.title());
//     await page.waitForTimeout(2000);
//     //fill credential
//     await userName.fill("Admin");
//     await page.waitForTimeout(2000);
//     await password.fill("admin123");
//     await page.waitForTimeout(2000);
//     await buttonLogin.click();
//     await page.waitForTimeout(3000);
//     //Add User
//     await page.getByText('Admin', { exact: true }).click();
//     await page.waitForTimeout(3000);
//     await page.getByText('Add').click()
//     await page.locator('.oxd-input-group').filter({hasText:'User Role'}).locator('.oxd-select-text').click();
//     await page.waitForTimeout(3000);
//     await page.locator('.oxd-select-dropdown').locator('.oxd-select-option').filter({ hasText: 'ESS' }).click();
//     await page.waitForTimeout(3000);
//     await page.getByPlaceholder('Type for hints...').fill('Hary Utama Kurniawan');
//     await page.waitForTimeout(3000);
// })
