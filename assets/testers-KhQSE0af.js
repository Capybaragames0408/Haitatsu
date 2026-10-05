const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./supa-DD0pE7Yd.js","./rules-JcDscvxl.js","./state-DHqcnPk3.js","./rolldown-runtime-DK3Fl9T5.js","./profile-tdnIGEMm.js","./supabaseProjects-Dd9bp072.js","./preload-helper-CaC3yEL3.js","./sbClient-BHqMc1qA.js","./flags-9q_0uEIo.js","./supabase-s698b41r.js","./dist-DxukqvvO.js"])))=>i.map(i=>d[i]);
import{t as e}from"./state-DHqcnPk3.js";import{t}from"./preload-helper-CaC3yEL3.js";import{Ot as n,Tt as r,_ as i,wt as a}from"./profile-tdnIGEMm.js";import{dt as o,ft as s,ht as c,mt as l}from"./renderScale-oAPLDZLe.js";import{t as u}from"./refs-Bh9H2pZB.js";import{o as d}from"./confirm-T8fll5W2.js";import{o as f,s as p}from"./account-BD5Wl2gX.js";var ee=`M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20a6 6 0 0 1 12 0M16 11a3 3 0 1 0 0-6M21 20a6 6 0 0 0-6-6`,m=`M9 9V7a3 3 0 0 1 6 0v2M8 13h8M8 17h8M12 9a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0v-2a5 5 0 0 1 5-5zM7 12l-3-1M17 12l3-1M7 16l-3 1M17 16l3 1`,h=`M6 6l12 12M18 6L6 18`,g=`M4 7h3l2-2h6l2 2h3v12H4zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z`,_=e=>`<svg class="ti" viewBox="0 0 24 24"><path d="${e}"/></svg>`,v=1e3,y=60,b=`haitatsu.bugCool.v1`,x=[[`bug`,`バグ報告`],[`idea`,`意見・要望`],[`other`,`その他`]],S={ok:`送りました。ありがとうございます`,fail:`送れませんでした。通信を確かめてもう一度お試しください`,too_soon:`少し時間をおいてから送ってください`,too_many:`今日はこれ以上送れません`,photo_many:`今日はこれ以上写真を送れません（写真を外すと送れます）`,photo_bad:`この写真は読み込めませんでした`},C=`
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
`,w=null,T=`garage`,E=`bug`,D=`idle`,O=0,k=0,A=!1,j=null,M=!1,N=e=>document.getElementById(e),P=()=>{let e=0;try{e=+localStorage.getItem(b)||0}catch(e){}return Math.max(0,Math.ceil((e-Date.now())/1e3))},F=()=>{try{localStorage.setItem(b,String(Date.now()+y*1e3))}catch(e){}};function I(e){let t=N(`bugStatus`);t.className=`status`+(e?e===`ok`?` ok`:` err`:``),t.textContent=e?S[e]:``}function L(){let e=N(`bugText`),t=N(`bugSend`);N(`bugLeft`).textContent=Math.max(0,v-e.value.length);let n=P();if(D===`sending`){t.className=`send busy`,t.innerHTML=`<span class="sp"></span>送信中…`;return}if(n>0){t.className=`send dis`,t.textContent=`あと ${n} 秒`;return}t.textContent=`送る`,t.className=`send`+(A||!e.value.trim()?` dis`:``)}var R=e=>e>=1e6?(e/1e6).toFixed(1)+`MB`:Math.round(e/1e3)+`KB`;function z(){j&&URL.revokeObjectURL(j.url),j=null,N(`bugFile`).value=``,B()}function B(){let e=N(`bugPhotoAdd`),t=N(`bugPhotoHas`);e.classList.toggle(`hide`,!!j),t.classList.toggle(`hide`,!j),e.classList.toggle(`work`,M),N(`bugPhotoAddLbl`).textContent=M?`写真を縮めています…`:`写真を添える`,j&&(N(`bugPhotoImg`).src=j.url,N(`bugPhotoSize`).textContent=`${j.w}×${j.h}・${R(j.bytes)}`)}async function V(){let e=N(`bugFile`).files&&N(`bugFile`).files[0];if(e&&D!==`sending`){M=!0,B();try{let t=await o(e);j&&URL.revokeObjectURL(j.url),j=t,I(null)}catch(e){I(`photo_bad`)}M=!1,N(`bugFile`).value=``,B(),L()}}function H(e){N(`scBug`).classList.contains(`hide`)&&(T=e,clearTimeout(O),D!==`sending`&&I(A?`too_many`:null),L(),r(`scBug`),n(`ok`),clearInterval(k),k=setInterval(()=>{D!==`sending`&&L()},500))}function U(e){if(!N(`scBug`).classList.contains(`hide`)){clearTimeout(O),clearInterval(k),N(`bugText`).blur(),a(`scBug`),document.body.classList.remove(`kb`);try{window.scrollTo(0,0)}catch(e){}e||n(`back`)}}async function W(){let e=N(`bugText`),t=e.value.trim();if(D===`sending`||M||A||P()>0||!t)return;D=`sending`,I(null),L();let r=`fail`,a=s(T);j&&(a.photo={w:j.w,h:j.h,bytes:j.bytes});try{r=await(await w()).sendFeedback({name:i.name||null,kind:E,body:t.slice(0,v),meta:a},j?j.blob:null)}catch(e){r=`fail`}D=`idle`,r===`ok`?(F(),e.value=``,z(),I(`ok`),n(`ok`),O=setTimeout(()=>U(!0),1800)):(r===`too_soon`&&F(),r===`too_many`&&(A=!0),I(r)),L()}function G(t){w=t;let r=document.createElement(`style`);r.textContent=C,document.head.appendChild(r);let i=document.createElement(`div`);i.className=`screen hide`,i.id=`scBug`,i.innerHTML=`<div class="head"><h1>バグを報告<small>FEEDBACK</small></h1><div class="x" id="bugX">${_(h)}</div></div>
    <div class="types" id="bugTypes">${x.map(([e,t])=>`<span data-k="${e}"${e===`bug`?` class="on"`:``}>${t}</span>`).join(``)}</div>
    <div class="main">
      <div class="left"><textarea id="bugText" maxlength="${v}" placeholder="何が・どこで・どうなったか。例：南の集落で不在票を出したあと、車に戻れなくなった" autocomplete="off" spellcheck="false"></textarea>
        <label class="photo add" id="bugPhotoAdd" for="bugFile">${_(g)}<span id="bugPhotoAddLbl">写真を添える</span><small>1 枚まで</small></label>
        <div class="photo has hide" id="bugPhotoHas"><img id="bugPhotoImg" alt=""><span>写真 1 枚</span><small id="bugPhotoSize"></small><div class="rm" id="bugPhotoRm">${_(h)}</div></div>
        <input type="file" id="bugFile" accept="image/*"></div>
      <div class="right"><div class="count">残り <b id="bugLeft">${v}</b> 文字</div>
        <div class="meta">送る内容に添えられる情報：直前のプレイの時刻・場所・難易度・端末。名前以外の個人情報は含みません。</div>
        <div class="status" id="bugStatus"></div>
        <div class="send dis" id="bugSend">送る</div></div>
    </div>
    <div class="tip">60 秒に 1 件・1 日 20 件まで。作者だけが読みます。</div>`,document.body.appendChild(i),d(N(`bugX`),()=>U()),i.addEventListener(`click`,e=>{e.target===i&&U()});for(let e of i.querySelectorAll(`#bugTypes span`))d(e,()=>{E=e.dataset.k;for(let t of i.querySelectorAll(`#bugTypes span`))t.classList.toggle(`on`,t===e);n(`tap`)});let a=N(`bugText`);a.addEventListener(`input`,L),a.addEventListener(`focus`,()=>setTimeout(p,350)),d(N(`bugSend`),W),N(`bugFile`).addEventListener(`change`,V),d(N(`bugPhotoRm`),()=>{D!==`sending`&&(z(),n(`back`))}),f();let o=document.createElement(`div`);o.className=`tbtn`,o.id=`mapBug`,o.innerHTML=`${_(m)}バグを報告`,N(`scMap`).appendChild(o);for(let e of[`touchstart`,`touchmove`,`touchend`,`mousedown`,`click`])o.addEventListener(e,e=>e.stopPropagation(),{passive:e!==`touchend`});d(o,()=>{(e.mode===`driving`||e.mode===`onfoot`)&&H(`map`)})}var K=`
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
`,q=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),J=null,Y=null,X=()=>{try{let e=JSON.parse(localStorage.getItem(`haitatsu.testers.v1`)||`null`);return e&&Array.isArray(e.names)?e:null}catch(e){return null}};function Z(){let e=X();Y.textContent=e?`${e.names.length}人`:`—`}function Q(){let e=X(),t=document.getElementById(`testersBody`);document.getElementById(`testersN`).textContent=e?e.names.length:`—`,t.innerHTML=e&&e.names.length?e.names.map(e=>`<div class="nm${e===i.name?` me`:``}">${q(e)}</div>`).join(``):`<div class="empty">${e?`まだ登録がありません`:`名簿を読み込めませんでした`}</div>`}function te(){e.depart||e.mode!==`garage`||(Q(),document.getElementById(`testersBody`).scrollTop=0,r(`scTesters`),n(`ok`))}function $(){a(`scTesters`),n(`back`)}function ne(){let n=document.createElement(`style`);n.textContent=K,document.head.appendChild(n);let r=document.createElement(`div`);r.id=`testerStack`,r.innerHTML=`<div class="tbtn" id="btnTesters">${_(ee)}テストプレイヤー<b id="btnTestersN">—</b></div><div class="tbtn" id="btnBugG">${_(m)}バグを報告</div>`,document.getElementById(`garageStage`).appendChild(r),Y=document.getElementById(`btnTestersN`);let i=document.createElement(`div`);i.className=`screen hide`,i.id=`scTesters`,i.innerHTML=`<h1>テストプレイヤー<small>TESTERS</small></h1>
    <div class="body">
      <div class="notice"><h2>テスターの皆さまへ</h2>
        <p>アプリが正式リリースされる際には、ブラウザ版のデータはすべてリセットされてしまいます。</p>
        <p>その代わりに、テスターの皆さまにはゲーム内通貨とテスター様限定パーツをプレゼントさせていただきます。</p>
        <p class="thanks">日頃よりテストプレイにご協力いただき、ありがとうございます。<br>引き続き、テストプレイをよろしくお願いいたします。</p>
        <p class="warn">アプリが正式リリースされるまでは、ホーム画面のアイコンは絶対に削除しないでください（アイコンを削除すると、ゲームのデータも一緒に消えてしまいます）。</p>
      </div>
      <div class="roster"><div class="head"><span>名簿</span><span><b id="testersN">—</b> 人</span></div><div class="list" id="testersBody"></div></div>
    </div>
    <div class="foot"><div class="close" id="testersClose">閉じる</div><span class="tip">本文の外をタップでも戻る</span></div>`,document.getElementById(`scNews`).after(i),d(document.getElementById(`btnTesters`),te),document.getElementById(`testersClose`).addEventListener(`click`,$),i.addEventListener(`click`,e=>{let t=e.target;(t===i||t.classList.contains(`body`)||t.classList.contains(`foot`))&&$()});let a=null,o=()=>J?Promise.resolve(J):a||(a=t(()=>import(`./supa-DD0pE7Yd.js`).then(e=>(J=e,e.onNames(()=>{Z(),i.classList.contains(`hide`)||Q()}),e)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url).finally(()=>{a=null}));G(o),d(document.getElementById(`btnBugG`),()=>{!e.depart&&e.mode===`garage`&&H(`garage`)}),u.tester={retry:()=>{o().then(e=>e.retryTester()).catch(()=>{})},townStart:()=>{l(),o().then(e=>e.retryTester()).catch(()=>{})},leaveTown:c,nameChanged:e=>{o().then(t=>t.nameChanged(e)).catch(()=>{})}},o().then(e=>e.startTester()).catch(()=>{}),Z()}export{ne as initTesters};