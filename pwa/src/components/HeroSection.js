import React, { useState } from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    function GetImage(){
        const [data, setData] = useState(null);
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id');
        xhr.onload = function(){
            setData(JSON.parse(xhr.responseText));
        };
        xhr.send();
        console.log(data);
        var imageID = data.image_id;
        const baseURL = 'https://www.artic.edu/iiif/2/';
        const fullURL = baseURL + imageID + '/full/843,/0/default.jpg';
        console.log(fullURL);
        return (
            <img src={fullURL} alt=""/>
        )
    }
    return(
        <div className='hero-container' >
            <h1>SEAN R KELMAN</h1>
            <p>Computer Science @ UCI</p>
        
        </div>
    )
}

export default HeroSection;