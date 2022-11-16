import{b as v,S as A,a as I}from"./swiper.min.8120986e.js";import{P as D,N}from"./pagination.min.33461a02.js";import{P as _}from"./index.e276e35f.js";function P({swiper:e,extendParams:s,emit:i,once:M}){s({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function S(){const l=e.getTranslate();e.setTranslate(l),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function y(){const{touchEventsData:l,touches:t}=e;l.velocities.length===0&&l.velocities.push({position:t[e.isHorizontal()?"startX":"startY"],time:l.touchStartTime}),l.velocities.push({position:t[e.isHorizontal()?"currentX":"currentY"],time:v()})}function x({currentPos:l}){const{params:t,$wrapperEl:f,rtlTranslate:h,snapGrid:c,touchEventsData:m}=e,E=v()-m.touchStartTime;if(l<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(l>-e.maxTranslate()){e.slides.length<c.length?e.slideTo(c.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(m.velocities.length>1){const n=m.velocities.pop(),a=m.velocities.pop(),b=n.position-a.position,C=n.time-a.time;e.velocity=b/C,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(C>150||v()-n.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,m.velocities.length=0;let r=1e3*t.freeMode.momentumRatio;const B=e.velocity*r;let o=e.translate+B;h&&(o=-o);let g=!1,u;const d=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let T;if(o<e.maxTranslate())t.freeMode.momentumBounce?(o+e.maxTranslate()<-d&&(o=e.maxTranslate()-d),u=e.maxTranslate(),g=!0,m.allowMomentumBounce=!0):o=e.maxTranslate(),t.loop&&t.centeredSlides&&(T=!0);else if(o>e.minTranslate())t.freeMode.momentumBounce?(o-e.minTranslate()>d&&(o=e.minTranslate()+d),u=e.minTranslate(),g=!0,m.allowMomentumBounce=!0):o=e.minTranslate(),t.loop&&t.centeredSlides&&(T=!0);else if(t.freeMode.sticky){let n;for(let a=0;a<c.length;a+=1)if(c[a]>-o){n=a;break}Math.abs(c[n]-o)<Math.abs(c[n-1]-o)||e.swipeDirection==="next"?o=c[n]:o=c[n-1],o=-o}if(T&&M("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(h?r=Math.abs((-o-e.translate)/e.velocity):r=Math.abs((o-e.translate)/e.velocity),t.freeMode.sticky){const n=Math.abs((h?-o:o)-e.translate),a=e.slidesSizesGrid[e.activeIndex];n<a?r=t.speed:n<2*a?r=t.speed*1.5:r=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&g?(e.updateProgress(u),e.setTransition(r),e.setTranslate(o),e.transitionStart(!0,e.swipeDirection),e.animating=!0,f.transitionEnd(()=>{!e||e.destroyed||!m.allowMomentumBounce||(i("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(u),f.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(i("_freeModeNoMomentumRelease"),e.updateProgress(o),e.setTransition(r),e.setTranslate(o),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,f.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(o),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&i("_freeModeNoMomentumRelease");(!t.freeMode.momentum||E>=t.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:S,onTouchMove:y,onTouchEnd:x}})}const J={components:{Swiper:A,SwiperSlide:I},data(){return{swiper:{modules:[D,N,P]}}}},j={data(){return{collectionCases:JSON.parse(localStorage.getItem("collection_case"))||[]}},inject:["emitter"],methods:{handleCollectionCase(e){const s=this.collectionCases.findIndex(i=>i===e);s===-1?(this.$swal({icon:"success",title:"\u52A0\u5165\u6536\u85CF\u6848\u4EF6",confirmButtonText:"\u6211\u77E5\u9053\u4E86"}),this.collectionCases.push(e)):this.collectionCases.splice(s,1),this.emitter.emit("get-collection",this.collectionCases)},clearCollectionData(){this.collectionCases=[],localStorage.setItem("compare_case",JSON.stringify([]))}},watch:{collectionCases:{handler(){localStorage.setItem("collection_case",JSON.stringify(this.collectionCases))},deep:!0}}},z={data(){return{compareCases:JSON.parse(localStorage.getItem("compare_case"))||[]}},inject:["emitter"],methods:{handleCompareCase(e){const s=this.compareCases.findIndex(i=>i===e);if(s===-1){if(this.compareCases.length>2)return this.$swal({icon:"error",title:"\u4E00\u6B21\u6700\u591A\u5169\u500B\u6848\u4EF6\u80FD\u5920\u52A0\u5165\u6BD4\u8F03",confirmButtonText:"\u6211\u77E5\u9053\u4E86"}),!1;this.compareCases.length===2?this.$swal({icon:"info",title:"\u5DF2\u7D93\u6709\u5169\u500B\u6848\u4EF6\u6B63\u5728\u6BD4\u8F03\u5217\u8868\u4E2D",confirmButtonText:"\u53BB\u770B\u770B"}).then(i=>{i.value&&(this.$route.params!=="collections"&&this.$router.push("/collections"),this.goCompareAnchor())}):(this.$swal({icon:"success",title:"\u6848\u4EF6\u52A0\u5165\u6BD4\u8F03",confirmButtonText:"\u6211\u77E5\u9053\u4E86"}),this.compareCases.push(e))}else this.compareCases.splice(s,1)},clearCompareData(){this.compareCases=[],localStorage.setItem("compare_case",JSON.stringify([]))}},watch:{compareCases:{handler(){localStorage.setItem("compare_case",JSON.stringify(this.compareCases))},deep:!0}}},H=_("compareAnchorStore",{state:()=>({toAnchor:!1}),actions:{clickCompareAnchor(){this.toAnchor=!0,this.goCompareAnchor()},goCompareAnchor(){this.toAnchor===!1&&(setTimeout(()=>{const e=document.querySelector("#caseCompare"),s=document.querySelector(".navbar").offsetHeight;document.documentElement.scrollTop=e.offsetTop-s},250),this.toAnchor=!1)}}});export{j as a,z as b,H as c,J as s};
