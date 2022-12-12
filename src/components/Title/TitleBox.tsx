
import React from 'react';
import '../../App.css';
import './Title.css'


function TitleBox(title: string, description?: string, background?: string, size?: string, opacity?: number) {
    let backgroundUrl = "";
    if (background) backgroundUrl = `url(${background})` 
    
    // How dark should it be
    const boxShadow = `inset 0 0 0 1000px rgba(0,0,0,0.${opacity ?? "0"})`;
     return (
        <div  className="title-box" style={{
            backgroundImage: backgroundUrl,
            backgroundSize: size,
            boxShadow: boxShadow
        }}>
            <br />

                <p className="title-text">
                    {title ?? "Title Text Here"}
                </p>
                <div>
                    <p className="title-desc">
                        {description ?? ""}
                    </p>
                </div>
            
            <br />
        </div>
    );
}

export default TitleBox;