import React from 'react';
class Colors extends React.Component{
    render() {
        const colors = this.props;
        return (
            <div className="colors">
                  {
                      colors.map((color, index) => (
                    <button style={{ background: color }} key={index}></button>
                  ))
                  }
            </div>
        );
    }
}
export default Colors;