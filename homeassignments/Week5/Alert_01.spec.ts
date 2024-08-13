import {test, expect} from '@playwright/test'
import { count } from 'console'

test('Alert Check', async ({page}) => {
    page.setDefaultTimeout(300000)
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    
    //Frame Locating
    const tryFrameLoc = page.frameLocator("#iframeResult")
    const tryLoc = tryFrameLoc.locator("//button[text()='Try it']")
    
    //Alert Handle by Event
    page.on("dialog", async fig =>{
        await fig.accept()
    })

    await tryLoc.click()
    //Assertion
    await expect(tryFrameLoc.locator("#demo")).toContainText("OK!")

       
})