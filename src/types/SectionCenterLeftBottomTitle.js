import React, { Component } from 'react'
import '../index.css'


class SectionCenterLeftBottomTitle extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        return(
            <div id='id-section-center-left-bottom-title-container' className='section-center-left-bottom-title-container' style={{ zIndex: "-999", display: "flex", flexWrap: "unwrap", alignContent: 'center', alignItems: 'center', justifyContent: 'center' ,width: "100%", backgroundAttachment: "fixed", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: `url(${this.props.sectionBackgroundImage})`, backgroundSize: "cover" }}>
                <div id='id-section-center-left-bottom-title-text-image-container' className='section-center-left-bottom-title-text-image-container' style={{ zIndex: "-99", display: "flex", flexWrap: "unwrap", alignContent: 'center', alignItems: 'center', justifyContent: 'center' ,width: "100%", backgroundColor: this.props.sectionBackgroundColor, opacity: '0.8' }}>
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
