import React, { Component } from 'react'
import '../index.css'


class SectionCenterParalax extends Component {
    constructor(props) {
        super(props)
    };

    handleScroll() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("id-section-center-left-bottom-title-text-image-container").style.opacity = "0.6"
        }
        else {
            document.getElementById("id-section-center-left-bottom-title-text-image-container").style.opacity = "0.8"
        }
    }

    componentDidMount() {
        if(window.innerWidth > 700) {
            window.addEventListener("scroll", this.handleScroll);
        }
    }

    componentWillUnmount() {
        if(window.innerWidth > 700) {
            window.removeEventListener("scroll", this.handleScroll);
        }
    }

    render() {
        return(
            <div id='id-section-center-left-bottom-title-container' className='section-center-left-bottom-title-container' style={{ zIndex: "-999", display: "flex", flexWrap: "unwrap", alignContent: 'center', alignItems: 'center', justifyContent: 'center' ,width: "100%", backgroundAttachment: "fixed", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: `url(${this.props.sectionBackgroundImage})`, backgroundSize: "cover" }}>
                <div id='id-section-center-left-bottom-title-text-image-container' className='section-center-left-bottom-title-text-image-container' style={{ zIndex: "-99", display: "flex", flexWrap: "unwrap", alignContent: 'center', alignItems: 'center', justifyContent: 'center' ,width: "100%", backgroundColor: this.props.sectionBackgroundColor, opacity: '0.8' }}></div>
            </div>
        )
    };
}

export default SectionCenterParalax;
