import { expect, Expect, test } from "@playwright/test";
/* Code for click the button and confirm a title change */
test('Click the button and confirm a title change', async ({page}) => {
    await page.goto("https://leafground.com/button.xhtml")

    //locating the target button web element;
    const initTitle = await page.title()
    const targetButton = page.locator(".card").filter({hasText:"Click and Confirm title."})
    const buttonClick = targetButton.getByRole("button").filter({hasText:"Click"})
    await buttonClick.click()
    await page.waitForTimeout(5000)
    const afterTitle = await page.title()
    if (initTitle != afterTitle){
        console.log(`title changed to /'${afterTitle}/' from the /'${initTitle}/' title`)
            }
    else{
        console.log(`title has not chnaged from ${initTitle}`)
    }
}) 

/* code to Assert the disabled state of a button */
test.only('Assert the disabled state of a button', async ({page}) => {
    await page.goto("https://leafground.com/button.xhtml")

    //locating the dbutton disabled
    await expect(page.locator(".card").filter({hasText: "Confirm if the button is disabled."}).getByRole('button')).toBeDisabled()
     
})
/* code for Click the Image button and click on any hidden button [need to check in clarification session] */
test('Click Image button and any hidden button', async ({page}) => {
    await page.goto("https://leafground.com/button.xhtml")

    //hidden button
    const targetCard = page.locator(".card").filter({hasText: "Click Image Button and Click on any hidden button"})
    const targetbutton1 = targetCard.getByRole('button').filter({hasText: "Image"})
    await targetbutton1.click()
    
})

/*Check how many rounded buttons are present*/
test.only('Count of rounded buttons', async ( {page}) => {
    await page.goto("https://leafground.com/button.xhtml")
    //count of rounded button
    const targetCard = page.locator(".card").filter({hasText: "How many rounded buttons are there?"})
    const countCheck = targetCard.getByRole('button')
    let countr = await countCheck.count()
    console.log(`we have ${countr} rounded buttons are present`)

})