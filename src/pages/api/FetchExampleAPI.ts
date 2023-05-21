import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) 
{
    //wait 10ms, this is used as scraffholding for accessing database
    async function manualWaitForTutorialPurpose(){
        await new Promise(r => setTimeout(r, 10*1000));
        return true;
    }

    await manualWaitForTutorialPurpose();
    if (req.method==="GET"){
        res.status(200).json({ textInsideResponseObject: `${"finished loading, congrats"}` });
    }
    else
        if (req.method==="POST") {
            console.log('body: ', true)
    }
}