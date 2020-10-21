import React, { Component } from 'react'
 import Widecard from '../components/Widecard';

 class Education extends Component {
     render() {
         return(
             <div className="condiv">
                 <h1 className="subtopic">My Education</h1>
                 <Widecard title="Information Technology" where="prince of songkla university suratthani campus" from="2016" to="Present" />
                 <Widecard title="High School" where="Muang Suratthani School" from="2013" to="2016" />
             </div>
         );
     }
 }
 
 export default Education;