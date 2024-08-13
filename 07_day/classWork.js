/**
* Define the type supportedBrowser = Chrome|Edge
* Define the browserVersion - 127|126
* Define the type browserProfile - supportedBrowser & browserVersion
* (object literal)
* Define the function and pass the argument (browser)
* Launch the Chrome browser
* Call the function
*/
function invoke(browser) {
    if (browser.browserN === 'Chrome' && browser.version === '127') {
        console.log('chrom');
    }
    else {
        console.log('fire');
    }
}
var chromeBrowser = {
    browserN: 'Chrome',
    version: '127'
};
var edgeBrowser = {
    browserN: 'Edge',
    version: '126'
};
invoke(edgeBrowser);
