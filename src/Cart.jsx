// import React, { useState } from "react";

// import tv from "../src/images/TV.jpg";
// import watch from "../src/images/watch.jpg";
// import cycle from "../src/images/cycle.png";
// import add from "../src/images/add.png";
// import minus from "../src/images/minus.png";
// import dlt from "../src/images/delete.png";
// import car from "../src/images/car.jpg";

// function Cart() {
//   const [item, setItem] = useState([
//     {
//       id: 1,
//       product: "TV",
//       prize: 2300,
//       quantity: 1,
//       imgs: tv,
//       adds: add,
//       minuss: minus,
//       deletes: dlt,
//     },
//     {
//       id: 2,
//       product: "Clock",
//       prize: 5600,
//       quantity: 1,
//       imgs: watch,
//       adds: add,
//       minuss: minus,
//       deletes: dlt,
//     },
//     {
//       id: 3,
//       product: "cycle",
//       prize: 12000,
//       quantity: 1,
//       imgs: cycle,
//       adds: add,
//       minuss: minus,
//       deletes: dlt,
//     },
//     {
//       id: 4,
//       product: "car",
//       prize: 12000,
//       quantity: 1,
//       imgs: car,
//       adds: add,
//       minuss: minus,
//       deletes: dlt,
//     },
//   ]);
//   const [Selectitem, setSelectitem] = useState([]);

//   function increasehandler(index) {
//     const val = [...item];
//     val[index].quantity++;
//     setItem(val);
//   }
//   function decreasehandler(index) {
//     const val = [...item];
//     if (val[index].quantity > 0) {
//       val[index].quantity--;
//     } else {
//       val[index].quantity = 0;
//     }
//     setItem(val);
//   }
//   function dlthandler(index) {
//     const val = [...item];
//     val.splice(index, 1);

//     setItem(val);
//   }
//   function gethandler(e) {
//     let isselected = e.target.checked;
//     let value = Number(e.target.value);

//     if (isselected) {
//       setSelectitem([...Selectitem, value]);
//     } else {
//       setSelectitem((predata) => {
//         return predata.filter((id) => {
//           return id != value;
//         });
//       });
//     }
//   }
//   function praenthandler() {
//     if (item.length === Selectitem.length) {
//       setSelectitem([]);
//     } else {
//       const val = item.map((data) => {
//         return data.id;
//       });
//       setSelectitem(val);
//     }
//   }
//   function dltall() {
//     let updateditem = item.filter((data) => !Selectitem.includes(data.id))
//     setItem(updateditem)
//     setSelectitem([])
//   }

//   function gettotal() {
//     let quant=0
//     item.forEach((val) => {
//       quant+=val.quantity
//     })
//     return quant
//   }

//   return (
//     <div className="parnet">
//       <div className="d-flex align-items-center mt-4">
//         <input
//           className="ms-5  main_chk"
//           type="checkbox"
//           checked={item.length === Selectitem.length}
//           onChange={praenthandler}
//         />
//         <img src={dlt} alt="" onClick={dltall} />
//         <label className="ms-4 slt" htmlFor="">
//           Select All
//         </label>
//       </div>

//       {item.map((item, index) => {
//         return (
//           <div className="d-flex ms-3 mb-4">
//             <input
//               className="chk_height"
//               type="checkbox"
//               onChange={gethandler}
//               value={item.id}
//               checked={Selectitem.includes(item.id)}
//             />
//             <div className="img_box overflow-hidden">
//               <img className="w-100" src={item.imgs} alt="" />
//             </div>

//             <div>
//               <div className="d-flex">
//                 <p className="ms-3">product:{item.product}</p>
//                 <p className="ms-3">prize:{item.prize}</p>
//                 <p className="ms-3">quantity:{item.quantity}</p>
//               </div>
//               <div className="logo_img d-flex align-items-center ">
//                 <img
//                   className="w-100 ms-3"
//                   src={item.adds}
//                   alt=""
//                   onClick={() => increasehandler(index)}
//                 />
//                 <img
//                   className="w-100 ms-5"
//                   src={item.minuss}
//                   onClick={() => decreasehandler(index)}
//                   alt=""
//                 />
//                 <img
//                   className="w-100 ms-5"
//                   src={item.deletes}
//                   onClick={() => dlthandler(index)}
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         );
//       })}
//       <h1 className="add_cart">TOTAL CART:{ gettotal()}</h1>
//     </div>
//   );
// }

// export default Cart;
import React from 'react';
import Fetch from './Fetching/Fetch';


function Cart() {
    return (
      <>
      <Fetch/>
      </>
    );
}

export default Cart



