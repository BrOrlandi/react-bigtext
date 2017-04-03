import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import bigtext from 'big-text.js';
import _isEqual from 'lodash.isequal';

class BigText extends Component {

    componentDidMount() {
        this.refs.span.style.visibility = "hidden";
        this._preUpdate();
        this._update(true);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !_isEqual(this.props,nextProps);
    }

    componentWillUpdate(nextProps, nextState) {
        this._preUpdate();
    }
    

    componentDidUpdate(prevProps, prevState) {
        this._update(false);
    }
    
    _preUpdate(){
        if(this.props.children.length == 0){
            this.refs.span.style.visibility = "hidden";
        }
    }

    _update(mount){
        // delay to wait for async loads that change contents
        let delay = 0;
        if(this.props.delayed === true){
            delay = 500;
        }else if(typeof this.props.delayed === 'number'){
            delay = this.props.delayed;
        }

        // optimization if size of span exceeds the div, reduce the font until it fits better
        if(delay && !mount){ // !mount prevents an initial fontSize that causes a long loop on this operation
            let div = ReactDOM.findDOMNode(this.refs.div);
            let span = ReactDOM.findDOMNode(this.refs.span);

            let divRect = div.getBoundingClientRect();
            let spanRect = span.getBoundingClientRect();
            while(divRect.width < spanRect.width || divRect.height < spanRect.height){
                divRect = div.getBoundingClientRect();
                spanRect = span.getBoundingClientRect();
                this.refs.span.style.fontSize = parseInt(this.refs.span.style.fontSize)*0.99+'px';
            };
        }

        setTimeout(()=>{
            if(this.props.children.length !== 0)
                bigtext(this.refs.span,{...this.props.options});
        },delay);
    }

    render() {
        let style = Object.assign({},this.props.style);
        let opts = this.props.options;
        if(typeof opts.height !== "undefined"){
            style.height = opts.height; 
        }
        if(typeof opts.width !== "undefined"){
            style.width = opts.width; 
        }

        let cleanProps = Object.assign({},this.props);
        delete cleanProps.options;
        delete cleanProps.delayed;

        return (
            <div {...cleanProps} ref="div" style={style}>
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