import {Browser, BrowserContext, Page, chromium } from "playwright";

async function pAction (url: string, action:"screenShot"|"title"):Promise<string|void>{
    const browser: Browser = await chromium.launch({headless: false})
    const context: BrowserContext = await browser.newContext();
    const wpage: Page = await context.newPage();
    await wpage.goto(url);
    if (action ==="screenShot") {
        const screenShotPath = 'screens.png';
        await wpage.screenshot({path:screenShotPath});
        await browser.close()
        }
    else if(action ==="title"){
        const title = await wpage.title();
        console.log(`And TiTle of the wpage ${title}`)
        await browser.close()
        return `Title of the webpage is ${title}`
    }

}

function RunTest(){
    const myScreeen = pAction("https://www.flipkart.com", "screenShot")
    const myTitle = pAction("https://www.flipkart.com", "title")
}

RunTest()