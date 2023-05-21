//A Short and precise example to demostrate the fetch function,useState and component function!

import { useEffect, useState } from "react";

export default function FetchExample1(){
    const [isLoading,setIsLoading]=useState(true);
    const [data,setData]=useState(null);
    useEffect(()=>{
        setIsLoading(true);
        const a=fetch("/api/FetchExampleAPI",{
            method:"GET",
        })
        .then((res)=>{return res.json();})
        .then((data)=>{
            setData(data.textInsideResponseObject);
            setIsLoading(false);
        });
    },[]);


    
    if (isLoading) return <div style={{ color: 'red' }}>LOADING, wait 10 seconds please</div>;
    else return <>{data}</>;
}