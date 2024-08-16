import {test, expect} from '@playwright/test'
import exp from 'constants'
import path from 'path'

test('fileUpload on salesForce url', async ({page}) => {
    await page.goto("https://login.salesforce.com/")
    //Login
    await page.locator("#username").fill("vidyar@testleaf.com")
    await page.locator('#password').fill("Sales@123")
    await page.locator('#Login').click()


    await page.getByTitle("App Launcher").click()
    //await page.waitForTimeout(2000)
    
    const button1 = page.getByRole('button').filter({hasText: "View All"})
    await button1.click()

    await page.locator("//input[@placeholder='Search apps or items...']").fill("accounts")
    await page.locator("//p[@class='slds-truncate']").click()

    await page.getByText("New", {exact:true}).click()
    await page.waitForTimeout(3000)

    //Account creation 
    await page.locator("//input[@name='Name']").fill('goldken')
    await page.locator("(//button[@role='combobox'])[1]").click()
    await page.locator("//span[text()='Warm']").click()

    await page.locator("(//button[@role='combobox'])[3]").click()
    await page.locator("//span[text()='Public']").click()

    await page.locator("(//button[@role='combobox'])[4]").click()
    await page.locator("//span[text()='Banking']").click()

    await page.locator("//button[text()='Save']").click()
    

    //Assertion
    expect(await page.getByText("created").isVisible())

    //Upload files
    await page.waitForTimeout(5000)
    const yoyo =  page.locator("//span[@class='slds-file-selector__button slds-button slds-button_neutral']")
    const yoyo1 = yoyo.locator("input[type='file']")
    await yoyo1.setInputFiles([path.join(__dirname,'feb2024.jpeg')])
    // const locat01 = page.locator("(//input[@class='slds-file-selector__input slds-assistive-text'])[2]")
    // await locat01.locator("input[type='file']").setInputFiles([path.join(__dirname,'feb2024.jpeg')])
    //.locator("input[type='file']").setInputFiles([path.join(__dirname,'feb2024.jpeg')])

    //assertion
    await expect(page.locator("//div[text()='feb2024.jpeg']")).toContainText('succesfully')

    //Last step Done
    await page.locator("//span[text()='Done']").click()

    
})