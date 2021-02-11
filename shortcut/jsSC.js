// Weby Extension JavaScript Shortcuts  PUBLIC    *Don't use to make your own, it's for everyone*

var Weby = function(selector) {
    this.selector = selector || null;
    this.element = null;
   };
   Weby.prototype.init = function() {
    switch (this.selector[0]) {
    case '<':
    var matches = this.selector.match(/<([\w-]*)>/);
    if (matches === null || matches === undefined) {
    throw 'Invalid Selector / Node';
    return false;
    }
    var nodeName = matches[0].replace('<', '').replace('>', '');
    this.element = document.createElement(nodeName);
    break;
    default:
    this.element = document.querySelector(this.selector);
    }
   };
   var webyDOM = Weby.prototype;
   // ON
   webyDOM.on = function(event, callback) {
    var evt = this.eventHandler.bindEvent(event, callback, this.element);
   }
   // Off
   webyDOM.off = function(event) {
    var evt = this.eventHandler.unbindEvent(event, this.element);
   }
   // Val
   webyDOM.val = function(newVal) {
    return (newVal !== undefined ? this.element.value = newVal : this.element.value);
   };
   // Append
   webyDOM.append = function(html) {
    this.element.innerHTML = this.element.innerHTML + html;
   };
   // Prepend
   webyDOM.prepend = function(html) {
    this.element.innerHTML = html + this.element.innerHTML;
   };
   // HTML
   webyDOM.html = function(html) {
    if (html === undefined) {
    return this.element.innerHTML;
    }
    this.element.innerHTML = html;
   };
   // CSS
   webyDOM.css = function(css, cssInput) {
       if (css === undefined) {
           return this.element.style;
       }
       if (cssInput === undefined) {
           return this.element.style.css;
       }
       this.element.style.css = cssInput;
   }

   // Console
   webyDOM.alert = function(console) {
    console.alert(this.element + 'says:', console);
   }
   webyDOM.log = function(console) {
       console.log(this.element + 'says:', console);
   }

   Weby.prototype.eventHandler = {
    events: [],
    bindEvent: function(event, callback, targetElement) {
    this.unbindEvent(event, targetElement);
    targetElement.addEventListener(event, callback, false);
    this.events.push({
    type: event,
    event: callback,
    target: targetElement
    });
    },
    findEvent: function(event) {
    return this.events.filter(function(evt) {
    return (evt.type === event);
    }, event)[0];
    },
    unbindEvent: function(event, targetElement) {
    var foundEvent = this.findEvent(event);
    if (foundEvent !== undefined) {
    targetElement.removeEventListener(event, foundEvent.event, false);
    }
    this.events = this.events.filter(function(evt) {
    return (evt.type !== event);
    }, event);
    }
   };
   Z = function(selector) {
    var el = new Weby(selector);
    el.init();
    return el;
   }