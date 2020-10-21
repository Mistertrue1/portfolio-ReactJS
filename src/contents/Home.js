import React, { Component } from 'react'
import Social from '../components/Social'
// import profilepic from '../img/profile.JPG'
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return(
            <div className="condiv home">
                <img src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t31.0-8/28061038_1421664991292677_3686245862775468071_o.jpg?_nc_cat=104&_nc_sid=174925&_nc_ohc=RnyqKsXNL7kAX8U3Gfu&_nc_ht=scontent.fbkk5-5.fna&oh=7317de5960a81559f76f76da206d7fdb&oe=5FB28415" alt="profile" className="profilepic"/>
                <ReactTypingEffect text={['I am Yossathorn','I am Web Developer']} speed={80} eraseDelay={200} className="typingeffect" />
                <Social />
            </div>
        );
    }
}

export default Home;