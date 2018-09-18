import React from 'react'
import './empty.css'

function GetContent(lengthy,pricy)
{
    if(lengthy!=0)
return (
<h2 className="total" id="tot">Total:${pricy}</h2>
)
else
return (<h1  className="emp" >Your Cart is empty! </h1>)

}

export default GetContent;