import React, { Component } from 'react'
import '../index.css'


class SectionCenterLeftBottomTitle extends Component {
    constructor(props) {
        super(props)
    };

    handleResize() {
        let x = document.getElementsByClassName("section-center-left-bottom-title-container");
        for(let i=0; i< x.length;i++){
            x[i].style.height = window.innerHeight + "px";
        }
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
            <div id='id-section-center-left-bottom-title-container' className='section-center-left-bottom-title-container' style={{ zIndex: "-999", display: "flex", flexWrap: "unwrap", alignContent: 'center', alignItems: 'center', justifyContent: 'center' ,width: "100%", height: windowsHeight, backgroundAttachment: "fixed", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: `url(${this.props.sectionBackgroundImage})`, backgroundSize: "cover" }}>
                <div id='id-section-center-left-bottom-title-text-image-container' className='section-center-left-bottom-title-text-image-container' style={{ zIndex: "-99", display: "flex", flexWrap: "unwrap", alignContent: 'center', alignItems: 'center', justifyContent: 'center' ,width: "100%", height: windowsHeight, backgroundColor: this.props.sectionBackgroundColor, opacity: '0.8' }}>
                    <div id='id-section-center-left-bottom-title-text-image-content' className='section-center-left-bottom-title-text-image-content'>
                        <div id='id-section-center-left-bottom-title-image-container' className='section-center-left-bottom-title-image-container' >
                            <img id='id-section-center-left-bottom-title-image-container' className='section-center-left-bottom-title-image-container' style={ this.props.imageTitleStyle } src={ this.props.imageTitle }/>
                        </div>
                        <div id='id-section-center-left-bottom-title-text-container' className='section-center-left-bottom-title-text-container'>
                            <div id='id-section-center-left-bottom-title-text-title' className='section-center-left-bottom-title-text-title' style={ this.props.titleStyle }>{ this.props.title }</div>
                            <div id='id-section-center-left-bottom-title-text-subTitle' className='section-center-left-bottom-title-text-subTitle' style={ this.props.subTitleStyle }>{ this.props.subTitle }</div>
                            <div id='id-section-center-left-bottom-title-text-description' className='section-center-left-bottom-title-text-description' style={ this.props.descriptionStyle }>{ this.props.description }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default SectionCenterLeftBottomTitle;
