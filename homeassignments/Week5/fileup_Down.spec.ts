import {test, expect} from '@playwright/test'
import path from 'path'


test.only('upload a file',async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("#file-upload").locator("input[type='file']").setInputFiles([path.join(__dirname, "feb2024.jpeg")])
    
    await expect(page.locator("#uploaded-files")).toContainText("feb2024")
}
)

test('Dwld a targetFile',async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/download") 
    const fileDw01 = page.waitForEvent('download')
    await page.locator("//a[text()='students.json']").click()
    const fileDwld = await fileDw01

    await fileDwld.saveAs(path.join("downloads/"+fileDwld.suggestedFilename()))
    await page.waitForTimeout(5000)
}
)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            