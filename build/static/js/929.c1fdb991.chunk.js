"use strict";(self.webpackChunksimple_admin_template_react=self.webpackChunksimple_admin_template_react||[]).push([[929],{1929:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var a=r(2982),s=r(885),d=r(2791),l=r(9135),m=(r(762),r(4335)),n=r(184);function i(e){var t,r,a,i,o,c,x,h=e.customers,p=e.assets,u=(0,d.useState)({openDialog:!1,user_id:"",itemSurname:"",itemOthernames:"",itemEmail:"",itemPhone:"",itemGender:"",itemAddress:"",itemDob:"",itemNin:"",itemBvn:"",itemMaritalStatus:""}),j=(0,s.Z)(u,2),N=j[0],y=j[1],f=(0,d.useState)(!0),b=(0,s.Z)(f,2),v=(b[0],b[1],(0,d.useState)([])),g=(0,s.Z)(v,2),S=g[0],A=g[1],O=(0,d.useState)([]),_=(0,s.Z)(O,2),k=_[0],I=_[1];(0,d.useEffect)((function(){A(p)}),[p]);return(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Welcome Trustees"}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"rounded-t-xl bg-gradient-to-r from-emerald-50 to-teal-100 p-10",children:h.length>1?(0,n.jsxs)("table",{className:"table-auto",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"sn"}),(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"Title"}),(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"Surname"}),(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"Othernames"}),(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"Email"}),(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"Phone"}),(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"Gender"})]})}),(0,n.jsx)("tbody",{children:h.map((function(e,t){return(0,n.jsxs)("tr",{children:[(0,n.jsxs)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:[t+1,"."]}),(0,n.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:e.title}),(0,n.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:e.surname}),(0,n.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:e.othernames}),(0,n.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:e.email}),(0,n.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:e.phone}),(0,n.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:e.gender}),(0,n.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:(0,n.jsx)(l.U41,{className:"text-emerald-600",onClick:function(){return function(e){y({openDialog:!0,itemUser:e.user_id,itemSurname:e.surname,itemOthernames:e.othernames,itemEmail:e.email,itemPhone:e.phone,itemGender:e.gender,itemAddress:e.address,itemDob:e.dob,itemNin:e.nin,itemBvn:e.bvn,itemMaritalStatus:e.marital_status});var t=S.filter((function(t){return t.user_id===e.user_id}));I(t)}(e)}})})]},t)}))})]}):(0,n.jsx)("div",{className:"flex justify-center items-center",children:"No data yet"})}),N.openDialog&&(0,n.jsxs)(m.u,{open:N,onClose:function(){return y({openDialog:!1})},center:!0,classNames:{overlay:"customOverlay",modal:"customModal",overlayAnimationIn:"customEnterOverlayAnimation",overlayAnimationOut:"customLeaveOverlayAnimation",modalAnimationIn:"customEnterModalAnimation",modalAnimationOut:"customLeaveModalAnimation"},animationDuration:800,children:[(0,n.jsx)("p",{children:"Customers Details"}),(0,n.jsx)("hr",{}),(0,n.jsx)("br",{}),(0,n.jsxs)("div",{className:"flex flex-row  rounded-t-xl bg-gradient-to-r from-emerald-50 to-teal-100 p-10",children:[(0,n.jsx)("div",{children:(0,n.jsxs)("table",{className:"table-auto",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"Surname"}),(0,n.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:N.itemSurname})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"Othernames"}),(0,n.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:N.itemOthernames})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"Email"}),(0,n.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:N.itemEmail})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"Phone"}),(0,n.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:null!==(t=N.itemPhone)&&void 0!==t?t:"-"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"Gender"}),(0,n.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:null!==(r=N.itemPhone)&&void 0!==r?r:"-"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"Address"}),(0,n.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:null!==(a=N.itemPhone)&&void 0!==a?a:"-"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"DOB"}),(0,n.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:null!==(i=N.itemPhone)&&void 0!==i?i:"-"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"NIN"}),(0,n.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:null!==(o=N.itemPhone)&&void 0!==o?o:"-"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"BVN"}),(0,n.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:null!==(c=N.itemPhone)&&void 0!==c?c:"-"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"Marital Status"}),(0,n.jsx)("td",{className:"border border-emerald-500 px-4 py-2 text-emerald-600 font-medium",children:null!==(x=N.itemPhone)&&void 0!==x?x:"-"})]})]})}),(0,n.jsx)("div",{style:{padding:"20px"}}),(0,n.jsxs)("div",{children:["Assets ",(0,n.jsx)("hr",{}),k.length<1?(0,n.jsx)("div",{className:"flex justify-center items-center p-2",children:"No Assets added yet"}):(0,n.jsxs)("table",{className:"table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"sn"}),(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"Asset Name"}),(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"Amount"}),(0,n.jsx)("th",{className:"px-4 py-2 text-emerald-600",children:"Currency"})]})}),(0,n.jsx)("tbody",{children:k.map((function(e,t){return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"px-4 py-2 text-emerald-600",children:t+1}),(0,n.jsx)("td",{className:"px-4 py-2 text-emerald-600",children:e.asset_name}),(0,n.jsx)("td",{className:"px-4 py-2 text-emerald-600",children:e.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),(0,n.jsx)("td",{className:"px-4 py-2 text-emerald-600",children:e.currency})]})}))})]})]})]})]})]})}var o=r(4569),c=r.n(o),x=r(9271);function h(){var e=(0,d.useState)([]),t=(0,s.Z)(e,2),r=t[0],l=t[1],m=(0,d.useState)([]),o=(0,s.Z)(m,2),h=o[0],p=o[1];return(0,d.useEffect)((function(){document.title="Home",c().get("https://mapp-asset-tracker.azurewebsites.net/api/v1/admin/customers",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){localStorage.setItem("customers",JSON.stringify(e.data.data)),l(e.data.data)})).catch((function(e){401==e.response.status&&(localStorage.removeItem("token"),localStorage.removeItem("customers"),x.l_)})),c().get("https://mapp-asset-tracker.azurewebsites.net/api/v1/admin/assets",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){localStorage.setItem("assets",JSON.stringify(e.data.data)),p((0,a.Z)(e.data.data))})).catch((function(e){401==e.response.status&&(localStorage.removeItem("token"),localStorage.removeItem("customers"),x.l_)}))}),[]),(0,n.jsx)("div",{children:(0,n.jsx)(i,{customers:r,assets:h})})}},762:function(e,t,r){e.exports=r.p+"static/media/1494.c3f9794ff1a34caa0fea.gif"}}]);
//# sourceMappingURL=929.c1fdb991.chunk.js.map