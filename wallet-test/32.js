webpackJsonp([32],{1107:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),c=n.n(i),l=n(267),s=n(161),u=n.n(s),p=n(1246),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},h=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),h(t,[{key:"render",value:function(){var e=parseInt(this.props.params.height,10);return c.a.createElement(u.a,{stores:[l.a],inject:{blocks:function(){return l.a.getState().blocks}}},c.a.createElement(p.a,f({},this.props,{height:e})))}}]),t}(c.a.Component);t.default=b},1218:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),c=n.n(i),l=n(60),s=n(59),u=n(159),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){var e=this.props.witness.get("witness_account");return c.a.createElement(u.a,{account:e})}}]),t}(c.a.Component);f.propTypes={witness:l.a.ChainObject.isRequired},f=n.i(s.a)(f),t.a=f},1244:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),c=n.n(i),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=function(e){function t(e,n){o(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(n)if(a.stores={},a.state={},void 0===n.length)a.stores[n.StoreModel.name]=n,a.state=n.getState();else if(n.length>=1)for(var i=0;i<n.length;i++){var c=n[i].StoreModel.name;a.stores[c]=n[i];var l=n[i].getState();for(var s in l)a.state[s]=l[s]}return a}return a(t,e),l(t,[{key:"_bind",value:function(){for(var e=this,t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];n.forEach(function(t){return e[t]=e[t].bind(e)})}},{key:"componentWillMount",value:function(){if(this.stores)for(var e in this.stores)this.stores[e].listen(this.onChange.bind(this))}},{key:"componentWillUnmount",value:function(){if(this.stores)for(var e in this.stores)this.stores[e].unlisten(this.onChange.bind(this))}},{key:"onChange",value:function(e){e&&this.setState(e)}}]),t}(c.a.Component);t.a=s},1246:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),c=n.n(i),l=n(1244),s=n(91),u=n(24),p=n.n(u),f=n(400),h=n(404),b=n(23),y=n.n(b),m=n(60),v=n(59),d=n(1218),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),k=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),g(t,[{key:"shouldComponentUpdate",value:function(e){return e.block.id!==this.props.block.id}},{key:"render",value:function(){var e=this.props.block,t=null;return t=[],e.transactions.length>0&&(t=[],e.transactions.forEach(function(e,n){t.push(c.a.createElement(h.a,{key:n,trx:e,index:n}))})),c.a.createElement("div",null,t)}}]),t}(c.a.Component),_=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._bind("_previousBlock","_nextBlock"),n}return a(t,e),g(t,[{key:"shouldComponentUpdate",value:function(e){return!p.a.is(e.blocks,this.props.blocks)||e.height!==this.props.height||e.dynGlobalObject!==this.props.dynGlobalObject}},{key:"_getBlock",value:function(e){e&&(e=parseInt(e,10),this.props.blocks.get(e)||f.a.getBlock(e))}},{key:"componentWillReceiveProps",value:function(e){e.height!==this.props.height&&this._getBlock(e.height)}},{key:"_nextBlock",value:function(){var e=this.props.params.height,t=Math.min(this.props.dynGlobalObject.get("head_block_number"),parseInt(e,10)+1);this.props.router.push("/block/"+t)}},{key:"_previousBlock",value:function(){var e=this.props.params.height,t=Math.max(1,parseInt(e,10)-1);this.props.router.push("/block/"+t)}},{key:"componentDidMount",value:function(){this._getBlock(this.props.height)}},{key:"render",value:function(){var e=this.props.blocks,t=parseInt(this.props.height,10),n=e.get(t);return c.a.createElement("div",{className:"grid-block"},c.a.createElement("div",{className:"grid-content"},c.a.createElement("div",{className:"grid-content no-overflow medium-offset-2 medium-8 large-offset-3 large-6 small-12"},c.a.createElement("h4",{className:"text-center"},c.a.createElement(y.a,{style:{textTransform:"uppercase"},component:"span",content:"explorer.block.title"})," #",t),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(y.a,{component:"span",content:"explorer.block.date"}),":  ",n?c.a.createElement(s.c,{value:n.timestamp,format:"full"}):null),c.a.createElement("li",null,c.a.createElement(y.a,{component:"span",content:"explorer.block.witness"}),":  ",n?c.a.createElement(d.a,{witness:n.witness}):null),c.a.createElement("li",null,c.a.createElement(y.a,{component:"span",content:"explorer.block.previous"}),": ",n?n.previous:null),c.a.createElement("li",null,c.a.createElement(y.a,{component:"span",content:"explorer.block.transactions"}),": ",n?n.transactions.length:null)),c.a.createElement("div",{className:"clearfix",style:{marginBottom:"1rem"}},c.a.createElement("div",{className:"button float-left outline",onClick:this._previousBlock.bind(this)},"←"),c.a.createElement("div",{className:"button float-right outline",onClick:this._nextBlock.bind(this)},"→")),n?c.a.createElement(k,{block:n}):null)))}}]),t}(l.a);_.propTypes={dynGlobalObject:m.a.ChainObject.isRequired,blocks:i.PropTypes.object.isRequired,height:i.PropTypes.number.isRequired},_.defaultProps={dynGlobalObject:"2.1.0",blocks:{},height:1},t.a=n.i(v.a)(_,{keep_updating:!0})}});
//# sourceMappingURL=32.js.map