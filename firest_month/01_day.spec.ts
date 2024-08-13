import {test} from '@playwright/test'

test('browser launch', async({ page }  )=>{
    await page.goto('https://www.google.co.in')

    await page.waitForTimeout(7000)
})