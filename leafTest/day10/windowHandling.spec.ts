import { expect, test } from '@playwright/test'
import { promises } from 'dns'


test('Window Handing of salesForce', async ({context, page}) => {
    await page.goto("https://login.salesforce.com/")
    //Login
    await page.locator("#username").fill("vidyar@testleaf.com")
    await page.locator('#password').fill("Sales@123")
    await page.locator('#Login').click()

    //promise Resolve concurrently
    const [myWindow] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("//span[text()='Learn More']").click()
    ])

    //wait for new window
    //await expect(myWindow).toHaveURL("https://www.salesforce.com/products/platform/products/mysalesforce/")

    //new page interaction
    await myWindow.locator("//button[text()='Confirm']").click()
    await myWindow.waitForTimeout(4000)
    const tit = myWindow.title()
    console.log(`Title of the New Page: ${tit}`)


})
