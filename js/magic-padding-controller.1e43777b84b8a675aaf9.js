(window.wpJsonpTemplateSections=window.wpJsonpTemplateSections||[]).push([[26],{954:function(t,e,n){"use strict";n.r(e);n(18),n(28),n(29),n(43),n(44),n(56),n(19),n(36),n(70),n(20),n(8),n(30),n(72),n(26),n(27);var i=n(47),o=n(48),a=n(97),s=n.n(a),c=n(2);function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw a}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g="section-match-padding-top",l=function(){function t(e){var n=this;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"onSectionTweak",(function(t){var e=t.styles;if(!e)return!1;var i=Object.keys(e).filter((function(t){return n.currentStyles[t]!==e[t]}));if(0===i.length)return!1;i.includes("sectionTheme")&&(e.sectionTheme?n.checkNeighborsMagicPadding(e.sectionTheme):n.checkNeighborsMagicPadding("default-global-theme"))})),u(this,"destroy",(function(){o.a.disconnect(n.sectionId,n.boundSectionTweak)})),this.betaFeatureFlags=Object(i.a)(window,"Static.SQUARESPACE_CONTEXT.betaFeatureFlags",[]),this.isSectionAdmin=this.betaFeatureFlags.includes("section_admin"),this.isSectionAdmin){this.node=e,this.sectionId=this.node.getAttribute("data-section-id");var a=this.node.getAttribute("data-current-styles");this.currentStyles=a?JSON.parse(a):{},this.prevSection=this.node.previousElementSibling,this.nextSection=this.node.nextElementSibling,this.isFirstSection=null===this.node.previousElementSibling,this.boundSectionTweak=this.onSectionTweak.bind(this),o.a.watch(this.sectionId,this.boundSectionTweak),this.viewportWatcher=new s.a,this.viewportWatcher.addNodes({nodes:this.node,range:[100,0],callbacks:{onEnter:function(){n.node.dataset.active=!0}}}),this.onFirstLoadSetMagicPadding()}}var e,n,a;return e=t,(n=[{key:"toggleMagicPadding",value:function(t,e,n){t?e.classList.add(n):e.classList.remove(n)}},{key:"doesSectionBackgroundMatch",value:function(t,e){return this.getSectionTheme(t)===e}},{key:"onFirstLoadSetMagicPadding",value:function(){if(!this.node.classList.contains("has-background")){var t=this.getSectionTheme(this.node);this.isFirstSection||this.prevSection.classList.contains("has-background")||this.doesSectionBackgroundMatch(this.prevSection,t)&&this.toggleMagicPadding(!0,this.node,g),this.nextSection&&"section"===this.nextSection.nodeName.toLowerCase()&&!this.nextSection.classList.contains("has-background")&&this.doesSectionBackgroundMatch(this.nextSection,t)&&this.toggleMagicPadding(!0,this.node,"section-match-padding-bottom")}}},{key:"checkNeighborsMagicPadding",value:function(t){this.isFirstSection||this.prevSection.classList.contains("has-background")||(this.doesSectionBackgroundMatch(this.prevSection,t)?(this.toggleMagicPadding(!0,this.node,g),this.toggleMagicPadding(!0,this.prevSection,"section-match-padding-bottom")):(this.toggleMagicPadding(!1,this.node,g),this.toggleMagicPadding(!1,this.prevSection,"section-match-padding-bottom"))),this.nextSection&&"section"===this.nextSection.nodeName.toLowerCase()&&!this.nextSection.classList.contains("has-background")&&(this.doesSectionBackgroundMatch(this.nextSection,t)?(this.toggleMagicPadding(!0,this.node,"section-match-padding-bottom"),this.toggleMagicPadding(!0,this.nextSection,g)):(this.toggleMagicPadding(!1,this.node,"section-match-padding-bottom"),this.toggleMagicPadding(!1,this.nextSection,g)))}},{key:"getSectionTheme",value:function(t){var e,n=t.classList,i=r(c.j);try{for(i.s();!(e=i.n()).done;){var o=e.value;if(n.contains(o))return o}}catch(t){i.e(t)}finally{i.f()}return"default-global-theme"}},{key:"getSectionHeightClass",value:function(t){var e,n=t.classList;for(e in n)if("string"==typeof n[e]&&n[e].includes("section-height"))return n[e];return"custom-section-theme"}}])&&h(e.prototype,n),a&&h(e,a),t}();e.default=function(t){return new l(t)}}}]);