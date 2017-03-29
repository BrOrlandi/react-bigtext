import React, { Component, PropTypes } from 'react';
import bigtext from 'big-text.js';

class BigText extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this._update();
    }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    componentDidUpdate(prevProps, prevState) {
        this._update();
    }
    
    _update(){
        let delay = 0;
        if(this.props.delayed === true){
            delay = 500;
        }else if(typeof this.props.delayed === 'number'){
            delay = this.props.delayed;
        }
        setTimeout(()=>{
            bigtext(this.refs.span,{...this.props.options});
        },delay);
    }

    render() {
        let style = {};
        let opts = this.props.options;
        if(typeof opts.height !== "undefined"){
            style.height = opts.height; 
        }
        if(typeof opts.width !== "undefined"){
            style.width = opts.width; 
        }
        return (
            <div {...this.props} style={style}>
                <span ref="span">
                    {this.props.children}
                </span>
            </div>
        );
    }
}

BigText.propTypes = {
    options: PropTypes.object,
    delayed: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.bool
    ])
};

export default BigText;