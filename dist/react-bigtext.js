'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('');

var _2 = _interopRequireDefault(_);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _bigText = require('big-text.js');

var _bigText2 = _interopRequireDefault(_bigText);

var _lodash = require('lodash.isequal');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BigText = function (_Component) {
    _inherits(BigText, _Component);

    function BigText() {
        _classCallCheck(this, BigText);

        return _possibleConstructorReturn(this, (BigText.__proto__ || Object.getPrototypeOf(BigText)).apply(this, arguments));
    }

    _createClass(BigText, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.refs.span.style.visibility = "hidden";
            this._preUpdate();
            this._update(true);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !(0, _lodash2.default)(this.props, nextProps);
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            this._preUpdate();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            this._update(false);
        }
    }, {
        key: '_preUpdate',
        value: function _preUpdate() {
            if (this.props.children.length === 0) {
                this.refs.span.style.visibility = "hidden";
            }
        }
    }, {
        key: '_update',
        value: function _update(mount) {
            var _this2 = this;

            // delay to wait for async loads that change contents
            var delay = 0;
            var opts = this.props.options;
            if (opts.delay === true) {
                delay = 500;
            } else if (typeof opts.delay === 'number') {
                delay = opts.delay;
            }

            // optimization if size of span exceeds the div, reduce the font until it fits better
            if (delay && !mount) {
                // !mount prevents an initial fontSize that causes a long loop on this operation
                var div = _reactDom2.default.findDOMNode(this.refs.div);
                var span = _reactDom2.default.findDOMNode(this.refs.span);

                var divRect = div.getBoundingClientRect();
                var spanRect = span.getBoundingClientRect();
                while ((divRect.width < spanRect.width || divRect.height < spanRect.height) && parseInt(this.refs.span.style.fontSize, 10) > 0) {
                    divRect = div.getBoundingClientRect();
                    spanRect = span.getBoundingClientRect();
                    this.refs.span.style.fontSize = parseInt(this.refs.span.style.fontSize, 10) * 0.99 + 'px';
                };
            }

            setTimeout(function () {
                if (_this2.props.children.length !== 0) (0, _bigText2.default)(_this2.refs.span, _extends({}, _this2.props.options));
            }, delay);
        }
    }, {
        key: 'render',
        value: function render() {
            var style = Object.assign({}, this.props.style);
            var opts = this.props.options;
            if (typeof opts.height !== "undefined") {
                style.height = opts.height;
            }
            if (typeof opts.width !== "undefined") {
                style.width = opts.width;
            }

            var cleanProps = Object.assign({}, this.props);
            delete cleanProps.options;

            return _react2.default.createElement(
                'div',
                _extends({}, cleanProps, { ref: 'div', style: style }),
                _react2.default.createElement(
                    'span',
                    { ref: 'span' },
                    this.props.children
                )
            );
        }
    }]);

    return BigText;
}(_react.Component);

BigText.propTypes = {
    options: _2.default.object
};

exports.default = BigText;