import {test, expect} from '@playwright/test'
//import path from 'path'

test('Window check', async ({page, context}) => {
    await page.goto("https://login.salesforce.com/")
    //Login
    await page.locator("#username").fill("vidyar@testleaf.com")
    await page.locator('#password').fill("Sales@123")
    await page.locator('#Login').click()

    const winPromise = context.waitForEvent("page")
    await page.locator("//span[text()='Learn More']").click()
    const win = await winPromise

    const gotTitle = page.title()
    await page.locator("//button[text()='Confirm']").click()


}
)  