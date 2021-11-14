import { gsap } from "gsap";
import React from "react";
import { useEffect } from "react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);


export default function Gsapeg() {
    const header = React.createRef();
    useEffect(() => {
        // gsap.to(header.current, {color:"#AAEE33", duration:2 });
    }, [header])

    return (
        <div style={{height:'100vh'}}>
        <section id='section1' style={{height:"100%"}}><h1>Section1</h1><button onClick={()=>{gsap.to(window, {duration: 1, scrollTo: "#section2"} )} } >Click</button></section>
            <section id='section2' style={{height:"100%"}}>Section2</section>
            
        </div>
    )
}
