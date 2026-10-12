const { test, expect } = require("@playwright/test");


test.only('Client App Login', async({page}) => 
{
    const productName = 'ZARA COAT 3';
    const products = page.locator('.card-body');
    const email = "hukurniawan@gmail.com";
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill('haryutama1');
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const title = await page.locator(".card-body b").allTextContents();
    console.log(title);
    const count = await products.count();
    for(let i = 0; i < count; ++i)
    {
       if(await products.nth(i).locator("b").textContent() === productName) // select product by productName as a title (chaining locator)
        {
            //add to cart
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }

    //validate added product in cart page
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor(); // waiting the item is loaded in cart page

    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible(); //text name
    expect(bool).toBeTruthy();

    await page.locator("button[type*='button']").nth(1).click();

    await page.getByPlaceholder('Select Country').pressSequentially('ind');
    const dropdown = page.locator('.ta-results');
    await dropdown.waitFor();
    const optionCount = await dropdown.locator('button').count();
    for(let i=0; i< optionCount; ++i) // select dropdown base on text
    {
       const text = await dropdown.locator('button').nth(i).textContent();
        if(text === " Indonesia")
        {
            await dropdown.locator('button').nth(i).click();
            break;
        }
    }

    expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);

    await page.locator("button[routerlink*='myorders']").click(); //menu Order
    const rows = await page.locator("tbody tr");
    await page.locator("tbody").waitFor(); // waiting all of the table loaded
    for(let i=0; i<await rows.count(); ++i)
    {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if (orderId.includes(rowOrderId))
        {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }

    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderId.includes(orderIdDetails)).toBeTruthy(); //assertion

    await page.pause();

})