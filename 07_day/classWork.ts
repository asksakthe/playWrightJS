
/**
* Define the type supportedBrowser = Chrome|Edge
* Define the browserVersion - 127|126
* Define the type browserProfile - supportedBrowser & browserVersion
* (object literal)
* Define the function and pass the argument (browser)
* Launch the Chrome browser
* Call the function
*/

type supportedBrowser = 'Chrome'|'Edge';
type browserVersion = '127'|'126'
type browserProfile = {browserN:supportedBrowser; version: browserVersion;}

function invoke(browser:browserProfile ):void{
    if (browser.browserN === 'Chrome' && browser.version === '127'){
        console.log('chrom')
    }
    else {
        console.log('fire')
    }
}

const chromeBrowser: browserProfile = {
browserN: 'Chrome',
version: '127'
}

const edgeBrowser: browserProfile = {
    browserN: 'Edge',
    version: '126'
    }


invoke(edgeBrowser)