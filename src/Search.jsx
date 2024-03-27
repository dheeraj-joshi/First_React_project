import React, { useState } from 'react'
import { useEffect } from 'react'

function Search() {
    const [data, setData] = useState([]);
    const[val,setVal]=useState([])
    useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/users")
            .then((detail) => detail.json())
           .then((result) => setData(result)
        )
    

    }, [])
    function gethandler(e) {
        setVal(e.target.value)

    }
    const detail = data.filter((items) => {
        return (
            items.name.toLowerCase().includes(val)
        )
    })
    return (
        <>
        <input type="text" value={val} onChange={gethandler}/>
            {detail.map((items) => {
                return (
                    <h1 key={items.id}>{ items.name}</h1>
            )
        })}
        </>
    )
}

export default Search



 