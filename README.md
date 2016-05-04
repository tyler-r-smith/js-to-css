#js-to-css

```js
css = js_to_css({
    "body": {
        "background-color": "blue",
        "div": {
            "background-color": "red",
            "height": "50px",
            "width": "50px"
        },
        div: {
            "background-color": "green"
        }
    },
    "#test": {
        "background-color": "yellow"
    }
});

```

This returns a multi-line string
```css

body {background-color: blue; }  

body div {background-color: green; }  

#test {background-color: yellow; }  
```


Then we add the css string to the dom. \n\r
You can also add it to an element, or do with it what ever you'd like.

Below comes from: 
http://stackoverflow.com/questions/11371550/change-hover-css-properties-with-javascript
```js
style = document.createElement('style');
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
document.getElementsByTagName('head')[0].appendChild(style);
```
