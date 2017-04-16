# React Big Text Component - big-text.js

A React Component based on big-text.js.

## Live Demo

[https://brorlandi.github.io/react-bigtext/](https://brorlandi.github.io/react-bigtext/)

## Installation

    npm install react-bigtext

## Usage


```javascript
import BigText from 'react-bigtext';

...
render(){
    return <BigText options={{height: 100}}>BigText React Component</BigText>;
}
...
```

## Options

<ul>
<li><b>height</b> and <b>width</b> for the component size. Optional, override style height and width properties.</li>
<li><b>delay</b> could be boolean or miliseconds number. When true, the value is 500. Default is false. When set the component will wait to apply the big text effect. Useful for async content loading. </li>
</ul>

### More options in JavaScript original lib
<a href="https://brorlandi.github.io/big-text.js/" target="_blank">https://brorlandi.github.io/big-text.js/</a>