(this["webpackJsonphk-checklist"]=this["webpackJsonphk-checklist"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),i=a.n(o),s=(a(14),a(15),a(2)),c=a(3),l=a(5),m=a(4),u=a(0),h=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={checked:!1},e.updatePercentage=function(t){for(var a=t.target,n="tr"===a.tagName.toLowerCase()?a:a.parentElement,r=!e.state.checked,o=parseInt(n.getAttribute("data-percent"),10),i=n.children,s=0;s<i.length;s++)r?i[s].classList.add("checked"):i[s].classList.remove("checked");var c=document.getElementById("total-percent"),l=parseInt(c.getAttribute("data-percent"),10);if(isNaN(o)){var m=e.props.section;if("masks"===m){var u=parseInt(c.getAttribute("data-masks"),10);u+=r?1:-1,c.setAttribute("data-masks",u);var h=c.getAttribute("data-mask-percent"),g=Math.floor(u/4);g>h?(l+=1,c.setAttribute("data-mask-percent",g)):g<h&&(l-=1,c.setAttribute("data-mask-percent",g))}else if("soul vessels"===m){var p=parseInt(c.getAttribute("data-soul"),10);p+=r?1:-1,c.setAttribute("data-soul",p);var d=c.getAttribute("data-soul-percent"),f=Math.floor(p/3);f>d?(l+=1,c.setAttribute("data-soul-percent",f)):f<d&&(l-=1,c.setAttribute("data-soul-percent",f))}else if("charm notches"===m){var y=document.getElementById("total-notches"),b=parseInt(y.getAttribute("data-notches"),10);b+=r?1:-1,y.setAttribute("data-notches",b),y.textContent="Charm Notches: "+b,11===b?y.classList.add("complete"):y.classList.remove("complete")}}else l+=r?o:-1*o;c.setAttribute("data-percent",l),c.textContent="Completion: "+l+"%",112===l?c.classList.add("complete"):c.classList.remove("complete"),e.setState({checked:r});var C={};C[e.props.id]=r,e.props.onChange(C)},e}return Object(c.a)(a,[{key:"render",value:function(){for(var e=this.props.details,t=this.props.headings,a=[],n=0;n<t.length;n++){var r=e[t[n]];a.push(Object(u.jsx)("td",{children:r},"detail_"+r+n))}return Object(u.jsx)("tr",{id:this.props.id,"data-percent":e.percentage,onClick:this.updatePercentage,children:a})}}]),a}(r.a.Component),g=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){for(var e=this.props.headings,t=[],a=0;a<e.length;a++)t.push(Object(u.jsx)("th",{children:e[a]},"header_"+e[a].toLowerCase().replace(" ","")));return Object(u.jsx)("thead",{children:Object(u.jsx)("tr",{children:t})})}}]),a}(r.a.Component),p=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={click:!0,checked:{}},e.handleChange=function(t){var a=Object.keys(t),n=e.state.checked;n[a]=t[a],e.setState({checked:n})},e.convertToTitleCase=function(e){return e=e.split("_").map((function(e){return e[0].toUpperCase()+e.substr(1).toLowerCase()})).join(" ")},e.selectAll=function(t){for(var a=e.props.name.toLowerCase().replace(" ",""),n=document.getElementById("tbody_"+a).children,r=e.state.click,o=0;o<n.length;o++){var i=n[o],s=i.getAttribute("id"),c=e.state.checked[s];r?c||i.click():c&&i.click(),e.setState({click:!e.state.click})}},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){var e={};e[this.props.name.toLowerCase().replace(" ","")]=this.state.checked,this.props.updateState(e)}},{key:"componentDidMount",value:function(){for(var e=this.props.items.length,t=0;t<e;t++){var a=this.state.checked,n=this.props.name.toLowerCase().replace(" ","")+t;void 0!==this.props.states?a[n]=this.props.states[n]:a[n]=!1;var r=document.getElementById(n);a[n]&&r.click(),this.setState({checked:a})}}},{key:"render",value:function(){for(var e=[],t=[],a=[],n=this.props.items,r=0;r<n.length;r++){for(var o=Object.keys(n[r]),i=0;i<o.length;i++){var s=this.convertToTitleCase(o[i]);t.includes(s)||"Percentage"===s||(t.push(s),a.push(o[i]))}var c=this.props.name.toLowerCase();e.push(Object(u.jsx)(h,{id:c.replace(" ","")+r,details:n[r],headings:a,section:c,onChange:this.handleChange},c.replace(" ","")+r))}return Object(u.jsxs)("div",{children:[Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)("h1",{className:"section-header",onClick:this.selectAll,"data-click-dir":"click",children:this.props.name})}),Object(u.jsx)("div",{className:"section",children:Object(u.jsxs)("table",{children:[Object(u.jsx)(g,{headings:t},"table_"+this.props.name.toLowerCase().replace(" ","")),Object(u.jsx)("tbody",{id:"tbody_"+this.props.name.toLowerCase().replace(" ",""),children:e})]})})]})}}]),a}(r.a.Component),d=a(6),f=a(9),y=a.n(f);var b=function(){function e(e){var a=Object.keys(e);t[a]=e[a],function(e,t,a){var n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3);var r="expires="+n.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"}("checklist",JSON.stringify(t),10)}var t={},a=function(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var r=a[n];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""}("checklist");""!==a&&(t=JSON.parse(a));for(var n=[],r=0;r<d.length;r++){var o=d[r].section.toLocaleLowerCase().replace(" ","");n.push(Object(u.jsx)(p,{name:d[r].section,items:d[r].items,updateState:e,states:t[o]},"section"+r))}return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)("h1",{children:"Hollow Knight Checklist"})}),Object(u.jsx)("div",{className:"App-body",children:n}),Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)("div",{id:"total-percent","data-percent":"0","data-masks":"0","data-mask-percent":"0","data-soul":"0","data-soul-percent":"0",style:{paddingInlineStart:"15px",paddingInlineEnd:"15px"},children:"Completion: 0%"}),Object(u.jsx)("div",{id:"total-notches","data-notches":"3",style:{paddingInlineStart:"40px",paddingInlineEnd:"40px"},children:"Charm Notches: 3"})]}),Object(u.jsx)(y.a,{children:"This app uses cookies for saving your choices. No other information is collected from you."})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),o(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),C()},6:function(e){e.exports=JSON.parse('[{"section":"Charms","items":[{"name":"Wayward Compass","location":"Buy from Iselda (Dirtmouth)","requirements":"220 Geo","percentage":"1"},{"name":"Gathering Swarm","location":"Buy from Sly (Dirtmouth)","requirements":"300 Geo","percentage":"1"},{"name":"Stalwart Shell","location":"Buy from Sly (Dirtmouth)","requirements":"200 Geo","percentage":"1"},{"name":"Soul Catcher","location":"Ancestral Mound (Forgotten Crossroads)","requirements":"Defeat Elder Baulder","percentage":"1"},{"name":"Shaman Stone","location":"Buy from Salubra (Forgotten Crossroads)","requirements":"220 Geo","percentage":"1"},{"name":"Soul Eater","location":"Far-right end of crypt in Resting Grounds","requirements":"Desolate Dive","percentage":"1"},{"name":"Dashmaster","location":"Bottom-right area of Fungal Wastes","percentage":"1"},{"name":"Sprintmaster","location":"Buy from Sly (Dirtmouth)","requirements":"400 Geo and find Shopkeeper\'s Key","percentage":"1"},{"name":"Grubsong","location":"Given by Grubfather (Forgotten Crossroads)","requirements":"Rescue 10 Grubs","percentage":"1"},{"name":"Grubberfly\'s Elegy","location":"Given by Grubfather (Forgotten Crossroads)","requirements":"Rescue all 46 Grubs","percentage":"1"},{"name":"Fragile Heart","location":"Buy from Leg Eater (Fungal Wastes)","requirements":"350 Geo (280 Geo with Defender\'s Crest equipped)","percentage":"1","alt_name":"Unbreakable Heart","alt_location":"Buy from Divine (Grimm Troupe Tent in Dirtmouth)","alt_requirements":"Give Fragile Heart to Divine and buy back for 12000 Geo"},{"name":"Fragile Greed","location":"Buy from Leg Eater (Fungal Wastes)","requirements":"250 Geo (200 Geo with Defender\'s Crest equipped)","percentage":"1","alt_name":"Unbreakable Greed","alt_location":"Buy from Divine (Grimm Troupe Tent in Dirtmouth)","alt_requirements":"Give Fragile Greed to Divine and buy back for 9000 Geo"},{"name":"Fragile Strength","location":"Buy from Leg Eater (Fungal Wastes)","requirements":"600 Geo (480 Geo with Defender\'s Crest equipped)","percentage":"1","alt_name":"Unbreakable Strength","alt_location":"Buy from Divine (Grimm Troupe Tent in Dirtmouth)","alt_requirements":"Give Fragile Strength to Divine and buy back for 15000 Geo"},{"name":"Spell Twister","location":"Top-most room of Soul Sanctum (City of Tears)","requirements":"Break ceiling just outside Soul Master\'s room","percentage":"1"},{"name":"Steady Body","location":"Buy from Salubra (Forgotten Crossroads)","requirements":"120 Geo","percentage":"1"},{"name":"Heavy Blow","location":"Buy from Sly (Dirtmouth)","requirements":"350 Geo and find Shopkeeper\'s Key","percentage":"1"},{"name":"Quick Slash","location":"Bottom-right room in Kingdom\'s Edge","requirements":"Desolate Dive","percentage":"1"},{"name":"Longnail","location":"Buy from Salubra (Forgotten Crossroads)","requirements":"300 Geo","percentage":"1"},{"name":"Mark of Pride","location":"Right-side room in Mantis Village (Fungal Wastes)","requirements":"Defeat Mantis Lords","percentage":"1"},{"name":"Fury of the Fallen","location":"King\'s Pass","requirements":"Pogo off spikes or come back after getting Mothwing Cloak and Mantis Claw","percentage":"1"},{"name":"Thorns of Agony","location":"Greenpath","requirements":"Mothwing Cloak","percentage":"1"},{"name":"Baldur Shell","location":"Greenpath","requirements":"Obtain Mothwing Cloak and defeat 2 Elder Baldurs","percentage":"1"},{"name":"Flukenest","location":"Royal Waterways","requirements":"Obtain Desolate Dive and Defeat Flukemarm","percentage":"1"},{"name":"Defender\'s Crest","location":"Royal Waterways","requirements":"Defeat Dung Defender","percentage":"1"},{"name":"Glowing Womb","location":"Hidden room in ceiling outside of False Knight\'s room","requirements":"Crystal Heart","percentage":"1"},{"name":"Quick Focus","location":"Buy from Salubra (Forgotten Crossroads)","requirements":"800 Geo","percentage":"1"},{"name":"Deep Focus","location":"Breakable wall below tunnel to Dirtmouth in Crystal Peak","requirements":"Crystal Heart","percentage":"1"},{"name":"Lifeblood Heart","location":"Buy from Salubra (Forgotten Crossroads)","requirements":"250 Geo","percentage":"1"},{"name":"Lifeblood Core","location":"Behind door in The Abyss","requirements":"Have 15 Lifeblood Masks","percentage":"1"},{"name":"Joni\'s Blessing","location":"Joni\'s Repose (Howling Cliffs)","requirements":"Lumafly Lantern","percentage":"1"},{"name":"Hiveblood","location":"The Hive (Kingdom\'s Edge)","requirements":"Defeat Hive Knight","percentage":"1"},{"name":"Spore Shroom","location":"Bottom-right of room with Moss Prophet (Greenpath)","requirements":"Obtain Mantis Claw","percentage":"1"},{"name":"Sharp Shadow","location":"Room below the working Tramway in Deepnest","requirements":"Shade Cloak","percentage":"1"},{"name":"Shape of Unn","location":"Lake of Unn (Greenpath)","requirements":"Obtain Isma\'s Tear","percentage":"1"},{"name":"Nailmaster\'s Glory","location":"Basement of Sly\'s shop (Dirtmouth)","requirements":"Obtain all 3 Nail Arts","percentage":"1"},{"name":"Weaversong","location":"Behind a fake wall in Weaver\'s Den (Deepnest)","percentage":"1"},{"name":"Dream Wielder","location":"Given by the Seer (Resting Grounds)","requirements":"Collect 500 essence","percentage":"1"},{"name":"Dreamshield","location":"Behind a fake wall in Resting Grounds","percentage":"1"},{"name":"Grimmchild","location":"Given by Grimm in the Grimm Troupe Tent (Dirtmouth)","requirements":"Dream Nail and Mantis Claw","percentage":"1","alt_name":"Carefree Melody","alt_location":"Dirtmouth","alt_requirements":"Banish Grimm Troupe and talk to Nymm"},{"name":"Kingsoul","location":"Queens\' Gardens and White Palace","requirements":"Defeat Traitor Lord (one half); complete White Palace (one half - White Palace requires talking to Seer in Resting Grounds after collecting 1800 essence)","percentage":"1","alt_name":"Voidheart","alt_location":"Secret room at the bottom of The Abyss","alt_requirements":"Equip Kingsoul and obtain Desolate Dive"}],"description":"Charms for improving your abilities"},{"section":"Charm Notches","items":[{"location":"Buy from Salubra (Forgotten Crossroads)","requirements":"120 Geo and obtain 5 charms"},{"location":"Buy from Salubra (Forgotten Crossroads)","requirements":"500 Geo and obtain 10 charms"},{"location":"Buy from Salubra (Forgotten Crossroads)","requirements":"900 Geo and obtain 18 charms"},{"location":"Buy from Salubra (Forgotten Crossroads)","requirements":"1400 Geo and obtain 25 charms"},{"location":"Hidden area north-east of Cornifer in Fog Canyon","requirements":"Isma\'s Tear or Monarch Wings"},{"location":"Fungal Wastes","requirements":"Defeat 2 Shumal Ogres"},{"location":"Colosseum of Fools (Kingdom\'s Edge)","requirements":"Complete the Trial of the Warrior"},{"location":"Grimm Troupe tent (Dirtmouth)","requirements":"Defeat Grimm"}],"description":"Allows you to equip more charms."},{"section":"Bosses","items":[{"name":"False Knight","location":"Forgotten Crossroads","percentage":"1"},{"name":"Hornet","location":"Greenpath","percentage":"1"},{"name":"Brooding Mawlek","location":"Forgotten Crossroads","percentage":"1"},{"name":"Gruz Mother","location":"Forgotten Crossroads","percentage":"1"},{"name":"Mantis Lords","location":"Mantis Village (Fungal Wastes)","percentage":"1"},{"name":"Soul Master","location":"Soul Sanctum (City of Tears)","percentage":"1"},{"name":"Dung Defender","location":"Royal Waterways","percentage":"1"},{"name":"Broken Vessel","location":"Ancient Basin","requirements":"Crystal Heart","percentage":"1"},{"name":"Uumuu","location":"Teacher\'s Archive (Fog Canyon)","requirements":"Crystal Dash or Isma\'s Tear","percentage":"1"},{"name":"Watcher Knight","location":"Watcher\'s Spire (City of Tears)","requirements":"Monarch Wings","percentage":"1"},{"name":"Nosk","location":"Deepnest","percentage":"1"},{"name":"The Collector","location":"Tower of Love (City of Tears)","percentage":"1","requirements":"Obtain Love Key (found in Queen\'s Gardens)"},{"name":"Traitor Lord","location":"Queen\'s Gardens","requirements":"Shade Cloak","percentage":"1"},{"name":"Hornet","location":"Cast-Off Shell (Kingdom\'s Edge)","percentage":"1"},{"name":"Hive Knight","location":"The Hive (Kingdom\'s Edge)","percentage":"1"},{"name":"Grimm","location":"Grimm Troupe Tent (Dirtmouth)","percentage":"1"}],"description":"The various bosses found throughout Hallownest"},{"section":"Warrior Dreams","items":[{"name":"Xero","location":"Resting Grounds","percentage":"1","essence":"100"},{"name":"Elder Hu","location":"Fungal Wastes, north of the gate to City of Tears","percentage":"1","essence":"100"},{"name":"Gorb","location":"Howling Cliffs","percentage":"1","essence":"100"},{"name":"Marmu","location":"Queen\'s Gardens","percentage":"1","essence":"150"},{"name":"No Eyes","location":"Stone Sanctuary (Greenpath)","percentage":"1","essence":"200"},{"name":"Galien","location":"Deepnest","percentage":"1","essence":"200"},{"name":"Markoth","location":"Kingdom\'s Edge","requirements":"Shade Cloak","percentage":"1","essence":"250"},{"name":"Nightmare King Grimm","location":"Grimm Troupe Tent (Dirtmouth)","requirements":"Complete the ritual and have the Grimmchild charm equipped","percentage":"1","alternative":"Can be skipped by banishing the Grimm Troupe instead"}],"description":"Wandering warriors whose spirits still linger"},{"section":"Equipment","items":[{"name":"Mothwing Cloak","location":"Greenpath","requirements":"Defeat Hornet","percentage":"2"},{"name":"Mantis Claw","location":"Mantis Village (Fungal Wastes)","percentage":"2"},{"name":"Crystal Heart","location":"Crystal Peak","percentage":"2"},{"name":"Monarch Wings","location":"Ancient Basin","requirements":"Obtain Crystal Heart and defeat Broken Vessel","percentage":"2"},{"name":"Isma\'s Tear","location":"Isma\'s Grove (Royal Waterways)","requirements":"Obtain Crystal Heart and defeat Dung Defender","percentage":"2"},{"name":"Shade Cloak","location":"Farthest east room in The Abyss","requirements":"Obtain King\'s Brand to unlock access to The Abyss","percentage":"2"},{"name":"King\'s Brand","location":"Cast-Off Shell (Kingdom\'s Edge)","requirements":"Obtain Monarch Wings and defeat Hornet","percentage":"2"},{"name":"Godtuner","location":"Junk Pit (Royal Waterways)","requirements":"Use a Simple Key on the Godseeker\'s coffin","percentage":"1"}],"description":"The various upgrades to your movement abilities"},{"section":"Spells","items":[{"name":"Vegeful Spirit","location":"Given by Snail Shaman in Ancestral Mound (Forgotten Crossroads)","requirements":"Defeat False Knight","percentage":"1"},{"name":"Desolate Dive","location":"Soul Sanctum","requirements":"Defeat Soul Master","percentage":"1"},{"name":"Howling Wraiths","location":"Overgrown Mound (Fog Canyon)","percentage":"1"},{"name":"Shade Soul","location":"Soul Sanctum (City of Tears)","requirements":"Obtain Vegeful Spirit and buy Elegant Key from Sly in Dirtmouth","percentage":"1"},{"name":"Descending Dark","location":"Crystallised Mound (Crystal Peak)","requirements":"Obtain Desolate Dive","percentage":"1"},{"name":"Abyss Shriek","location":"South-western most room in The Abyss","requirements":"Use Howling Wraiths on the pedestal","percentage":"1"}],"description":"Alternate ways of taking down foes. Uses soul."},{"section":"Masks","items":[{"location":"Buy from Sly (Dirtmouth)","requirements":"150 Geo","percentage":".25"},{"location":"Buy from Sly (Dirtmouth)","requirements":"500 Geo","percentage":".25"},{"location":"Buy from Sly (Dirtmouth)","requirements":"800 Geo and find Shopkeeper\'s Key","percentage":".25"},{"location":"Buy from Sly (Dirtmouth)","requirements":"1500 Geo and find Shopkeeper\'s Key","percentage":".25"},{"location":"West of Ancestral Mound in Forgotten Crossroads","requirements":"Defeat Brooding Mawlek","percentage":".25"},{"location":"Given by Grubfather (Forgotten Crossroads)","requirements":"Rescue 5 grubs","percentage":".25"},{"location":"South of Hot Springs in Forgotten Crossroads","percentage":".25"},{"location":"Queen\'s Station (Fungal Wastes)","requirements":"Mantis Claw","percentage":".25"},{"location":"Bretta\'s House (Dirtmouth)","requirements":"Rescue Bretta in Fungal Wastes","percentage":".25"},{"location":"To the right of No Eyes\' room in Stone Sanctuary (Greenpath)","percentage":".25"},{"location":"North-West section of Royal Waterways beneath main path","percentage":".25"},{"location":"Drop through Fungal Core into Deepnest","requirements":"Monarch Wings","percentage":".25"},{"location":"Defeat Enraged Guardian (Crystal Peak)","requirements":"Monarch Wings","percentage":".25"},{"location":"The Hive (Kingdom\'s Edge)","requirements":"Make a Hive Guardian break the wall","percentage":".25"},{"location":"Given by the Seer (Resting Grounds)","requirements":"Collect 1500 essence","percentage":".25"},{"location":"Given by Grey Mourner (Resting Grounds)","requirements":"Deliver Delicate Flower to the grave of the Traitor Child (Queens\' Path)","percentage":".25"}],"description":"Increases the number of masks you have. 4 shards = 1 mask"},{"section":"Soul Vessels","items":[{"location":"Buy from Sly (Dirtmouth)","requirements":"550 Geo","percentage":".33"},{"location":"Buy from Sly (Dirtmouth)","requirements":"900 Geo and find Shopkeeper\'s Key","percentage":".33"},{"location":"Southern-most room in Greenpath near the entrance to Queen\'s Gardens","percentage":".33"},{"location":"Left of the lift in Forgotten Crossroads","requirements":"Unlocking the lift in City of Tears","percentage":".33"},{"location":"Room next to the lift above King\'s Station (City of Tears)","percentage":".33"},{"location":"Room north of the working tram in Deepnest","percentage":".33"},{"location":"Stag Nest","requirements":"Open all Stag Stations","percentage":".33"},{"location":"Given by the Seer (Resting Grounds)","requirements":"Collect 700 essence","percentage":".33"},{"location":"Geo fountain in Ancient Basin","requirements":"3000 Geo","percentage":".33"}],"description":"Increases the amount of Soul you have access to. 3 fragments = 1 vessel"},{"section":"Dream Nail","items":[{"name":"Acquire Dream Nail","location":"Resting Grounds","requirements":"Examine Dreamer statue","percentage":"1"},{"name":"Awaken Dream Nail","location":"Resting Grounds","requirements":"1800 essence","percentage":"1"},{"name":"Hear the Seer\'s final words","location":"Resting Grounds","requirements":"2400 essence","percentage":"1"}],"description":"Allows you to peer into the minds of others"},{"section":"Nail Upgrades","items":[{"name":"Sharpened Nail","location":"Nailsmith (City of Tears)","requirements":"250 Geo","percentage":"1"},{"name":"Channeled Nail","location":"Nailsmith (City of Tears)","requirements":"800 Geo + 1 Pale Ore","percentage":"1"},{"name":"Coiled Nail","location":"Nailsmith (City of Tears)","requirements":"2000 Geo + 2 Pale Ore","percentage":"1"},{"name":"Pure Nail","location":"Nailsmith (City of Tears)","requirements":"4000 Geo + 3 Pale Ore","percentage":"1"}],"description":"Strengthens your nail"},{"section":"Pale Ore","items":[{"location":"Given by the Seer (Resting Grounds)","requirements":"Collect 300 essence"},{"location":"Hollownest\'s Crown (Crystal Peak)","requirements":"Obtain Monarch Wings, Mantis Claw, and Crystal Heart"},{"location":"Behind a breakable wall in the room to the west of the Hot Springs in Deepnest","requirements":"Defeat Nosk"},{"location":"Given by Grubfather","requirements":"Collect 31 Grubs"},{"location":"Colosseum of Fools (Kingdom\'s Edge)","requirements":"Complete the Trial of the Conqueror"},{"location":"West of the tram station in Ancient Basin","requirements":"Defeat two Lesser Mawleks"}],"description":"Used to strengthen your nail"},{"section":"Nail Arts","items":[{"name":"Great Slash","location":"Nail Master Sheo (Greenpath)","percentage":"1"},{"name":"Dash Slash","location":"Nail Master Oro (Kingdom\'s Edge)","requirements":"800 Geo","percentage":"1"},{"name":"Cyclone Slash","location":"Nail Master Mato (Howling Cliffs)","percentage":"1"}],"description":"Stronger nail attacks"},{"section":"Dreamers","items":[{"name":"Monomon the Teacher","location":"Teacher\'s Archives (Fog Canyon)","percentage":"1"},{"name":"Lurien the Watcher","location":"Watcher\'s Spire (City of Tears)","percentage":"1"},{"name":"Herrah the Beast","location":"Distant Village (Deepnest)","percentage":"1"}],"description":"The guardians of the seal on the Black Egg"},{"section":"Colosseum","items":[{"name":"Trial of the Warrior","location":"Kingdom\'s Edge","percentage":"1","reward":"1000 Geo and 1 Charm Notch"},{"name":"Trial of the Conqueror","location":"Kingdom\'s Edge","percentage":"1","reward":"2000 Geo and 1 Pale Ore"},{"name":"Trial of the Fool","location":"Kingdom\'s Edge","percentage":"1","reward":"3000 Geo"}],"description":"Colosseum where fools go to test their strength"},{"section":"Godhome","items":[{"name":"Pantheon of the Master","percentage":"1"},{"name":"Pantheon of the Artist","percentage":"1"},{"name":"Pantheon of the Sage","percentage":"1"},{"name":"Pantheon of the Knight","percentage":"1"}],"description":"Realm of the gods where bosses can be re-challenged"}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.0b74ae73.chunk.js.map