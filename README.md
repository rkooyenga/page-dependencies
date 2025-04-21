## Page Dependency Spy
---

Quickly and easily reveal all Script and CSS assets are linked within a document. 

Easy to use just save the code as a bookmark in Chrome, Opera, Firefox. Making sure the URL starts with *javascript:* 


<script>var bkjs = "javascript:function __bkdp(){var d=document,z=d.createElement('script'),b=d.body;function loadScript(){z.setAttribute('src','https://d3uaz5bp3928j6.cloudfront.net/assets/bkjs/pagedependencies.js?t='+(new Date().getTime()));b.appendChild(z)};if(b){loadScript()}else{alert('Try again when the page loads.')}}__bkdp();void(0);";
$('#bookmarklet').attr('href', bkjs);</script>

<style>html,*{
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
body{
  min-width:505px;
  background-color:#2a2a2a;
font-family: "Lato Sans", "Adamina","PT Serif","Inter",Ubuntu,medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: 0;
  font-weight: 400;
  font-style: normal;
  font-size: calc(18px + 4 * ((100vw - 450px) / 1400));
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: "liga" on;
  opacity: 0.98;
}
img,
video,
iframe {
  max-inline-size: 100%;
  block-size: auto;
width:fit-content; 
}
img{
  place-item:left stretch;
  box-shadow: .036cm .14cm .1cm rgba(0,0,0, 0.65);
color: rgb(250,250,250);
border: 1.6px inset rgba(72,72,72,0.4);
}
div.wrap{
  padding:8px;
  display:grid;
  gap:0px;
  place-items:top;
  grid-column-gap: 0px;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  max-height:50%;
}

div.promo {
  place-self: right stretch;
  display:inline-block;
  position:relative;
  background: #222 url('https://codepen.io/images/classy_fabric.png');
  color:#ffe;
  min-width:450px;
  padding:22px;
  margin: 7px;
  top:0;
  border:inset 0 3px 0 1px rgba(0, 0, 0, 0.09);
  border-radius:5px;
  font-size: calc(16px + 4 * ((100vw - 320px) / 1400));
  line-height:1.17;
  -webkit-box-shadow: 0 1px 0 hsla(0,0%,100%,.1),
                        inset 0 1px 4px hsla(0,0%,0%,.8);
       -moz-box-shadow: 0 1px 0 hsla(0,0%,100%,.1),
                        inset 0 1px 4px hsla(0,0%,0%,.8);
            box-shadow: 0 1px 0 hsla(0,0%,100%,.1),
                        inset 0 1px 4px hsla(0,0%,0%,.8);
}

h1 {
  font-family: "HelveticaNeue-CondensedBold", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
font-size: calc(18px + (30 - 18)*(100vw - 320px)/(1400 - 320));
  font-weight:bold;
  padding-bottom:8px;
}


/* Button by Josh!
https://codepen.io/joshnh/pen/33/1 */

.button {
    background-color: #222;
    background-image: -webkit-linear-gradient(hsla(0,0%,100%,.15), hsla(0,0%,0%,0));
    background-image:    -moz-linear-gradient(hsla(0,0%,100%,.15), hsla(0,0%,0%,0));
    background-image:     -ms-linear-gradient(hsla(0,0%,100%,.15), hsla(0,0%,0%,0));
    background-image:      -o-linear-gradient(hsla(0,0%,100%,.15), hsla(0,0%,0%,0));
    background-image:         linear-gradient(hsla(0,0%,100%,.15), hsla(0,0%,0%,0));
    border: 1px solid #111;
    color: #c6c6c6;
    cursor: pointer;
    display: inline-block;
    font: bold 14px/10px sans-serif;
    margin: 20px;
    padding: 10px 15px;
    position: relative;
    text-decoration: none;
    text-shadow: 0 -1px 1px hsla(0,0%,0%,.8);
    -webkit-border-radius: 3px;
       -moz-border-radius: 3px;
            border-radius: 3px;
    -webkit-box-shadow: 0 1px 4px hsla(0,0%,0%,.4),
                        inset 0 1px 0 hsla(0,0%,100%,.2);
       -moz-box-shadow: 0 1px 4px hsla(0,0%,0%,.4),
                        inset 0 1px 0 hsla(0,0%,100%,.2);
            box-shadow: 0 1px 4px hsla(0,0%,0%,.4),
                        inset 0 1px 0 hsla(0,0%,100%,.2);
}
.button:hover,
.button:focus {
    background-color: #242424;
    color: #f6f6f6;
    -webkit-box-shadow: 0 1px 4px hsla(0,0%,0%,.4),
                        inset 0 1px 0 hsla(0,0%,100%,.2);
       -moz-box-shadow: 0 1px 4px hsla(0,0%,0%,.4),
                        inset 0 1px 0 hsla(0,0%,100%,.2);
            box-shadow: 0 1px 4px hsla(0,0%,0%,.4),
                        inset 0 1px 0 hsla(0,0%,100%,.2);
}
.button:after {
    background-image: -webkit-linear-gradient(left, hsla(0,0%,0%,0), hsla(0,0%,100%,.8), hsla(0,0%,0%,0));
    background-image:    -moz-linear-gradient(left, hsla(0,0%,0%,0), hsla(0,0%,100%,.8), hsla(0,0%,0%,0));
    background-image:     -ms-linear-gradient(left, hsla(0,0%,0%,0), hsla(0,0%,100%,.8), hsla(0,0%,0%,0));
    background-image:      -o-linear-gradient(left, hsla(0,0%,0%,0), hsla(0,0%,100%,.8), hsla(0,0%,0%,0));
    background-image:         linear-gradient(left, hsla(0,0%,0%,0), hsla(0,0%,100%,.8), hsla(0,0%,0%,0));
    background-position: 50% 0%;
    background-size: 200% 200%;
    content: '';
    display: none;
    height: 1px;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}
.button:hover:after,
.button:focus:after {
    display: block;
}
.button:before {
    background: #363636;
    bottom: -8px;
    content: '';
    left: -8px;
    position: absolute;
    right: -8px;
    top: -8px;
    z-index: -1;
    -webkit-border-radius: 6px;
       -moz-border-radius: 6px;
            border-radius: 6px;
    -webkit-box-shadow: 0 1px 1px hsla(0,0%,100%,.3),
                        inset 0 1px 1px hsla(0,0%,0%,.4),
                        inset 0 0 5px hsla(0,0%,0%,.2);
       -moz-box-shadow: 0 1px 1px hsla(0,0%,100%,.3),
                        inset 0 1px 1px hsla(0,0%,0%,.4),
                        inset 0 0 5px hsla(0,0%,0%,.2);
            box-shadow: 0 1px 1px hsla(0,0%,100%,.3),
                        inset 0 1px 1px hsla(0,0%,0%,.4),
                        inset 0 0 5px hsla(0,0%,0%,.2);
}
.button:active {
    background-color: #202020;
    color: #b6b6b6;
    padding: 11px 15px 9px;
    -webkit-box-shadow: 0 1px 0 hsla(0,0%,100%,.1),
                        inset 0 1px 4px hsla(0,0%,0%,.8);
       -moz-box-shadow: 0 1px 0 hsla(0,0%,100%,.1),
                        inset 0 1px 4px hsla(0,0%,0%,.8);
            box-shadow: 0 1px 0 hsla(0,0%,100%,.1),
                        inset 0 1px 4px hsla(0,0%,0%,.8);
}
.button:active:after {
    display: block;
    left: 1px;
    opacity: .5;
    right: 1px;
    top: 31px;
}
@media screen and (max-width:850px){
  div.wrap{
    grid-template-columns: 1fr;
  }
}</style>

<div class="container"><div class="wrap"><div class="promo">
<h1>Page Dependencies :. Bookmarklet</h1>
  <p>The Page Deps bookmarklet reveals page dependencies of a URL you're visiting. You can copy one by one, inspect, or download the lot of them as a batch.</p>
<p><a id="bookmarklet" class="button">Page Deps</a> &larr; Drag to your bookmark bar!</p>
  <p>Whether you want to know at a glance how many ad servers are embedded, what library an effect might be from, where they got that font, or if your own page is loading everything as intended, this tool makes it quick and easy.</p>
  </div>
  <div>
    <div>
<picture onload="sizeme();">
  <source
srcset="https://d3uaz5bp3928j6.cloudfront.net/assets/web/img/pagedeps.webp"
    media="(all)" />
  <img height="" width="" src="https://d3uaz5bp3928j6.cloudfront.net/assets/web/img/pagedeps.webp" alt="" />
</picture>
    </div>
    </div>
</div>
</div>



<button id="loadScript">Try It</button>
<script>
document.getElementById('loadScript').addEventListener('click', () => {
    const s = document.createElement('script');
    s.src = 'page-deps.js';
    s.async = true;
    document.scripts[0].parentNode.insertBefore(s, document.scripts[0]);
});
</script>
<script>function __bkdp(){var d=document,z=d.createElement('script'),b=d.body;function loadScript(){z.setAttribute('src','https://d3uaz5bp3928j6.cloudfront.net/assets/bkjs/pagedependencies.js?t=%27+(new%20Date().getTime()));b.appendChild(z)};if(b){loadScript()}else{alert(%27Try%20again%20when%20the%20page%20loads.%27)}}__bkdp();void(0);</script>

| Try it Now | Drag to Bookmarks |
| ------ | ------ |
|<button id="loadScript">Try It</button> |<button id="bkjs">Save It</button> |

Features include the ability to launch any of the .js or .css hrefs in a separate window, copy the script/style tags to clipboard, even scrape the tags and export all references to text file.

Useful for site inspection, debugging, hacking. Can be useful in dev tools console or saved as a bookmarklet.

