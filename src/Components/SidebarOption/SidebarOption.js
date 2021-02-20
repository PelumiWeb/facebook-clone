import React from 'react'
import './SidebarOption.css'


function SidebarOption({Icon, Text, color, img, src, onClick}) {
    return (
        <div className="SidebarOption"
        onClick={onClick}
        >
            {Icon ? <Icon src={src} style={{
                color: color
            }} /> :  <img className="image" src={img} alt=""/>}
           <h4>{Text}</h4>
          
        </div>
    )
}

export default SidebarOption
