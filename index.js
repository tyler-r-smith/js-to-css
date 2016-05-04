/*
The MIT License (MIT)
Copyright (c) 2016 Tyler Robert Smith

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

const js_to_css =  function(obj) {
    _decode = [];
    _css = "";
    for (n in obj){
        _decode.push({selector: n, styles: obj[n], number_of_objs: 0})
    }
    while (_decode.length > 0) {
        var selector = _decode[0].selector;
        var styles = _decode[0].styles;
        _css += "\n\r"+ selector+" {";
        for (var n in styles) {
            if (styles.hasOwnProperty(n)) {
                if (typeof styles[n] === "string") {
                    _css += n + ": " + styles[n]+"; ";
                } else {
                    const _index = _decode[0].number_of_objs + 1;
                    _decode.splice(_index, 0, {selector: selector + " " + n, styles: styles[n], number_of_objs: 0})
                    _decode[0].number_of_objs++;
                }
            }
        }
        _css += "}  ";
        _decode.splice(0, 1);
    }
    return _css;
}

module.exports = {
  js_to_css: js_to_css
}