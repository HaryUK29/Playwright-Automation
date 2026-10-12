// const {test, expect} = require('@playwright/test');

// test('User login with valid credential', async ({browser})=> 
// {
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     const logo = page.locator(".app_logo")
//     await page.goto("https://www.saucedemo.com/");
//     await page.locator("#user-name").fill("standard_user");
//     await page.locator("#password").fill("secret_sauce");
//     await page.locator("#login-button").click();
//     const items =  page.locator(".inventory_item_name");
//     await expect(items.first());

// });


// test('User login with invalid credential', async ({browser})=>{

//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://www.saucedemo.com/");
//     await page.locator("#user-name").fill("test_error");
//     await page.locator("#password").fill("test123");
//     await page.locator("#login-button").click();
//     const messageError = page.locator(".error-button");
//     await expect(messageError);
// })

// test('user add product to cart', async ({browser})=>{

//     const context = await browser.newContext();
//     const page = await context.newPage();
//     const logo = page.locator(".app_logo")
//     await page.goto("https://www.saucedemo.com/");
//     await page.locator("#user-name").fill("standard_user");
//     await page.locator("#password").fill("secret_sauce");
//     await page.locator("#login-button").click();
//     const items =  page.locator(".inventory_item_name");
//     await expect(items.first());
//     //add item backpack
//     const itemBackPack = page.locator("#add-to-cart-sauce-labs-backpack");
//     const cartItem = page.locator(".shopping_cart_link");
//     await itemBackPack.click();
//     await cartItem.click();
//     const itemCart = page.locator("inventory_item_name");
//     expect (itemCart);

// })

// test('User checkout',async ({browser})=>{

//     const context = await browser.newContext();
//     const page = await context.newPage();
//     const logo = page.locator(".app_logo")
//     await page.goto("https://www.saucedemo.com/");
//     await page.locator("#user-name").fill("standard_user");
//     await page.locator("#password").fill("secret_sauce");
//     await page.locator("#login-button").click();
//     const items =  page.locator(".inventory_item_name");
//     await expect(items.first());
//     //add item backpack
//     const itemBackPack = page.locator("#add-to-cart-sauce-labs-backpack");
//     const cartItem = page.locator(".shopping_cart_link");
//     await itemBackPack.click();
//     await cartItem.click();
//     const itemCart = page.locator("inventory_item_name");
//     expect (itemCart);
//     const btnCheckOut = page.locator("[id ='checkout']");
//     btnCheckOut.click();

//     //checout page    
//     const firstNameField = page.locator("#first-name");
//     const lastNameField = page.locator("#last-name");
//     const postalCodeField = page.locator("#postal-code");
//     const bttnContinue = page.locator("[id ='continue']");
//     await firstNameField.fill("Hary");
//     await lastNameField.fill("Utama");
//     await postalCodeField.fill("12345");
//     await bttnContinue.click();

//     //overview 
//     const bttnFinish = page.locator("[id = 'finish']");
//     await bttnFinish.click();

//     //Complete
//     expect(page.locator(".complete-header").textContent('Thank you for your order!'));
//     await page.pause();

// })