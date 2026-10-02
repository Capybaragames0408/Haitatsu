const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cloudSave-CbTrhk7D.js","./supabaseProjects-BgUl8FdP.js","./rules-C1GdDerI.js","./state-DHqcnPk3.js","./rolldown-runtime-DK3Fl9T5.js","./profile-D0chuRyl.js","./refs-Bh9H2pZB.js","./messages--pKCvSiE.js","./preload-helper-B7KpPA7i.js","./cloud-Cw8JeLoZ.js","./supabase-CxJS4nF1.js","./sbClient-C6J2Oq5w.js","./flags-CdU7mVjA.js","./dist-DxukqvvO.js","./renderScale-lH_q03vM.js","./plate-BZvVLg_9.js","./main-Do5UCKDT.js"])))=>i.map(i=>d[i]);
import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{r as t}from"./supabaseProjects-BgUl8FdP.js";import{i as n}from"./rules-C1GdDerI.js";import{Ot as r,Z as i}from"./profile-D0chuRyl.js";import{i as a,s as o,t as s}from"./preload-helper-B7KpPA7i.js";import"./supabase-CxJS4nF1.js";var c=[`scBug`,`scContact`,`scAccount`];function l(){let e=window.visualViewport,t=c.some(e=>{let t=document.getElementById(e);return t&&!t.classList.contains(`hide`)}),n=!!(e&&t&&e.height<innerHeight*.6);document.body.classList.toggle(`kb`,n),n&&(document.documentElement.style.setProperty(`--kb`,e.height+`px`),document.documentElement.style.setProperty(`--kbTop`,e.offsetTop+`px`))}var u=!1;function d(){!u&&window.visualViewport&&(u=!0,visualViewport.addEventListener(`resize`,l),visualViewport.addEventListener(`scroll`,l))}var ee=`
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
`,te=e({accountOn:()=>g,ensureAccountCss:()=>Q,initAccountRows:()=>Y,openClaim:()=>q,openDelete:()=>J,openTransfer:()=>K,renderTransferRow:()=>X}),f=e=>document.getElementById(e),p=e=>String(e==null?``:e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),m=e=>`<svg class="ti" viewBox="0 0 24 24"><path d="${e}"/></svg>`,h={x:`M6 6l12 12M18 6L6 18`,back:`M15 5l-7 7 7 7`,next:`M9 5l7 7-7 7`,check:`M5 12.5l4.5 4.5L19 7.5`,camera:`M4 7h3l2-2h6l2 2h3v12H4zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z`,warn:`M12 7.5v6M12 16.8v.2`},ne=/^[0-9A-Za-z]{4,32}$/,g=()=>!!n.cloudSave&&!0,_=null,v=null,y=()=>_?Promise.resolve(_):s(()=>import(`./cloudSave-CbTrhk7D.js`).then(e=>_=e),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),b=()=>v?Promise.resolve(v):s(()=>import(`./cloud-Cw8JeLoZ.js`).then(e=>v=e),__vite__mapDeps([9,10,1,11,12,13]),import.meta.url),x=e=>{try{return JSON.parse(localStorage.getItem(e)||`null`)}catch(e){return null}},S=()=>x(`haitatsu.cloud.v1`)||{};function re(){let e=S();if(e.pid)return e.pid;let t=x(`haitatsu.testerCode.v1`);return t&&(t.id||t.code)||null}var C=e=>{let t=new Date(e);return!e||isNaN(t)?``:`${t.getMonth()+1}/${t.getDate()} ${String(t.getHours()).padStart(2,`0`)}:${String(t.getMinutes()).padStart(2,`0`)}`},w=null,T=null,E=!1,D=!1,O=!1,k={pid:null,hasPw:!1,savedAt:null},A=!1,j=!1,M=!1,N=!1,ie=``,P=(e,n,r,i=!0)=>`<div class="head"><div class="back${r?``:` hide`}" id="acBack">${m(h.back)}${p(t(`account.back`))}</div><h1>${p(e)}<small>${p(n)}</small></h1>${i?`<div class="x" id="acX">${m(h.x)}</div>`:``}</div>`,F=()=>`<div class="shot">${m(h.camera)}<span>${p(t(`transfer.shot`))}<small>${p(t(`transfer.shotNote`))}</small></span></div>`,ae={info:()=>P(t(`transfer.title`),t(`transfer.titleSub`))+`<div class="view"><div class="main">
      <div class="left">
        <div class="card">
          <div class="row"><span class="cap">${p(t(`transfer.id`))}</span><span class="code" id="acPid">${p(k.pid||`—`)}</span><div class="btn gray" id="acCopy">${p(t(`transfer.copy`))}</div></div>
          <div class="row"><span class="cap">${p(t(`transfer.pw`))}</span>${k.hasPw?`<span class="val">${p(t(`transfer.pw.set`))}<small>${p(t(`transfer.pw.setNote`))}</small></span><div class="btn" id="acPwBtn">${p(t(`transfer.pw.change`))}</div>`:`<span class="val warn">${p(t(`transfer.pw.none`))}</span><div class="btn fill" id="acPwBtn">${p(t(`transfer.pw.make`))}</div>`}</div>
          <div class="row"><span class="cap">${p(t(`transfer.save`))}</span>${k.savedAt?`<span class="val"><span class="ok">${m(h.check)}</span>${p(t(`transfer.save.auto`))}<small>${p(t(`transfer.save.last`,{when:C(k.savedAt)}))}</small></span>`:`<span class="val">${p(t(`transfer.save.none`))}</span>`}</div>
        </div>
        ${F()}
      </div>
      <div class="right">
        <div class="sec">${p(t(`transfer.how.head`))}</div>
        <div class="st"><i>1</i><span>${p(t(`transfer.how.1`))}</span></div>
        <div class="st"><i>2</i><span>${p(t(`transfer.how.2`))}</span></div>
        <div class="tip" style="margin-top:calc(4*var(--u))">${p(t(`transfer.how.same`))}</div>
      </div></div></div>`,pw:()=>P(t(A?`pw.title.change`:`pw.title.make`),t(`transfer.titleSub`),!0)+`<div class="view"><div class="main">
      <div class="left">
        <div class="fld"><div class="lbl">${p(t(`pw.new`))}</div><input id="acPw1" type="password" maxlength="32" placeholder="${p(t(`pw.new`))}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></div>
        <div class="fld"><div class="lbl">${p(t(`pw.again`))}</div><input id="acPw2" type="password" maxlength="32" placeholder="${p(t(`pw.again`))}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></div>
        <div class="rule">${p(t(`pw.rule`))}</div>
        <div class="tgl" id="acShow"><span class="box">${m(h.check)}</span>${p(t(`pw.show`))}</div>
      </div>
      <div class="right">
        <div class="tip">${p(t(A?`pw.note.change`:`pw.note.make`))}</div>
        <div class="status" id="acStatus"></div>
        <div class="send dis" id="acSend">${p(t(`pw.ok`))}</div>
      </div></div></div>`,pwdone:()=>P(t(`transfer.title`),t(`transfer.titleSub`))+`<div class="view center">
      <div class="mark">${m(h.check)}</div><div class="ttl">${p(t(A?`pw.done.change`:`pw.done.make`))}</div>
      <div class="card"><div class="row"><span class="cap">${p(t(`transfer.id`))}</span><span class="code">${p(k.pid||`—`)}</span></div><div class="row"><span class="cap">${p(t(`transfer.pw`))}</span><span class="code">${p(ie)}</span></div></div>
      ${F()}
      <div class="btns"><div class="btn" id="acDone">${p(t(`account.close`))}</div></div></div>`,claim:()=>P(t(`claim.title`),t(`claim.titleSub`))+`<div class="view"><div class="main">
      <div class="left">
        <div class="fld"><div class="lbl">${p(t(`claim.id`))}</div><input id="acId" type="text" maxlength="9" placeholder="${p(t(`claim.id`))}　${p(t(`claim.id.placeholder`))}" autocomplete="off" autocapitalize="characters" autocorrect="off" spellcheck="false"></div>
        <div class="fld"><div class="lbl">${p(t(`claim.pw`))}</div><input id="acPw" type="password" maxlength="32" placeholder="${p(t(`claim.pw`))}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></div>
        <div class="tgl" id="acShow"><span class="box">${m(h.check)}</span>${p(t(`pw.show`))}</div>
      </div>
      <div class="right">
        <div class="tip">${p(t(`claim.note`))}<br>${p(t(`claim.noteOnce`))}</div>
        <div class="status" id="acStatus"></div>
        <div class="send dis" id="acSend">${p(t(`claim.ok`))}</div>
      </div></div></div>`,claimdone:()=>P(t(`claim.title`),t(`claim.titleSub`))+`<div class="view center">
      <div class="mark">${m(h.check)}</div><div class="ttl">${p(t(`claim.done`))}</div><p class="sub">${p(t(M?`claim.done.once`:`claim.done.sub`))}</p>
      <div class="btns">${M?`<div class="btn" id="acOncePw">${p(t(`transfer.pw.make`))}</div>`:``}<div class="btn${M?` gray`:``}" id="acGo">${p(t(`claim.done.go`))}</div></div></div>`,del1:()=>P(t(`del.title`),t(`del.titleSub`))+`<div class="view del1"><div class="main">
      <div class="left">
        <div class="lead">${p(t(`del.lead`))}</div>
        <ul>${[`del.item1`,`del.item2`,`del.item3`,`del.item4`,`del.backup`].map(e=>`<li>${p(t(e))}</li>`).join(``)}</ul>
        <div class="warn">${p(t(`del.warn`))}</div>
        <div class="pay">${p(t(`del.pay`))}</div>
      </div>
      <div class="right"><div class="keep" id="acKeep">${p(t(`account.cancel`))}</div><div class="next" id="acNext">${p(t(`del.next`))}${m(h.next)}</div></div></div></div>`,del2:()=>P(t(`del.title`),t(`del.titleSub`),!0)+`<div class="view center del2">
      <div class="mark red">${m(h.warn)}</div><div class="ttl">${p(t(`del.q`))}</div><p class="sub">${p(t(`del.q.sub`))}</p>
      <div class="tgl${N?` on`:``}" id="acCheck"><span class="box">${m(h.check)}</span>${p(t(`del.check`))}</div>
      <div class="btns"><div class="btn" id="acKeep">${p(t(`account.cancel`))}</div><div class="send danger${N?``:` dis`}" id="acDel">${p(t(`del.ok`))}</div></div>
      <div class="status" id="acStatus"></div></div>`,deldone:()=>`<div class="view center"><div class="mark">${m(h.check)}</div><div class="ttl">${p(t(`del.done`))}</div><p class="sub">${p(t(`del.done.sub`))}</p><div class="btns"><div class="btn" id="acTitle">${p(t(`del.done.go`))}</div></div></div>`},I=(e,n,r=!0)=>{let i=f(`acStatus`);i&&(i.className=`status`+(e&&r?` err`:``),i.textContent=e?t(e,n):``)},L=()=>{try{window.location.reload()}catch(e){}};function R(e){w=e,O=!1;let t=f(`scAccount`);document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),t.innerHTML=ae[e](),oe(e),l()}function z(){if(O)return;if(r(`back`),E){L();return}if(D){G();return}document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),f(`scAccount`).classList.add(`hide`),document.body.classList.remove(`kb`),w=null;let e=T;T=null,e&&e()}function B(e,t){return g()?(_e(),T=t||null,f(`scAccount`).classList.remove(`hide`),R(e),r(`ok`),!0):!1}function oe(e){if(f(`acX`)&&o(f(`acX`),z),e===`info`&&(o(f(`acCopy`),ce),o(f(`acPwBtn`),()=>{if(!k.pid){r(`deny`);return}A=k.hasPw,r(`ok`),R(`pw`)}),se()),e===`pw`){j=!1,o(f(`acBack`),()=>{r(`back`),R(D?`claimdone`:`info`)}),o(f(`acShow`),()=>V([`acPw1`,`acPw2`]));for(let e of[`acPw1`,`acPw2`])f(e).addEventListener(`input`,()=>{I(null),U()});o(f(`acSend`),le)}e===`pwdone`&&o(f(`acDone`),()=>{if(D){G();return}r(`back`),R(`info`)}),e===`claim`&&(j=!1,o(f(`acShow`),()=>V([`acPw`])),f(`acId`).addEventListener(`input`,()=>{ue(),I(null),W()}),f(`acPw`).addEventListener(`input`,()=>{I(null),W()}),o(f(`acSend`),fe)),e===`claimdone`&&(o(f(`acGo`),()=>G()),f(`acOncePw`)&&o(f(`acOncePw`),()=>{r(`ok`),A=!1,R(`pw`)})),e===`del1`&&(o(f(`acKeep`),z),o(f(`acNext`),()=>{N=!1,r(`ok`),R(`del2`)})),e===`del2`&&(o(f(`acBack`),()=>{O||(r(`back`),R(`del1`))}),o(f(`acKeep`),z),o(f(`acCheck`),()=>{O||(N=!N,r(`select`),f(`acCheck`).classList.toggle(`on`,N),f(`acDel`).classList.toggle(`dis`,!N))}),o(f(`acDel`),he)),e===`deldone`&&o(f(`acTitle`),()=>{r(`ok`),L()})}async function se(){let e=null;try{e=await(await b()).accountStatus()}catch(t){e=null}if(w!==`info`||!e||e.error)return;if(e.status===`moved`){f(`scAccount`).classList.add(`hide`),w=null,(await y()).onMoved();return}if(e.status!==`ok`)return;let t={pid:e.player_id||k.pid,hasPw:!!e.has_password,savedAt:e.saved_at||k.savedAt};try{(await y()).setCloudState({hasPw:t.hasPw,...e.saved_at?{savedAt:Date.parse(e.saved_at)}:{}})}catch(e){}(t.pid!==k.pid||t.hasPw!==k.hasPw||t.savedAt!==k.savedAt)&&(k=t,R(`info`))}function ce(){let e=k.pid;if(!e){r(`deny`);return}r(`select`);let n=f(`acCopy`),i=()=>{n.textContent=t(`transfer.copied`),setTimeout(()=>{f(`acCopy`)===n&&(n.textContent=t(`transfer.copy`))},1500)},a=()=>{let e=document.createRange();e.selectNodeContents(f(`acPid`));let t=getSelection();t.removeAllRanges(),t.addRange(e)};navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(i).catch(a):a()}function V(e){j=!j,r(`select`),f(`acShow`).classList.toggle(`on`,j);for(let t of e){let e=f(t);e.type=j?`text`:`password`}}var H=()=>[f(`acPw1`).value,f(`acPw2`).value];function U(){let[e,t]=H();f(`acSend`).classList.toggle(`dis`,O||e.length<4||t.length<4)}async function le(){if(O)return;let[e,t]=H();if(e.length<4||t.length<4){r(`deny`),(e||t)&&I(`pw.err.short`);return}if(!ne.test(e)){r(`deny`),I(`pw.err.chars`);return}if(e!==t){r(`deny`),I(`pw.err.diff`);return}O=!0,I(`pw.busy`,null,!1),U();let n=null;try{n=await(await b()).setTransferPassword(e)}catch(e){n=null}if(O=!1,w===`pw`){if(typeof n!=`string`){I(`pw.err.fail`),U();return}ie=e,k.pid=n||k.pid,k.hasPw=!0;try{(await y()).setCloudState({hasPw:!0})}catch(e){}r(`ok`),R(`pwdone`)}}function ue(){let e=f(`acId`),t=e.value.toUpperCase().replace(/[^0-9A-Z]/g,``).slice(0,8),n=t.length>4?t.slice(0,4)+`-`+t.slice(4):t;e.value!==n&&(e.value=n)}var de=()=>[f(`acId`).value.replace(/[^0-9A-Z]/gi,``).toUpperCase(),f(`acPw`).value];function W(){let[e,t]=de();f(`acSend`).classList.toggle(`dis`,O||e.length<8||!t)}function fe(){if(O)return;let[e,n]=de();if(e.length<8||!n){r(`deny`),I(`claim.err.empty`);return}i(`transfer`)||(f(`acId`).blur(),f(`acPw`).blur(),a(`<b>${p(t(`claim.confirm.q`))}</b>`,p(t(`claim.confirm.sub`)),t(`claim.ok`),()=>pe(e,n),`ok`,t(`account.cancel`)))}async function pe(e,t){if(w!==`claim`||O)return;O=!0,I(`claim.busy`,null,!1),W();let n=`${e.slice(0,4)}-${e.slice(4)}`,i=null;try{i=await(await b()).transferClaim(n,t)}catch(e){i=null}if(!i||i.error||!i.status){O=!1,I(`claim.err.fail`),W();return}if(i.status!==`ok`){O=!1,r(`deny`),i.status===`locked`?I(`claim.err.locked`,{when:C(i.until)}):i.status===`too_many`?I(`claim.err.tooMany`):I(`claim.err.wrong`),W();return}try{await(await y()).applyClaim(i.player_id||n),await me()}catch(e){}D=!0,M=!!i.one_time,k={pid:i.player_id||n,hasPw:!M,savedAt:null},O=!1,r(`ok`),R(`claimdone`)}async function me(){var e,t,n;let r=await s(()=>import(`./profile-D0chuRyl.js`).then(e=>e.y),__vite__mapDeps([5,4,1,2,3]),import.meta.url);r.reloadProfile(),(await y()).resumeSync();let[{G:i},{S:a},o,{applyPlateName:c}]=await Promise.all([s(()=>import(`./refs-Bh9H2pZB.js`).then(e=>e.n),__vite__mapDeps([6,4]),import.meta.url),s(()=>import(`./state-DHqcnPk3.js`).then(e=>e.r),__vite__mapDeps([3,4]),import.meta.url),s(()=>import(`./renderScale-lH_q03vM.js`).then(e=>e.st),__vite__mapDeps([14,4,1,15,2,3,5,6,7,8,10]),import.meta.url),s(()=>import(`./plate-BZvVLg_9.js`).then(e=>e.r),__vite__mapDeps([15,4]),import.meta.url)]),l=a.garageLook;o.enterGarage(),i.titleOpen&&(a.garageLook=l),i.van&&c(i.van,r.profile.name),(e=i.tester)==null||e.nameChanged(r.profile.name),(t=i.player)==null||t.nameChanged(),(n=i.contact)==null||n.retry()}async function G(){if(f(`scAccount`).classList.add(`hide`),document.body.classList.remove(`kb`),w=null,D=!1,T=null,!(await s(()=>import(`./main-Do5UCKDT.js`).then(e=>e.t),__vite__mapDeps([16,4,1,15,12,2,3,5,6,14,7,8,10]),import.meta.url)).leaveTitle()){r(`ok`);let{renderGarage:e}=await s(async()=>{let{renderGarage:e}=await import(`./renderScale-lH_q03vM.js`).then(e=>e.st);return{renderGarage:e}},__vite__mapDeps([14,4,1,15,2,3,5,6,7,8,10]),import.meta.url);e()}}async function he(){if(O)return;if(!N){r(`deny`);return}O=!0,I(`del.busy`,null,!1),f(`acDel`).classList.add(`dis`);let e=!1;try{e=await(await y()).deleteAccount()}catch(t){e=!1}if(O=!1,!e){r(`deny`),I(`del.err.fail`),f(`acDel`).classList.toggle(`dis`,!N);return}E=!0,r(`ok`),R(`deldone`)}function ge(){let e=S();k={pid:re(),hasPw:!!e.hasPw,savedAt:e.savedAt||null}}function K(e){i(`transfer`)||(ge(),B(`info`,e))}function q(e){i(`transfer`)||B(`claim`,e)}function J(e){B(`del1`,e)}function Y(){if(!g())return;let e=[...document.querySelectorAll(`#scSettings .setRow[data-soon]`)],n=e.find(e=>{var t;return((t=e.querySelector(`label`))==null?void 0:t.textContent)===`引き継ぎ`});n&&(n.removeAttribute(`data-soon`),n.id=`setRowTransfer`,n.querySelector(`.acts`).outerHTML=`<span class="pill am">${p(t(`settings.transfer.pill`))}</span>`,o(n,()=>K()));let r=e.find(e=>{var t;return((t=e.querySelector(`label`))==null?void 0:t.textContent)===`アカウントの削除`});r&&(r.removeAttribute(`data-soon`),r.id=`setRowDelete`,o(r,()=>J())),X()}function X(){var e;let n=(e=f(`setRowTransfer`))==null?void 0:e.querySelector(`.note`);if(!n)return;let r=S();n.innerHTML=`${p(t(`settings.transfer.note`))}<br>${p(r.savedAt?t(`settings.transfer.saved`,{when:C(r.savedAt)}):t(`settings.transfer.savedNone`))}`}var Z=!1;function Q(){if(Z)return;Z=!0;let e=document.createElement(`style`);e.textContent=ee+`
  #scAccount.hide{display:none;}`,document.head.appendChild(e)}var $=!1;function _e(){if($)return;$=!0,Q();let e=document.createElement(`div`);e.className=`screen hide`,e.id=`scAccount`,document.body.appendChild(e),d()}export{X as a,q as i,te as n,d as o,Y as r,l as s,g as t};