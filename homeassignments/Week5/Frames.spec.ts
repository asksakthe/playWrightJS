import {test, expect} from '@playwright/test'
import { count } from 'console'

test('Frame Exercise 01', async ({page}) => {
    await page.goto("https://leafground.com/frame.xhtml")

    const framLoc = page.locator(".card").filter({hasText: " Click Me (Inside frame)"}).frameLocator('iframe').locator("#Click")
    await framLoc.click()

    //assertion

    await expect(framLoc).toContainText("Hurray!")

})

test.only('Frame Excercise 02', async ({page} ) => {
    await page.goto("https://leafground.com/frame.xhtml")

   const fLocate = page.locator(".card").filter({hasText: " Click Me (Inside Nested frame"}).frameLocator('iframe')
   const fLocate1 = fLocate.frameLocator("iframe").locator("#Click")
   await fLocate1.click()

   //Assertion

   await expect(fLocate1).toContainText("You Clicked Me.")

   //Total number of frames
   const framCount = (page.frames().length)-1
   console.log(`Total number of frames inside page: ${framCount}`)

})