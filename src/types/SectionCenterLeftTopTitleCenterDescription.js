import React, { Component } from 'react'
import '../index.css'


class SectionCenterLeftBottomTitle extends Component {
    constructor(props) {
        super(props)
    };

    render() {

        return(
            <div id='id-section-center-left-top-title-center-description-container' className='section-center-left-bottom-title-container' style={{ zIndex: "-999", display: "flex", flexWrap: "unwrap", alignContent: 'center', alignItems: 'center', justifyContent: 'center' ,width: "100%", backgroundAttachment: "fixed", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: `url(${this.props.sectionBackgroundImage})`, backgroundSize: "cover" }}>
                <div id='id-section-center-left-top-title-center-description-text-image-container' className='section-section-center-left-top-title-center-description-text-image-container' style={{ zIndex: "-99", display: "flex", flexWrap: "unwrap", alignContent: 'center', alignItems: 'center', justifyContent: 'center' ,width: "100%", backgroundColor: this.props.sectionBackgroundColor }}>
                    <div id='id-section-center-left-top-title-center-description-text-image-content' className='section-center-left-top-title-center-description-text-image-content'>
                        <div id='id-section-center-left-top-title-center-description-image-container' className='section-center-left-top-title-center-description-image-container' >
                            <img id='id-section-center-left-top-title-center-description-image-container' className='section-center-left-top-title-center-description-image-container' style={ this.props.imageTitleStyle } src={ this.props.imageTitle }/>
                        </div>
                        <div id='id-section-center-left-top-title-center-description-text-container' className='section-center-left-top-title-center-description-text-container'>
                            <div id='id-section-center-left-top-title-center-description-text-title' className='section-center-left-top-title-center-description-text-title' style={ this.props.titleStyle }>{ this.props.title }</div>
                            <div id='id-section-center-left-top-title-center-description-text-description' className='section-center-left-top-title-center-description-text-description' style={ this.props.descriptionStyle }>{ this.props.description }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default SectionCenterLeftBottomTitle;
