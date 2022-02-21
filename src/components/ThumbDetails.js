import React, { Component } from 'react';
class Thumb extends React.Component {
    render () {
        const {images, tab, myRef} =this.props;
        return(
            <div className="thumb" ref={myRef}>
                  {
                      images.map((img, index) => (
                    <img src={img} alt=" "
                    onClick={() => tab(index)} />
                    ))
                  }
            </div>
        );
    }
}
export default Thumb;