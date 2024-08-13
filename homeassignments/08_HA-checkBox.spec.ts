import {test, expect} from '@playwright/test'

test('checkbox excercise', async ({page}) => {
    await page.goto("https://www.leafground.com/checkbox.xhtml")

    //Click on the Basic Checkbox.
    const locateCheckbox = page.locator(".card").filter({hasText: "Basic Checkbox"})
    const checBox = locateCheckbox.filter({hasText: "Basic"})
    await checBox.click({timeout: 4000})
    await page.waitForTimeout(7000)
    

    
})