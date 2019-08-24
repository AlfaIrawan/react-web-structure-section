import React, { Component } from 'react'
import '../index.css'


class SectionCenterImages extends Component {
    constructor(props) {
        super(props)
    };

    handleResize() {
        let x = document.getElementsByClassName("section-center-images-container");
        for(let i=0; i< x.length;i++){
            x[i].style.height = window.innerHeight + "px";
        }
    };

    handleScroll() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("id-section-center-images-image-container").style.opacity = "0.6"
            document.getElementById("id-section-center-images-image").style.opacity = "0"
        }
        else {
            document.getElementById("id-section-center-images-image-container").style.opacity = "1"
            document.getElementById("id-section-center-images-image").style.opacity = "1"
        }
    }

    componentDidMount() {
        if(window.innerWidth > 700) {
            window.addEventListener("resize", this.handleResize);
            window.addEventListener("scroll", this.handleScroll);
        }
    }

    componentWillUnmount() {
        if(window.innerWidth > 700) {
            window.removeEventListener("resize", this.handleResize);
            window.removeEventListener("scroll", this.handleScroll);
        }
    }

    render() {
        let windowsHeight = window.innerHeight;

        return(
            <div id='id-section-center-images-container' className='section-center-images-container' style={{ zIndex: "-999", display: "flex", flexWrap: "unwrap", alignContent: 'center', alignItems: 'center', justifyContent: 'center' ,width: "100%", height: windowsHeight, backgroundAttachment: "fixed", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: `url(${this.props.sectionBackgroundImage})`, backgroundSize: "cover" }}>
                <div id='id-section-center-images-image-container' className='section-center-images-image-container' style={{ zIndex: "-99", display: "flex", flexWrap: "unwrap", alignContent: 'center', alignItems: 'center', justifyContent: 'center' ,width: "100%", height: windowsHeight, backgroundColor: this.props.sectionBackgroundColor }}>
                    <img id='id-section-center-images-image' className='section-center-images-image' style={{ height: this.props.sectionImageHeight }} src={this.props.sectionImage} />
                </div>
            </div>
        )
    };
}

export default SectionCenterImages;
