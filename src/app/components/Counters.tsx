'use client'

import { useState } from "react"

const Counters = () => {
    const [counters, setCounters] = useState({
        x: 0,
        y: 0,
        z: 0,
    })


    function handleClick() {
        const newCounters = {...counters};
        newCounters.x += 1;
        setCounters(newCounters)
    }

    return (
        <div>
            <h2>Counters</h2>
            <h4>Counter x: {counters.x}</h4>
            <h4>Counter y: {counters.y}</h4>
            <h4>Counter z: {counters.z}</h4>
            <div><button onClick={handleClick} >Increment X</button></div>
            <div><button>Increment Y</button></div>
            <div><button>Increment Z</button></div>
        </div>
    )
}

export default Counters