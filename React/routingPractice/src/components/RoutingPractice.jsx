import React from 'react'
import { useParams } from 'react-router-dom';

const RoutingPractice = () => {

    const { variable } = useParams();
    const { color } = useParams();
    const { backgroundColor } = useParams();
    // console.log(color,backgroundColor)


    return (
        isNaN(+variable)?
        <div style={{color:color, backgroundColor:backgroundColor}}>Word: {variable}</div>
        :
        <div style={{color:color, backgroundColor:backgroundColor}}>Number: {variable}</div>
    )
}

export default RoutingPractice