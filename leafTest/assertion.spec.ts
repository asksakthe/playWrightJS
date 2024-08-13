import { expect, test } from '@playwright/test';

test('Test to autoWait', async ( {page} ) => {
    await page.goto("https://leafground.com/waits.xhtml");
    const targetCard=page.locator(".card").filter({hasText: "Wait for Text Change (1 - 10 Sec)"});
    const targetButton = targetCard.getByRole("button").filter( {hasText: "Click"} );
    await targetButton.click()

    //Assertion
    await expect(page.locator(".card").filter({ hasText: "Wait for Text Change"}).getByRole("button").filter({hasText: "Did you notice"})).toBeVisible()
    
})
