d3.functor=function t(e){return"function"==typeof e?e:function(){return e}},d3.tip=function(){function t(t){w=y(t),T=w.createSVGPoint(),document.body.appendChild(g)}function e(){return"n"}function n(){return[0,0]}function r(){return" "}function o(){var t=m();return{top:t.n.y-g.offsetHeight,left:t.n.x-g.offsetWidth/2}}function l(){var t=m();return{top:t.s.y,left:t.s.x-g.offsetWidth/2}}function f(){var t=m();return{top:t.e.y-g.offsetHeight/2,left:t.e.x}}function i(){var t=m();return{top:t.w.y-g.offsetHeight/2,left:t.w.x-g.offsetWidth}}function u(){var t=m();return{top:t.nw.y-g.offsetHeight,left:t.nw.x-g.offsetWidth}}function s(){var t=m();return{top:t.ne.y-g.offsetHeight,left:t.ne.x}}function c(){var t=m();return{top:t.sw.y,left:t.sw.x-g.offsetWidth}}function a(){var t=m();return{top:t.se.y,left:t.e.x}}function p(){var t=d3.select(document.createElement("div"));return t.style("position","absolute").style("top",0).style("opacity",0).style("pointer-events","none").style("box-sizing","border-box"),t.node()}function y(t){return t=t.node(),"svg"===t.tagName.toLowerCase()?t:t.ownerSVGElement}function d(){return null===g&&(g=p(),document.body.appendChild(g)),d3.select(g)}function m(){for(var t=b||d3.event.target;void 0===t.getScreenCTM&&"undefined"===t.parentNode;)t=t.parentNode;var e={},n=t.getScreenCTM(),r=t.getBBox(),o=r.width,l=r.height,f=r.x,i=r.y;return T.x=f,T.y=i,e.nw=T.matrixTransform(n),T.x+=o,e.ne=T.matrixTransform(n),T.y+=l,e.se=T.matrixTransform(n),T.x-=o,e.sw=T.matrixTransform(n),T.y-=l/2,e.w=T.matrixTransform(n),T.x+=o,e.e=T.matrixTransform(n),T.x-=o/2,T.y-=l/2,e.n=T.matrixTransform(n),T.y+=l,e.s=T.matrixTransform(n),e}var h=e,x=n,v=r,g=p(),w=null,T=null,b=null;t.show=function(){var e=Array.prototype.slice.call(arguments);e[e.length-1]instanceof SVGElement&&(b=e.pop());var n=v.apply(this,e),r=x.apply(this,e),o=h.apply(this,e),l=d(),f=C.length,i,u=document.documentElement.scrollTop||document.body.scrollTop,s=document.documentElement.scrollLeft||document.body.scrollLeft;for(l.html(n).style("position","absolute").style("opacity",1).style("pointer-events","all");f--;)l.classed(C[f],!1);return i=E[o].apply(this),l.classed(o,!0).style("top",i.top+r[0]+u+"px").style("left",i.left+r[1]+s+"px"),t},t.hide=function(){return d().style("opacity",0).style("pointer-events","none"),t},t.attr=function(e,n){if(arguments.length<2&&"string"==typeof e)return d().attr(e);var r=Array.prototype.slice.call(arguments);return d3.selection.prototype.attr.apply(d(),r),t},t.style=function(e,n){if(arguments.length<2&&"string"==typeof e)return d().style(e);var r=Array.prototype.slice.call(arguments);if(1===r.length){var o=r[0];Object.keys(o).forEach(function(t){return d3.selection.prototype.style.apply(d(),[t,o[t]])})}return t},t.direction=function(e){return arguments.length?(h=null==e?e:d3.functor(e),t):h},t.offset=function(e){return arguments.length?(x=null==e?e:d3.functor(e),t):x},t.html=function(e){return arguments.length?(v=null==e?e:d3.functor(e),t):v},t.destroy=function(){return g&&(d().remove(),g=null),t};var E={n:o,s:l,e:f,w:i,nw:u,ne:s,sw:c,se:a},C=Object.keys(E);return t};