import { chromium } from "@playwright/test";

async function getAccToken() {
    const browswer = await chromium.launch()
    const browswerContext= await browswer.newContext()
    const apiReqContext =  browswerContext.request

    const url_01 = "https://login.salesforce.com/services/oauth2/token"
    const clientID ="3MVG9VMBZCsTL9hlNrNGg1KE2VHtKuhw0JrM1N6bsnky8SVTVnAWKnhQWemlX4o3CG_.rcPlXeffuNntJSk8m"
    const client_scrt = "0DB7928CEE3E2E7497A87E2B8183D2C04A8CD7D2EC665B4EC975EEE4FFE603C2"
    const uname = "sakthe@outlook.com"
    const passwd =  "ThiruKura1"
    const granType =  "password"

    const generateToken = await apiReqContext.post(url_01,{
        headers: {
            "content_type": "application/x-www-form-urlencoded",
                       
        },
        form:{
            "client_id": clientID,
            "client_secret": client_scrt,
            "username": uname,
            "password": passwd,
            "grant_type": granType
        }
    })


    const generateTokenJson = await generateToken.json();
    //const genT = generateToken
    //console.log(`complete Response*** ${generateTokenJson.access_token}`);
    //console.log(`complete Response*** ${generateTokenJson.instance_url}`)

    //return accToken, generatedURL
    
    return {
        access_token: generateTokenJson.access_token,
        instance_url: generateTokenJson.instance_url
    }
}

export {getAccToken}
