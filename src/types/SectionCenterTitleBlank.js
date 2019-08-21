import React, { Component } from 'react'



class SectionCenterTitleBlank extends Component {
    constructor(props) {
        super(props)
    };

    handleResize() {
        let x = document.getElementsByClassName("testing-felxible");
        for(let i=0; i< x.length;i++){
            x[i].style.height = window.innerHeight + "px";
        }
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    render() {
        let windowsHeight = window.innerHeight;

        return(
            <div className='testing-felxible' style={{ display: "flex", flexWrap: "unwrap", width: "100%", height: windowsHeight, backgroundColor: this.props.sectionBackgroundColor }}>SectionCenterTitleBlank</div>
        )
    };
}

export default SectionCenterTitleBlank;