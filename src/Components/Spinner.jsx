import React from 'react'
import {  ThreeCircles } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <div
            style={{ position: "absolute", top: "30%", left: "40%", zIndex: 99 }}
        >
            <ThreeCircles width="80" height="80" color="#4fa94d" />
        </div>
    )
}

export default Spinner