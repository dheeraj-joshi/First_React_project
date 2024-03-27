import React from 'react'
import Data from "./Data"
import { useLocation, useParams } from 'react-router-dom'
import { NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
function Details() {
    const location = useLocation()
    console.log(location);
    const parmas = useParams()
    const datafilter = Data.filter((item) => item.id == parmas.id)
    return (
      <>
        <div className="d-flex parent_div ">
          <aside className="sidebar position-sticky start-0   bg-danger px-5">
            {datafilter.map((item) => {
              return (
                <>
                  <div className="d-flex align-items-center">
                    <p className="py-4  mt-3 fs-4 text-white px-2 mt-4">
                      {item.id}.
                    </p>

                    <Link
                      className=" text-white fs-4 pt-3"
                      to={`/Details/${item.id}`}
                    >
                      {item.name}
                    </Link>
                  </div>
                </>
              );
            })}
          </aside>
          <div>
            {datafilter.map((item) => {
              return (
                <>
                  <div className="d-flex align-items-center ms-5 ">
                    {item.images.map((value) => {
                      return (
                        <>
                          <div className="box px-5">
                            <img className="w-100" src={value} alt="" />
                          </div>
                        </>
                      );
                    })}
                  </div>
                </>
              );
            })}
            {datafilter.map((detail) => {
              return (
                <>
                  <p className="fs-5 ">Price:{detail.Price}</p>
                  <button>
                    {location.pathname === `/Details/${detail.id}`
                      ? `${detail.name}`
                      : "null"}
                  </button>
                </>
              );
            })}
          </div>
            </div>
           
      </>
    );
}

export default Details
