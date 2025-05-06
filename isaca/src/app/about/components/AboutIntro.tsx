import React from 'react';

const AboutIntro : React.FC = () => { 
    return(
        // <section style = {{padding: "60px 20px",textAlign: "center" }}>
        <section style = {{padding: "10px 20px",textAlign: "center" }}>
            <h1 style={{color:'#0C2A64'}}>About Us</h1>
            <p style={{ 
                maxWidth: "700px", 
                // margin: "0 auto 40px", 
                margin: "0 auto", 
                fontSize: "18px", 
                lineHeight: "1.6", 
                color: "#333"
            }}>       
                Founded in 2016, 
                ISACA UW is dedicated to promoting excellence in information
                security by providing quality programming for current University
                of Washington students to interact with industry leaders and gain 
                hands-on learning experiences. We host quarterly speaker and workshop
                events. All majors, programs, and backgrounds are welcomed!
            </p>
            {/* <div>
                <button>Puget Sound Chapter</button>
                <button>Global Chapter</button>
            </div> */}

        </section>


    );

};

export default AboutIntro;