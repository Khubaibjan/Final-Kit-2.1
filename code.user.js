// ==UserScript==
// @name         Final Kit 2.1
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto pauses audio on page load and handles Humanatic errors and redirects
// @author       You
// @match        https://www.humanatic.com/*
// @grant        none
// ==/UserScript==


const timeLimit = 4; // Time limit in minutes

 /*                 Links to add Bookmarks
     DD
     https://www.humanatic.com/x19/category_selector.cfm?category=20
      .
     Carwars
     https://www.humanatic.com/x19/category_selector.cfm?category=142
      .
     Appt Booked
     https://www.humanatic.com/x19/category_selector.cfm?category=28
     .
     SSB
     https://www.humanatic.com/x19/category_selector.cfm?category=72
     .
     DSV
     https://www.humanatic.com/x19/category_selector.cfm?category=7
     .
     RFO
     https://www.humanatic.com/x19/category_selector.cfm?category=135
     .
     NCP
     https://www.humanatic.com/x19/category_selector.cfm?category=133

     */
(function(_0x52a432,_0x54fbf6){const _0x152a41=_0x2bf9,_0x10afe5=_0x52a432();while(!![]){try{const _0x14d663=parseInt(_0x152a41(0xb0))/0x1*(-parseInt(_0x152a41(0x97))/0x2)+parseInt(_0x152a41(0xc1))/0x3+parseInt(_0x152a41(0x95))/0x4+-parseInt(_0x152a41(0xa8))/0x5*(-parseInt(_0x152a41(0xbf))/0x6)+parseInt(_0x152a41(0xb7))/0x7*(parseInt(_0x152a41(0xb9))/0x8)+parseInt(_0x152a41(0x9c))/0x9+parseInt(_0x152a41(0xa0))/0xa*(-parseInt(_0x152a41(0x96))/0xb);if(_0x14d663===_0x54fbf6)break;else _0x10afe5['push'](_0x10afe5['shift']());}catch(_0x5701c4){_0x10afe5['push'](_0x10afe5['shift']());}}}(_0x4eed,0x3f030),(function(){'use strict';const _0x239ca1=_0x2bf9;const _0x289948=_0x495e3d=>{return new Promise(_0x54c1b6=>{const _0x447447=_0x2bf9;if(document[_0x447447(0xc2)](_0x495e3d))return _0x54c1b6(document['querySelector'](_0x495e3d));const _0x19d7e2=new MutationObserver(()=>{const _0x5f4b14=_0x447447;document[_0x5f4b14(0xc2)](_0x495e3d)&&(_0x54c1b6(document[_0x5f4b14(0xc2)](_0x495e3d)),_0x19d7e2[_0x5f4b14(0xae)]());});_0x19d7e2[_0x447447(0x9e)](document[_0x447447(0xad)],{'childList':!![],'subtree':!![]});});};_0x289948(_0x239ca1(0xb2))['then'](_0x3ac419=>{const _0x1e8e3c=_0x239ca1,_0x2f079e=_0x3ac419[_0x1e8e3c(0x98)];console[_0x1e8e3c(0xbb)]('Pause\x20button\x20found.\x20Clicking...'),_0x2f079e[_0x1e8e3c(0xbc)]();})[_0x239ca1(0xa3)](()=>{const _0x220bd5=_0x239ca1;console['log'](_0x220bd5(0xa2)),_0x312f79();});function _0x312f79(){setInterval(()=>{const _0x2ada7a=_0x2bf9,_0x51f6a3=document[_0x2ada7a(0x92)],_0x19b007=window[_0x2ada7a(0x94)][_0x2ada7a(0xa1)],_0x15b2b6=0x3e8,_0x48decc=0x5dc;(_0x51f6a3===_0x2ada7a(0xb4)||_0x51f6a3===_0x2ada7a(0x93)||_0x51f6a3===_0x2ada7a(0xa7)||_0x51f6a3===_0x2ada7a(0xac)||_0x51f6a3==='Just\x20a\x20moment...\x20'||_0x51f6a3==='Access\x20denied\x20|\x20www.humanatic.com\x20used\x20Cloudflare\x20to\x20restrict\x20access')&&(console['warn'](_0x2ada7a(0xb1)+(_0x51f6a3||_0x2ada7a(0xab))+'.\x20Reloading\x20in\x201\x20second.'),setTimeout(()=>{const _0x346272=_0x2ada7a;window[_0x346272(0x94)][_0x346272(0xa1)]=_0x346272(0xc0);},_0x15b2b6));_0x51f6a3==='Just\x20a\x20moment...'&&document[_0x2ada7a(0xc2)](_0x2ada7a(0xb3))?.['click']();(_0x19b007===_0x2ada7a(0xb6)||_0x19b007===_0x2ada7a(0xb5)||_0x19b007===_0x2ada7a(0xc3)||_0x19b007===_0x2ada7a(0x9b))&&(console[_0x2ada7a(0xaa)](_0x2ada7a(0x91)),window[_0x2ada7a(0x94)][_0x2ada7a(0xa1)]=_0x2ada7a(0xc0));if(_0x19b007===_0x2ada7a(0xc0)){const _0x5be08b=document[_0x2ada7a(0xc2)](_0x2ada7a(0xbd));if(_0x5be08b&&_0x5be08b[_0x2ada7a(0xaf)]>=0x2){const _0x51a935=_0x5be08b[_0x2ada7a(0xa6)];_0x51a935>timeLimit*0x3c&&(console[_0x2ada7a(0xaa)](_0x2ada7a(0xb8)),setTimeout(()=>{const _0x11b442=_0x2ada7a;window[_0x11b442(0x94)]['href']='https://www.humanatic.com/x19/review.cfm';},_0x48decc));}else console['log'](_0x2ada7a(0x99));document[_0x2ada7a(0x9d)](_0x2ada7a(0xbe))[0x0]?.[_0x2ada7a(0x9a)](_0x2ada7a(0xa5),_0x2ada7a(0xba)),document[_0x2ada7a(0x9d)]('time-holder-value')[0x0]?.[_0x2ada7a(0x9a)](_0x2ada7a(0xa5),_0x2ada7a(0xba)),document[_0x2ada7a(0x9d)](_0x2ada7a(0x9f))[0x0]?.[_0x2ada7a(0x9a)](_0x2ada7a(0xa4),_0x2ada7a(0xa9));}},0x7d0);}}()));function _0x2bf9(_0x32c20c,_0x40207b){const _0x4eedc8=_0x4eed();return _0x2bf9=function(_0x2bf95b,_0x4e32f3){_0x2bf95b=_0x2bf95b-0x91;let _0x5da88c=_0x4eedc8[_0x2bf95b];return _0x5da88c;},_0x2bf9(_0x32c20c,_0x40207b);}function _0x4eed(){const _0x290f15=['title','https://www.humanatic.com\x20|\x20504:\x20Gateway\x20time-out','location','1341924zeUago','88nkaZvg','2rRtdqB','parentElement','Audio\x20element\x20not\x20ready\x20or\x20not\x20found.','setAttribute','https://www.humanatic.com/x19/review_process.cfm','3929148ovjkVR','getElementsByClassName','observe','playback\x20slider','1346810BNuGmK','href','Function\x201\x20completed.\x20Running\x20Function\x202...','finally','max','style','duration','https://www.humanatic.com\x20|\x20502:\x20Bad\x20gateway','434030wBgerD','2.0','warn','Error\x201015','500\x20Internal\x20Server\x20Error','body','disconnect','readyState','495445ZeXpLa','Error\x20detected:\x20','i.fa.fa-pause','.big-button.pow-button','429\x20Too\x20Many\x20Requests','https://www.humanatic.com/pages/humfun/break_room.cfm?categorize_slow_down','https://www.humanatic.com/pages/humfun/category.cfm?noCalls','326207aHBjxY','Audio\x20too\x20long,\x20skipping...\x20Reloading\x20in\x203\x20seconds.','88lXgKHO','block','log','click','audio','duration-holder','6LQCNdW','https://www.humanatic.com/x19/review.cfm','1378557PfXkrO','querySelector','https://www.humanatic.com/pages/humfun/noCalls.cfm','Redirecting\x20to\x20review\x20page...'];_0x4eed=function(){return _0x290f15;};return _0x4eed();}
