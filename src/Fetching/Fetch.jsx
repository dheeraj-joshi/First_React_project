import React, { useEffect, useState } from "react";
import "../App.css";
function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    listdisplay();
  }, []);
  function listdisplay() {
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((response) => {
        console.log("This is the data:", response);
        setData(response);
      });
  }
  function dlthandler(id) {
    fetch(`https://fakestoreapi.com/products ${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res) {
        const val = data.filter((item) => item.id != id);
        setData(val);
      }
    });
  }

  return (
    <>
      <table classname="w-100">
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Id</th>
          <th>category</th>
          <th>Image</th>
          <th>Price</th>
        </tr>
      </table>
      {data.map((item) => {
        return (
          <>
            <table classname="w-100" key={item.index}>
              <tr>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>{item.id}</td>

                <td>
                  <img width={200} src={item.image} alt="" srcset="" />
                </td>
                <td>{item.price}</td>
                {/* <td>{item.rating.rate}</td>
                <td>{item.rating.count}</td> */}
                <button onClick={() => dlthandler(item.id)}>Delete</button>
              </tr>
            </table>
          </>
        );
      })}
    </>
  );
}

export default Fetch;
