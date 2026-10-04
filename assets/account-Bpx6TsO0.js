const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cloudSave-Cb9e326j.js","./supabaseProjects-D2PtZLPG.js","./rules-g73EEY-2.js","./state-DHqcnPk3.js","./rolldown-runtime-DK3Fl9T5.js","./preload-helper-CaC3yEL3.js","./profile-DDP6vWiR.js","./messages-xoq__Vi3.js","./refs-Bh9H2pZB.js","./confirm-BVwPqvdj.js","./supabase-DqZkl1Ci.js","./cloud-CsS6j8bR.js","./sbClient-Dmzz1hAE.js","./flags-9q_0uEIo.js","./dist-DxukqvvO.js","./renderScale-D8QaTA8H.js","./plate-BZvVLg_9.js","./main-DtzO9dcx.js"])))=>i.map(i=>d[i]);
import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{r as t}from"./supabaseProjects-D2PtZLPG.js";import{i as n}from"./rules-g73EEY-2.js";import{t as r}from"./preload-helper-CaC3yEL3.js";import{J as i,Ot as a,et as o}from"./profile-DDP6vWiR.js";import{o as s,r as c}from"./confirm-BVwPqvdj.js";import"./supabase-DqZkl1Ci.js";var l=[`scBug`,`scContact`,`scAccount`];function u(){let e=window.visualViewport,t=l.some(e=>{let t=document.getElementById(e);return t&&!t.classList.contains(`hide`)}),n=!!(e&&t&&e.height<innerHeight*.6);document.body.classList.toggle(`kb`,n),n&&(document.documentElement.style.setProperty(`--kb`,e.height+`px`),document.documentElement.style.setProperty(`--kbTop`,e.offsetTop+`px`))}var ee=!1;function d(){!ee&&window.visualViewport&&(ee=!0,visualViewport.addEventListener(`resize`,u),visualViewport.addEventListener(`scroll`,u))}var te=`
  /* 骨組みはお問い合わせ（#scContact・#127）と同じ：頭＝［戻る］題 ×・中身の幅 --cw・島の側に片寄らない式・キーボードの時の body.kb */
  #scAccount{z-index:47;justify-content:flex-start;padding:calc(14*var(--u)) calc(18*var(--u));box-sizing:border-box;overflow:hidden;text-align:left;--cw:min(96vw,calc(800*var(--u)));
    -webkit-text-size-adjust:none;text-size-adjust:none;}   /* 横持ちの iPhone は、幅の広い段の字を勝手に大きくする（見出しと箇条書きが 16px になった）＝止める */
  body.islandL #scAccount{--cw:min(96vw, calc(100vw - 2 * max(0px, calc(env(safe-area-inset-left) - var(--islandCutL)))), calc(800*var(--u)));}
  body.islandR #scAccount{--cw:min(96vw, calc(100vw - 2 * (max(0px, calc(env(safe-area-inset-right) - var(--islandCutR))) + 12*var(--u))), calc(800*var(--u)));}
  #scAccount > :first-child{margin-top:0;} #scAccount > :last-child{margin-bottom:0;}
  #scAccount svg.ti{width:calc(14*var(--u));height:calc(14*var(--u));fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none;}
  #scAccount p{max-width:none;opacity:1;font-size:inherit;line-height:inherit;}
  #scAccount .head{width:var(--cw);display:flex;align-items:center;gap:calc(10*var(--u));}
  #scAccount h1{margin:0;font-size:calc(17*var(--u));line-height:1.1;text-align:left;}
  #scAccount h1 small{font-size:calc(8.5*var(--u));}
  #scAccount .back{height:calc(28*var(--u));padding:0 calc(13*var(--u)) 0 calc(8*var(--u));border-radius:999px;border:1px solid var(--line2);background:var(--panel);display:flex;align-items:center;gap:calc(2*var(--u));font-size:calc(11*var(--u));font-weight:700;color:var(--paper);box-sizing:border-box;}
  #scAccount .back.hide{display:none;}
  #scAccount .x{margin-left:auto;width:calc(28*var(--u));height:calc(28*var(--u));border-radius:50%;border:1px solid var(--line2);display:flex;align-items:center;justify-content:center;color:var(--paper);box-sizing:border-box;}
  #scAccount .view{width:var(--cw);flex:1 1 auto;min-height:0;display:flex;flex-direction:column;}
  #scAccount .main{display:flex;gap:calc(12*var(--u));margin-top:calc(10*var(--u));flex:1 1 auto;min-height:0;}
  #scAccount .left{flex:1;min-width:0;display:flex;flex-direction:column;gap:calc(8*var(--u));}
  #scAccount .right{flex:0 0 calc(270*var(--u));display:flex;flex-direction:column;gap:calc(7*var(--u));}
  /* ボタン：ふつう＝アンバーの枠／決定の 1 つだけアンバーの塗り／危ない操作＝朱色 */
  #scAccount .btn{height:calc(30*var(--u));padding:0 calc(14*var(--u));border-radius:999px;border:1px solid var(--amber);color:var(--amber);background:var(--panel);font-size:calc(11.5*var(--u));font-weight:800;display:flex;align-items:center;justify-content:center;white-space:nowrap;flex:none;box-sizing:border-box;}
  #scAccount .btn.fill{background:var(--amber);color:#2a1b04;}
  #scAccount .btn.gray{border-color:var(--line2);color:var(--paper);}
  #scAccount .go{margin-top:auto;min-height:calc(38*var(--u));padding:0 calc(12*var(--u));border-radius:calc(8*var(--u));border:1.5px solid var(--amber);color:var(--amber);background:rgba(255,182,72,.07);font-size:calc(12*var(--u));font-weight:800;display:flex;align-items:center;justify-content:center;gap:calc(4*var(--u));box-sizing:border-box;text-align:center;}
  #scAccount .send{height:calc(38*var(--u));border-radius:calc(8*var(--u));background:var(--amber);color:#2a1b04;display:flex;align-items:center;justify-content:center;gap:calc(6*var(--u));font-weight:800;font-size:calc(13*var(--u));letter-spacing:.06em;box-sizing:border-box;flex:none;}
  #scAccount .send.dis{background:transparent;border:1px solid var(--line2);color:var(--paper);opacity:.55;}
  #scAccount .send.danger{background:var(--red);color:#fff;}
  #scAccount .send.danger.dis{background:transparent;border:1px solid rgba(232,80,58,.6);color:#f0907e;opacity:.55;}
  #scAccount .status{margin-top:auto;min-height:calc(28*var(--u));display:flex;align-items:flex-end;justify-content:center;font-size:calc(10*var(--u));font-weight:700;text-align:center;line-height:1.4;}
  #scAccount .status.err{color:#ff8a5c;}
  #scAccount .tip{font-size:calc(10*var(--u));line-height:1.6;opacity:.7;border-radius:calc(6*var(--u));border:1px solid var(--line);padding:calc(7*var(--u)) calc(9*var(--u));}
  #scAccount .sec{display:flex;align-items:center;gap:calc(8*var(--u));font-size:calc(9.5*var(--u));letter-spacing:.2em;color:var(--amber);font-weight:800;opacity:.9;}
  #scAccount .sec::after{content:"";flex:1;height:1px;background:var(--line2);}

  /* ① 引き継ぎ：左＝写して残す札（ID・パスワード・控え）＋スクリーンショットの一文／右＝機種変更の手順と、続きからの入口 */
  #scAccount .card{border-radius:calc(10*var(--u));border:1px solid var(--amber);background:rgba(255,182,72,.06);padding:calc(2*var(--u)) calc(16*var(--u));}
  #scAccount .row{display:flex;align-items:center;gap:calc(12*var(--u));padding:calc(10*var(--u)) 0;min-height:calc(50*var(--u));box-sizing:border-box;}
  #scAccount .row + .row{border-top:1px solid var(--line);}
  #scAccount .cap{flex:none;width:calc(82*var(--u));font-size:calc(9.5*var(--u));font-weight:800;letter-spacing:.12em;color:var(--amber);}
  #scAccount .code{flex:1;min-width:0;font-family:ui-monospace,Menlo,monospace;font-size:calc(22*var(--u));font-weight:800;letter-spacing:.12em;line-height:1.1;font-variant-numeric:tabular-nums;-webkit-user-select:text;user-select:text;}
  #scAccount .val{flex:1;min-width:0;font-size:calc(12.5*var(--u));font-weight:800;line-height:1.4;}
  #scAccount .val small{display:block;font-size:calc(10*var(--u));font-weight:400;opacity:.7;}
  #scAccount .val.warn{color:#ff8a5c;}
  #scAccount .val .ok{display:inline-flex;vertical-align:calc(-2*var(--u));margin-right:calc(5*var(--u));color:var(--amber);}
  #scAccount .shot{display:flex;align-items:center;gap:calc(9*var(--u));padding:calc(8*var(--u)) calc(12*var(--u));border-radius:calc(8*var(--u));border:1px dashed rgba(255,182,72,.65);color:var(--amber);font-size:calc(12*var(--u));font-weight:800;line-height:1.4;}
  #scAccount .shot svg.ti{width:calc(18*var(--u));height:calc(18*var(--u));}
  #scAccount .shot small{display:block;color:var(--paper);opacity:.7;font-weight:400;font-size:calc(10*var(--u));}
  #scAccount .st{display:flex;gap:calc(8*var(--u));font-size:calc(11*var(--u));line-height:1.6;margin-top:calc(6*var(--u));}
  #scAccount .st i{font-style:normal;flex:none;width:calc(17*var(--u));height:calc(17*var(--u));margin-top:calc(1*var(--u));border-radius:50%;border:1px solid var(--amber);color:var(--amber);font-size:calc(10*var(--u));font-weight:800;display:flex;align-items:center;justify-content:center;box-sizing:border-box;}

  /* ②③ 入力の面（パスワードを決める・引き継ぎで続きから）：左＝入力欄 2 つ／右＝説明・知らせ・決定 */
  #scAccount .lbl{font-size:calc(10.5*var(--u));font-weight:800;color:var(--amber);letter-spacing:.06em;}
  #scAccount .fld{display:flex;flex-direction:column;gap:calc(4*var(--u));}
  #scAccount input{width:100%;height:calc(38*var(--u));padding:0 calc(12*var(--u));border-radius:calc(8*var(--u));border:1px solid var(--line2);background:rgba(255,255,255,.04);color:var(--paper);
    font-family:ui-monospace,Menlo,monospace;font-size:calc(16*var(--u));font-weight:700;letter-spacing:.1em;outline:none;box-sizing:border-box;margin:0;-webkit-user-select:text;user-select:text;}
  #scAccount input:focus{border-color:var(--amber);}
  #scAccount input::placeholder{color:rgba(232,228,217,.38);font-family:-apple-system,"Hiragino Sans",sans-serif;font-size:calc(12*var(--u));font-weight:400;letter-spacing:.04em;}
  #scAccount .rule{font-size:calc(10*var(--u));opacity:.7;line-height:1.5;}
  #scAccount .tgl{display:inline-flex;align-items:center;gap:calc(7*var(--u));font-size:calc(11*var(--u));font-weight:700;align-self:flex-start;padding:calc(4*var(--u)) 0;}
  #scAccount .box{width:calc(20*var(--u));height:calc(20*var(--u));border-radius:calc(5*var(--u));border:1.5px solid var(--line2);display:flex;align-items:center;justify-content:center;color:transparent;box-sizing:border-box;flex:none;}
  #scAccount .on > .box{border-color:var(--amber);background:var(--amber);color:#2a1b04;}
  #scAccount .del2 .on > .box{border-color:var(--red);background:var(--red);color:#fff;}
  /* キーボードが出た時：題・見出し・説明・条件・表示の切り替えを隠し、［戻る］と × だけの細い頭に。入力欄 2 つ（左）と、知らせ＋決定（右）は残す */
  body.kb #scAccount{top:var(--kbTop,0px);height:var(--kb,220px);bottom:auto;padding-top:calc(6*var(--u));padding-bottom:calc(6*var(--u));box-shadow:0 50vh 0 50vh #10151c;}
  body.kb #scAccount h1, body.kb #scAccount .lbl, body.kb #scAccount .tip, body.kb #scAccount .rule, body.kb #scAccount .tgl{display:none;}
  body.kb #scAccount .back, body.kb #scAccount .x{height:calc(24*var(--u));} body.kb #scAccount .x{width:calc(24*var(--u));}
  body.kb #scAccount .main{margin-top:calc(5*var(--u));}
  body.kb #scAccount .left{gap:calc(6*var(--u));}
  body.kb #scAccount input{height:calc(36*var(--u));}
  body.kb #scAccount .send{height:calc(36*var(--u));}

  /* 終わりの面（決めた・引き継いだ・削除した）と、削除の最後の確認：真ん中に縦に並べる */
  #scAccount .center{align-items:center;justify-content:center;text-align:center;}
  #scAccount .mark{width:calc(44*var(--u));height:calc(44*var(--u));border-radius:50%;border:2px solid var(--amber);color:var(--amber);display:flex;align-items:center;justify-content:center;box-sizing:border-box;flex:none;}
  #scAccount .mark svg.ti{width:calc(24*var(--u));height:calc(24*var(--u));stroke-width:2.4;}
  #scAccount .mark.red{border-color:var(--red);color:var(--red);}
  #scAccount .ttl{font-size:calc(17*var(--u));font-weight:800;letter-spacing:.06em;margin-top:calc(9*var(--u));}
  #scAccount .sub{font-size:calc(11*var(--u));line-height:1.6;opacity:.8;margin-top:calc(6*var(--u));}
  #scAccount .center .card{margin-top:calc(10*var(--u));min-width:calc(380*var(--u));text-align:left;}
  #scAccount .center .row{min-height:0;padding:calc(8*var(--u)) 0;}
  #scAccount .center .shot{margin-top:calc(8*var(--u));text-align:left;}
  #scAccount .center .btns{display:flex;gap:calc(10*var(--u));margin-top:calc(12*var(--u));}
  #scAccount .center .btn{height:calc(32*var(--u));padding:0 calc(24*var(--u));}
  /* ④ アカウントの削除（1 回目）：左＝消える物／右＝［やめる］が上で大きく、進むボタンは朱色の枠で下 */
  #scAccount .del1 .lead{font-size:calc(12.5*var(--u));font-weight:800;}
  #scAccount .del1 ul{margin:0;padding:calc(4*var(--u)) calc(14*var(--u));list-style:none;border-radius:calc(8*var(--u));background:rgba(255,255,255,.04);border:1px solid var(--line);}
  #scAccount .del1 li{position:relative;padding:calc(7*var(--u)) 0 calc(7*var(--u)) calc(14*var(--u));font-size:calc(11.5*var(--u));line-height:1.5;}
  #scAccount .del1 li + li{border-top:1px solid var(--line);}
  #scAccount .del1 li::before{content:"";position:absolute;left:0;top:calc(13*var(--u));width:calc(5*var(--u));height:calc(5*var(--u));border-radius:50%;background:var(--red);}
  #scAccount .del1 .warn{font-size:calc(12*var(--u));font-weight:800;color:#ff8a5c;line-height:1.5;}
  #scAccount .del1 .pay{font-size:calc(10*var(--u));opacity:.65;line-height:1.5;}
  #scAccount .del1 .right{flex-basis:calc(220*var(--u));justify-content:flex-end;gap:calc(10*var(--u));}
  #scAccount .del1 .keep{height:calc(44*var(--u));border-radius:calc(8*var(--u));border:1.5px solid var(--amber);color:var(--amber);background:rgba(255,182,72,.07);font-size:calc(13*var(--u));font-weight:800;display:flex;align-items:center;justify-content:center;box-sizing:border-box;}
  #scAccount .del1 .next{height:calc(34*var(--u));border-radius:calc(8*var(--u));border:1px solid rgba(232,80,58,.7);color:#f0907e;font-size:calc(11.5*var(--u));font-weight:800;display:flex;align-items:center;justify-content:center;gap:calc(3*var(--u));box-sizing:border-box;}
  /* 削除の最後の確認：チェックを入れるまで、朱色のボタンは押せない（2 度押しで消えない） */
  #scAccount .del2 .tgl{margin-top:calc(12*var(--u));align-self:center;font-size:calc(12*var(--u));padding:calc(8*var(--u)) calc(14*var(--u));border-radius:calc(8*var(--u));border:1px solid var(--line2);}
  #scAccount .del2 .btns > *{width:calc(190*var(--u));height:calc(38*var(--u));border-radius:calc(8*var(--u));font-size:calc(12.5*var(--u));}
  #scAccount .del2 .status{margin-top:calc(6*var(--u));min-height:calc(14*var(--u));}

  /* 知らせの札（今の確認の札 #buyDlg）：#scAccount より上に。控えとこの端末を見比べる 2 つの小さい札 */
  #buyDlg{z-index:60;}
  #buyDlg .price{line-height:1.6;}
  #buyDlg .cmp{display:grid;grid-template-columns:1fr 1fr;gap:calc(6*var(--u));margin-top:calc(8*var(--u));text-align:left;}
  #buyDlg .cmp div{border-radius:calc(6*var(--u));border:1px solid var(--line2);padding:calc(6*var(--u)) calc(8*var(--u));font-size:calc(10.5*var(--u));line-height:1.5;font-variant-numeric:tabular-nums;}
  #buyDlg .cmp div.new{border-color:var(--amber);}
  #buyDlg .cmp b{display:block;font-size:calc(9.5*var(--u));letter-spacing:.1em;color:var(--amber);}
`,ne=e({accountOn:()=>_,ensureAccountCss:()=>_e,initAccountRows:()=>Q,openClaim:()=>X,openDelete:()=>Z,openTransfer:()=>Y,renderTransferRow:()=>$}),f=()=>o()===`ios`,p=e=>document.getElementById(e),m=e=>String(e==null?``:e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),h=e=>`<svg class="ti" viewBox="0 0 24 24"><path d="${e}"/></svg>`,g={x:`M6 6l12 12M18 6L6 18`,back:`M15 5l-7 7 7 7`,next:`M9 5l7 7-7 7`,check:`M5 12.5l4.5 4.5L19 7.5`,camera:`M4 7h3l2-2h6l2 2h3v12H4zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z`,warn:`M12 7.5v6M12 16.8v.2`},re=/^[0-9A-Za-z]{4,32}$/,_=()=>!!n.cloudSave&&!0,v=null,y=null,b=()=>v?Promise.resolve(v):r(()=>import(`./cloudSave-Cb9e326j.js`).then(e=>v=e),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url),x=()=>y?Promise.resolve(y):r(()=>import(`./cloud-CsS6j8bR.js`).then(e=>y=e),__vite__mapDeps([11,10,1,12,13,14]),import.meta.url),S=e=>{try{return JSON.parse(localStorage.getItem(e)||`null`)}catch(e){return null}},C=()=>S(`haitatsu.cloud.v1`)||{};function ie(){let e=C();if(e.pid)return e.pid;let t=S(`haitatsu.testerCode.v1`);return t&&(t.id||t.code)||null}var w=e=>{let t=new Date(e);return!e||isNaN(t)?``:`${t.getMonth()+1}/${t.getDate()} ${String(t.getHours()).padStart(2,`0`)}:${String(t.getMinutes()).padStart(2,`0`)}`},T=null,E=null,D=!1,O=!1,k=!1,A={pid:null,hasPw:!1,savedAt:null},j=!1,M=!1,N=!1,P=!1,F=``,I=(e,n,r,i=!0)=>`<div class="head"><div class="back${r?``:` hide`}" id="acBack">${h(g.back)}${m(t(`account.back`))}</div><h1>${m(e)}<small>${m(n)}</small></h1>${i?`<div class="x" id="acX">${h(g.x)}</div>`:``}</div>`,L=()=>`<div class="shot">${h(g.camera)}<span>${m(t(`transfer.shot`))}<small>${m(t(`transfer.shotNote`))}</small></span></div>`,ae={info:()=>I(t(`transfer.title`),t(`transfer.titleSub`))+`<div class="view"><div class="main">
      <div class="left">
        <div class="card">
          <div class="row"><span class="cap">${m(t(`transfer.id`))}</span><span class="code" id="acPid">${m(A.pid||`—`)}</span><div class="btn gray" id="acCopy">${m(t(`transfer.copy`))}</div></div>
          <div class="row"><span class="cap">${m(t(`transfer.pw`))}</span>${A.hasPw?`<span class="val">${m(t(`transfer.pw.set`))}<small>${m(t(`transfer.pw.setNote`))}</small></span><div class="btn" id="acPwBtn">${m(t(`transfer.pw.change`))}</div>`:`<span class="val warn">${m(t(`transfer.pw.none`))}</span><div class="btn fill" id="acPwBtn">${m(t(`transfer.pw.make`))}</div>`}</div>
          <div class="row"><span class="cap">${m(t(`transfer.save`))}</span>${A.savedAt?`<span class="val"><span class="ok">${h(g.check)}</span>${m(t(`transfer.save.auto`))}<small>${m(t(`transfer.save.last`,{when:w(A.savedAt)}))}</small></span>`:`<span class="val">${m(t(`transfer.save.none`))}</span>`}</div>
        </div>
        ${L()}
      </div>
      <div class="right">
        <div class="sec">${m(t(`transfer.how.head`))}</div>
        <div class="st"><i>1</i><span>${m(t(`transfer.how.1`))}</span></div>
        <div class="st"><i>2</i><span>${m(t(`transfer.how.2`))}</span></div>
        <div class="tip" style="margin-top:calc(4*var(--u))">${m(t(`transfer.how.same`))}</div>
      </div></div></div>`,pw:()=>I(t(j?`pw.title.change`:`pw.title.make`),t(`transfer.titleSub`),!0)+`<div class="view"><div class="main">
      <div class="left">
        <div class="fld"><div class="lbl">${m(t(`pw.new`))}</div><input id="acPw1" type="password" maxlength="32" placeholder="${m(t(`pw.new`))}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></div>
        <div class="fld"><div class="lbl">${m(t(`pw.again`))}</div><input id="acPw2" type="password" maxlength="32" placeholder="${m(t(`pw.again`))}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></div>
        <div class="rule">${m(t(`pw.rule`))}</div>
        <div class="tgl" id="acShow"><span class="box">${h(g.check)}</span>${m(t(`pw.show`))}</div>
      </div>
      <div class="right">
        <div class="tip">${m(t(j?`pw.note.change`:`pw.note.make`))}</div>
        <div class="status" id="acStatus"></div>
        <div class="send dis" id="acSend">${m(t(`pw.ok`))}</div>
      </div></div></div>`,pwdone:()=>I(t(`transfer.title`),t(`transfer.titleSub`))+`<div class="view center">
      <div class="mark">${h(g.check)}</div><div class="ttl">${m(t(j?`pw.done.change`:`pw.done.make`))}</div>
      <div class="card"><div class="row"><span class="cap">${m(t(`transfer.id`))}</span><span class="code">${m(A.pid||`—`)}</span></div><div class="row"><span class="cap">${m(t(`transfer.pw`))}</span><span class="code">${m(F)}</span></div></div>
      ${L()}
      <div class="btns"><div class="btn" id="acDone">${m(t(`account.close`))}</div></div></div>`,claim:()=>I(t(`claim.title`),t(`claim.titleSub`))+`<div class="view"><div class="main">
      <div class="left">
        <div class="fld"><div class="lbl">${m(t(`claim.id`))}</div><input id="acId" type="text" maxlength="9" placeholder="${m(t(`claim.id`))}　${m(t(`claim.id.placeholder`))}" autocomplete="off" autocapitalize="characters" autocorrect="off" spellcheck="false"></div>
        <div class="fld"><div class="lbl">${m(t(`claim.pw`))}</div><input id="acPw" type="password" maxlength="32" placeholder="${m(t(`claim.pw`))}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></div>
        <div class="tgl" id="acShow"><span class="box">${h(g.check)}</span>${m(t(`pw.show`))}</div>
      </div>
      <div class="right">
        <div class="tip">${m(t(`claim.note`))}<br>${m(t(`claim.noteOnce`))}</div>
        <div class="status" id="acStatus"></div>
        <div class="send dis" id="acSend">${m(t(`claim.ok`))}</div>
      </div></div></div>`,claimdone:()=>I(t(`claim.title`),t(`claim.titleSub`))+`<div class="view center">
      <div class="mark">${h(g.check)}</div><div class="ttl">${m(t(`claim.done`))}</div><p class="sub">${m(t(N?`claim.done.once`:`claim.done.sub`))}</p>
      <div class="btns">${N?`<div class="btn" id="acOncePw">${m(t(`transfer.pw.make`))}</div>`:``}<div class="btn${N?` gray`:``}" id="acGo">${m(t(`claim.done.go`))}</div></div></div>`,del1:()=>I(t(`del.title`),t(`del.titleSub`))+`<div class="view del1"><div class="main">
      <div class="left">
        <div class="lead">${m(t(`del.lead`))}</div>
        <ul>${[`del.item1`,f()?`del.item2.ios`:`del.item2`,`del.item3`,`del.item4`,`del.backup`].map(e=>`<li>${m(t(e))}</li>`).join(``)}</ul>
        <div class="warn">${m(t(`del.warn`))}</div>
        <div class="pay">${m(t(f()?`del.pay.ios`:`del.pay`))}</div>
      </div>
      <div class="right"><div class="keep" id="acKeep">${m(t(`account.cancel`))}</div><div class="next" id="acNext">${m(t(`del.next`))}${h(g.next)}</div></div></div></div>`,del2:()=>I(t(`del.title`),t(`del.titleSub`),!0)+`<div class="view center del2">
      <div class="mark red">${h(g.warn)}</div><div class="ttl">${m(t(`del.q`))}</div><p class="sub">${m(t(`del.q.sub`))}</p>
      <div class="tgl${P?` on`:``}" id="acCheck"><span class="box">${h(g.check)}</span>${m(t(`del.check`))}</div>
      <div class="btns"><div class="btn" id="acKeep">${m(t(`account.cancel`))}</div><div class="send danger${P?``:` dis`}" id="acDel">${m(t(`del.ok`))}</div></div>
      <div class="status" id="acStatus"></div></div>`,deldone:()=>`<div class="view center"><div class="mark">${h(g.check)}</div><div class="ttl">${m(t(`del.done`))}</div><p class="sub">${m(t(`del.done.sub`))}</p><div class="btns"><div class="btn" id="acTitle">${m(t(`del.done.go`))}</div></div></div>`},R=(e,n,r=!0)=>{let i=p(`acStatus`);i&&(i.className=`status`+(e&&r?` err`:``),i.textContent=e?t(e,n):``)},z=()=>{try{window.location.reload()}catch(e){}};function B(e){T=e,k=!1;let t=p(`scAccount`);document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),t.innerHTML=ae[e](),oe(e),u()}function V(){if(k)return;if(a(`back`),D){z();return}if(O){J();return}document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),p(`scAccount`).classList.add(`hide`),document.body.classList.remove(`kb`),T=null;let e=E;E=null,e&&e()}function H(e,t){return _()?(ye(),E=t||null,p(`scAccount`).classList.remove(`hide`),B(e),a(`ok`),!0):!1}function oe(e){if(p(`acX`)&&s(p(`acX`),V),e===`info`&&(s(p(`acCopy`),ce),s(p(`acPwBtn`),()=>{if(!A.pid){a(`deny`);return}j=A.hasPw,a(`ok`),B(`pw`)}),se()),e===`pw`){M=!1,s(p(`acBack`),()=>{a(`back`),B(O?`claimdone`:`info`)}),s(p(`acShow`),()=>U([`acPw1`,`acPw2`]));for(let e of[`acPw1`,`acPw2`])p(e).addEventListener(`input`,()=>{R(null),G()});s(p(`acSend`),le)}e===`pwdone`&&s(p(`acDone`),()=>{if(O){J();return}a(`back`),B(`info`)}),e===`claim`&&(M=!1,s(p(`acShow`),()=>U([`acPw`])),p(`acId`).addEventListener(`input`,()=>{ue(),R(null),q()}),p(`acPw`).addEventListener(`input`,()=>{R(null),q()}),s(p(`acSend`),de)),e===`claimdone`&&(s(p(`acGo`),()=>J()),p(`acOncePw`)&&s(p(`acOncePw`),()=>{a(`ok`),j=!1,B(`pw`)})),e===`del1`&&(s(p(`acKeep`),V),s(p(`acNext`),()=>{P=!1,a(`ok`),B(`del2`)})),e===`del2`&&(s(p(`acBack`),()=>{k||(a(`back`),B(`del1`))}),s(p(`acKeep`),V),s(p(`acCheck`),()=>{k||(P=!P,a(`select`),p(`acCheck`).classList.toggle(`on`,P),p(`acDel`).classList.toggle(`dis`,!P))}),s(p(`acDel`),me)),e===`deldone`&&s(p(`acTitle`),()=>{a(`ok`),z()})}async function se(){let e=null;try{e=await(await x()).accountStatus()}catch(t){e=null}if(T!==`info`||!e||e.error)return;if(e.status===`moved`){p(`scAccount`).classList.add(`hide`),T=null,(await b()).onMoved();return}if(e.status!==`ok`)return;let t={pid:e.player_id||A.pid,hasPw:!!e.has_password,savedAt:e.saved_at||A.savedAt};try{(await b()).setCloudState({hasPw:t.hasPw,...e.saved_at?{savedAt:Date.parse(e.saved_at)}:{}})}catch(e){}(t.pid!==A.pid||t.hasPw!==A.hasPw||t.savedAt!==A.savedAt)&&(A=t,B(`info`))}function ce(){let e=A.pid;if(!e){a(`deny`);return}a(`select`);let n=p(`acCopy`),r=()=>{n.textContent=t(`transfer.copied`),setTimeout(()=>{p(`acCopy`)===n&&(n.textContent=t(`transfer.copy`))},1500)},i=()=>{let e=document.createRange();e.selectNodeContents(p(`acPid`));let t=getSelection();t.removeAllRanges(),t.addRange(e)};navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(r).catch(i):i()}function U(e){M=!M,a(`select`),p(`acShow`).classList.toggle(`on`,M);for(let t of e){let e=p(t);e.type=M?`text`:`password`}}var W=()=>[p(`acPw1`).value,p(`acPw2`).value];function G(){let[e,t]=W();p(`acSend`).classList.toggle(`dis`,k||e.length<4||t.length<4)}async function le(){if(k)return;let[e,t]=W();if(e.length<4||t.length<4){a(`deny`),(e||t)&&R(`pw.err.short`);return}if(!re.test(e)){a(`deny`),R(`pw.err.chars`);return}if(e!==t){a(`deny`),R(`pw.err.diff`);return}k=!0,R(`pw.busy`,null,!1),G();let n=null;try{n=await(await x()).setTransferPassword(e)}catch(e){n=null}if(k=!1,T===`pw`){if(typeof n!=`string`){R(`pw.err.fail`),G();return}F=e,A.pid=n||A.pid,A.hasPw=!0;try{(await b()).setCloudState({hasPw:!0})}catch(e){}a(`ok`),B(`pwdone`)}}function ue(){let e=p(`acId`),t=e.value.toUpperCase().replace(/[^0-9A-Z]/g,``).slice(0,8),n=t.length>4?t.slice(0,4)+`-`+t.slice(4):t;e.value!==n&&(e.value=n)}var K=()=>[p(`acId`).value.replace(/[^0-9A-Z]/gi,``).toUpperCase(),p(`acPw`).value];function q(){let[e,t]=K();p(`acSend`).classList.toggle(`dis`,k||e.length<8||!t)}function de(){if(k)return;let[e,n]=K();if(e.length<8||!n){a(`deny`),R(`claim.err.empty`);return}i(`transfer`)||(p(`acId`).blur(),p(`acPw`).blur(),c(`<b>${m(t(`claim.confirm.q`))}</b>`,m(t(`claim.confirm.sub`)),t(`claim.ok`),()=>fe(e,n),`ok`,t(`account.cancel`)))}async function fe(e,t){if(T!==`claim`||k)return;k=!0,R(`claim.busy`,null,!1),q();let n=`${e.slice(0,4)}-${e.slice(4)}`,r=null;try{r=await(await x()).transferClaim(n,t)}catch(e){r=null}if(!r||r.error||!r.status){k=!1,R(`claim.err.fail`),q();return}if(r.status!==`ok`){k=!1,a(`deny`),r.status===`locked`?R(`claim.err.locked`,{when:w(r.until)}):r.status===`too_many`?R(`claim.err.tooMany`):R(`claim.err.wrong`),q();return}try{await(await b()).applyClaim(r.player_id||n),await pe()}catch(e){}O=!0,N=!!r.one_time,A={pid:r.player_id||n,hasPw:!N,savedAt:null},k=!1,a(`ok`),B(`claimdone`)}async function pe(){var e,t,n;let i=await r(()=>import(`./profile-DDP6vWiR.js`).then(e=>e.v),__vite__mapDeps([6,4,1,2,3,5]),import.meta.url);i.reloadProfile(),(await b()).resumeSync();let[{G:a},{S:o},s,{applyPlateName:c}]=await Promise.all([r(()=>import(`./refs-Bh9H2pZB.js`).then(e=>e.n),__vite__mapDeps([8,4]),import.meta.url),r(()=>import(`./state-DHqcnPk3.js`).then(e=>e.r),__vite__mapDeps([3,4]),import.meta.url),r(()=>import(`./renderScale-D8QaTA8H.js`).then(e=>e.nt),__vite__mapDeps([15,4,1,2,3,5,6,7,16,8,9,10]),import.meta.url),r(()=>import(`./plate-BZvVLg_9.js`).then(e=>e.r),__vite__mapDeps([16,4]),import.meta.url)]),l=o.garageLook;s.enterGarage(),a.titleOpen&&(o.garageLook=l),a.van&&c(a.van,i.profile.name),(e=a.tester)==null||e.nameChanged(i.profile.name),(t=a.player)==null||t.nameChanged(),(n=a.contact)==null||n.retry()}async function J(){if(p(`scAccount`).classList.add(`hide`),document.body.classList.remove(`kb`),T=null,O=!1,E=null,!(await r(()=>import(`./main-DtzO9dcx.js`).then(e=>e.t),__vite__mapDeps([17,4,1,2,3,5,6,7,15,16,8,9,10]),import.meta.url)).leaveTitle()){a(`ok`);let{renderGarage:e}=await r(async()=>{let{renderGarage:e}=await import(`./renderScale-D8QaTA8H.js`).then(e=>e.nt);return{renderGarage:e}},__vite__mapDeps([15,4,1,2,3,5,6,7,16,8,9,10]),import.meta.url);e()}}async function me(){if(k)return;if(!P){a(`deny`);return}k=!0,R(`del.busy`,null,!1),p(`acDel`).classList.add(`dis`);let e=!1;try{e=await(await b()).deleteAccount()}catch(t){e=!1}if(k=!1,!e){a(`deny`),R(`del.err.fail`),p(`acDel`).classList.toggle(`dis`,!P);return}D=!0,a(`ok`),B(`deldone`)}function he(){let e=C();A={pid:ie(),hasPw:!!e.hasPw,savedAt:e.savedAt||null}}function Y(e){i(`transfer`)||(he(),H(`info`,e))}function X(e){i(`transfer`)||H(`claim`,e)}function Z(e){H(`del1`,e)}function Q(){if(!_())return;let e=[...document.querySelectorAll(`#scSettings .setRow[data-soon]`)],n=e.find(e=>{var t;return((t=e.querySelector(`label`))==null?void 0:t.textContent)===`引き継ぎ`});n&&(n.removeAttribute(`data-soon`),n.id=`setRowTransfer`,n.querySelector(`.acts`).outerHTML=`<span class="pill am">${m(t(`settings.transfer.pill`))}</span>`,s(n,()=>Y()));let r=e.find(e=>{var t;return((t=e.querySelector(`label`))==null?void 0:t.textContent)===`アカウントの削除`});r&&(r.removeAttribute(`data-soon`),r.id=`setRowDelete`,s(r,()=>Z())),$()}function $(){var e;let n=(e=p(`setRowTransfer`))==null?void 0:e.querySelector(`.note`);if(!n)return;let r=C();n.innerHTML=`${m(t(`settings.transfer.note`))}<br>${m(r.savedAt?t(`settings.transfer.saved`,{when:w(r.savedAt)}):t(`settings.transfer.savedNone`))}`}var ge=!1;function _e(){if(ge)return;ge=!0;let e=document.createElement(`style`);e.textContent=te+`
  #scAccount.hide{display:none;}`,document.head.appendChild(e)}var ve=!1;function ye(){if(ve)return;ve=!0,_e();let e=document.createElement(`div`);e.className=`screen hide`,e.id=`scAccount`,document.body.appendChild(e),d()}export{$ as a,X as i,ne as n,d as o,Q as r,u as s,_ as t};