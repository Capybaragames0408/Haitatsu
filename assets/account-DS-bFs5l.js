const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cloudSave-CJA-65Rt.js","./supabaseProjects-yneler6a.js","./rules-D5shfcAq.js","./state-CW6ENMxH.js","./rolldown-runtime-DK3Fl9T5.js","./preload-helper-CaC3yEL3.js","./profile-Df8nAiPy.js","./messages-RFNGxm3V.js","./refs-Bh9H2pZB.js","./supabase-B5iYXkT9.js","./cloud-CoAiYsRE.js","./sbClient-BIPKzKXK.js","./flags-9q_0uEIo.js","./dist-DxukqvvO.js","./renderScale-De_46chI.js","./plate-C_pxHQS4.js","./main-BX-ZVIC8.js"])))=>i.map(i=>d[i]);
import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{r as t}from"./supabaseProjects-yneler6a.js";import{i as n}from"./rules-D5shfcAq.js";import{t as r}from"./preload-helper-CaC3yEL3.js";import{$ as i,Wt as a,it as o,nt as s,pt as c,st as l,tt as ee}from"./profile-Df8nAiPy.js";import"./supabase-B5iYXkT9.js";var te=[`scBug`,`scContact`,`scAccount`];function u(){let e=window.visualViewport,t=te.some(e=>{let t=document.getElementById(e);return t&&!t.classList.contains(`hide`)}),n=!!(e&&t&&e.height<innerHeight*.6);document.body.classList.toggle(`kb`,n),n&&(document.documentElement.style.setProperty(`--kb`,e.height+`px`),document.documentElement.style.setProperty(`--kbTop`,e.offsetTop+`px`))}var d=!1;function f(){!d&&window.visualViewport&&(d=!0,visualViewport.addEventListener(`resize`,u),visualViewport.addEventListener(`scroll`,u))}var ne=`
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
`,re=e({accountOn:()=>v,ensureAccountCss:()=>ye,initAccountRows:()=>Q,openClaim:()=>X,openDelete:()=>Z,openTransfer:()=>Y,renderTransferRow:()=>$}),p=()=>c()===`ios`,m=e=>document.getElementById(e),h=e=>String(e==null?``:e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),g=e=>`<svg class="ti" viewBox="0 0 24 24"><path d="${e}"/></svg>`,_={x:`M6 6l12 12M18 6L6 18`,back:`M15 5l-7 7 7 7`,next:`M9 5l7 7-7 7`,check:`M5 12.5l4.5 4.5L19 7.5`,camera:`M4 7h3l2-2h6l2 2h3v12H4zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z`,warn:`M12 7.5v6M12 16.8v.2`},ie=/^[0-9A-Za-z]{4,32}$/,v=()=>!!n.cloudSave&&!0,y=null,b=null,x=()=>y?Promise.resolve(y):r(()=>import(`./cloudSave-CJA-65Rt.js`).then(e=>y=e),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),S=()=>b?Promise.resolve(b):r(()=>import(`./cloud-CoAiYsRE.js`).then(e=>b=e),__vite__mapDeps([10,9,1,11,12,13]),import.meta.url),C=e=>{try{return JSON.parse(localStorage.getItem(e)||`null`)}catch(e){return null}},w=()=>C(`haitatsu.cloud.v1`)||{};function ae(){let e=w();if(e.pid)return e.pid;let t=C(`haitatsu.testerCode.v1`);return t&&(t.id||t.code)||null}var T=e=>{let t=new Date(e);return!e||isNaN(t)?``:`${t.getMonth()+1}/${t.getDate()} ${String(t.getHours()).padStart(2,`0`)}:${String(t.getMinutes()).padStart(2,`0`)}`},E=null,D=null,O=!1,k=!1,A=!1,j={pid:null,hasPw:!1,savedAt:null},M=!1,N=!1,P=!1,F=!1,I=``,L=(e,n,r,i=!0)=>`<div class="head"><div class="back${r?``:` hide`}" id="acBack">${g(_.back)}${h(t(`account.back`))}</div><h1>${h(e)}<small>${h(n)}</small></h1>${i?`<div class="backHint rt">${h(t(`common.backHint`))}</div>`:``}</div>`,oe=()=>`<div class="shot">${g(_.camera)}<span>${h(t(`transfer.shot`))}<small>${h(t(`transfer.shotNote`))}</small></span></div>`,se={info:()=>L(t(`transfer.title`),t(`transfer.titleSub`))+`<div class="view"><div class="main">
      <div class="left">
        <div class="card">
          <div class="row"><span class="cap">${h(t(`transfer.id`))}</span><span class="code" id="acPid">${h(j.pid||`—`)}</span><div class="btn gray" id="acCopy">${h(t(`transfer.copy`))}</div></div>
          <div class="row"><span class="cap">${h(t(`transfer.pw`))}</span>${j.hasPw?`<span class="val">${h(t(`transfer.pw.set`))}<small>${h(t(`transfer.pw.setNote`))}</small></span><div class="btn" id="acPwBtn">${h(t(`transfer.pw.change`))}</div>`:`<span class="val warn">${h(t(`transfer.pw.none`))}</span><div class="btn fill" id="acPwBtn">${h(t(`transfer.pw.make`))}</div>`}</div>
          <div class="row"><span class="cap">${h(t(`transfer.save`))}</span>${j.savedAt?`<span class="val"><span class="ok">${g(_.check)}</span>${h(t(`transfer.save.auto`))}<small>${h(t(`transfer.save.last`,{when:T(j.savedAt)}))}</small></span>`:`<span class="val">${h(t(`transfer.save.none`))}</span>`}</div>
        </div>
        ${oe()}
      </div>
      <div class="right">
        <div class="sec">${h(t(`transfer.how.head`))}</div>
        <div class="st"><i>1</i><span>${h(t(`transfer.how.1`))}</span></div>
        <div class="st"><i>2</i><span>${h(t(`transfer.how.2`))}</span></div>
        <div class="tip" style="margin-top:calc(4*var(--u))">${h(t(`transfer.how.same`))}</div>
      </div></div></div>`,pw:()=>L(t(M?`pw.title.change`:`pw.title.make`),t(`transfer.titleSub`),!0)+`<div class="view"><div class="main">
      <div class="left">
        <div class="fld"><div class="lbl">${h(t(`pw.new`))}</div><input id="acPw1" type="password" maxlength="32" placeholder="${h(t(`pw.new`))}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></div>
        <div class="fld"><div class="lbl">${h(t(`pw.again`))}</div><input id="acPw2" type="password" maxlength="32" placeholder="${h(t(`pw.again`))}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></div>
        <div class="rule">${h(t(`pw.rule`))}</div>
        <div class="tgl" id="acShow"><span class="box">${g(_.check)}</span>${h(t(`pw.show`))}</div>
      </div>
      <div class="right">
        <div class="tip">${h(t(M?`pw.note.change`:`pw.note.make`))}</div>
        <div class="status" id="acStatus"></div>
        <div class="send dis" id="acSend">${h(t(`pw.ok`))}</div>
      </div></div></div>`,pwdone:()=>L(t(`transfer.title`),t(`transfer.titleSub`))+`<div class="view center">
      <div class="mark">${g(_.check)}</div><div class="ttl">${h(t(M?`pw.done.change`:`pw.done.make`))}</div>
      <div class="card"><div class="row"><span class="cap">${h(t(`transfer.id`))}</span><span class="code">${h(j.pid||`—`)}</span></div><div class="row"><span class="cap">${h(t(`transfer.pw`))}</span><span class="code">${h(I)}</span></div></div>
      ${oe()}
      <div class="btns"><div class="btn" id="acDone">${h(t(`account.close`))}</div></div></div>`,claim:()=>L(t(`claim.title`),t(`claim.titleSub`))+`<div class="view"><div class="main">
      <div class="left">
        <div class="fld"><div class="lbl">${h(t(`claim.id`))}</div><input id="acId" type="text" maxlength="9" placeholder="${h(t(`claim.id`))}　${h(t(`claim.id.placeholder`))}" autocomplete="off" autocapitalize="characters" autocorrect="off" spellcheck="false"></div>
        <div class="fld"><div class="lbl">${h(t(`claim.pw`))}</div><input id="acPw" type="password" maxlength="32" placeholder="${h(t(`claim.pw`))}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></div>
        <div class="tgl" id="acShow"><span class="box">${g(_.check)}</span>${h(t(`pw.show`))}</div>
      </div>
      <div class="right">
        <div class="tip">${h(t(`claim.note`))}<br>${h(t(`claim.noteOnce`))}</div>
        <div class="status" id="acStatus"></div>
        <div class="send dis" id="acSend">${h(t(`claim.ok`))}</div>
      </div></div></div>`,claimdone:()=>L(t(`claim.title`),t(`claim.titleSub`))+`<div class="view center">
      <div class="mark">${g(_.check)}</div><div class="ttl">${h(t(`claim.done`))}</div><p class="sub">${h(t(P?`claim.done.once`:`claim.done.sub`))}</p>
      <div class="btns">${P?`<div class="btn" id="acOncePw">${h(t(`transfer.pw.make`))}</div>`:``}<div class="btn${P?` gray`:``}" id="acGo">${h(t(`claim.done.go`))}</div></div></div>`,del1:()=>L(t(`del.title`),t(`del.titleSub`))+`<div class="view del1"><div class="main">
      <div class="left">
        <div class="lead">${h(t(`del.lead`))}</div>
        <ul>${[`del.item1`,p()?`del.item2.ios`:`del.item2`,`del.item3`,`del.item4`,`del.backup`].map(e=>`<li>${h(t(e))}</li>`).join(``)}</ul>
        <div class="warn">${h(t(`del.warn`))}</div>
        <div class="pay">${h(t(p()?`del.pay.ios`:`del.pay`))}</div>
      </div>
      <div class="right"><div class="keep" id="acKeep">${h(t(`account.cancel`))}</div><div class="next" id="acNext">${h(t(`del.next`))}${g(_.next)}</div></div></div></div>`,del2:()=>L(t(`del.title`),t(`del.titleSub`),!0)+`<div class="view center del2">
      <div class="mark red">${g(_.warn)}</div><div class="ttl">${h(t(`del.q`))}</div><p class="sub">${h(t(`del.q.sub`))}</p>
      <div class="tgl${F?` on`:``}" id="acCheck"><span class="box">${g(_.check)}</span>${h(t(`del.check`))}</div>
      <div class="btns"><div class="btn" id="acKeep">${h(t(`account.cancel`))}</div><div class="send danger${F?``:` dis`}" id="acDel">${h(t(`del.ok`))}</div></div>
      <div class="status" id="acStatus"></div></div>`,deldone:()=>`<div class="view center"><div class="mark">${g(_.check)}</div><div class="ttl">${h(t(`del.done`))}</div><p class="sub">${h(t(`del.done.sub`))}</p><div class="btns"><div class="btn" id="acTitle">${h(t(`del.done.go`))}</div></div></div>`},R=(e,n,r=!0)=>{let i=m(`acStatus`);i&&(i.className=`status`+(e&&r?` err`:``),i.textContent=e?t(e,n):``)},z=()=>{try{window.location.reload()}catch(e){}};function B(e){E=e,A=!1;let t=m(`scAccount`);document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),t.innerHTML=se[e](),ce(e),u()}function V(){if(A)return;if(a(`back`),O){z();return}if(k){J();return}document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),m(`scAccount`).classList.add(`hide`),document.body.classList.remove(`kb`),E=null;let e=D;D=null,e&&e()}function H(e,t){return v()?(xe(),D=t||null,m(`scAccount`).classList.remove(`hide`),B(e),a(`ok`),!0):!1}function ce(e){if(e===`info`&&(o(m(`acCopy`),ue),o(m(`acPwBtn`),()=>{if(!j.pid){a(`deny`);return}M=j.hasPw,a(`ok`),B(`pw`)}),le()),e===`pw`){N=!1,o(m(`acBack`),()=>{a(`back`),B(k?`claimdone`:`info`)}),o(m(`acShow`),()=>U([`acPw1`,`acPw2`]));for(let e of[`acPw1`,`acPw2`])m(e).addEventListener(`input`,()=>{R(null),G()});o(m(`acSend`),de)}e===`pwdone`&&o(m(`acDone`),()=>{if(k){J();return}a(`back`),B(`info`)}),e===`claim`&&(N=!1,o(m(`acShow`),()=>U([`acPw`])),m(`acId`).addEventListener(`input`,()=>{fe(),R(null),q()}),m(`acPw`).addEventListener(`input`,()=>{R(null),q()}),o(m(`acSend`),pe)),e===`claimdone`&&(o(m(`acGo`),()=>J()),m(`acOncePw`)&&o(m(`acOncePw`),()=>{a(`ok`),M=!1,B(`pw`)})),e===`del1`&&(o(m(`acKeep`),V),o(m(`acNext`),()=>{F=!1,a(`ok`),B(`del2`)})),e===`del2`&&(o(m(`acBack`),()=>{A||(a(`back`),B(`del1`))}),o(m(`acKeep`),V),o(m(`acCheck`),()=>{A||(F=!F,a(`select`),m(`acCheck`).classList.toggle(`on`,F),m(`acDel`).classList.toggle(`dis`,!F))}),o(m(`acDel`),ge)),e===`deldone`&&o(m(`acTitle`),()=>{a(`ok`),z()})}async function le(){let e=null;try{e=await(await S()).accountStatus()}catch(t){e=null}if(E!==`info`||!e||e.error)return;if(e.status===`moved`){m(`scAccount`).classList.add(`hide`),E=null,(await x()).onMoved();return}if(e.status!==`ok`)return;let t={pid:e.player_id||j.pid,hasPw:!!e.has_password,savedAt:e.saved_at||j.savedAt};try{(await x()).setCloudState({hasPw:t.hasPw,...e.saved_at?{savedAt:Date.parse(e.saved_at)}:{}})}catch(e){}(t.pid!==j.pid||t.hasPw!==j.hasPw||t.savedAt!==j.savedAt)&&(j=t,B(`info`))}function ue(){let e=j.pid;if(!e){a(`deny`);return}a(`select`);let n=m(`acCopy`),r=()=>{n.textContent=t(`transfer.copied`),setTimeout(()=>{m(`acCopy`)===n&&(n.textContent=t(`transfer.copy`))},1500)},i=()=>{let e=document.createRange();e.selectNodeContents(m(`acPid`));let t=getSelection();t.removeAllRanges(),t.addRange(e)};navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(r).catch(i):i()}function U(e){N=!N,a(`select`),m(`acShow`).classList.toggle(`on`,N);for(let t of e){let e=m(t);e.type=N?`text`:`password`}}var W=()=>[m(`acPw1`).value,m(`acPw2`).value];function G(){let[e,t]=W();m(`acSend`).classList.toggle(`dis`,A||e.length<4||t.length<4)}async function de(){if(A)return;let[e,t]=W();if(e.length<4||t.length<4){a(`deny`),(e||t)&&R(`pw.err.short`);return}if(!ie.test(e)){a(`deny`),R(`pw.err.chars`);return}if(e!==t){a(`deny`),R(`pw.err.diff`);return}A=!0,R(`pw.busy`,null,!1),G();let n=null;try{n=await(await S()).setTransferPassword(e)}catch(e){n=null}if(A=!1,E===`pw`){if(typeof n!=`string`){R(`pw.err.fail`),G();return}I=e,j.pid=n||j.pid,j.hasPw=!0;try{(await x()).setCloudState({hasPw:!0})}catch(e){}a(`ok`),B(`pwdone`)}}function fe(){let e=m(`acId`),t=e.value.toUpperCase().replace(/[^0-9A-Z]/g,``).slice(0,8),n=t.length>4?t.slice(0,4)+`-`+t.slice(4):t;e.value!==n&&(e.value=n)}var K=()=>[m(`acId`).value.replace(/[^0-9A-Z]/gi,``).toUpperCase(),m(`acPw`).value];function q(){let[e,t]=K();m(`acSend`).classList.toggle(`dis`,A||e.length<8||!t)}function pe(){if(A)return;let[e,n]=K();if(e.length<8||!n){a(`deny`),R(`claim.err.empty`);return}l(`transfer`)||(m(`acId`).blur(),m(`acPw`).blur(),i(`<b>${h(t(`claim.confirm.q`))}</b>`,h(t(`claim.confirm.sub`)),t(`claim.ok`),()=>me(e,n),`ok`,t(`account.cancel`)))}async function me(e,t){if(E!==`claim`||A)return;A=!0,R(`claim.busy`,null,!1),q();let n=`${e.slice(0,4)}-${e.slice(4)}`,r=null;try{r=await(await S()).transferClaim(n,t)}catch(e){r=null}if(!r||r.error||!r.status){A=!1,R(`claim.err.fail`),q();return}if(r.status!==`ok`){A=!1,a(`deny`),r.status===`locked`?R(`claim.err.locked`,{when:T(r.until)}):r.status===`too_many`?R(`claim.err.tooMany`):R(`claim.err.wrong`),q();return}try{await(await x()).applyClaim(r.player_id||n),await he()}catch(e){}k=!0,P=!!r.one_time,j={pid:r.player_id||n,hasPw:!P,savedAt:null},A=!1,a(`ok`),B(`claimdone`)}async function he(){var e,t,n;let i=await r(()=>import(`./profile-Df8nAiPy.js`).then(e=>e.b),__vite__mapDeps([6,4,1,2,3,5]),import.meta.url);i.reloadProfile(),(await x()).resumeSync();let[{G:a},{S:o},s,{applyPlateName:c}]=await Promise.all([r(()=>import(`./refs-Bh9H2pZB.js`).then(e=>e.n),__vite__mapDeps([8,4]),import.meta.url),r(()=>import(`./state-CW6ENMxH.js`).then(e=>e.r),__vite__mapDeps([3,4]),import.meta.url),r(()=>import(`./renderScale-De_46chI.js`).then(e=>e.nt),__vite__mapDeps([14,4,1,2,3,5,6,7,15,8,9]),import.meta.url),r(()=>import(`./plate-C_pxHQS4.js`).then(e=>e.r),__vite__mapDeps([15,4]),import.meta.url)]),l=o.garageLook;s.enterGarage(),a.titleOpen&&(o.garageLook=l),a.van&&c(a.van,i.profile.name),(e=a.tester)==null||e.nameChanged(i.profile.name),(t=a.player)==null||t.nameChanged(),(n=a.contact)==null||n.retry()}async function J(){if(m(`scAccount`).classList.add(`hide`),document.body.classList.remove(`kb`),E=null,k=!1,D=null,!(await r(()=>import(`./main-BX-ZVIC8.js`).then(e=>e.t),__vite__mapDeps([16,4,1,2,3,5,6,7,14,15,8,9]),import.meta.url)).leaveTitle()){a(`ok`);let{renderGarage:e}=await r(async()=>{let{renderGarage:e}=await import(`./renderScale-De_46chI.js`).then(e=>e.nt);return{renderGarage:e}},__vite__mapDeps([14,4,1,2,3,5,6,7,15,8,9]),import.meta.url);e()}}async function ge(){if(A)return;if(!F){a(`deny`);return}A=!0,R(`del.busy`,null,!1),m(`acDel`).classList.add(`dis`);let e=!1;try{e=await(await x()).deleteAccount()}catch(t){e=!1}if(A=!1,!e){a(`deny`),R(`del.err.fail`),m(`acDel`).classList.toggle(`dis`,!F);return}O=!0,a(`ok`),B(`deldone`)}function _e(){let e=w();j={pid:ae(),hasPw:!!e.hasPw,savedAt:e.savedAt||null}}function Y(e){l(`transfer`)||(_e(),H(`info`,e))}function X(e){l(`transfer`)||H(`claim`,e)}function Z(e){H(`del1`,e)}function Q(){if(!v())return;let e=[...document.querySelectorAll(`#scSettings .setRow[data-soon]`)],n=e.find(e=>{var t;return((t=e.querySelector(`label`))==null?void 0:t.textContent)===`引き継ぎ`});n&&(n.removeAttribute(`data-soon`),n.id=`setRowTransfer`,n.querySelector(`.acts`).outerHTML=`<span class="pill am">${h(t(`settings.transfer.pill`))}</span>`,o(n,()=>Y()));let r=e.find(e=>{var t;return((t=e.querySelector(`label`))==null?void 0:t.textContent)===`アカウントの削除`});r&&(r.removeAttribute(`data-soon`),r.id=`setRowDelete`,o(r,()=>Z())),$()}function $(){var e;let n=(e=m(`setRowTransfer`))==null?void 0:e.querySelector(`.note`);if(!n)return;let r=w();n.innerHTML=`${h(t(`settings.transfer.note`))}<br>${h(r.savedAt?t(`settings.transfer.saved`,{when:T(r.savedAt)}):t(`settings.transfer.savedNone`))}`}var ve=!1;function ye(){if(ve)return;ve=!0;let e=document.createElement(`style`);e.textContent=ne+`
  #scAccount.hide{display:none;}`,document.head.appendChild(e)}var be=!1;function xe(){if(be)return;be=!0,ye();let e=document.createElement(`div`);e.className=`screen hide`,e.id=`scAccount`,s(e,()=>{e.querySelector(`.head .backHint`)&&V()},{isMargin:ee(e,[`head`,`view`,`main`,`left`,`right`,`center`]),busy:()=>A}),document.body.appendChild(e),f()}export{$ as a,X as i,re as n,f as o,Q as r,u as s,v as t};