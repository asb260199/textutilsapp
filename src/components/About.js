//import React, { useState } from 'react'
import React from 'react'

export default function About(props) {
   
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white'
    }

    // const [myStyle,setMyStle] =  useState({
    //     color: 'black',
    //     backgroundColor: 'white',
        
    // })

    //const [btnText, setBtnText] = useState('Enable Dark Mode');

    // const toggleStyle = () => {
    //     if(myStyle.color === 'white'){
    //         setMyStle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '1px solid white'
    //         });
    //         setBtnText('Enable Dark Mode');

    //     } else { setMyStle({
    //         color: 'white',
    //         backgroundColor: 'black'
    //     });
    //     setBtnText('Enable Light Mode');}
    // }

  return (
    <div className='container'>
        <h1 className='my-3' style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils gives you a way to analyze your text quickly and efficiently.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is a free character and word counter tool that gives you instance count.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is a software works in any web browsers such as Chrome, Firfox, Internet Explorer and Opera.
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-primary my-2">
                {btnText}
            </button>
        </div>*/}
    </div>
  )
}
