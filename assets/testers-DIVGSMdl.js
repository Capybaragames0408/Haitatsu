const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./supa-G-AC65te.js","./rules-BnH9XUnh.js","./state-CW6ENMxH.js","./rolldown-runtime-DK3Fl9T5.js","./profile-DVZE35zi.js","./supabaseProjects-yneler6a.js","./preload-helper-CaC3yEL3.js","./sbClient-BIPKzKXK.js","./flags-9q_0uEIo.js","./supabase-B5iYXkT9.js","./dist-DxukqvvO.js"])))=>i.map(i=>d[i]);
import{t as e}from"./state-CW6ENMxH.js";import{t}from"./preload-helper-CaC3yEL3.js";import{Bt as n,Vt as r,Wt as i,it as a,nt as o,tt as s,y as c}from"./profile-DVZE35zi.js";import{dt as l,ft as u,ht as d,mt as f}from"./renderScale-iaSl_MsM.js";import{t as ee}from"./refs-Bh9H2pZB.js";import{o as p,s as m}from"./account-BeebA71a.js";var h=`M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20a6 6 0 0 1 12 0M16 11a3 3 0 1 0 0-6M21 20a6 6 0 0 0-6-6`,g=`M9 9V7a3 3 0 0 1 6 0v2M8 13h8M8 17h8M12 9a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0v-2a5 5 0 0 1 5-5zM7 12l-3-1M17 12l3-1M7 16l-3 1M17 16l3 1`,_=`M6 6l12 12M18 6L6 18`,v=`M4 7h3l2-2h6l2 2h3v12H4zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z`,y=e=>`<svg class="ti" viewBox="0 0 24 24"><path d="${e}"/></svg>`,b=1e3,x=60,S=`haitatsu.bugCool.v1`,C=[[`bug`,`バグ報告`],[`idea`,`意見・要望`],[`other`,`その他`]],w={ok:`送りました。ありがとうございます`,fail:`送れませんでした。通信を確かめてもう一度お試しください`,too_soon:`少し時間をおいてから送ってください`,too_many:`今日はこれ以上送れません`,photo_many:`今日はこれ以上写真を送れません（写真を外すと送れます）`,photo_bad:`この写真は読み込めませんでした`},te=`
  #mapBug{position:absolute;right:calc(14*var(--u));top:calc(34*var(--u));z-index:1;}
  #scBug{z-index:44;justify-content:flex-start;padding:calc(14*var(--u)) calc(18*var(--u));box-sizing:border-box;overflow:hidden;}
  #scBug > :first-child{margin-top:0;} #scBug > :last-child{margin-bottom:0;}
  #scBug h1{margin:0;font-size:calc(17*var(--u));line-height:1.1;text-align:left;}
  #scBug h1 small{font-size:calc(8.5*var(--u));}
  #scBug .head{width:min(96vw,calc(800*var(--u)));display:flex;align-items:center;justify-content:space-between;}
  #scBug .head .x{width:calc(28*var(--u));height:calc(28*var(--u));border-radius:50%;border:1px solid var(--line2);display:flex;align-items:center;justify-content:center;color:var(--paper);box-sizing:border-box;}
  #scBug .types{width:min(96vw,calc(800*var(--u)));display:flex;gap:calc(6*var(--u));margin-top:calc(8*var(--u));}
  #scBug .types span{height:calc(24*var(--u));padding:0 calc(14*var(--u));border-radius:999px;border:1px solid var(--line2);display:flex;align-items:center;font-size:calc(11*var(--u));font-weight:700;opacity:.8;box-sizing:border-box;}
  #scBug .types span.on{background:var(--amber);border-color:var(--amber);color:#2a1b04;opacity:1;}
  #scBug .main{width:min(96vw,calc(800*var(--u)));display:flex;gap:calc(10*var(--u));margin-top:calc(8*var(--u));flex:1 1 auto;min-height:0;text-align:left;}
  #scBug .left{flex:1;min-width:0;display:flex;flex-direction:column;gap:calc(6*var(--u));}
  #scBug textarea{flex:1;min-height:calc(90*var(--u));resize:none;border-radius:calc(8*var(--u));border:1px solid var(--line2);background:rgba(255,255,255,.04);color:var(--paper);font:inherit;
    font-size:calc(12*var(--u));line-height:1.5;padding:calc(8*var(--u)) calc(10*var(--u));outline:none;box-sizing:border-box;margin:0;-webkit-user-select:text;user-select:text;}
  #scBug textarea:focus{border-color:var(--amber);}
  #scBug textarea::placeholder{color:rgba(232,228,217,.4);}
  #scBug .photo{height:calc(30*var(--u));border-radius:calc(6*var(--u));border:1px dashed var(--line2);display:flex;align-items:center;gap:calc(6*var(--u));padding:0 calc(10*var(--u));font-size:calc(10*var(--u));flex:none;box-sizing:border-box;color:var(--paper);}
  #scBug .photo.add{opacity:.75;cursor:pointer;} #scBug .photo.add small{opacity:.6;font-size:calc(9*var(--u));margin-left:auto;}
  #scBug .photo.work{opacity:.6;}
  #scBug .photo.has{border:1px solid var(--amber);background:rgba(255,182,72,.07);padding:0 calc(4*var(--u)) 0 calc(3*var(--u));}   /* 選んだ写真：アンバーの枠の見本＋大きさ＋× */
  #scBug .photo.has img{height:calc(24*var(--u));width:calc(36*var(--u));object-fit:cover;border-radius:calc(4*var(--u));border:1px solid var(--amber);box-sizing:border-box;display:block;}
  #scBug .photo.has span{font-weight:700;color:var(--amber);} #scBug .photo.has small{opacity:.65;font-variant-numeric:tabular-nums;}
  #scBug .photo.has .rm{margin-left:auto;width:calc(22*var(--u));height:calc(22*var(--u));border-radius:50%;border:1px solid var(--line2);display:flex;align-items:center;justify-content:center;color:var(--paper);box-sizing:border-box;}
  #scBug .photo .hide, #scBug .photo.hide{display:none;}
  #bugFile{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;}
  #scBug .right{flex:0 0 calc(176*var(--u));display:flex;flex-direction:column;gap:calc(6*var(--u));}
  #scBug .count{font-size:calc(10*var(--u));opacity:.7;text-align:right;font-variant-numeric:tabular-nums;} #scBug .count b{color:var(--paper);font-size:calc(12*var(--u));}
  #scBug .meta{font-size:calc(9.5*var(--u));line-height:1.5;opacity:.6;border-radius:calc(6*var(--u));border:1px solid var(--line);padding:calc(6*var(--u)) calc(8*var(--u));}
  #scBug .send{margin-top:auto;height:calc(38*var(--u));border-radius:calc(8*var(--u));background:var(--amber);color:#2a1b04;display:flex;align-items:center;justify-content:center;gap:calc(6*var(--u));
    font-weight:800;font-size:calc(13*var(--u));letter-spacing:.06em;box-sizing:border-box;flex:none;font-variant-numeric:tabular-nums;}
  #scBug .send.dis{background:transparent;border:1px solid var(--line2);color:var(--paper);opacity:.55;}
  #scBug .send.busy{background:rgba(255,182,72,.25);color:var(--amber);border:1px solid var(--amber);}
  #scBug .send .sp{width:calc(12*var(--u));height:calc(12*var(--u));border-radius:50%;border:2px solid currentColor;border-right-color:transparent;animation:bugsp 1s linear infinite;box-sizing:border-box;} @keyframes bugsp{to{transform:rotate(360deg)}}
  #scBug .status{min-height:calc(14*var(--u));font-size:calc(10*var(--u));font-weight:700;text-align:center;line-height:1.4;}
  #scBug .status.err{color:#ff8a5c;} #scBug .status.ok{color:#8fd694;}
  #scBug .tip{margin-top:calc(6*var(--u));font-size:calc(9*var(--u));opacity:.45;}
  /* キーボードが出た状態（visualViewport の高さ < 60%）：札を見える範囲に縮め、写真の余白・注記・下の注意を隠す。--u は 100vh 基準のまま */
  /* #120：島のある側だけ見ると札が片寄るので、幅（96vw）を「島の端＋隙間」が両側に入る幅まで狭める（真ん中のまま） */
  body.islandL #scBug .head,body.islandL #scBug .types,body.islandL #scBug .main{width:min(96vw, calc(100vw - 2 * max(0px, calc(env(safe-area-inset-left) - var(--islandCutL)))), calc(800*var(--u)))}
  body.islandR #scBug .head,body.islandR #scBug .types,body.islandR #scBug .main{width:min(96vw, calc(100vw - 2 * (max(0px, calc(env(safe-area-inset-right) - var(--islandCutR))) + 12*var(--u))), calc(800*var(--u)))}
  body.kb #scBug{top:var(--kbTop,0px);height:var(--kb,220px);bottom:auto;padding-top:calc(8*var(--u));padding-bottom:calc(8*var(--u));}
  body.kb #scBug .photo, body.kb #scBug .tip, body.kb #scBug .meta{display:none;}
  body.kb #scBug .types, body.kb #scBug .main{margin-top:calc(5*var(--u));}
  body.kb #scBug textarea{min-height:0;}
`,T=null,E=`garage`,D=`bug`,O=`idle`,k=0,A=0,j=!1,M=null,N=!1,P=e=>document.getElementById(e),F=()=>{let e=0;try{e=+localStorage.getItem(S)||0}catch(e){}return Math.max(0,Math.ceil((e-Date.now())/1e3))},I=()=>{try{localStorage.setItem(S,String(Date.now()+x*1e3))}catch(e){}};function L(e){let t=P(`bugStatus`);t.className=`status`+(e?e===`ok`?` ok`:` err`:``),t.textContent=e?w[e]:``}function R(){let e=P(`bugText`),t=P(`bugSend`);P(`bugLeft`).textContent=Math.max(0,b-e.value.length);let n=F();if(O===`sending`){t.className=`send busy`,t.innerHTML=`<span class="sp"></span>送信中…`;return}if(n>0){t.className=`send dis`,t.textContent=`あと ${n} 秒`;return}t.textContent=`送る`,t.className=`send`+(j||!e.value.trim()?` dis`:``)}var z=e=>e>=1e6?(e/1e6).toFixed(1)+`MB`:Math.round(e/1e3)+`KB`;function B(){M&&URL.revokeObjectURL(M.url),M=null,P(`bugFile`).value=``,V()}function V(){let e=P(`bugPhotoAdd`),t=P(`bugPhotoHas`);e.classList.toggle(`hide`,!!M),t.classList.toggle(`hide`,!M),e.classList.toggle(`work`,N),P(`bugPhotoAddLbl`).textContent=N?`写真を縮めています…`:`写真を添える`,M&&(P(`bugPhotoImg`).src=M.url,P(`bugPhotoSize`).textContent=`${M.w}×${M.h}・${z(M.bytes)}`)}async function H(){let e=P(`bugFile`).files&&P(`bugFile`).files[0];if(e&&O!==`sending`){N=!0,V();try{let t=await l(e);M&&URL.revokeObjectURL(M.url),M=t,L(null)}catch(e){L(`photo_bad`)}N=!1,P(`bugFile`).value=``,V(),R()}}function U(e){P(`scBug`).classList.contains(`hide`)&&(E=e,clearTimeout(k),O!==`sending`&&L(j?`too_many`:null),R(),r(`scBug`),i(`ok`),clearInterval(A),A=setInterval(()=>{O!==`sending`&&R()},500))}function W(e){if(!P(`scBug`).classList.contains(`hide`)){clearTimeout(k),clearInterval(A),P(`bugText`).blur(),n(`scBug`),document.body.classList.remove(`kb`);try{window.scrollTo(0,0)}catch(e){}e||i(`back`)}}async function G(){let e=P(`bugText`),t=e.value.trim();if(O===`sending`||N||j||F()>0||!t)return;O=`sending`,L(null),R();let n=`fail`,r=u(E);M&&(r.photo={w:M.w,h:M.h,bytes:M.bytes});try{n=await(await T()).sendFeedback({name:c.name||null,kind:D,body:t.slice(0,b),meta:r},M?M.blob:null)}catch(e){n=`fail`}O=`idle`,n===`ok`?(I(),e.value=``,B(),L(`ok`),i(`ok`),k=setTimeout(()=>W(!0),1800)):(n===`too_soon`&&I(),n===`too_many`&&(j=!0),L(n)),R()}function K(t){T=t;let n=document.createElement(`style`);n.textContent=te,document.head.appendChild(n);let r=document.createElement(`div`);r.className=`screen hide`,r.id=`scBug`,r.innerHTML=`<div class="head"><h1>バグを報告<small>FEEDBACK</small></h1><div class="backHint rt">画面の余白をタップで戻る</div></div>
    <div class="types" id="bugTypes">${C.map(([e,t])=>`<span data-k="${e}"${e===`bug`?` class="on"`:``}>${t}</span>`).join(``)}</div>
    <div class="main">
      <div class="left"><textarea id="bugText" maxlength="${b}" placeholder="何が・どこで・どうなったか。例：南の集落で不在票を出したあと、車に戻れなくなった" autocomplete="off" spellcheck="false"></textarea>
        <label class="photo add" id="bugPhotoAdd" for="bugFile">${y(v)}<span id="bugPhotoAddLbl">写真を添える</span><small>1 枚まで</small></label>
        <div class="photo has hide" id="bugPhotoHas"><img id="bugPhotoImg" alt=""><span>写真 1 枚</span><small id="bugPhotoSize"></small><div class="rm" id="bugPhotoRm">${y(_)}</div></div>
        <input type="file" id="bugFile" accept="image/*"></div>
      <div class="right"><div class="count">残り <b id="bugLeft">${b}</b> 文字</div>
        <div class="meta">送る内容に添えられる情報：直前のプレイの時刻・場所・難易度・端末。名前以外の個人情報は含みません。</div>
        <div class="status" id="bugStatus"></div>
        <div class="send dis" id="bugSend">送る</div></div>
    </div>
    <div class="tip">60 秒に 1 件・1 日 20 件まで。作者だけが読みます。</div>`,document.body.appendChild(r),o(r,()=>W(),{isMargin:s(r,[`head`,`main`]),busy:()=>O===`sending`});for(let e of r.querySelectorAll(`#bugTypes span`))a(e,()=>{D=e.dataset.k;for(let t of r.querySelectorAll(`#bugTypes span`))t.classList.toggle(`on`,t===e);i(`tap`)});let c=P(`bugText`);c.addEventListener(`input`,R),c.addEventListener(`focus`,()=>setTimeout(m,350)),a(P(`bugSend`),G),P(`bugFile`).addEventListener(`change`,H),a(P(`bugPhotoRm`),()=>{O!==`sending`&&(B(),i(`back`))}),p();let l=document.createElement(`div`);l.className=`tbtn`,l.id=`mapBug`,l.innerHTML=`${y(g)}バグを報告`,P(`scMap`).appendChild(l);for(let e of[`touchstart`,`touchmove`,`touchend`,`mousedown`,`click`])l.addEventListener(e,e=>e.stopPropagation(),{passive:e!==`touchend`});a(l,()=>{(e.mode===`driving`||e.mode===`onfoot`)&&U(`map`)})}var q=`
  svg.ti{width:calc(13*var(--u));height:calc(13*var(--u));flex:none;} svg.ti path{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}
  #testerStack{position:absolute;left:max(calc(12*var(--u)), calc(env(safe-area-inset-left) - var(--islandCutL, 30px)));top:calc(118*var(--u));display:flex;flex-direction:column;gap:calc(6*var(--u));align-items:flex-start;}
  .tbtn{display:inline-flex;align-items:center;gap:calc(6*var(--u));height:calc(26*var(--u));padding:0 calc(12*var(--u)) 0 calc(10*var(--u));border-radius:999px;border:1px solid var(--amber);background:var(--ink);color:var(--amber);
    font-size:calc(11*var(--u));font-weight:800;letter-spacing:.03em;box-shadow:0 2px 8px rgba(0,0,0,.35);box-sizing:border-box;white-space:nowrap;}
  #testerStack.hide{display:none;}   /* ショップ&カスタムの間（shop.js syncStage） */
  .tbtnRow{display:flex;gap:calc(6*var(--u));}
  .tbtn b{font-variant-numeric:tabular-nums;font-size:calc(12*var(--u));margin-left:calc(2*var(--u));}
  #scTesters{justify-content:flex-start;padding:calc(14*var(--u)) calc(18*var(--u));box-sizing:border-box;overflow:hidden;}
  #scTesters > :first-child{margin-top:0;} #scTesters > :last-child{margin-bottom:0;}
  #scTesters h1{margin:0;font-size:calc(17*var(--u));line-height:1.1;}
  #scTesters h1 small{font-size:calc(8.5*var(--u));}
  #scTesters .body{display:flex;gap:calc(14*var(--u));width:min(96vw,calc(800*var(--u)));margin-top:calc(10*var(--u));flex:1 1 auto;min-height:0;text-align:left;}
  #scTesters .notice{flex:0 0 46%;border-radius:calc(8*var(--u));border:1px solid var(--amber);background:rgba(255,182,72,.07);padding:calc(10*var(--u)) calc(12*var(--u));box-sizing:border-box;display:flex;flex-direction:column;gap:calc(6*var(--u));overflow:hidden;}
  #scTesters .notice h2{margin:0 0 calc(2*var(--u));font-size:calc(9.5*var(--u));letter-spacing:.2em;color:var(--amber);font-weight:800;}
  #scTesters .notice p{margin:0;font-size:calc(10.5*var(--u));line-height:1.6;opacity:1;max-width:none;}
  #scTesters .notice p.thanks{margin-top:calc(4*var(--u));opacity:.85;}
  #scTesters .notice p.warn{margin-top:calc(10.5*1.6*var(--u) - 6*var(--u));}   /* 1 行空ける（行の高さ 16.8u − 段落の間 6u） */
  #scTesters .roster{flex:1;min-width:0;display:flex;flex-direction:column;border-radius:calc(8*var(--u));border:1px solid var(--line2);background:rgba(255,255,255,.03);overflow:hidden;}
  #scTesters .roster .head{display:flex;justify-content:space-between;align-items:baseline;padding:calc(7*var(--u)) calc(12*var(--u));border-bottom:1px solid var(--line);font-size:calc(10*var(--u));opacity:.85;}
  #scTesters .roster .head b{font-size:calc(13*var(--u));color:var(--amber);font-variant-numeric:tabular-nums;}
  #scTesters .list{flex:1;min-height:0;overflow-y:auto;padding:calc(8*var(--u)) calc(10*var(--u));display:grid;grid-template-columns:repeat(auto-fill,minmax(calc(86*var(--u)),1fr));gap:calc(6*var(--u));align-content:start;
    touch-action:pan-y;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;}
  #scTesters .nm{height:calc(24*var(--u));border-radius:999px;border:1px solid var(--line);background:rgba(255,255,255,.04);display:flex;align-items:center;justify-content:center;font-size:calc(11*var(--u));font-weight:700;white-space:nowrap;overflow:hidden;padding:0 calc(6*var(--u));}
  #scTesters .nm.me{border-color:var(--amber);color:var(--amber);background:rgba(255,182,72,.08);}
  #scTesters .empty{grid-column:1/-1;text-align:center;padding-top:calc(20*var(--u));font-size:calc(11*var(--u));opacity:.5;}
  #scTesters .foot{display:flex;gap:calc(12*var(--u));align-items:center;margin-top:calc(10*var(--u));}
  #scTesters .close{height:calc(28*var(--u));padding:0 calc(24*var(--u));border-radius:999px;border:1px solid var(--amber);color:var(--amber);background:var(--panel);font-size:calc(11.5*var(--u));font-weight:800;display:flex;align-items:center;letter-spacing:.06em;}
  #scTesters .tip{font-size:calc(9*var(--u));opacity:.45;}
`,J=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),Y=null,X=null,Z=()=>{try{let e=JSON.parse(localStorage.getItem(`haitatsu.testers.v1`)||`null`);return e&&Array.isArray(e.names)?e:null}catch(e){return null}};function Q(){let e=Z();X.textContent=e?`${e.names.length}人`:`—`}function $(){let e=Z(),t=document.getElementById(`testersBody`);document.getElementById(`testersN`).textContent=e?e.names.length:`—`,t.innerHTML=e&&e.names.length?e.names.map(e=>`<div class="nm${e===c.name?` me`:``}">${J(e)}</div>`).join(``):`<div class="empty">${e?`まだ登録がありません`:`名簿を読み込めませんでした`}</div>`}function ne(){e.depart||e.mode!==`garage`||($(),document.getElementById(`testersBody`).scrollTop=0,r(`scTesters`),i(`ok`))}function re(){n(`scTesters`),i(`back`)}function ie(){let n=document.createElement(`style`);n.textContent=q,document.head.appendChild(n);let r=document.createElement(`div`);r.id=`testerStack`,r.innerHTML=`<div class="tbtn" id="btnTesters">${y(h)}テストプレイヤー<b id="btnTestersN">—</b></div><div class="tbtn" id="btnBugG">${y(g)}バグを報告</div>`,document.getElementById(`garageStage`).appendChild(r),X=document.getElementById(`btnTestersN`);let i=document.createElement(`div`);i.className=`screen hide`,i.id=`scTesters`,i.innerHTML=`<h1>テストプレイヤー<small>TESTERS</small></h1><div class="backHint">画面の余白をタップで戻る</div>
    <div class="body">
      <div class="notice"><h2>テスターの皆さまへ</h2>
        <p>アプリが正式リリースされる際には、ブラウザ版のデータはすべてリセットされてしまいます。</p>
        <p>その代わりに、テスターの皆さまにはゲーム内通貨とテスター様限定パーツをプレゼントさせていただきます。</p>
        <p class="thanks">日頃よりテストプレイにご協力いただき、ありがとうございます。<br>引き続き、テストプレイをよろしくお願いいたします。</p>
        <p class="warn">アプリが正式リリースされるまでは、ホーム画面のアイコンは絶対に削除しないでください（アイコンを削除すると、ゲームのデータも一緒に消えてしまいます）。</p>
      </div>
      <div class="roster"><div class="head"><span>名簿</span><span><b id="testersN">—</b> 人</span></div><div class="list" id="testersBody"></div></div>
    </div>
`,document.getElementById(`scNews`).after(i),a(document.getElementById(`btnTesters`),ne),i.addEventListener(`click`,e=>{let t=e.target;(t===i||t.classList.contains(`body`)||t.classList.contains(`foot`))&&re()});let o=null,s=()=>Y?Promise.resolve(Y):o||(o=t(()=>import(`./supa-G-AC65te.js`).then(e=>(Y=e,e.onNames(()=>{Q(),i.classList.contains(`hide`)||$()}),e)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url).finally(()=>{o=null}));K(s),a(document.getElementById(`btnBugG`),()=>{!e.depart&&e.mode===`garage`&&U(`garage`)}),ee.tester={retry:()=>{s().then(e=>e.retryTester()).catch(()=>{})},townStart:()=>{f(),s().then(e=>e.retryTester()).catch(()=>{})},leaveTown:d,nameChanged:e=>{s().then(t=>t.nameChanged(e)).catch(()=>{})}},s().then(e=>e.startTester()).catch(()=>{}),Q()}export{ie as initTesters};