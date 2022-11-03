import React from "react";
import useFetch from "../../hooks/useFetch";

 export const DinnerComp =()=>{
    const { data, loading, error } = useFetch("http://localhost:4000/api/v1/dinnerMenu/show");
    
    const images = [
        "../Assets/food/poratta.jpg",
        "../Assets/food/fried-rice.jpg",
        "../Assets/food/sapathi.jpg",
        "../Assets/food/chickenBriyani.jpg"
        ];

        const orderclick=(e)=>{
          const apiurl= "http://localhost:4000/api/v1/breakfastMenu/order";
          const postbody= {id:e.target.id};
          const meta={method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(postbody)};
          fetch(apiurl,meta).then(res=>res.json()).then(res=>console.log(res))
        }
       
return(
    <>
      <div className="pList">
       {loading ? (
         "loading"
       ) : (
         <>
           {data &&
             images.map((img, i) => (
               <div className="pListItem" key={i}>
                 <img
                   src={img}
                   alt=""
                   className="pListImg"
                 />
                 <div className="pListTitles">
                   {data[i]&& 
                     <>
                       <h1>{data[i]?.name}</h1>
                       <h2>{data[i]?.Category} </h2>
                       <h1>{data[i]?.Price}</h1>
                       <button id={data[i]?._id} onClick={orderclick} >Order</button>
                       </>
                   }

                 </div>
               </div>
             ))}
         </>
       )}  
     </div>
    </>
)

 }