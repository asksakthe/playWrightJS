
import { test } from "@playwright/test";


test('Test to create a lead', async ({page}) => {

page.setDefaultTimeout(60000)

await page.goto("http://leaftaps.com/opentaps/control/main");
//Enter username
await page.getByLabel("Username").fill("demosalesmanager");


await page.fill("#password", "crmsfa");


//Click Login

await page.click("//input[@class='decorativeSubmit']");


//Click Login
await page.locator("text=CRM/SFA").click();


//Click Leads
await page.getByRole("link", {name:'Leads'}).click();


//Click Create Lead
await page.locator("//a[text()='Create Lead']").click();


//Enter company name
await page.locator("input[class='inputBox']").nth(0).fill("LTI");


//Enter first name
await page.locator("[name='firstName']").last().fill("Sak");


//Enter last name
await page.locator("#createLeadForm_lastName").fill("thee");

await page.selectOption("#createLeadForm_ownershipEnumId", {value:"OWN_SCORP"});

await page.selectOption("[name='marketingCampaignId']", {label:"Automobile"});

//for loop
const drpDwn = page.locator("#createLeadForm_generalCountryGeoId>option");
const dropdownCounter = await drpDwn.count();
console.log(` Countries count are ${dropdownCounter}`);


for (let i=0; i<=dropdownCounter; i++){
    console.log(await drpDwn.nth(i).innerText());
}


//Select the Source dropdown
//Locate the dropdown by value
await page.selectOption("#createLeadForm_dataSourceId", {value:"LEAD_DIRECTMAIL"});


//Get the values in the dropdown
const dropdown = page.locator("#createLeadForm_dataSourceId>option");
const dropdownCount = await dropdown.count();
console.log(`No. of values: ${dropdownCount}`);


for (let index = 0; index < dropdownCount; index++) {
console.log(await dropdown.nth(index).innerText()); 
}
await page.waitForTimeout(3000);


//Select Currency dropdown
await page.selectOption("#createLeadForm_currencyUomId", {index:13});


await page.waitForTimeout(3000);


//Select Country dropdown
await page.selectOption("#createLeadForm_generalCountryGeoId", {label:"India"});


await page.waitForTimeout(3000);


//Click Create Lead //Attribute based selectors
await page.click("[name='submitButton']");


//Get the status
console.log(`The status is ${await page.locator("#viewLead_statusId_sp").innerText()}`);
})