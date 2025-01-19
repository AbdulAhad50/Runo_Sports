"use client"
import { useEffect, useState } from "react";
import Home from "./components/Hero";
import HeroBar from "./components/HeroBar/HeroBar";
import CardSh from "./components/showCard";
import { client } from "src/sanity/lib/client";
import { urlFor } from "src/sanity/lib/image";


interface T{
  title:string,
  content:[{
    children:[{
      text:string
    }]
  }],
  feturedImage:any,
  publishedAt:string,
  _createdAt:string,
  _id:string,

}


export default function HomePage() {

  let [findData, setFindData] = useState<T[]>()

  useEffect(() => {
    async function fetchData() {
      try {
        let data = await client.fetch(`*[_type == "blog"]`);
        
          console.log("Fetched data:", data);
          setFindData(data)
      } catch (err) {
        console.log("Error:", err);
      }
    }
    
    fetchData();
  }, []);
  

  
  

  return (
    <div>
        <Home/>
        <HeroBar/>

        <div className="CardSH flex flex-col gap-6">

          {
            findData?.map((elem:T)=>{
                return(
                  <CardSh title={elem.title} feturedImage={undefined} publishedAt={elem.publishedAt} _createdAt={elem._createdAt} _id={elem._id} content={elem.content[0].children[0].text}/>
                )
            })
          }
            
            
        </div>
    </div>
  );
}
