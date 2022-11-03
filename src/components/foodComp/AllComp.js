import React from "react";
import useFetch from "../../hooks/useFetch";
import { BreakfastComp } from "./BreakfastComp";
import { DinnerComp } from "./DinnerComp";
import { LunchComp } from "./LunchComp";

 export const AllComp =()=>{
return(
  <>
  <BreakfastComp/>
  <LunchComp/>
  <DinnerComp/>
  </>
)

//     const { data, loading, error } = useFetch("http://localhost:4000/api/v1/allMenu/show");
    
//     const images = [
//         "../Assets/pancakes.jpg",
//         "../Assets/food/burger.jpg",
//         "../Assets/food/pizza.jpg",
//         "../Assets/food/bread.jpg"
//         ];
// return(
//     <>
//       <div className="pList">
//        {loading ? (
//          "loading"
//        ) : (
//          <>
//            {data &&
//              images.map((img, i) => (
//                <div className="pListItem" key={i}>
//                  <img
//                    src={img}
//                    alt=""
//                    className="pListImg"
//                  />
//                  <div className="pListTitles">
//                    {data[i]&& 
//                      <>
//                        <h1>{data[i]?.name}</h1>
//                        <h2>{data[i]?.Category} {data[i]?.active}</h2>
//                        </>
//                    }

//                  </div>
//                </div>
//              ))}
//          </>
//        )}  
//      </div>
//     </>
// )

 }