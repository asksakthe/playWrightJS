import {test} from '@playwright/test'

test('iframe check', async ({page}) => {
    
    await page.goto("https://www.leafground.com/frame.xhtml")
    const frames = page.frames()
    //console.log(frames)

    //  for(let i of frames){
    //      const tit = await i.title();
    //      console.log(` check ${tit}`)

    //  }

})

test.only('iframe handling', async ({page}) => {
    await page.goto("https://www.leafground.com/frame.xhtml")
    const Loc05 = page.frame({url: "https://leafground.com/default.xhtml"})
    const Loc06 = Loc05?.locator("#Click")
    await Loc06?.click()
})