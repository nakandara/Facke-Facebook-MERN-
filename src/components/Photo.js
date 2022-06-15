import React from 'react'
import Img from "../assets/fbbbb.PNG"
import { useNavigate } from "react-router-dom";
import './photo.css'

function Photo() {
    const navigate = useNavigate();
    const onsubmithan = () => {

        navigate('/facebook')
    }
    return (
        <div className='photo'>
            <img className='photo2' src={Img} onClick={onsubmithan} />
        </div>
    )
}

export default Photo