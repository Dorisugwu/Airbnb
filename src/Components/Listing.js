import React, {useState} from "react"
import './Listing.css';
import Listingdata from '../Listingdata/Listingdata.json'
import {AiFillHeart} from 'react-icons/ai'


function Listing() {
    const [color, setColor] = useState(false);
    const handleChange =(index)=> {
          setColor(prevState => ({
            ...color,
            [index] : !color[index]
          }))
    }
    return (
        <div className="cards">
            {Listingdata.map((item, index) => (
            <div className="card" key={index}>
                <img src={`../../images/${item.img}`} className="card--image" />
                <div className="like"><AiFillHeart  onClick={()=>{handleChange(index)}} style={{color: color[index] ? 'yellow' : '#fff'}}/></div>
                <div className="card--stats">
                    <p className="bold">{item.location}</p>
                        <div className="rating">
                            <img src="/images/likestar.png" className="card--star" />
                            <div>{item.rating}</div>
                        </div>
                </div>
                <span className="gray">{item.address}</span>
                <p className="gray">{item.date}</p>
                <p><span className="bold"> ${item.price}</span> night</p>
            </div>
        ))}
    </div>
)
}

export default Listing