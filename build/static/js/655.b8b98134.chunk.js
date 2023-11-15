"use strict";(self.webpackChunksimple_admin_template_react=self.webpackChunksimple_admin_template_react||[]).push([[655],{1655:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(885),r=a(2791),s=a(5861),l=a(7757),i=a.n(l),o=a(4335),d=a(4569),c=a.n(d),u=a(5568),m=(a(5462),a(184));function p(e){var t=e.estatePlans,a=e.customers,l=(0,r.useState)(!1),d=(0,n.Z)(l,2),p=d[0],x=d[1],h=(0,r.useState)(""),f=(0,n.Z)(h,2),j=f[0],b=f[1],v=(0,r.useState)(""),y=(0,n.Z)(v,2),N=y[0],g=y[1],S=(0,r.useState)(""),w=(0,n.Z)(S,2),A=w[0],C=w[1],k=(0,r.useState)(!1),_=(0,n.Z)(k,2),E=_[0],P=_[1],O=function(){var e=(0,s.Z)(i().mark((function e(t){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),P(!0),a={estate_plan:j,details:N,customer:A},e.next=5,c().post("https://mapp-asset-tracker.azurewebsites.net/api/v1/admin/estate-plans",a,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}});case 5:!0===e.sent.data.status&&(P(!1),x(!1),(0,u.Am)("Estate plans successfully created"),window.location.reload());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(e){return JSON.parse(localStorage.getItem("customers")).filter((function(t){return t.user_id==e}))[0].email};return(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:"Estate Plans"}),(0,m.jsx)("hr",{})," ",(0,m.jsx)("br",{}),(0,m.jsx)("button",{style:{backgroundColor:"blue",padding:"10px",color:"#fff",borderRadius:"5px"},className:"btn ",onClick:function(){return x(!0)},children:"+ New"}),(0,m.jsx)("div",{className:"rounded-t-xl bg-gradient-to-r from-emerald-50 to-teal-100 p-10",children:t.length>0?(0,m.jsxs)("table",{className:"table",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"sn"}),(0,m.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"Estate Plan"}),(0,m.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"Details"}),(0,m.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"Account"}),(0,m.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"createdAt"})]})}),(0,m.jsx)("tbody",{children:t.map((function(e,t){return(0,m.jsxs)("tr",{children:[(0,m.jsxs)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:[t+1,"."]}),(0,m.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:e.estate_plan}),(0,m.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:e.details}),(0,m.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:Z(e.user_id)}),(0,m.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:e.created_at.split("T")[0]})]},t)}))})]}):(0,m.jsx)("div",{className:"flex justify-center items-center pt-10",children:"No data yet"})}),p&&(0,m.jsxs)(o.u,{open:p,onClose:function(){return x(!1)},center:!0,classNames:{overlayAnimationIn:"customEnterOverlayAnimation",overlayAnimationOut:"customLeaveOverlayAnimation",modalAnimationIn:"customEnterModalAnimation",modalAnimationOut:"customLeaveModalAnimation"},animationDuration:800,children:[(0,m.jsx)("p",{children:"New Estate Plan"}),(0,m.jsx)("hr",{}),(0,m.jsx)("br",{}),(0,m.jsxs)("form",{onSubmit:O,children:[(0,m.jsx)("div",{children:(0,m.jsxs)("select",{onChange:function(e){return C(e.target.value)},className:"w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4",children:[(0,m.jsx)("option",{value:"",children:"Select Customer Email"}),a.map((function(e,t){return(0,m.jsx)("option",{value:e.id,children:e.email},t)}))]})}),(0,m.jsx)("div",{children:(0,m.jsx)("input",{type:"text",className:"w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4",id:"username",placeholder:"Estate Plan Name",onChange:function(e){return b(e.target.value)}})}),(0,m.jsx)("div",{children:(0,m.jsx)("textarea",{className:"w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4",id:"details",placeholder:"Tell us this user estate plan",onChange:function(e){return g(e.target.value)}})}),(0,m.jsx)("div",{className:"flex justify-center items-center mt-6",children:(0,m.jsx)("button",{style:{backgroundColor:"#008145"},className:"py-2 px-4 text-sm text-white rounded border  w-full",children:E?"Loading, Please wait...":"Create Estate Plan"})})]})]})]})}var x=a(9271);function h(){var e=(0,r.useState)([]),t=(0,n.Z)(e,2),a=t[0],s=t[1],l=(0,r.useState)([]),i=(0,n.Z)(l,2),o=i[0],d=i[1];return(0,r.useEffect)((function(){document.title="Estate Plans",c().get("https://mapp-asset-tracker.azurewebsites.net/api/v1/admin/estate-plans",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){s(e.data.data),d(JSON.parse(localStorage.getItem("customers")))})).catch((function(e){401==e.response.status&&(localStorage.clear(),x.l_)}))}),[]),(0,m.jsx)("div",{children:(0,m.jsx)(p,{estatePlans:a,customers:o})})}}}]);
//# sourceMappingURL=655.b8b98134.chunk.js.map