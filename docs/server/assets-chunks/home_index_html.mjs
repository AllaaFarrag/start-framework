export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>StartFramework</title>
  <base href="/start-framework/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<style>@charset "UTF-8";:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-black:#000;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-primary-text-emphasis:#052c65;--bs-secondary-text-emphasis:#2b2f32;--bs-success-text-emphasis:#0a3622;--bs-info-text-emphasis:#055160;--bs-warning-text-emphasis:#664d03;--bs-danger-text-emphasis:#58151c;--bs-light-text-emphasis:#495057;--bs-dark-text-emphasis:#495057;--bs-primary-bg-subtle:#cfe2ff;--bs-secondary-bg-subtle:#e2e3e5;--bs-success-bg-subtle:#d1e7dd;--bs-info-bg-subtle:#cff4fc;--bs-warning-bg-subtle:#fff3cd;--bs-danger-bg-subtle:#f8d7da;--bs-light-bg-subtle:#fcfcfd;--bs-dark-bg-subtle:#ced4da;--bs-primary-border-subtle:#9ec5fe;--bs-secondary-border-subtle:#c4c8cb;--bs-success-border-subtle:#a3cfbb;--bs-info-border-subtle:#9eeaf9;--bs-warning-border-subtle:#ffe69c;--bs-danger-border-subtle:#f1aeb5;--bs-light-border-subtle:#e9ecef;--bs-dark-border-subtle:#adb5bd;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-font-sans-serif:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-color-rgb:33,37,41;--bs-body-bg:#fff;--bs-body-bg-rgb:255,255,255;--bs-emphasis-color:#000;--bs-emphasis-color-rgb:0,0,0;--bs-secondary-color:rgba(33, 37, 41, .75);--bs-secondary-color-rgb:33,37,41;--bs-secondary-bg:#e9ecef;--bs-secondary-bg-rgb:233,236,239;--bs-tertiary-color:rgba(33, 37, 41, .5);--bs-tertiary-color-rgb:33,37,41;--bs-tertiary-bg:#f8f9fa;--bs-tertiary-bg-rgb:248,249,250;--bs-heading-color:inherit;--bs-link-color:#0d6efd;--bs-link-color-rgb:13,110,253;--bs-link-decoration:underline;--bs-link-hover-color:#0a58ca;--bs-link-hover-color-rgb:10,88,202;--bs-code-color:#d63384;--bs-highlight-color:#212529;--bs-highlight-bg:#fff3cd;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:#dee2e6;--bs-border-color-translucent:rgba(0, 0, 0, .175);--bs-border-radius:.375rem;--bs-border-radius-sm:.25rem;--bs-border-radius-lg:.5rem;--bs-border-radius-xl:1rem;--bs-border-radius-xxl:2rem;--bs-border-radius-2xl:var(--bs-border-radius-xxl);--bs-border-radius-pill:50rem;--bs-box-shadow:0 .5rem 1rem rgba(0, 0, 0, .15);--bs-box-shadow-sm:0 .125rem .25rem rgba(0, 0, 0, .075);--bs-box-shadow-lg:0 1rem 3rem rgba(0, 0, 0, .175);--bs-box-shadow-inset:inset 0 1px 2px rgba(0, 0, 0, .075);--bs-focus-ring-width:.25rem;--bs-focus-ring-opacity:.25;--bs-focus-ring-color:rgba(13, 110, 253, .25);--bs-form-valid-color:#198754;--bs-form-valid-border-color:#198754;--bs-form-invalid-color:#dc3545;--bs-form-invalid-border-color:#dc3545}*,:after,:before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}h2,h3{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2;color:var(--bs-heading-color)}h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){h2{font-size:2rem}}h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){h3{font-size:1.75rem}}p{margin-top:0;margin-bottom:1rem}ul{padding-left:2rem}ul{margin-top:0;margin-bottom:1rem}a{color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));text-decoration:underline}a:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb)}img{vertical-align:middle}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button{text-transform:none}[type=button],button{-webkit-appearance:button}[type=button]:not(:disabled),button:not(:disabled){cursor:pointer}.container{--bs-gutter-x:1.5rem;--bs-gutter-y:0;width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}@media (min-width:1400px){.container{max-width:1320px}}:root{--bs-breakpoint-xs:0;--bs-breakpoint-sm:576px;--bs-breakpoint-md:768px;--bs-breakpoint-lg:992px;--bs-breakpoint-xl:1200px;--bs-breakpoint-xxl:1400px}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(-1 * var(--bs-gutter-y));margin-right:calc(-.5 * var(--bs-gutter-x));margin-left:calc(-.5 * var(--bs-gutter-x))}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-top:var(--bs-gutter-y)}.col-4{flex:0 0 auto;width:33.33333333%}.collapse:not(.show){display:none}.nav-link{display:block;padding:var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);font-size:var(--bs-nav-link-font-size);font-weight:var(--bs-nav-link-font-weight);color:var(--bs-nav-link-color);text-decoration:none;background:0 0;border:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link:focus,.nav-link:hover{color:var(--bs-nav-link-hover-color)}.nav-link:focus-visible{outline:0;box-shadow:0 0 0 .25rem #0d6efd40}.nav-link:disabled{color:var(--bs-nav-link-disabled-color);pointer-events:none;cursor:default}.navbar{--bs-navbar-padding-x:0;--bs-navbar-padding-y:.5rem;--bs-navbar-color:rgba(var(--bs-emphasis-color-rgb), .65);--bs-navbar-hover-color:rgba(var(--bs-emphasis-color-rgb), .8);--bs-navbar-disabled-color:rgba(var(--bs-emphasis-color-rgb), .3);--bs-navbar-active-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-brand-padding-y:.3125rem;--bs-navbar-brand-margin-end:1rem;--bs-navbar-brand-font-size:1.25rem;--bs-navbar-brand-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-brand-hover-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-nav-link-padding-x:.5rem;--bs-navbar-toggler-padding-y:.25rem;--bs-navbar-toggler-padding-x:.75rem;--bs-navbar-toggler-font-size:1.25rem;--bs-navbar-toggler-icon-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");--bs-navbar-toggler-border-color:rgba(var(--bs-emphasis-color-rgb), .15);--bs-navbar-toggler-border-radius:var(--bs-border-radius);--bs-navbar-toggler-focus-width:.25rem;--bs-navbar-toggler-transition:box-shadow .15s ease-in-out;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:var(--bs-navbar-padding-y) var(--bs-navbar-padding-x)}.navbar>.container{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:var(--bs-navbar-brand-padding-y);padding-bottom:var(--bs-navbar-brand-padding-y);margin-right:var(--bs-navbar-brand-margin-end);font-size:var(--bs-navbar-brand-font-size);color:var(--bs-navbar-brand-color);text-decoration:none;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{color:var(--bs-navbar-brand-hover-color)}.navbar-nav{--bs-nav-link-padding-x:0;--bs-nav-link-padding-y:.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-navbar-color);--bs-nav-link-hover-color:var(--bs-navbar-hover-color);--bs-nav-link-disabled-color:var(--bs-navbar-disabled-color);display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);font-size:var(--bs-navbar-toggler-font-size);line-height:1;color:var(--bs-navbar-color);background-color:transparent;border:var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);border-radius:var(--bs-navbar-toggler-border-radius);transition:var(--bs-navbar-toggler-transition)}@media (prefers-reduced-motion:reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 var(--bs-navbar-toggler-focus-width)}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-image:var(--bs-navbar-toggler-icon-bg);background-repeat:no-repeat;background-position:center;background-size:100%}@media (min-width:992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.d-flex{display:flex!important}.border{border:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-dark{--bs-border-opacity:1;border-color:rgba(var(--bs-dark-rgb),var(--bs-border-opacity))!important}.w-25{width:25%!important}.flex-column{flex-direction:column!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.mb-2{margin-bottom:.5rem!important}.ms-auto{margin-left:auto!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-5{padding-top:3rem!important}.gap-2{gap:.5rem!important}.text-center{text-align:center!important}.text-white{--bs-text-opacity:1;color:rgba(var(--bs-white-rgb),var(--bs-text-opacity))!important}.rounded-circle{border-radius:50%!important}@media (min-width:992px){.mb-lg-0{margin-bottom:0!important}}.fa{font-family:var(--fa-style-family,"Font Awesome 6 Free");font-weight:var(--fa-style,900)}.fa,.fa-brands{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:var(--fa-display,inline-block);font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.fa-brands:before,.fa:before{content:var(--fa)}.fa-brands{font-family:"Font Awesome 6 Brands"}.fa-star{--fa:"\\f005"}.fa-earth{--fa:"\\f57d"}:root{--fa-style-family-brands:"Font Awesome 6 Brands";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}@font-face{font-family:"Font Awesome 6 Brands";font-style:normal;font-weight:400;font-display:block;src:url("./media/fa-brands-400-Q3XCMWHQ.woff2") format("woff2"),url("./media/fa-brands-400-R2XQZCET.ttf") format("truetype")}.fa-brands{font-weight:400}.fa-linkedin-in{--fa:"\\f0e1"}.fa-facebook{--fa:"\\f09a"}.fa-twitter{--fa:"\\f099"}:root{--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:400;font-display:block;src:url("./media/fa-regular-400-QSNYFYRT.woff2") format("woff2"),url("./media/fa-regular-400-XUOPSR7E.ttf") format("truetype")}:root{--fa-style-family-classic:"Font Awesome 6 Free";--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:900;font-display:block;src:url("./media/fa-solid-900-5ZUYHGA7.woff2") format("woff2"),url("./media/fa-solid-900-PJNKLK6W.ttf") format("truetype")}
</style><link rel="stylesheet" href="styles-J7BN47AV.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-J7BN47AV.css"></noscript><style ng-app-id="ng">.navbar[_ngcontent-ng-c1979425744]{background-color:#2c3e50}.navbar[_ngcontent-ng-c1979425744]   a[_ngcontent-ng-c1979425744]{font-size:32px;font-weight:700}.navbar[_ngcontent-ng-c1979425744]   li[_ngcontent-ng-c1979425744]   a[_ngcontent-ng-c1979425744]{font-size:16px;font-weight:700}.navbar[_ngcontent-ng-c1979425744]   .nav-link.active[_ngcontent-ng-c1979425744]{background-color:#1abc9c!important;border-radius:5px;padding:5px 15px}@media screen and (max-width: 995px){.navbar[_ngcontent-ng-c1979425744]   .nav-link.active[_ngcontent-ng-c1979425744]{width:15%}}</style><style ng-app-id="ng">footer[_ngcontent-ng-c973405011]{background-color:#2c3e50;color:#fff}.copyright[_ngcontent-ng-c973405011]{background-color:#1a252f}</style><style ng-app-id="ng">.home[_ngcontent-ng-c3154257756]{background-color:#1abc9c}.line-with-star[_ngcontent-ng-c3154257756]{display:flex;align-items:center;justify-content:center;margin:10px 0}.line[_ngcontent-ng-c3154257756]{display:block;height:2px;width:50px;background-color:#fff;margin:0 10px}.line-with-star[_ngcontent-ng-c3154257756]   i[_ngcontent-ng-c3154257756]{font-size:16px;color:#fff}.modal[_ngcontent-ng-c3154257756]{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000c;justify-content:center;align-items:center;z-index:1000}.modal.active[_ngcontent-ng-c3154257756]{display:flex}.modal-content[_ngcontent-ng-c3154257756]   img[_ngcontent-ng-c3154257756]{max-width:80%;max-height:80%;border-radius:8px;box-shadow:0 0 15px #ffffff80;cursor:pointer}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],[]);</script>
  <app-root ng-version="19.0.5" ngh="1" ng-server-context="ssg"><app-navbar _nghost-ng-c1979425744 ngh="0"><nav _ngcontent-ng-c1979425744 class="navbar navbar-expand-lg sticky-top"><div _ngcontent-ng-c1979425744 class="container justify-content-between py-4"><a _ngcontent-ng-c1979425744 href="/start-framework/home" routerlink="home" class="navbar-brand text-white" jsaction="click:;">Start FrameWork</a><button _ngcontent-ng-c1979425744 type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span _ngcontent-ng-c1979425744 class="navbar-toggler-icon"></span></button><div _ngcontent-ng-c1979425744 id="navbarSupportedContent" class="collapse navbar-collapse"><ul _ngcontent-ng-c1979425744 class="navbar-nav ms-auto mb-2 mb-lg-0"><li _ngcontent-ng-c1979425744 class="nav-item"><a _ngcontent-ng-c1979425744 href="/start-framework/about" routerlink="about" routerlinkactive="active" class="nav-link text-white" jsaction="click:;">About</a></li><li _ngcontent-ng-c1979425744 class="nav-item"><a _ngcontent-ng-c1979425744 href="/start-framework/protfolio" routerlink="protfolio" routerlinkactive="active" class="nav-link text-white" jsaction="click:;">Portfolio</a></li><li _ngcontent-ng-c1979425744 class="nav-item"><a _ngcontent-ng-c1979425744 href="/start-framework/contact" routerlink="contact" routerlinkactive="active" class="nav-link text-white" jsaction="click:;">Contact</a></li></ul></div></div></nav></app-navbar><router-outlet></router-outlet><app-home _nghost-ng-c3154257756 ngh="0"><div _ngcontent-ng-c3154257756 class="home d-flex flex-column justify-content-center text-center py-5 text-white"><div _ngcontent-ng-c3154257756 class="container"><img _ngcontent-ng-c3154257756 src="avataaars.svg" alt class="w-25 py-4"><h2 _ngcontent-ng-c3154257756>start Framework</h2><div _ngcontent-ng-c3154257756 class="line-with-star"><span _ngcontent-ng-c3154257756 class="line"></span><i _ngcontent-ng-c3154257756 class="fa fa-star"></i><span _ngcontent-ng-c3154257756 class="line"></span></div><span _ngcontent-ng-c3154257756>Graphic Artist - Web Designer - Illustrator</span></div></div></app-home><!----><app-footer _nghost-ng-c973405011 ngh="0"><footer _ngcontent-ng-c973405011 class="pt-5"><div _ngcontent-ng-c973405011 class="container"><div _ngcontent-ng-c973405011 class="row py-5"><div _ngcontent-ng-c973405011 class="col-4 flex-column"><h3 _ngcontent-ng-c973405011>Location</h3><p _ngcontent-ng-c973405011>2215 John Daniel Drive</p><p _ngcontent-ng-c973405011>Clark, MO 65243</p></div><div _ngcontent-ng-c973405011 class="col-4 flex-column"><h3 _ngcontent-ng-c973405011>AROUND THE WEB</h3><div _ngcontent-ng-c973405011 class="social d-flex gap-2"><i _ngcontent-ng-c973405011 class="fa-brands fa-facebook border border-dark rounded-circle d-flex justify-content-center align-items-center"></i><i _ngcontent-ng-c973405011 class="fa-brands fa-twitter border border-dark rounded-circle d-flex justify-content-center align-items-center"></i><i _ngcontent-ng-c973405011 class="fa-brands fa-linkedin-in border border-dark rounded-circle d-flex justify-content-center align-items-center"></i><i _ngcontent-ng-c973405011 class="fa fa-earth border border-dark rounded-circle d-flex justify-content-center align-items-center"></i></div></div><div _ngcontent-ng-c973405011 class="col-4 flex-column"><h3 _ngcontent-ng-c973405011>ABOUT FREELANCER</h3><p _ngcontent-ng-c973405011>Freelance is a free to use, licensed Bootstrap theme created by Route</p></div></div></div><div _ngcontent-ng-c973405011 class="text-center py-2 copyright"><p _ngcontent-ng-c973405011>Copyright © Your Website 2021</p></div></footer></app-footer></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="scripts-F6E5RSTU.js" defer></script><script src="main-VFOQRJQC.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{},{"c":{"1":[{"i":"c3154257756","r":1}]}}]}</script></body></html>`;