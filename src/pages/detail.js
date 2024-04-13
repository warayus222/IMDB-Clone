// import React, { useEffect, useState }  from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Link, useParams } from "react-router-dom";


// const Detail = () => {

//     const{id}=useParams(
//         )
//         const [detail, setdatadetail] = useState([])
//         useEffect(() => {
//             fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
//             .then(res => res.json())
//             .then(data => setdatadetail(data.results))
//         },[])
//         console.log(detail);
//     return (
//         <div >{id}</div>
//     );
// }

// export default Detail;