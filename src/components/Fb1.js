import React from 'react'
import Img1 from "../assets/kjdnckjd.PNG"
import { useNavigate } from "react-router-dom";
import './photo.css'

function Fb1() {
    const navigate = useNavigate();
    const onsubmithan = () => {

        navigate('/facebook')
    }
    return (
        <div className='photo'>
            <img className='photo2' src={Img1} onClick={onsubmithan} />
        </div>
    )
}

export default Fb1