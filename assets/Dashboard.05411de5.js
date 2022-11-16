import{A as G}from"./AdminBreadcrumb.67b9a502.js";import{h as M,i as P,j as R,k as C,l as O,m as T,p as H,_ as b,r as _,o as c,q as g,c as d,a as $,s as B,b as t,t as z,u as p,n as E}from"./index.e276e35f.js";const k="https://www.gstatic.com/charts/loader.js";let w=null;const x=new Map;function j(){return window.google!==void 0?Promise.resolve(window.google.charts):(w===null&&(w=new Promise(e=>{const o=document.querySelector('script[src="'.concat(k,'"]')),n=o||document.createElement("script");o||(n.src=k,n.type="text/javascript",document.head.append(n)),n.onload=()=>{window.google!==void 0&&e(window.google.charts)}})),w)}async function V(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"current",{packages:o=["corechart","controls"],language:n="en",mapsApiKey:a}=arguments.length>1?arguments[1]:void 0;const s=await j(),r="".concat(e,"_").concat(o.join("_"),"_").concat(n);if(x.has(r))return x.get(r);const i=new Promise(h=>{s.load(e,{packages:o,language:n,mapsApiKey:a}),s.setOnLoadCallback(()=>h(window.google))});return x.set(r,i),i}function F(e,o,n){return e!==null&&o instanceof e.visualization.DataTable||e!==null&&o instanceof e.visualization.DataView?o:e!==null&&Array.isArray(o)?e.visualization.arrayToDataTable(o,n):e!==null&&o!==null&&typeof o=="object"?new e.visualization.DataTable(o):null}function A(e,o,n,a,s,r){const i=(m,l,u)=>{if(u===void 0)throw new Error("please, provide chart type property");return new l.visualization[u](m)};if(e===null)throw new Error("please, provide charts lib property");if(n===null)throw new Error("please, provide chart element property");return o=(r||i)(n,e,a),N(e,o,s),o}function N(e,o,n){if(n!==null)for(const[a,s]of Object.entries(n))e!==null&&o!==null&&e.visualization.events.addListener(o,a,s)}function S(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:50,n;function a(){return o}return function(){for(var r=arguments.length,i=new Array(r),h=0;h<r;h++)i[h]=arguments[h];const m=this,l=function(){n=void 0,e.apply(m,i)};n!==void 0&&clearTimeout(n),n=setTimeout(l,a())}}let f=null;const y=M({name:"GChart",props:{type:{type:String,required:!0},data:{type:[Array,Object,null],default:()=>[]},isFirstRowLabels:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},version:{type:String,default:"current"},settings:{type:Object,default:()=>({packages:["corechart","table"]})},events:{type:Object,default:null},createChart:{type:Function,default:void 0},resizeDebounce:{type:Number,default:200}},setup(e,o){let{emit:n}=o;const a=R(null),s=R(null);function r(){if(f===null||a.value===null)return;const i=F(f,e.data,e.isFirstRowLabels);if(i!==null){var h;(h=a.value)===null||h===void 0||h.draw(i,e.options)}}return C(()=>e.data,()=>r(),{deep:!0}),C(()=>e.options,()=>r(),{deep:!0}),C(()=>e.type,()=>{a.value=A(f,a.value,s.value,e.type,e.events,e.createChart),r()}),O(()=>{V(e.version,e.settings).then(i=>{i!==void 0&&(f=i,a.value=A(f,a.value,s.value,e.type,e.events,e.createChart),n("ready",a.value,i),r())}),e.resizeDebounce>0&&window.addEventListener("resize",S(r,e.resizeDebounce))}),T(()=>{a.value!==null&&typeof a.value.clearChart=="function"&&a.value.clearChart(),e.resizeDebounce>0&&window.removeEventListener("resize",S(r,e.resizeDebounce))}),()=>H("div",{ref:s},[])}}),L=P({});function q(){L.component("GChart",y)}const U={version:"1.1.0",install:q};let D=null;typeof window<"u"&&(D=window.Vue);D!=null&&L.use(U);const K={props:["chartData"],components:{GChart:y},data(){return{options:{chartArea:{left:"100",width:"100%",height:"100%"},legend:{textStyle:{fontSize:14,bold:!0}},slices:{0:{color:"#028090"},1:{color:"#d90429"}},is3D:!0}}}};function W(e,o,n,a,s,r){const i=_("GChart");return c(),g(i,{type:"PieChart",data:n.chartData,options:s.options},null,8,["data","options"])}const I=b(K,[["render",W]]),X={props:["chartData"],components:{GChart:y},data(){return{options:{hAxis:{textStyle:{fontSize:14,bold:!0}},vAxis:{textStyle:{fontSize:14,bold:!0}},chartArea:{width:"90%"},legend:{position:"none"},colors:["#028090"],axes:{x:{0:{side:"top",label:"White to move"}}},bar:{groupWidth:"90%"}}}}};function J(e,o,n,a,s,r){const i=_("GChart");return c(),g(i,{type:"ColumnChart",data:n.chartData,options:s.options},null,8,["data","options"])}const Q=b(X,[["render",J]]),Y={props:["chartData"],components:{GChart:y},data(){return{options:{hAxis:{textStyle:{fontSize:14,bold:!0}},vAxis:{format:"0",textStyle:{fontSize:14,bold:!0}},chartArea:{width:"95%"},colors:["#028090"],legend:{position:"none"}}}}};function Z(e,o,n,a,s,r){const i=_("GChart");return c(),g(i,{type:"LineChart",data:n.chartData,options:s.options},null,8,["data","options"])}const ee=b(Y,[["render",Z]]),te={components:{AdminBreadcrumb:G,GenderChart:I,MostCaseServes:Q,DaysAgoReserves:ee},data(){return{isLoading:!1,counting:!0,cases:[],allReserves:[],pagination:{},currentPage:1,dashboard:{product:{enabledDisplayCase:0,handlingCase:0,closedCases:0},reserve:{unHandleReserve:0,todayReserve:0}},genderChartData:[],mostCaseChartData:[],daysAgoReservesChartData:[]}},methods:{getCaseList(){this.isLoading=!0,this.$http.get("https://vue3-course-api.hexschool.io/v2//api/found_houses_v2/products/all").then(e=>{this.cases=e.data.products,this.dashboard.product.handlingCase=this.getHandlingCase(this.cases),this.dashboard.product.closedCases=this.getclosedCase(this.cases),this.isLoading=!1}).catch(e=>{this.$httpMessageState(e.response,"\u932F\u8AA4\u8A0A\u606F"),this.isLoading=!1})},getHandlingCase(e){return e.filter(n=>n.is_enabled==="2").length},getclosedCase(e){return e.filter(n=>n.is_enabled==="3").length},getReservesList(e=1){this.$http.get(`https://vue3-course-api.hexschool.io/v2//api/found_houses_v2/admin/orders/?page=${e}`).then(o=>{if(this.reserves=o.data.orders,this.pagination=o.data.pagination,this.reserves.forEach(n=>{this.allReserves.push(n)}),this.currentPage<this.pagination.total_pages){this.counting=!0,this.currentPage++,this.getReservesList(this.currentPage);return}this.dashboard.reserve.unHandleReserve=this.getUnHandleCount(this.allReserves),this.dashboard.reserve.todayReserve=this.getTodayReserveCount(this.allReserves),this.genderChartData=this.formatGenderChartData(),this.mostCaseChartData=this.formatMostCaseChartData(),this.daysAgoReservesChartData=this.formatDaysAgoReserves(10),this.counting=!1}).catch(o=>{this.isLoading=!1,this.$httpMessageState(o.response,"\u932F\u8AA4\u8A0A\u606F")})},getUnHandleCount(e){return e.filter(n=>n.is_paid===!1).length},getTodayReserveCount(e){const o=this.$moment.moment().startOf("day"),n=this.$moment.moment().endOf("day");return e.filter(s=>this.$moment.moment.unix(s.create_at).isBetween(o,n)).length},formatReservesData(e){let o=[];return e.map((n,a)=>{const s=e[a].products;Object.keys(s).forEach(r=>{const i=s[r];o.push(i.product)})}),o},formatGenderChartData(){let e=[];const o=["\u6027\u5225","\u4EBA\u6578"];let n=this.allReserves.reduce((a,s)=>(s.user.gender==="1"?a.\u7537++:a.\u5973++,a),{\u7537:0,\u5973:0});return n=Object.entries(n),e=[o,...n],e},formatMostCaseChartData(){let e=[];const o=["\u6848\u4EF6\u540D\u7A31","\u6848\u4EF6\u6578"];let a=this.formatReservesData(this.allReserves).reduce((s,r)=>(s[r.title]=s[r.title]?s[r.title]+1:1,s),{});return a=Object.entries(a),a.sort((s,r)=>r[1]-s[1]),a=a.slice(0,5),e=[o,...a],e},formatDaysAgoReserves(e){let o=[];const n=["\u65E5\u671F","\u6578\u91CF"],a=[];for(let l=0;l<=e;l++)a.push([this.$moment.moment().subtract(l,"days").format("MM/DD")]);const s=this.$moment.moment().subtract(e,"days").format("MM/DD");let r=this.allReserves.reduce((l,u)=>{const v=this.$moment.moment(u.create_at*1e3).format("MM/DD");return v>=s&&(l[v]=l[v]?l[v]+1:1),l},{});r=Object.entries(r);let i=[],h=r.map(l=>l[0]),m=r.map(l=>l[1]);return a.forEach(l=>{const u=h.indexOf(l[0]);return u!==-1?i.push([l[0],m[u]]):i.push([l[0],0])}),i.reverse(),o=[n,...i],o}},computed:{enabledDisplayCase(){return this.cases.filter(e=>e.is_enabled==1)}},mounted(){this.getCaseList(),this.getReservesList(this.currentPage)}},se={class:"main-content container-fluid px-4 bg-light"},oe=t("h3",{class:"my-4 fw-bold"},"\u9996\u9801",-1),ne={class:"row mb-4"},ae={class:"col-12 col-lg-4"},re={class:"card border-0 shadow-sm"},ie={class:"card-body"},ce={class:"align-items-center row"},le={class:"col"},de=t("h5",{class:"text-uppercase mb-3 fw-bold text-primary"},"\u7E3D\u8AEE\u8A62\u6578",-1),he={key:0,class:"h2 mb-0"},ue={key:1,class:"h2 mb-0"},_e=t("div",{class:"col-auto"},[t("i",{class:"bi bi-pencil-square fs-2 text-primary"})],-1),me={class:"col-12 col-lg-4"},pe={class:"card border-0 shadow-sm"},ge={class:"card-body"},fe={class:"align-items-center row"},ve={class:"col"},be=t("h5",{class:"text-uppercase mb-3 text-secondary fw-bold"}," \u672A\u8655\u7406\u8AEE\u8A62\u6578 ",-1),ye={key:0,class:"h2 mb-0 text-secondary"},Ce={key:1,class:"h2 mb-0 text-secondary"},we=t("div",{class:"col-auto"},[t("i",{class:"bi bi-bell fs-2 text-secondary"})],-1),xe={class:"col-12 col-lg-4"},De={class:"card border-0 shadow-sm"},Re={class:"card-body"},ke={class:"align-items-center row"},Ae={class:"col"},Se=t("h5",{class:"text-uppercase mb-3 text-success fw-bold"},"\u4ECA\u65E5\u8AEE\u8A62\u6578",-1),ze={key:0,class:"h2 mb-0 text-success"},Le={key:1,class:"h2 mb-0 text-success"},Ge=t("div",{class:"col-auto"},[t("i",{class:"bi bi-chat-right-dots fs-2 text-success"})],-1),Me={class:"row mb-4"},Pe={class:"col-12 col-lg-4"},Oe={class:"card border-0 shadow-sm"},Te={class:"card-body"},He={class:"align-items-center row"},$e={class:"col"},Be=t("h5",{class:"text-uppercase mb-3 fw-bold text-primary"}," \u767B\u8A18\u4E2D\u6848\u4EF6\u6578 ",-1),Ee={key:0,class:"h2 mb-0"},je={key:1,class:"h2 mb-0"},Ve=t("div",{class:"col-auto"},[t("i",{class:"bi bi-house-door fs-2 text-primary"})],-1),Fe={class:"col-12 col-lg-4"},Ne={class:"card border-0 shadow-sm"},qe={class:"card-body"},Ue={class:"align-items-center row"},Ke={class:"col"},We=t("h5",{class:"text-uppercase mb-3 fw-bold text-warning"},"\u8655\u7406\u4E2D\u6848\u4EF6",-1),Ie={key:0,class:"h2 mb-0 text-warning"},Xe={key:1,class:"h2 mb-0 text-warning"},Je=t("div",{class:"col-auto"},[t("i",{class:"bi bi-chat-left-dots fs-2 text-warning"})],-1),Qe={class:"col-12 col-lg-4"},Ye={class:"card border-0 shadow-sm"},Ze={class:"card-body"},et={class:"align-items-center row"},tt={class:"col"},st=t("h5",{class:"text-uppercase mb-3 fw-bold text-muted"},"\u5DF2\u7D50\u6848\u6848\u4EF6",-1),ot={key:0,class:"h2 mb-0 text-muted"},nt={key:1,class:"h2 mb-0 text-muted"},at=t("div",{class:"col-auto"},[t("i",{class:"bi bi-check-circle fs-2 text-muted"})],-1),rt={class:"row mb-4"},it={class:"col-12 col-lg-4"},ct={class:"card border-0 shadow-sm"},lt={class:"card-body"},dt=t("h5",{class:"text-uppercase mb-3 fw-bold text-muted"},"\u8AEE\u8A62\u7537\u5973\u6BD4",-1),ht={key:1,class:"d-flex align-items-center justify-content-center flex-column",style:{height:"200px"}},ut=t("div",{class:"spinner-border mb-3 text-primary",style:{width:"4rem",height:"4rem"}},null,-1),_t=t("h2",{class:"h2 text-primary"},"\u8B80\u53D6\u4E2D",-1),mt=[ut,_t],pt={class:"col-12 col-lg-8"},gt={class:"card border-0 shadow-sm"},ft={class:"card-body"},vt=t("h5",{class:"text-uppercase fw-bold mb-3 text-muted"},[z(" \u6700\u591A\u8AEE\u8A62\u6848\u4EF6 "),t("span",{class:"fs-6"},"(\u524D5)")],-1),bt={key:1,class:"d-flex align-items-center justify-content-center flex-column",style:{height:"200px"}},yt=t("div",{class:"spinner-border mb-3 text-primary",style:{width:"4rem",height:"4rem"}},null,-1),Ct=t("h2",{class:"h2 text-primary"},"\u8B80\u53D6\u4E2D",-1),wt=[yt,Ct],xt={class:"row"},Dt={class:"col-12"},Rt={class:"card border-0 shadow-sm"},kt={class:"card-body"},At=t("h5",{class:"text-uppercase fw-bold mb-3 text-muted"},"\u8FD110\u65E5\u8AEE\u8A62\u6578",-1),St={key:1,class:"d-flex align-items-center justify-content-center flex-column",style:{height:"200px"}},zt=t("div",{class:"spinner-border mb-3 text-primary",style:{width:"4rem",height:"4rem"}},null,-1),Lt=t("h2",{class:"h2 text-primary"},"\u8B80\u53D6\u4E2D",-1),Gt=[zt,Lt];function Mt(e,o,n,a,s,r){const i=_("LoadingComponent"),h=_("AdminBreadcrumb"),m=_("GenderChart"),l=_("MostCaseServes"),u=_("DaysAgoReserves");return c(),d("div",se,[$(i,{isLoading:s.isLoading},null,8,["isLoading"]),oe,e.$route.name!=="dashboard"?(c(),g(h,{key:0})):B("",!0),t("div",ne,[t("div",ae,[t("div",re,[t("div",ie,[t("div",ce,[t("div",le,[de,s.counting?(c(),d("span",ue,"\u8A08\u7B97\u4E2D")):(c(),d("span",he,[z(p(s.allReserves.length)+" ",1),t("span",{class:E(["badge rounded-pill fw-bold mb-n1 align-middle text-white",e.$format.calToPercent(s.allReserves.length,s.dashboard.reserve.unHandleReserve)>50?"text-bg-success":"text-bg-secondary"]),style:{"font-size":"12px"}}," \u5B8C\u6210\u7387 "+p(e.$format.calToPercent(s.allReserves.length,s.dashboard.reserve.unHandleReserve,"management")),3)]))]),_e])])])]),t("div",me,[t("div",pe,[t("div",ge,[t("div",fe,[t("div",ve,[be,s.counting?(c(),d("span",Ce,"\u8A08\u7B97\u4E2D")):(c(),d("span",ye,p(s.dashboard.reserve.unHandleReserve),1))]),we])])])]),t("div",xe,[t("div",De,[t("div",Re,[t("div",ke,[t("div",Ae,[Se,s.counting?(c(),d("span",Le,"\u8A08\u7B97\u4E2D")):(c(),d("span",ze,p(s.dashboard.reserve.todayReserve),1))]),Ge])])])])]),t("div",Me,[t("div",Pe,[t("div",Oe,[t("div",Te,[t("div",He,[t("div",$e,[Be,s.counting?(c(),d("span",je,"\u8A08\u7B97\u4E2D")):(c(),d("span",Ee,p(r.enabledDisplayCase.length),1))]),Ve])])])]),t("div",Fe,[t("div",Ne,[t("div",qe,[t("div",Ue,[t("div",Ke,[We,s.counting?(c(),d("span",Xe,"\u8A08\u7B97\u4E2D")):(c(),d("span",Ie,p(s.dashboard.product.handlingCase),1))]),Je])])])]),t("div",Qe,[t("div",Ye,[t("div",Ze,[t("div",et,[t("div",tt,[st,s.counting?(c(),d("span",nt,"\u8A08\u7B97\u4E2D")):(c(),d("span",ot,p(s.dashboard.product.closedCases),1))]),at])])])])]),t("div",rt,[t("div",it,[t("div",ct,[t("div",lt,[dt,s.counting?(c(),d("div",ht,mt)):(c(),g(m,{key:0,chartData:s.genderChartData},null,8,["chartData"]))])])]),t("div",pt,[t("div",gt,[t("div",ft,[vt,s.counting?(c(),d("div",bt,wt)):(c(),g(l,{key:0,chartData:s.mostCaseChartData},null,8,["chartData"]))])])])]),t("div",xt,[t("div",Dt,[t("div",Rt,[t("div",kt,[At,s.counting?(c(),d("div",St,Gt)):(c(),g(u,{key:0,chartData:s.daysAgoReservesChartData},null,8,["chartData"]))])])])])])}const Tt=b(te,[["render",Mt]]);export{Tt as default};
