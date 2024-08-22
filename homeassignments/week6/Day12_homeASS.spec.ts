import {test, expect} from '@playwright/test'
import {getAccToken} from './tokenGen'
import { request } from 'http'

let accessToken: any
let insturl: any
let id_opp : any
let id_Count: any
let firstID: any

test('token using export Gen', async () => {
    const authToken = await getAccToken();
    accessToken = authToken.access_token;
    insturl = authToken.instance_url;
    console.log(`value of ACC: ${accessToken} and url: ${insturl}`)
})

test('New Opportunity creation', async ({request}) => {
    const opp_url = `${insturl}/services/data/v58.0/sobjects/Opportunity`
    const opp_creation = await request.post(opp_url,{
        headers:{
            "Authorization": `Bearer ${accessToken}`,
            "Content_Type":"application/json"
        },
        data:{
                "CloseDate" : "2024-09-12",
                "StageName" : "Prospecting",
                "Name" : "13th attempt"
        }
         
    })
    const res_opp = await opp_creation.json();
    id_opp = res_opp.id
    console.log(`thwe wholw response is : ${opp_creation.status()}`)
    // console.log(`thwe wholw response is : ${res_opp}`)
    // console.log(`thwe wholw response is : ${res_opp.Id}`)
    console.log(`thwe wholw response is : ${id_opp}`)
    
    
})


test('TO update a created opportunity',async ({request}) => {
    const opp_url_update = `${insturl}/services/data/v58.0/sobjects/Opportunity/${id_opp}`
    console.log(opp_url_update)
    const update_opp = await request.patch(opp_url_update,{
        headers:{
            "Authorization":`Bearer ${accessToken}`,
            "Content-Type":"application/json"
        },

        data:{
           "Type":"New Customer"
        }
    })

    //Status code
    const statusCode = update_opp.status();
    console.log(statusCode);

    const text = update_opp.statusText();
    console.log(text);
    expect(statusCode).toBe(204);
}
)

test("get the content after update of opporutnity", async ({request}) => {
    const Get_url = `${insturl}/services/data/v58.0/sobjects/Opportunity/${id_opp}`
    console.log(Get_url)
    const Get_details = await request.get(Get_url,
        {
        headers:{
            "Authorization": `Bearer ${accessToken}`,
            "Content_Type":"application/json"
        }
    })


    const resp_get = await Get_details.json() 
    console.log(Get_details.status())
})

test("get all the opporutnity", async ({request}) => {
    const get_url = `${insturl}/services/data/v58.0/sobjects/Opportunity/`;
    const get_details = await request.get(get_url,{
        headers:{
            "Authorization": `Bearer ${accessToken}`,
            "Content_Type":"application/json"
        }


    })
    const resp_get = await get_details.json() 
    console.log(`${get_details.status()}`)
    const chk_Oppt = resp_get.recentItems 
    id_Count = chk_Oppt ? chk_Oppt.length : 0
    firstID = chk_Oppt[0].Id
    console.log(`Overall count of opporunities ID count is ${id_Count} and the first opporunityID ${firstID}`)

})

test("Delete call for first ID", async ({request}) => {
    
    const del_url = `${insturl}/services/data/v58.0/sobjects/Opportunity/${firstID}`
    const del_opp = await request.delete(del_url,{
        headers:{
            "Authorization": `Bearer ${accessToken}`,
            "Content_Type":"application/json"
        }
    })
    console.log(del_opp.status())
})

test("get all the opporutnity after deletion", async ({request}) => {
    const get_url2 = `${insturl}/services/data/v58.0/sobjects/Opportunity/`;
    const get_details_2 = await request.get(get_url2,{
        headers:{
            "Authorization": `Bearer ${accessToken}`,
            "Content_Type":"application/json"
        }


    })
    const resp_get = await get_details_2.json() 
    console.log(`${get_details_2.status()}`)
    const chk_Oppt_latest = resp_get.recentItems 
    const id_Count_update = chk_Oppt_latest ? chk_Oppt_latest.length : 0
    console.log(`updated opporunity counts are ${id_Count_update}`)
    expect(id_Count_update).toBe(id_Count-1)

}
)