webpackJsonp([8,10],{1187:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(1),o=n.n(l),i=n(90),u=n(60),s=n(388),p=n(59),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),m(t,[{key:"render",value:function(){var e=this.props.accounts.filter(function(e){return!!e}).filter(function(e){return i.a.isMyAccount(e)}).map(function(e){return e.get("name")}).sort();return o.a.createElement("span",null,o.a.createElement(s.a,{onChange:this.onAccountSelect.bind(this),account_names:e,center:!0}))}},{key:"onAccountSelect",value:function(e){this.props.onChange(e)}}]),t}(l.Component);f.propTypes={accounts:u.a.ChainAccountsList.isRequired,onChange:o.a.PropTypes.func.isRequired},t.a=n.i(p.a)(f,{keep_updating:!0})},1188:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(1),o=n.n(l),i=n(62),u=(n.n(i),n(24)),s=n.n(u),p=n(108),m=n(378),f=n(377),b=n(127),h=n(23),d=n.n(h),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),E=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),y(t,[{key:"componentWillReceiveProps",value:function(e){e.claim_account_name&&this.onClaimAccount(e.claim_account_name,e.checked)}},{key:"render",value:function(){var e=this;if(void 0===this.props.balances||!this.props.total_by_account_asset.size)return o.a.createElement("div",null);var t=-1;return o.a.createElement("div",null,o.a.createElement("table",{className:"table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null),o.a.createElement("th",{style:{textAlign:"center"}},o.a.createElement(d.a,{content:"wallet.unclaimed"})),o.a.createElement("th",{style:{textAlign:"center"}},o.a.createElement(d.a,{content:"wallet.unclaimed_vesting"})),o.a.createElement("th",{style:{textAlign:"center"}},o.a.createElement(d.a,{content:"account.name"})))),o.a.createElement("tbody",null,this.props.total_by_account_asset.map(function(n,a){return o.a.createElement("tr",{key:++t},o.a.createElement("td",null,o.a.createElement("input",{type:"checkbox",checked:!!e.props.checked.get(t),onChange:e.onCheckbox.bind(e,t,n.balances)})),o.a.createElement("td",{style:{textAlign:"right"}},n.unclaimed?o.a.createElement(b.a,{color:"info",amount:n.unclaimed,asset:a.get(1)}):null),o.a.createElement("td",{style:{textAlign:"right"}},n.vesting.unclaimed?o.a.createElement("div",null,o.a.createElement(b.a,{color:"info",amount:n.vesting.unclaimed,hide_asset:!0,asset:a.get(1)}),o.a.createElement("span",null," of "),o.a.createElement(b.a,{color:"info",amount:n.vesting.total,asset:a.get(1)})):null),o.a.createElement("td",null," ",a.get(0)," "))}).toArray())))}},{key:"onCheckbox",value:function(e,t){var n=this.props.checked;n=n.get(e)?n.delete(e):n.set(e,t),f.a.setSelectedBalanceClaims(n)}},{key:"onClaimAccount",value:function(e,t){if(!t.size){var n=-1;this.props.total_by_account_asset.forEach(function(a,r){n++;var c=r.get(0);c===e&&(a.unclaimed||a.vesting.unclaimed)&&(t=t.set(n,a.balances))}),t.size&&f.a.setSelectedBalanceClaims(t)}}}]),t}(l.Component);E=n.i(i.connect)(E,{listenTo:function(){return[m.a]},getProps:function(){var e=m.a.getState(),t=e.balances,n=e.address_to_pubkey,a=p.a.getState().keys,r=s.a.Map().asMutable(),c=function(e,t){var n=r.get(e);return n||(n=s.a.Set().asMutable(),r.set(e,n)),n.add(t),n.size};return t&&(e.total_by_account_asset=t.groupBy(function(e){var t="",r=n.get(e.owner),l=a.get(r);l&&l.import_account_names&&(t=l.import_account_names.join(", "));var o=Math.ceil(c(s.a.List([t,e.balance.asset_id]),e.owner)/60),i=s.a.List([t,e.balance.asset_id,o]);return i}).map(function(e){return e.reduce(function(e,t){return t.public_key_string=n.get(t.owner),e.balances=e.balances.add(t),void 0!=t.vested_balance?(e.vesting.unclaimed+=Number(t.vested_balance.amount),e.vesting.total+=Number(t.balance.amount)):e.unclaimed+=Number(t.balance.amount),e},{unclaimed:0,vesting:{unclaimed:0,total:0},balances:s.a.Set()})}).sortBy(function(e){return e})),e}}),t.a=E},380:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),o=n.n(l),i=n(62),u=(n.n(i),n(24)),s=n.n(u),p=n(61),m=n.n(p),f=n(255),b=n(130),h=n(108),d=n(170),y=n(378),E=n(377),_=n(1188),v=n(253),g=n(1187),w=n(23),k=n.n(w),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),C=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),O(t,[{key:"componentWillMount",value:function(){var e=h.a.getState().keys,t=e.keySeq();E.a.setPubkeys(t),this.existing_keys=t}},{key:"componentWillReceiveProps",value:function(e){var t=h.a.getState().keys,n=t.keySeq();n.equals(this.existing_keys)||(this.existing_keys=n,E.a.setPubkeys(n))}},{key:"render",value:function(){if(!this.props.account_refs.size)return o.a.createElement("div",null,o.a.createElement("h5",null,o.a.createElement(k.a,{content:"wallet.no_balance"})));if(this.props.loading)return o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("h5",null,o.a.createElement(k.a,{content:"wallet.loading_balances"}),"…"),o.a.createElement("br",null),o.a.createElement(b.a,{type:"three-bounce"}));if(!this.props.balances||!this.props.balances.size)return o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("h5",null,o.a.createElement(k.a,{content:"wallet.no_balance"})));var e=this.props.selected_balances.size&&this.props.claim_account_name,t=e?" ("+this.props.claim_account_name+")":null;return o.a.createElement("div",null,o.a.createElement("div",{className:"content-block center-content"},o.a.createElement("h3",{className:"no-border-bottom"},o.a.createElement(k.a,{content:"wallet.claim_balances"}))),o.a.createElement("div",{className:"grid-block vertical"},o.a.createElement("div",{className:"grid-content",style:{overflowY:"hidden !important"}},o.a.createElement("div",{className:"full-width-content center-content"},o.a.createElement(g.a,{key:this.props.balances,accounts:s.a.List(this.props.account_refs),onChange:this.onClaimAccountChange.bind(this)})),o.a.createElement("br",null)),o.a.createElement("br",null),o.a.createElement(_.a,null)),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:m()("button success",{disabled:!e}),onClick:this.onClaimBalance.bind(this)},o.a.createElement(k.a,{content:"wallet.claim_balance"}),t),o.a.createElement("div",{className:"button cancel",onClick:this.onBack.bind(this)},o.a.createElement(k.a,{content:"wallet.cancel"})))}},{key:"onBack",value:function(e){e.preventDefault(),window.history.back()}},{key:"onClaimAccountChange",value:function(e){E.a.claimAccountChange(e)}},{key:"onClaimBalance",value:function(){v.a.importBalance(this.props.claim_account_name,this.props.selected_balances,!0).catch(function(e){console.error("claimBalance",e);var t=e;try{t=e.data.message}catch(e){}throw f.a.error("Error claiming balance: "+t),e})}}]),t}(l.Component);C=n.i(i.connect)(C,{listenTo:function(){return[y.a,d.a,h.a]},getProps:function(){var e=y.a.getState();return e.account_refs=d.a.getState().account_refs,e}}),t.default=C},408:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),o=n.n(l),i=n(48),u=n(62),s=(n.n(u),n(163)),p=n(380),m=n(23),f=n.n(m);n.d(t,"ExistingAccount",function(){return d}),n.d(t,"ExistingAccountOptions",function(){return y});var b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h={listenTo:function(){return[s.a]},getProps:function(){var e=s.a.getState();return{wallet:e}}},d=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),b(t,[{key:"render",value:function(){var e=0!=this.props.wallet.wallet_names.count();return o.a.createElement("div",{className:"grid-container"},o.a.createElement("div",{className:"grid-content"},o.a.createElement("div",{className:"content-block center-content"},o.a.createElement("div",{className:"page-header"},o.a.createElement("h1",null,o.a.createElement(f.a,{content:"account.welcome"})),e?o.a.createElement("h3",null,o.a.createElement(f.a,{content:"wallet.setup_wallet"})):o.a.createElement("h3",null,o.a.createElement(f.a,{content:"wallet.create_wallet_backup"}))),o.a.createElement("div",{className:"content-block"},this.props.children))))}}]),t}(l.Component);d=n.i(u.connect)(d,h);var y=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),b(t,[{key:"render",value:function(){var e=0!=this.props.wallet.wallet_names.count();return o.a.createElement("span",null,e?null:o.a.createElement("div",null,o.a.createElement(i.e,{to:"existing-account/import-backup"},o.a.createElement(f.a,{content:"wallet.import_backup"})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(i.e,{to:"existing-account/import-keys"},o.a.createElement(f.a,{content:"wallet.import_bts1"})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(i.e,{to:"existing-account/import-keys"},o.a.createElement(f.a,{content:"wallet.create_wallet"})),o.a.createElement("br",null),o.a.createElement("hr",null)),e?o.a.createElement(p.default,null):null,e?o.a.createElement("span",null,o.a.createElement(i.e,{to:"dashboard"},o.a.createElement("div",{className:"button outline"},o.a.createElement(f.a,{component:"span",content:"header.dashboard"}))),o.a.createElement(i.e,{to:"wallet"},o.a.createElement("div",{className:"button outline"},o.a.createElement(f.a,{content:"settings.wallets"})))):null)}}]),t}(l.Component);y=n.i(u.connect)(y,h)}});
//# sourceMappingURL=8.js.map