import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import Garden from './Garden'

const ViewGarden = () => {
    const params = useParams()
    const [garden, setGarden] = useState(null)


    useEffect(()=>{
        (async()=>{
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/garden/get/${params.id}`)
            setGarden(res.data.garden)
        })()
    },[params.id])




  return (
    <>
        <h3 className='text-center m-3 p-0'>Virtual Garden {garden?.name}</h3>
        <Garden data="54px" />
    </>
  )
}

export default ViewGarden