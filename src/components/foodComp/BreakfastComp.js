import React from "react";
import useFetch from "../../hooks/useFetch";

 export const BreakfastComp =()=>{
    const { data, loading, error } = useFetch("http://localhost:4000/api/v1/breakfastMenu/show");
    
    const images = [
        "../Assets/pancakes.jpg",
        "../Assets/food/burger.jpg",
        "../Assets/food/pizza.jpg",
        "../Assets/food/bread.jpg"
        ];

        const orderclick=(e)=>{
          const apiurl= "http://localhost:4000/api/v1/breakfastMenu/order";
          const postbody= {id:e.target.id};
          const meta={method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(postbody)};
          fetch(apiurl,meta).then(res=>res.json()).then(res=>console.log(res))
        }
       
              //   .then((data) => {
              //       if(data.length == 0)
              //           return res.json({error: "Student doesn't exist!", msg: ""});
              //       else {
              //           if(data[0].id!="") {
              //               db.select('messages.id as msgId', 'student', 'status', 'message', 'sentDate', 'booking', 'firstName', 'lastName', 'picture', 'sentBy')
              //                   .from('messages')
              //                   .innerJoin('coaches', 'coaches.id', 'messages.coach')
              //                   // .where({'messages.student': data[0].id, 'messages.coach': coach, 'messages.sentBy': 'C'})
              //                   .where({'messages.student': data[0].id, 'messages.coach': coach})
              //                   .orderBy('messages.sentDate', 'desc')
              //                   .then((data1) => {
              //                     if(data1.length == 0)
              //                         return res.json({error: "No Messages available!", msg: ""});
              //                     else {
              //                         console.log(data1);
              //                         res.json(data1);
              //                         return data1;
              //                     }
              //                 })
              //                 .catch((err) => {
              //                     return res.json({error: err+" - 0"});
              //                 });
              //         }
              //     }
              // })
              // .catch((err) => {
              //     return res.json({error: err+" - 1"});
              // });


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
                       <h2>{data[i]?.Category}</h2>
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