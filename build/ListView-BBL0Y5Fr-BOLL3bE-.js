import{u as N,o as R,aO as h,v,aq as F,bp as I,s as V,r as g,bx as D,j as e,P as i,b as T,L as p,b8 as b,bf as y,bY as x,bZ as L}from"./strapi-BCf4qKUQ.js";import{u as _}from"./useOnce-NHeEacbN-DzqSB-s6.js";import{c as U,d as B}from"./transferTokens-CXTFej3W-DHqk83ov.js";import{T as o}from"./constants-CRj0ViV1-Q2dfXdfa.js";import{T as H}from"./Table-DxU7QkUM-BgEdeFWd.js";const O=[{name:"name",label:{id:"Settings.tokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0},{name:"description",label:{id:"Settings.tokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1},{name:"createdAt",label:{id:"Settings.tokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1},{name:"lastUsedAt",label:{id:"Settings.tokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}],Y=()=>{const{formatMessage:s}=N(),{toggleNotification:a}=R(),j=h(n=>n.admin_app.permissions.settings?.["transfer-tokens"]),{isLoading:A,allowedActions:{canCreate:d,canDelete:S,canUpdate:w,canRead:l}}=v(j),u=F(),{trackUsage:r}=I(),{_unstableFormatAPIError:c}=V();g.useEffect(()=>{u({search:D.stringify({sort:"name:ASC"},{encode:!1})})},[u]),_(()=>{r("willAccessTokenList",{tokenType:o})});const M=O.map(n=>({...n,label:s(n.label)})),{data:t=[],isLoading:E,error:f}=U(void 0,{skip:!l});g.useEffect(()=>{t&&r("didAccessTokenList",{number:t.length,tokenType:o})},[r,t]),g.useEffect(()=>{f&&a({type:"danger",message:c(f)})},[f,c,a]);const[P]=B(),C=async n=>{try{const k=await P(n);"error"in k&&a({type:"danger",message:c(k.error)})}catch{a({type:"danger",message:s({id:"notification.error",defaultMessage:"An error occured"})})}},m=E||A;return e.jsxs(e.Fragment,{children:[e.jsx(i.Title,{children:s({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Transfer Tokens"})}),e.jsx(T.Header,{title:s({id:"Settings.transferTokens.title",defaultMessage:"Transfer Tokens"}),subtitle:s({id:"Settings.transferTokens.description",defaultMessage:'"List of generated transfer tokens"'}),primaryAction:d?e.jsx(p,{role:"button",tag:b,"data-testid":"create-transfer-token-button",startIcon:e.jsx(y,{}),size:"S",onClick:()=>r("willAddTokenFromList",{tokenType:o}),to:"/settings/transfer-tokens/create",children:s({id:"Settings.transferTokens.create",defaultMessage:"Create new Transfer Token"})}):void 0}),l?e.jsx(i.Main,{"aria-busy":m,children:e.jsxs(T.Content,{children:[t.length>0&&e.jsx(H,{permissions:{canRead:l,canDelete:S,canUpdate:w},headers:M,isLoading:m,onConfirmDelete:C,tokens:t,tokenType:o}),d&&t.length===0?e.jsx(x,{action:e.jsx(p,{tag:b,variant:"secondary",startIcon:e.jsx(y,{}),to:"/settings/transfer-tokens/create",children:s({id:"Settings.transferTokens.addNewToken",defaultMessage:"Add new Transfer Token"})}),icon:e.jsx(L,{width:"16rem"}),content:s({id:"Settings.transferTokens.addFirstToken",defaultMessage:"Add your first Transfer Token"})}):null,!d&&t.length===0?e.jsx(x,{icon:e.jsx(L,{width:"16rem"}),content:s({id:"Settings.transferTokens.emptyStateLayout",defaultMessage:"You don’t have any content yet..."})}):null]})}):e.jsx(i.NoPermissions,{})]})},K=()=>{const s=h(a=>a.admin_app.permissions.settings?.["transfer-tokens"].main);return e.jsx(i.Protect,{permissions:s,children:e.jsx(Y,{})})};export{Y as ListView,K as ProtectedListView};
