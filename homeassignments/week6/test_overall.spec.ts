import {test, expect} from '@playwright/test'
import {getAccToken} from './tokenGen'
import { request } from 'http'

let accessToken: any
let insturl: any
let id_lead : any

test('token using export Gen', async () => {
    const authToken = await getAccToken();
    accessToken = authToken.access_token;
    insturl = authToken.instance_url;
    console.log(`value of ACC: ${accessToken} and url: ${insturl}`)
})

test("creation of Lead", async ({request}) => {
    const url_SF = `${insturl}/services/data/v58.0/sobjects/Lead`
    console.log(`*******complete url: ${url_SF} **********`)
    const leaD = await request.post(url_SF, 
        {
        headers: {
            "Authorization" : `Bearer ${accessToken}`,
            "Content-Type" : "application/json"
        },
        data: {
            "FirstName" : "sakthees",
            "LastName" : "cheNNai",
            "Company" : "LTIMin",
            "Email" : "eds@gmail.com"
            }
        }
    )

    const lead_Response = leaD.json()
    console.log(`The Response of LeadCreation ***: ${lead_Response}`)
    

    //id = lead_Response.id;
    //console.log(`created id is : ${id}`)
})
