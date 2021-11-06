
import React from 'react';
import '../../App.css';
import './Title.css'
import { Container, } from 'react-bootstrap';


function TitleBox(title: string, description?: string, background?: string, opacity?: number) {
    let backgroundUrl = "";
    if (background) backgroundUrl = `url(${background})` 
    
    // How dark should it be
    const boxShadow = `inset 0 0 0 1000px rgba(0,0,0,0.${opacity ?? "0"})`;
     return (
        <div>
            <br />
            <Container className="title-box" style={{
                backgroundImage: backgroundUrl,
                backgroundSize: "cover",
                boxShadow: boxShadow
            }}
            >
                <p className="title-text">
                    {title ?? "Title Text Here"}
                </p>
                <div>
                    <p className="title-desc">
                        {description ?? ""}
                    </p>
                </div>
            </Container>
            <br />
        </div>
    );
}

export default TitleBox;