const __vite__fileDeps=["EventsTable-tnn84aiE-Wepizuos.js","strapi-BCf4qKUQ.js","strapi-COJtagOC.css","selectors-ZSFBgSp8-D97CcE-C.js","useWebhooks-C2yEtiSU-C_FTGrQI.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as B,bK as ee,bL as te,u as j,aK as se,aq as re,o as ae,s as ne,r as w,j as e,P as $,bb as oe,F as g,W as k,bM as ie,bN as L,bO as I,V as le,T as x,aW as M,bP as de,bQ as R,ab as P,by as ce,bz as ue,_ as he,b as H,U as _,bR as ge,a1 as z,bu as me,B as S,S as f,$ as be,h as O,l as E,bS as pe,aZ as V,b2 as q,aO as fe,bT as T,bU as xe,I as je,bV as we,bf as ye,aX as ke,aY as Se,bW as N,bG as ve}from"./strapi-BCf4qKUQ.js";import{s as Ee}from"./selectors-ZSFBgSp8-D97CcE-C.js";import{u as Me}from"./useWebhooks-C2yEtiSU-C_FTGrQI.js";const Ce=({children:t})=>{const{formatMessage:s}=j(),r=s({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return e.jsxs(g,{direction:"column",alignItems:"stretch",gap:1,children:[e.jsx(k.Label,{"aria-hidden":!0,children:r}),e.jsx(Ie,{"aria-label":r,children:t})]})},Ie=B(ee)`
  tbody tr:nth-child(odd) {
    background: ${({theme:t})=>t.colors.neutral100};
  }

  thead th span {
    color: ${({theme:t})=>t.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:t})=>t.spaces[3]};
    padding-block-end: ${({theme:t})=>t.spaces[3]};
    width: 6%;
    vertical-align: middle;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:t})=>t.spaces[2]};
  }
`,Re=()=>[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"},{id:"app.utils.publish",defaultMessage:"Publish"},{id:"app.utils.unpublish",defaultMessage:"Unpublish"}],Te=({getHeaders:t=Re})=>{const{formatMessage:s}=j(),r=t();return e.jsx(ie,{children:e.jsxs(L,{children:[e.jsx(I,{children:e.jsx(le,{children:s({id:"Settings.webhooks.event.select",defaultMessage:"Select event"})})}),r.map(n=>["app.utils.publish","app.utils.unpublish"].includes(n?.id??"")?e.jsx(I,{title:s({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"}),children:e.jsx(x,{variant:"sigma",textColor:"neutral600",children:s(n)})},n.id):e.jsx(I,{children:e.jsx(x,{variant:"sigma",textColor:"neutral600",children:s(n)})},n.id))]})})},Ae=({providedEvents:t})=>{const s=t||$e(),{value:r=[],onChange:n}=M("events"),h="events",o=r,a=[],u=o.reduce((l,c)=>{const i=c.split(".")[0];return l[i]||(l[i]=[]),l[i].push(c),l},{}),p=(l,c)=>{const i=new Set(o);c?i.add(l):i.delete(l),n(h,Array.from(i))},d=(l,c)=>{const i=new Set(o);c?s[l].forEach(m=>{a.includes(m)||i.add(m)}):s[l].forEach(m=>i.delete(m)),n(h,Array.from(i))};return e.jsx(de,{children:Object.entries(s).map(([l,c])=>e.jsx(D,{disabledEvents:a,name:l,events:c,inputValue:u[l],handleSelect:p,handleSelectAll:d},l))})},$e=()=>({entry:["entry.create","entry.update","entry.delete","entry.publish","entry.unpublish"],media:["media.create","media.update","media.delete"]}),D=({disabledEvents:t=[],name:s,events:r=[],inputValue:n=[],handleSelect:h,handleSelectAll:o})=>{const{formatMessage:a}=j(),u=r.filter(i=>!t.includes(i)),p=n.length>0,d=n.length===u.length,l=()=>{o(s,!d)},c=5;return e.jsxs(L,{children:[e.jsx(R,{children:e.jsx(P,{"aria-label":a({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:s,checked:p&&!d?"indeterminate":d,onCheckedChange:l,children:Fe(s)})}),r.map(i=>e.jsx(R,{textAlign:"center",children:e.jsx(g,{width:"100%",justifyContent:"center",children:e.jsx(P,{disabled:t.includes(i),"aria-label":i,name:i,checked:n.includes(i),onCheckedChange:m=>h(i,!!m)})})},i)),r.length<c&&e.jsx(R,{colSpan:c-r.length})]})},Fe=t=>t.replace(/-/g," ").split(" ").map(s=>s.charAt(0).toUpperCase()+s.slice(1).toLowerCase()).join(" "),A={Root:Ce,Headers:Te,Body:Ae,Row:D},Pe=()=>e.jsxs(A.Root,{children:[e.jsx(A.Headers,{}),e.jsx(A.Body,{})]}),He=B(te)`
  cursor: pointer;
`,_e=()=>{const{formatMessage:t}=j(),s=T("HeadersInput",a=>a.addFieldRow),r=T("HeadersInput",a=>a.removeFieldRow),n=T("HeadersInput",a=>a.onChange),{value:h=[]}=M("headers"),o=a=>{h.length===1?n("headers",[{key:"",value:""}]):r("headers",a)};return e.jsxs(g,{direction:"column",alignItems:"stretch",gap:1,children:[e.jsx(k.Label,{children:t({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})}),e.jsxs(S,{padding:8,background:"neutral100",hasRadius:!0,children:[h.map((a,u)=>e.jsxs(f.Root,{gap:4,padding:2,children:[e.jsx(f.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsx(Oe,{name:`headers.${u}.key`,"aria-label":`row ${u+1} key`,label:t({id:"Settings.webhooks.key",defaultMessage:"Key"})})}),e.jsx(f.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(g,{alignItems:"flex-end",gap:2,children:[e.jsx(S,{style:{flex:1},children:e.jsx(xe,{name:`headers.${u}.value`,"aria-label":`row ${u+1} value`,label:t({id:"Settings.webhooks.value",defaultMessage:"Value"}),type:"string"})}),e.jsx(je,{width:"4rem",height:"4rem",onClick:()=>o(u),color:"primary600",label:t({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:u+1}),type:"button",children:e.jsx(we,{width:"0.8rem"})})]})})]},`${u}-${JSON.stringify(a.key)}`)),e.jsx(S,{paddingTop:4,children:e.jsx(He,{type:"button",onClick:()=>{s("headers",{key:"",value:""})},startIcon:e.jsx(ye,{}),children:t({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"})})})]})]})},Oe=({name:t,label:s,...r})=>{const[n,h]=w.useState([...W]),{value:o}=M("headers"),a=M(t);w.useEffect(()=>{const d=W.filter(l=>!o?.some(c=>c.key!==a.value&&c.key===l));h(d)},[o,a.value]);const u=d=>{a.onChange(t,d)},p=d=>{h(l=>[...l,d]),u(d)};return e.jsxs(k.Root,{name:t,error:a.error,children:[e.jsx(k.Label,{children:s}),e.jsx(ke,{...r,onClear:()=>u(""),onChange:u,onCreateOption:p,placeholder:"",creatable:!0,value:a.value,children:n.map(d=>e.jsx(Se,{value:d,children:d},d))}),e.jsx(k.Error,{})]})},W=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],Ve=({isPending:t,onCancel:s,response:r})=>{const{statusCode:n,message:h}=r??{},{formatMessage:o}=j();return e.jsx(S,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0,children:e.jsxs(f.Root,{gap:4,style:{alignItems:"center"},children:[e.jsx(f.Item,{col:3,direction:"column",alignItems:"stretch",children:e.jsx(x,{children:o({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"})})}),e.jsx(f.Item,{col:3,direction:"column",alignItems:"stretch",children:e.jsx(qe,{isPending:t,statusCode:n})}),e.jsx(f.Item,{col:6,direction:"column",alignItems:"stretch",children:t?e.jsx(g,{justifyContent:"flex-end",children:e.jsx("button",{onClick:s,type:"button",children:e.jsxs(g,{gap:2,alignItems:"center",children:[e.jsx(x,{textColor:"neutral400",children:o({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})}),e.jsx(N,{fill:"neutral400",height:"1.2rem",width:"1.2rem"})]})})}):e.jsx(We,{statusCode:n,message:h})})]})})},qe=({isPending:t,statusCode:s})=>{const{formatMessage:r}=j();return t||!s?e.jsxs(g,{gap:2,alignItems:"center",children:[e.jsx(ve,{height:"1.2rem",width:"1.2rem"}),e.jsx(x,{children:r({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"})})]}):s>=200&&s<300?e.jsxs(g,{gap:2,alignItems:"center",children:[e.jsx(z,{fill:"success700",height:"1.2rem",width:"1.2rem"}),e.jsx(x,{children:r({id:"Settings.webhooks.trigger.success",defaultMessage:"success"})})]}):s>=300?e.jsxs(g,{gap:2,alignItems:"center",children:[e.jsx(N,{fill:"danger700",height:"1.2rem",width:"1.2rem"}),e.jsxs(x,{children:[r({id:"Settings.error",defaultMessage:"error"})," ",s]})]}):null},We=({statusCode:t,message:s})=>{const{formatMessage:r}=j();return t?t>=200&&t<300?e.jsx(g,{justifyContent:"flex-end",children:e.jsx(x,{textColor:"neutral600",ellipsis:!0,children:r({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"})})}):t>=300?e.jsx(g,{justifyContent:"flex-end",children:e.jsx(g,{maxWidth:"25rem",justifyContent:"flex-end",title:s,children:e.jsx(x,{ellipsis:!0,textColor:"neutral600",children:s})})}):null:null},Ue=({handleSubmit:t,triggerWebhook:s,isCreating:r,isTriggering:n,triggerResponse:h,data:o})=>{const{formatMessage:a}=j(),[u,p]=w.useState(!1),d=ce(Pe,async()=>(await ue(()=>import("./EventsTable-tnn84aiE-Wepizuos.js"),__vite__mapDeps([0,1,2,3,4]))).EventsTableEE),l=c=>Object.keys(c).length?Object.entries(c).map(([i,m])=>({key:i,value:m})):[{key:"",value:""}];return d?e.jsx(he,{initialValues:{name:o?.name||"",url:o?.url||"",headers:l(o?.headers||{}),events:o?.events||[]},method:r?"POST":"PUT",onSubmit:t,validationSchema:ze({formatMessage:a}),children:({isSubmitting:c,modified:i})=>e.jsxs(e.Fragment,{children:[e.jsx(H.Header,{primaryAction:e.jsxs(g,{gap:2,children:[e.jsx(_,{onClick:()=>{s(),p(!0)},variant:"tertiary",startIcon:e.jsx(ge,{}),disabled:r||n,children:a({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})}),e.jsx(_,{startIcon:e.jsx(z,{}),type:"submit",disabled:!i,loading:c,children:a({id:"global.save",defaultMessage:"Save"})})]}),title:r?a({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):o?.name,navigationAction:e.jsx(me,{})}),e.jsx(H.Content,{children:e.jsxs(g,{direction:"column",alignItems:"stretch",gap:4,children:[u&&e.jsx(Ve,{isPending:n,response:h,onCancel:()=>p(!1)}),e.jsx(S,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0,children:e.jsxs(g,{direction:"column",alignItems:"stretch",gap:6,children:[e.jsx(f.Root,{gap:6,children:[{label:a({id:"global.name",defaultMessage:"Name"}),name:"name",required:!0,size:6,type:"string"},{label:a({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),name:"url",required:!0,size:12,type:"string"}].map(({size:m,...v})=>e.jsx(f.Item,{col:m,direction:"column",alignItems:"stretch",children:e.jsx(be,{...v})},v.name))}),e.jsx(_e,{}),e.jsx(d,{})]})})]})})]})}):null},Be=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,Le=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,ze=({formatMessage:t})=>O().shape({name:E().nullable().required(t({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(Be,t({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:E().nullable().required(t({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(Le,t({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:pe(s=>{const r=V();if(s.length===1){const{key:n,value:h}=s[0];if(!n&&!h)return r}return r.of(O().shape({key:E().required(t({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})).nullable(),value:E().required(t({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"})).nullable()}))}),events:V()}),U=t=>({...t,headers:t.headers.reduce((s,{key:r,value:n})=>(r!==""&&(s[r]=n),s),{})}),G=()=>{const{formatMessage:t}=j(),r=se("/settings/webhooks/:id")?.params.id,n=r==="create",h=re(),{toggleNotification:o}=ae(),{_unstableFormatAPIError:a,_unstableFormatValidationErrors:u}=ne(),p=w.useCallback(a,[]),[d,l]=w.useState(!1),[c,i]=w.useState(),{isLoading:m,webhooks:v,error:C,createWebhook:K,updateWebhook:Z,triggerWebhook:X}=Me({id:r},{skip:n});w.useEffect(()=>{C&&o({type:"danger",message:p(C)})},[C,o,p]);const Q=async()=>{try{l(!0);const y=await X(r);if("error"in y){o({type:"danger",message:a(y.error)});return}i(y.data)}catch{o({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred"})})}finally{l(!1)}},J=async(y,F)=>{try{if(n){const b=await K(U(y));if("error"in b){q(b.error)&&b.error.name==="ValidationError"?F.setErrors(u(b.error)):o({type:"danger",message:a(b.error)});return}o({type:"success",message:t({id:"Settings.webhooks.created"})}),h(`../webhooks/${b.data.id}`,{replace:!0})}else{const b=await Z({id:r,...U(y)});if("error"in b){q(b.error)&&b.error.name==="ValidationError"?F.setErrors(u(b.error)):o({type:"danger",message:a(b.error)});return}o({type:"success",message:t({id:"notification.form.success.fields"})})}}catch{o({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred"})})}};if(m)return e.jsx($.Loading,{});const[Y]=v??[];return e.jsxs(oe,{children:[e.jsx($.Title,{children:t({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Webhooks"})}),e.jsx(Ue,{data:Y,handleSubmit:J,triggerWebhook:Q,isCreating:n,isTriggering:d,triggerResponse:c})]})},Ne=()=>{const t=fe(Ee);return e.jsx($.Protect,{permissions:t.settings?.webhooks.update,children:e.jsx(G,{})})},Ze=Object.freeze(Object.defineProperty({__proto__:null,EditPage:G,ProtectedEditPage:Ne},Symbol.toStringTag,{value:"Module"}));export{G as E,A as a,Ze as b};
