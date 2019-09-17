import React, { Component } from 'react'
import '../index.css'


class SectionCenterParalax extends Component {
    constructor(props) {
        super(props)
    };


    render() {
        return(
            <div id='id-section-center-left-bottom-title-container' className='section-center-left-bottom-title-container' style={{ zIndex: "-999", display: "flex", flexWrap: "unwrap", alignContent: 'center', alignItems: 'center', justifyContent: 'center' ,width: "100%", backgroundAttachment: "fixed", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: `url(${this.props.sectionBackgroundImage})`, backgroundSize: "cover" }}>
                <div id='id-section-center-left-bottom-title-text-image-container' className='section-center-left-bottom-title-text-image-container' style={{ zIndex: "-99", display: "flex", flexWrap: "unwrap", alignContent: 'center', alignItems: 'center', justifyContent: 'center' ,width: "100%", backgroundColor: this.props.sectionBackgroundColor, opacity: '0.8' }}></div>
            </div>
        )
    };
}

export default SectionCenterParalax;
