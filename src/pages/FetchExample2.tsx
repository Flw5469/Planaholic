//A Short and precise example to demostrate the fetch function,useState and component function!
/*
It is a page, only page can use getStaticProps. Page can be linked, but cant be directly called.(my own understanding, can be wrong)
Good practise: eg A "tweet loader" page will load a list of tweets data, and pass each of them to a tweet component
*/
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FetchExample2({prop}:{prop:{notFound:boolean,text:string,value:number}}){
    const [isLoading,setIsLoading]=useState(true);
    const [data,setData]=useState(null);

    const router = useRouter()
    useEffect(() => {
      router.isReady && setIsLoading(false)
    }, [])
    if (isLoading) {
      return <div style={{ color: 'blue' }}>SECOND LOADING, wait please</div>;
    }
    else return <div style={{ color: 'blue' }}>SECOND DONE</div>;
}

export async function getServersideProps() {
    const res=await fetch("http://localhost:3000/api/FetchExampleAPI",{
        method:"GET",
    })
    const data = await res.json()
    var notFound=false;
    var value=0;
    var text="";
    if (!data) {
       notFound=true;
    }
    else {
        value=100;
        text=data.textInsideResponseObject;
    }
    return {
      props: {
        notFound,
        text,
        value,
      }, // will be passed to the page component as props
    }
  }