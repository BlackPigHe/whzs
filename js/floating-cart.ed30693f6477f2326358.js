(window.wpJsonpTemplateSections=window.wpJsonpTemplateSections||[]).push([[14],{947:function(t,n,e){"use strict";e.r(n);var i=e(47),o=e(181);n.default=function(t){Object(o.a)().then((function(){var n=Object(i.a)(window,"Y.Squarespace.Singletons.ShoppingCart",null);n&&(n.on("item-added",(function(n){t.classList.remove("hidden")})),n.after("load",(function(n){n.target.get("totalQuantity")>0&&t.classList.remove("hidden")})))}))}}}]);