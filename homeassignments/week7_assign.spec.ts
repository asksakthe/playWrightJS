import {test, expect} from '@playwright/test'
import dotenv from "dotenv"
dotenv.config()

test('LeafTap - excercise using env file', async ({page}) => {
    const userName = process.env.uname as string;
    const passWord = process.env.passwd as string;
    const fName = process.env.firstName as string;
    const lName = process.env.lastName as string;
    const cName = process.env.compName as string;
    //await page.waitForTimeout(3000)
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator("#username").fill(userName)
    await page.fill("#password", passWord)
    await page.click("//input[@class='decorativeSubmit']");

    //Click Login into image
    await page.locator("text= CRM/SFA").click()

    //Lead Creation
    await page.getByRole("link", {name:'Leads'}).click()
    await page.locator("//a[text()='Create Lead']").click()

    //Company Name
    const companyName = page.locator("#createLeadForm_companyName")
    await companyName.fill(cName)
    await page.locator("#createLeadForm_firstName").fill(fName)
    await page.locator("#createLeadForm_lastName").fill(lName)
    await page.selectOption("#createLeadForm_dataSourceId",{label: "Direct Mail" })
    await page.waitForTimeout(5000)


    //await page.click("[name='submitButton']")

    

    console.log(`The Actual Status ${await page.locator("#viewLead_statusId_sp").innerText()}`)
})
