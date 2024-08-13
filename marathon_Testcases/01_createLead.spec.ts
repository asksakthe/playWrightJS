import { expect, test } from '@playwright/test'
import { waitForDebugger } from 'inspector'

test('verify Lead Creation', async ({page}) => {
    await page.goto("https://login.salesforce.com/")
    //Login
    await page.locator("#username").fill("vidyar@testleaf.com")
    await page.locator('#password').fill("Sales@123")
    await page.locator('#Login').click()


    await page.getByTitle("App Launcher").click()
    await page.waitForTimeout(2000)
    
    const button1 = page.getByRole('button').filter({hasText: "View All"})
    await button1.click()

    await page.locator("//input[@placeholder='Search apps or items...']").fill("Marketing")
    await page.locator("//p[@class='slds-truncate']").click()

    await page.locator("[title='Leads'] + * a").click()

    await page.locator("//span[text()='New Lead']").click()

    //form details filling
    await page.locator("//button[@name='salutation']").click()
    //await page.waitForTimeout(4000)
    await page.getByRole("option").nth(1).click()
    //await page.waitForTimeout(1000)

    await page.locator('[name="firstName"]').fill("rosarega");
    await page.locator('[name="lastName"]').fill("ed01");
    await page.locator('[name="Company"]').fill("LTI");
    //await page.waitForTimeout(1000)
    await page.locator('[name="SaveEdit"]').click();

    //const checkStr = await page.getByRole("alert").innerText()
    //console.log(checkStr)
    expect(await page.getByRole("alert").isVisible())
    //await page.waitForTimeout(5000)

    //await page.locator("[name='Submit']").last().click()
    // const Loc03 =  page.locator("(//span[@class='slds-assistive-text'])[12]")
    // await page.waitForTimeout(3000)
    // await Loc03.click()
    // await page.waitForTimeout(3000)
    const Loc03 = page.locator(".slds-assistive-text").filter({hasText: "Show more actions"})
    await Loc03.click()
    
    //await page.locator("[part='button button-icon']").first().click()
    await page.getByRole("menuitem").filter({hasText: "Convert"}).click()

    //const Loc01 =  page.locator(".col2")
    await page.waitForTimeout(2000)
    await (page.locator("(//span[@title='Opportunity']/following::button)[1]")).fill("loco")
    //await Loc04.fill('Hello')
    //await page.waitForTimeout(5000)
    //await Loc02.type("HallowMan")

    page.getByRole('button').filter({hasText: "Convert"})
    expect(await page.getByText("Your lead has been converted").isVisible())
    //toBeVisible()
    await page.locator("//button[text()='Go to Leads']").click()
    //await Loc3.click()

    //input text field
    const Loc4 = await page.getByPlaceholder("Search this list...")
    await Loc4.type("rosarega")
    await Loc4.press("enter")

    expect(page.locator("//span[text()='No items to display.']")).toBeVisible()

    //Opportunities tab
    await page.getByTitle("Opportunities").click()

    page.locator('[class=" input"]').clear();


} )
