 (function(doc, win) {
     var docEl = doc.documentElement,
         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
         recalc = function() {
             var clientWidth = docEl.clientWidth;
             if (!clientWidth) return;
             docEl.style.fontSize = 100 * (clientWidth / 640) + 'px'
                 //  var pxOneRem = 100 * (clientWidth / 640)
                 //  docEl.style.fontSize = pxOneRem * 14 / adapt() + 'px'
         };
     if (!doc.addEventListener) return;
     win.addEventListener(resizeEvt, recalc, false);
     doc.addEventListener('DOMContentLoaded', recalc, false);
 })(document, window);


 //  function adapt() {
 //      var d = window.document.createElement('div');
 //      d.style.width = '1rem';
 //      d.style.display = "none";
 //      var head = window.document.getElementsByTagName('head')[0];
 //      head.appendChild(d);
 //      var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
 //      return defaultFontSize
 //  };