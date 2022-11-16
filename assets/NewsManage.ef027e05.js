import{A as FC}from"./AdminBreadcrumb.67b9a502.js";import{m as VC,D as UC,P as HC}from"./DelConfirmModal.aab645ab.js";import{C as ri,E as GC,G as qC,_ as jg,r as on,o as be,c as we,b as B,s as Lg,d as nn,v as uo,A as WC,a as rn,t as On,x as YC,F as Og,y as KC,f as Rg,u as Ln}from"./index.e276e35f.js";import"./base-component.956d89c2.js";var us={exports:{}};(function(Y,L){(function(gt){const Nt=gt.en=gt.en||{};Nt.dictionary=Object.assign(Nt.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Rich Text Editor, %0":"Rich Text Editor, %0","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(gt,Nt){Y.exports=Nt()}(self,()=>(()=>{var gt={3062:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const A=m},903:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const A=m},3143:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=m},4717:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const A=m},9315:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const A=m},8733:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const A=m},3508:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const A=m},2640:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const A=m},5083:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const A=m},4036:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const A=m},3773:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const A=m},3689:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const A=m},1905:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=m},9773:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const A=m},2347:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCKA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDvDD,oCC2DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CD1ED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const A=m},7754:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical .ck-button{border:0;border-radius:0;border-top:1px solid var(--ck-color-base-border);margin:0;padding:var(--ck-spacing-standard);width:50%}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{border:0;padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SA+CD,CA5CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,QAAS,CADT,eAAgB,CAEhB,gDAAiD,CAHjD,QAAS,CADT,kCAAmC,CAKnC,SAaD,CAnBA,4GAaE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAWD,CATC,wEACC,QAAS,CACT,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		border-radius: 0;
		border: 0;
		border-top: 1px solid var(--ck-color-base-border);
		width: 50%;

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			border: 0;
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const A=m},4652:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const A=m},7442:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{opacity:1;visibility:visible}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAQC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAoBD,CCpBA,kFACC,aAqBD,CAHC,oBAnBD,kFAoBE,YAEF,CADC,CDlBA,sEAIC,cAAe,CAEf,iBAUD,CCoBD,wFAEC,SAAU,CADV,kBAED,CD3BE,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CElDA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css";

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			@mixin ck-tooltip_enabled;

			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			&:hover {
				@mixin ck-tooltip_visible;
			}

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const A=m},9292:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=m},1613:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);width:var(--ck-insert-table-dropdown-box-width)}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,qCACC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAHlB,iDAAkD,CAClD,iDAAkD,CAFlD,+CAUD,CAJC,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	width: var(--ck-insert-table-dropdown-box-width);
	height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const A=m},6306:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const A=m},3881:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,":root{--ck-color-table-focused-cell-background:rgba(158,207,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(208, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const A=m},6945:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const A=m},4906:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:focus .ck-tooltip,.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:focus .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{opacity:1;visibility:visible}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BCCC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CE5BC,qDACC,aAqBD,CAHC,oBAnBD,qDAoBE,YAEF,CADC,CFvBF,6BAOC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAyBD,CApBC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEkBA,kIAEC,SAAU,CADV,kBAED,CCxCD,6BCAC,oDD0ID,CCvIE,6EACC,0DACD,CAEA,+EACC,2DAA4C,CAC5C,uEACD,CAID,qDACC,6DACD,CDhBD,6BEDC,eF2ID,CA1IA,wIEGE,qCFuIF,CA1IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAqID,CA3GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDiIA,CC9HC,yFACC,qDACD,CAEA,2FACC,sDAA4C,CAC5C,kEACD,CAID,iEACC,wDACD,CDmHA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC7IC,mDDkJD,CC/IE,2FACC,yDACD,CAEA,6FACC,0DAA4C,CAC5C,sEACD,CAID,mEACC,4DACD,CD6HD,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../tooltip/mixins/_tooltip.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;
	@mixin ck-tooltip_enabled;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}

	&:hover,
	/* Enable toolbar button tooltips for keyboard users too. See https://github.com/ckeditor/ckeditor5/issues/5581. */
	&:focus {
		@mixin ck-tooltip_visible;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
			box-shadow: inset 0 2px 2px var($(prefix)-active-shadow);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const A=m},5332:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px;--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - var(--ck-switch-button-toggle-spacing)*2)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);transition:background .4s ease;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);margin:var(--ck-switch-button-toggle-spacing);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,mDAAoD,CACpD,qCAAsC,CACtC,gKAKD,CAGC,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDC3BA,eDoEA,CAzCA,yICvBC,qCDgED,CAzCA,2DAKE,gBAoCF,CAzCA,2DAUE,iBA+BF,CAzCA,iDAiBC,uDAAwD,CAHxD,8BAAiC,CAEjC,0CAyBD,CAtBC,2EC9CD,eD2DC,CAbA,6LC1CA,qCAAsC,CD4CpC,8CAWF,CAbA,2EASC,yDAA0D,CAD1D,gDAAiD,CAFjD,6CAA8C,CAM9C,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,+DACD,CAIF,6DExEA,kCF0EA,CAEA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: 1.0769230769em;
	--ck-switch-button-toggle-spacing: 1px;
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2 * var(--ck-switch-button-toggle-spacing)
	);
}

.ck.ck-button.ck-switchbutton {
	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease;

		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			/* Leave some tiny bit of space around the inner part of the switch */
			margin: var(--ck-switch-button-toggle-spacing);
			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	&.ck-on .ck-button__toggle {
		background: var(--ck-color-switch-button-on-background);

		&:hover {
			background: var(--ck-color-switch-button-on-hover-background);
		}

		& .ck-button__toggle__inner {
			/*
			 * Move the toggle switch to the right. It will be animated.
			 */
			@mixin ck-dir ltr {
				transform: translateX( var( --ck-switch-button-translation ) );
			}

			@mixin ck-dir rtl {
				transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const A=m},6781:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#000}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,qCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(0, 0%, 0%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const A=m},5485:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBAqFD,CAnFC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UAOD,CCUA,iEACC,YACD,CDVA,oCAGC,kCAAmC,CAEnC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CEhGA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../tooltip/mixins/_tooltip.css";

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;

		/* Disable main button's tooltip when the dropdown is open. Otherwise the panel may
		partially cover the tooltip */
		&.ck-on {
			@mixin ck-tooltip_disabled;
		}
	}

	& .ck-dropdown__panel {
		/* This is to get rid of flickering when the tooltip is shown under the panel,
		which looks like the panel moves vertically a pixel down and up. */
		-webkit-backface-visibility: hidden;

		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=m},3949:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=m},7686:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button .ck-tooltip{display:none}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,mBAEC,iBAUD,CARC,iDACC,qCACD,CC0BA,8DACC,YACD,CClCD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CASA,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCC7EA,eDuFA,CAVA,qHCzEC,qCDmFD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../tooltip/mixins/_tooltip.css";

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}

	/* Disable tooltips for the buttons when the button is "open" */
	&.ck-splitbutton_open > .ck-button {
		@mixin ck-tooltip_disabled;
	}
}

`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=m},7339:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const A=m},9688:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=m},8847:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const A=m},6574:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAY1B,qBAcD,CAZC,0BARA,aAAc,CAGd,cAgBA,CAJC,yBAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	color: inherit;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;

		/* Allows dynamic coloring of the icons. */
		color: inherit;

		&:not([fill]) {
			/* Needed by FF. */
			fill: currentColor;
		}
	}
}
`],sourceRoot:""}]);const A=m},4879:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=m},3662:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const A=m},2577:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-spacing-medium),calc(var(--ck-font-size-base)*.6)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-spacing-medium)*-1),calc(var(--ck-font-size-base)*.6)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,yEACD,CAEA,0BCHC,eD4GD,CAzGA,2FCCE,qCDwGF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,wFAYF,CAfA,oUAOE,iGAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-spacing-medium), calc(0.6 * var(--ck-font-size-base))) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-spacing-medium)), calc(0.6 * var(--ck-font-size-base))) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=m},1046:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,2DACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=m},8793:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow))}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCJC,eD4ID,CAxIA,iFCAE,qCDwIF,CAxIA,qBAMC,2CAA4C,CAC5C,6CAA8C,CEb9C,oCAA8B,CFU9B,eAoID,CA9HE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EACD,CAEA,2CACC,iFAAkF,CAClF,yCACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDACD,CAEA,2CACC,iFAAkF,CAClF,4CACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: var(--ck-balloon-arrow-offset);
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: var(--ck-balloon-arrow-offset);
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=m},4650:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const A=m},7676:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=m},5868:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=m},6764:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,'.ck-vertical-form .ck-button:after{bottom:var(--ck-spacing-small);content:"";position:absolute;right:-1px;top:var(--ck-spacing-small);width:0;z-index:1}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:var(--ck-spacing-small);content:"";position:absolute;right:-1px;top:var(--ck-spacing-small);width:0;z-index:1}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border:0;border-radius:0;border-top:1px solid var(--ck-color-base-border);margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after,[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAOA,mCAMC,8BAA+B,CAL/B,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAH5B,OAAQ,CAKR,SACD,CCTC,oCDaC,wCAMC,8BAA+B,CAL/B,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAH5B,OAAQ,CAKR,SACD,CCnBD,CCAD,qDACC,kDACD,CAEA,uBACC,+BAkED,CAhEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA6CF,CA3CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAID,iGAMC,QAAS,CADT,eAAgB,CAEhB,gDAAiD,CAJjD,kCAAmC,CADnC,kCAkBD,CApBA,0OAcE,aAMF,CAGC,yMACC,kDACD,CDpEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button::after {
	content: "";
	width: 0;
	position: absolute;
	right: -1px;
	top: var(--ck-spacing-small);
	bottom: var(--ck-spacing-small);
	z-index: 1;
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button::after {
			content: "";
			width: 0;
			position: absolute;
			right: -1px;
			top: var(--ck-spacing-small);
			bottom: var(--ck-spacing-small);
			z-index: 1;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);

			border-radius: 0;
			border: 0;
			border-top: 1px solid var(--ck-color-base-border);

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}

		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}
}
`],sourceRoot:""}]);const A=m},9695:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const A=m},5542:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border:0;border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eD0FD,CA7FA,qECOE,qCDsFF,CA7FA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAyFD,CAtFC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAgBD,CAbC,0DAWC,QAAS,CAHT,eAAgB,CAHhB,QAAS,CAHT,UAUD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAvFF,qCA2FE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;

			/* Items in a vertical toolbar span the entire width so any border is pointless. */
			border: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=m},3332:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,'.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{-webkit-backface-visibility:hidden;pointer-events:none;position:absolute}.ck.ck-tooltip{display:none;opacity:0;visibility:hidden;z-index:var(--ck-z-modal)}.ck.ck-tooltip .ck-tooltip__text{display:inline-block}.ck.ck-tooltip .ck-tooltip__text:after{content:"";height:0;width:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%;top:0;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{background:var(--ck-color-tooltip-background);color:var(--ck-color-tooltip-text);font-size:.9em;left:-50%;line-height:1.5;padding:var(--ck-spacing-small) var(--ck-spacing-medium);position:relative}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip.ck-tooltip_s,.ck.ck-tooltip.ck-tooltip_se,.ck.ck-tooltip.ck-tooltip_sw{bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{border-color:transparent transparent var(--ck-color-tooltip-background) transparent;border-width:0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);top:calc(var(--ck-tooltip-arrow-size)*-1 + 1px);transform:translateX(-50%)}.ck.ck-tooltip.ck-tooltip_sw{left:auto;right:50%}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text{left:auto;right:calc(var(--ck-tooltip-arrow-size)*-2)}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{left:auto;right:0}.ck.ck-tooltip.ck-tooltip_se{left:50%;right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text{left:calc(var(--ck-tooltip-arrow-size)*-2);right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after{left:0;right:auto;transform:translateX(50%)}.ck.ck-tooltip.ck-tooltip_n{top:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{border-color:var(--ck-color-tooltip-background) transparent transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size);bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateX(-50%)}.ck.ck-tooltip.ck-tooltip_e{left:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text:after{border-color:transparent var(--ck-color-tooltip-background) transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0;left:calc(var(--ck-tooltip-arrow-size)*-1);top:calc(50% - var(--ck-tooltip-arrow-size)*1)}.ck.ck-tooltip.ck-tooltip_w{left:auto;right:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text:after{border-color:transparent transparent transparent var(--ck-color-tooltip-background);border-width:var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);left:100%;top:calc(50% - var(--ck-tooltip-arrow-size)*1)}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,sDASC,kCAAmC,CAJnC,mBAAoB,CAHpB,iBAQD,CAEA,eAIC,YAAa,CADb,SAAU,CADV,iBAAkB,CAGlB,yBAWD,CATC,iCACC,oBAOD,CALC,uCACC,UAAW,CAEX,QAAS,CADT,OAED,CCxBF,MACC,2BACD,CAEA,eACC,QAAS,CAMT,KAAM,CAON,sCAwKD,CAtKC,iCChBA,eDqCA,CArBA,yGCZC,qCDiCD,CArBA,iCAOC,6CAA8C,CAF9C,kCAAmC,CAFnC,cAAe,CAMf,SAAU,CALV,eAAgB,CAEhB,wDAAyD,CAEzD,iBAaD,CAVC,uCAOC,kBAAmB,CACnB,QAAS,CAFT,sCAGD,CAYD,sFAGC,4CAA+C,CAC/C,0BASD,CAPC,8JAIC,mFAAoF,CACpF,qGAAsG,CAHtG,+CAAkD,CAClD,0BAGD,CAaD,6BAEC,SAAU,CADV,SAYD,CATC,+CACC,SAAU,CACV,2CACD,CAEA,qDACC,SAAU,CACV,OACD,CAYD,6BACC,QAAS,CACT,UAYD,CAVC,+CAEC,0CAA8C,CAD9C,UAED,CAEA,qDAEC,MAAO,CADP,UAAW,CAEX,yBACD,CAYD,4BACC,yCAA4C,CAC5C,2BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,4CAA+C,CAC/C,0BAGD,CAUD,4BACC,8CAA+C,CAC/C,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,0CAA6C,CAC7C,8CAGD,CAWF,4BAEC,SAAU,CADV,+CAAgD,CAEhD,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,SAAU,CACV,8CAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-tooltip,
.ck.ck-tooltip .ck-tooltip__text::after {
	position: absolute;

	/* Without this, hovering the tooltip could keep it visible. */
	pointer-events: none;

	/* This is to get rid of flickering when transitioning opacity in Chrome.
	It's weird but it works. */
	-webkit-backface-visibility: hidden;
}

.ck.ck-tooltip {
	/* Tooltip is hidden by default. */
	visibility: hidden;
	opacity: 0;
	display: none;
	z-index: var(--ck-z-modal);

	& .ck-tooltip__text {
		display: inline-block;

		&::after {
			content: "";
			width: 0;
			height: 0;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-tooltip-arrow-size: 5px;
}

.ck.ck-tooltip {
	left: 50%;

	/*
	 * Prevent blurry tooltips in LoDPI environments.
	 * See https://github.com/ckeditor/ckeditor5/issues/1802.
	 */
	top: 0;

	/*
	 * For the transition to work, the tooltip must be controlled
	 * using visibility+opacity. A delay prevents a "tooltip avalanche"
	 * i.e. when scanning the toolbar with mouse cursor.
	 */
	transition: opacity .2s ease-in-out .2s;

	& .ck-tooltip__text {
		@mixin ck-rounded-corners;

		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		background: var(--ck-color-tooltip-background);
		position: relative;
		left: -50%;

		&::after {
			/*
			 * For the transition to work, the tooltip must be controlled
			 * using visibility+opacity. A delay prevents a "tooltip avalanche"
			 * i.e. when scanning the toolbar with mouse cursor.
			 */
			transition: opacity .2s ease-in-out .2s;
			border-style: solid;
			left: 50%;
		}
	}

	/**
	 * A class that displays the tooltip south of the element.
	 *
	 *       [element]
	 *           ^
	 *     +-----------+
	 *     |  Tooltip  |
	 *     +-----------+
	 */
	&.ck-tooltip_s,
	&.ck-tooltip_sw,
	&.ck-tooltip_se {
		bottom: calc(-1 * var(--ck-tooltip-arrow-size));
		transform: translateY( 100% );

		& .ck-tooltip__text::after {
			/* 1px addresses gliches in rendering causing gap between the triangle and the text */
			top: calc(-1 * var(--ck-tooltip-arrow-size) + 1px);
			transform: translateX( -50% );
			border-color: transparent transparent var(--ck-color-tooltip-background) transparent;
			border-width: 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);
		}
	}

	/**
	 * A class that displays the tooltip south-west of the element.
	 *
	 *        [element]
	 *            ^
	 *  +-----------+
	 *  |  Tooltip  |
	 *  +-----------+
	 */

	&.ck-tooltip_sw {
		right: 50%;
		left: auto;

		& .ck-tooltip__text {
			left: auto;
			right: calc( -2 * var(--ck-tooltip-arrow-size));
		}

		& .ck-tooltip__text::after {
			left: auto;
			right: 0;
		}
	}

	/**
	 * A class that displays the tooltip south-east of the element.
	 *
	 *  [element]
	 *      ^
	 *    +-----------+
	 *    |  Tooltip  |
	 *    +-----------+
	 */
	&.ck-tooltip_se {
		left: 50%;
		right: auto;

		& .ck-tooltip__text {
			right: auto;
			left: calc( -2 * var(--ck-tooltip-arrow-size));
		}

		& .ck-tooltip__text::after {
			right: auto;
			left: 0;
			transform: translateX( 50% );
		}
	}

	/**
	 * A class that displays the tooltip north of the element.
	 *
	 *     +-----------+
	 *     |  Tooltip  |
	 *     +-----------+
	 *           V
	 *       [element]
	 */
	&.ck-tooltip_n {
		top: calc(-1 * var(--ck-tooltip-arrow-size));
		transform: translateY( -100% );

		& .ck-tooltip__text::after {
			bottom: calc(-1 * var(--ck-tooltip-arrow-size));
			transform: translateX( -50% );
			border-color: var(--ck-color-tooltip-background) transparent transparent transparent;
			border-width: var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size);
		}
	}

	/**
	 * A class that displays the tooltip east of the element.
	 *
	 *                +----------+
	 *    [element] < |   east   |
	 *                +----------+
	 */
	&.ck-tooltip_e {
		left: calc(100% + var(--ck-tooltip-arrow-size));
		top: 50%;

		& .ck-tooltip__text {
			left: 0;
			transform: translateY( -50% );

			&::after {
				left: calc(-1 * var(--ck-tooltip-arrow-size));
				top: calc(50% - 1 * var(--ck-tooltip-arrow-size));
				border-color: transparent var(--ck-color-tooltip-background) transparent transparent;
				border-width: var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0;
			}
		}
	}

	/**
	 * A class that displays the tooltip west of the element.
	 *
	 *    +----------+
	 *    |   west   | > [element]
	 *    +----------+
	 */
	&.ck-tooltip_w {
		right: calc(100% + var(--ck-tooltip-arrow-size));
		left: auto;
		top: 50%;

		& .ck-tooltip__text {
			left: 0;
			transform: translateY( -50% );

			&::after {
				left: 100%;
				top: calc(50% - 1 * var(--ck-tooltip-arrow-size));
				border-color: transparent transparent transparent var(--ck-color-tooltip-background);
				border-width: var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=m},4793:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:208,79%,51%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#bcdefb;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAgD,CAChD,8BAAmD,CACnD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAmD,CACnD,oCAAuD,CACvD,6BAAkD,CAIlD,+CAAwD,CACxD,qEAA+E,CAC/E,qCAAwD,CACxD,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAA+D,CAC/D,mDAAgE,CAChE,+CAA6D,CAC7D,yDAA8D,CAE9D,uCAAuD,CACvD,6CAA4D,CAC5D,8CAA4D,CAC5D,0CAAyD,CACzD,gDAA8D,CAE9D,+DAAsE,CACtE,iDAAkE,CAClE,kDAAkE,CAClE,8CAA+D,CAC/D,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA4D,CAC5D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAmE,CACnE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,+BAAiD,CACjD,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,wCAAwD,CACxD,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,gEAAuE,CACvE,4EAAiF,CACjF,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CCpGhE,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJoGD,CI9FA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(0, 0%, 77%);
	--ck-color-base-action: 									hsl(104, 44%, 48%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(208, 88%, 52%);
	--ck-color-base-active-focus:								hsl(208, 88%, 47%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						208, 79%, 51%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(207, 89%, 86%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 90%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 85%);
	--ck-color-button-default-active-shadow: 					hsl(0, 0%, 75%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(0, 0%, 87%);
	--ck-color-button-on-hover-background: 						hsl(0, 0%, 77%);
	--ck-color-button-on-active-background: 					hsl(0, 0%, 73%);
	--ck-color-button-on-active-shadow: 						hsl(0, 0%, 63%);
	--ck-color-button-on-disabled-background: 					hsl(0, 0%, 87%);

	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 44%, 43%);
	--ck-color-button-action-active-background: 				hsl(104, 44%, 41%);
	--ck-color-button-action-active-shadow: 					hsl(104, 44%, 36%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 69%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 64%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 44%, 43%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									hsl(0, 0%, 78%);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							hsl(0, 0%, 78%);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-base-active);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-base-active-focus);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-foreground);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const A=m},3488:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=m},8506:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const A=m},4921:(D,C,k)=>{k.d(C,{Z:()=>A});var v=k(1799),E=k.n(v),y=k(2609),m=k.n(y)()(E());m.push([D.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const A=m},2609:D=>{D.exports=function(C){var k=[];return k.toString=function(){return this.map(function(v){var E=C(v);return v[2]?"@media ".concat(v[2]," {").concat(E,"}"):E}).join("")},k.i=function(v,E,y){typeof v=="string"&&(v=[[null,v,""]]);var m={};if(y)for(var A=0;A<this.length;A++){var Bt=this[A][0];Bt!=null&&(m[Bt]=!0)}for(var zt=0;zt<v.length;zt++){var At=[].concat(v[zt]);y&&m[At[0]]||(E&&(At[2]?At[2]="".concat(E," and ").concat(At[2]):At[2]=E),k.push(At))}},k}},1799:D=>{function C(v,E){return function(y){if(Array.isArray(y))return y}(v)||function(y,m){var A=y&&(typeof Symbol<"u"&&y[Symbol.iterator]||y["@@iterator"]);if(A!=null){var Bt,zt,At=[],_e=!0,Se=!1;try{for(A=A.call(y);!(_e=(Bt=A.next()).done)&&(At.push(Bt.value),!m||At.length!==m);_e=!0);}catch(Gt){Se=!0,zt=Gt}finally{try{_e||A.return==null||A.return()}finally{if(Se)throw zt}}return At}}(v,E)||function(y,m){if(!!y){if(typeof y=="string")return k(y,m);var A=Object.prototype.toString.call(y).slice(8,-1);if(A==="Object"&&y.constructor&&(A=y.constructor.name),A==="Map"||A==="Set")return Array.from(y);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return k(y,m)}}(v,E)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function k(v,E){(E==null||E>v.length)&&(E=v.length);for(var y=0,m=new Array(E);y<E;y++)m[y]=v[y];return m}D.exports=function(v){var E=C(v,4),y=E[1],m=E[3];if(!m)return y;if(typeof btoa=="function"){var A=btoa(unescape(encodeURIComponent(JSON.stringify(m)))),Bt="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),zt="/*# ".concat(Bt," */"),At=m.sources.map(function(_e){return"/*# sourceURL=".concat(m.sourceRoot||"").concat(_e," */")});return[y].concat(At).concat([zt]).join(`
`)}return[y].join(`
`)}},6062:(D,C,k)=>{var v,E=function(){return v===void 0&&(v=Boolean(window&&document&&document.all&&!window.atob)),v},y=function(){var F={};return function(V){if(F[V]===void 0){var U=document.querySelector(V);if(window.HTMLIFrameElement&&U instanceof window.HTMLIFrameElement)try{U=U.contentDocument.head}catch{U=null}F[V]=U}return F[V]}}(),m=[];function A(F){for(var V=-1,U=0;U<m.length;U++)if(m[U].identifier===F){V=U;break}return V}function Bt(F,V){for(var U={},Q=[],mt=0;mt<F.length;mt++){var kt=F[mt],ht=V.base?kt[0]+V.base:kt[0],Z=U[ht]||0,ce="".concat(ht," ").concat(Z);U[ht]=Z+1;var Rn=A(ce),Lt={css:kt[1],media:kt[2],sourceMap:kt[3]};Rn!==-1?(m[Rn].references++,m[Rn].updater(Lt)):m.push({identifier:ce,updater:K(Lt,V),references:1}),Q.push(ce)}return Q}function zt(F){var V=document.createElement("style"),U=F.attributes||{};if(U.nonce===void 0){var Q=k.nc;Q&&(U.nonce=Q)}if(Object.keys(U).forEach(function(kt){V.setAttribute(kt,U[kt])}),typeof F.insert=="function")F.insert(V);else{var mt=y(F.insert||"head");if(!mt)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");mt.appendChild(V)}return V}var At,_e=(At=[],function(F,V){return At[F]=V,At.filter(Boolean).join(`
`)});function Se(F,V,U,Q){var mt=U?"":Q.media?"@media ".concat(Q.media," {").concat(Q.css,"}"):Q.css;if(F.styleSheet)F.styleSheet.cssText=_e(V,mt);else{var kt=document.createTextNode(mt),ht=F.childNodes;ht[V]&&F.removeChild(ht[V]),ht.length?F.insertBefore(kt,ht[V]):F.appendChild(kt)}}function Gt(F,V,U){var Q=U.css,mt=U.media,kt=U.sourceMap;if(mt?F.setAttribute("media",mt):F.removeAttribute("media"),kt&&typeof btoa<"u"&&(Q+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(kt))))," */")),F.styleSheet)F.styleSheet.cssText=Q;else{for(;F.firstChild;)F.removeChild(F.firstChild);F.appendChild(document.createTextNode(Q))}}var sn=null,si=0;function K(F,V){var U,Q,mt;if(V.singleton){var kt=si++;U=sn||(sn=zt(V)),Q=Se.bind(null,U,kt,!1),mt=Se.bind(null,U,kt,!0)}else U=zt(V),Q=Gt.bind(null,U,V),mt=function(){(function(ht){if(ht.parentNode===null)return!1;ht.parentNode.removeChild(ht)})(U)};return Q(F),function(ht){if(ht){if(ht.css===F.css&&ht.media===F.media&&ht.sourceMap===F.sourceMap)return;Q(F=ht)}else mt()}}D.exports=function(F,V){(V=V||{}).singleton||typeof V.singleton=="boolean"||(V.singleton=E());var U=Bt(F=F||[],V);return function(Q){if(Q=Q||[],Object.prototype.toString.call(Q)==="[object Array]"){for(var mt=0;mt<U.length;mt++){var kt=A(U[mt]);m[kt].references--}for(var ht=Bt(Q,V),Z=0;Z<U.length;Z++){var ce=A(U[Z]);m[ce].references===0&&(m[ce].updater(),m.splice(ce,1))}U=ht}}}}},Nt={};function S(D){var C=Nt[D];if(C!==void 0)return C.exports;var k=Nt[D]={id:D,exports:{}};return gt[D](k,k.exports,S),k.exports}S.n=D=>{var C=D&&D.__esModule?()=>D.default:()=>D;return S.d(C,{a:C}),C},S.d=(D,C)=>{for(var k in C)S.o(C,k)&&!S.o(D,k)&&Object.defineProperty(D,k,{enumerable:!0,get:C[k]})},S.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),S.o=(D,C)=>Object.prototype.hasOwnProperty.call(D,C),S.nc=void 0;var ne={};return(()=>{S.d(ne,{default:()=>hs});const D=function(){return function i(){i.called=!0}};class C{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=D(),this.off=D()}}const k=new Array(256).fill().map((i,t)=>("0"+t.toString(16)).slice(-2));function v(){const i=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+k[i>>0&255]+k[i>>8&255]+k[i>>16&255]+k[i>>24&255]+k[t>>0&255]+k[t>>8&255]+k[t>>16&255]+k[t>>24&255]+k[e>>0&255]+k[e>>8&255]+k[e>>16&255]+k[e>>24&255]+k[n>>0&255]+k[n>>8&255]+k[n>>16&255]+k[n>>24&255]}const E={get(i){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function y(i,t){const e=E.get(t.priority);for(let n=0;n<i.length;n++)if(E.get(i[n].priority)<e)return void i.splice(n,0,t);i.push(t)}class m extends Error{constructor(t,e,n){super(function(o,r){const s=new WeakSet,a=(d,h)=>{if(typeof h=="object"&&h!==null){if(s.has(h))return`[object ${h.constructor.name}]`;s.add(h)}return h},c=r?` ${JSON.stringify(r,a)}`:"",l=zt(o);return o+c+l}(t,n)),this.name="CKEditorError",this.context=e,this.data=n}is(t){return t==="CKEditorError"}static rethrowUnexpectedError(t,e){if(t.is&&t.is("CKEditorError"))throw t;const n=new m(t.message,e);throw n.stack=t.stack,n}}function A(i,t){console.warn(...At(i,t))}function Bt(i,t){console.error(...At(i,t))}function zt(i){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-${i}`}function At(i,t){const e=zt(i);return t?[i,t,e]:[i,e]}const _e="34.2.0",Se=typeof window=="object"?window:S.g;if(Se.CKEDITOR_VERSION)throw new m("ckeditor-duplicated-modules",null);Se.CKEDITOR_VERSION=_e;const Gt=Symbol("listeningTo"),sn=Symbol("emitterId"),si={on(i,t,e={}){this.listenTo(this,i,t,e)},once(i,t,e){let n=!1;this.listenTo(this,i,function(o,...r){n||(n=!0,o.off(),t.call(this,o,...r))},e)},off(i,t){this.stopListening(this,i,t)},listenTo(i,t,e,n={}){let o,r;this[Gt]||(this[Gt]={});const s=this[Gt];V(i)||F(i);const a=V(i);(o=s[a])||(o=s[a]={emitter:i,callbacks:{}}),(r=o.callbacks[t])||(r=o.callbacks[t]=[]),r.push(e),function(c,l,d,h,u){l._addEventListener?l._addEventListener(d,h,u):c._addEventListener.call(l,d,h,u)}(this,i,t,e,n)},stopListening(i,t,e){const n=this[Gt];let o=i&&V(i);const r=n&&o&&n[o],s=r&&t&&r.callbacks[t];if(!(!n||i&&!r||t&&!s))if(e)ht(this,i,t,e),s.indexOf(e)!==-1&&(s.length===1?delete r.callbacks[t]:ht(this,i,t,e));else if(s){for(;e=s.pop();)ht(this,i,t,e);delete r.callbacks[t]}else if(r){for(t in r.callbacks)this.stopListening(i,t);delete n[o]}else{for(o in n)this.stopListening(n[o].emitter);delete this[Gt]}},fire(i,...t){try{const e=i instanceof C?i:new C(this,i),n=e.name;let o=mt(this,n);if(e.path.push(this),o){const r=[e,...t];o=Array.from(o);for(let s=0;s<o.length&&(o[s].callback.apply(this,r),e.off.called&&(delete e.off.called,this._removeEventListener(n,o[s].callback)),!e.stop.called);s++);}if(this._delegations){const r=this._delegations.get(n),s=this._delegations.get("*");r&&kt(r,e,t),s&&kt(s,e,t)}return e.return}catch(e){m.rethrowUnexpectedError(e,this)}},delegate(...i){return{to:(t,e)=>{this._delegations||(this._delegations=new Map),i.forEach(n=>{const o=this._delegations.get(n);o?o.set(t,e):this._delegations.set(n,new Map([[t,e]]))})}}},stopDelegating(i,t){if(this._delegations)if(i)if(t){const e=this._delegations.get(i);e&&e.delete(t)}else this._delegations.delete(i);else this._delegations.clear()},_addEventListener(i,t,e){(function(r,s){const a=U(r);if(a[s])return;let c=s,l=null;const d=[];for(;c!==""&&!a[c];)a[c]={callbacks:[],childEvents:[]},d.push(a[c]),l&&a[c].childEvents.push(l),l=c,c=c.substr(0,c.lastIndexOf(":"));if(c!==""){for(const h of d)h.callbacks=a[c].callbacks.slice();a[c].childEvents.push(l)}})(this,i);const n=Q(this,i),o={callback:t,priority:E.get(e.priority)};for(const r of n)y(r,o)},_removeEventListener(i,t){const e=Q(this,i);for(const n of e)for(let o=0;o<n.length;o++)n[o].callback==t&&(n.splice(o,1),o--)}},K=si;function F(i,t){i[sn]||(i[sn]=t||v())}function V(i){return i[sn]}function U(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function Q(i,t){const e=U(i)[t];if(!e)return[];let n=[e.callbacks];for(let o=0;o<e.childEvents.length;o++){const r=Q(i,e.childEvents[o]);n=n.concat(r)}return n}function mt(i,t){let e;return i._events&&(e=i._events[t])&&e.callbacks.length?e.callbacks:t.indexOf(":")>-1?mt(i,t.substr(0,t.lastIndexOf(":"))):null}function kt(i,t,e){for(let[n,o]of i){o?typeof o=="function"&&(o=o(t.name)):o=t.name;const r=new C(t.source,o);r.path=[...t.path],n.fire(r,...e)}}function ht(i,t,e,n){t._removeEventListener?t._removeEventListener(e,n):i._removeEventListener.call(t,e,n)}const Z=function(i){var t=typeof i;return i!=null&&(t=="object"||t=="function")},ce=typeof ri=="object"&&ri&&ri.Object===Object&&ri;var Rn=typeof self=="object"&&self&&self.Object===Object&&self;const Lt=ce||Rn||Function("return this")(),le=Lt.Symbol;var gs=Object.prototype,Fg=gs.hasOwnProperty,Vg=gs.toString,jn=le?le.toStringTag:void 0;const Ug=function(i){var t=Fg.call(i,jn),e=i[jn];try{i[jn]=void 0;var n=!0}catch{}var o=Vg.call(i);return n&&(t?i[jn]=e:delete i[jn]),o};var Hg=Object.prototype.toString;const Gg=function(i){return Hg.call(i)};var ms=le?le.toStringTag:void 0;const Te=function(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":ms&&ms in Object(i)?Ug(i):Gg(i)},Re=function(i){if(!Z(i))return!1;var t=Te(i);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},ai=Lt["__core-js_shared__"];var ps=function(){var i=/[^.]+$/.exec(ai&&ai.keys&&ai.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();const qg=function(i){return!!ps&&ps in i};var Wg=Function.prototype.toString;const je=function(i){if(i!=null){try{return Wg.call(i)}catch{}try{return i+""}catch{}}return""};var Yg=/^\[object .+?Constructor\]$/,Kg=Function.prototype,$g=Object.prototype,Qg=Kg.toString,Zg=$g.hasOwnProperty,Jg=RegExp("^"+Qg.call(Zg).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Xg=function(i){return!(!Z(i)||qg(i))&&(Re(i)?Jg:Yg).test(je(i))},tm=function(i,t){return i==null?void 0:i[t]},Fe=function(i,t){var e=tm(i,t);return Xg(e)?e:void 0},go=function(){try{var i=Fe(Object,"defineProperty");return i({},"",{}),i}catch{}}(),ci=function(i,t,e){t=="__proto__"&&go?go(i,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):i[t]=e},Fn=function(i,t){return i===t||i!=i&&t!=t};var em=Object.prototype.hasOwnProperty;const li=function(i,t,e){var n=i[t];em.call(i,t)&&Fn(n,e)&&(e!==void 0||t in i)||ci(i,t,e)},an=function(i,t,e,n){var o=!e;e||(e={});for(var r=-1,s=t.length;++r<s;){var a=t[r],c=n?n(e[a],i[a],a,e,i):void 0;c===void 0&&(c=i[a]),o?ci(e,a,c):li(e,a,c)}return e},Ve=function(i){return i},nm=function(i,t,e){switch(e.length){case 0:return i.call(t);case 1:return i.call(t,e[0]);case 2:return i.call(t,e[0],e[1]);case 3:return i.call(t,e[0],e[1],e[2])}return i.apply(t,e)};var fs=Math.max;const om=function(i,t,e){return t=fs(t===void 0?i.length-1:t,0),function(){for(var n=arguments,o=-1,r=fs(n.length-t,0),s=Array(r);++o<r;)s[o]=n[t+o];o=-1;for(var a=Array(t+1);++o<t;)a[o]=n[o];return a[t]=e(s),nm(i,this,a)}},im=function(i){return function(){return i}},rm=go?function(i,t){return go(i,"toString",{configurable:!0,enumerable:!1,value:im(t),writable:!0})}:Ve;var sm=Date.now;const am=function(i){var t=0,e=0;return function(){var n=sm(),o=16-(n-e);if(e=n,o>0){if(++t>=800)return arguments[0]}else t=0;return i.apply(void 0,arguments)}}(rm),cm=function(i,t){return am(om(i,t,Ve),i+"")},ks=function(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=9007199254740991},mo=function(i){return i!=null&&ks(i.length)&&!Re(i)};var lm=/^(?:0|[1-9]\d*)$/;const di=function(i,t){var e=typeof i;return!!(t=t==null?9007199254740991:t)&&(e=="number"||e!="symbol"&&lm.test(i))&&i>-1&&i%1==0&&i<t},dm=function(i,t,e){if(!Z(e))return!1;var n=typeof t;return!!(n=="number"?mo(e)&&di(t,e.length):n=="string"&&t in e)&&Fn(e[t],i)},bs=function(i){return cm(function(t,e){var n=-1,o=e.length,r=o>1?e[o-1]:void 0,s=o>2?e[2]:void 0;for(r=i.length>3&&typeof r=="function"?(o--,r):void 0,s&&dm(e[0],e[1],s)&&(r=o<3?void 0:r,o=1),t=Object(t);++n<o;){var a=e[n];a&&i(t,a,n,r)}return t})},hm=function(i,t){for(var e=-1,n=Array(i);++e<i;)n[e]=t(e);return n},qt=function(i){return i!=null&&typeof i=="object"},ws=function(i){return qt(i)&&Te(i)=="[object Arguments]"};var _s=Object.prototype,um=_s.hasOwnProperty,gm=_s.propertyIsEnumerable;const hi=ws(function(){return arguments}())?ws:function(i){return qt(i)&&um.call(i,"callee")&&!gm.call(i,"callee")},Pt=Array.isArray,mm=function(){return!1};var As=L&&!L.nodeType&&L,Cs=As&&!0&&Y&&!Y.nodeType&&Y,vs=Cs&&Cs.exports===As?Lt.Buffer:void 0;const Vn=(vs?vs.isBuffer:void 0)||mm;var lt={};lt["[object Float32Array]"]=lt["[object Float64Array]"]=lt["[object Int8Array]"]=lt["[object Int16Array]"]=lt["[object Int32Array]"]=lt["[object Uint8Array]"]=lt["[object Uint8ClampedArray]"]=lt["[object Uint16Array]"]=lt["[object Uint32Array]"]=!0,lt["[object Arguments]"]=lt["[object Array]"]=lt["[object ArrayBuffer]"]=lt["[object Boolean]"]=lt["[object DataView]"]=lt["[object Date]"]=lt["[object Error]"]=lt["[object Function]"]=lt["[object Map]"]=lt["[object Number]"]=lt["[object Object]"]=lt["[object RegExp]"]=lt["[object Set]"]=lt["[object String]"]=lt["[object WeakMap]"]=!1;const pm=function(i){return qt(i)&&ks(i.length)&&!!lt[Te(i)]},ui=function(i){return function(t){return i(t)}};var ys=L&&!L.nodeType&&L,Un=ys&&!0&&Y&&!Y.nodeType&&Y,gi=Un&&Un.exports===ys&&ce.process;const cn=function(){try{var i=Un&&Un.require&&Un.require("util").types;return i||gi&&gi.binding&&gi.binding("util")}catch{}}();var xs=cn&&cn.isTypedArray;const mi=xs?ui(xs):pm;var fm=Object.prototype.hasOwnProperty;const Es=function(i,t){var e=Pt(i),n=!e&&hi(i),o=!e&&!n&&Vn(i),r=!e&&!n&&!o&&mi(i),s=e||n||o||r,a=s?hm(i.length,String):[],c=a.length;for(var l in i)!t&&!fm.call(i,l)||s&&(l=="length"||o&&(l=="offset"||l=="parent")||r&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||di(l,c))||a.push(l);return a};var km=Object.prototype;const pi=function(i){var t=i&&i.constructor;return i===(typeof t=="function"&&t.prototype||km)},bm=function(i){var t=[];if(i!=null)for(var e in Object(i))t.push(e);return t};var wm=Object.prototype.hasOwnProperty;const _m=function(i){if(!Z(i))return bm(i);var t=pi(i),e=[];for(var n in i)(n!="constructor"||!t&&wm.call(i,n))&&e.push(n);return e},ln=function(i){return mo(i)?Es(i,!0):_m(i)},Hn=bs(function(i,t){an(t,ln(t),i)}),po=Symbol("observableProperties"),fo=Symbol("boundObservables"),ko=Symbol("boundProperties"),dn=Symbol("decoratedMethods"),Ds=Symbol("decoratedOriginal"),fi={set(i,t){if(Z(i))return void Object.keys(i).forEach(n=>{this.set(n,i[n])},this);Is(this);const e=this[po];if(i in this&&!e.has(i))throw new m("observable-set-cannot-override",this);Object.defineProperty(this,i,{enumerable:!0,configurable:!0,get:()=>e.get(i),set(n){const o=e.get(i);let r=this.fire("set:"+i,i,n,o);r===void 0&&(r=n),o===r&&e.has(i)||(e.set(i,r),this.fire("change:"+i,i,r,o))}}),this[i]=t},bind(...i){if(!i.length||!Ms(i))throw new m("observable-bind-wrong-properties",this);if(new Set(i).size!==i.length)throw new m("observable-bind-duplicate-properties",this);Is(this);const t=this[ko];i.forEach(n=>{if(t.has(n))throw new m("observable-bind-rebind",this)});const e=new Map;return i.forEach(n=>{const o={property:n,to:[]};t.set(n,o),e.set(n,o)}),{to:Am,toMany:Cm,_observable:this,_bindProperties:i,_to:[],_bindings:e}},unbind(...i){if(!this[po])return;const t=this[ko],e=this[fo];if(i.length){if(!Ms(i))throw new m("observable-unbind-wrong-properties",this);i.forEach(n=>{const o=t.get(n);if(!o)return;let r,s,a,c;o.to.forEach(l=>{r=l[0],s=l[1],a=e.get(r),c=a[s],c.delete(o),c.size||delete a[s],Object.keys(a).length||(e.delete(r),this.stopListening(r,"change"))}),t.delete(n)})}else e.forEach((n,o)=>{this.stopListening(o,"change")}),e.clear(),t.clear()},decorate(i){const t=this[i];if(!t)throw new m("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:i});this.on(i,(e,n)=>{e.return=t.apply(this,n)}),this[i]=function(...e){return this.fire(i,e)},this[i][Ds]=t,this[dn]||(this[dn]=[]),this[dn].push(i)}};Hn(fi,K),fi.stopListening=function(i,t,e){if(!i&&this[dn]){for(const n of this[dn])this[n]=this[n][Ds];delete this[dn]}K.stopListening.call(this,i,t,e)};const st=fi;function Is(i){i[po]||(Object.defineProperty(i,po,{value:new Map}),Object.defineProperty(i,fo,{value:new Map}),Object.defineProperty(i,ko,{value:new Map}))}function Am(...i){const t=function(...r){if(!r.length)throw new m("observable-bind-to-parse-error",null);const s={to:[]};let a;return typeof r[r.length-1]=="function"&&(s.callback=r.pop()),r.forEach(c=>{if(typeof c=="string")a.properties.push(c);else{if(typeof c!="object")throw new m("observable-bind-to-parse-error",null);a={observable:c,properties:[]},s.to.push(a)}}),s}(...i),e=Array.from(this._bindings.keys()),n=e.length;if(!t.callback&&t.to.length>1)throw new m("observable-bind-to-no-callback",this);if(n>1&&t.callback)throw new m("observable-bind-to-extra-callback",this);var o;t.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new m("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(e[0]).callback=t.callback),o=this._observable,this._to.forEach(r=>{const s=o[fo];let a;s.get(r.observable)||o.listenTo(r.observable,"change",(c,l)=>{a=s.get(r.observable)[l],a&&a.forEach(d=>{Ss(o,d.property)})})}),function(r){let s;r._bindings.forEach((a,c)=>{r._to.forEach(l=>{s=l.properties[a.callback?0:r._bindProperties.indexOf(c)],a.to.push([l.observable,s]),function(d,h,u,g){const p=d[fo],f=p.get(u),b=f||{};b[g]||(b[g]=new Set),b[g].add(h),f||p.set(u,b)}(r._observable,a,l.observable,s)})})}(this),this._bindProperties.forEach(r=>{Ss(this._observable,r)})}function Cm(i,t,e){if(this._bindings.size>1)throw new m("observable-bind-to-many-not-one-binding",this);this.to(...function(n,o){const r=n.map(s=>[s,o]);return Array.prototype.concat.apply([],r)}(i,t),e)}function Ms(i){return i.every(t=>typeof t=="string")}function Ss(i,t){const e=i[ko].get(t);let n;e.callback?n=e.callback.apply(i,e.to.map(o=>o[0][o[1]])):(n=e.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(i,t)?i[t]=n:i.set(t,n)}function z(i,...t){t.forEach(e=>{Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)).forEach(n=>{if(n in i.prototype)return;const o=Object.getOwnPropertyDescriptor(e,n);o.enumerable=!1,Object.defineProperty(i.prototype,n,o)})})}class T{constructor(t){this.editor=t,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",Ts,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",Ts),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Ts(i){i.return=!1,i.stop()}z(T,st);class q{constructor(t){this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this.affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",e=>{this.isEnabled||e.stop()},{priority:"high"}),this.listenTo(t,"change:isReadOnly",(e,n,o)=>{o&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",Ns,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",Ns),this.refresh())}execute(){}destroy(){this.stopListening()}}function Ns(i){i.return=!1,i.stop()}z(q,st);class Bs extends q{constructor(t){super(t),this._childCommandsDefinitions=[]}refresh(){}execute(...t){const e=this._getFirstEnabledCommand();return!!e&&e.execute(t)}registerChildCommand(t,e={priority:"normal"}){y(this._childCommandsDefinitions,{command:t,priority:e.priority}),t.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const t=this._childCommandsDefinitions.find(({command:e})=>e.isEnabled);return t&&t.command}}const Ps=function(i,t){return function(e){return i(t(e))}},ki=Ps(Object.getPrototypeOf,Object);var vm=Function.prototype,ym=Object.prototype,zs=vm.toString,xm=ym.hasOwnProperty,Em=zs.call(Object);const Ft=function(i){if(!qt(i)||Te(i)!="[object Object]")return!1;var t=ki(i);if(t===null)return!0;var e=xm.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&zs.call(e)==Em},Dm=function(){this.__data__=[],this.size=0},bo=function(i,t){for(var e=i.length;e--;)if(Fn(i[e][0],t))return e;return-1};var Im=Array.prototype.splice;const Mm=function(i){var t=this.__data__,e=bo(t,i);return!(e<0)&&(e==t.length-1?t.pop():Im.call(t,e,1),--this.size,!0)},Sm=function(i){var t=this.__data__,e=bo(t,i);return e<0?void 0:t[e][1]},Tm=function(i){return bo(this.__data__,i)>-1},Nm=function(i,t){var e=this.__data__,n=bo(e,i);return n<0?(++this.size,e.push([i,t])):e[n][1]=t,this};function hn(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}hn.prototype.clear=Dm,hn.prototype.delete=Mm,hn.prototype.get=Sm,hn.prototype.has=Tm,hn.prototype.set=Nm;const wo=hn,Bm=function(){this.__data__=new wo,this.size=0},Pm=function(i){var t=this.__data__,e=t.delete(i);return this.size=t.size,e},zm=function(i){return this.__data__.get(i)},Lm=function(i){return this.__data__.has(i)},Gn=Fe(Lt,"Map"),qn=Fe(Object,"create"),Om=function(){this.__data__=qn?qn(null):{},this.size=0},Rm=function(i){var t=this.has(i)&&delete this.__data__[i];return this.size-=t?1:0,t};var jm=Object.prototype.hasOwnProperty;const Fm=function(i){var t=this.__data__;if(qn){var e=t[i];return e==="__lodash_hash_undefined__"?void 0:e}return jm.call(t,i)?t[i]:void 0};var Vm=Object.prototype.hasOwnProperty;const Um=function(i){var t=this.__data__;return qn?t[i]!==void 0:Vm.call(t,i)},Hm=function(i,t){var e=this.__data__;return this.size+=this.has(i)?0:1,e[i]=qn&&t===void 0?"__lodash_hash_undefined__":t,this};function un(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}un.prototype.clear=Om,un.prototype.delete=Rm,un.prototype.get=Fm,un.prototype.has=Um,un.prototype.set=Hm;const Ls=un,Gm=function(){this.size=0,this.__data__={hash:new Ls,map:new(Gn||wo),string:new Ls}},qm=function(i){var t=typeof i;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?i!=="__proto__":i===null},_o=function(i,t){var e=i.__data__;return qm(t)?e[typeof t=="string"?"string":"hash"]:e.map},Wm=function(i){var t=_o(this,i).delete(i);return this.size-=t?1:0,t},Ym=function(i){return _o(this,i).get(i)},Km=function(i){return _o(this,i).has(i)},$m=function(i,t){var e=_o(this,i),n=e.size;return e.set(i,t),this.size+=e.size==n?0:1,this};function gn(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}gn.prototype.clear=Gm,gn.prototype.delete=Wm,gn.prototype.get=Ym,gn.prototype.has=Km,gn.prototype.set=$m;const Ao=gn,Qm=function(i,t){var e=this.__data__;if(e instanceof wo){var n=e.__data__;if(!Gn||n.length<199)return n.push([i,t]),this.size=++e.size,this;e=this.__data__=new Ao(n)}return e.set(i,t),this.size=e.size,this};function mn(i){var t=this.__data__=new wo(i);this.size=t.size}mn.prototype.clear=Bm,mn.prototype.delete=Pm,mn.prototype.get=zm,mn.prototype.has=Lm,mn.prototype.set=Qm;const Wn=mn,Zm=function(i,t){for(var e=-1,n=i==null?0:i.length;++e<n&&t(i[e],e,i)!==!1;);return i},Jm=Ps(Object.keys,Object);var Xm=Object.prototype.hasOwnProperty;const tp=function(i){if(!pi(i))return Jm(i);var t=[];for(var e in Object(i))Xm.call(i,e)&&e!="constructor"&&t.push(e);return t},bi=function(i){return mo(i)?Es(i):tp(i)},ep=function(i,t){return i&&an(t,bi(t),i)},np=function(i,t){return i&&an(t,ln(t),i)};var Os=L&&!L.nodeType&&L,Rs=Os&&!0&&Y&&!Y.nodeType&&Y,js=Rs&&Rs.exports===Os?Lt.Buffer:void 0,Fs=js?js.allocUnsafe:void 0;const Vs=function(i,t){if(t)return i.slice();var e=i.length,n=Fs?Fs(e):new i.constructor(e);return i.copy(n),n},Us=function(i,t){var e=-1,n=i.length;for(t||(t=Array(n));++e<n;)t[e]=i[e];return t},op=function(i,t){for(var e=-1,n=i==null?0:i.length,o=0,r=[];++e<n;){var s=i[e];t(s,e,i)&&(r[o++]=s)}return r},Hs=function(){return[]};var ip=Object.prototype.propertyIsEnumerable,Gs=Object.getOwnPropertySymbols;const wi=Gs?function(i){return i==null?[]:(i=Object(i),op(Gs(i),function(t){return ip.call(i,t)}))}:Hs,rp=function(i,t){return an(i,wi(i),t)},qs=function(i,t){for(var e=-1,n=t.length,o=i.length;++e<n;)i[o+e]=t[e];return i},Ws=Object.getOwnPropertySymbols?function(i){for(var t=[];i;)qs(t,wi(i)),i=ki(i);return t}:Hs,sp=function(i,t){return an(i,Ws(i),t)},Ys=function(i,t,e){var n=t(i);return Pt(i)?n:qs(n,e(i))},_i=function(i){return Ys(i,bi,wi)},ap=function(i){return Ys(i,ln,Ws)},Ai=Fe(Lt,"DataView"),Ci=Fe(Lt,"Promise"),vi=Fe(Lt,"Set"),yi=Fe(Lt,"WeakMap");var Ks="[object Map]",$s="[object Promise]",Qs="[object Set]",Zs="[object WeakMap]",Js="[object DataView]",cp=je(Ai),lp=je(Gn),dp=je(Ci),hp=je(vi),up=je(yi),Ue=Te;(Ai&&Ue(new Ai(new ArrayBuffer(1)))!=Js||Gn&&Ue(new Gn)!=Ks||Ci&&Ue(Ci.resolve())!=$s||vi&&Ue(new vi)!=Qs||yi&&Ue(new yi)!=Zs)&&(Ue=function(i){var t=Te(i),e=t=="[object Object]"?i.constructor:void 0,n=e?je(e):"";if(n)switch(n){case cp:return Js;case lp:return Ks;case dp:return $s;case hp:return Qs;case up:return Zs}return t});const Yn=Ue;var gp=Object.prototype.hasOwnProperty;const mp=function(i){var t=i.length,e=new i.constructor(t);return t&&typeof i[0]=="string"&&gp.call(i,"index")&&(e.index=i.index,e.input=i.input),e},Co=Lt.Uint8Array,xi=function(i){var t=new i.constructor(i.byteLength);return new Co(t).set(new Co(i)),t},pp=function(i,t){var e=t?xi(i.buffer):i.buffer;return new i.constructor(e,i.byteOffset,i.byteLength)};var fp=/\w*$/;const kp=function(i){var t=new i.constructor(i.source,fp.exec(i));return t.lastIndex=i.lastIndex,t};var Xs=le?le.prototype:void 0,ta=Xs?Xs.valueOf:void 0;const bp=function(i){return ta?Object(ta.call(i)):{}},ea=function(i,t){var e=t?xi(i.buffer):i.buffer;return new i.constructor(e,i.byteOffset,i.length)},wp=function(i,t,e){var n=i.constructor;switch(t){case"[object ArrayBuffer]":return xi(i);case"[object Boolean]":case"[object Date]":return new n(+i);case"[object DataView]":return pp(i,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return ea(i,e);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(i);case"[object RegExp]":return kp(i);case"[object Symbol]":return bp(i)}};var na=Object.create;const _p=function(){function i(){}return function(t){if(!Z(t))return{};if(na)return na(t);i.prototype=t;var e=new i;return i.prototype=void 0,e}}(),oa=function(i){return typeof i.constructor!="function"||pi(i)?{}:_p(ki(i))},Ap=function(i){return qt(i)&&Yn(i)=="[object Map]"};var ia=cn&&cn.isMap;const Cp=ia?ui(ia):Ap,vp=function(i){return qt(i)&&Yn(i)=="[object Set]"};var ra=cn&&cn.isSet;const yp=ra?ui(ra):vp;var sa="[object Arguments]",aa="[object Function]",xp="[object Object]",at={};at[sa]=at["[object Array]"]=at["[object ArrayBuffer]"]=at["[object DataView]"]=at["[object Boolean]"]=at["[object Date]"]=at["[object Float32Array]"]=at["[object Float64Array]"]=at["[object Int8Array]"]=at["[object Int16Array]"]=at["[object Int32Array]"]=at["[object Map]"]=at["[object Number]"]=at["[object Object]"]=at["[object RegExp]"]=at["[object Set]"]=at["[object String]"]=at["[object Symbol]"]=at["[object Uint8Array]"]=at["[object Uint8ClampedArray]"]=at["[object Uint16Array]"]=at["[object Uint32Array]"]=!0,at["[object Error]"]=at[aa]=at["[object WeakMap]"]=!1;const Ei=function i(t,e,n,o,r,s){var a,c=1&e,l=2&e,d=4&e;if(n&&(a=r?n(t,o,r,s):n(t)),a!==void 0)return a;if(!Z(t))return t;var h=Pt(t);if(h){if(a=mp(t),!c)return Us(t,a)}else{var u=Yn(t),g=u==aa||u=="[object GeneratorFunction]";if(Vn(t))return Vs(t,c);if(u==xp||u==sa||g&&!r){if(a=l||g?{}:oa(t),!c)return l?sp(t,np(a,t)):rp(t,ep(a,t))}else{if(!at[u])return r?t:{};a=wp(t,u,c)}}s||(s=new Wn);var p=s.get(t);if(p)return p;s.set(t,a),yp(t)?t.forEach(function(b){a.add(i(b,e,n,b,t,s))}):Cp(t)&&t.forEach(function(b,w){a.set(w,i(b,e,n,w,t,s))});var f=h?void 0:(d?l?ap:_i:l?ln:bi)(t);return Zm(f||t,function(b,w){f&&(b=t[w=b]),li(a,w,i(b,e,n,w,t,s))}),a},ca=function(i,t){return Ei(i,5,t=typeof t=="function"?t:void 0)},Ne=function(i){return qt(i)&&i.nodeType===1&&!Ft(i)};class la{constructor(t,e){this._config={},e&&this.define(da(e)),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}*names(){for(const t of Object.keys(this._config))yield t}_setToTarget(t,e,n,o=!1){if(Ft(e))return void this._setObjectToTarget(t,e,o);const r=e.split(".");e=r.pop();for(const s of r)Ft(t[s])||(t[s]={}),t=t[s];if(Ft(n))return Ft(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,o);o&&t[e]!==void 0||(t[e]=n)}_getFromSource(t,e){const n=e.split(".");e=n.pop();for(const o of n){if(!Ft(t[o])){t=null;break}t=t[o]}return t?da(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(o=>{this._setToTarget(t,o,e[o],n)})}}function da(i){return ca(i,Ep)}function Ep(i){return Ne(i)?i:void 0}function Wt(i){return!(!i||!i[Symbol.iterator])}class Yt{constructor(t={},e={}){const n=Wt(t);if(n||(e=t),this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const o of t)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){return this.addMany([t],e)}addMany(t,e){if(e===void 0)e=this._items.length;else if(e>this._items.length||e<0)throw new m("collection-add-item-invalid-index",this);for(let n=0;n<t.length;n++){const o=t[n],r=this._getItemIdBeforeAdding(o),s=e+n;this._items.splice(s,0,o),this._itemMap.set(r,o),this.fire("add",o,s)}return this.fire("change",{added:t,removed:[],index:e}),this}get(t){let e;if(typeof t=="string")e=this._itemMap.get(t);else{if(typeof t!="number")throw new m("collection-get-invalid-arg",this);e=this._items[t]}return e||null}has(t){if(typeof t=="string")return this._itemMap.has(t);{const e=t[this._idProperty];return this._itemMap.has(e)}}getIndex(t){let e;return e=typeof t=="string"?this._itemMap.get(t):t,this._items.indexOf(e)}remove(t){const[e,n]=this._remove(t);return this.fire("change",{added:[],removed:[e],index:n}),e}map(t,e){return this._items.map(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const t=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:t,index:0})}bindTo(t){if(this._bindToCollection)throw new m("collection-bind-to-rebind",this);return this._bindToCollection=t,{as:e=>{this._setUpBindToBinding(n=>new e(n))},using:e=>{typeof e=="function"?this._setUpBindToBinding(n=>e(n)):this._setUpBindToBinding(n=>n[e])}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(o,r,s)=>{const a=e._bindToCollection==this,c=e._bindToInternalToExternalMap.get(r);if(a&&c)this._bindToExternalToInternalMap.set(r,c),this._bindToInternalToExternalMap.set(c,r);else{const l=t(r);if(!l)return void this._skippedIndexesFromExternal.push(s);let d=s;for(const h of this._skippedIndexesFromExternal)s>h&&d--;for(const h of e._skippedIndexesFromExternal)d>=h&&d++;this._bindToExternalToInternalMap.set(r,l),this._bindToInternalToExternalMap.set(l,r),this.add(l,d);for(let h=0;h<e._skippedIndexesFromExternal.length;h++)d<=e._skippedIndexesFromExternal[h]&&e._skippedIndexesFromExternal[h]++}};for(const o of e)n(0,o,e.getIndex(o));this.listenTo(e,"add",n),this.listenTo(e,"remove",(o,r,s)=>{const a=this._bindToExternalToInternalMap.get(r);a&&this.remove(a),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((c,l)=>(s<l&&c.push(l-1),s>l&&c.push(l),c),[])})}_getItemIdBeforeAdding(t){const e=this._idProperty;let n;if(e in t){if(n=t[e],typeof n!="string")throw new m("collection-add-invalid-id",this);if(this.get(n))throw new m("collection-add-item-already-exists",this)}else t[e]=n=v();return n}_remove(t){let e,n,o,r=!1;const s=this._idProperty;if(typeof t=="string"?(n=t,o=this._itemMap.get(n),r=!o,o&&(e=this._items.indexOf(o))):typeof t=="number"?(e=t,o=this._items[e],r=!o,o&&(n=o[s])):(o=t,n=o[s],e=this._items.indexOf(o),r=e==-1||!this._itemMap.get(n)),r)throw new m("collection-remove-404",this);this._items.splice(e,1),this._itemMap.delete(n);const a=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(a),this.fire("remove",o,e),[o,e]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}z(Yt,K);class Di{constructor(t,e=[],n=[]){this._context=t,this._plugins=new Map,this._availablePlugins=new Map;for(const o of e)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(const[o,r]of n)this._contextPlugins.set(o,r),this._contextPlugins.set(r,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(const t of this._plugins)typeof t[0]=="function"&&(yield t)}get(t){const e=this._plugins.get(t);if(!e){let n=t;throw typeof t=="function"&&(n=t.pluginName||t.name),new m("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return e}has(t){return this._plugins.has(t)}init(t,e=[],n=[]){const o=this,r=this._context;(function p(f,b=new Set){f.forEach(w=>{c(w)&&(b.has(w)||(b.add(w),w.pluginName&&!o._availablePlugins.has(w.pluginName)&&o._availablePlugins.set(w.pluginName,w),w.requires&&p(w.requires,b)))})})(t),u(t);const s=[...function p(f,b=new Set){return f.map(w=>c(w)?w:o._availablePlugins.get(w)).reduce((w,_)=>b.has(_)?w:(b.add(_),_.requires&&(u(_.requires,_),p(_.requires,b).forEach(I=>w.add(I))),w.add(_)),new Set)}(t.filter(p=>!d(p,e)))];(function(p,f){for(const b of f){if(typeof b!="function")throw new m("plugincollection-replace-plugin-invalid-type",null,{pluginItem:b});const w=b.pluginName;if(!w)throw new m("plugincollection-replace-plugin-missing-name",null,{pluginItem:b});if(b.requires&&b.requires.length)throw new m("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:w});const _=o._availablePlugins.get(w);if(!_)throw new m("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:w});const I=p.indexOf(_);if(I===-1){if(o._contextPlugins.has(_))return;throw new m("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:w})}if(_.requires&&_.requires.length)throw new m("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:w});p.splice(I,1,b),o._availablePlugins.set(w,b)}})(s,n);const a=function(p){return p.map(f=>{const b=o._contextPlugins.get(f)||new f(r);return o._add(f,b),b})}(s);return g(a,"init").then(()=>g(a,"afterInit")).then(()=>a);function c(p){return typeof p=="function"}function l(p){return c(p)&&p.isContextPlugin}function d(p,f){return f.some(b=>b===p||h(p)===b||h(b)===p)}function h(p){return c(p)?p.pluginName||p.name:p}function u(p,f=null){p.map(b=>c(b)?b:o._availablePlugins.get(b)||b).forEach(b=>{(function(w,_){if(!c(w))throw _?new m("plugincollection-soft-required",r,{missingPlugin:w,requiredBy:h(_)}):new m("plugincollection-plugin-not-found",r,{plugin:w})})(b,f),function(w,_){if(!!l(_)&&!l(w))throw new m("plugincollection-context-required",r,{plugin:h(w),requiredBy:h(_)})}(b,f),function(w,_){if(!!_&&!!d(w,e))throw new m("plugincollection-required",r,{plugin:h(w),requiredBy:h(_)})}(b,f)})}function g(p,f){return p.reduce((b,w)=>w[f]?o._contextPlugins.has(w)?b:b.then(w[f].bind(w)):b,Promise.resolve())}}destroy(){const t=[];for(const[,e]of this)typeof e.destroy!="function"||this._contextPlugins.has(e)||t.push(e.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);const n=t.pluginName;if(n){if(this._plugins.has(n))throw new m("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t});this._plugins.set(n,e)}}}function vt(i){return Array.isArray(i)?i:[i]}function Dp(i,t,e=1){if(typeof e!="number")throw new m("translation-service-quantity-not-a-number",null,{quantity:e});const n=Object.keys(window.CKEDITOR_TRANSLATIONS).length;n===1&&(i=Object.keys(window.CKEDITOR_TRANSLATIONS)[0]);const o=t.id||t.string;if(n===0||!function(c,l){return!!window.CKEDITOR_TRANSLATIONS[c]&&!!window.CKEDITOR_TRANSLATIONS[c].dictionary[l]}(i,o))return e!==1?t.plural:t.string;const r=window.CKEDITOR_TRANSLATIONS[i].dictionary,s=window.CKEDITOR_TRANSLATIONS[i].getPluralForm||(c=>c===1?0:1);if(typeof r[o]=="string")return r[o];const a=Number(s(e));return r[o][a]}z(Di,K),window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={});const Ip=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function ha(i){return Ip.includes(i)?"rtl":"ltr"}class Mp{constructor(t={}){this.uiLanguage=t.uiLanguage||"en",this.contentLanguage=t.contentLanguage||this.uiLanguage,this.uiLanguageDirection=ha(this.uiLanguage),this.contentLanguageDirection=ha(this.contentLanguage),this.t=(e,n)=>this._t(e,n)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e=[]){e=vt(e),typeof t=="string"&&(t={string:t});const n=t.plural?e[0]:1;return function(o,r){return o.replace(/%(\d+)/g,(s,a)=>a<r.length?r[a]:s)}(Dp(this.uiLanguage,t,n),e)}}class Sp{constructor(t){this.config=new la(t,this.constructor.defaultConfig);const e=this.constructor.builtinPlugins;this.config.define("plugins",e),this.plugins=new Di(this,e);const n=this.config.get("language")||{};this.locale=new Mp({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new Yt,this._contextOwner=null}initPlugins(){const t=this.config.get("plugins")||[],e=this.config.get("substitutePlugins")||[];for(const n of t.concat(e)){if(typeof n!="function")throw new m("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new m("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(t,[],e)}destroy(){return Promise.all(Array.from(this.editors,t=>t.destroy())).then(()=>this.plugins.destroy())}_addEditor(t,e){if(this._contextOwner)throw new m("context-addeditor-private-context");this.editors.add(t),e&&(this._contextOwner=t)}_removeEditor(t){return this.editors.has(t)&&this.editors.remove(t),this._contextOwner===t?this.destroy():Promise.resolve()}_getEditorConfig(){const t={};for(const e of this.config.names())["plugins","removePlugins","extraPlugins"].includes(e)||(t[e]=this.config.get(e));return t}static create(t){return new Promise(e=>{const n=new this(t);e(n.initPlugins().then(()=>n))})}}class Kn{constructor(t){this.context=t}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}function St(i,t){const e=Math.min(i.length,t.length);for(let n=0;n<e;n++)if(i[n]!=t[n])return n;return i.length==t.length?"same":i.length<t.length?"prefix":"extension"}z(Kn,st);const ua=function(i){return Ei(i,4)};class He{constructor(t){this.document=t,this.parent=null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))==-1)throw new m("view-node-not-found-in-parent",this);return t}get nextSibling(){const t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),o=t.getAncestors(e);let r=0;for(;n[r]==o[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),o=St(e,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return e[o]<n[o]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire("change:"+t,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){const t=ua(this);return delete t.parent,t}is(t){return t==="node"||t==="view:node"}}z(He,K);class it extends He{constructor(t,e){super(t),this._textData=e}is(t){return t==="$text"||t==="view:$text"||t==="text"||t==="view:text"||t==="node"||t==="view:node"}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof it&&(this===t||this.data===t.data)}_clone(){return new it(this.document,this.data)}}class Ae{constructor(t,e,n){if(this.textNode=t,e<0||e>t.data.length)throw new m("view-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.data.length)throw new m("view-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(t){return t==="$textProxy"||t==="view:$textProxy"||t==="textProxy"||t==="view:textProxy"}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this.textNode:this.parent;for(;n!==null;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}function de(i){return Wt(i)?new Map(i):function(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}(i)}class he{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)(typeof e=="string"||e instanceof RegExp)&&(e={name:e}),this._patterns.push(e)}match(...t){for(const e of t)for(const n of this._patterns){const o=ga(e,n);if(o)return{element:e,pattern:n,match:o}}return null}matchAll(...t){const e=[];for(const n of t)for(const o of this._patterns){const r=ga(n,o);r&&e.push({element:n,pattern:o,match:r})}return e.length>0?e:null}getElementName(){if(this._patterns.length!==1)return null;const t=this._patterns[0],e=t.name;return typeof t=="function"||!e||e instanceof RegExp?null:e}}function ga(i,t){if(typeof t=="function")return t(i);const e={};return t.name&&(e.name=function(n,o){return n instanceof RegExp?!!o.match(n):n===o}(t.name,i.name),!e.name)||t.attributes&&(e.attributes=function(n,o){const r=new Set(o.getAttributeKeys());return Ft(n)?(n.style!==void 0&&A("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&A("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),Ii(n,r,s=>o.getAttribute(s))}(t.attributes,i),!e.attributes)?null:!(t.classes&&(e.classes=function(n,o){return Ii(n,o.getClassNames())}(t.classes,i),!e.classes))&&!(t.styles&&(e.styles=function(n,o){return Ii(n,o.getStyleNames(!0),r=>o.getStyle(r))}(t.styles,i),!e.styles))&&e}function Ii(i,t,e){const n=function(s){return Array.isArray(s)?s.map(a=>Ft(a)?(a.key!==void 0&&a.value!==void 0||A("matcher-pattern-missing-key-or-value",a),[a.key,a.value]):[a,!0]):Ft(s)?Object.entries(s):[[s,!0]]}(i),o=Array.from(t),r=[];return n.forEach(([s,a])=>{o.forEach(c=>{(function(l,d){return l===!0||l===d||l instanceof RegExp&&d.match(l)})(s,c)&&function(l,d,h){if(l===!0)return!0;const u=h(d);return l===u||l instanceof RegExp&&!!String(u).match(l)}(a,c,e)&&r.push(c)})}),!n.length||r.length<n.length?null:r}const vo=function(i){return typeof i=="symbol"||qt(i)&&Te(i)=="[object Symbol]"};var Tp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Np=/^\w*$/;const Bp=function(i,t){if(Pt(i))return!1;var e=typeof i;return!(e!="number"&&e!="symbol"&&e!="boolean"&&i!=null&&!vo(i))||Np.test(i)||!Tp.test(i)||t!=null&&i in Object(t)};function Mi(i,t){if(typeof i!="function"||t!=null&&typeof t!="function")throw new TypeError("Expected a function");var e=function(){var n=arguments,o=t?t.apply(this,n):n[0],r=e.cache;if(r.has(o))return r.get(o);var s=i.apply(this,n);return e.cache=r.set(o,s)||r,s};return e.cache=new(Mi.Cache||Ao),e}Mi.Cache=Ao;const Pp=Mi;var zp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lp=/\\(\\)?/g,Op=function(i){var t=Pp(i,function(n){return e.size===500&&e.clear(),n}),e=t.cache;return t}(function(i){var t=[];return i.charCodeAt(0)===46&&t.push(""),i.replace(zp,function(e,n,o,r){t.push(o?r.replace(Lp,"$1"):n||e)}),t});const Rp=Op,jp=function(i,t){for(var e=-1,n=i==null?0:i.length,o=Array(n);++e<n;)o[e]=t(i[e],e,i);return o};var ma=le?le.prototype:void 0,pa=ma?ma.toString:void 0;const Fp=function i(t){if(typeof t=="string")return t;if(Pt(t))return jp(t,i)+"";if(vo(t))return pa?pa.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e},Si=function(i){return i==null?"":Fp(i)},Ti=function(i,t){return Pt(i)?i:Bp(i,t)?[i]:Rp(Si(i))},Vp=function(i){var t=i==null?0:i.length;return t?i[t-1]:void 0},Ni=function(i){if(typeof i=="string"||vo(i))return i;var t=i+"";return t=="0"&&1/i==-1/0?"-0":t},fa=function(i,t){for(var e=0,n=(t=Ti(t,i)).length;i!=null&&e<n;)i=i[Ni(t[e++])];return e&&e==n?i:void 0},ka=function(i,t,e){var n=-1,o=i.length;t<0&&(t=-t>o?0:o+t),(e=e>o?o:e)<0&&(e+=o),o=t>e?0:e-t>>>0,t>>>=0;for(var r=Array(o);++n<o;)r[n]=i[n+t];return r},Up=function(i,t){return t.length<2?i:fa(i,ka(t,0,-1))},Hp=function(i,t){return t=Ti(t,i),(i=Up(i,t))==null||delete i[Ni(Vp(t))]},Gp=function(i,t){return i==null||Hp(i,t)},yo=function(i,t,e){var n=i==null?void 0:fa(i,t);return n===void 0?e:n},Bi=function(i,t,e){(e!==void 0&&!Fn(i[t],e)||e===void 0&&!(t in i))&&ci(i,t,e)},qp=function(i){return function(t,e,n){for(var o=-1,r=Object(t),s=n(t),a=s.length;a--;){var c=s[i?a:++o];if(e(r[c],c,r)===!1)break}return t}}(),Wp=function(i){return qt(i)&&mo(i)},Pi=function(i,t){if((t!=="constructor"||typeof i[t]!="function")&&t!="__proto__")return i[t]},Yp=function(i){return an(i,ln(i))},Kp=function(i,t,e,n,o,r,s){var a=Pi(i,e),c=Pi(t,e),l=s.get(c);if(l)Bi(i,e,l);else{var d=r?r(a,c,e+"",i,t,s):void 0,h=d===void 0;if(h){var u=Pt(c),g=!u&&Vn(c),p=!u&&!g&&mi(c);d=c,u||g||p?Pt(a)?d=a:Wp(a)?d=Us(a):g?(h=!1,d=Vs(c,!0)):p?(h=!1,d=ea(c,!0)):d=[]:Ft(c)||hi(c)?(d=a,hi(a)?d=Yp(a):Z(a)&&!Re(a)||(d=oa(c))):h=!1}h&&(s.set(c,d),o(d,c,n,r,s),s.delete(c)),Bi(i,e,d)}},$p=function i(t,e,n,o,r){t!==e&&qp(e,function(s,a){if(r||(r=new Wn),Z(s))Kp(t,e,a,n,i,o,r);else{var c=o?o(Pi(t,a),s,a+"",t,e,r):void 0;c===void 0&&(c=s),Bi(t,a,c)}},ln)},ba=bs(function(i,t,e){$p(i,t,e)}),Qp=function(i,t,e,n){if(!Z(i))return i;for(var o=-1,r=(t=Ti(t,i)).length,s=r-1,a=i;a!=null&&++o<r;){var c=Ni(t[o]),l=e;if(c==="__proto__"||c==="constructor"||c==="prototype")return i;if(o!=s){var d=a[c];(l=n?n(d,c,a):void 0)===void 0&&(l=Z(d)?d:di(t[o+1])?[]:{})}li(a,c,l),a=a[c]}return i},Zp=function(i,t,e){return i==null?i:Qp(i,t,e)};class Jp{constructor(t){this._styles={},this._styleProcessor=t}get isEmpty(){const t=Object.entries(this._styles);return!Array.from(t).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(t){this.clear();const e=Array.from(function(n){let o=null,r=0,s=0,a=null;const c=new Map;if(n==="")return c;n.charAt(n.length-1)!=";"&&(n+=";");for(let l=0;l<n.length;l++){const d=n.charAt(l);if(o===null)switch(d){case":":a||(a=n.substr(r,l-r),s=l+1);break;case'"':case"'":o=d;break;case";":{const h=n.substr(s,l-s);a&&c.set(a.trim(),h.trim()),a=null,r=l+1;break}}else d===o&&(o=null)}return c}(t).entries());for(const[n,o]of e)this._styleProcessor.toNormalizedForm(n,o,this._styles)}has(t){if(this.isEmpty)return!1;const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)}set(t,e){if(Z(t))for(const[n,o]of Object.entries(t))this._styleProcessor.toNormalizedForm(n,o,this._styles);else this._styleProcessor.toNormalizedForm(t,e,this._styles)}remove(t){const e=zi(t);Gp(this._styles,e),delete this._styles[t],this._cleanEmptyObjectsOnPath(e)}getNormalized(t){return this._styleProcessor.getNormalized(t,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(t=>t.join(":")).sort().join(";")+";"}getAsString(t){if(this.isEmpty)return;if(this._styles[t]&&!Z(this._styles[t]))return this._styles[t];const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)?e[1]:void 0}getStyleNames(t=!1){return this.isEmpty?[]:t?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([e])=>e)}clear(){this._styles={}}_getStylesEntries(){const t=[],e=Object.keys(this._styles);for(const n of e)t.push(...this._styleProcessor.getReducedForm(n,this._styles));return t}_cleanEmptyObjectsOnPath(t){const e=t.split(".");if(!(e.length>1))return;const n=e.splice(0,e.length-1).join("."),o=yo(this._styles,n);!o||!Array.from(Object.keys(o)).length&&this.remove(n)}}class Xp{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(t,e,n){if(Z(e))Li(n,zi(t),e);else if(this._normalizers.has(t)){const o=this._normalizers.get(t),{path:r,value:s}=o(e);Li(n,r,s)}else Li(n,t,e)}getNormalized(t,e){if(!t)return ba({},e);if(e[t]!==void 0)return e[t];if(this._extractors.has(t)){const n=this._extractors.get(t);if(typeof n=="string")return yo(e,n);const o=n(t,e);if(o)return o}return yo(e,zi(t))}getReducedForm(t,e){const n=this.getNormalized(t,e);return n===void 0?[]:this._reducers.has(t)?this._reducers.get(t)(n):[[t,n]]}getStyleNames(t){const e=Array.from(this._consumables.keys()).filter(o=>{const r=this.getNormalized(o,t);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...e,...Object.keys(t)]);return Array.from(n.values())}getRelatedStyles(t){return this._consumables.get(t)||[]}setNormalizer(t,e){this._normalizers.set(t,e)}setExtractor(t,e){this._extractors.set(t,e)}setReducer(t,e){this._reducers.set(t,e)}setStyleRelation(t,e){this._mapStyleNames(t,e);for(const n of e)this._mapStyleNames(n,[t])}_mapStyleNames(t,e){this._consumables.has(t)||this._consumables.set(t,[]),this._consumables.get(t).push(...e)}}function zi(i){return i.replace("-",".")}function Li(i,t,e){let n=e;Z(e)&&(n=ba({},yo(i,t),e)),Zp(i,t,n)}class Kt extends He{constructor(t,e,n,o){if(super(t),this.name=e,this._attrs=function(r){r=de(r);for(const[s,a]of r)a===null?r.delete(s):typeof a!="string"&&r.set(s,String(a));return r}(n),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");wa(this._classes,r),this._attrs.delete("class")}this._styles=new Jp(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}is(t,e=null){return e?e===this.name&&(t==="element"||t==="view:element"):t==="element"||t==="view:element"||t==="node"||t==="view:node"}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(t){if(t=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(t=="style"){const e=this._styles.toString();return e==""?void 0:e}return this._attrs.get(t)}hasAttribute(t){return t=="class"?this._classes.size>0:t=="style"?!this._styles.isEmpty:this._attrs.has(t)}isSimilar(t){if(!(t instanceof Kt))return!1;if(this===t)return!0;if(this.name!=t.name||this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(const[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(const e of this._classes)if(!t._classes.has(e))return!1;for(const e of this._styles.getStyleNames())if(!t._styles.has(e)||t._styles.getAsString(e)!==this._styles.getAsString(e))return!1;return!0}hasClass(...t){for(const e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.getAsString(t)}getNormalizedStyle(t){return this._styles.getNormalized(t)}getStyleNames(t=!1){return this._styles.getStyleNames(t)}hasStyle(...t){for(const e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){const e=new he(...t);let n=this.parent;for(;n;){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const t=Array.from(this._classes).sort().join(","),e=this._styles.toString(),n=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(t==""?"":` class="${t}"`)+(e?` style="${e}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(t){return this._unsafeAttributesToRender.includes(t)}_clone(t=!1){const e=[];if(t)for(const o of this.getChildren())e.push(o._clone(t));const n=new this.constructor(this.document,this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0;const o=function(r,s){return typeof s=="string"?[new it(r,s)]:(Wt(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new it(r,a):a instanceof Ae?new it(r,a.data):a))}(this.document,e);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){e=String(e),this._fireChange("attributes",this),t=="class"?wa(this._classes,e):t=="style"?this._styles.setTo(e):this._attrs.set(t,e)}_removeAttribute(t){return this._fireChange("attributes",this),t=="class"?this._classes.size>0&&(this._classes.clear(),!0):t=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this);for(const e of vt(t))this._classes.add(e)}_removeClass(t){this._fireChange("attributes",this);for(const e of vt(t))this._classes.delete(e)}_setStyle(t,e){this._fireChange("attributes",this),this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this);for(const e of vt(t))this._styles.remove(e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function wa(i,t){const e=t.split(/\s+/);i.clear(),e.forEach(n=>i.add(n))}class xo extends Kt{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=_a}is(t,e=null){return e?e===this.name&&(t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"):t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}}function _a(){const i=[...this.getChildren()],t=i[this.childCount-1];if(t&&t.is("element","br"))return this.childCount;for(const e of i)if(!e.is("uiElement"))return null;return this.childCount}class Eo extends xo{constructor(t,e,n,o){super(t,e,n,o),this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",r=>r&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}is(t,e=null){return e?e===this.name&&(t==="editableElement"||t==="view:editableElement"||t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"):t==="editableElement"||t==="view:editableElement"||t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}destroy(){this.stopListening()}}z(Eo,st);const Aa=Symbol("rootName");class tf extends Eo{constructor(t,e){super(t,e),this.rootName="main"}is(t,e=null){return e?e===this.name&&(t==="rootElement"||t==="view:rootElement"||t==="editableElement"||t==="view:editableElement"||t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"):t==="rootElement"||t==="view:rootElement"||t==="editableElement"||t==="view:editableElement"||t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}get rootName(){return this.getCustomProperty(Aa)}set rootName(t){this._setCustomProperty(Aa,t)}set _name(t){this.name=t}}class Ge{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new m("view-tree-walker-no-start-position",null);if(t.direction&&t.direction!="forward"&&t.direction!="backward")throw new m("view-tree-walker-unknown-direction",t.startPosition,{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this.position=N._createAt(t.startPosition):this.position=N._createAt(t.boundaries[t.direction=="backward"?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(t){let e,n,o;do o=this.position,{done:e,value:n}=this.next();while(!e&&t(n));e||(this.position=o)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===n.childCount)return{done:!0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};let o;if(n instanceof it){if(t.isAtEnd)return this.position=N._createAfter(n),this._next();o=n.data[t.offset]}else o=n.getChild(t.offset);if(o instanceof Kt)return this.shallow?t.offset++:t=new N(o,0),this.position=t,this._formatReturnValue("elementStart",o,e,t,1);if(o instanceof it){if(this.singleCharacters)return t=new N(o,0),this.position=t,this._next();{let r,s=o.data.length;return o==this._boundaryEndParent?(s=this.boundaries.end.offset,r=new Ae(o,0,s),t=N._createAfter(r)):(r=new Ae(o,0,o.data.length),t.offset++),this.position=t,this._formatReturnValue("text",r,e,t,s)}}if(typeof o=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset;const s=new Ae(n,t.offset,r);return t.offset+=r,this.position=t,this._formatReturnValue("text",s,e,t,r)}return t=N._createAfter(n),this.position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===0)return{done:!0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};let o;if(n instanceof it){if(t.isAtStart)return this.position=N._createBefore(n),this._previous();o=n.data[t.offset-1]}else o=n.getChild(t.offset-1);if(o instanceof Kt)return this.shallow?(t.offset--,this.position=t,this._formatReturnValue("elementStart",o,e,t,1)):(t=new N(o,o.childCount),this.position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,e,t));if(o instanceof it){if(this.singleCharacters)return t=new N(o,o.data.length),this.position=t,this._previous();{let r,s=o.data.length;if(o==this._boundaryStartParent){const a=this.boundaries.start.offset;r=new Ae(o,a,o.data.length-a),s=r.data.length,t=N._createBefore(r)}else r=new Ae(o,0,o.data.length),t.offset--;return this.position=t,this._formatReturnValue("text",r,e,t,s)}}if(typeof o=="string"){let r;if(this.singleCharacters)r=1;else{const a=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=t.offset-a}t.offset-=r;const s=new Ae(n,t.offset,r);return this.position=t,this._formatReturnValue("text",s,e,t,r)}return t=N._createBefore(n),this.position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,o,r){return e instanceof Ae&&(e.offsetInText+e.data.length==e.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=N._createAfter(e.textNode):(o=N._createAfter(e.textNode),this.position=o)),e.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=N._createBefore(e.textNode):(o=N._createBefore(e.textNode),this.position=o))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:o,length:r}}}}class N{constructor(t,e){this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const t=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof Eo);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){const e=N._createAt(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new Ge(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let o=0;for(;e[o]==n[o]&&e[o];)o++;return o===0?null:e[o-1]}is(t){return t==="position"||t==="view:position"}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return this.compareWith(t)=="before"}isAfter(t){return this.compareWith(t)=="after"}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";const e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);const o=St(e,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return e[o]<n[o]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new Ge(t)}clone(){return new N(this.parent,this.offset)}static _createAt(t,e){if(t instanceof N)return new this(t.parent,t.offset);{const n=t;if(e=="end")e=n.is("$text")?n.data.length:n.childCount;else{if(e=="before")return this._createBefore(n);if(e=="after")return this._createAfter(n);if(e!==0&&!e)throw new m("view-createpositionat-offset-required",n)}return new N(n,e)}}static _createAfter(t){if(t.is("$textProxy"))return new N(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new m("view-position-after-root",t,{root:t});return new N(t.parent,t.index+1)}static _createBefore(t){if(t.is("$textProxy"))return new N(t.textNode,t.offsetInText);if(!t.parent)throw new m("view-position-before-root",t,{root:t});return new N(t.parent,t.index)}}class j{constructor(t,e=null){this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*new Ge({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(Do,{direction:"backward"}),e=this.end.getLastMatchingPosition(Do);return t.parent.is("$text")&&t.isAtStart&&(t=N._createBefore(t.parent)),e.parent.is("$text")&&e.isAtEnd&&(e=N._createAfter(e.parent)),new j(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(Do);if(t.isAfter(this.end)||t.isEqual(this.end))return new j(t,t);let e=this.end.getLastMatchingPosition(Do,{direction:"backward"});const n=t.nodeAfter,o=e.nodeBefore;return n&&n.is("$text")&&(t=new N(n,0)),o&&o.is("$text")&&(e=new N(o,o.data.length)),new j(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),o=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&o}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new j(this.start,t.start)),this.containsPosition(t.end)&&e.push(new j(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new j(e,n)}return null}getWalker(t={}){return t.boundaries=this,new Ge(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(t=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(e=this.end.parent.previousSibling),t&&t.is("element")&&t===e?t:null}clone(){return new j(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new Ge(t);for(const n of e)yield n.item}*getPositions(t={}){t.boundaries=this;const e=new Ge(t);yield e.position;for(const n of e)yield n.nextPosition}is(t){return t==="range"||t==="view:range"}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,n,o){return new this(new N(t,e),new N(n,o))}static _createFromPositionAndShift(t,e){const n=t,o=t.getShiftedBy(e);return e>0?new this(n,o):new this(o,n)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){const e=t.is("$textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(N._createBefore(t),e)}}function Do(i){return!(!i.item.is("attributeElement")&&!i.item.is("uiElement"))}function Oi(i){let t=0;for(const e of i)t++;return t}class oe{constructor(t=null,e,n){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",this.setTo(t,e,n)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake||this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel||this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const o of t._ranges)if(e.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;const e=Oi(this.getRanges());if(e!=Oi(t.getRanges()))return!1;if(e==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let o=!1;for(let r of t.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(t,e,n){if(t===null)this._setRanges([]),this._setFakeOptions(e);else if(t instanceof oe||t instanceof Ri)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof j)this._setRanges([t],e&&e.backward),this._setFakeOptions(e);else if(t instanceof N)this._setRanges([new j(t)]),this._setFakeOptions(e);else if(t instanceof He){const o=!!n&&!!n.backward;let r;if(e===void 0)throw new m("view-selection-setto-required-second-parameter",this);r=e=="in"?j._createIn(t):e=="on"?j._createOn(t):new j(N._createAt(t,e)),this._setRanges([r],o),this._setFakeOptions(n)}else{if(!Wt(t))throw new m("view-selection-setto-not-selectable",this);this._setRanges(t,e&&e.backward),this._setFakeOptions(e)}this.fire("change")}setFocus(t,e){if(this.anchor===null)throw new m("view-selection-setfocus-no-ranges",this);const n=N._createAt(t,e);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.pop(),n.compareWith(o)=="before"?this._addRange(new j(n,o),!0):this._addRange(new j(o,n)),this.fire("change")}is(t){return t==="selection"||t==="view:selection"}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(const n of t)this._addRange(n);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof j))throw new m("view-selection-add-range-not-range",this);this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(const e of this._ranges)if(t.isIntersecting(e))throw new m("view-selection-range-intersects",this,{addedRange:t,intersectingRange:e});this._ranges.push(new j(t.start,t.end))}}z(oe,K);class Ri{constructor(t=null,e,n){this._selection=new oe,this._selection.delegate("change").to(this),this._selection.setTo(t,e,n)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}is(t){return t==="selection"||t=="documentSelection"||t=="view:selection"||t=="view:documentSelection"}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setFocus(t,e){this._selection.setFocus(t,e)}}z(Ri,K);class $n extends C{constructor(t,e,n){super(t,e),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const ji=Symbol("bubbling contexts"),ef={fire(i,...t){try{const e=i instanceof C?i:new C(this,i),n=Fi(this);if(!n.size)return;if(Qn(e,"capturing",this),pn(n,"$capture",e,...t))return e.return;const o=e.startRange||this.selection.getFirstRange(),r=o?o.getContainedElement():null,s=!!r&&Boolean(Ca(n,r));let a=r||function(c){if(!c)return null;const l=c.start.parent,d=c.end.parent,h=l.getPath(),u=d.getPath();return h.length>u.length?l:d}(o);if(Qn(e,"atTarget",a),!s){if(pn(n,"$text",e,...t))return e.return;Qn(e,"bubbling",a)}for(;a;){if(a.is("rootElement")){if(pn(n,"$root",e,...t))return e.return}else if(a.is("element")&&pn(n,a.name,e,...t))return e.return;if(pn(n,a,e,...t))return e.return;a=a.parent,Qn(e,"bubbling",a)}return Qn(e,"bubbling",this),pn(n,"$document",e,...t),e.return}catch(e){m.rethrowUnexpectedError(e,this)}},_addEventListener(i,t,e){const n=vt(e.context||"$document"),o=Fi(this);for(const r of n){let s=o.get(r);s||(s=Object.create(K),o.set(r,s)),this.listenTo(s,i,t,e)}},_removeEventListener(i,t){const e=Fi(this);for(const n of e.values())this.stopListening(n,i,t)}},nf=ef;function Qn(i,t,e){i instanceof $n&&(i._eventPhase=t,i._currentTarget=e)}function pn(i,t,e,...n){const o=typeof t=="string"?i.get(t):Ca(i,t);return!!o&&(o.fire(e,...n),e.stop.called)}function Ca(i,t){for(const[e,n]of i)if(typeof e=="function"&&e(t))return n;return null}function Fi(i){return i[ji]||(i[ji]=new Map),i[ji]}class Zn{constructor(t){this.selection=new Ri,this.roots=new Yt({idProperty:"rootName"}),this.stylesProcessor=t,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.map(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do for(const n of this._postFixers)if(e=n(t),e)break;while(e)}}z(Zn,nf),z(Zn,st);class fn extends Kt{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=of,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new m("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}is(t,e=null){return e?e===this.name&&(t==="attributeElement"||t==="view:attributeElement"||t==="element"||t==="view:element"):t==="attributeElement"||t==="view:attributeElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}isSimilar(t){return this.id!==null||t.id!==null?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t){const e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function of(){if(Vi(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(Vi(i)>1)return null;i=i.parent}return!i||Vi(i)>1?null:this.childCount}function Vi(i){return Array.from(i.getChildren()).filter(t=>!t.is("uiElement")).length}fn.DEFAULT_PRIORITY=10;class va extends Kt{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=rf}is(t,e=null){return e?e===this.name&&(t==="emptyElement"||t==="view:emptyElement"||t==="element"||t==="view:element"):t==="emptyElement"||t==="view:emptyElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}_insertChild(t,e){if(e&&(e instanceof He||Array.from(e).length>0))throw new m("view-emptyelement-cannot-add",[this,e])}}function rf(){return null}const qe=navigator.userAgent.toLowerCase(),sf={isMac:ya(qe),isWindows:function(i){return i.indexOf("windows")>-1}(qe),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(qe),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(qe),isiOS:function(i){return!!i.match(/iphone|ipad/i)||ya(i)&&navigator.maxTouchPoints>0}(qe),isAndroid:function(i){return i.indexOf("android")>-1}(qe),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(qe),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}},nt=sf;function ya(i){return i.indexOf("macintosh")>-1}const af={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},cf={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},G=function(){const i={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++){const e=String.fromCharCode(t);i[e.toLowerCase()]=t}for(let t=48;t<=57;t++)i[t-48]=t;for(let t=112;t<=123;t++)i["f"+(t-111)]=t;for(const t of"`-=[];',./\\")i[t]=t.charCodeAt(0);return i}(),lf=Object.fromEntries(Object.entries(G).map(([i,t])=>[t,i.charAt(0).toUpperCase()+i.slice(1)]));function ue(i){let t;if(typeof i=="string"){if(t=G[i.toLowerCase()],!t)throw new m("keyboard-unknown-key",null,{key:i})}else t=i.keyCode+(i.altKey?G.alt:0)+(i.ctrlKey?G.ctrl:0)+(i.shiftKey?G.shift:0)+(i.metaKey?G.cmd:0);return t}function Ui(i){return typeof i=="string"&&(i=function(t){return t.split("+").map(e=>e.trim())}(i)),i.map(t=>typeof t=="string"?function(e){if(e.endsWith("!"))return ue(e.slice(0,-1));const n=ue(e);return nt.isMac&&n==G.ctrl?G.cmd:n}(t):t).reduce((t,e)=>e+t,0)}function xa(i){let t=Ui(i);return Object.entries(nt.isMac?af:cf).reduce((e,[n,o])=>((t&G[n])!=0&&(t&=~G[n],e+=o),e),"")+(t?lf[t]:"")}function Hi(i,t){const e=t==="ltr";switch(i){case G.arrowleft:return e?"left":"right";case G.arrowright:return e?"right":"left";case G.arrowup:return"up";case G.arrowdown:return"down"}}class Gi extends Kt{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=hf}is(t,e=null){return e?e===this.name&&(t==="uiElement"||t==="view:uiElement"||t==="element"||t==="view:element"):t==="uiElement"||t==="view:uiElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}_insertChild(t,e){if(e&&(e instanceof He||Array.from(e).length>0))throw new m("view-uielement-cannot-add",this)}render(t){return this.toDomElement(t)}toDomElement(t){const e=t.createElement(this.name);for(const n of this.getAttributeKeys())e.setAttribute(n,this.getAttribute(n));return e}}function df(i){i.document.on("arrowKey",(t,e)=>function(n,o,r){if(o.keyCode==G.arrowright){const s=o.domTarget.ownerDocument.defaultView.getSelection(),a=s.rangeCount==1&&s.getRangeAt(0).collapsed;if(a||o.shiftKey){const c=s.focusNode,l=s.focusOffset,d=r.domPositionToView(c,l);if(d===null)return;let h=!1;const u=d.getLastMatchingPosition(g=>(g.item.is("uiElement")&&(h=!0),!(!g.item.is("uiElement")&&!g.item.is("attributeElement"))));if(h){const g=r.viewPositionToDom(u);a?s.collapse(g.parent,g.offset):s.extend(g.parent,g.offset)}}}}(0,e,i.domConverter),{priority:"low"})}function hf(){return null}class Ea extends Kt{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=uf}is(t,e=null){return e?e===this.name&&(t==="rawElement"||t==="view:rawElement"||t==="element"||t==="view:element"):t==="rawElement"||t==="view:rawElement"||t===this.name||t==="view:"+this.name||t==="element"||t==="view:element"||t==="node"||t==="view:node"}_insertChild(t,e){if(e&&(e instanceof He||Array.from(e).length>0))throw new m("view-rawelement-cannot-add",[this,e])}}function uf(){return null}class We{constructor(t,e){this.document=t,this._children=[],e&&this._insertChild(0,e)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}is(t){return t==="documentFragment"||t==="view:documentFragment"}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0;const o=function(r,s){return typeof s=="string"?[new it(r,s)]:(Wt(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new it(r,a):a instanceof Ae?new it(r,a.data):a))}(this.document,e);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}}z(We,K);class Da{constructor(t){this.document=t,this._cloneGroups=new Map,this._slotFactory=null}setSelection(t,e,n){this.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createDocumentFragment(t){return new We(this.document,t)}createText(t){return new it(this.document,t)}createAttributeElement(t,e,n={}){const o=new fn(this.document,t,e);return typeof n.priority=="number"&&(o._priority=n.priority),n.id&&(o._id=n.id),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createContainerElement(t,e,n={},o={}){let r=null;Ft(n)?o=n:r=n;const s=new xo(this.document,t,e,r);return o.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),s}createEditableElement(t,e,n={}){const o=new Eo(this.document,t,e);return o._document=this.document,n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createEmptyElement(t,e,n={}){const o=new va(this.document,t,e);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createUIElement(t,e,n){const o=new Gi(this.document,t,e);return n&&(o.render=n),o}createRawElement(t,e,n,o={}){const r=new Ea(this.document,t,e);return r.render=n||(()=>{}),o.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),r}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){Ft(t)&&n===void 0&&(n=e),n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof N?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){const e=t.parent;if(!e.is("containerElement"))throw new m("view-writer-break-non-container-element",this.document);if(!e.parent)throw new m("view-writer-break-root",this.document);if(t.isAtStart)return N._createBefore(e);if(!t.isAtEnd){const n=e._clone(!1);this.insert(N._createAfter(e),n);const o=new j(t,N._createAt(e,"end")),r=new N(n,0);this.move(o,r)}return N._createAfter(e)}mergeAttributes(t){const e=t.offset,n=t.parent;if(n.is("$text"))return t;if(n.is("attributeElement")&&n.childCount===0){const s=n.parent,a=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new N(s,a))}const o=n.getChild(e-1),r=n.getChild(e);if(!o||!r)return t;if(o.is("$text")&&r.is("$text"))return Ma(o,r);if(o.is("attributeElement")&&r.is("attributeElement")&&o.isSimilar(r)){const s=o.childCount;return o._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new N(o,s))}return t}mergeContainers(t){const e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new m("view-writer-merge-containers-invalid-position",this.document);const o=e.getChild(e.childCount-1),r=o instanceof it?N._createAt(o,"end"):N._createAt(e,"end");return this.move(j._createIn(n),N._createAt(e,"end")),this.remove(j._createOn(n)),r}insert(t,e){Sa(e=Wt(e)?[...e]:[e],this.document);const n=e.reduce((s,a)=>{const c=s[s.length-1],l=!a.is("uiElement");return c&&c.breakAttributes==l?c.nodes.push(a):s.push({breakAttributes:l,nodes:[a]}),s},[]);let o=null,r=t;for(const{nodes:s,breakAttributes:a}of n){const c=this._insertNodes(r,s,a);o||(o=c.start),r=c.end}return o?new j(o,r):new j(t)}remove(t){const e=t instanceof j?t:j._createOn(t);if(Jn(e,this.document),e.isCollapsed)return new We(this.document);const{start:n,end:o}=this._breakAttributesRange(e,!0),r=n.parent,s=o.offset-n.offset,a=r._removeChildren(n.offset,s);for(const l of a)this._removeFromClonedElementsGroup(l);const c=this.mergeAttributes(n);return e.start=c,e.end=c.clone(),new We(this.document,a)}clear(t,e){Jn(t,this.document);const n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const r=o.item;let s;if(r.is("element")&&e.isSimilar(r))s=j._createOn(r);else if(!o.nextPosition.isAfter(t.start)&&r.is("$textProxy")){const a=r.getAncestors().find(c=>c.is("element")&&e.isSimilar(c));a&&(s=j._createIn(a))}s&&(s.end.isAfter(t.end)&&(s.end=t.end),s.start.isBefore(t.start)&&(s.start=t.start),this.remove(s))}}move(t,e){let n;if(e.isAfter(t.end)){const o=(e=this._breakAttributes(e,!0)).parent,r=o.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=o.childCount-r}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof fn))throw new m("view-writer-wrap-invalid-attribute",this.document);if(Jn(t,this.document),t.isCollapsed){let o=t.start;o.parent.is("element")&&(n=o.parent,!Array.from(n.getChildren()).some(s=>!s.is("uiElement")))&&(o=o.getLastMatchingPosition(s=>s.item.is("uiElement"))),o=this._wrapPosition(o,e);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(t.start)&&this.setSelection(o),new j(o)}return this._wrapRange(t,e);var n}unwrap(t,e){if(!(e instanceof fn))throw new m("view-writer-unwrap-invalid-attribute",this.document);if(Jn(t,this.document),t.isCollapsed)return t;const{start:n,end:o}=this._breakAttributesRange(t,!0),r=n.parent,s=this._unwrapChildren(r,n.offset,o.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new j(a,c)}rename(t,e){const n=new xo(this.document,t,e.getAttributes());return this.insert(N._createAfter(e),n),this.move(j._createIn(e),N._createAt(n,0)),this.remove(j._createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return N._createAt(t,e)}createPositionAfter(t){return N._createAfter(t)}createPositionBefore(t){return N._createBefore(t)}createRange(t,e){return new j(t,e)}createRangeOn(t){return j._createOn(t)}createRangeIn(t){return j._createIn(t)}createSelection(t,e,n){return new oe(t,e,n)}createSlot(t){if(!this._slotFactory)throw new m("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,t)}_registerSlotFactory(t){this._slotFactory=t}_clearSlotFactory(){this._slotFactory=null}_insertNodes(t,e,n){let o,r;if(o=n?qi(t):t.parent.is("$text")?t.parent.parent:t.parent,!o)throw new m("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(t,!0):t.parent.is("$text")?Wi(t):t;const s=o._insertChild(r.offset,e);for(const d of e)this._addToClonedElementsGroup(d);const a=r.getShiftedBy(s),c=this.mergeAttributes(r);c.isEqual(r)||a.offset--;const l=this.mergeAttributes(a);return new j(c,l)}_wrapChildren(t,e,n,o){let r=e;const s=[];for(;r<n;){const c=t.getChild(r),l=c.is("$text"),d=c.is("attributeElement");if(d&&this._wrapAttributeElement(o,c))s.push(new N(t,r));else if(l||!d||gf(o,c)){const h=o._clone();c._remove(),h._appendChild(c),t._insertChild(r,h),this._addToClonedElementsGroup(h),s.push(new N(t,r))}else this._wrapChildren(c,0,c.childCount,o);r++}let a=0;for(const c of s)c.offset-=a,c.offset!=e&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return j._createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,o){let r=e;const s=[];for(;r<n;){const c=t.getChild(r);if(c.is("attributeElement"))if(c.isSimilar(o)){const l=c.getChildren(),d=c.childCount;c._remove(),t._insertChild(r,l),this._removeFromClonedElementsGroup(c),s.push(new N(t,r),new N(t,r+d)),r+=d,n+=d-1}else this._unwrapAttributeElement(o,c)?(s.push(new N(t,r),new N(t,r+1)),r++):(this._unwrapChildren(c,0,c.childCount,o),r++);else r++}let a=0;for(const c of s)c.offset-=a,!(c.offset==e||c.offset==n)&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return j._createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){const{start:n,end:o}=this._breakAttributesRange(t,!0),r=n.parent,s=this._wrapChildren(r,n.offset,o.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new j(a,c)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return Ia(t.clone());t.parent.is("$text")&&(t=Wi(t));const n=this.createAttributeElement();n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,t.parent._insertChild(t.offset,n);const o=new j(t,t.getShiftedBy(1));this.wrap(o,e);const r=new N(n.parent,n.index);n._remove();const s=r.nodeBefore,a=r.nodeAfter;return s instanceof it&&a instanceof it?Ma(s,a):Ia(r)}_wrapAttributeElement(t,e){if(!Ta(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(const n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(const n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(const n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!Ta(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(const n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){const n=t.start,o=t.end;if(Jn(t,this.document),t.isCollapsed){const c=this._breakAttributes(t.start,e);return new j(c,c)}const r=this._breakAttributes(o,e),s=r.parent.childCount,a=this._breakAttributes(n,e);return r.offset+=r.parent.childCount-s,new j(a,r)}_breakAttributes(t,e=!1){const n=t.offset,o=t.parent;if(t.parent.is("emptyElement"))throw new m("view-writer-cannot-break-empty-element",this.document);if(t.parent.is("uiElement"))throw new m("view-writer-cannot-break-ui-element",this.document);if(t.parent.is("rawElement"))throw new m("view-writer-cannot-break-raw-element",this.document);if(!e&&o.is("$text")&&Yi(o.parent)||Yi(o))return t.clone();if(o.is("$text"))return this._breakAttributes(Wi(t),e);if(n==o.childCount){const r=new N(o.parent,o.index+1);return this._breakAttributes(r,e)}if(n===0){const r=new N(o.parent,o.index);return this._breakAttributes(r,e)}{const r=o.index+1,s=o._clone();o.parent._insertChild(r,s),this._addToClonedElementsGroup(s);const a=o.childCount-n,c=o._removeChildren(n,a);s._appendChild(c);const l=new N(o.parent,r);return this._breakAttributes(l,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(const o of t.getChildren())this._addToClonedElementsGroup(o);const e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(const o of t.getChildren())this._removeFromClonedElementsGroup(o);const e=t.id;if(!e)return;const n=this._cloneGroups.get(e);n&&n.delete(t)}}function qi(i){let t=i.parent;for(;!Yi(t);){if(!t)return;t=t.parent}return t}function gf(i,t){return i.priority<t.priority||!(i.priority>t.priority)&&i.getIdentity()<t.getIdentity()}function Ia(i){const t=i.nodeBefore;if(t&&t.is("$text"))return new N(t,t.data.length);const e=i.nodeAfter;return e&&e.is("$text")?new N(e,0):i}function Wi(i){if(i.offset==i.parent.data.length)return new N(i.parent.parent,i.parent.index+1);if(i.offset===0)return new N(i.parent.parent,i.parent.index);const t=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new it(i.root.document,t)),new N(i.parent.parent,i.parent.index+1)}function Ma(i,t){const e=i.data.length;return i._data+=t.data,t._remove(),new N(i,e)}function Sa(i,t){for(const e of i){if(!mf.some(n=>e instanceof n))throw new m("view-writer-insert-invalid-node-type",t);e.is("$text")||Sa(e.getChildren(),t)}}const mf=[it,fn,xo,va,Ea,Gi];function Yi(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function Jn(i,t){const e=qi(i.start),n=qi(i.end);if(!e||!n||e!==n)throw new m("view-writer-invalid-range-container",t)}function Ta(i,t){return i.id===null&&t.id===null}function Dt(i){return Object.prototype.toString.call(i)=="[object Text]"}const Na=i=>i.createTextNode("\xA0"),Ba=i=>{const t=i.createElement("span");return t.dataset.ckeFiller=!0,t.innerText="\xA0",t},Pa=i=>{const t=i.createElement("br");return t.dataset.ckeFiller=!0,t},Io="\u2060".repeat(7);function Vt(i){return Dt(i)&&i.data.substr(0,7)===Io}function Mo(i){return i.data.length==7&&Vt(i)}function Ki(i){return Vt(i)?i.data.slice(7):i.data}function pf(i,t){if(t.keyCode==G.arrowleft){const e=t.domTarget.ownerDocument.defaultView.getSelection();if(e.rangeCount==1&&e.getRangeAt(0).collapsed){const n=e.getRangeAt(0).startContainer,o=e.getRangeAt(0).startOffset;Vt(n)&&o<=7&&e.collapse(n,0)}}}function za(i,t,e,n=!1){e=e||function(r,s){return r===s},Array.isArray(i)||(i=Array.prototype.slice.call(i)),Array.isArray(t)||(t=Array.prototype.slice.call(t));const o=function(r,s,a){const c=La(r,s,a);if(c===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const l=Oa(r,c),d=Oa(s,c),h=La(l,d,a),u=r.length-h,g=s.length-h;return{firstIndex:c,lastIndexOld:u,lastIndexNew:g}}(i,t,e);return n?function(r,s){const{firstIndex:a,lastIndexOld:c,lastIndexNew:l}=r;if(a===-1)return Array(s).fill("equal");let d=[];return a>0&&(d=d.concat(Array(a).fill("equal"))),l-a>0&&(d=d.concat(Array(l-a).fill("insert"))),c-a>0&&(d=d.concat(Array(c-a).fill("delete"))),l<s&&(d=d.concat(Array(s-l).fill("equal"))),d}(o,t.length):function(r,s){const a=[],{firstIndex:c,lastIndexOld:l,lastIndexNew:d}=s;return d-c>0&&a.push({index:c,type:"insert",values:r.slice(c,d)}),l-c>0&&a.push({index:c+(d-c),type:"delete",howMany:l-c}),a}(t,o)}function La(i,t,e){for(let n=0;n<Math.max(i.length,t.length);n++)if(i[n]===void 0||t[n]===void 0||!e(i[n],t[n]))return n;return-1}function Oa(i,t){return i.slice(t).reverse()}function Be(i,t,e){e=e||function(f,b){return f===b};const n=i.length,o=t.length;if(n>200||o>200||n+o>300)return Be.fastDiff(i,t,e,!0);let r,s;if(o<n){const f=i;i=t,t=f,r="delete",s="insert"}else r="insert",s="delete";const a=i.length,c=t.length,l=c-a,d={},h={};function u(f){const b=(h[f-1]!==void 0?h[f-1]:-1)+1,w=h[f+1]!==void 0?h[f+1]:-1,_=b>w?-1:1;d[f+_]&&(d[f]=d[f+_].slice(0)),d[f]||(d[f]=[]),d[f].push(b>w?r:s);let I=Math.max(b,w),P=I-f;for(;P<a&&I<c&&e(i[P],t[I]);)P++,I++,d[f].push("equal");return I}let g,p=0;do{for(g=-p;g<l;g++)h[g]=u(g);for(g=l+p;g>l;g--)h[g]=u(g);h[l]=u(l),p++}while(h[l]!==c);return d[l].slice(1)}function Ra(i,t,e){i.insertBefore(e,i.childNodes[t]||null)}function ja(i){const t=i.parentNode;t&&t.removeChild(i)}function kn(i){return i&&i.nodeType===Node.COMMENT_NODE}function bn(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}Be.fastDiff=za;var ff=S(6062),O=S.n(ff),Fa=S(9315),kf={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Fa.Z,kf),Fa.Z.locals;class Va{constructor(t,e){this.domDocuments=new Set,this.domConverter=t,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=e,this.set("isFocused",!1),this.set("isSelecting",!1),nt.isBlink&&!nt.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(t,e){if(t==="text")this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if(t==="attributes")this.markedAttributes.add(e);else{if(t!=="children")throw new m("view-renderer-unknown-type",this);this.markedChildren.add(e)}}}render(){let t;const e=!(nt.isBlink&&!nt.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);e?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(t=this.domConverter.domPositionToView(this._inlineFiller),t.parent.is("$text")&&(t=N._createBefore(t.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:t});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:t});if(e)if(t){const n=this.domConverter.viewPositionToDom(t),o=n.parent.ownerDocument;Vt(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Ua(o,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(this.domConverter.mapViewToDom(t).childNodes),o=Array.from(this.domConverter.viewChildrenToDom(t,e.ownerDocument,{withChildren:!1})),r=this._diffNodeLists(n,o),s=this._findReplaceActions(r,n,o);if(s.indexOf("replace")!==-1){const a={equal:0,insert:0,delete:0};for(const c of s)if(c==="replace"){const l=a.equal+a.insert,d=a.equal+a.delete,h=t.getChild(l);!h||h.is("uiElement")||h.is("rawElement")||this._updateElementMappings(h,n[d]),ja(o[l]),a.equal++}else a[c]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){const t=this.selection.getFirstPosition();return t.parent.is("$text")?N._createBefore(this.selection.getFirstPosition().parent):t}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&Dt(e.parent)&&Vt(e.parent))}_removeInlineFiller(){const t=this._inlineFiller;if(!Vt(t))throw new m("view-renderer-filler-was-lost",this);Mo(t)?t.remove():t.data=t.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root)||!e.is("element")||!function(s){if(s.getAttribute("contenteditable")=="false")return!1;const a=s.findAncestor(c=>c.hasAttribute("contenteditable"));return!a||a.getAttribute("contenteditable")=="true"}(e)||n===e.getFillerOffset())return!1;const o=t.nodeBefore,r=t.nodeAfter;return!(o instanceof it||r instanceof it)}_updateText(t,e){const n=this.domConverter.findCorrespondingDomText(t),o=this.domConverter.viewToDom(t,n.ownerDocument),r=n.data;let s=o.data;const a=e.inlineFillerPosition;if(a&&a.parent==t.parent&&a.offset==t.index&&(s=Io+s),r!=s){const c=za(r,s);for(const l of c)l.type==="insert"?n.insertData(l.index,l.values.join("")):n.deleteData(l.index,l.howMany)}}_updateAttrs(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.attributes).map(r=>r.name),o=t.getAttributeKeys();for(const r of o)this.domConverter.setDomElementAttribute(e,r,t.getAttribute(r),t);for(const r of n)t.hasAttribute(r)||this.domConverter.removeDomElementAttribute(e,r)}_updateChildren(t,e){const n=this.domConverter.mapViewToDom(t);if(!n)return;const o=e.inlineFillerPosition,r=this.domConverter.mapViewToDom(t).childNodes,s=Array.from(this.domConverter.viewChildrenToDom(t,n.ownerDocument,{bind:!0}));o&&o.parent===t&&Ua(n.ownerDocument,s,o.offset);const a=this._diffNodeLists(r,s);let c=0;const l=new Set;for(const d of a)d==="delete"?(l.add(r[c]),ja(r[c])):d==="equal"&&c++;c=0;for(const d of a)d==="insert"?(Ra(n,c,s[c]),c++):d==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(s[c])),c++);for(const d of l)d.parentNode||this.domConverter.unbindDomElement(d)}_diffNodeLists(t,e){return Be(t=function(n,o){const r=Array.from(n);return r.length==0||!o||r[r.length-1]==o&&r.pop(),r}(t,this._fakeSelectionContainer),e,bf.bind(null,this.domConverter))}_findReplaceActions(t,e,n){if(t.indexOf("insert")===-1||t.indexOf("delete")===-1)return t;let o=[],r=[],s=[];const a={equal:0,insert:0,delete:0};for(const c of t)c==="insert"?s.push(n[a.equal+a.insert]):c==="delete"?r.push(e[a.equal+a.delete]):(o=o.concat(Be(r,s,Ha).map(l=>l==="equal"?"replace":l)),o.push("equal"),r=[],s=[]),a[c]++;return o.concat(Be(r,s,Ha).map(c=>c==="equal"?"replace":c))}_markDescendantTextToSync(t){if(t){if(t.is("$text"))this.markedTexts.add(t);else if(t.is("element"))for(const e of t.getChildren())this._markDescendantTextToSync(e)}}_updateSelection(){if(nt.isBlink&&!nt.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):(this._removeFakeSelection(),this._updateDomSelection(t)))}_updateFakeSelection(t){const e=t.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(s){const a=s.createElement("div");return a.className="ck-fake-selection-container",Object.assign(a.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),a.textContent="\xA0",a}(e));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(t))return;n.parentElement&&n.parentElement==t||t.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||"\xA0";const o=e.getSelection(),r=e.createRange();o.removeAllRanges(),r.selectNodeContents(n),o.addRange(r)}_updateDomSelection(t){const e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);e.collapse(n.parent,n.offset),e.extend(o.parent,o.offset),nt.isGecko&&function(r,s){const a=r.parent;if(a.nodeType!=Node.ELEMENT_NODE||r.offset!=a.childNodes.length-1)return;const c=a.childNodes[r.offset];c&&c.tagName=="BR"&&s.addRange(s.getRangeAt(0))}(o,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;const e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_fakeSelectionNeedsUpdate(t){const e=this._fakeSelectionContainer,n=t.ownerDocument.getSelection();return!e||e.parentElement!==t||n.anchorNode!==e&&!e.contains(n.anchorNode)||e.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const t of this.domDocuments)if(t.getSelection().rangeCount){const e=t.activeElement,n=this.domConverter.mapDomToView(e);e&&n&&t.getSelection().removeAllRanges()}}_removeFakeSelection(){const t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){const t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function Ua(i,t,e){const n=t instanceof Array?t:t.childNodes,o=n[e];if(Dt(o))return o.data=Io+o.data,o;{const r=i.createTextNode(Io);return Array.isArray(t)?n.splice(e,0,r):Ra(t,e,r),r}}function Ha(i,t){return bn(i)&&bn(t)&&!Dt(i)&&!Dt(t)&&!kn(i)&&!kn(t)&&i.tagName.toLowerCase()===t.tagName.toLowerCase()}function bf(i,t,e){return t===e||(Dt(t)&&Dt(e)?t.data===e.data:!(!i.isBlockFiller(t)||!i.isBlockFiller(e)))}z(Va,st);const pt={window,document};function $i(i){let t=0;for(;i.previousSibling;)i=i.previousSibling,t++;return t}function Ga(i){const t=[];for(;i&&i.nodeType!=Node.DOCUMENT_NODE;)t.unshift(i),i=i.parentNode;return t}const wf=Pa(document),_f=Na(document),Af=Ba(document),So="data-ck-unsafe-attribute-",qa="data-ck-unsafe-element";class To{constructor(t,e={}){this.document=t,this.renderingMode=e.renderingMode||"editing",this.blockFillerMode=e.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new he,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new oe(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){const e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(const n of t.childNodes)this.unbindDomElement(n)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}shouldRenderAttribute(t,e,n){return this.renderingMode==="data"||!(t=t.toLowerCase()).startsWith("on")&&(t!=="srcdoc"||!e.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(t==="src"||t==="srcset")||n==="source"&&t==="srcset"||!e.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(t,e){if(this.renderingMode==="data")return void(t.innerHTML=e);const n=new DOMParser().parseFromString(e,"text/html"),o=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)o.appendChild(r[0]);const s=n.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),a=[];let c;for(;c=s.nextNode();)a.push(c);for(const l of a){for(const h of l.getAttributeNames())this.setDomElementAttribute(l,h,l.getAttribute(h));const d=l.tagName.toLowerCase();this._shouldRenameElement(d)&&(Ka(d),l.replaceWith(this._createReplacementDomElement(d,l)))}for(;t.firstChild;)t.firstChild.remove();t.append(o)}viewToDom(t,e,n={}){if(t.is("$text")){const o=this._processDataFromViewText(t);return e.createTextNode(o)}{if(this.mapViewToDom(t))return this.mapViewToDom(t);let o;if(t.is("documentFragment"))o=e.createDocumentFragment(),n.bind&&this.bindDocumentFragments(o,t);else{if(t.is("uiElement"))return o=t.name==="$comment"?e.createComment(t.getCustomProperty("$rawContent")):t.render(e,this),n.bind&&this.bindElements(o,t),o;this._shouldRenameElement(t.name)?(Ka(t.name),o=this._createReplacementDomElement(t.name)):o=t.hasAttribute("xmlns")?e.createElementNS(t.getAttribute("xmlns"),t.name):e.createElement(t.name),t.is("rawElement")&&t.render(o,this),n.bind&&this.bindElements(o,t);for(const r of t.getAttributeKeys())this.setDomElementAttribute(o,r,t.getAttribute(r),t)}if(n.withChildren!==!1)for(const r of this.viewChildrenToDom(t,e,n))o.appendChild(r);return o}}setDomElementAttribute(t,e,n,o=null){const r=this.shouldRenderAttribute(e,n,t.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(e);r||A("domconverter-unsafe-attribute-detected",{domElement:t,key:e,value:n}),t.hasAttribute(e)&&!r?t.removeAttribute(e):t.hasAttribute(So+e)&&r&&t.removeAttribute(So+e),t.setAttribute(r?e:So+e,n)}removeDomElementAttribute(t,e){e!=qa&&(t.removeAttribute(e),t.removeAttribute(So+e))}*viewChildrenToDom(t,e,n={}){const o=t.getFillerOffset&&t.getFillerOffset();let r=0;for(const s of t.getChildren()){o===r&&(yield this._getBlockFiller(e));const a=s.is("element")&&s.getCustomProperty("dataPipeline:transparentRendering");a&&this.renderingMode=="data"?yield*this.viewChildrenToDom(s,e,n):(a&&A("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:s}),yield this.viewToDom(s,e,n)),r++}o===r&&(yield this._getBlockFiller(e))}viewRangeToDom(t){const e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),o=document.createRange();return o.setStart(e.parent,e.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(t){const e=t.parent;if(e.is("$text")){const n=this.findCorrespondingDomText(e);if(!n)return null;let o=t.offset;return Vt(n)&&(o+=7),{parent:n,offset:o}}{let n,o,r;if(t.offset===0){if(n=this.mapViewToDom(e),!n)return null;r=n.childNodes[0]}else{const s=t.nodeBefore;if(o=s.is("$text")?this.findCorrespondingDomText(s):this.mapViewToDom(t.nodeBefore),!o)return null;n=o.parentNode,r=o.nextSibling}return Dt(r)&&Vt(r)?{parent:r,offset:7}:{parent:n,offset:o?$i(o)+1:0}}}domToView(t,e={}){if(this.isBlockFiller(t))return null;const n=this.getHostViewElement(t);if(n)return n;if(kn(t)&&e.skipComments)return null;if(Dt(t)){if(Mo(t))return null;{const o=this._processDataFromDomText(t);return o===""?null:new it(this.document,o)}}{if(this.mapDomToView(t))return this.mapDomToView(t);let o;if(this.isDocumentFragment(t))o=new We(this.document),e.bind&&this.bindDocumentFragments(t,o);else{o=this._createViewElement(t,e),e.bind&&this.bindElements(t,o);const r=t.attributes;if(r)for(let s=r.length,a=0;a<s;a++)o._setAttribute(r[a].name,r[a].value);if(this._isViewElementWithRawContent(o,e)||kn(t)){const s=kn(t)?t.data:t.innerHTML;return o._setCustomProperty("$rawContent",s),this._encounteredRawContentDomNodes.add(t),o}}if(e.withChildren!==!1)for(const r of this.domChildrenToView(t,e))o._appendChild(r);return o}}*domChildrenToView(t,e={}){for(let n=0;n<t.childNodes.length;n++){const o=t.childNodes[n],r=this.domToView(o,e);r!==null&&(yield r)}}domSelectionToView(t){if(t.rangeCount===1){let o=t.getRangeAt(0).startContainer;Dt(o)&&(o=o.parentNode);const r=this.fakeSelectionToView(o);if(r)return r}const e=this.isDomSelectionBackward(t),n=[];for(let o=0;o<t.rangeCount;o++){const r=t.getRangeAt(o),s=this.domRangeToView(r);s&&n.push(s)}return new oe(n,{backward:e})}domRangeToView(t){const e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new j(e,n):null}domPositionToView(t,e=0){if(this.isBlockFiller(t))return this.domPositionToView(t.parentNode,$i(t));const n=this.mapDomToView(t);if(n&&(n.is("uiElement")||n.is("rawElement")))return N._createBefore(n);if(Dt(t)){if(Mo(t))return this.domPositionToView(t.parentNode,$i(t));const o=this.findCorrespondingViewText(t);let r=e;return o?(Vt(t)&&(r-=7,r=r<0?0:r),new N(o,r)):null}if(e===0){const o=this.mapDomToView(t);if(o)return new N(o,0)}else{const o=t.childNodes[e-1],r=Dt(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(r&&r.parent)return new N(r.parent,r.index+1)}return null}mapDomToView(t){return this.getHostViewElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(Mo(t))return null;const e=this.getHostViewElement(t);if(e)return e;const n=t.previousSibling;if(n){if(!this.isElement(n))return null;const o=this.mapDomToView(n);if(o)return o.nextSibling instanceof it?o.nextSibling:null}else{const o=this.mapDomToView(t.parentNode);if(o){const r=o.getChild(0);return r instanceof it?r:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){const e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){const e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){const{scrollX:n,scrollY:o}=pt.window,r=[];Wa(e,s=>{const{scrollLeft:a,scrollTop:c}=s;r.push([a,c])}),e.focus(),Wa(e,s=>{const[a,c]=r.shift();s.scrollLeft=a,s.scrollTop=c}),pt.window.scrollTo(n,o)}}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(t){return this.blockFillerMode=="br"?t.isEqualNode(wf):!(t.tagName!=="BR"||!Ya(t,this.blockElements)||t.parentNode.childNodes.length!==1)||t.isEqualNode(Af)||function(e,n){return e.isEqualNode(_f)&&Ya(e,n)&&e.parentNode.childNodes.length===1}(t,this.blockElements)}isDomSelectionBackward(t){if(t.isCollapsed)return!1;const e=document.createRange();e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset);const n=e.collapsed;return e.detach(),n}getHostViewElement(t){const e=Ga(t);for(e.pop();e.length;){const n=e.pop(),o=this._domToViewMapping.get(n);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}registerRawContentMatcher(t){this._rawContentElementMatcher.add(t)}_getBlockFiller(t){switch(this.blockFillerMode){case"nbsp":return Na(t);case"markedNbsp":return Ba(t);case"br":return Pa(t)}}_isDomSelectionPositionCorrect(t,e){if(Dt(t)&&Vt(t)&&e<7||this.isElement(t)&&Vt(t.childNodes[e]))return!1;const n=this.mapDomToView(t);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return e;if(e.charAt(0)==" "){const n=this._getTouchingInlineViewNode(t,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(e="\xA0"+e.substr(1))}if(e.charAt(e.length-1)==" "){const n=this._getTouchingInlineViewNode(t,!0),o=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";e.charAt(e.length-2)!=" "&&n&&!o||(e=e.substr(0,e.length-1)+"\xA0")}return e.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(t){if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const e=this._processDataFromViewText(t);return e.charAt(e.length-1)==" "}_processDataFromDomText(t){let e=t.data;if(function(l,d){return Ga(l).some(h=>h.tagName&&d.includes(h.tagName.toLowerCase()))}(t,this.preElements))return Ki(t);e=e.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(t,!1),o=this._getTouchingInlineDomNode(t,!0),r=this._checkShouldLeftTrimDomText(t,n),s=this._checkShouldRightTrimDomText(t,o);r&&(e=e.replace(/^ /,"")),s&&(e=e.replace(/ $/,"")),e=Ki(new Text(e)),e=e.replace(/ \u00A0/g,"  ");const a=o&&this.isElement(o)&&o.tagName!="BR",c=o&&Dt(o)&&o.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(e)||!o||a||c)&&(e=e.replace(/\u00A0$/," ")),(r||n&&this.isElement(n)&&n.tagName!="BR")&&(e=e.replace(/^\u00A0/," ")),e}_checkShouldLeftTrimDomText(t,e){return!e||(this.isElement(e)?e.tagName==="BR":!this._encounteredRawContentDomNodes.has(t.previousSibling)&&/[^\S\u00A0]/.test(e.data.charAt(e.data.length-1)))}_checkShouldRightTrimDomText(t,e){return!e&&!Vt(t)}_getTouchingInlineViewNode(t,e){const n=new Ge({startPosition:e?N._createAfter(t):N._createBefore(t),direction:e?"forward":"backward"});for(const o of n){if(o.item.is("element")&&this.inlineObjectElements.includes(o.item.name))return o.item;if(o.item.is("containerElement")||o.item.is("element","br"))return null;if(o.item.is("$textProxy"))return o.item}return null}_getTouchingInlineDomNode(t,e){if(!t.parentNode)return null;const n=e?"firstChild":"lastChild",o=e?"nextSibling":"previousSibling";let r=!0;do if(!r&&t[n]?t=t[n]:t[o]?(t=t[o],r=!1):(t=t.parentNode,r=!0),!t||this._isBlockElement(t))return null;while(!Dt(t)&&t.tagName!="BR"&&!this._isInlineObjectElement(t));return t}_isBlockElement(t){return this.isElement(t)&&this.blockElements.includes(t.tagName.toLowerCase())}_isInlineObjectElement(t){return this.isElement(t)&&this.inlineObjectElements.includes(t.tagName.toLowerCase())}_createViewElement(t,e){if(kn(t))return new Gi(this.document,"$comment");const n=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();return new Kt(this.document,n)}_isViewElementWithRawContent(t,e){return e.withChildren!==!1&&this._rawContentElementMatcher.match(t)}_shouldRenameElement(t){const e=t.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(e)}_createReplacementDomElement(t,e=null){const n=document.createElement("span");if(n.setAttribute(qa,t),e){for(;e.firstChild;)n.appendChild(e.firstChild);for(const o of e.getAttributeNames())n.setAttribute(o,e.getAttribute(o))}return n}}function Wa(i,t){for(;i&&i!=pt.document;)t(i),i=i.parentNode}function Ya(i,t){const e=i.parentNode;return e&&e.tagName&&t.includes(e.tagName.toLowerCase())}function Ka(i){i==="script"&&A("domconverter-unsafe-script-element-detected"),i==="style"&&A("domconverter-unsafe-style-element-detected")}function No(i){const t=Object.prototype.toString.apply(i);return t=="[object Window]"||t=="[object global]"}const Cf=Hn({},K,{listenTo(i,t,e,n={}){if(bn(i)||No(i)){const o={capture:!!n.useCapture,passive:!!n.usePassive},r=this._getProxyEmitter(i,o)||new $a(i,o);this.listenTo(r,t,e,n)}else K.listenTo.call(this,i,t,e,n)},stopListening(i,t,e){if(bn(i)||No(i)){const n=this._getAllProxyEmitters(i);for(const o of n)this.stopListening(o,t,e)}else K.stopListening.call(this,i,t,e)},_getProxyEmitter(i,t){return e=this,n=Qa(i,t),e[Gt]&&e[Gt][n]?e[Gt][n].emitter:null;var e,n},_getAllProxyEmitters(i){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(i,t)).filter(t=>!!t)}}),wn=Cf;class $a{constructor(t,e){F(this,Qa(t,e)),this._domNode=t,this._options=e}}function Qa(i,t){let e=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=v())}(i);for(const n of Object.keys(t).sort())t[n]&&(e+="-"+n);return e}Hn($a.prototype,K,{attach(i){if(this._domListeners&&this._domListeners[i])return;const t=this._createDomListener(i);this._domNode.addEventListener(i,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[i]=t},detach(i){let t;!this._domListeners[i]||(t=this._events[i])&&t.callbacks.length||this._domListeners[i].removeListener()},_addEventListener(i,t,e){this.attach(i),K._addEventListener.call(this,i,t,e)},_removeEventListener(i,t){K._removeEventListener.call(this,i,t),this.detach(i)},_createDomListener(i){const t=e=>{this.fire(i,e)};return t.removeListener=()=>{this._domNode.removeEventListener(i,t,this._options),delete this._domListeners[i]},t}});class ge{constructor(t){this.view=t,this.document=t.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(t){return t&&t.nodeType===3&&(t=t.parentNode),!(!t||t.nodeType!==1)&&t.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}z(ge,wn);const vf=function(i){return this.__data__.set(i,"__lodash_hash_undefined__"),this},yf=function(i){return this.__data__.has(i)};function Bo(i){var t=-1,e=i==null?0:i.length;for(this.__data__=new Ao;++t<e;)this.add(i[t])}Bo.prototype.add=Bo.prototype.push=vf,Bo.prototype.has=yf;const xf=Bo,Ef=function(i,t){for(var e=-1,n=i==null?0:i.length;++e<n;)if(t(i[e],e,i))return!0;return!1},Df=function(i,t){return i.has(t)},Za=function(i,t,e,n,o,r){var s=1&e,a=i.length,c=t.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(i),d=r.get(t);if(l&&d)return l==t&&d==i;var h=-1,u=!0,g=2&e?new xf:void 0;for(r.set(i,t),r.set(t,i);++h<a;){var p=i[h],f=t[h];if(n)var b=s?n(f,p,h,t,i,r):n(p,f,h,i,t,r);if(b!==void 0){if(b)continue;u=!1;break}if(g){if(!Ef(t,function(w,_){if(!Df(g,_)&&(p===w||o(p,w,e,n,r)))return g.push(_)})){u=!1;break}}else if(p!==f&&!o(p,f,e,n,r)){u=!1;break}}return r.delete(i),r.delete(t),u},If=function(i){var t=-1,e=Array(i.size);return i.forEach(function(n,o){e[++t]=[o,n]}),e},Mf=function(i){var t=-1,e=Array(i.size);return i.forEach(function(n){e[++t]=n}),e};var Ja=le?le.prototype:void 0,Qi=Ja?Ja.valueOf:void 0;const Sf=function(i,t,e,n,o,r,s){switch(e){case"[object DataView]":if(i.byteLength!=t.byteLength||i.byteOffset!=t.byteOffset)return!1;i=i.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(i.byteLength!=t.byteLength||!r(new Co(i),new Co(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Fn(+i,+t);case"[object Error]":return i.name==t.name&&i.message==t.message;case"[object RegExp]":case"[object String]":return i==t+"";case"[object Map]":var a=If;case"[object Set]":var c=1&n;if(a||(a=Mf),i.size!=t.size&&!c)return!1;var l=s.get(i);if(l)return l==t;n|=2,s.set(i,t);var d=Za(a(i),a(t),n,o,r,s);return s.delete(i),d;case"[object Symbol]":if(Qi)return Qi.call(i)==Qi.call(t)}return!1};var Tf=Object.prototype.hasOwnProperty;const Nf=function(i,t,e,n,o,r){var s=1&e,a=_i(i),c=a.length;if(c!=_i(t).length&&!s)return!1;for(var l=c;l--;){var d=a[l];if(!(s?d in t:Tf.call(t,d)))return!1}var h=r.get(i),u=r.get(t);if(h&&u)return h==t&&u==i;var g=!0;r.set(i,t),r.set(t,i);for(var p=s;++l<c;){var f=i[d=a[l]],b=t[d];if(n)var w=s?n(b,f,d,t,i,r):n(f,b,d,i,t,r);if(!(w===void 0?f===b||o(f,b,e,n,r):w)){g=!1;break}p||(p=d=="constructor")}if(g&&!p){var _=i.constructor,I=t.constructor;_==I||!("constructor"in i)||!("constructor"in t)||typeof _=="function"&&_ instanceof _&&typeof I=="function"&&I instanceof I||(g=!1)}return r.delete(i),r.delete(t),g};var Xa="[object Arguments]",tc="[object Array]",Po="[object Object]",ec=Object.prototype.hasOwnProperty;const Bf=function(i,t,e,n,o,r){var s=Pt(i),a=Pt(t),c=s?tc:Yn(i),l=a?tc:Yn(t),d=(c=c==Xa?Po:c)==Po,h=(l=l==Xa?Po:l)==Po,u=c==l;if(u&&Vn(i)){if(!Vn(t))return!1;s=!0,d=!1}if(u&&!d)return r||(r=new Wn),s||mi(i)?Za(i,t,e,n,o,r):Sf(i,t,c,e,n,o,r);if(!(1&e)){var g=d&&ec.call(i,"__wrapped__"),p=h&&ec.call(t,"__wrapped__");if(g||p){var f=g?i.value():i,b=p?t.value():t;return r||(r=new Wn),o(f,b,e,n,r)}}return!!u&&(r||(r=new Wn),Nf(i,t,e,n,o,r))},nc=function i(t,e,n,o,r){return t===e||(t==null||e==null||!qt(t)&&!qt(e)?t!=t&&e!=e:Bf(t,e,n,o,i,r))},Pf=function(i,t,e){var n=(e=typeof e=="function"?e:void 0)?e(i,t):void 0;return n===void 0?nc(i,t,void 0,e):!!n};class oc extends ge{constructor(t){super(t),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.push(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}enable(){super.enable();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(t.length===0)return;const e=this.domConverter,n=new Map,o=new Set;for(const l of t)if(l.type==="childList"){const d=e.mapDomToView(l.target);if(d&&(d.is("uiElement")||d.is("rawElement")))continue;d&&!this._isBogusBrMutation(l)&&o.add(d)}for(const l of t){const d=e.mapDomToView(l.target);if((!d||!d.is("uiElement")&&!d.is("rawElement"))&&l.type==="characterData"){const h=e.findCorrespondingViewText(l.target);h&&!o.has(h.parent)?n.set(h,{type:"text",oldText:h.data,newText:Ki(l.target),node:h}):!h&&Vt(l.target)&&o.add(e.mapDomToView(l.target.parentNode))}}const r=[];for(const l of n.values())this.renderer.markToSync("text",l.node),r.push(l);for(const l of o){const d=e.mapViewToDom(l),h=Array.from(l.getChildren()),u=Array.from(e.domChildrenToView(d,{withChildren:!1}));Pf(h,u,c)||(this.renderer.markToSync("children",l),r.push({type:"children",oldChildren:h,newChildren:u,node:l}))}const s=t[0].target.ownerDocument.getSelection();let a=null;if(s&&s.anchorNode){const l=e.domPositionToView(s.anchorNode,s.anchorOffset),d=e.domPositionToView(s.focusNode,s.focusOffset);l&&d&&(a=new oe(l),a.setFocus(d))}function c(l,d){if(!Array.isArray(l))return l===d||!(!l.is("$text")||!d.is("$text"))&&l.data===d.data}r.length&&(this.document.fire("mutations",r,a),this.view.forceRender())}_isBogusBrMutation(t){let e=null;return t.nextSibling===null&&t.removedNodes.length===0&&t.addedNodes.length==1&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}class Zi{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,Hn(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Pe extends ge{constructor(t){super(t),this.useCapture=!1}observe(t){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(n,o)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(o.target)&&this.onDomEvent(o)},{useCapture:this.useCapture})})}fire(t,e,n){this.isEnabled&&this.document.fire(t,new Zi(this.view,e,n))}}class zf extends Pe{constructor(t){super(t),this.domEventType=["keydown","keyup"]}onDomEvent(t){this.fire(t.type,t,{keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey,get keystroke(){return ue(this)}})}}const Ji=function(){return Lt.Date.now()};var Lf=/\s/;const Of=function(i){for(var t=i.length;t--&&Lf.test(i.charAt(t)););return t};var Rf=/^\s+/;const jf=function(i){return i&&i.slice(0,Of(i)+1).replace(Rf,"")};var Ff=/^[-+]0x[0-9a-f]+$/i,Vf=/^0b[01]+$/i,Uf=/^0o[0-7]+$/i,Hf=parseInt;const ic=function(i){if(typeof i=="number")return i;if(vo(i))return NaN;if(Z(i)){var t=typeof i.valueOf=="function"?i.valueOf():i;i=Z(t)?t+"":t}if(typeof i!="string")return i===0?i:+i;i=jf(i);var e=Vf.test(i);return e||Uf.test(i)?Hf(i.slice(2),e?2:8):Ff.test(i)?NaN:+i};var Gf=Math.max,qf=Math.min;const zo=function(i,t,e){var n,o,r,s,a,c,l=0,d=!1,h=!1,u=!0;if(typeof i!="function")throw new TypeError("Expected a function");function g(I){var P=n,R=o;return n=o=void 0,l=I,s=i.apply(R,P)}function p(I){return l=I,a=setTimeout(b,t),d?g(I):s}function f(I){var P=I-c;return c===void 0||P>=t||P<0||h&&I-l>=r}function b(){var I=Ji();if(f(I))return w(I);a=setTimeout(b,function(P){var R=t-(P-c);return h?qf(R,r-(P-l)):R}(I))}function w(I){return a=void 0,u&&n?g(I):(n=o=void 0,s)}function _(){var I=Ji(),P=f(I);if(n=arguments,o=this,c=I,P){if(a===void 0)return p(c);if(h)return clearTimeout(a),a=setTimeout(b,t),g(c)}return a===void 0&&(a=setTimeout(b,t)),s}return t=ic(t)||0,Z(e)&&(d=!!e.leading,r=(h="maxWait"in e)?Gf(ic(e.maxWait)||0,t):r,u="trailing"in e?!!e.trailing:u),_.cancel=function(){a!==void 0&&clearTimeout(a),l=0,n=c=o=a=void 0},_.flush=function(){return a===void 0?s:w(Ji())},_};class Wf extends ge{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=zo(e=>this.document.fire("selectionChangeDone",e),200)}observe(){const t=this.document;t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){const e=this.document.selection,n=new oe(e.getRanges(),{backward:e.isBackward,fake:!1});t!=G.arrowleft&&t!=G.arrowup||n.setTo(n.getFirstPosition()),t!=G.arrowright&&t!=G.arrowdown||n.setTo(n.getLastPosition());const o={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}class Yf extends ge{constructor(t){super(t),this.mutationObserver=t.getObserver(oc),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=zo(e=>this.document.fire("selectionChangeDone",e),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=zo(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(t){const e=t.ownerDocument,n=()=>{this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel()};this.listenTo(t,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(t,"keydown",n,{priority:"highest"}),this.listenTo(t,"keyup",n,{priority:"highest"}),this._documents.has(e)||(this.listenTo(e,"mouseup",n,{priority:"highest"}),this.listenTo(e,"selectionchange",(o,r)=>{this._handleSelectionChange(r,e),this._documentIsSelectingInactivityTimeoutDebounced()}),this._documents.add(e))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(t,e){if(!this.isEnabled)return;const n=e.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const o=this.domConverter.domSelectionToView(n);if(o.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(o)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.selection.isSimilar(o))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:o,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class Kf extends Pe{constructor(t){super(t),this.domEventType=["focus","blur"],this.useCapture=!0;const e=this.document;e.on("focus",()=>{e.isFocused=!0,this._renderTimeoutId=setTimeout(()=>t.change(()=>{}),50)}),e.on("blur",(n,o)=>{const r=e.selection.editableElement;r!==null&&r!==o.target||(e.isFocused=!1,t.change(()=>{}))})}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class $f extends Pe{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];const e=this.document;e.on("compositionstart",()=>{e.isComposing=!0}),e.on("compositionend",()=>{e.isComposing=!1})}onDomEvent(t){this.fire(t.type,t)}}class Qf extends Pe{constructor(t){super(t),this.domEventType=["beforeinput"]}onDomEvent(t){this.fire(t.type,t)}}class Zf{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}const rc=function(i){return typeof i=="string"||!Pt(i)&&qt(i)&&Te(i)=="[object String]"};function sc(i,t,e={},n=[]){const o=e&&e.xmlns,r=o?i.createElementNS(o,t):i.createElement(t);for(const s in e)r.setAttribute(s,e[s]);!rc(n)&&Wt(n)||(n=[n]);for(let s of n)rc(s)&&(s=i.createTextNode(s)),r.appendChild(s);return r}function Lo(i){return Object.prototype.toString.apply(i)=="[object Range]"}function ac(i){const t=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}const cc=["top","right","bottom","left","width","height"];class J{constructor(t){const e=Lo(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),Ne(t)||e)if(e){const n=J.getDomRangeRects(t);Oo(this,J.getBoundingRect(n))}else Oo(this,t.getBoundingClientRect());else if(No(t)){const{innerWidth:n,innerHeight:o}=t;Oo(this,{top:0,right:n,bottom:o,left:0,width:n,height:o})}else Oo(this,t)}clone(){return new J(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left)};return e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0?null:new J(e)}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(!lc(t)){let n=t.parentNode||t.commonAncestorContainer;for(;n&&!lc(n);){const o=new J(n),r=e.getIntersection(o);if(!r)return null;r.getArea()<e.getArea()&&(e=r),n=n.parentNode}}return e}isEqual(t){for(const e of cc)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}excludeScrollbarsAndBorders(){const t=this._source;let e,n,o;if(No(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight,o=t.getComputedStyle(t.document.documentElement).direction;else{const r=ac(this._source);e=t.offsetWidth-t.clientWidth-r.left-r.right,n=t.offsetHeight-t.clientHeight-r.top-r.bottom,o=t.ownerDocument.defaultView.getComputedStyle(t).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,o==="ltr"?this.right-=e:this.left+=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const o of n)e.push(new J(o));else{let o=t.startContainer;Dt(o)&&(o=o.parentNode);const r=new J(o.getBoundingClientRect());r.right=r.left,r.width=0,e.push(r)}return e}static getBoundingRect(t){const e={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY};let n=0;for(const o of t)n++,e.left=Math.min(e.left,o.left),e.top=Math.min(e.top,o.top),e.right=Math.max(e.right,o.right),e.bottom=Math.max(e.bottom,o.bottom);return n==0?null:(e.width=e.right-e.left,e.height=e.bottom-e.top,new J(e))}}function Oo(i,t){for(const e of cc)i[e]=t[e]}function lc(i){return!!Ne(i)&&i===i.ownerDocument.body}class ut{constructor(t,e){ut._observerInstance||ut._createObserver(),this._element=t,this._callback=e,ut._addElementCallback(t,e),ut._observerInstance.observe(t)}destroy(){ut._deleteElementCallback(this._element,this._callback)}static _addElementCallback(t,e){ut._elementCallbacks||(ut._elementCallbacks=new Map);let n=ut._elementCallbacks.get(t);n||(n=new Set,ut._elementCallbacks.set(t,n)),n.add(e)}static _deleteElementCallback(t,e){const n=ut._getElementCallbacks(t);n&&(n.delete(e),n.size||(ut._elementCallbacks.delete(t),ut._observerInstance.unobserve(t))),ut._elementCallbacks&&!ut._elementCallbacks.size&&(ut._observerInstance=null,ut._elementCallbacks=null)}static _getElementCallbacks(t){return ut._elementCallbacks?ut._elementCallbacks.get(t):null}static _createObserver(){let t;t=typeof pt.window.ResizeObserver=="function"?pt.window.ResizeObserver:dc,ut._observerInstance=new t(e=>{for(const n of e){const o=ut._getElementCallbacks(n.target);if(o)for(const r of o)r(n)}})}}ut._observerInstance=null,ut._elementCallbacks=null;class dc{constructor(t){this._callback=t,this._elements=new Set,this._previousRects=new Map,this._periodicCheckTimeout=null}observe(t){this._elements.add(t),this._checkElementRectsAndExecuteCallback(),this._elements.size===1&&this._startPeriodicCheck()}unobserve(t){this._elements.delete(t),this._previousRects.delete(t),this._elements.size||this._stopPeriodicCheck()}_startPeriodicCheck(){const t=()=>{this._checkElementRectsAndExecuteCallback(),this._periodicCheckTimeout=setTimeout(t,100)};this.listenTo(pt.window,"resize",()=>{this._checkElementRectsAndExecuteCallback()}),this._periodicCheckTimeout=setTimeout(t,100)}_stopPeriodicCheck(){clearTimeout(this._periodicCheckTimeout),this.stopListening(),this._previousRects.clear()}_checkElementRectsAndExecuteCallback(){const t=[];for(const e of this._elements)this._hasRectChanged(e)&&t.push({target:e,contentRect:this._previousRects.get(e)});t.length&&this._callback(t)}_hasRectChanged(t){if(!t.ownerDocument.body.contains(t))return!1;const e=new J(t),n=this._previousRects.get(t),o=!n||!n.isEqual(e);return this._previousRects.set(t,e),o}}z(dc,wn);function hc({target:i,viewportOffset:t=0}){const e=Xi(i);let n=e,o=null;for(;n;){let r;r=kc(n==e?i:o),uc(r,()=>bc(i,n));const s=bc(i,n);if(Jf(n,s,t),n.parent!=n){if(o=n.frameElement,n=n.parent,!o)return}else n=null}}function Jf(i,t,e){const n=t.clone().moveBy(0,e),o=t.clone().moveBy(0,-e),r=new J(i).excludeScrollbarsAndBorders();if(![o,n].every(s=>r.contains(s))){let{scrollX:s,scrollY:a}=i;mc(o,r)?a-=r.top-t.top+e:gc(n,r)&&(a+=t.bottom-r.bottom+e),pc(t,r)?s-=r.left-t.left+e:fc(t,r)&&(s+=t.right-r.right+e),i.scrollTo(s,a)}}function uc(i,t){const e=Xi(i);let n,o;for(;i!=e.document.body;)o=t(),n=new J(i).excludeScrollbarsAndBorders(),n.contains(o)||(mc(o,n)?i.scrollTop-=n.top-o.top:gc(o,n)&&(i.scrollTop+=o.bottom-n.bottom),pc(o,n)?i.scrollLeft-=n.left-o.left:fc(o,n)&&(i.scrollLeft+=o.right-n.right)),i=i.parentNode}function gc(i,t){return i.bottom>t.bottom}function mc(i,t){return i.top<t.top}function pc(i,t){return i.left<t.left}function fc(i,t){return i.right>t.right}function Xi(i){return Lo(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function kc(i){if(Lo(i)){let t=i.commonAncestorContainer;return Dt(t)&&(t=t.parentNode),t}return i.parentNode}function bc(i,t){const e=Xi(i),n=new J(i);if(e===t)return n;{let o=e;for(;o!=t;){const r=o.frameElement,s=new J(r).excludeScrollbarsAndBorders();n.moveBy(s.left,s.top),o=o.parent}}return n}function yt(i){const t=i.next();return t.done?null:t.value}Object.assign({},{scrollViewportToShowTarget:hc,scrollAncestorsToShowTarget:function(i){uc(kc(i),()=>new J(i))}});class $t{constructor(){this.set("isFocused",!1),this.set("focusedElement",null),this._elements=new Set,this._nextEventLoopTimeout=null}add(t){if(this._elements.has(t))throw new m("focustracker-add-element-already-exist",this);this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(t),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}z($t,wn),z($t,st);class Ce{constructor(){this._listener=Object.create(wn)}listenTo(t){this._listener.listenTo(t,"keydown",(e,n)=>{this._listener.fire("_keydown:"+ue(n),n)})}set(t,e,n={}){const o=Ui(t),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(s,a)=>{e(a,()=>{a.preventDefault(),a.stopPropagation(),s.stop()}),s.return=!0},{priority:r})}press(t){return!!this._listener.fire("_keydown:"+ue(t),t)}destroy(){this._listener.stopListening()}}class Xf extends ge{constructor(t){super(t),this.document.on("keydown",(e,n)=>{if(this.isEnabled&&((o=n.keyCode)==G.arrowright||o==G.arrowleft||o==G.arrowup||o==G.arrowdown)){const r=new $n(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(r,n),r.stop.called&&e.stop()}var o})}observe(){}}class tk extends ge{constructor(t){super(t);const e=this.document;e.on("keydown",(n,o)=>{if(!this.isEnabled||o.keyCode!=G.tab||o.ctrlKey)return;const r=new $n(e,"tab",e.selection.getFirstRange());e.fire(r,o),r.stop.called&&n.stop()})}observe(){}}class wc{constructor(t){this.document=new Zn(t),this.domConverter=new To(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new Va(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting").to(this.document),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new Da(this.document),this.addObserver(oc),this.addObserver(Yf),this.addObserver(Kf),this.addObserver(zf),this.addObserver(Wf),this.addObserver($f),this.addObserver(Xf),this.addObserver(tk),nt.isAndroid&&this.addObserver(Qf),this.document.on("arrowKey",pf,{priority:"low"}),df(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(t,e="main"){const n=this.document.getRoot(e);n._name=t.tagName.toLowerCase();const o={};for(const{name:s,value:a}of Array.from(t.attributes))o[s]=a,s==="class"?this._writer.addClass(a.split(" "),n):this._writer.setAttribute(s,a,n);this._initialDomRootAttributes.set(t,o);const r=()=>{this._writer.setAttribute("contenteditable",!n.isReadOnly,n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};r(),this.domRoots.set(e,t),this.domConverter.bindElements(t,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(t.ownerDocument),n.on("change:children",(s,a)=>this._renderer.markToSync("children",a)),n.on("change:attributes",(s,a)=>this._renderer.markToSync("attributes",a)),n.on("change:text",(s,a)=>this._renderer.markToSync("text",a)),n.on("change:isReadOnly",()=>this.change(r)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const s of this._observers.values())s.observe(t,e)}detachDomRoot(t){const e=this.domRoots.get(t);Array.from(e.attributes).forEach(({name:o})=>e.removeAttribute(o));const n=this._initialDomRootAttributes.get(e);for(const o in n)e.setAttribute(o,n[o]);this.domRoots.delete(t),this.domConverter.unbindDomElement(e)}getDomRoot(t="main"){return this.domRoots.get(t)}addObserver(t){let e=this._observers.get(t);if(e)return e;e=new t(this),this._observers.set(t,e);for(const[n,o]of this.domRoots)e.observe(o,n);return e.enable(),e}getObserver(t){return this._observers.get(t)}disableObservers(){for(const t of this._observers.values())t.disable()}enableObservers(){for(const t of this._observers.values())t.enable()}scrollToTheSelection(){const t=this.document.selection.getFirstRange();t&&hc({target:this.domConverter.viewRangeToDom(t),viewportOffset:20})}focus(){if(!this.document.isFocused){const t=this.document.selection.editableElement;t&&(this.domConverter.focus(t),this.forceRender())}}change(t){if(this.isRenderingInProgress||this._postFixersInProgress)throw new m("cannot-change-view-tree",this);try{if(this._ongoingChange)return t(this._writer);this._ongoingChange=!0;const e=t(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),e}catch(e){m.rethrowUnexpectedError(e,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.change(()=>{})}destroy(){for(const t of this._observers.values())t.destroy();this.document.destroy(),this.stopListening()}createPositionAt(t,e){return N._createAt(t,e)}createPositionAfter(t){return N._createAfter(t)}createPositionBefore(t){return N._createBefore(t)}createRange(t,e){return new j(t,e)}createRangeOn(t){return j._createOn(t)}createRangeIn(t){return j._createIn(t)}createSelection(t,e,n){return new oe(t,e,n)}_disableRendering(t){this._renderingDisabled=t,t==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}z(wc,st);class Ye{constructor(t){this.parent=null,this._attrs=de(t)}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))===null)throw new m("model-node-not-found-in-parent",this);return t}get startOffset(){let t;if(!this.parent)return null;if((t=this.parent.getChildStartOffset(this))===null)throw new m("model-node-not-found-in-parent",this);return t}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.startOffset),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),o=t.getAncestors(e);let r=0;for(;n[r]==o[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),o=St(e,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return e[o]<n[o]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}hasAttribute(t){return this._attrs.has(t)}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const t={};return this._attrs.size&&(t.attributes=Array.from(this._attrs).reduce((e,n)=>(e[n[0]]=n[1],e),{})),t}is(t){return t==="node"||t==="model:node"}_clone(){return new Ye(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(t,e){this._attrs.set(t,e)}_setAttributesTo(t){this._attrs=de(t)}_removeAttribute(t){return this._attrs.delete(t)}_clearAttributes(){this._attrs.clear()}}class rt extends Ye{constructor(t,e){super(e),this._data=t||""}get offsetSize(){return this.data.length}get data(){return this._data}is(t){return t==="$text"||t==="model:$text"||t==="text"||t==="model:text"||t==="node"||t==="model:node"}toJSON(){const t=super.toJSON();return t.data=this.data,t}_clone(){return new rt(this.data,this.getAttributes())}static fromJSON(t){return new rt(t.data,t.attributes)}}class me{constructor(t,e,n){if(this.textNode=t,e<0||e>t.offsetSize)throw new m("model-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.offsetSize)throw new m("model-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}is(t){return t==="$textProxy"||t==="model:$textProxy"||t==="textProxy"||t==="model:textProxy"}getPath(){const t=this.textNode.getPath();return t.length>0&&(t[t.length-1]+=this.offsetInText),t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}hasAttribute(t){return this.textNode.hasAttribute(t)}getAttribute(t){return this.textNode.getAttribute(t)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}class _n{constructor(t){this._nodes=[],t&&this._insertNodes(0,t)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((t,e)=>t+e.offsetSize,0)}getNode(t){return this._nodes[t]||null}getNodeIndex(t){const e=this._nodes.indexOf(t);return e==-1?null:e}getNodeStartOffset(t){const e=this.getNodeIndex(t);return e===null?null:this._nodes.slice(0,e).reduce((n,o)=>n+o.offsetSize,0)}indexToOffset(t){if(t==this._nodes.length)return this.maxOffset;const e=this._nodes[t];if(!e)throw new m("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(e)}offsetToIndex(t){let e=0;for(const n of this._nodes){if(t>=e&&t<e+n.offsetSize)return this.getNodeIndex(n);e+=n.offsetSize}if(e!=t)throw new m("model-nodelist-offset-out-of-bounds",this,{offset:t,nodeList:this});return this.length}_insertNodes(t,e){for(const n of e)if(!(n instanceof Ye))throw new m("model-nodelist-insertnodes-not-node",this);this._nodes.splice(t,0,...e)}_removeNodes(t,e=1){return this._nodes.splice(t,e)}toJSON(){return this._nodes.map(t=>t.toJSON())}}class X extends Ye{constructor(t,e,n){super(e),this.name=t,this._children=new _n,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}is(t,e=null){return e?e===this.name&&(t==="element"||t==="model:element"):t==="element"||t==="model:element"||t==="node"||t==="model:node"}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}offsetToIndex(t){return this._children.offsetToIndex(t)}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}findAncestor(t,e={includeSelf:!1}){let n=e.includeSelf?this:this.parent;for(;n;){if(n.name===t)return n;n=n.parent}return null}toJSON(){const t=super.toJSON();if(t.name=this.name,this._children.length>0){t.children=[];for(const e of this._children)t.children.push(e.toJSON())}return t}_clone(t=!1){const e=t?Array.from(this._children).map(n=>n._clone(!0)):null;return new X(this.name,this.getAttributes(),e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(o){return typeof o=="string"?[new rt(o)]:(Wt(o)||(o=[o]),Array.from(o).map(r=>typeof r=="string"?new rt(r):r instanceof me?new rt(r.data,r.getAttributes()):r))}(e);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const o of n)o.parent=null;return n}static fromJSON(t){let e=null;if(t.children){e=[];for(const n of t.children)n.name?e.push(X.fromJSON(n)):e.push(rt.fromJSON(n))}return new X(t.name,t.attributes,e)}}class ve{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new m("model-tree-walker-no-start-position",null);const e=t.direction||"forward";if(e!="forward"&&e!="backward")throw new m("model-tree-walker-unknown-direction",t,{direction:e});this.direction=e,this.boundaries=t.boundaries||null,t.startPosition?this.position=t.startPosition.clone():this.position=M._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(t){let e,n,o,r;do o=this.position,r=this._visitedParent,{done:e,value:n}=this.next();while(!e&&t(n));e||(this.position=o,this._visitedParent=r)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(n.parent===null&&e.offset===n.maxOffset)return{done:!0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};const o=Xn(e,n),r=o||_c(e,n,o);if(r instanceof X)return this.shallow?e.offset++:(e.path.push(0),this._visitedParent=r),this.position=e,Ke("elementStart",r,t,e,1);if(r instanceof rt){let s;if(this.singleCharacters)s=1;else{let l=r.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<l&&(l=this.boundaries.end.offset),s=l-e.offset}const a=e.offset-r.startOffset,c=new me(r,a,s);return e.offset+=s,this.position=e,Ke("text",c,t,e,s)}return e.path.pop(),e.offset++,this.position=e,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():Ke("elementEnd",n,t,e)}_previous(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(n.parent===null&&e.offset===0)return{done:!0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};const o=e.parent,r=Xn(e,o),s=r||Ac(e,o,r);if(s instanceof X)return e.offset--,this.shallow?(this.position=e,Ke("elementStart",s,t,e,1)):(e.path.push(s.maxOffset),this.position=e,this._visitedParent=s,this.ignoreElementEnd?this._previous():Ke("elementEnd",s,t,e));if(s instanceof rt){let a;if(this.singleCharacters)a=1;else{let d=s.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>d&&(d=this.boundaries.start.offset),a=e.offset-d}const c=e.offset-s.startOffset,l=new me(s,c-a,a);return e.offset-=a,this.position=e,Ke("text",l,t,e,a)}return e.path.pop(),this.position=e,this._visitedParent=n.parent,Ke("elementStart",n,t,e,1)}}function Ke(i,t,e,n,o){return{done:!1,value:{type:i,item:t,previousPosition:e,nextPosition:n,length:o}}}class M{constructor(t,e,n="toNone"){if(!t.is("element")&&!t.is("documentFragment"))throw new m("model-position-root-invalid",t);if(!(e instanceof Array)||e.length===0)throw new m("model-position-path-incorrect-format",t,{path:e});t.is("rootElement")?e=e.slice():(e=[...t.getPath(),...e],t=t.root),this.root=t,this.path=e,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(t){this.path[this.path.length-1]=t}get parent(){let t=this.root;for(let e=0;e<this.path.length-1;e++)if(t=t.getChild(t.offsetToIndex(this.path[e])),!t)throw new m("model-position-path-incorrect",this,{position:this});if(t.is("$text"))throw new m("model-position-path-incorrect",this,{position:this});return t}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return Xn(this,this.parent)}get nodeAfter(){const t=this.parent;return _c(this,t,Xn(this,t))}get nodeBefore(){const t=this.parent;return Ac(this,t,Xn(this,t))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(t){if(this.root!=t.root)return"different";const e=St(this.path,t.path);switch(e){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[e]<t.path[e]?"before":"after"}}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new ve(e);return n.skip(t),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const t=this.parent;return t.is("documentFragment")?[t]:t.getAncestors({includeSelf:!0})}findAncestor(t){const e=this.parent;return e.is("element")?e.findAncestor(t,{includeSelf:!0}):null}getCommonPath(t){if(this.root!=t.root)return[];const e=St(this.path,t.path),n=typeof e=="string"?Math.min(this.path.length,t.path.length):e;return this.path.slice(0,n)}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let o=0;for(;e[o]==n[o]&&e[o];)o++;return o===0?null:e[o-1]}getShiftedBy(t){const e=this.clone(),n=e.offset+t;return e.offset=n<0?0:n,e}isAfter(t){return this.compareWith(t)=="after"}isBefore(t){return this.compareWith(t)=="before"}isEqual(t){return this.compareWith(t)=="same"}isTouching(t){let e=null,n=null;switch(this.compareWith(t)){case"same":return!0;case"before":e=M._createAt(this),n=M._createAt(t);break;case"after":e=M._createAt(t),n=M._createAt(this);break;default:return!1}let o=e.parent;for(;e.path.length+n.path.length;){if(e.isEqual(n))return!0;if(e.path.length>n.path.length){if(e.offset!==o.maxOffset)return!1;e.path=e.path.slice(0,-1),o=o.parent,e.offset++}else{if(n.offset!==0)return!1;n.path=n.path.slice(0,-1)}}}is(t){return t==="position"||t==="model:position"}hasSameParentAs(t){return this.root!==t.root?!1:St(this.getParentPath(),t.getParentPath())=="same"}getTransformedByOperation(t){let e;switch(t.type){case"insert":e=this._getTransformedByInsertOperation(t);break;case"move":case"remove":case"reinsert":e=this._getTransformedByMoveOperation(t);break;case"split":e=this._getTransformedBySplitOperation(t);break;case"merge":e=this._getTransformedByMergeOperation(t);break;default:e=M._createAt(this)}return e}_getTransformedByInsertOperation(t){return this._getTransformedByInsertion(t.position,t.howMany)}_getTransformedByMoveOperation(t){return this._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany)}_getTransformedBySplitOperation(t){const e=t.movedRange;return e.containsPosition(this)||e.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(t.splitPosition,t.moveTargetPosition):t.graveyardPosition?this._getTransformedByMove(t.graveyardPosition,t.insertionPosition,1):this._getTransformedByInsertion(t.insertionPosition,1)}_getTransformedByMergeOperation(t){const e=t.movedRange;let n;return e.containsPosition(this)||e.start.isEqual(this)?(n=this._getCombined(t.sourcePosition,t.targetPosition),t.sourcePosition.isBefore(t.targetPosition)&&(n=n._getTransformedByDeletion(t.deletionPosition,1))):n=this.isEqual(t.deletionPosition)?M._createAt(t.deletionPosition):this._getTransformedByMove(t.deletionPosition,t.graveyardPosition,1),n}_getTransformedByDeletion(t,e){const n=M._createAt(this);if(this.root!=t.root)return n;if(St(t.getParentPath(),this.getParentPath())=="same"){if(t.offset<this.offset){if(t.offset+e>this.offset)return null;n.offset-=e}}else if(St(t.getParentPath(),this.getParentPath())=="prefix"){const o=t.path.length-1;if(t.offset<=this.path[o]){if(t.offset+e>this.path[o])return null;n.path[o]-=e}}return n}_getTransformedByInsertion(t,e){const n=M._createAt(this);if(this.root!=t.root)return n;if(St(t.getParentPath(),this.getParentPath())=="same")(t.offset<this.offset||t.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=e);else if(St(t.getParentPath(),this.getParentPath())=="prefix"){const o=t.path.length-1;t.offset<=this.path[o]&&(n.path[o]+=e)}return n}_getTransformedByMove(t,e,n){if(e=e._getTransformedByDeletion(t,n),t.isEqual(e))return M._createAt(this);const o=this._getTransformedByDeletion(t,n);return o===null||t.isEqual(this)&&this.stickiness=="toNext"||t.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(t,e):o._getTransformedByInsertion(e,n)}_getCombined(t,e){const n=t.path.length-1,o=M._createAt(e);return o.stickiness=this.stickiness,o.offset=o.offset+this.path[n]-t.offset,o.path=[...o.path,...this.path.slice(n+1)],o}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(t,e,n="toNone"){if(t instanceof M)return new M(t.root,t.path,t.stickiness);{const o=t;if(e=="end")e=o.maxOffset;else{if(e=="before")return this._createBefore(o,n);if(e=="after")return this._createAfter(o,n);if(e!==0&&!e)throw new m("model-createpositionat-offset-required",[this,t])}if(!o.is("element")&&!o.is("documentFragment"))throw new m("model-position-parent-incorrect",[this,t]);const r=o.getPath();return r.push(e),new this(o.root,r,n)}}static _createAfter(t,e){if(!t.parent)throw new m("model-position-after-root",[this,t],{root:t});return this._createAt(t.parent,t.endOffset,e)}static _createBefore(t,e){if(!t.parent)throw new m("model-position-before-root",t,{root:t});return this._createAt(t.parent,t.startOffset,e)}static fromJSON(t,e){if(t.root==="$graveyard"){const n=new M(e.graveyard,t.path);return n.stickiness=t.stickiness,n}if(!e.getRoot(t.root))throw new m("model-position-fromjson-no-root",e,{rootName:t.root});return new M(e.getRoot(t.root),t.path,t.stickiness)}}function Xn(i,t){const e=t.getChild(t.offsetToIndex(i.offset));return e&&e.is("$text")&&e.startOffset<i.offset?e:null}function _c(i,t,e){return e!==null?null:t.getChild(t.offsetToIndex(i.offset))}function Ac(i,t,e){return e!==null?null:t.getChild(t.offsetToIndex(i.offset)-1)}class x{constructor(t,e=null){this.start=M._createAt(t),this.end=e?M._createAt(e):M._createAt(t),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new ve({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return St(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),o=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&o}containsItem(t){const e=M._createBefore(t);return this.containsPosition(e)||this.start.isEqual(e)}is(t){return t==="range"||t==="model:range"}isEqual(t){return this.start.isEqual(t.start)&&this.end.isEqual(t.end)}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new x(this.start,t.start)),this.containsPosition(t.end)&&e.push(new x(t.end,this.end))):e.push(new x(this.start,this.end)),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new x(e,n)}return null}getJoined(t,e=!1){let n=this.isIntersecting(t);if(n||(n=this.start.isBefore(t.start)?e?this.end.isTouching(t.start):this.end.isEqual(t.start):e?t.end.isTouching(this.start):t.end.isEqual(this.start)),!n)return null;let o=this.start,r=this.end;return t.start.isBefore(o)&&(o=t.start),t.end.isAfter(r)&&(r=t.end),new x(o,r)}getMinimalFlatRanges(){const t=[],e=this.start.getCommonPath(this.end).length,n=M._createAt(this.start);let o=n.parent;for(;n.path.length>e+1;){const r=o.maxOffset-n.offset;r!==0&&t.push(new x(n,n.getShiftedBy(r))),n.path=n.path.slice(0,-1),n.offset++,o=o.parent}for(;n.path.length<=this.end.path.length;){const r=this.end.path[n.path.length-1],s=r-n.offset;s!==0&&t.push(new x(n,n.getShiftedBy(s))),n.offset=r,n.path.push(0)}return t}getWalker(t={}){return t.boundaries=this,new ve(t)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new ve(t);for(const n of e)yield n.item}*getPositions(t={}){t.boundaries=this;const e=new ve(t);yield e.position;for(const n of e)yield n.nextPosition}getTransformedByOperation(t){switch(t.type){case"insert":return this._getTransformedByInsertOperation(t);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(t);case"split":return[this._getTransformedBySplitOperation(t)];case"merge":return[this._getTransformedByMergeOperation(t)]}return[new x(this.start,this.end)]}getTransformedByOperations(t){const e=[new x(this.start,this.end)];for(const n of t)for(let o=0;o<e.length;o++){const r=e[o].getTransformedByOperation(n);e.splice(o,1,...r),o+=r.length-1}for(let n=0;n<e.length;n++){const o=e[n];for(let r=n+1;r<e.length;r++){const s=e[r];(o.containsRange(s)||s.containsRange(o)||o.isEqual(s))&&e.splice(r,1)}}return e}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const t=this.start.nodeAfter,e=this.end.nodeBefore;return t&&t.is("element")&&t===e?t:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(t,e=!1){return this._getTransformedByInsertion(t.position,t.howMany,e)}_getTransformedByMoveOperation(t,e=!1){const n=t.sourcePosition,o=t.howMany,r=t.targetPosition;return this._getTransformedByMove(n,r,o,e)}_getTransformedBySplitOperation(t){const e=this.start._getTransformedBySplitOperation(t);let n=this.end._getTransformedBySplitOperation(t);return this.end.isEqual(t.insertionPosition)&&(n=this.end.getShiftedBy(1)),e.root!=n.root&&(n=this.end.getShiftedBy(-1)),new x(e,n)}_getTransformedByMergeOperation(t){if(this.start.isEqual(t.targetPosition)&&this.end.isEqual(t.deletionPosition))return new x(this.start);let e=this.start._getTransformedByMergeOperation(t),n=this.end._getTransformedByMergeOperation(t);return e.root!=n.root&&(n=this.end.getShiftedBy(-1)),e.isAfter(n)?(t.sourcePosition.isBefore(t.targetPosition)?(e=M._createAt(n),e.offset=0):(t.deletionPosition.isEqual(e)||(n=t.deletionPosition),e=t.targetPosition),new x(e,n)):new x(e,n)}_getTransformedByInsertion(t,e,n=!1){if(n&&this.containsPosition(t))return[new x(this.start,t),new x(t.getShiftedBy(e),this.end._getTransformedByInsertion(t,e))];{const o=new x(this.start,this.end);return o.start=o.start._getTransformedByInsertion(t,e),o.end=o.end._getTransformedByInsertion(t,e),[o]}}_getTransformedByMove(t,e,n,o=!1){if(this.isCollapsed){const h=this.start._getTransformedByMove(t,e,n);return[new x(h)]}const r=x._createFromPositionAndShift(t,n),s=e._getTransformedByDeletion(t,n);if(this.containsPosition(e)&&!o&&(r.containsPosition(this.start)||r.containsPosition(this.end))){const h=this.start._getTransformedByMove(t,e,n),u=this.end._getTransformedByMove(t,e,n);return[new x(h,u)]}let a;const c=this.getDifference(r);let l=null;const d=this.getIntersection(r);if(c.length==1?l=new x(c[0].start._getTransformedByDeletion(t,n),c[0].end._getTransformedByDeletion(t,n)):c.length==2&&(l=new x(this.start,this.end._getTransformedByDeletion(t,n))),a=l?l._getTransformedByInsertion(s,n,d!==null||o):[],d){const h=new x(d.start._getCombined(r.start,s),d.end._getCombined(r.start,s));a.length==2?a.splice(1,0,h):a.push(h)}return a}_getTransformedByDeletion(t,e){let n=this.start._getTransformedByDeletion(t,e),o=this.end._getTransformedByDeletion(t,e);return n==null&&o==null?null:(n==null&&(n=t),o==null&&(o=t),new x(n,o))}static _createFromPositionAndShift(t,e){const n=t,o=t.getShiftedBy(e);return e>0?new this(n,o):new this(o,n)}static _createIn(t){return new this(M._createAt(t,0),M._createAt(t,t.maxOffset))}static _createOn(t){return this._createFromPositionAndShift(M._createBefore(t),t.offsetSize)}static _createFromRanges(t){if(t.length===0)throw new m("range-create-from-ranges-empty-array",null);if(t.length==1)return t[0].clone();const e=t[0];t.sort((r,s)=>r.start.isAfter(s.start)?1:-1);const n=t.indexOf(e),o=new this(e.start,e.end);if(n>0)for(let r=n-1;t[r].end.isEqual(o.start);r++)o.start=M._createAt(t[r].start);for(let r=n+1;r<t.length&&t[r].start.isEqual(o.end);r++)o.end=M._createAt(t[r].end);return o}static fromJSON(t,e){return new this(M.fromJSON(t.start,e),M.fromJSON(t.end,e))}}class tr{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(t,e)=>{if(e.viewPosition)return;const n=this._modelToViewMapping.get(e.modelPosition.parent);if(!n)throw new m("mapping-model-position-view-parent-not-found",this,{modelPosition:e.modelPosition});e.viewPosition=this.findPositionIn(n,e.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(t,e)=>{if(e.modelPosition)return;const n=this.findMappedViewAncestor(e.viewPosition),o=this._viewToModelMapping.get(n),r=this._toModelOffset(e.viewPosition.parent,e.viewPosition.offset,n);e.modelPosition=M._createAt(o,r)},{priority:"low"})}bindElements(t,e){this._modelToViewMapping.set(t,e),this._viewToModelMapping.set(e,t)}unbindViewElement(t,e={}){const n=this.toModelElement(t);if(this._elementToMarkerNames.has(t))for(const o of this._elementToMarkerNames.get(t))this._unboundMarkerNames.add(o);e.defer?this._deferredBindingRemovals.set(t,t.root):(this._viewToModelMapping.delete(t),this._modelToViewMapping.get(n)==t&&this._modelToViewMapping.delete(n))}unbindModelElement(t){const e=this.toViewElement(t);this._modelToViewMapping.delete(t),this._viewToModelMapping.get(e)==t&&this._viewToModelMapping.delete(e)}bindElementToMarker(t,e){const n=this._markerNameToElements.get(e)||new Set;n.add(t);const o=this._elementToMarkerNames.get(t)||new Set;o.add(e),this._markerNameToElements.set(e,n),this._elementToMarkerNames.set(t,o)}unbindElementFromMarkerName(t,e){const n=this._markerNameToElements.get(e);n&&(n.delete(t),n.size==0&&this._markerNameToElements.delete(e));const o=this._elementToMarkerNames.get(t);o&&(o.delete(e),o.size==0&&this._elementToMarkerNames.delete(t))}flushUnboundMarkerNames(){const t=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),t}flushDeferredBindings(){for(const[t,e]of this._deferredBindingRemovals)t.root==e&&this.unbindViewElement(t);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(t){return this._viewToModelMapping.get(t)}toViewElement(t){return this._modelToViewMapping.get(t)}toModelRange(t){return new x(this.toModelPosition(t.start),this.toModelPosition(t.end))}toViewRange(t){return new j(this.toViewPosition(t.start),this.toViewPosition(t.end))}toModelPosition(t){const e={viewPosition:t,mapper:this};return this.fire("viewToModelPosition",e),e.modelPosition}toViewPosition(t,e={isPhantom:!1}){const n={modelPosition:t,mapper:this,isPhantom:e.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(t){const e=this._markerNameToElements.get(t);if(!e)return null;const n=new Set;for(const o of e)if(o.is("attributeElement"))for(const r of o.getElementsWithSameId())n.add(r);else n.add(o);return n}registerViewToModelLength(t,e){this._viewToModelLengthCallbacks.set(t,e)}findMappedViewAncestor(t){let e=t.parent;for(;!this._viewToModelMapping.has(e);)e=e.parent;return e}_toModelOffset(t,e,n){if(n!=t)return this._toModelOffset(t.parent,t.index,n)+this._toModelOffset(t,e,t);if(t.is("$text"))return e;let o=0;for(let r=0;r<e;r++)o+=this.getModelLength(t.getChild(r));return o}getModelLength(t){if(this._viewToModelLengthCallbacks.get(t.name))return this._viewToModelLengthCallbacks.get(t.name)(t);if(this._viewToModelMapping.has(t))return 1;if(t.is("$text"))return t.data.length;if(t.is("uiElement"))return 0;{let e=0;for(const n of t.getChildren())e+=this.getModelLength(n);return e}}findPositionIn(t,e){let n,o=0,r=0,s=0;if(t.is("$text"))return new N(t,e);for(;r<e;)n=t.getChild(s),o=this.getModelLength(n),r+=o,s++;return r==e?this._moveViewPositionToTextNode(new N(t,s)):this.findPositionIn(n,e-(r-o))}_moveViewPositionToTextNode(t){const e=t.nodeBefore,n=t.nodeAfter;return e instanceof it?new N(e,e.data.length):n instanceof it?new N(n,0):t}}z(tr,K);class ek{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(t,e){e=Ro(e),t instanceof me&&(t=this._getSymbolForTextProxy(t)),this._consumable.has(t)||this._consumable.set(t,new Map),this._consumable.get(t).set(e,!0)}consume(t,e){return e=Ro(e),t instanceof me&&(t=this._getSymbolForTextProxy(t)),!!this.test(t,e)&&(this._consumable.get(t).set(e,!1),!0)}test(t,e){e=Ro(e),t instanceof me&&(t=this._getSymbolForTextProxy(t));const n=this._consumable.get(t);if(n===void 0)return null;const o=n.get(e);return o===void 0?null:o}revert(t,e){e=Ro(e),t instanceof me&&(t=this._getSymbolForTextProxy(t));const n=this.test(t,e);return n===!1?(this._consumable.get(t).set(e,!0),!0):n!==!0&&null}verifyAllConsumed(t){const e=[];for(const[n,o]of this._consumable)for(const[r,s]of o){const a=r.split(":")[0];s&&t==a&&e.push({event:r,item:n.name||n.description})}if(e.length)throw new m("conversion-model-consumable-not-consumed",null,{items:e})}_getSymbolForTextProxy(t){let e=null;const n=this._textProxyRegistry.get(t.startOffset);if(n){const o=n.get(t.endOffset);o&&(e=o.get(t.parent))}return e||(e=this._addSymbolForTextProxy(t)),e}_addSymbolForTextProxy(t){const e=t.startOffset,n=t.endOffset,o=t.parent,r=Symbol("$textProxy:"+t.data);let s,a;return s=this._textProxyRegistry.get(e),s||(s=new Map,this._textProxyRegistry.set(e,s)),a=s.get(n),a||(a=new Map,s.set(n,a)),a.set(o,r),r}}function Ro(i){const t=i.split(":");return t[0]=="insert"?t[0]:t[0]=="addMarker"||t[0]=="removeMarker"?i:t.length>1?t[0]+":"+t[1]:t[0]}class er{constructor(t){this._conversionApi={dispatcher:this,...t},this._firedEventsMap=new WeakMap}convertChanges(t,e,n){const o=this._createConversionApi(n,t.getRefreshedItems());for(const s of t.getMarkersToRemove())this._convertMarkerRemove(s.name,s.range,o);const r=this._reduceChanges(t.getChanges());for(const s of r)s.type==="insert"?this._convertInsert(x._createFromPositionAndShift(s.position,s.length),o):s.type==="reinsert"?this._convertReinsert(x._createFromPositionAndShift(s.position,s.length),o):s.type==="remove"?this._convertRemove(s.position,s.length,s.name,o):this._convertAttribute(s.range,s.attributeKey,s.attributeOldValue,s.attributeNewValue,o);for(const s of o.mapper.flushUnboundMarkerNames()){const a=e.get(s).getRange();this._convertMarkerRemove(s,a,o),this._convertMarkerAdd(s,a,o)}for(const s of t.getMarkersToAdd())this._convertMarkerAdd(s.name,s.range,o);o.mapper.flushDeferredBindings(),o.consumable.verifyAllConsumed("insert")}convert(t,e,n,o={}){const r=this._createConversionApi(n,void 0,o);this._convertInsert(t,r);for(const[s,a]of e)this._convertMarkerAdd(s,a,r);r.consumable.verifyAllConsumed("insert")}convertSelection(t,e,n){const o=Array.from(e.getMarkersAtPosition(t.getFirstPosition())),r=this._createConversionApi(n);if(this._addConsumablesForSelection(r.consumable,t,o),this.fire("selection",{selection:t},r),t.isCollapsed){for(const s of o){const a=s.getRange();if(!nk(t.getFirstPosition(),s,r.mapper))continue;const c={item:t,markerName:s.name,markerRange:a};r.consumable.test(t,"addMarker:"+s.name)&&this.fire("addMarker:"+s.name,c,r)}for(const s of t.getAttributeKeys()){const a={item:t,range:t.getFirstRange(),attributeKey:s,attributeOldValue:null,attributeNewValue:t.getAttribute(s)};r.consumable.test(t,"attribute:"+a.attributeKey)&&this.fire("attribute:"+a.attributeKey+":$text",a,r)}}}_convertInsert(t,e,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(e.consumable,Array.from(t));for(const o of Array.from(t.getWalker({shallow:!0})).map(Cc))this._testAndFire("insert",o,e)}_convertRemove(t,e,n,o){this.fire("remove:"+n,{position:t,length:e},o)}_convertAttribute(t,e,n,o,r){this._addConsumablesForRange(r.consumable,t,`attribute:${e}`);for(const s of t){const a={item:s.item,range:x._createFromPositionAndShift(s.previousPosition,s.length),attributeKey:e,attributeOldValue:n,attributeNewValue:o};this._testAndFire(`attribute:${e}`,a,r)}}_convertReinsert(t,e){const n=Array.from(t.getWalker({shallow:!0}));this._addConsumablesForInsert(e.consumable,n);for(const o of n.map(Cc))this._testAndFire("insert",{...o,reconversion:!0},e)}_convertMarkerAdd(t,e,n){if(e.root.rootName=="$graveyard")return;const o="addMarker:"+t;if(n.consumable.add(e,o),this.fire(o,{markerName:t,markerRange:e},n),n.consumable.consume(e,o)){this._addConsumablesForRange(n.consumable,e,o);for(const r of e.getItems()){if(!n.consumable.test(r,o))continue;const s={item:r,range:x._createOn(r),markerName:t,markerRange:e};this.fire(o,s,n)}}}_convertMarkerRemove(t,e,n){e.root.rootName!="$graveyard"&&this.fire("removeMarker:"+t,{markerName:t,markerRange:e},n)}_reduceChanges(t){const e={changes:t};return this.fire("reduceChanges",e),e.changes}_addConsumablesForInsert(t,e){for(const n of e){const o=n.item;if(t.test(o,"insert")===null){t.add(o,"insert");for(const r of o.getAttributeKeys())t.add(o,"attribute:"+r)}}return t}_addConsumablesForRange(t,e,n){for(const o of e.getItems())t.add(o,n);return t}_addConsumablesForSelection(t,e,n){t.add(e,"selection");for(const o of n)t.add(e,"addMarker:"+o.name);for(const o of e.getAttributeKeys())t.add(e,"attribute:"+o);return t}_testAndFire(t,e,n){const o=function(c,l){const d=l.item.name||"$text";return`${c}:${d}`}(t,e),r=e.item.is("$textProxy")?n.consumable._getSymbolForTextProxy(e.item):e.item,s=this._firedEventsMap.get(n),a=s.get(r);if(a){if(a.has(o))return;a.add(o)}else s.set(r,new Set([o]));this.fire(o,e,n)}_testAndFireAddAttributes(t,e){const n={item:t,range:x._createOn(t)};for(const o of n.item.getAttributeKeys())n.attributeKey=o,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(o),this._testAndFire(`attribute:${o}`,n,e)}_createConversionApi(t,e=new Set,n={}){const o={...this._conversionApi,consumable:new ek,writer:t,options:n,convertItem:r=>this._convertInsert(x._createOn(r),o),convertChildren:r=>this._convertInsert(x._createIn(r),o,{doNotAddConsumables:!0}),convertAttributes:r=>this._testAndFireAddAttributes(r,o),canReuseView:r=>!e.has(o.mapper.toModelElement(r))};return this._firedEventsMap.set(o,new Map),o}}function nk(i,t,e){const n=t.getRange(),o=Array.from(i.getAncestors());return o.shift(),o.reverse(),!o.some(r=>{if(n.containsItem(r))return!!e.toViewElement(r).getCustomProperty("addHighlight")})}function Cc(i){return{item:i.item,range:x._createFromPositionAndShift(i.previousPosition,i.length)}}z(er,K);class ye{constructor(t,e,n){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,t&&this.setTo(t,e,n)}get anchor(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.end:t.start}return null}get focus(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.start:t.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(t){if(this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const o of t._ranges)if(e.isEqual(o)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const t of this._ranges)yield new x(t.start,t.end)}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?new x(t.start,t.end):null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?new x(t.start,t.end):null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}setTo(t,e,n){if(t===null)this._setRanges([]);else if(t instanceof ye)this._setRanges(t.getRanges(),t.isBackward);else if(t&&typeof t.getRanges=="function")this._setRanges(t.getRanges(),t.isBackward);else if(t instanceof x)this._setRanges([t],!!e&&!!e.backward);else if(t instanceof M)this._setRanges([new x(t)]);else if(t instanceof Ye){const o=!!n&&!!n.backward;let r;if(e=="in")r=x._createIn(t);else if(e=="on")r=x._createOn(t);else{if(e===void 0)throw new m("model-selection-setto-required-second-parameter",[this,t]);r=new x(M._createAt(t,e))}this._setRanges([r],o)}else{if(!Wt(t))throw new m("model-selection-setto-not-selectable",[this,t]);this._setRanges(t,e&&!!e.backward)}}_setRanges(t,e=!1){const n=(t=Array.from(t)).some(o=>{if(!(o instanceof x))throw new m("model-selection-set-ranges-not-range",[this,t]);return this._ranges.every(r=>!r.isEqual(o))});if(t.length!==this._ranges.length||n){this._removeAllRanges();for(const o of t)this._pushRange(o);this._lastRangeBackward=!!e,this.fire("change:range",{directChange:!0})}}setFocus(t,e){if(this.anchor===null)throw new m("model-selection-setfocus-no-ranges",[this,t]);const n=M._createAt(t,e);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(o)=="before"?(this._pushRange(new x(n,o)),this._lastRangeBackward=!0):(this._pushRange(new x(o,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(t){return this._attrs.has(t)}removeAttribute(t){this.hasAttribute(t)&&(this._attrs.delete(t),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}setAttribute(t,e){this.getAttribute(t)!==e&&(this._attrs.set(t,e),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}is(t){return t==="selection"||t==="model:selection"}*getSelectedBlocks(){const t=new WeakSet;for(const e of this.getRanges()){const n=yc(e.start,t);n&&nr(n,e)&&(yield n);for(const r of e.getWalker()){const s=r.item;r.type=="elementEnd"&&ok(s,t,e)&&(yield s)}const o=yc(e.end,t);o&&!e.end.isTouching(M._createAt(o,0))&&nr(o,e)&&(yield o)}}containsEntireContent(t=this.anchor.root){const e=M._createAt(t,0),n=M._createAt(t,"end");return e.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(t){this._checkRange(t),this._ranges.push(new x(t.start,t.end))}_checkRange(t){for(let e=0;e<this._ranges.length;e++)if(t.isIntersecting(this._ranges[e]))throw new m("model-selection-range-intersects",[this,t],{addedRange:t,intersectingRange:this._ranges[e]})}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function vc(i,t){return!t.has(i)&&(t.add(i),i.root.document.model.schema.isBlock(i)&&i.parent)}function ok(i,t,e){return vc(i,t)&&nr(i,e)}function yc(i,t){const e=i.parent.root.document.model.schema,n=i.parent.getAncestors({parentFirst:!0,includeSelf:!0});let o=!1;const r=n.find(s=>!o&&(o=e.isLimit(s),!o&&vc(s,t)));return n.forEach(s=>t.add(s)),r}function nr(i,t){const e=function(n){const o=n.root.document.model.schema;let r=n.parent;for(;r;){if(o.isBlock(r))return r;r=r.parent}}(i);return e?!t.containsRange(x._createOn(e),!0):!0}z(ye,K);class pe extends x{constructor(t,e){super(t,e),ik.call(this)}detach(){this.stopListening()}is(t){return t==="liveRange"||t==="model:liveRange"||t=="range"||t==="model:range"}toRange(){return new x(this.start,this.end)}static fromRange(t){return new pe(t.start,t.end)}}function ik(){this.listenTo(this.root.document.model,"applyOperation",(i,t)=>{const e=t[0];e.isDocumentOperation&&rk.call(this,e)},{priority:"low"})}function rk(i){const t=this.getTransformedByOperation(i),e=x._createFromRanges(t),n=!e.isEqual(this),o=function(s,a){switch(a.type){case"insert":return s.containsPosition(a.position);case"move":case"remove":case"reinsert":case"merge":return s.containsPosition(a.sourcePosition)||s.start.isEqual(a.sourcePosition)||s.containsPosition(a.targetPosition);case"split":return s.containsPosition(a.splitPosition)||s.containsPosition(a.insertionPosition)}return!1}(this,i);let r=null;if(n){e.root.rootName=="$graveyard"&&(r=i.type=="remove"?i.sourcePosition:i.deletionPosition);const s=this.toRange();this.start=e.start,this.end=e.end,this.fire("change:range",s,{deletionPosition:r})}else o&&this.fire("change:content",this.toRange(),{deletionPosition:r})}z(pe,K);const to="selection:";class ie{constructor(t){this._selection=new sk(t),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(t){return this._selection.containsEntireContent(t)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(t){return this._selection.getAttribute(t)}hasAttribute(t){return this._selection.hasAttribute(t)}refresh(){this._selection._updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(t){this._selection.observeMarkers(t)}is(t){return t==="selection"||t=="model:selection"||t=="documentSelection"||t=="model:documentSelection"}_setFocus(t,e){this._selection.setFocus(t,e)}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setAttribute(t,e){this._selection.setAttribute(t,e)}_removeAttribute(t){this._selection.removeAttribute(t)}_getStoredAttributes(){return this._selection._getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(t){this._selection.restoreGravity(t)}static _getStoreAttributeKey(t){return to+t}static _isStoreAttributeKey(t){return t.startsWith(to)}}z(ie,K);class sk extends ye{constructor(t){super(),this.markers=new Yt({idProperty:"name"}),this._model=t.model,this._document=t,this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this.listenTo(this._model,"applyOperation",(e,n)=>{const o=n[0];o.isDocumentOperation&&o.type!="marker"&&o.type!="rename"&&o.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{for(const e of this.getRanges())if(!this._document._validateSelectionRange(e))throw new m("document-selection-wrong-position",this,{range:e})}),this.listenTo(this._model.markers,"update",(e,n,o,r)=>{this._updateMarker(n,r)}),this.listenTo(this._document,"change",(e,n)=>{(function(o,r){const s=o.document.differ;for(const a of s.getChanges()){if(a.type!="insert")continue;const c=a.position.parent;a.length===c.maxOffset&&o.enqueueChange(r,l=>{const d=Array.from(c.getAttributeKeys()).filter(h=>h.startsWith(to));for(const h of d)l.removeAttribute(h,c)})}})(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let t=0;t<this._ranges.length;t++)this._ranges[t].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(t,e,n){super.setTo(t,e,n),this._updateAttributes(!0),this._updateMarkers()}setFocus(t,e){super.setFocus(t,e),this._updateAttributes(!0),this._updateMarkers()}setAttribute(t,e){if(this._setAttribute(t,e)){const n=[t];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(t){if(this._removeAttribute(t)){const e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}overrideGravity(){const t=v();return this._overriddenGravityRegister.add(t),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),t}restoreGravity(t){if(!this._overriddenGravityRegister.has(t))throw new m("document-selection-gravity-wrong-restore",this,{uid:t});this._overriddenGravityRegister.delete(t),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(t){this._observedMarkers.add(t),this._updateMarkers()}_popRange(){this._ranges.pop().detach()}_pushRange(t){const e=this._prepareRange(t);e&&this._ranges.push(e)}_prepareRange(t){if(this._checkRange(t),t.root==this._document.graveyard)return;const e=pe.fromRange(t);return e.on("change:range",(n,o,r)=>{if(this._hasChangedRange=!0,e.root==this._document.graveyard){this._selectionRestorePosition=r.deletionPosition;const s=this._ranges.indexOf(e);this._ranges.splice(s,1),e.detach()}}),e}_updateMarkers(){if(!this._observedMarkers.size)return;const t=[];let e=!1;for(const o of this._model.markers){const r=o.name.split(":",1)[0];if(!this._observedMarkers.has(r))continue;const s=o.getRange();for(const a of this.getRanges())s.containsRange(a,!a.isCollapsed)&&t.push(o)}const n=Array.from(this.markers);for(const o of t)this.markers.has(o)||(this.markers.add(o),e=!0);for(const o of Array.from(this.markers))t.includes(o)||(this.markers.remove(o),e=!0);e&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(t,e){const n=t.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let o=!1;const r=Array.from(this.markers),s=this.markers.has(t);if(e){let a=!1;for(const c of this.getRanges())if(e.containsRange(c,!c.isCollapsed)){a=!0;break}a&&!s?(this.markers.add(t),o=!0):!a&&s&&(this.markers.remove(t),o=!0)}else s&&(this.markers.remove(t),o=!0);o&&this.fire("change:marker",{oldMarkers:r,directChange:!1})}_updateAttributes(t){const e=de(this._getSurroundingAttributes()),n=de(this.getAttributes());if(t)this._attributePriority=new Map,this._attrs=new Map;else for(const[r,s]of this._attributePriority)s=="low"&&(this._attrs.delete(r),this._attributePriority.delete(r));this._setAttributesTo(e);const o=[];for(const[r,s]of this.getAttributes())n.has(r)&&n.get(r)===s||o.push(r);for(const[r]of n)this.hasAttribute(r)||o.push(r);o.length>0&&this.fire("change:attribute",{attributeKeys:o,directChange:!1})}_setAttribute(t,e,n=!0){const o=n?"normal":"low";return o=="low"&&this._attributePriority.get(t)=="normal"?!1:super.getAttribute(t)!==e&&(this._attrs.set(t,e),this._attributePriority.set(t,o),!0)}_removeAttribute(t,e=!0){const n=e?"normal":"low";return(n!="low"||this._attributePriority.get(t)!="normal")&&(this._attributePriority.set(t,n),!!super.hasAttribute(t)&&(this._attrs.delete(t),!0))}_setAttributesTo(t){const e=new Set;for(const[n,o]of this.getAttributes())t.get(n)!==o&&this._removeAttribute(n,!1);for(const[n,o]of t)this._setAttribute(n,o,!1)&&e.add(n);return e}*_getStoredAttributes(){const t=this.getFirstPosition().parent;if(this.isCollapsed&&t.isEmpty)for(const e of t.getAttributeKeys())e.startsWith(to)&&(yield[e.substr(to.length),t.getAttribute(e)])}_getSurroundingAttributes(){const t=this.getFirstPosition(),e=this._model.schema;let n=null;if(this.isCollapsed){const o=t.textNode?t.textNode:t.nodeBefore,r=t.textNode?t.textNode:t.nodeAfter;if(this.isGravityOverridden||(n=jo(o)),n||(n=jo(r)),!this.isGravityOverridden&&!n){let s=o;for(;s&&!e.isInline(s)&&!n;)s=s.previousSibling,n=jo(s)}if(!n){let s=r;for(;s&&!e.isInline(s)&&!n;)s=s.nextSibling,n=jo(s)}n||(n=this._getStoredAttributes())}else{const o=this.getFirstRange();for(const r of o){if(r.item.is("element")&&e.isObject(r.item))break;if(r.type=="text"){n=r.item.getAttributes();break}}}return n}_fixGraveyardSelection(t){const e=this._model.schema.getNearestSelectionRange(t);e&&this._pushRange(e)}}function jo(i){return i instanceof me||i instanceof rt?i.getAttributes():null}class xc{constructor(t){this._dispatchers=t}add(t){for(const e of this._dispatchers)t(e);return this}}const re=function(i){return Ei(i,5)};class ak extends xc{elementToElement(t){return this.add(function(e){return(e=re(e)).model=Ic(e.model),e.view=eo(e.view,"container"),e.model.attributes.length&&(e.model.children=!0),n=>{n.on("insert:"+e.model.name,function(o,r=lk){return(s,a,c)=>{if(!r(a.item,c.consumable,{preflight:!0}))return;const l=o(a.item,c,a);if(!l)return;r(a.item,c.consumable);const d=c.mapper.toViewPosition(a.range.start);c.mapper.bindElements(a.item,l),c.writer.insert(d,l),c.convertAttributes(a.item),Bc(l,a.item.getChildren(),c,{reconversion:a.reconversion})}}(e.view,Nc(e.model)),{priority:e.converterPriority||"normal"}),(e.model.children||e.model.attributes.length)&&n.on("reduceChanges",Tc(e.model),{priority:"low"})}}(t))}elementToStructure(t){return this.add(function(e){return(e=re(e)).model=Ic(e.model),e.view=eo(e.view,"container"),e.model.children=!0,n=>{if(n._conversionApi.schema.checkChild(e.model.name,"$text"))throw new m("conversion-element-to-structure-disallowed-text",n,{elementName:e.model.name});var o,r;n.on("insert:"+e.model.name,(o=e.view,r=Nc(e.model),(s,a,c)=>{if(!r(a.item,c.consumable,{preflight:!0}))return;const l=new Map;c.writer._registerSlotFactory(function(u,g,p){return(f,b="children")=>{const w=f.createContainerElement("$slot");let _=null;if(b==="children")_=Array.from(u.getChildren());else{if(typeof b!="function")throw new m("conversion-slot-mode-unknown",p.dispatcher,{modeOrFilter:b});_=Array.from(u.getChildren()).filter(I=>b(I))}return g.set(w,_),w}}(a.item,l,c));const d=o(a.item,c,a);if(c.writer._clearSlotFactory(),!d)return;(function(u,g,p){const f=Array.from(g.values()).flat(),b=new Set(f);if(b.size!=f.length)throw new m("conversion-slot-filter-overlap",p.dispatcher,{element:u});if(b.size!=u.childCount)throw new m("conversion-slot-filter-incomplete",p.dispatcher,{element:u})})(a.item,l,c),r(a.item,c.consumable);const h=c.mapper.toViewPosition(a.range.start);c.mapper.bindElements(a.item,d),c.writer.insert(h,d),c.convertAttributes(a.item),function(u,g,p,f){p.mapper.on("modelToViewPosition",_,{priority:"highest"});let b=null,w=null;for([b,w]of g)Bc(u,w,p,f),p.writer.move(p.writer.createRangeIn(b),p.writer.createPositionBefore(b)),p.writer.remove(b);function _(I,P){const R=P.modelPosition.nodeAfter,ot=w.indexOf(R);ot<0||(P.viewPosition=P.mapper.findPositionIn(b,ot))}p.mapper.off("modelToViewPosition",_)}(d,l,c,{reconversion:a.reconversion})}),{priority:e.converterPriority||"normal"}),n.on("reduceChanges",Tc(e.model),{priority:"low"})}}(t))}attributeToElement(t){return this.add(function(e){e=re(e);let n="attribute:"+(e.model.key?e.model.key:e.model);if(e.model.name&&(n+=":"+e.model.name),e.model.values)for(const r of e.model.values)e.view[r]=eo(e.view[r],"attribute");else e.view=eo(e.view,"attribute");const o=Mc(e);return r=>{r.on(n,function(s){return(a,c,l)=>{if(!l.consumable.test(c.item,a.name))return;const d=s(c.attributeOldValue,l,c),h=s(c.attributeNewValue,l,c);if(!d&&!h)return;l.consumable.consume(c.item,a.name);const u=l.writer,g=u.document.selection;if(c.item instanceof ye||c.item instanceof ie)u.wrap(g.getFirstRange(),h);else{let p=l.mapper.toViewRange(c.range);c.attributeOldValue!==null&&d&&(p=u.unwrap(p,d)),c.attributeNewValue!==null&&h&&u.wrap(p,h)}}}(o),{priority:e.converterPriority||"normal"})}}(t))}attributeToAttribute(t){return this.add(function(e){e=re(e);let n="attribute:"+(e.model.key?e.model.key:e.model);if(e.model.name&&(n+=":"+e.model.name),e.model.values)for(const r of e.model.values)e.view[r]=Sc(e.view[r]);else e.view=Sc(e.view);const o=Mc(e);return r=>{var s;r.on(n,(s=o,(a,c,l)=>{if(!l.consumable.test(c.item,a.name))return;const d=s(c.attributeOldValue,l,c),h=s(c.attributeNewValue,l,c);if(!d&&!h)return;l.consumable.consume(c.item,a.name);const u=l.mapper.toViewElement(c.item),g=l.writer;if(!u)throw new m("conversion-attribute-to-attribute-on-text",l.dispatcher,c);if(c.attributeOldValue!==null&&d)if(d.key=="class"){const p=vt(d.value);for(const f of p)g.removeClass(f,u)}else if(d.key=="style"){const p=Object.keys(d.value);for(const f of p)g.removeStyle(f,u)}else g.removeAttribute(d.key,u);if(c.attributeNewValue!==null&&h)if(h.key=="class"){const p=vt(h.value);for(const f of p)g.addClass(f,u)}else if(h.key=="style"){const p=Object.keys(h.value);for(const f of p)g.setStyle(f,h.value[f],u)}else g.setAttribute(h.key,h.value,u)}),{priority:e.converterPriority||"normal"})}}(t))}markerToElement(t){return this.add(function(e){return(e=re(e)).view=eo(e.view,"ui"),n=>{var o;n.on("addMarker:"+e.model,(o=e.view,(r,s,a)=>{s.isOpening=!0;const c=o(s,a);s.isOpening=!1;const l=o(s,a);if(!c||!l)return;const d=s.markerRange;if(d.isCollapsed&&!a.consumable.consume(d,r.name))return;for(const g of d)if(!a.consumable.consume(g.item,r.name))return;const h=a.mapper,u=a.writer;u.insert(h.toViewPosition(d.start),c),a.mapper.bindElementToMarker(c,s.markerName),d.isCollapsed||(u.insert(h.toViewPosition(d.end),l),a.mapper.bindElementToMarker(l,s.markerName)),r.stop()}),{priority:e.converterPriority||"normal"}),n.on("removeMarker:"+e.model,(e.view,(r,s,a)=>{const c=a.mapper.markerNameToElements(s.markerName);if(c){for(const l of c)a.mapper.unbindElementFromMarkerName(l,s.markerName),a.writer.clear(a.writer.createRangeOn(l),l);a.writer.clearClonedElementsGroup(s.markerName),r.stop()}}),{priority:e.converterPriority||"normal"})}}(t))}markerToHighlight(t){return this.add(function(e){return n=>{var o;n.on("addMarker:"+e.model,(o=e.view,(r,s,a)=>{if(!s.item||!(s.item instanceof ye||s.item instanceof ie||s.item.is("$textProxy")))return;const c=or(o,s,a);if(!c||!a.consumable.consume(s.item,r.name))return;const l=a.writer,d=Ec(l,c),h=l.document.selection;if(s.item instanceof ye||s.item instanceof ie)l.wrap(h.getFirstRange(),d,h);else{const u=a.mapper.toViewRange(s.range),g=l.wrap(u,d);for(const p of g.getItems())if(p.is("attributeElement")&&p.isSimilar(d)){a.mapper.bindElementToMarker(p,s.markerName);break}}}),{priority:e.converterPriority||"normal"}),n.on("addMarker:"+e.model,function(r){return(s,a,c)=>{if(!a.item||!(a.item instanceof X))return;const l=or(r,a,c);if(!l||!c.consumable.test(a.item,s.name))return;const d=c.mapper.toViewElement(a.item);if(d&&d.getCustomProperty("addHighlight")){c.consumable.consume(a.item,s.name);for(const h of x._createIn(a.item))c.consumable.consume(h.item,s.name);d.getCustomProperty("addHighlight")(d,l,c.writer),c.mapper.bindElementToMarker(d,a.markerName)}}}(e.view),{priority:e.converterPriority||"normal"}),n.on("removeMarker:"+e.model,function(r){return(s,a,c)=>{if(a.markerRange.isCollapsed)return;const l=or(r,a,c);if(!l)return;const d=Ec(c.writer,l),h=c.mapper.markerNameToElements(a.markerName);if(h){for(const u of h)c.mapper.unbindElementFromMarkerName(u,a.markerName),u.is("attributeElement")?c.writer.unwrap(c.writer.createRangeOn(u),d):u.getCustomProperty("removeHighlight")(u,l.id,c.writer);c.writer.clearClonedElementsGroup(a.markerName),s.stop()}}}(e.view),{priority:e.converterPriority||"normal"})}}(t))}markerToData(t){return this.add(function(e){const n=(e=re(e)).model;return e.view||(e.view=o=>({group:n,name:o.substr(e.model.length+1)})),o=>{var r;o.on("addMarker:"+n,(r=e.view,(s,a,c)=>{const l=r(a.markerName,c);if(!l)return;const d=a.markerRange;c.consumable.consume(d,s.name)&&(Dc(d,!1,c,a,l),Dc(d,!0,c,a,l),s.stop())}),{priority:e.converterPriority||"normal"}),o.on("removeMarker:"+n,function(s){return(a,c,l)=>{const d=s(c.markerName,l);if(!d)return;const h=l.mapper.markerNameToElements(c.markerName);if(h){for(const g of h)l.mapper.unbindElementFromMarkerName(g,c.markerName),g.is("containerElement")?(u(`data-${d.group}-start-before`,g),u(`data-${d.group}-start-after`,g),u(`data-${d.group}-end-before`,g),u(`data-${d.group}-end-after`,g)):l.writer.clear(l.writer.createRangeOn(g),g);l.writer.clearClonedElementsGroup(c.markerName),a.stop()}function u(g,p){if(p.hasAttribute(g)){const f=new Set(p.getAttribute(g).split(","));f.delete(d.name),f.size==0?l.writer.removeAttribute(g,p):l.writer.setAttribute(g,Array.from(f).join(","),p)}}}}(e.view),{priority:e.converterPriority||"normal"})}}(t))}}function Ec(i,t){const e=i.createAttributeElement("span",t.attributes);return t.classes&&e._addClass(t.classes),typeof t.priority=="number"&&(e._priority=t.priority),e._id=t.id,e}function Dc(i,t,e,n,o){const r=t?i.start:i.end,s=r.nodeAfter&&r.nodeAfter.is("element")?r.nodeAfter:null,a=r.nodeBefore&&r.nodeBefore.is("element")?r.nodeBefore:null;if(s||a){let c,l;t&&s||!t&&!a?(c=s,l=!0):(c=a,l=!1);const d=e.mapper.toViewElement(c);if(d)return void function(h,u,g,p,f,b){const w=`data-${b.group}-${u?"start":"end"}-${g?"before":"after"}`,_=h.hasAttribute(w)?h.getAttribute(w).split(","):[];_.unshift(b.name),p.writer.setAttribute(w,_.join(","),h),p.mapper.bindElementToMarker(h,f.markerName)}(d,t,l,e,n,o)}(function(c,l,d,h,u){const g=`${u.group}-${l?"start":"end"}`,p=u.name?{name:u.name}:null,f=d.writer.createUIElement(g,p);d.writer.insert(c,f),d.mapper.bindElementToMarker(f,h.markerName)})(e.mapper.toViewPosition(r),t,e,n,o)}function Ic(i){return typeof i=="string"&&(i={name:i}),i.attributes?Array.isArray(i.attributes)||(i.attributes=[i.attributes]):i.attributes=[],i.children=!!i.children,i}function eo(i,t){return typeof i=="function"?i:(e,n)=>function(o,r,s){typeof o=="string"&&(o={name:o});let a;const c=r.writer,l=Object.assign({},o.attributes);if(s=="container")a=c.createContainerElement(o.name,l);else if(s=="attribute"){const d={priority:o.priority||fn.DEFAULT_PRIORITY};a=c.createAttributeElement(o.name,l,d)}else a=c.createUIElement(o.name,l);if(o.styles){const d=Object.keys(o.styles);for(const h of d)c.setStyle(h,o.styles[h],a)}if(o.classes){const d=o.classes;if(typeof d=="string")c.addClass(d,a);else for(const h of d)c.addClass(h,a)}return a}(i,n,t)}function Mc(i){return i.model.values?(t,e)=>{const n=i.view[t];return n?n(t,e):null}:i.view}function Sc(i){return typeof i=="string"?t=>({key:i,value:t}):typeof i=="object"?i.value?()=>i:t=>({key:i.key,value:t}):i}function or(i,t,e){const n=typeof i=="function"?i(t,e):i;return n?(n.priority||(n.priority=10),n.id||(n.id=t.markerName),n):null}function Tc(i){const t=function(e){return(n,o)=>{if(!n.is("element",e.name))return!1;if(o.type=="attribute"){if(e.attributes.includes(o.attributeKey))return!0}else if(e.children)return!0;return!1}}(i);return(e,n)=>{const o=[];n.reconvertedElements||(n.reconvertedElements=new Set);for(const r of n.changes){const s=r.position?r.position.parent:r.range.start.nodeAfter;if(s&&t(s,r)){if(!n.reconvertedElements.has(s)){n.reconvertedElements.add(s);const a=M._createBefore(s);o.push({type:"remove",name:s.name,position:a,length:1},{type:"reinsert",name:s.name,position:a,length:1})}}else o.push(r)}n.changes=o}}function Nc(i){return(t,e,n={})=>{const o=["insert"];for(const r of i.attributes)t.hasAttribute(r)&&o.push(`attribute:${r}`);return!!o.every(r=>e.test(t,r))&&(n.preflight||o.forEach(r=>e.consume(t,r)),!0)}}function Bc(i,t,e,n){for(const o of t)ck(i.root,o,e,n)||e.convertItem(o)}function ck(i,t,e,n){const{writer:o,mapper:r}=e;if(!n.reconversion)return!1;const s=r.toViewElement(t);return!(!s||s.root==i)&&!!e.canReuseView(s)&&(o.move(o.createRangeOn(s),r.toViewPosition(M._createBefore(t))),!0)}function lk(i,t,{preflight:e}={}){return e?t.test(i,"insert"):t.consume(i,"insert")}function Pc(i){const{schema:t,document:e}=i.model;for(const n of e.getRootNames()){const o=e.getRoot(n);if(o.isEmpty&&!t.checkChild(o,"$text")&&t.checkChild(o,"paragraph"))return i.insertElement("paragraph",o),!0}return!1}function zc(i,t,e){const n=e.createContext(i);return!!e.checkChild(n,"paragraph")&&!!e.checkChild(n.push("paragraph"),t)}function Lc(i,t){const e=t.createElement("paragraph");return t.insert(e,i),t.createPositionAt(e,0)}class dk extends xc{elementToElement(t){return this.add(Oc(t))}elementToAttribute(t){return this.add(function(e){Rc(e=re(e));const n=jc(e,!1),o=ir(e.view),r=o?"element:"+o:"element";return s=>{s.on(r,n,{priority:e.converterPriority||"low"})}}(t))}attributeToAttribute(t){return this.add(function(e){e=re(e);let n=null;(typeof e.view=="string"||e.view.key)&&(n=function(r){typeof r.view=="string"&&(r.view={key:r.view});const s=r.view.key;let a;return s=="class"||s=="style"?a={[s=="class"?"classes":"styles"]:r.view.value}:a={attributes:{[s]:r.view.value===void 0?/[\s\S]*/:r.view.value}},r.view.name&&(a.name=r.view.name),r.view=a,s}(e)),Rc(e,n);const o=jc(e,!0);return r=>{r.on("element",o,{priority:e.converterPriority||"low"})}}(t))}elementToMarker(t){return this.add(function(e){return function(n){const o=n.model;n.model=(r,s)=>{const a=typeof o=="string"?o:o(r,s);return s.writer.createElement("$marker",{"data-name":a})}}(e=re(e)),Oc(e)}(t))}dataToMarker(t){return this.add(function(e){(e=re(e)).model||(e.model=r=>r?e.view+":"+r:e.view);const n=rr(Fc(e,"start")),o=rr(Fc(e,"end"));return r=>{r.on("element:"+e.view+"-start",n,{priority:e.converterPriority||"normal"}),r.on("element:"+e.view+"-end",o,{priority:e.converterPriority||"normal"});const s=E.get("low"),a=E.get("highest"),c=E.get(e.converterPriority)/a;r.on("element",function(l){return(d,h,u)=>{const g=`data-${l.view}`;function p(f,b){for(const w of b){const _=l.model(w,u),I=u.writer.createElement("$marker",{"data-name":_});u.writer.insert(I,f),h.modelCursor.isEqual(f)?h.modelCursor=h.modelCursor.getShiftedBy(1):h.modelCursor=h.modelCursor._getTransformedByInsertion(f,1),h.modelRange=h.modelRange._getTransformedByInsertion(f,1)[0]}}(u.consumable.test(h.viewItem,{attributes:g+"-end-after"})||u.consumable.test(h.viewItem,{attributes:g+"-start-after"})||u.consumable.test(h.viewItem,{attributes:g+"-end-before"})||u.consumable.test(h.viewItem,{attributes:g+"-start-before"}))&&(h.modelRange||Object.assign(h,u.convertChildren(h.viewItem,h.modelCursor)),u.consumable.consume(h.viewItem,{attributes:g+"-end-after"})&&p(h.modelRange.end,h.viewItem.getAttribute(g+"-end-after").split(",")),u.consumable.consume(h.viewItem,{attributes:g+"-start-after"})&&p(h.modelRange.end,h.viewItem.getAttribute(g+"-start-after").split(",")),u.consumable.consume(h.viewItem,{attributes:g+"-end-before"})&&p(h.modelRange.start,h.viewItem.getAttribute(g+"-end-before").split(",")),u.consumable.consume(h.viewItem,{attributes:g+"-start-before"})&&p(h.modelRange.start,h.viewItem.getAttribute(g+"-start-before").split(",")))}}(e),{priority:s+c})}}(t))}}function Oc(i){const t=rr(i=re(i)),e=ir(i.view),n=e?"element:"+e:"element";return o=>{o.on(n,t,{priority:i.converterPriority||"normal"})}}function ir(i){return typeof i=="string"?i:typeof i=="object"&&typeof i.name=="string"?i.name:null}function rr(i){const t=new he(i.view);return(e,n,o)=>{const r=t.match(n.viewItem);if(!r)return;const s=r.match;if(s.name=!0,!o.consumable.test(n.viewItem,s))return;const a=function(c,l,d){return c instanceof Function?c(l,d):d.writer.createElement(c)}(i.model,n.viewItem,o);a&&o.safeInsert(a,n.modelCursor)&&(o.consumable.consume(n.viewItem,s),o.convertChildren(n.viewItem,a),o.updateConversionResult(a,n))}}function Rc(i,t=null){const e=t===null||(r=>r.getAttribute(t)),n=typeof i.model!="object"?i.model:i.model.key,o=typeof i.model!="object"||i.model.value===void 0?e:i.model.value;i.model={key:n,value:o}}function jc(i,t){const e=new he(i.view);return(n,o,r)=>{if(!o.modelRange&&t)return;const s=e.match(o.viewItem);if(!s||(function(d,h){const u=typeof d=="function"?d(h):d;return typeof u=="object"&&!ir(u)?!1:!u.classes&&!u.attributes&&!u.styles}(i.view,o.viewItem)?s.match.name=!0:delete s.match.name,!r.consumable.test(o.viewItem,s.match)))return;const a=i.model.key,c=typeof i.model.value=="function"?i.model.value(o.viewItem,r):i.model.value;if(c===null)return;o.modelRange||Object.assign(o,r.convertChildren(o.viewItem,o.modelCursor)),function(d,h,u,g){let p=!1;for(const f of Array.from(d.getItems({shallow:u})))g.schema.checkAttribute(f,h.key)&&(p=!0,f.hasAttribute(h.key)||g.writer.setAttribute(h.key,h.value,f));return p}(o.modelRange,{key:a,value:c},t,r)&&(r.consumable.test(o.viewItem,{name:!0})&&(s.match.name=!0),r.consumable.consume(o.viewItem,s.match))}}function Fc(i,t){const e={};return e.view=i.view+"-"+t,e.model=(n,o)=>{const r=n.getAttribute("name"),s=i.model(r,o);return o.writer.createElement("$marker",{"data-name":s})},e}class Vc{constructor(t,e){this.model=t,this.view=new wc(e),this.mapper=new tr,this.downcastDispatcher=new er({mapper:this.mapper,schema:t.schema});const n=this.model.document,o=n.selection,r=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(s=>{this.downcastDispatcher.convertChanges(n.differ,r,s),this.downcastDispatcher.convertSelection(o,r,s)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(s,a){return(c,l)=>{const d=l.newSelection,h=[];for(const g of d.getRanges())h.push(a.toModelRange(g));const u=s.createSelection(h,{backward:d.isBackward});u.isEqual(s.document.selection)||s.change(g=>{g.setSelection(u)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(s,a,c)=>{if(!c.consumable.consume(a.item,s.name))return;const l=c.writer,d=c.mapper.toViewPosition(a.range.start),h=l.createText(a.item.data);l.insert(d,h)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(s,a,c)=>{c.convertAttributes(a.item),a.reconversion||!a.item.is("element")||a.item.isEmpty||c.convertChildren(a.item)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(s,a,c)=>{const l=c.mapper.toViewPosition(a.position),d=a.position.getShiftedBy(a.length),h=c.mapper.toViewPosition(d,{isPhantom:!0}),u=c.writer.createRange(l,h),g=c.writer.remove(u.getTrimmed());for(const p of c.writer.createRangeIn(g).getItems())c.mapper.unbindViewElement(p,{defer:!0})},{priority:"low"}),this.downcastDispatcher.on("selection",(s,a,c)=>{const l=c.writer,d=l.document.selection;for(const h of d.getRanges())h.isCollapsed&&h.end.parent.isAttached()&&c.writer.mergeAttributes(h.start);l.setSelection(null)},{priority:"high"}),this.downcastDispatcher.on("selection",(s,a,c)=>{const l=a.selection;if(l.isCollapsed||!c.consumable.consume(l,"selection"))return;const d=[];for(const h of l.getRanges()){const u=c.mapper.toViewRange(h);d.push(u)}c.writer.setSelection(d,{backward:l.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(s,a,c)=>{const l=a.selection;if(!l.isCollapsed||!c.consumable.consume(l,"selection"))return;const d=c.writer,h=l.getFirstPosition(),u=c.mapper.toViewPosition(h),g=d.breakAttributes(u);d.setSelection(g)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(s=>{if(s.rootName=="$graveyard")return null;const a=new tf(this.view.document,s.name);return a.rootName=s.rootName,this.mapper.bindElements(s,a),a})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(t){const e=typeof t=="string"?t:t.name,n=this.model.markers.get(e);if(!n)throw new m("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:e});this.model.change(()=>{this.model.markers._refresh(n)})}reconvertItem(t){this.model.change(()=>{this.model.document.differ._refreshItem(t)})}}z(Vc,st);class hk{constructor(){this._commands=new Map}add(t,e){this._commands.set(t,e)}get(t){return this._commands.get(t)}execute(t,...e){const n=this.get(t);if(!n)throw new m("commandcollection-command-not-found",this,{commandName:t});return n.execute(...e)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const t of this.commands())t.destroy()}}class no{constructor(){this._consumables=new Map}add(t,e){let n;t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!0):(this._consumables.has(t)?n=this._consumables.get(t):(n=new uk(t),this._consumables.set(t,n)),n.add(e))}test(t,e){const n=this._consumables.get(t);return n===void 0?null:t.is("$text")||t.is("documentFragment")?n:n.test(e)}consume(t,e){return!!this.test(t,e)&&(t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!1):this._consumables.get(t).consume(e),!0)}revert(t,e){const n=this._consumables.get(t);n!==void 0&&(t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!0):n.revert(e))}static consumablesFromElement(t){const e={element:t,name:!0,attributes:[],classes:[],styles:[]},n=t.getAttributeKeys();for(const s of n)s!="style"&&s!="class"&&e.attributes.push(s);const o=t.getClassNames();for(const s of o)e.classes.push(s);const r=t.getStyleNames();for(const s of r)e.styles.push(s);return e}static createFrom(t,e){if(e||(e=new no(t)),t.is("$text"))return e.add(t),e;t.is("element")&&e.add(t,no.consumablesFromElement(t)),t.is("documentFragment")&&e.add(t);for(const n of t.getChildren())e=no.createFrom(n,e);return e}}class uk{constructor(t){this.element=t,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(t){t.name&&(this._canConsumeName=!0);for(const e in this._consumables)e in t&&this._add(e,t[e])}test(t){if(t.name&&!this._canConsumeName)return this._canConsumeName;for(const e in this._consumables)if(e in t){const n=this._test(e,t[e]);if(n!==!0)return n}return!0}consume(t){t.name&&(this._canConsumeName=!1);for(const e in this._consumables)e in t&&this._consume(e,t[e])}revert(t){t.name&&(this._canConsumeName=!0);for(const e in this._consumables)e in t&&this._revert(e,t[e])}_add(t,e){const n=Pt(e)?e:[e],o=this._consumables[t];for(const r of n){if(t==="attributes"&&(r==="class"||r==="style"))throw new m("viewconsumable-invalid-attribute",this);if(o.set(r,!0),t==="styles")for(const s of this.element.document.stylesProcessor.getRelatedStyles(r))o.set(s,!0)}}_test(t,e){const n=Pt(e)?e:[e],o=this._consumables[t];for(const r of n)if(t!=="attributes"||r!=="class"&&r!=="style"){const s=o.get(r);if(s===void 0)return null;if(!s)return!1}else{const s=r=="class"?"classes":"styles",a=this._test(s,[...this._consumables[s].keys()]);if(a!==!0)return a}return!0}_consume(t,e){const n=Pt(e)?e:[e],o=this._consumables[t];for(const r of n)if(t!=="attributes"||r!=="class"&&r!=="style"){if(o.set(r,!1),t=="styles")for(const s of this.element.document.stylesProcessor.getRelatedStyles(r))o.set(s,!1)}else{const s=r=="class"?"classes":"styles";this._consume(s,[...this._consumables[s].keys()])}}_revert(t,e){const n=Pt(e)?e:[e],o=this._consumables[t];for(const r of n)if(t!=="attributes"||r!=="class"&&r!=="style")o.get(r)===!1&&o.set(r,!0);else{const s=r=="class"?"classes":"styles";this._revert(s,[...this._consumables[s].keys()])}}}class Uc{constructor(){this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(t,e)=>{e[0]=new $e(e[0])},{priority:"highest"}),this.on("checkChild",(t,e)=>{e[0]=new $e(e[0]),e[1]=this.getDefinition(e[1])},{priority:"highest"})}register(t,e){if(this._sourceDefinitions[t])throw new m("schema-cannot-register-item-twice",this,{itemName:t});this._sourceDefinitions[t]=[Object.assign({},e)],this._clearCache()}extend(t,e){if(!this._sourceDefinitions[t])throw new m("schema-cannot-extend-missing-item",this,{itemName:t});this._sourceDefinitions[t].push(Object.assign({},e)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(t){let e;return e=typeof t=="string"?t:t.is&&(t.is("$text")||t.is("$textProxy"))?"$text":t.name,this.getDefinitions()[e]}isRegistered(t){return!!this.getDefinition(t)}isBlock(t){const e=this.getDefinition(t);return!(!e||!e.isBlock)}isLimit(t){const e=this.getDefinition(t);return!!e&&!(!e.isLimit&&!e.isObject)}isObject(t){const e=this.getDefinition(t);return!!e&&!!(e.isObject||e.isLimit&&e.isSelectable&&e.isContent)}isInline(t){const e=this.getDefinition(t);return!(!e||!e.isInline)}isSelectable(t){const e=this.getDefinition(t);return!!e&&!(!e.isSelectable&&!e.isObject)}isContent(t){const e=this.getDefinition(t);return!!e&&!(!e.isContent&&!e.isObject)}checkChild(t,e){return!!e&&this._checkContextMatch(e,t)}checkAttribute(t,e){const n=this.getDefinition(t.last);return!!n&&n.allowAttributes.includes(e)}checkMerge(t,e=null){if(t instanceof M){const n=t.nodeBefore,o=t.nodeAfter;if(!(n instanceof X))throw new m("schema-check-merge-no-element-before",this);if(!(o instanceof X))throw new m("schema-check-merge-no-element-after",this);return this.checkMerge(n,o)}for(const n of e.getChildren())if(!this.checkChild(t,n))return!1;return!0}addChildCheck(t){this.on("checkChild",(e,[n,o])=>{if(!o)return;const r=t(n,o);typeof r=="boolean"&&(e.stop(),e.return=r)},{priority:"high"})}addAttributeCheck(t){this.on("checkAttribute",(e,[n,o])=>{const r=t(n,o);typeof r=="boolean"&&(e.stop(),e.return=r)},{priority:"high"})}setAttributeProperties(t,e){this._attributeProperties[t]=Object.assign(this.getAttributeProperties(t),e)}getAttributeProperties(t){return this._attributeProperties[t]||{}}getLimitElement(t){let e;for(t instanceof M?e=t.parent:e=(t instanceof x?[t]:Array.from(t.getRanges())).reduce((n,o)=>{const r=o.getCommonAncestor();return n?n.getCommonAncestor(r,{includeSelf:!0}):r},null);!this.isLimit(e)&&e.parent;)e=e.parent;return e}checkAttributeInSelection(t,e){if(t.isCollapsed){const n=[...t.getFirstPosition().getAncestors(),new rt("",t.getAttributes())];return this.checkAttribute(n,e)}{const n=t.getRanges();for(const o of n)for(const r of o)if(this.checkAttribute(r.item,e))return!0}return!1}*getValidRanges(t,e){t=function*(n){for(const o of n)yield*o.getMinimalFlatRanges()}(t);for(const n of t)yield*this._getValidRangesForRange(n,e)}getNearestSelectionRange(t,e="both"){if(this.checkChild(t,"$text"))return new x(t);let n,o;const r=t.getAncestors().reverse().find(s=>this.isLimit(s))||t.root;e!="both"&&e!="backward"||(n=new ve({boundaries:x._createIn(r),startPosition:t,direction:"backward"})),e!="both"&&e!="forward"||(o=new ve({boundaries:x._createIn(r),startPosition:t}));for(const s of function*(a,c){let l=!1;for(;!l;){if(l=!0,a){const d=a.next();d.done||(l=!1,yield{walker:a,value:d.value})}if(c){const d=c.next();d.done||(l=!1,yield{walker:c,value:d.value})}}}(n,o)){const a=s.walker==n?"elementEnd":"elementStart",c=s.value;if(c.type==a&&this.isObject(c.item))return x._createOn(c.item);if(this.checkChild(c.nextPosition,"$text"))return new x(c.nextPosition)}return null}findAllowedParent(t,e){let n=t.parent;for(;n;){if(this.checkChild(n,e))return n;if(this.isLimit(n))return null;n=n.parent}return null}setAllowedAttributes(t,e,n){const o=n.model;for(const[r,s]of Object.entries(e))o.schema.checkAttribute(t,r)&&n.setAttribute(r,s,t)}removeDisallowedAttributes(t,e){for(const n of t)if(n.is("$text"))Hc(this,n,e);else{const o=x._createIn(n).getPositions();for(const r of o)Hc(this,r.nodeBefore||r.parent,e)}}getAttributesWithProperty(t,e,n){const o={};for(const[r,s]of t.getAttributes()){const a=this.getAttributeProperties(r);a[e]!==void 0&&(n!==void 0&&n!==a[e]||(o[r]=s))}return o}createContext(t){return new $e(t)}_clearCache(){this._compiledDefinitions=null}_compile(){const t={},e=this._sourceDefinitions,n=Object.keys(e);for(const o of n)t[o]=gk(e[o],o);for(const o of n)mk(t,o);for(const o of n)pk(t,o);for(const o of n)fk(t,o);for(const o of n)kk(t,o),bk(t,o);for(const o of n)wk(t,o),_k(t,o),Ak(t,o);this._compiledDefinitions=t}_checkContextMatch(t,e,n=e.length-1){const o=e.getItem(n);if(t.allowIn.includes(o.name)){if(n==0)return!0;{const r=this.getDefinition(o);return this._checkContextMatch(r,e,n-1)}}return!1}*_getValidRangesForRange(t,e){let n=t.start,o=t.start;for(const r of t.getItems({shallow:!0}))r.is("element")&&(yield*this._getValidRangesForRange(x._createIn(r),e)),this.checkAttribute(r,e)||(n.isEqual(o)||(yield new x(n,o)),n=M._createAfter(r)),o=M._createAfter(r);n.isEqual(o)||(yield new x(n,o))}}z(Uc,st);class $e{constructor(t){if(t instanceof $e)return t;typeof t=="string"?t=[t]:Array.isArray(t)||(t=t.getAncestors({includeSelf:!0})),this._items=t.map(vk)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(t){const e=new $e([t]);return e._items=[...this._items,...e._items],e}getItem(t){return this._items[t]}*getNames(){yield*this._items.map(t=>t.name)}endsWith(t){return Array.from(this.getNames()).join(" ").endsWith(t)}startsWith(t){return Array.from(this.getNames()).join(" ").startsWith(t)}}function gk(i,t){const e={name:t,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(n,o){for(const r of n){const s=Object.keys(r).filter(a=>a.startsWith("is"));for(const a of s)o[a]=r[a]}}(i,e),Qe(i,e,"allowIn"),Qe(i,e,"allowContentOf"),Qe(i,e,"allowWhere"),Qe(i,e,"allowAttributes"),Qe(i,e,"allowAttributesOf"),Qe(i,e,"allowChildren"),Qe(i,e,"inheritTypesFrom"),function(n,o){for(const r of n){const s=r.inheritAllFrom;s&&(o.allowContentOf.push(s),o.allowWhere.push(s),o.allowAttributesOf.push(s),o.inheritTypesFrom.push(s))}}(i,e),e}function mk(i,t){const e=i[t];for(const n of e.allowChildren){const o=i[n];o&&o.allowIn.push(t)}e.allowChildren.length=0}function pk(i,t){for(const e of i[t].allowContentOf)i[e]&&Ck(i,e).forEach(n=>{n.allowIn.push(t)});delete i[t].allowContentOf}function fk(i,t){for(const e of i[t].allowWhere){const n=i[e];if(n){const o=n.allowIn;i[t].allowIn.push(...o)}}delete i[t].allowWhere}function kk(i,t){for(const e of i[t].allowAttributesOf){const n=i[e];if(n){const o=n.allowAttributes;i[t].allowAttributes.push(...o)}}delete i[t].allowAttributesOf}function bk(i,t){const e=i[t];for(const n of e.inheritTypesFrom){const o=i[n];if(o){const r=Object.keys(o).filter(s=>s.startsWith("is"));for(const s of r)s in e||(e[s]=o[s])}}delete e.inheritTypesFrom}function wk(i,t){const e=i[t],n=e.allowIn.filter(o=>i[o]);e.allowIn=Array.from(new Set(n))}function _k(i,t){const e=i[t];for(const n of e.allowIn)i[n].allowChildren.push(t)}function Ak(i,t){const e=i[t];e.allowAttributes=Array.from(new Set(e.allowAttributes))}function Qe(i,t,e){for(const n of i)typeof n[e]=="string"?t[e].push(n[e]):Array.isArray(n[e])&&t[e].push(...n[e])}function Ck(i,t){const e=i[t];return(n=i,Object.keys(n).map(o=>n[o])).filter(o=>o.allowIn.includes(e.name));var n}function vk(i){return typeof i=="string"||i.is("documentFragment")?{name:typeof i=="string"?i:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:i.is("element")?i.name:"$text",*getAttributeKeys(){yield*i.getAttributeKeys()},getAttribute:t=>i.getAttribute(t)}}function Hc(i,t,e){for(const n of t.getAttributeKeys())i.checkAttribute(t,n)||e.removeAttribute(n,t)}class Gc{constructor(t={}){this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi=Object.assign({},t),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this),this.conversionApi.safeInsert=this._safeInsert.bind(this),this.conversionApi.updateConversionResult=this._updateConversionResult.bind(this),this.conversionApi.splitToAllowedParent=this._splitToAllowedParent.bind(this),this.conversionApi.getSplitParts=this._getSplitParts.bind(this),this.conversionApi.keepEmptyElement=this._keepEmptyElement.bind(this)}convert(t,e,n=["$root"]){this.fire("viewCleanup",t),this._modelCursor=function(s,a){let c;for(const l of new $e(s)){const d={};for(const u of l.getAttributeKeys())d[u]=l.getAttribute(u);const h=a.createElement(l.name,d);c&&a.append(h,c),c=M._createAt(h,0)}return c}(n,e),this.conversionApi.writer=e,this.conversionApi.consumable=no.createFrom(t),this.conversionApi.store={};const{modelRange:o}=this._convertItem(t,this._modelCursor),r=e.createDocumentFragment();if(o){this._removeEmptyElements();for(const s of Array.from(this._modelCursor.parent.getChildren()))e.append(s,r);r.markers=function(s,a){const c=new Set,l=new Map,d=x._createIn(s).getItems();for(const h of d)h.name=="$marker"&&c.add(h);for(const h of c){const u=h.getAttribute("data-name"),g=a.createPositionBefore(h);l.has(u)?l.get(u).end=g.clone():l.set(u,new x(g.clone())),a.remove(h)}return l}(r,e)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,r}_convertItem(t,e){const n=Object.assign({viewItem:t,modelCursor:e,modelRange:null});if(t.is("element")?this.fire("element:"+t.name,n,this.conversionApi):t.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof x))throw new m("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(t,e){let n=e.is("position")?e:M._createAt(e,0);const o=new x(n);for(const r of Array.from(t.getChildren())){const s=this._convertItem(r,n);s.modelRange instanceof x&&(o.end=s.modelRange.end,n=s.modelCursor)}return{modelRange:o,modelCursor:n}}_safeInsert(t,e){const n=this._splitToAllowedParent(t,e);return!!n&&(this.conversionApi.writer.insert(t,n.position),!0)}_updateConversionResult(t,e){const n=this._getSplitParts(t),o=this.conversionApi.writer;e.modelRange||(e.modelRange=o.createRange(o.createPositionBefore(t),o.createPositionAfter(n[n.length-1])));const r=this._cursorParents.get(t);e.modelCursor=r?o.createPositionAt(r,0):e.modelRange.end}_splitToAllowedParent(t,e){const{schema:n,writer:o}=this.conversionApi;let r=n.findAllowedParent(e,t);if(r){if(r===e.parent)return{position:e};this._modelCursor.parent.getAncestors().includes(r)&&(r=null)}if(!r)return zc(e,t,n)?{position:Lc(e,o)}:null;const s=this.conversionApi.writer.split(e,r),a=[];for(const l of s.range.getWalker())if(l.type=="elementEnd")a.push(l.item);else{const d=a.pop(),h=l.item;this._registerSplitPair(d,h)}const c=s.range.end.parent;return this._cursorParents.set(t,c),{position:s.position,cursorParent:c}}_registerSplitPair(t,e){this._splitParts.has(t)||this._splitParts.set(t,[t]);const n=this._splitParts.get(t);this._splitParts.set(e,n),n.push(e)}_getSplitParts(t){let e;return e=this._splitParts.has(t)?this._splitParts.get(t):[t],e}_keepEmptyElement(t){this._emptyElementsToKeep.add(t)}_removeEmptyElements(){let t=!1;for(const e of this._splitParts.keys())e.isEmpty&&!this._emptyElementsToKeep.has(e)&&(this.conversionApi.writer.remove(e),this._splitParts.delete(e),t=!0);t&&this._removeEmptyElements()}}z(Gc,K);class yk{getHtml(t){const e=document.implementation.createHTMLDocument("").createElement("div");return e.appendChild(t),e.innerHTML}}class xk{constructor(t){this.domParser=new DOMParser,this.domConverter=new To(t,{renderingMode:"data"}),this.htmlWriter=new yk}toData(t){const e=this.domConverter.viewToDom(t,document);return this.htmlWriter.getHtml(e)}toView(t){const e=this._toDom(t);return this.domConverter.domToView(e)}registerRawContentMatcher(t){this.domConverter.registerRawContentMatcher(t)}useFillerType(t){this.domConverter.blockFillerMode=t=="marked"?"markedNbsp":"nbsp"}_toDom(t){t.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(t=`<body>${t}</body>`);const e=this.domParser.parseFromString(t,"text/html"),n=e.createDocumentFragment(),o=e.body.childNodes;for(;o.length>0;)n.appendChild(o[0]);return n}}class qc{constructor(t,e){this.model=t,this.mapper=new tr,this.downcastDispatcher=new er({mapper:this.mapper,schema:t.schema}),this.downcastDispatcher.on("insert:$text",(n,o,r)=>{if(!r.consumable.consume(o.item,n.name))return;const s=r.writer,a=r.mapper.toViewPosition(o.range.start),c=s.createText(o.item.data);s.insert(a,c)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(n,o,r)=>{r.convertAttributes(o.item),o.reconversion||!o.item.is("element")||o.item.isEmpty||r.convertChildren(o.item)},{priority:"lowest"}),this.upcastDispatcher=new Gc({schema:t.schema}),this.viewDocument=new Zn(e),this.stylesProcessor=e,this.htmlProcessor=new xk(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new Da(this.viewDocument),this.upcastDispatcher.on("text",(n,o,{schema:r,consumable:s,writer:a})=>{let c=o.modelCursor;if(!s.test(o.viewItem))return;if(!r.checkChild(c,"$text")){if(!zc(c,"$text",r)||o.viewItem.data.trim().length==0)return;c=Lc(c,a)}s.consume(o.viewItem);const l=a.createText(o.viewItem.data);a.insert(l,c),o.modelRange=a.createRange(c,c.getShiftedBy(l.offsetSize)),o.modelCursor=o.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(n,o,r)=>{if(!o.modelRange&&r.consumable.consume(o.viewItem,{name:!0})){const{modelRange:s,modelCursor:a}=r.convertChildren(o.viewItem,o.modelCursor);o.modelRange=s,o.modelCursor=a}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(n,o,r)=>{if(!o.modelRange&&r.consumable.consume(o.viewItem,{name:!0})){const{modelRange:s,modelCursor:a}=r.convertChildren(o.viewItem,o.modelCursor);o.modelRange=s,o.modelCursor=a}},{priority:"lowest"}),this.decorate("init"),this.decorate("set"),this.decorate("get"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},Pc)},{priority:"lowest"})}get(t={}){const{rootName:e="main",trim:n="empty"}=t;if(!this._checkIfRootsExists([e]))throw new m("datacontroller-get-non-existent-root",this);const o=this.model.document.getRoot(e);return n!=="empty"||this.model.hasContent(o,{ignoreWhitespaces:!0})?this.stringify(o,t):""}stringify(t,e={}){const n=this.toView(t,e);return this.processor.toData(n)}toView(t,e={}){const n=this.viewDocument,o=this._viewWriter;this.mapper.clearBindings();const r=x._createIn(t),s=new We(n);this.mapper.bindElements(t,s);const a=t.is("documentFragment")?t.markers:function(c){const l=[],d=c.root.document;if(!d)return new Map;const h=x._createIn(c);for(const u of d.model.markers){const g=u.getRange(),p=g.isCollapsed,f=g.start.isEqual(h.start)||g.end.isEqual(h.end);if(p&&f)l.push([u.name,g]);else{const b=h.getIntersection(g);b&&l.push([u.name,b])}}return l.sort(([u,g],[p,f])=>{if(g.end.compareWith(f.start)!=="after")return 1;if(g.start.compareWith(f.end)!=="before")return-1;switch(g.start.compareWith(f.start)){case"before":return 1;case"after":return-1;default:switch(g.end.compareWith(f.end)){case"before":return 1;case"after":return-1;default:return p.localeCompare(u)}}}),new Map(l)}(t);return this.downcastDispatcher.convert(r,a,o,e),s}init(t){if(this.model.document.version)throw new m("datacontroller-init-document-not-empty",this);let e={};if(typeof t=="string"?e.main=t:e=t,!this._checkIfRootsExists(Object.keys(e)))throw new m("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},n=>{for(const o of Object.keys(e)){const r=this.model.document.getRoot(o);n.insert(this.parse(e[o],r),r,0)}}),Promise.resolve()}set(t,e={}){let n={};if(typeof t=="string"?n.main=t:n=t,!this._checkIfRootsExists(Object.keys(n)))throw new m("datacontroller-set-non-existent-root",this);this.model.enqueueChange(e.batchType||{},o=>{o.setSelection(null),o.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const r of Object.keys(n)){const s=this.model.document.getRoot(r);o.remove(o.createRangeIn(s)),o.insert(this.parse(n[r],s),s,0)}})}parse(t,e="$root"){const n=this.processor.toView(t);return this.toModel(n,e)}toModel(t,e="$root"){return this.model.change(n=>this.upcastDispatcher.convert(t,n,e))}addStyleProcessorRules(t){t(this.stylesProcessor)}registerRawContentMatcher(t){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(t),this.htmlProcessor.registerRawContentMatcher(t)}destroy(){this.stopListening()}_checkIfRootsExists(t){for(const e of t)if(!this.model.document.getRootNames().includes(e))return!1;return!0}}z(qc,st);class Ek{constructor(t,e){this._helpers=new Map,this._downcast=vt(t),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=vt(e),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(t,e){const n=this._downcast.includes(e);if(!this._upcast.includes(e)&&!n)throw new m("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:t,dispatchers:[e],isDowncast:n})}for(t){if(!this._helpers.has(t))throw new m("conversion-for-unknown-group",this);return this._helpers.get(t)}elementToElement(t){this.for("downcast").elementToElement(t);for(const{model:e,view:n}of sr(t))this.for("upcast").elementToElement({model:e,view:n,converterPriority:t.converterPriority})}attributeToElement(t){this.for("downcast").attributeToElement(t);for(const{model:e,view:n}of sr(t))this.for("upcast").elementToAttribute({view:n,model:e,converterPriority:t.converterPriority})}attributeToAttribute(t){this.for("downcast").attributeToAttribute(t);for(const{model:e,view:n}of sr(t))this.for("upcast").attributeToAttribute({view:n,model:e})}_createConversionHelpers({name:t,dispatchers:e,isDowncast:n}){if(this._helpers.has(t))throw new m("conversion-group-exists",this);const o=n?new ak(e):new dk(e);this._helpers.set(t,o)}}function*sr(i){if(i.model.values)for(const t of i.model.values){const e={key:i.model.key,value:t},n=i.view[t],o=i.upcastAlso?i.upcastAlso[t]:void 0;yield*Wc(e,n,o)}else yield*Wc(i.model,i.view,i.upcastAlso)}function*Wc(i,t,e){if(yield{model:i,view:t},e)for(const n of vt(e))yield{model:i,view:n}}class An{constructor(t={}){typeof t=="string"&&(t=t==="transparent"?{isUndoable:!1}:{},A("batch-constructor-deprecated-string-type"));const{isUndoable:e=!0,isLocal:n=!0,isUndo:o=!1,isTyping:r=!1}=t;this.operations=[],this.isUndoable=e,this.isLocal=n,this.isUndo=o,this.isTyping=r}get type(){return A("batch-type-deprecated"),"default"}get baseVersion(){for(const t of this.operations)if(t.baseVersion!==null)return t.baseVersion;return null}addOperation(t){return t.batch=this,this.operations.push(t),t}}class Qt{constructor(t){this.baseVersion=t,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){const t=Object.assign({},this);return t.__className=this.constructor.className,delete t.batch,delete t.isDocumentOperation,t}static get className(){return"Operation"}static fromJSON(t){return new this(t.baseVersion)}}class xe{constructor(t){this.markers=new Map,this._children=new _n,t&&this._insertChild(0,t)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}is(t){return t==="documentFragment"||t==="model:documentFragment"}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}getPath(){return[]}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}offsetToIndex(t){return this._children.offsetToIndex(t)}toJSON(){const t=[];for(const e of this._children)t.push(e.toJSON());return t}static fromJSON(t){const e=[];for(const n of t)n.name?e.push(X.fromJSON(n)):e.push(rt.fromJSON(n));return new xe(e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(o){return typeof o=="string"?[new rt(o)]:(Wt(o)||(o=[o]),Array.from(o).map(r=>typeof r=="string"?new rt(r):r instanceof me?new rt(r.data,r.getAttributes()):r))}(e);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const o of n)o.parent=null;return n}}function ar(i,t){const e=(t=Kc(t)).reduce((r,s)=>r+s.offsetSize,0),n=i.parent;ro(i);const o=i.index;return n._insertChild(o,t),io(n,o+t.length),io(n,o),new x(i,i.getShiftedBy(e))}function Yc(i){if(!i.isFlat)throw new m("operation-utils-remove-range-not-flat",this);const t=i.start.parent;ro(i.start),ro(i.end);const e=t._removeChildren(i.start.index,i.end.index-i.start.index);return io(t,i.start.index),e}function oo(i,t){if(!i.isFlat)throw new m("operation-utils-move-range-not-flat",this);const e=Yc(i);return ar(t=t._getTransformedByDeletion(i.start,i.end.offset-i.start.offset),e)}function Kc(i){const t=[];i instanceof Array||(i=[i]);for(let e=0;e<i.length;e++)if(typeof i[e]=="string")t.push(new rt(i[e]));else if(i[e]instanceof me)t.push(new rt(i[e].data,i[e].getAttributes()));else if(i[e]instanceof xe||i[e]instanceof _n)for(const n of i[e])t.push(n);else i[e]instanceof Ye&&t.push(i[e]);for(let e=1;e<t.length;e++){const n=t[e],o=t[e-1];n instanceof rt&&o instanceof rt&&$c(n,o)&&(t.splice(e-1,2,new rt(o.data+n.data,o.getAttributes())),e--)}return t}function io(i,t){const e=i.getChild(t-1),n=i.getChild(t);if(e&&n&&e.is("$text")&&n.is("$text")&&$c(e,n)){const o=new rt(e.data+n.data,e.getAttributes());i._removeChildren(t-1,2),i._insertChild(t-1,o)}}function ro(i){const t=i.textNode,e=i.parent;if(t){const n=i.offset-t.startOffset,o=t.index;e._removeChildren(o,1);const r=new rt(t.data.substr(0,n),t.getAttributes()),s=new rt(t.data.substr(n),t.getAttributes());e._insertChild(o,[r,s])}}function $c(i,t){const e=i.getAttributes(),n=t.getAttributes();for(const o of e){if(o[1]!==t.getAttribute(o[0]))return!1;n.next()}return n.next().done}const Qc=function(i,t){return nc(i,t)};class wt extends Qt{constructor(t,e,n,o,r){super(r),this.range=t.clone(),this.key=e,this.oldValue=n===void 0?null:n,this.newValue=o===void 0?null:o}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}clone(){return new wt(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new wt(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const t=super.toJSON();return t.range=this.range.toJSON(),t}_validate(){if(!this.range.isFlat)throw new m("attribute-operation-range-not-flat",this);for(const t of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!Qc(t.getAttribute(this.key),this.oldValue))throw new m("attribute-operation-wrong-old-value",this,{item:t,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&t.hasAttribute(this.key))throw new m("attribute-operation-attribute-exists",this,{node:t,key:this.key})}}_execute(){Qc(this.oldValue,this.newValue)||function(t,e,n){ro(t.start),ro(t.end);for(const o of t.getItems({shallow:!0})){const r=o.is("$textProxy")?o.textNode:o;n!==null?r._setAttribute(e,n):r._removeAttribute(e),io(r.parent,r.index)}io(t.end.parent,t.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(t,e){return new wt(x.fromJSON(t.range,e),t.key,t.oldValue,t.newValue,t.baseVersion)}}class Dk extends Qt{constructor(t,e){super(null),this.sourcePosition=t.clone(),this.howMany=e}get type(){return"detach"}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t}_validate(){if(this.sourcePosition.root.document)throw new m("detach-operation-on-document-node",this)}_execute(){Yc(x._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class tt extends Qt{constructor(t,e,n,o){super(o),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toNext",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const t=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new this.constructor(this.getMovedRangeStart(),this.howMany,t,this.baseVersion+1)}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent,n=this.sourcePosition.offset,o=this.targetPosition.offset;if(n+this.howMany>t.maxOffset)throw new m("move-operation-nodes-do-not-exist",this);if(t===e&&n<o&&o<n+this.howMany)throw new m("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&St(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){const r=this.sourcePosition.path.length-1;if(this.targetPosition.path[r]>=n&&this.targetPosition.path[r]<n+this.howMany)throw new m("move-operation-node-into-itself",this)}}_execute(){oo(x._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t.targetPosition=this.targetPosition.toJSON(),t}static get className(){return"MoveOperation"}static fromJSON(t,e){const n=M.fromJSON(t.sourcePosition,e),o=M.fromJSON(t.targetPosition,e);return new this(n,t.howMany,o,t.baseVersion)}}class xt extends Qt{constructor(t,e,n){super(n),this.position=t.clone(),this.position.stickiness="toNone",this.nodes=new _n(Kc(e)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const t=new _n([...this.nodes].map(n=>n._clone(!0))),e=new xt(this.position,t,this.baseVersion);return e.shouldReceiveAttributes=this.shouldReceiveAttributes,e}getReversed(){const t=this.position.root.document.graveyard,e=new M(t,[0]);return new tt(this.position,this.nodes.maxOffset,e,this.baseVersion+1)}_validate(){const t=this.position.parent;if(!t||t.maxOffset<this.position.offset)throw new m("insert-operation-position-invalid",this)}_execute(){const t=this.nodes;this.nodes=new _n([...t].map(e=>e._clone(!0))),ar(this.position,t)}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t.nodes=this.nodes.toJSON(),t}static get className(){return"InsertOperation"}static fromJSON(t,e){const n=[];for(const r of t.nodes)r.name?n.push(X.fromJSON(r)):n.push(rt.fromJSON(r));const o=new xt(M.fromJSON(t.position,e),n,t.baseVersion);return o.shouldReceiveAttributes=t.shouldReceiveAttributes,o}}class Ot extends Qt{constructor(t,e,n,o,r,s){super(s),this.name=t,this.oldRange=e?e.clone():null,this.newRange=n?n.clone():null,this.affectsData=r,this._markers=o}get type(){return"marker"}clone(){return new Ot(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new Ot(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){const t=this.newRange?"_set":"_remove";this._markers[t](this.name,this.newRange,!0,this.affectsData)}toJSON(){const t=super.toJSON();return this.oldRange&&(t.oldRange=this.oldRange.toJSON()),this.newRange&&(t.newRange=this.newRange.toJSON()),delete t._markers,t}static get className(){return"MarkerOperation"}static fromJSON(t,e){return new Ot(t.name,t.oldRange?x.fromJSON(t.oldRange,e):null,t.newRange?x.fromJSON(t.newRange,e):null,e.model.markers,t.affectsData,t.baseVersion)}}class Rt extends Qt{constructor(t,e,n,o){super(o),this.position=t,this.position.stickiness="toNext",this.oldName=e,this.newName=n}get type(){return"rename"}clone(){return new Rt(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new Rt(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const t=this.position.nodeAfter;if(!(t instanceof X))throw new m("rename-operation-wrong-position",this);if(t.name!==this.oldName)throw new m("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t}static get className(){return"RenameOperation"}static fromJSON(t,e){return new Rt(M.fromJSON(t.position,e),t.oldName,t.newName,t.baseVersion)}}class Ee extends Qt{constructor(t,e,n,o,r){super(r),this.root=t,this.key=e,this.oldValue=n,this.newValue=o}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}clone(){return new Ee(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Ee(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new m("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new m("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new m("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const t=super.toJSON();return t.root=this.root.toJSON(),t}static get className(){return"RootAttributeOperation"}static fromJSON(t,e){if(!e.getRoot(t.root))throw new m("rootattribute-operation-fromjson-no-root",this,{rootName:t.root});return new Ee(e.getRoot(t.root),t.key,t.oldValue,t.newValue,t.baseVersion)}}class _t extends Qt{constructor(t,e,n,o,r){super(r),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=o.clone()}get type(){return"merge"}get deletionPosition(){return new M(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const t=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new x(this.sourcePosition,t)}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const t=this.targetPosition._getTransformedByMergeOperation(this),e=this.sourcePosition.path.slice(0,-1),n=new M(this.sourcePosition.root,e)._getTransformedByMergeOperation(this);return new ct(t,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent;if(!t.parent)throw new m("merge-operation-source-position-invalid",this);if(!e.parent)throw new m("merge-operation-target-position-invalid",this);if(this.howMany!=t.maxOffset)throw new m("merge-operation-how-many-invalid",this)}_execute(){const t=this.sourcePosition.parent;oo(x._createIn(t),this.targetPosition),oo(x._createOn(t),this.graveyardPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=t.sourcePosition.toJSON(),t.targetPosition=t.targetPosition.toJSON(),t.graveyardPosition=t.graveyardPosition.toJSON(),t}static get className(){return"MergeOperation"}static fromJSON(t,e){const n=M.fromJSON(t.sourcePosition,e),o=M.fromJSON(t.targetPosition,e),r=M.fromJSON(t.graveyardPosition,e);return new this(n,t.howMany,o,r,t.baseVersion)}}class ct extends Qt{constructor(t,e,n,o,r){super(r),this.splitPosition=t.clone(),this.splitPosition.stickiness="toNext",this.howMany=e,this.insertionPosition=n,this.graveyardPosition=o?o.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const t=this.insertionPosition.path.slice();return t.push(0),new M(this.insertionPosition.root,t)}get movedRange(){const t=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new x(this.splitPosition,t)}clone(){return new this.constructor(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const t=this.splitPosition.root.document.graveyard,e=new M(t,[0]);return new _t(this.moveTargetPosition,this.howMany,this.splitPosition,e,this.baseVersion+1)}_validate(){const t=this.splitPosition.parent,e=this.splitPosition.offset;if(!t||t.maxOffset<e)throw new m("split-operation-position-invalid",this);if(!t.parent)throw new m("split-operation-split-in-root",this);if(this.howMany!=t.maxOffset-this.splitPosition.offset)throw new m("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new m("split-operation-graveyard-position-invalid",this)}_execute(){const t=this.splitPosition.parent;if(this.graveyardPosition)oo(x._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const e=t._clone();ar(this.insertionPosition,e)}oo(new x(M._createAt(t,this.splitPosition.offset),M._createAt(t,t.maxOffset)),this.moveTargetPosition)}toJSON(){const t=super.toJSON();return t.splitPosition=this.splitPosition.toJSON(),t.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(t.graveyardPosition=this.graveyardPosition.toJSON()),t}static get className(){return"SplitOperation"}static getInsertionPosition(t){const e=t.path.slice(0,-1);return e[e.length-1]++,new M(t.root,e,"toPrevious")}static fromJSON(t,e){const n=M.fromJSON(t.splitPosition,e),o=M.fromJSON(t.insertionPosition,e),r=t.graveyardPosition?M.fromJSON(t.graveyardPosition,e):null;return new this(n,t.howMany,o,r,t.baseVersion)}}class cr extends X{constructor(t,e,n="main"){super(e),this._document=t,this.rootName=n}get document(){return this._document}is(t,e){return e?e===this.name&&(t==="rootElement"||t==="model:rootElement"||t==="element"||t==="model:element"):t==="rootElement"||t==="model:rootElement"||t==="element"||t==="model:element"||t==="node"||t==="model:node"}toJSON(){return this.rootName}}class Ik{constructor(t,e){this.model=t,this.batch=e}createText(t,e){return new rt(t,e)}createElement(t,e){return new X(t,e)}createDocumentFragment(){return new xe}cloneElement(t,e=!0){return t._clone(e)}insert(t,e,n=0){if(this._assertWriterUsedCorrectly(),t instanceof rt&&t.data=="")return;const o=M._createAt(e,n);if(t.parent){if(Xc(t.root,o.root))return void this.move(x._createOn(t),o);if(t.root.document)throw new m("model-writer-insert-forbidden-move",this);this.remove(t)}const r=o.root.document?o.root.document.version:null,s=new xt(o,t,r);if(t instanceof rt&&(s.shouldReceiveAttributes=!0),this.batch.addOperation(s),this.model.applyOperation(s),t instanceof xe)for(const[a,c]of t.markers){const l=M._createAt(c.root,0),d={range:new x(c.start._getCombined(l,o),c.end._getCombined(l,o)),usingOperation:!0,affectsData:!0};this.model.markers.has(a)?this.updateMarker(a,d):this.addMarker(a,d)}}insertText(t,e,n,o){e instanceof xe||e instanceof X||e instanceof M?this.insert(this.createText(t),e,n):this.insert(this.createText(t,e),n,o)}insertElement(t,e,n,o){e instanceof xe||e instanceof X||e instanceof M?this.insert(this.createElement(t),e,n):this.insert(this.createElement(t,e),n,o)}append(t,e){this.insert(t,e,"end")}appendText(t,e,n){e instanceof xe||e instanceof X?this.insert(this.createText(t),e,"end"):this.insert(this.createText(t,e),n,"end")}appendElement(t,e,n){e instanceof xe||e instanceof X?this.insert(this.createElement(t),e,"end"):this.insert(this.createElement(t,e),n,"end")}setAttribute(t,e,n){if(this._assertWriterUsedCorrectly(),n instanceof x){const o=n.getMinimalFlatRanges();for(const r of o)Zc(this,t,e,r)}else Jc(this,t,e,n)}setAttributes(t,e){for(const[n,o]of de(t))this.setAttribute(n,o,e)}removeAttribute(t,e){if(this._assertWriterUsedCorrectly(),e instanceof x){const n=e.getMinimalFlatRanges();for(const o of n)Zc(this,t,null,o)}else Jc(this,t,null,e)}clearAttributes(t){this._assertWriterUsedCorrectly();const e=n=>{for(const o of n.getAttributeKeys())this.removeAttribute(o,n)};if(t instanceof x)for(const n of t.getItems())e(n);else e(t)}move(t,e,n){if(this._assertWriterUsedCorrectly(),!(t instanceof x))throw new m("writer-move-invalid-range",this);if(!t.isFlat)throw new m("writer-move-range-not-flat",this);const o=M._createAt(e,n);if(o.isEqual(t.start))return;if(this._addOperationForAffectedMarkers("move",t),!Xc(t.root,o.root))throw new m("writer-move-different-document",this);const r=t.root.document?t.root.document.version:null,s=new tt(t.start,t.end.offset-t.start.offset,o,r);this.batch.addOperation(s),this.model.applyOperation(s)}remove(t){this._assertWriterUsedCorrectly();const e=(t instanceof x?t:x._createOn(t)).getMinimalFlatRanges().reverse();for(const n of e)this._addOperationForAffectedMarkers("move",n),Mk(n.start,n.end.offset-n.start.offset,this.batch,this.model)}merge(t){this._assertWriterUsedCorrectly();const e=t.nodeBefore,n=t.nodeAfter;if(this._addOperationForAffectedMarkers("merge",t),!(e instanceof X))throw new m("writer-merge-no-element-before",this);if(!(n instanceof X))throw new m("writer-merge-no-element-after",this);t.root.document?this._merge(t):this._mergeDetached(t)}createPositionFromPath(t,e,n){return this.model.createPositionFromPath(t,e,n)}createPositionAt(t,e){return this.model.createPositionAt(t,e)}createPositionAfter(t){return this.model.createPositionAfter(t)}createPositionBefore(t){return this.model.createPositionBefore(t)}createRange(t,e){return this.model.createRange(t,e)}createRangeIn(t){return this.model.createRangeIn(t)}createRangeOn(t){return this.model.createRangeOn(t)}createSelection(t,e,n){return this.model.createSelection(t,e,n)}_mergeDetached(t){const e=t.nodeBefore,n=t.nodeAfter;this.move(x._createIn(n),M._createAt(e,"end")),this.remove(n)}_merge(t){const e=M._createAt(t.nodeBefore,"end"),n=M._createAt(t.nodeAfter,0),o=t.root.document.graveyard,r=new M(o,[0]),s=t.root.document.version,a=new _t(n,t.nodeAfter.maxOffset,e,r,s);this.batch.addOperation(a),this.model.applyOperation(a)}rename(t,e){if(this._assertWriterUsedCorrectly(),!(t instanceof X))throw new m("writer-rename-not-element-instance",this);const n=t.root.document?t.root.document.version:null,o=new Rt(M._createBefore(t),t.name,e,n);this.batch.addOperation(o),this.model.applyOperation(o)}split(t,e){this._assertWriterUsedCorrectly();let n,o,r=t.parent;if(!r.parent)throw new m("writer-split-element-no-parent",this);if(e||(e=r.parent),!t.parent.getAncestors({includeSelf:!0}).includes(e))throw new m("writer-split-invalid-limit-element",this);do{const s=r.root.document?r.root.document.version:null,a=r.maxOffset-t.offset,c=ct.getInsertionPosition(t),l=new ct(t,a,c,null,s);this.batch.addOperation(l),this.model.applyOperation(l),n||o||(n=r,o=t.parent.nextSibling),r=(t=this.createPositionAfter(t.parent)).parent}while(r!==e);return{position:t,range:new x(M._createAt(n,"end"),M._createAt(o,0))}}wrap(t,e){if(this._assertWriterUsedCorrectly(),!t.isFlat)throw new m("writer-wrap-range-not-flat",this);const n=e instanceof X?e:new X(e);if(n.childCount>0)throw new m("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new m("writer-wrap-element-attached",this);this.insert(n,t.start);const o=new x(t.start.getShiftedBy(1),t.end.getShiftedBy(1));this.move(o,M._createAt(n,0))}unwrap(t){if(this._assertWriterUsedCorrectly(),t.parent===null)throw new m("writer-unwrap-element-no-parent",this);this.move(x._createIn(t),this.createPositionAfter(t)),this.remove(t)}addMarker(t,e){if(this._assertWriterUsedCorrectly(),!e||typeof e.usingOperation!="boolean")throw new m("writer-addmarker-no-usingoperation",this);const n=e.usingOperation,o=e.range,r=e.affectsData!==void 0&&e.affectsData;if(this.model.markers.has(t))throw new m("writer-addmarker-marker-exists",this);if(!o)throw new m("writer-addmarker-no-range",this);return n?(so(this,t,null,o,r),this.model.markers.get(t)):this.model.markers._set(t,o,n,r)}updateMarker(t,e){this._assertWriterUsedCorrectly();const n=typeof t=="string"?t:t.name,o=this.model.markers.get(n);if(!o)throw new m("writer-updatemarker-marker-not-exists",this);if(!e)return A("writer-updatemarker-reconvert-using-editingcontroller",{markerName:n}),void this.model.markers._refresh(o);const r=typeof e.usingOperation=="boolean",s=typeof e.affectsData=="boolean",a=s?e.affectsData:o.affectsData;if(!r&&!e.range&&!s)throw new m("writer-updatemarker-wrong-options",this);const c=o.getRange(),l=e.range?e.range:c;r&&e.usingOperation!==o.managedUsingOperations?e.usingOperation?so(this,n,null,l,a):(so(this,n,c,null,a),this.model.markers._set(n,l,void 0,a)):o.managedUsingOperations?so(this,n,c,l,a):this.model.markers._set(n,l,void 0,a)}removeMarker(t){this._assertWriterUsedCorrectly();const e=typeof t=="string"?t:t.name;if(!this.model.markers.has(e))throw new m("writer-removemarker-no-marker",this);const n=this.model.markers.get(e);if(!n.managedUsingOperations)return void this.model.markers._remove(e);so(this,e,n.getRange(),null,n.affectsData)}setSelection(t,e,n){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(t,e)}setSelectionAttribute(t,e){if(this._assertWriterUsedCorrectly(),typeof t=="string")this._setSelectionAttribute(t,e);else for(const[n,o]of de(t))this._setSelectionAttribute(n,o)}removeSelectionAttribute(t){if(this._assertWriterUsedCorrectly(),typeof t=="string")this._removeSelectionAttribute(t);else for(const e of t)this._removeSelectionAttribute(e)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(t){this.model.document.selection._restoreGravity(t)}_setSelectionAttribute(t,e){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const o=ie._getStoreAttributeKey(t);this.setAttribute(o,e,n.anchor.parent)}n._setAttribute(t,e)}_removeSelectionAttribute(t){const e=this.model.document.selection;if(e.isCollapsed&&e.anchor.parent.isEmpty){const n=ie._getStoreAttributeKey(t);this.removeAttribute(n,e.anchor.parent)}e._removeAttribute(t)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new m("writer-incorrect-use",this)}_addOperationForAffectedMarkers(t,e){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const o=n.getRange();let r=!1;if(t==="move")r=e.containsPosition(o.start)||e.start.isEqual(o.start)||e.containsPosition(o.end)||e.end.isEqual(o.end);else{const s=e.nodeBefore,a=e.nodeAfter,c=o.start.parent==s&&o.start.isAtEnd,l=o.end.parent==a&&o.end.offset==0,d=o.end.nodeAfter==a,h=o.start.nodeAfter==a;r=c||l||d||h}r&&this.updateMarker(n.name,{range:o})}}}function Zc(i,t,e,n){const o=i.model,r=o.document;let s,a,c,l=n.start;for(const h of n.getWalker({shallow:!0}))c=h.item.getAttribute(t),s&&a!=c&&(a!=e&&d(),l=s),s=h.nextPosition,a=c;function d(){const h=new x(l,s),u=h.root.document?r.version:null,g=new wt(h,t,a,e,u);i.batch.addOperation(g),o.applyOperation(g)}s instanceof M&&s!=l&&a!=e&&d()}function Jc(i,t,e,n){const o=i.model,r=o.document,s=n.getAttribute(t);let a,c;if(s!=e){if(n.root===n){const l=n.document?r.version:null;c=new Ee(n,t,s,e,l)}else{a=new x(M._createBefore(n),i.createPositionAfter(n));const l=a.root.document?r.version:null;c=new wt(a,t,s,e,l)}i.batch.addOperation(c),o.applyOperation(c)}}function so(i,t,e,n,o){const r=i.model,s=r.document,a=new Ot(t,e,n,r.markers,o,s.version);i.batch.addOperation(a),r.applyOperation(a)}function Mk(i,t,e,n){let o;if(i.root.document){const r=n.document,s=new M(r.graveyard,[0]);o=new tt(i,t,s,r.version)}else o=new Dk(i,t);e.addOperation(o),n.applyOperation(o)}function Xc(i,t){return i===t||i instanceof cr&&t instanceof cr}class Sk{constructor(t){this._markerCollection=t,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0}bufferOperation(t){switch(t.type){case"insert":if(this._isInInsertedElement(t.position.parent))return;this._markInsert(t.position.parent,t.position.offset,t.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const e of t.range.getItems({shallow:!0}))this._isInInsertedElement(e.parent)||this._markAttribute(e);break;case"remove":case"move":case"reinsert":{if(t.sourcePosition.isEqual(t.targetPosition)||t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition))return;const e=this._isInInsertedElement(t.sourcePosition.parent),n=this._isInInsertedElement(t.targetPosition.parent);e||this._markRemove(t.sourcePosition.parent,t.sourcePosition.offset,t.howMany),n||this._markInsert(t.targetPosition.parent,t.getMovedRangeStart().offset,t.howMany);break}case"rename":{if(this._isInInsertedElement(t.position.parent))return;this._markRemove(t.position.parent,t.position.offset,1),this._markInsert(t.position.parent,t.position.offset,1);const e=x._createFromPositionAndShift(t.position,1);for(const n of this._markerCollection.getMarkersIntersectingRange(e)){const o=n.getData();this.bufferMarkerChange(n.name,o,o)}break}case"split":{const e=t.splitPosition.parent;this._isInInsertedElement(e)||this._markRemove(e,t.splitPosition.offset,t.howMany),this._isInInsertedElement(t.insertionPosition.parent)||this._markInsert(t.insertionPosition.parent,t.insertionPosition.offset,1),t.graveyardPosition&&this._markRemove(t.graveyardPosition.parent,t.graveyardPosition.offset,1);break}case"merge":{const e=t.sourcePosition.parent;this._isInInsertedElement(e.parent)||this._markRemove(e.parent,e.startOffset,1);const n=t.graveyardPosition.parent;this._markInsert(n,t.graveyardPosition.offset,1);const o=t.targetPosition.parent;this._isInInsertedElement(o)||this._markInsert(o,t.targetPosition.offset,e.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(t,e,n){const o=this._changedMarkers.get(t);o?(o.newMarkerData=n,o.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(t)):this._changedMarkers.set(t,{newMarkerData:n,oldMarkerData:e})}getMarkersToRemove(){const t=[];for(const[e,n]of this._changedMarkers)n.oldMarkerData.range!=null&&t.push({name:e,range:n.oldMarkerData.range});return t}getMarkersToAdd(){const t=[];for(const[e,n]of this._changedMarkers)n.newMarkerData.range!=null&&t.push({name:e,range:n.newMarkerData.range});return t}getChangedMarkers(){return Array.from(this._changedMarkers).map(([t,e])=>({name:t,data:{oldRange:e.oldMarkerData.range,newRange:e.newMarkerData.range}}))}hasDataChanges(){if(this._changesInElement.size>0)return!0;for(const{newMarkerData:t,oldMarkerData:e}of this._changedMarkers.values()){if(t.affectsData!==e.affectsData)return!0;if(t.affectsData){const n=t.range&&!e.range,o=!t.range&&e.range,r=t.range&&e.range&&!t.range.isEqual(e.range);if(n||o||r)return!0}}return!1}getChanges(t={includeChangesInGraveyard:!1}){if(this._cachedChanges)return t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let e=[];for(const n of this._changesInElement.keys()){const o=this._changesInElement.get(n).sort((d,h)=>d.offset===h.offset?d.type!=h.type?d.type=="remove"?-1:1:0:d.offset<h.offset?-1:1),r=this._elementSnapshots.get(n),s=tl(n.getChildren()),a=Tk(r.length,o);let c=0,l=0;for(const d of a)if(d==="i")e.push(this._getInsertDiff(n,c,s[c])),c++;else if(d==="r")e.push(this._getRemoveDiff(n,c,r[l])),l++;else if(d==="a"){const h=s[c].attributes,u=r[l].attributes;let g;if(s[c].name=="$text")g=new x(M._createAt(n,c),M._createAt(n,c+1));else{const p=n.offsetToIndex(c);g=new x(M._createAt(n,c),M._createAt(n.getChild(p),0))}e.push(...this._getAttributesDiff(g,u,h)),c++,l++}else c++,l++}e.sort((n,o)=>n.position.root!=o.position.root?n.position.root.rootName<o.position.root.rootName?-1:1:n.position.isEqual(o.position)?n.changeCount-o.changeCount:n.position.isBefore(o.position)?-1:1);for(let n=1,o=0;n<e.length;n++){const r=e[o],s=e[n],a=r.type=="remove"&&s.type=="remove"&&r.name=="$text"&&s.name=="$text"&&r.position.isEqual(s.position),c=r.type=="insert"&&s.type=="insert"&&r.name=="$text"&&s.name=="$text"&&r.position.parent==s.position.parent&&r.position.offset+r.length==s.position.offset,l=r.type=="attribute"&&s.type=="attribute"&&r.position.parent==s.position.parent&&r.range.isFlat&&s.range.isFlat&&r.position.offset+r.length==s.position.offset&&r.attributeKey==s.attributeKey&&r.attributeOldValue==s.attributeOldValue&&r.attributeNewValue==s.attributeNewValue;a||c||l?(r.length++,l&&(r.range.end=r.range.end.getShiftedBy(1)),e[n]=null):o=n}e=e.filter(n=>n);for(const n of e)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=e,this._cachedChanges=e.filter(Nk),t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_refreshItem(t){if(this._isInInsertedElement(t.parent))return;this._markRemove(t.parent,t.startOffset,t.offsetSize),this._markInsert(t.parent,t.startOffset,t.offsetSize),this._refreshedItems.add(t);const e=x._createOn(t);for(const n of this._markerCollection.getMarkersIntersectingRange(e)){const o=n.getData();this.bufferMarkerChange(n.name,o,o)}this._cachedChanges=null}_markInsert(t,e,n){const o={type:"insert",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,o)}_markRemove(t,e,n){const o={type:"remove",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,o),this._removeAllNestedChanges(t,e,n)}_markAttribute(t){const e={type:"attribute",offset:t.startOffset,howMany:t.offsetSize,count:this._changeCount++};this._markChange(t.parent,e)}_markChange(t,e){this._makeSnapshot(t);const n=this._getChangesForElement(t);this._handleChange(e,n),n.push(e);for(let o=0;o<n.length;o++)n[o].howMany<1&&(n.splice(o,1),o--)}_getChangesForElement(t){let e;return this._changesInElement.has(t)?e=this._changesInElement.get(t):(e=[],this._changesInElement.set(t,e)),e}_makeSnapshot(t){this._elementSnapshots.has(t)||this._elementSnapshots.set(t,tl(t.getChildren()))}_handleChange(t,e){t.nodesToHandle=t.howMany;for(const n of e){const o=t.offset+t.howMany,r=n.offset+n.howMany;if(t.type=="insert"&&(n.type=="insert"&&(t.offset<=n.offset?n.offset+=t.howMany:t.offset<r&&(n.howMany+=t.nodesToHandle,t.nodesToHandle=0)),n.type=="remove"&&t.offset<n.offset&&(n.offset+=t.howMany),n.type=="attribute")){if(t.offset<=n.offset)n.offset+=t.howMany;else if(t.offset<r){const s=n.howMany;n.howMany=t.offset-n.offset,e.unshift({type:"attribute",offset:o,howMany:s-n.howMany,count:this._changeCount++})}}if(t.type=="remove"){if(n.type=="insert"){if(o<=n.offset)n.offset-=t.howMany;else if(o<=r)if(t.offset<n.offset){const s=o-n.offset;n.offset=t.offset,n.howMany-=s,t.nodesToHandle-=s}else n.howMany-=t.nodesToHandle,t.nodesToHandle=0;else if(t.offset<=n.offset)t.nodesToHandle-=n.howMany,n.howMany=0;else if(t.offset<r){const s=r-t.offset;n.howMany-=s,t.nodesToHandle-=s}}if(n.type=="remove"&&(o<=n.offset?n.offset-=t.howMany:t.offset<n.offset&&(t.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(o<=n.offset)n.offset-=t.howMany;else if(t.offset<n.offset){const s=o-n.offset;n.offset=t.offset,n.howMany-=s}else if(t.offset<r)if(o<=r){const s=n.howMany;n.howMany=t.offset-n.offset;const a=s-n.howMany-t.nodesToHandle;e.unshift({type:"attribute",offset:t.offset,howMany:a,count:this._changeCount++})}else n.howMany-=r-t.offset}}if(t.type=="attribute"){if(n.type=="insert")if(t.offset<n.offset&&o>n.offset){if(o>r){const s={type:"attribute",offset:r,howMany:o-r,count:this._changeCount++};this._handleChange(s,e),e.push(s)}t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}else t.offset>=n.offset&&t.offset<r&&(o>r?(t.nodesToHandle=o-r,t.offset=r):t.nodesToHandle=0);if(n.type=="remove"&&t.offset<n.offset&&o>n.offset){const s={type:"attribute",offset:n.offset,howMany:o-n.offset,count:this._changeCount++};this._handleChange(s,e),e.push(s),t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}n.type=="attribute"&&(t.offset>=n.offset&&o<=r?(t.nodesToHandle=0,t.howMany=0,t.offset=0):t.offset<=n.offset&&o>=r&&(n.howMany=0))}}t.howMany=t.nodesToHandle,delete t.nodesToHandle}_getInsertDiff(t,e,n){return{type:"insert",position:M._createAt(t,e),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getRemoveDiff(t,e,n){return{type:"remove",position:M._createAt(t,e),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getAttributesDiff(t,e,n){const o=[];n=new Map(n);for(const[r,s]of e){const a=n.has(r)?n.get(r):null;a!==s&&o.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:r,attributeOldValue:s,attributeNewValue:a,changeCount:this._changeCount++}),n.delete(r)}for(const[r,s]of n)o.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:r,attributeOldValue:null,attributeNewValue:s,changeCount:this._changeCount++});return o}_isInInsertedElement(t){const e=t.parent;if(!e)return!1;const n=this._changesInElement.get(e),o=t.startOffset;if(n){for(const r of n)if(r.type=="insert"&&o>=r.offset&&o<r.offset+r.howMany)return!0}return this._isInInsertedElement(e)}_removeAllNestedChanges(t,e,n){const o=new x(M._createAt(t,e),M._createAt(t,e+n));for(const r of o.getItems({shallow:!0}))r.is("element")&&(this._elementSnapshots.delete(r),this._changesInElement.delete(r),this._removeAllNestedChanges(r,0,r.maxOffset))}}function tl(i){const t=[];for(const e of i)if(e.is("$text"))for(let n=0;n<e.data.length;n++)t.push({name:"$text",attributes:new Map(e.getAttributes())});else t.push({name:e.name,attributes:new Map(e.getAttributes())});return t}function Tk(i,t){const e=[];let n=0,o=0;for(const r of t){if(r.offset>n){for(let s=0;s<r.offset-n;s++)e.push("e");o+=r.offset-n}if(r.type=="insert"){for(let s=0;s<r.howMany;s++)e.push("i");n=r.offset+r.howMany}else if(r.type=="remove"){for(let s=0;s<r.howMany;s++)e.push("r");n=r.offset,o+=r.howMany}else e.push(..."a".repeat(r.howMany).split("")),n=r.offset+r.howMany,o+=r.howMany}if(o<i)for(let r=0;r<i-o-n;r++)e.push("e");return e}function Nk(i){const t=i.position&&i.position.root.rootName=="$graveyard",e=i.range&&i.range.root.rootName=="$graveyard";return!t&&!e}class Bk{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(t){this._operations.length&&t>this._version+1&&this._gaps.set(this._version,t),this._version=t}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(t){if(t.baseVersion!==this.version)throw new m("model-document-history-addoperation-incorrect-version",this,{operation:t,historyVersion:this.version});this._operations.push(t),this._version++,this._baseVersionToOperationIndex.set(t.baseVersion,this._operations.length-1)}getOperations(t,e=this.version){if(!this._operations.length)return[];const n=this._operations[0];t===void 0&&(t=n.baseVersion);let o=e-1;for(const[a,c]of this._gaps)t>a&&t<c&&(t=c),o>a&&o<c&&(o=a-1);if(o<n.baseVersion||t>this.lastOperation.baseVersion)return[];let r=this._baseVersionToOperationIndex.get(t);r===void 0&&(r=0);let s=this._baseVersionToOperationIndex.get(o);return s===void 0&&(s=this._operations.length-1),this._operations.slice(r,s+1)}getOperation(t){const e=this._baseVersionToOperationIndex.get(t);if(e!==void 0)return this._operations[e]}setOperationAsUndone(t,e){this._undoPairs.set(e,t),this._undoneOperations.add(t)}isUndoingOperation(t){return this._undoPairs.has(t)}isUndoneOperation(t){return this._undoneOperations.has(t)}getUndoneOperation(t){return this._undoPairs.get(t)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}function el(i,t){return!!(e=i.charAt(t-1))&&e.length==1&&/[\ud800-\udbff]/.test(e)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(i.charAt(t));var e}function nl(i,t){return!!(e=i.charAt(t))&&e.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e);var e}const Pk=function(){const i=/\p{Regional_Indicator}{2}/u.source,t="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(e=>e.source).join("|")+")";return new RegExp(`${i}|${t}(?:\u200D${t})*`,"ug")}();function zk(i,t){const e=String(i).matchAll(Pk);return Array.from(e).some(n=>n.index<t&&t<n.index+n[0].length)}const lr="$graveyard";class ol{constructor(t){this.model=t,this.history=new Bk,this.selection=new ie(this),this.roots=new Yt({idProperty:"rootName"}),this.differ=new Sk(t.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",lr),this.listenTo(t,"applyOperation",(e,n)=>{const o=n[0];o.isDocumentOperation&&this.differ.bufferOperation(o)},{priority:"high"}),this.listenTo(t,"applyOperation",(e,n)=>{const o=n[0];o.isDocumentOperation&&this.history.addOperation(o)},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(t.markers,"update",(e,n,o,r,s)=>{const a={...n.getData(),range:r};this.differ.bufferMarkerChange(n.name,s,a),o===null&&n.on("change",(c,l)=>{const d=n.getData();this.differ.bufferMarkerChange(n.name,{...d,range:l},d)})})}get version(){return this.history.version}set version(t){this.history.version=t}get graveyard(){return this.getRoot(lr)}createRoot(t="$root",e="main"){if(this.roots.get(e))throw new m("model-document-createroot-name-exists",this,{name:e});const n=new cr(this,t,e);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(t="main"){return this.roots.get(t)}getRootNames(){return Array.from(this.roots,t=>t.rootName).filter(t=>t!=lr)}registerPostFixer(t){this._postFixers.add(t)}toJSON(){const t=ua(this);return t.selection="[engine.model.DocumentSelection]",t.model="[engine.model.Model]",t}_handleChangeBlock(t){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(t),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",t.batch):this.fire("change",t.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const t of this.roots)if(t!==this.graveyard)return t;return this.graveyard}_getDefaultRange(){const t=this._getDefaultRoot(),e=this.model,n=e.schema,o=e.createPositionFromPath(t,[0]);return n.getNearestSelectionRange(o)||e.createRange(o)}_validateSelectionRange(t){return il(t.start)&&il(t.end)}_callPostFixers(t){let e=!1;do for(const n of this._postFixers)if(this.selection.refresh(),e=n(t),e)break;while(e)}}function il(i){const t=i.textNode;if(t){const e=t.data,n=i.offset-t.startOffset;return!el(e,n)&&!nl(e,n)}return!0}z(ol,K);class rl{constructor(){this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(t){const e=t instanceof Cn?t.name:t;return this._markers.has(e)}get(t){return this._markers.get(t)||null}_set(t,e,n=!1,o=!1){const r=t instanceof Cn?t.name:t;if(r.includes(","))throw new m("markercollection-incorrect-marker-name",this);const s=this._markers.get(r);if(s){const l=s.getData(),d=s.getRange();let h=!1;return d.isEqual(e)||(s._attachLiveRange(pe.fromRange(e)),h=!0),n!=s.managedUsingOperations&&(s._managedUsingOperations=n,h=!0),typeof o=="boolean"&&o!=s.affectsData&&(s._affectsData=o,h=!0),h&&this.fire("update:"+r,s,d,e,l),s}const a=pe.fromRange(e),c=new Cn(r,a,n,o);return this._markers.set(r,c),this.fire("update:"+r,c,null,e,{...c.getData(),range:null}),c}_remove(t){const e=t instanceof Cn?t.name:t,n=this._markers.get(e);return!!n&&(this._markers.delete(e),this.fire("update:"+e,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0)}_refresh(t){const e=t instanceof Cn?t.name:t,n=this._markers.get(e);if(!n)throw new m("markercollection-refresh-marker-not-exists",this);const o=n.getRange();this.fire("update:"+e,n,o,o,n.getData())}*getMarkersAtPosition(t){for(const e of this)e.getRange().containsPosition(t)&&(yield e)}*getMarkersIntersectingRange(t){for(const e of this)e.getRange().getIntersection(t)!==null&&(yield e)}destroy(){for(const t of this._markers.values())this._destroyMarker(t);this._markers=null,this.stopListening()}*getMarkersGroup(t){for(const e of this._markers.values())e.name.startsWith(t+":")&&(yield e)}_destroyMarker(t){t.stopListening(),t._detachLiveRange()}}z(rl,K);class Cn{constructor(t,e,n,o){this.name=t,this._liveRange=this._attachLiveRange(e),this._managedUsingOperations=n,this._affectsData=o}get managedUsingOperations(){if(!this._liveRange)throw new m("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new m("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new m("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new m("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new m("marker-destroyed",this);return this._liveRange.toRange()}is(t){return t==="marker"||t==="model:marker"}_attachLiveRange(t){return this._liveRange&&this._detachLiveRange(),t.delegate("change:range").to(this),t.delegate("change:content").to(this),this._liveRange=t,t}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}z(Cn,K);class Et extends Qt{get type(){return"noop"}clone(){return new Et(this.baseVersion)}getReversed(){return new Et(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}const se={};se[wt.className]=wt,se[xt.className]=xt,se[Ot.className]=Ot,se[tt.className]=tt,se[Et.className]=Et,se[Qt.className]=Qt,se[Rt.className]=Rt,se[Ee.className]=Ee,se[ct.className]=ct,se[_t.className]=_t;class It extends M{constructor(t,e,n="toNone"){if(super(t,e,n),!this.root.is("rootElement"))throw new m("model-liveposition-root-not-rootelement",t);Lk.call(this)}detach(){this.stopListening()}is(t){return t==="livePosition"||t==="model:livePosition"||t=="position"||t==="model:position"}toPosition(){return new M(this.root,this.path.slice(),this.stickiness)}static fromPosition(t,e){return new this(t.root,t.path.slice(),e||t.stickiness)}}function Lk(){this.listenTo(this.root.document.model,"applyOperation",(i,t)=>{const e=t[0];e.isDocumentOperation&&Ok.call(this,e)},{priority:"low"})}function Ok(i){const t=this.getTransformedByOperation(i);if(!this.isEqual(t)){const e=this.toPosition();this.path=t.path,this.root=t.root,this.fire("change",e)}}z(It,K);class Rk{constructor(t,e,n){this.model=t,this.writer=e,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=t.schema,this._documentFragment=e.createDocumentFragment(),this._documentFragmentPosition=e.createPositionAt(this._documentFragment,0),this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(t){for(const e of Array.from(t))this._handleNode(e);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(t){const e=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(t);if(n.isAfter(e)){if(this._lastNode=t,this.position.parent!=t||!this.position.isAtEnd)throw new m("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this.nodeToSelect?x._createOn(this.nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new x(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(t){if(this.schema.isObject(t))return void this._handleObject(t);let e=this._checkAndAutoParagraphToAllowedPosition(t);e||(e=this._checkAndSplitToAllowedPosition(t),e)?(this._appendToFragment(t),this._firstNode||(this._firstNode=t),this._lastNode=t):this._handleDisallowedNode(t)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const t=It.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=t.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=t.toPosition(),t.detach()}_handleObject(t){this._checkAndSplitToAllowedPosition(t)?this._appendToFragment(t):this._tryAutoparagraphing(t)}_handleDisallowedNode(t){t.is("element")?this.handleNodes(t.getChildren()):this._tryAutoparagraphing(t)}_appendToFragment(t){if(!this.schema.checkChild(this.position,t))throw new m("insertcontent-wrong-position",this,{node:t,position:this.position});this.writer.insert(t,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(t.offsetSize),this.schema.isObject(t)&&!this.schema.checkChild(this.position,"$text")?this.nodeToSelect=t:this.nodeToSelect=null,this._filterAttributesOf.push(t)}_setAffectedBoundaries(t){this._affectedStart||(this._affectedStart=It.fromPosition(t,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(t)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=It.fromPosition(t,"toNext"))}_mergeOnLeft(){const t=this._firstNode;if(!(t instanceof X)||!this._canMergeLeft(t))return;const e=It._createBefore(t);e.stickiness="toNext";const n=It.fromPosition(this.position,"toNext");this._affectedStart.isEqual(e)&&(this._affectedStart.detach(),this._affectedStart=It._createAt(e.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=e.nodeBefore,this._lastNode=e.nodeBefore),this.writer.merge(e),e.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=It._createAt(e.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),e.detach()}_mergeOnRight(){const t=this._lastNode;if(!(t instanceof X)||!this._canMergeRight(t))return;const e=It._createAfter(t);if(e.stickiness="toNext",!this.position.isEqual(e))throw new m("insertcontent-invalid-insertion-position",this);this.position=M._createAt(e.nodeBefore,"end");const n=It.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(e)&&(this._affectedEnd.detach(),this._affectedEnd=It._createAt(e.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=e.nodeBefore,this._lastNode=e.nodeBefore),this.writer.merge(e),e.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=It._createAt(e.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),e.detach()}_canMergeLeft(t){const e=t.previousSibling;return e instanceof X&&this.canMergeWith.has(e)&&this.model.schema.checkMerge(e,t)}_canMergeRight(t){const e=t.nextSibling;return e instanceof X&&this.canMergeWith.has(e)&&this.model.schema.checkMerge(t,e)}_tryAutoparagraphing(t){const e=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,e)&&this.schema.checkChild(e,t)&&(e._appendChild(t),this._handleNode(e))}_checkAndAutoParagraphToAllowedPosition(t){if(this.schema.checkChild(this.position.parent,t))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",t))return!1;this._insertPartialFragment();const e=this.writer.createElement("paragraph");return this.writer.insert(e,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=e,this.position=this.writer.createPositionAt(e,0),!0}_checkAndSplitToAllowedPosition(t){const e=this._getAllowedIn(this.position.parent,t);if(!e)return!1;for(e!=this.position.parent&&this._insertPartialFragment();e!=this.position.parent;)if(this.position.isAtStart){const n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===e&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(t,e){return this.schema.checkChild(t,e)?t:this.schema.isLimit(t)?null:this._getAllowedIn(t.parent,e)}}function sl(i,t,e="auto"){const n=i.getSelectedElement();if(n&&t.schema.isObject(n)&&!t.schema.isInline(n))return["before","after"].includes(e)?t.createRange(t.createPositionAt(n,e)):t.createRangeOn(n);const o=yt(i.getSelectedBlocks());if(!o)return t.createRange(i.focus);if(o.isEmpty)return t.createRange(t.createPositionAt(o,0));const r=t.createPositionAfter(o);return i.focus.isTouching(r)?t.createRange(r):t.createRange(t.createPositionBefore(o))}function jk(i,t,e,n,o={}){if(!i.schema.isObject(t))throw new m("insertobject-element-not-an-object",i,{object:t});let r;r=e?e.is("selection")?e:i.createSelection(e,n):i.document.selection;let s=r;o.findOptimalPosition&&i.schema.isBlock(t)&&(s=i.createSelection(sl(r,i,o.findOptimalPosition)));const a=yt(r.getSelectedBlocks()),c={};return a&&Object.assign(c,i.schema.getAttributesWithProperty(a,"copyOnReplace",!0)),i.change(l=>{s.isCollapsed||i.deleteContent(s,{doNotAutoparagraph:!0});let d=t;const h=s.anchor.parent;!i.schema.checkChild(h,t)&&i.schema.checkChild(h,"paragraph")&&i.schema.checkChild("paragraph",t)&&(d=l.createElement("paragraph"),l.insert(t,d)),i.schema.setAllowedAttributes(d,c,l);const u=i.insertContent(d,s);return u.isCollapsed||o.setSelection&&function(g,p,f,b){const w=g.model;if(f=="after"){let _=p.nextSibling;!(_&&w.schema.checkChild(_,"$text"))&&w.schema.checkChild(p.parent,"paragraph")&&(_=g.createElement("paragraph"),w.schema.setAllowedAttributes(_,b,g),w.insertContent(_,g.createPositionAfter(p))),_&&g.setSelection(_,0)}else{if(f!="on")throw new m("insertobject-invalid-place-parameter-value",w);g.setSelection(p,"on")}}(l,t,o.setSelection,c),u})}function Fk(i,t,e={}){if(t.isCollapsed)return;const n=t.getFirstRange();if(n.root.rootName=="$graveyard")return;const o=i.schema;i.change(r=>{if(!e.doNotResetEntireContent&&function(l,d){const h=l.getLimitElement(d);if(!d.containsEntireContent(h))return!1;const u=d.getFirstRange();return u.start.parent==u.end.parent?!1:l.checkChild(h,"paragraph")}(o,t))return void function(l,d){const h=l.model.schema.getLimitElement(d);l.remove(l.createRangeIn(h)),ll(l,l.createPositionAt(h,0),d)}(r,t);const s={};if(!e.doNotAutoparagraph){const l=t.getSelectedElement();l&&Object.assign(s,o.getAttributesWithProperty(l,"copyOnReplace",!0))}const[a,c]=function(l){const d=l.root.document.model,h=l.start;let u=l.end;if(d.hasContent(l,{ignoreMarkers:!0})){const g=function(p){const f=p.parent,b=f.root.document.model.schema,w=f.getAncestors({parentFirst:!0,includeSelf:!0});for(const _ of w){if(b.isLimit(_))return null;if(b.isBlock(_))return _}}(u);if(g&&u.isTouching(d.createPositionAt(g,0))){const p=d.createSelection(l);d.modifySelection(p,{direction:"backward"});const f=p.getLastPosition(),b=d.createRange(f,u);d.hasContent(b,{ignoreMarkers:!0})||(u=f)}}return[It.fromPosition(h,"toPrevious"),It.fromPosition(u,"toNext")]}(n);a.isTouching(c)||r.remove(r.createRange(a,c)),e.leaveUnmerged||(function(l,d,h){const u=l.model;if(!dr(l.model.schema,d,h))return;const[g,p]=function(f,b){const w=f.getAncestors(),_=b.getAncestors();let I=0;for(;w[I]&&w[I]==_[I];)I++;return[w[I],_[I]]}(d,h);!g||!p||(!u.hasContent(g,{ignoreMarkers:!0})&&u.hasContent(p,{ignoreMarkers:!0})?cl(l,d,h,g.parent):al(l,d,h,g.parent))}(r,a,c),o.removeDisallowedAttributes(a.parent.getChildren(),r)),dl(r,t,a),!e.doNotAutoparagraph&&function(l,d){const h=l.checkChild(d,"$text"),u=l.checkChild(d,"paragraph");return!h&&u}(o,a)&&ll(r,a,t,s),a.detach(),c.detach()})}function al(i,t,e,n){const o=t.parent,r=e.parent;if(o!=n&&r!=n){for(t=i.createPositionAfter(o),(e=i.createPositionBefore(r)).isEqual(t)||i.insert(r,t),i.merge(t);e.parent.isEmpty;){const s=e.parent;e=i.createPositionBefore(s),i.remove(s)}dr(i.model.schema,t,e)&&al(i,t,e,n)}}function cl(i,t,e,n){const o=t.parent,r=e.parent;if(o!=n&&r!=n){for(t=i.createPositionAfter(o),(e=i.createPositionBefore(r)).isEqual(t)||i.insert(o,e);t.parent.isEmpty;){const s=t.parent;t=i.createPositionBefore(s),i.remove(s)}e=i.createPositionBefore(r),function(s,a){const c=a.nodeBefore,l=a.nodeAfter;c.name!=l.name&&s.rename(c,l.name),s.clearAttributes(c),s.setAttributes(Object.fromEntries(l.getAttributes()),c),s.merge(a)}(i,e),dr(i.model.schema,t,e)&&cl(i,t,e,n)}}function dr(i,t,e){const n=t.parent,o=e.parent;return n!=o&&!i.isLimit(n)&&!i.isLimit(o)&&function(r,s,a){const c=new x(r,s);for(const l of c.getWalker())if(a.isLimit(l.item))return!1;return!0}(t,e,i)}function ll(i,t,e,n={}){const o=i.createElement("paragraph");i.model.schema.setAllowedAttributes(o,n,i),i.insert(o,t),dl(i,e,i.createPositionAt(o,0))}function dl(i,t,e){t instanceof ie?i.setSelection(e):t.setTo(e)}const hl=' ,.?!:;"-()';function Vk(i,t){const{isForward:e,walker:n,unit:o,schema:r,treatEmojiAsSingleUnit:s}=i,{type:a,item:c,nextPosition:l}=t;if(a=="text")return i.unit==="word"?function(d,h){let u=d.position.textNode;if(u){let g=d.position.offset-u.startOffset;for(;!Hk(u.data,g,h)&&!Gk(u,g,h);){d.next();const p=h?d.position.nodeAfter:d.position.nodeBefore;if(p&&p.is("$text")){const f=p.data.charAt(h?0:p.data.length-1);hl.includes(f)||(d.next(),u=d.position.textNode)}g=d.position.offset-u.startOffset}}return d.position}(n,e):function(d,h,u){const g=d.position.textNode;if(g){const p=g.data;let f=d.position.offset-g.startOffset;for(;el(p,f)||h=="character"&&nl(p,f)||u&&zk(p,f);)d.next(),f=d.position.offset-g.startOffset}return d.position}(n,o,s);if(a==(e?"elementStart":"elementEnd")){if(r.isSelectable(c))return M._createAt(c,e?"after":"before");if(r.checkChild(l,"$text"))return l}else{if(r.isLimit(c))return void n.skip(()=>!0);if(r.checkChild(l,"$text"))return l}}function Uk(i,t){const e=i.root,n=M._createAt(e,t?"end":0);return t?new x(i,n):new x(n,i)}function Hk(i,t,e){const n=t+(e?0:-1);return hl.includes(i.charAt(n))}function Gk(i,t,e){return t===(e?i.endOffset:0)}function ul(i,t){const e=[];Array.from(i.getItems({direction:"backward"})).map(n=>t.createRangeOn(n)).filter(n=>(n.start.isAfter(i.start)||n.start.isEqual(i.start))&&(n.end.isBefore(i.end)||n.end.isEqual(i.end))).forEach(n=>{e.push(n.start.parent),t.remove(n)}),e.forEach(n=>{let o=n;for(;o.parent&&o.isEmpty;){const r=t.createRangeOn(o);o=o.parent,t.remove(r)}})}function qk(i){i.document.registerPostFixer(t=>function(e,n){const o=n.document.selection,r=n.schema,s=[];let a=!1;for(const c of o.getRanges()){const l=Wk(c,r);l&&!l.isEqual(c)?(s.push(l),a=!0):s.push(c)}a&&e.setSelection(function(c){const l=[...c],d=new Set;let h=1;for(;h<l.length;){const u=l[h],g=l.slice(0,h);for(const[p,f]of g.entries())if(!d.has(p)){if(u.isEqual(f))d.add(p);else if(u.isIntersecting(f)){d.add(p),d.add(h);const b=u.getJoined(f);l.push(b)}}h++}return l.filter((u,g)=>!d.has(g))}(s),{backward:o.isBackward})}(t,i))}function Wk(i,t){return i.isCollapsed?function(e,n){const o=e.start,r=n.getNearestSelectionRange(o);if(!r){const a=o.getAncestors().reverse().find(c=>n.isObject(c));return a?x._createOn(a):null}if(!r.isCollapsed)return r;const s=r.start;return o.isEqual(s)?null:new x(s)}(i,t):function(e,n){const{start:o,end:r}=e,s=n.checkChild(o,"$text"),a=n.checkChild(r,"$text"),c=n.getLimitElement(o),l=n.getLimitElement(r);if(c===l){if(s&&a)return null;if(function(u,g,p){const f=u.nodeAfter&&!p.isLimit(u.nodeAfter)||p.checkChild(u,"$text"),b=g.nodeBefore&&!p.isLimit(g.nodeBefore)||p.checkChild(g,"$text");return f||b}(o,r,n)){const u=o.nodeAfter&&n.isSelectable(o.nodeAfter)?null:n.getNearestSelectionRange(o,"forward"),g=r.nodeBefore&&n.isSelectable(r.nodeBefore)?null:n.getNearestSelectionRange(r,"backward"),p=u?u.start:o,f=g?g.end:r;return new x(p,f)}}const d=c&&!c.is("rootElement"),h=l&&!l.is("rootElement");if(d||h){const u=o.nodeAfter&&r.nodeBefore&&o.nodeAfter.parent===r.nodeBefore.parent,g=d&&(!u||!ml(o.nodeAfter,n)),p=h&&(!u||!ml(r.nodeBefore,n));let f=o,b=r;return g&&(f=M._createBefore(gl(c,n))),p&&(b=M._createAfter(gl(l,n))),new x(f,b)}return null}(i,t)}function gl(i,t){let e=i,n=e;for(;t.isLimit(n)&&n.parent;)e=n,n=n.parent;return e}function ml(i,t){return i&&t.isSelectable(i)}class pl{constructor(){this.markers=new rl,this.document=new ol(this),this.schema=new Uc,this._pendingChanges=[],this._currentWriter=null,["insertContent","insertObject","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(t=>this.decorate(t)),this.on("applyOperation",(t,e)=>{e[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$container",{allowIn:["$root","$container"]}),this.schema.register("$block",{allowIn:["$root","$container"],isBlock:!0}),this.schema.register("$blockObject",{allowWhere:"$block",isBlock:!0,isObject:!0}),this.schema.register("$inlineObject",{allowWhere:"$text",allowAttributesOf:"$text",isInline:!0,isObject:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((t,e)=>{if(e.name==="$marker")return!0}),qk(this),this.document.registerPostFixer(Pc)}change(t){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new An,callback:t}),this._runPendingChanges()[0]):t(this._currentWriter)}catch(e){m.rethrowUnexpectedError(e,this)}}enqueueChange(t,e){try{t?typeof t=="function"?(e=t,t=new An):t instanceof An||(t=new An(t)):t=new An,this._pendingChanges.push({batch:t,callback:e}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){m.rethrowUnexpectedError(n,this)}}applyOperation(t){t._execute()}insertContent(t,e,n){return function(o,r,s,a){return o.change(c=>{let l;l=s?s instanceof ye||s instanceof ie?s:c.createSelection(s,a):o.document.selection,l.isCollapsed||o.deleteContent(l,{doNotAutoparagraph:!0});const d=new Rk(o,c,l.anchor);let h;h=r.is("documentFragment")?r.getChildren():[r],d.handleNodes(h);const u=d.getSelectionRange();u&&(l instanceof ie?c.setSelection(u):l.setTo(u));const g=d.getAffectedRange()||o.createRange(l.anchor);return d.destroy(),g})}(this,t,e,n)}insertObject(t,e,n,o){return jk(this,t,e,n,o)}deleteContent(t,e){Fk(this,t,e)}modifySelection(t,e){(function(n,o,r={}){const s=n.schema,a=r.direction!="backward",c=r.unit?r.unit:"character",l=!!r.treatEmojiAsSingleUnit,d=o.focus,h=new ve({boundaries:Uk(d,a),singleCharacters:!0,direction:a?"forward":"backward"}),u={walker:h,schema:s,isForward:a,unit:c,treatEmojiAsSingleUnit:l};let g;for(;g=h.next();){if(g.done)return;const p=Vk(u,g.value);if(p)return void(o instanceof ie?n.change(f=>{f.setSelectionFocus(p)}):o.setFocus(p))}})(this,t,e)}getSelectedContent(t){return function(e,n){return e.change(o=>{const r=o.createDocumentFragment(),s=n.getFirstRange();if(!s||s.isCollapsed)return r;const a=s.start.root,c=s.start.getCommonPath(s.end),l=a.getNodeByPath(c);let d;d=s.start.parent==s.end.parent?s:o.createRange(o.createPositionAt(l,s.start.path[c.length]),o.createPositionAt(l,s.end.path[c.length]+1));const h=d.end.offset-d.start.offset;for(const u of d.getItems({shallow:!0}))u.is("$textProxy")?o.appendText(u.data,u.getAttributes(),r):o.append(o.cloneElement(u,!0),r);if(d!=s){const u=s._getTransformedByMove(d.start,o.createPositionAt(r,0),h)[0],g=o.createRange(o.createPositionAt(r,0),u.start);ul(o.createRange(u.end,o.createPositionAt(r,"end")),o),ul(g,o)}return r})}(this,t)}hasContent(t,e={}){const n=t instanceof X?x._createIn(t):t;if(n.isCollapsed)return!1;const{ignoreWhitespaces:o=!1,ignoreMarkers:r=!1}=e;if(!r){for(const s of this.markers.getMarkersIntersectingRange(n))if(s.affectsData)return!0}for(const s of n.getItems())if(this.schema.isContent(s)&&(!s.is("$textProxy")||!o||s.data.search(/\S/)!==-1))return!0;return!1}createPositionFromPath(t,e,n){return new M(t,e,n)}createPositionAt(t,e){return M._createAt(t,e)}createPositionAfter(t){return M._createAfter(t)}createPositionBefore(t){return M._createBefore(t)}createRange(t,e){return new x(t,e)}createRangeIn(t){return x._createIn(t)}createRangeOn(t){return x._createOn(t)}createSelection(t,e,n){return new ye(t,e,n)}createBatch(t){return new An(t)}createOperationFromJSON(t){return class{static fromJSON(e,n){return se[e.__className].fromJSON(e,n)}}.fromJSON(t,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const t=[];for(this.fire("_beforeChanges");this._pendingChanges.length;){const e=this._pendingChanges[0].batch;this._currentWriter=new Ik(this,e);const n=this._pendingChanges[0].callback(this._currentWriter);t.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}return this.fire("_afterChanges"),t}}z(pl,st);class Yk extends Ce{constructor(t){super(),this.editor=t}set(t,e,n={}){if(typeof e=="string"){const o=e;e=(r,s)=>{this.editor.execute(o),s()}}super.set(t,e,n)}}class fl{constructor(t={}){const e=t.language||this.constructor.defaultConfig&&this.constructor.defaultConfig.language;this._context=t.context||new Sp({language:e}),this._context._addEditor(this,!t.context);const n=Array.from(this.constructor.builtinPlugins||[]);this.config=new la(t,this.constructor.defaultConfig),this.config.define("plugins",n),this.config.define(this._context._getEditorConfig()),this.plugins=new Di(this,n,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new hk,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.model=new pl;const o=new Xp;this.data=new qc(this.model,o),this.editing=new Vc(this.model,o),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new Ek([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new Yk(this),this.keystrokes.listenTo(this.editing.view.document)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(t){throw new m("editor-isreadonly-has-no-setter")}enableReadOnlyMode(t){if(typeof t!="string"&&typeof t!="symbol")throw new m("editor-read-only-lock-id-invalid",null,{lockId:t});this._readOnlyLocks.has(t)||(this._readOnlyLocks.add(t),this._readOnlyLocks.size===1&&this.fire("change:isReadOnly","isReadOnly",!0,!1))}disableReadOnlyMode(t){if(typeof t!="string"&&typeof t!="symbol")throw new m("editor-read-only-lock-id-invalid",null,{lockId:t});this._readOnlyLocks.has(t)&&(this._readOnlyLocks.delete(t),this._readOnlyLocks.size===0&&this.fire("change:isReadOnly","isReadOnly",!1,!0))}initPlugins(){const t=this.config,e=t.get("plugins"),n=t.get("removePlugins")||[],o=t.get("extraPlugins")||[],r=t.get("substitutePlugins")||[];return this.plugins.init(e.concat(o),n,r)}destroy(){let t=Promise.resolve();return this.state=="initializing"&&(t=new Promise(e=>this.once("ready",e))),t.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(...t){try{return this.commands.execute(...t)}catch(e){m.rethrowUnexpectedError(e,this)}}focus(){this.editing.view.focus()}}z(fl,st);class Kk{constructor(t){this.editor=t,this._components=new Map}*names(){for(const t of this._components.values())yield t.originalName}add(t,e){this._components.set(hr(t),{callback:e,originalName:t})}create(t){if(!this.has(t))throw new m("componentfactory-item-missing",this,{name:t});return this._components.get(hr(t)).callback(this.editor.locale)}has(t){return this._components.has(hr(t))}}function hr(i){return String(i).toLowerCase()}class kl{constructor(t){this.editor=t,this.componentFactory=new Kk(t),this.focusTracker=new $t,this.set("viewportOffset",this._readViewportOffsetFromConfig()),this._editableElementsMap=new Map,this.listenTo(t.editing.view.document,"layoutChanged",()=>this.update())}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy();for(const t of this._editableElementsMap.values())t.ckeditorInstance=null;this._editableElementsMap=new Map}setEditableElement(t,e){this._editableElementsMap.set(t,e),e.ckeditorInstance||(e.ckeditorInstance=this.editor)}getEditableElement(t="main"){return this._editableElementsMap.get(t)}getEditableElementsNames(){return this._editableElementsMap.keys()}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const t=this.editor,e=t.config.get("ui.viewportOffset");if(e)return e;const n=t.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}}z(kl,st);const $k={setData(i){this.data.set(i)},getData(i){return this.data.get(i)}},Qk=$k,Zk={updateSourceElement(){if(!this.sourceElement)throw new m("editor-missing-sourceelement",this);var i,t;i=this.sourceElement,t=this.data.get(),i instanceof HTMLTextAreaElement&&(i.value=t),i.innerHTML=t}};class bl extends Kn{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new Yt({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(t){if(typeof t!="string")throw new m("pendingactions-add-invalid-message",this);const e=Object.create(st);return e.set("message",t),this._actions.add(e),this.hasAny=!0,e}remove(t){this._actions.remove(t),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}const wl='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>',Zt={cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',objectSizeSmall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',objectSizeMedium:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:wl};function ur({emitter:i,activator:t,callback:e,contextElements:n}){i.listenTo(document,"mousedown",(o,r)=>{if(!t())return;const s=typeof r.composedPath=="function"?r.composedPath():[];for(const a of n)if(a.contains(r.target)||s.includes(a))return;e()})}function gr(i){i.set("_isCssTransitionsDisabled",!1),i.disableCssTransitions=()=>{i._isCssTransitionsDisabled=!0},i.enableCssTransitions=()=>{i._isCssTransitionsDisabled=!1},i.extendTemplate({attributes:{class:[i.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function mr({view:i}){i.listenTo(i.element,"submit",(t,e)=>{e.preventDefault(),i.fire("submit")},{useCapture:!0})}class Ze extends Yt{constructor(t=[]){super(t,{idProperty:"viewUid"}),this.on("add",(e,n,o)=>{this._renderViewIntoCollectionParent(n,o)}),this.on("remove",(e,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(t=>t.destroy())}setParent(t){this._parentElement=t;for(const e of this)this._renderViewIntoCollectionParent(e)}delegate(...t){if(!t.length||!t.every(e=>typeof e=="string"))throw new m("ui-viewcollection-delegate-wrong-events",this);return{to:e=>{for(const n of this)for(const o of t)n.delegate(o).to(e);this.on("add",(n,o)=>{for(const r of t)o.delegate(r).to(e)}),this.on("remove",(n,o)=>{for(const r of t)o.stopDelegating(r,e)})}}}_renderViewIntoCollectionParent(t,e){t.isRendered||t.render(),t.element&&this._parentElement&&this._parentElement.insertBefore(t.element,this._parentElement.children[e])}}var _l=S(4793),Jk={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(_l.Z,Jk),_l.Z.locals;class H{constructor(t){this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new Yt,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(e,n)=>{n.locale=t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Ut.bind(this,this)}createCollection(t){const e=new Ze(t);return this._viewCollections.add(e),e}registerChild(t){Wt(t)||(t=[t]);for(const e of t)this._unboundChildren.add(e)}deregisterChild(t){Wt(t)||(t=[t]);for(const e of t)this._unboundChildren.remove(e)}setTemplate(t){this.template=new Ut(t)}extendTemplate(t){Ut.extend(this.template,t)}render(){if(this.isRendered)throw new m("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(t=>t.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}z(H,wn),z(H,st);class Ut{constructor(t){Object.assign(this,yl(vl(t))),this._isRendered=!1,this._revertData=null}render(){const t=this._renderNode({intoFragment:!0});return this._isRendered=!0,t}apply(t){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:t,isApplying:!0,revertData:this._revertData}),t}revert(t){if(!this._revertData)throw new m("ui-template-revert-not-applied",[this,t]);this._revertTemplateFromNode(t,this._revertData)}*getViews(){yield*function*t(e){if(e.children)for(const n of e.children)Vo(n)?yield n:pr(n)&&(yield*t(n))}(this)}static bind(t,e){return{to:(n,o)=>new Xk({eventNameOrFunction:n,attribute:n,observable:t,emitter:e,callback:o}),if:(n,o,r)=>new Al({observable:t,emitter:e,attribute:n,valueIfTrue:o,callback:r})}}static extend(t,e){if(t._isRendered)throw new m("template-extend-render",[this,t]);Il(t,yl(vl(e)))}_renderNode(t){let e;if(e=t.node?this.tag&&this.text:this.tag?this.text:!this.text,e)throw new m("ui-template-wrong-syntax",this);return this.text?this._renderText(t):this._renderElement(t)}_renderElement(t){let e=t.node;return e||(e=t.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(t),this._renderElementChildren(t),this._setUpListeners(t),e}_renderText(t){let e=t.node;return e?t.revertData.text=e.textContent:e=t.node=document.createTextNode(""),Fo(this.text)?this._bindToObservable({schema:this.text,updater:tb(e),data:t}):e.textContent=this.text.join(""),e}_renderAttributes(t){let e,n,o,r;if(!this.attributes)return;const s=t.node,a=t.revertData;for(e in this.attributes)if(o=s.getAttribute(e),n=this.attributes[e],a&&(a.attributes[e]=o),r=Z(n[0])&&n[0].ns?n[0].ns:null,Fo(n)){const c=r?n[0].value:n;a&&Ml(e)&&c.unshift(o),this._bindToObservable({schema:c,updater:eb(s,e,r),data:t})}else e=="style"&&typeof n[0]!="string"?this._renderStyleAttribute(n[0],t):(a&&o&&Ml(e)&&n.unshift(o),n=n.map(c=>c&&c.value||c).reduce((c,l)=>c.concat(l),[]).reduce(El,""),vn(n)||s.setAttributeNS(r,e,n))}_renderStyleAttribute(t,e){const n=e.node;for(const o in t){const r=t[o];Fo(r)?this._bindToObservable({schema:[r],updater:nb(n,o),data:e}):n.style[o]=r}}_renderElementChildren(t){const e=t.node,n=t.intoFragment?document.createDocumentFragment():e,o=t.isApplying;let r=0;for(const s of this.children)if(fr(s)){if(!o){s.setParent(e);for(const a of s)n.appendChild(a.element)}}else if(Vo(s))o||(s.isRendered||s.render(),n.appendChild(s.element));else if(bn(s))n.appendChild(s);else if(o){const a={children:[],bindings:[],attributes:{}};t.revertData.children.push(a),s._renderNode({node:n.childNodes[r++],isApplying:!0,revertData:a})}else n.appendChild(s.render());t.intoFragment&&e.appendChild(n)}_setUpListeners(t){if(this.eventListeners)for(const e in this.eventListeners){const n=this.eventListeners[e].map(o=>{const[r,s]=e.split("@");return o.activateDomEventListener(r,s,t)});t.revertData&&t.revertData.bindings.push(n)}}_bindToObservable({schema:t,updater:e,data:n}){const o=n.revertData;Cl(t,e,n);const r=t.filter(s=>!vn(s)).filter(s=>s.observable).map(s=>s.activateAttributeListener(t,e,n));o&&o.bindings.push(r)}_revertTemplateFromNode(t,e){for(const n of e.bindings)for(const o of n)o();if(e.text)t.textContent=e.text;else{for(const n in e.attributes){const o=e.attributes[n];o===null?t.removeAttribute(n):t.setAttribute(n,o)}for(let n=0;n<e.children.length;++n)this._revertTemplateFromNode(t.childNodes[n],e.children[n])}}}z(Ut,K);class ao{constructor(t){Object.assign(this,t)}getValue(t){const e=this.observable[this.attribute];return this.callback?this.callback(e,t):e}activateAttributeListener(t,e,n){const o=()=>Cl(t,e,n);return this.emitter.listenTo(this.observable,"change:"+this.attribute,o),()=>{this.emitter.stopListening(this.observable,"change:"+this.attribute,o)}}}class Xk extends ao{activateDomEventListener(t,e,n){const o=(r,s)=>{e&&!s.target.matches(e)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(s):this.observable.fire(this.eventNameOrFunction,s))};return this.emitter.listenTo(n.node,t,o),()=>{this.emitter.stopListening(n.node,t,o)}}}class Al extends ao{getValue(t){return!vn(super.getValue(t))&&(this.valueIfTrue||!0)}}function Fo(i){return!!i&&(i.value&&(i=i.value),Array.isArray(i)?i.some(Fo):i instanceof ao)}function Cl(i,t,{node:e}){let n=function(o,r){return o.map(s=>s instanceof ao?s.getValue(r):s)}(i,e);n=i.length==1&&i[0]instanceof Al?n[0]:n.reduce(El,""),vn(n)?t.remove():t.set(n)}function tb(i){return{set(t){i.textContent=t},remove(){i.textContent=""}}}function eb(i,t,e){return{set(n){i.setAttributeNS(e,t,n)},remove(){i.removeAttributeNS(e,t)}}}function nb(i,t){return{set(e){i.style[t]=e},remove(){i.style[t]=null}}}function vl(i){return ca(i,t=>{if(t&&(t instanceof ao||pr(t)||Vo(t)||fr(t)))return t})}function yl(i){if(typeof i=="string"?i=function(t){return{text:[t]}}(i):i.text&&function(t){t.text=vt(t.text)}(i),i.on&&(i.eventListeners=function(t){for(const e in t)xl(t,e);return t}(i.on),delete i.on),!i.text){i.attributes&&function(e){for(const n in e)e[n].value&&(e[n].value=vt(e[n].value)),xl(e,n)}(i.attributes);const t=[];if(i.children)if(fr(i.children))t.push(i.children);else for(const e of i.children)pr(e)||Vo(e)||bn(e)?t.push(e):t.push(new Ut(e));i.children=t}return i}function xl(i,t){i[t]=vt(i[t])}function El(i,t){return vn(t)?i:vn(i)?t:`${i} ${t}`}function Dl(i,t){for(const e in t)i[e]?i[e].push(...t[e]):i[e]=t[e]}function Il(i,t){if(t.attributes&&(i.attributes||(i.attributes={}),Dl(i.attributes,t.attributes)),t.eventListeners&&(i.eventListeners||(i.eventListeners={}),Dl(i.eventListeners,t.eventListeners)),t.text&&i.text.push(...t.text),t.children&&t.children.length){if(i.children.length!=t.children.length)throw new m("ui-template-extend-children-mismatch",i);let e=0;for(const n of t.children)Il(i.children[e++],n)}}function vn(i){return!i&&i!==0}function Vo(i){return i instanceof H}function pr(i){return i instanceof Ut}function fr(i){return i instanceof Ze}function Ml(i){return i=="class"||i=="style"}class ob extends Ze{constructor(t,e=[]){super(e),this.locale=t}attachToDom(){this._bodyCollectionContainer=new Ut({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let t=document.querySelector(".ck-body-wrapper");t||(t=sc(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(t)),t.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const t=document.querySelector(".ck-body-wrapper");t&&t.childElementCount==0&&t.remove()}}var Sl=S(6574),ib={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Sl.Z,ib),Sl.Z.locals;class Uo extends H{constructor(){super();const t=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon"],viewBox:t.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const t=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),e=t.getAttribute("viewBox");for(e&&(this.viewBox=e),this.element.innerHTML="";t.childNodes.length>0;)this.element.appendChild(t.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(t=>{t.style.fill=this.fillColor})}}var Tl=S(3332),rb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Tl.Z,rb),Tl.Z.locals;class Nl extends H{constructor(t){super(t),this.set("text",""),this.set("position","s");const e=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip",e.to("position",n=>"ck-tooltip_"+n),e.if("text","ck-hidden",n=>!n.trim())]},children:[{tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:e.to("text")}]}]})}}var Bl=S(4906),sb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Bl.Z,sb),Bl.Z.locals;class dt extends H{constructor(t){super(t);const e=this.bindTemplate,n=v();this.set("class"),this.set("labelStyle"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.tooltipView=this._createTooltipView(),this.labelView=this._createLabelView(n),this.iconView=new Uo,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this)),this.setTemplate({tag:"button",attributes:{class:["ck","ck-button",e.to("class"),e.if("isEnabled","ck-disabled",o=>!o),e.if("isVisible","ck-hidden",o=>!o),e.to("isOn",o=>o?"ck-on":"ck-off"),e.if("withText","ck-button_with-text"),e.if("withKeystroke","ck-button_with-keystroke")],type:e.to("type",o=>o||"button"),tabindex:e.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":e.if("isEnabled",!0,o=>!o),"aria-pressed":e.to("isOn",o=>!!this.isToggleable&&String(o))},children:this.children,on:{mousedown:e.to(o=>{o.preventDefault()}),click:e.to(o=>{this.isEnabled?this.fire("execute"):o.preventDefault()})}})}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createTooltipView(){const t=new Nl;return t.bind("text").to(this,"_tooltipString"),t.bind("position").to(this,"tooltipPosition"),t}_createLabelView(t){const e=new H,n=this.bindTemplate;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${t}`},children:[{text:this.bindTemplate.to("label")}]}),e}_createKeystrokeView(){const t=new H;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",e=>xa(e))}]}),t}_getTooltipString(t,e,n){return t?typeof t=="string"?t:(n&&(n=xa(n)),t instanceof Function?t(e,n):`${e}${n?` (${n})`:""}`):""}}var Pl=S(5332),ab={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Pl.Z,ab),Pl.Z.locals;class kr extends dt{constructor(t){super(t),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const t=new H;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),t}}var zl=S(6781),cb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(zl.Z,cb),zl.Z.locals;const Ll='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class Ol extends dt{constructor(t){super(t),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const t=new Uo;return t.content=Ll,t.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),t}}var Rl=S(7686),lb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Rl.Z,lb),Rl.Z.locals;class jl extends H{constructor(t){super(t);const e=this.bindTemplate;this.set("class"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new Ce,this.focusTracker=new $t,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",e.to("class"),e.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(t,e)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),e())}),this.keystrokes.set("arrowleft",(t,e)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),e())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){const t=new dt;return t.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),t.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),t.delegate("execute").to(this),t}_createArrowView(){const t=new dt,e=t.bindTemplate;return t.icon=Ll,t.extendTemplate({attributes:{class:"ck-splitbutton__arrow","aria-haspopup":!0,"aria-expanded":e.to("isOn",n=>String(n))}}),t.bind("isEnabled").to(this),t.bind("label").to(this),t.bind("tooltip").to(this),t.delegate("execute").to(this,"open"),t}}class db extends H{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",e.to("position",n=>`ck-dropdown__panel_${n}`),e.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:e.to(n=>n.preventDefault())}})}focus(){this.children.length&&this.children.first.focus()}focusLast(){if(this.children.length){const t=this.children.last;typeof t.focusLast=="function"?t.focusLast():t.focus()}}}var Fl=S(5485),hb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Fl.Z,hb),Fl.Z.locals;function Vl({element:i,target:t,positions:e,limiter:n,fitInViewport:o,viewportOffsetConfig:r}){Re(t)&&(t=t()),Re(n)&&(n=n());const s=function(d){return d&&d.parentNode?d.offsetParent===pt.document.body?null:d.offsetParent:null}(i),a=new J(i);let c;const l={targetRect:new J(t),elementRect:a,positionedElementAncestor:s};if(n||o){const d=n&&new J(n).getVisible(),h=o&&function(u){u=Object.assign({top:0,bottom:0,left:0,right:0},u);const g=new J(pt.window);return g.top+=u.top,g.height-=u.top,g.bottom-=u.bottom,g.height-=u.bottom,g}(r);Object.assign(l,{limiterRect:d,viewportRect:h}),c=function(u,g){const{elementRect:p}=g,f=p.getArea(),b=u.map(I=>new br(I,g)).filter(I=>!!I.name);let w=0,_=null;for(const I of b){const{_limiterIntersectionArea:P,_viewportIntersectionArea:R}=I;if(P===f)return I;const ot=R**2+P**2;ot>w&&(w=ot,_=I)}return _}(e,l)||new br(e[0],l)}else c=new br(e[0],l);return c}function Ul(i){const{scrollX:t,scrollY:e}=pt.window;return i.clone().moveBy(t,e)}class br{constructor(t,e){const n=t(e.targetRect,e.elementRect,e.viewportRect);if(!n)return;const{left:o,top:r,name:s,config:a}=n;Object.assign(this,{name:s,config:a}),this._positioningFunctionCorrdinates={left:o,top:r},this._options=e}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get _limiterIntersectionArea(){const t=this._options.limiterRect;if(t){const e=this._options.viewportRect;if(!e)return t.getIntersectionArea(this._rect);{const n=t.getIntersection(e);if(n)return n.getIntersectionArea(this._rect)}}return 0}get _viewportIntersectionArea(){const t=this._options.viewportRect;return t?t.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=Ul(this._rect),this._options.positionedElementAncestor&&function(t,e){const n=Ul(new J(e)),o=ac(e);let r=0,s=0;r-=n.left,s-=n.top,r+=e.scrollLeft,s+=e.scrollTop,r-=o.left,s-=o.top,t.moveBy(r,s)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}class yn extends H{constructor(t,e,n){super(t);const o=this.bindTemplate;this.buttonView=e,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class"),this.set("id"),this.set("panelPosition","auto"),this.keystrokes=new Ce,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",o.to("class"),o.if("isEnabled","ck-disabled",r=>!r)],id:o.to("id"),"aria-describedby":o.to("ariaDescribedById")},children:[e,n]}),e.extendTemplate({attributes:{class:["ck-dropdown__button"]}})}render(){super.render(),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",()=>{this.isOpen&&(this.panelPosition==="auto"?this.panelView.position=yn._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element);const t=(e,n)=>{this.isOpen&&(this.buttonView.focus(),this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(e,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(e,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",t),this.keystrokes.set("esc",t)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:t,north:e,southEast:n,southWest:o,northEast:r,northWest:s,southMiddleEast:a,southMiddleWest:c,northMiddleEast:l,northMiddleWest:d}=yn.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,o,a,c,t,r,s,l,d,e]:[o,n,c,a,t,s,r,d,l,e]}}function Hl(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}yn.defaultPanelPositions={south:(i,t)=>({top:i.bottom,left:i.left-(t.width-i.width)/2,name:"s"}),southEast:i=>({top:i.bottom,left:i.left,name:"se"}),southWest:(i,t)=>({top:i.bottom,left:i.left-t.width+i.width,name:"sw"}),southMiddleEast:(i,t)=>({top:i.bottom,left:i.left-(t.width-i.width)/4,name:"sme"}),southMiddleWest:(i,t)=>({top:i.bottom,left:i.left-3*(t.width-i.width)/4,name:"smw"}),north:(i,t)=>({top:i.top-t.height,left:i.left-(t.width-i.width)/2,name:"n"}),northEast:(i,t)=>({top:i.top-t.height,left:i.left,name:"ne"}),northWest:(i,t)=>({top:i.top-t.height,left:i.left-t.width+i.width,name:"nw"}),northMiddleEast:(i,t)=>({top:i.top-t.height,left:i.left-(t.width-i.width)/4,name:"nme"}),northMiddleWest:(i,t)=>({top:i.top-t.height,left:i.left-3*(t.width-i.width)/4,name:"nmw"})},yn._getOptimalPosition=Vl;class xn{constructor(t){if(Object.assign(this,t),t.actions&&t.keystrokeHandler)for(const e in t.actions){let n=t.actions[e];typeof n=="string"&&(n=[n]);for(const o of n)t.keystrokeHandler.set(o,(r,s)=>{this[e](),s()})}}get first(){return this.focusables.find(wr)||null}get last(){return this.focusables.filter(wr).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let t=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((e,n)=>{const o=e.element===this.focusTracker.focusedElement;return o&&(t=n),o}),t)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(t){t&&t.focus()}_getFocusableItem(t){const e=this.current,n=this.focusables.length;if(!n)return null;if(e===null)return this[t===1?"first":"last"];let o=(e+n+t)%n;do{const r=this.focusables.get(o);if(wr(r))return r;o=(o+n+t)%n}while(o!==e);return null}}function wr(i){return!(!i.focus||!Hl(i.element))}class Gl extends H{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class ub extends H{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function ql(i){return Array.isArray(i)?{items:i,removeItems:[]}:i?Object.assign({items:[],removeItems:[]},i):{items:[],removeItems:[]}}var Wl=S(5542),gb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Wl.Z,gb),Wl.Z.locals;class _r extends H{constructor(t,e){super(t);const n=this.bindTemplate,o=this.t;this.options=e||{},this.set("ariaLabel",o("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new $t,this.keystrokes=new Ce,this.set("class"),this.set("isCompact",!1),this.itemsView=new mb(t),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();const r=t.uiLanguageDirection==="rtl";this._focusCycler=new xn({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[r?"arrowright":"arrowleft","arrowup"],focusNext:[r?"arrowleft":"arrowright","arrowdown"]}});const s=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];var a;this.options.shouldGroupWhenFull&&this.options.isFloating&&s.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:s,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")}},children:this.children,on:{mousedown:(a=this,a.bindTemplate.to(c=>{c.target===a.element&&c.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new fb(this):new pb(this)}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(t,e){const n=ql(t),o=n.items.filter((s,a,c)=>s==="|"||n.removeItems.indexOf(s)===-1&&(s==="-"?!this.options.shouldGroupWhenFull||(A("toolbarview-line-break-ignored-when-grouping-items",c),!1):!!e.has(s)||(A("toolbarview-item-unavailable",{name:s}),!1))),r=this._cleanSeparators(o).map(s=>s==="|"?new Gl:s==="-"?new ub:e.create(s));this.items.addMany(r)}_cleanSeparators(t){const e=s=>s!=="-"&&s!=="|",n=t.length,o=t.findIndex(e),r=n-t.slice().reverse().findIndex(e);return t.slice(o,r).filter((s,a,c)=>e(s)?!0:!(a>0&&c[a-1]===s))}}class mb extends H{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class pb{constructor(t){const e=t.bindTemplate;t.set("isVertical",!1),t.itemsView.children.bindTo(t.items).using(n=>n),t.focusables.bindTo(t.items).using(n=>n),t.extendTemplate({attributes:{class:[e.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class fb{constructor(t){this.view=t,this.viewChildren=t.children,this.viewFocusables=t.focusables,this.viewItemsView=t.itemsView,this.viewFocusTracker=t.focusTracker,this.viewLocale=t.locale,this.ungroupedItems=t.createCollection(),this.groupedItems=t.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,t.itemsView.children.bindTo(this.ungroupedItems).using(e=>e),this.ungroupedItems.on("add",this._updateFocusCycleableItems.bind(this)),this.ungroupedItems.on("remove",this._updateFocusCycleableItems.bind(this)),t.children.on("add",this._updateFocusCycleableItems.bind(this)),t.children.on("remove",this._updateFocusCycleableItems.bind(this)),t.items.on("change",(e,n)=>{const o=n.index;for(const r of n.removed)o>=this.ungroupedItems.length?this.groupedItems.remove(r):this.ungroupedItems.remove(r);for(let r=o;r<o+n.added.length;r++){const s=n.added[r-o];r>this.ungroupedItems.length?this.groupedItems.add(s,r-this.ungroupedItems.length):this.ungroupedItems.add(s,r)}this._updateGrouping()}),t.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(t){this.viewElement=t.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(t)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!Hl(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);const t=this.groupedItems.length;let e;for(;this._areItemsOverflowing;)this._groupLastItem(),e=!0;if(!e&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==t&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const t=this.viewElement,e=this.viewLocale.uiLanguageDirection,n=new J(t.lastChild),o=new J(t);if(!this.cachedPadding){const r=pt.window.getComputedStyle(t),s=e==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(r[s])}return e==="ltr"?n.right>o.right-this.cachedPadding:n.left<o.left+this.cachedPadding}_enableGroupingOnResize(){let t;this.resizeObserver=new ut(this.viewElement,e=>{t&&t===e.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),t=e.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(t){t.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new Gl),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const t=this.viewLocale,e=t.t,n=Je(t);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=t.uiLanguageDirection==="ltr"?"sw":"se",Ql(n,[]),n.buttonView.set({label:e("Show more items"),tooltip:!0,tooltipPosition:t.uiLanguageDirection==="rtl"?"se":"sw",icon:wl}),n.toolbarView.items.bindTo(this.groupedItems).using(o=>o),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(t=>{this.viewFocusables.add(t)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}var Yl=S(1046),kb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Yl.Z,kb),Yl.Z.locals;class bb extends H{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new $t,this.keystrokes=new Ce,this._focusCycler=new xn({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class wb extends H{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item"]},children:this.children})}focus(){this.children.first.focus()}}class _b extends H{constructor(t){super(t),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}var Kl=S(7339),Ab={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Kl.Z,Ab),Kl.Z.locals;var $l=S(3949),Cb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()($l.Z,Cb),$l.Z.locals;function Je(i,t=Ol){const e=new t(i),n=new db(i),o=new yn(i,e,n);return e.bind("isEnabled").to(o),e instanceof Ol?e.bind("isOn").to(o,"isOpen"):e.arrowView.bind("isOn").to(o,"isOpen"),function(r){(function(s){s.on("render",()=>{ur({emitter:s,activator:()=>s.isOpen,callback:()=>{s.isOpen=!1},contextElements:[s.element]})})})(r),function(s){s.on("execute",a=>{a.source instanceof kr||(s.isOpen=!1)})}(r),function(s){s.keystrokes.set("arrowdown",(a,c)=>{s.isOpen&&(s.panelView.focus(),c())}),s.keystrokes.set("arrowup",(a,c)=>{s.isOpen&&(s.panelView.focusLast(),c())})}(r)}(o),o}function Ql(i,t){const e=i.locale,n=e.t,o=i.toolbarView=new _r(e);o.set("ariaLabel",n("Dropdown toolbar")),i.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),t.map(r=>o.items.add(r)),i.panelView.children.add(o),o.items.delegate("execute").to(i)}function Zl(i,t){const e=i.locale,n=i.listView=new bb(e);n.items.bindTo(t).using(({type:o,model:r})=>{if(o==="separator")return new _b(e);if(o==="button"||o==="switchbutton"){const s=new wb(e);let a;return a=o==="button"?new dt(e):new kr(e),a.bind(...Object.keys(r)).to(r),a.delegate("execute").to(s),s.children.add(a),s}}),i.panelView.children.add(n),n.items.delegate("execute").to(i)}var Jl=S(9688),vb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Jl.Z,vb),Jl.Z.locals;class yb extends H{constructor(t){super(t),this.body=new ob(t)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}var Xl=S(3662),xb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Xl.Z,xb),Xl.Z.locals;class td extends H{constructor(t){super(t),this.set("text"),this.set("for"),this.id=`ck-editor__label_${v()}`;const e=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:e.to("for")},children:[{text:e.to("text")}]})}}class Eb extends yb{constructor(t){super(t),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:t.uiLanguageDirection,lang:t.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const t=this.t,e=new td;return e.text=t("Rich Text Editor"),e.extendTemplate({attributes:{class:"ck-voice-label"}}),e}}class Db extends H{constructor(t,e,n){super(t),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:t.contentLanguage,dir:t.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=e}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const t=this._editingView;function e(n){t.change(o=>{const r=t.document.getRoot(n.name);o.addClass(n.isFocused?"ck-focused":"ck-blurred",r),o.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}t.isRenderingInProgress?function n(o){t.once("change:isRenderingInProgress",(r,s,a)=>{a?n(o):e(o)})}(this):e(this)}}class Ib extends Db{constructor(t,e,n){super(t,e,n),this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}})}render(){super.render();const t=this._editingView,e=this.t;t.change(n=>{const o=t.document.getRoot(this.name);n.setAttribute("aria-label",e("Rich Text Editor, %0",this.name),o)})}}var ed=S(8847),Mb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(ed.Z,Mb),ed.Z.locals;var nd=S(4879),Sb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(nd.Z,Sb),nd.Z.locals;class Tb extends H{constructor(t){super(t),this.set("value"),this.set("id"),this.set("placeholder"),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById"),this.focusTracker=new $t,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0),this.set("inputMode","text");const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",e.if("isFocused","ck-input_focused"),e.if("isEmpty","ck-input-text_empty"),e.if("hasError","ck-error")],id:e.to("id"),placeholder:e.to("placeholder"),readonly:e.to("isReadOnly"),inputmode:e.to("inputMode"),"aria-invalid":e.if("hasError",!0),"aria-describedby":e.to("ariaDescribedById")},on:{input:e.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:e.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(t,e,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(t){this.element.value=t||t===0?t:""}}class Nb extends Tb{constructor(t){super(t),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var od=S(2577),Bb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(od.Z,Bb),od.Z.locals;class Ar extends H{constructor(t,e){super(t);const n=`ck-labeled-field-view-${v()}`,o=`ck-labeled-field-view-status-${v()}`;this.fieldView=e(this,n,o),this.set("label"),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class"),this.set("placeholder"),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(o),this.bind("_statusText").to(this,"errorText",this,"infoText",(s,a)=>s||a);const r=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",r.to("class"),r.if("isEnabled","ck-disabled",s=>!s),r.if("isEmpty","ck-labeled-field-view_empty"),r.if("isFocused","ck-labeled-field-view_focused"),r.if("placeholder","ck-labeled-field-view_placeholder"),r.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:[this.fieldView,this.labelView]},this.statusView]})}_createLabelView(t){const e=new td(this.locale);return e.for=t,e.bind("text").to(this,"label"),e}_createStatusView(t){const e=new H(this.locale),n=this.bindTemplate;return e.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",o=>!o)],id:t,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),e}focus(){this.fieldView.focus()}}function Cr(i,t,e){const n=new Nb(i.locale);return n.set({id:t,ariaDescribedById:e}),n.bind("isReadOnly").to(i,"isEnabled",o=>!o),n.bind("hasError").to(i,"errorText",o=>!!o),n.on("input",()=>{i.errorText=null}),i.bind("isEmpty","isFocused","placeholder").to(n),n}class vr extends Kn{static get pluginName(){return"Notification"}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){const e=`show:${t.type}`+(t.namespace?`:${t.namespace}`:"");this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class yr{constructor(t,e){e&&Hn(this,e),t&&this.set(t)}}function xr(i){return t=>t+i}z(yr,st);var id=S(8793),Pb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(id.Z,Pb),id.Z.locals;const rd=xr("px"),sd=pt.document.body;class jt extends H{constructor(t){super(t);const e=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class"),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",e.to("position",n=>`ck-balloon-panel_${n}`),e.if("isVisible","ck-balloon-panel_visible"),e.if("withArrow","ck-balloon-panel_with-arrow"),e.to("class")],style:{top:e.to("top",rd),left:e.to("left",rd)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(t){this.show();const e=jt.defaultPositions,n=Object.assign({},{element:this.element,positions:[e.southArrowNorth,e.southArrowNorthMiddleWest,e.southArrowNorthMiddleEast,e.southArrowNorthWest,e.southArrowNorthEast,e.northArrowSouth,e.northArrowSouthMiddleWest,e.northArrowSouthMiddleEast,e.northArrowSouthWest,e.northArrowSouthEast,e.viewportStickyNorth],limiter:sd,fitInViewport:!0},t),o=jt._getOptimalPosition(n),r=parseInt(o.left),s=parseInt(o.top),{name:a,config:c={}}=o,{withArrow:l=!0}=c;Object.assign(this,{top:s,left:r,position:a,withArrow:l})}pin(t){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(t):this._stopPinning()},this._startPinning(t),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(t){this.attachTo(t);const e=Er(t.target),n=t.limiter?Er(t.limiter):sd;this.listenTo(pt.document,"scroll",(o,r)=>{const s=r.target,a=e&&s.contains(e),c=n&&s.contains(n);!a&&!c&&e&&n||this.attachTo(t)},{useCapture:!0}),this.listenTo(pt.window,"resize",()=>{this.attachTo(t)})}_stopPinning(){this.stopListening(pt.document,"scroll"),this.stopListening(pt.window,"resize")}}function Er(i){return Ne(i)?i:Lo(i)?i.commonAncestorContainer:typeof i=="function"?Er(i()):null}jt.arrowHorizontalOffset=25,jt.arrowVerticalOffset=10,jt.stickyVerticalOffset=20,jt._getOptimalPosition=Vl,jt.defaultPositions=function({horizontalOffset:i=jt.arrowHorizontalOffset,verticalOffset:t=jt.arrowVerticalOffset,stickyVerticalOffset:e=jt.stickyVerticalOffset,config:n}={}){return{northWestArrowSouthWest:(s,a)=>({top:o(s,a),left:s.left-i,name:"arrow_sw",...n&&{config:n}}),northWestArrowSouthMiddleWest:(s,a)=>({top:o(s,a),left:s.left-.25*a.width-i,name:"arrow_smw",...n&&{config:n}}),northWestArrowSouth:(s,a)=>({top:o(s,a),left:s.left-a.width/2,name:"arrow_s",...n&&{config:n}}),northWestArrowSouthMiddleEast:(s,a)=>({top:o(s,a),left:s.left-.75*a.width+i,name:"arrow_sme",...n&&{config:n}}),northWestArrowSouthEast:(s,a)=>({top:o(s,a),left:s.left-a.width+i,name:"arrow_se",...n&&{config:n}}),northArrowSouthWest:(s,a)=>({top:o(s,a),left:s.left+s.width/2-i,name:"arrow_sw",...n&&{config:n}}),northArrowSouthMiddleWest:(s,a)=>({top:o(s,a),left:s.left+s.width/2-.25*a.width-i,name:"arrow_smw",...n&&{config:n}}),northArrowSouth:(s,a)=>({top:o(s,a),left:s.left+s.width/2-a.width/2,name:"arrow_s",...n&&{config:n}}),northArrowSouthMiddleEast:(s,a)=>({top:o(s,a),left:s.left+s.width/2-.75*a.width+i,name:"arrow_sme",...n&&{config:n}}),northArrowSouthEast:(s,a)=>({top:o(s,a),left:s.left+s.width/2-a.width+i,name:"arrow_se",...n&&{config:n}}),northEastArrowSouthWest:(s,a)=>({top:o(s,a),left:s.right-i,name:"arrow_sw",...n&&{config:n}}),northEastArrowSouthMiddleWest:(s,a)=>({top:o(s,a),left:s.right-.25*a.width-i,name:"arrow_smw",...n&&{config:n}}),northEastArrowSouth:(s,a)=>({top:o(s,a),left:s.right-a.width/2,name:"arrow_s",...n&&{config:n}}),northEastArrowSouthMiddleEast:(s,a)=>({top:o(s,a),left:s.right-.75*a.width+i,name:"arrow_sme",...n&&{config:n}}),northEastArrowSouthEast:(s,a)=>({top:o(s,a),left:s.right-a.width+i,name:"arrow_se",...n&&{config:n}}),southWestArrowNorthWest:(s,a)=>({top:r(s),left:s.left-i,name:"arrow_nw",...n&&{config:n}}),southWestArrowNorthMiddleWest:(s,a)=>({top:r(s),left:s.left-.25*a.width-i,name:"arrow_nmw",...n&&{config:n}}),southWestArrowNorth:(s,a)=>({top:r(s),left:s.left-a.width/2,name:"arrow_n",...n&&{config:n}}),southWestArrowNorthMiddleEast:(s,a)=>({top:r(s),left:s.left-.75*a.width+i,name:"arrow_nme",...n&&{config:n}}),southWestArrowNorthEast:(s,a)=>({top:r(s),left:s.left-a.width+i,name:"arrow_ne",...n&&{config:n}}),southArrowNorthWest:(s,a)=>({top:r(s),left:s.left+s.width/2-i,name:"arrow_nw",...n&&{config:n}}),southArrowNorthMiddleWest:(s,a)=>({top:r(s),left:s.left+s.width/2-.25*a.width-i,name:"arrow_nmw",...n&&{config:n}}),southArrowNorth:(s,a)=>({top:r(s),left:s.left+s.width/2-a.width/2,name:"arrow_n",...n&&{config:n}}),southArrowNorthMiddleEast:(s,a)=>({top:r(s),left:s.left+s.width/2-.75*a.width+i,name:"arrow_nme",...n&&{config:n}}),southArrowNorthEast:(s,a)=>({top:r(s),left:s.left+s.width/2-a.width+i,name:"arrow_ne",...n&&{config:n}}),southEastArrowNorthWest:(s,a)=>({top:r(s),left:s.right-i,name:"arrow_nw",...n&&{config:n}}),southEastArrowNorthMiddleWest:(s,a)=>({top:r(s),left:s.right-.25*a.width-i,name:"arrow_nmw",...n&&{config:n}}),southEastArrowNorth:(s,a)=>({top:r(s),left:s.right-a.width/2,name:"arrow_n",...n&&{config:n}}),southEastArrowNorthMiddleEast:(s,a)=>({top:r(s),left:s.right-.75*a.width+i,name:"arrow_nme",...n&&{config:n}}),southEastArrowNorthEast:(s,a)=>({top:r(s),left:s.right-a.width+i,name:"arrow_ne",...n&&{config:n}}),viewportStickyNorth:(s,a,c)=>s.getIntersection(c)?{top:c.top+e,left:s.left+s.width/2-a.width/2,name:"arrowless",config:{withArrow:!1,...n}}:null};function o(s,a){return s.top-a.height-t}function r(s){return s.bottom+t}}();var ad=S(4650),zb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(ad.Z,zb),ad.Z.locals;var cd=S(7676),Lb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(cd.Z,Lb),cd.Z.locals;const Ho=xr("px");class Go extends T{static get pluginName(){return"ContextualBalloon"}constructor(t){super(t),this.positionLimiter=()=>{const e=this.editor.editing.view,n=e.document.selection.editableElement;return n?e.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.view=new jt(t.locale),t.ui.view.body.add(this.view),t.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}destroy(){super.destroy(),this.view.destroy(),this._rotatorView.destroy(),this._fakePanelsView.destroy()}hasView(t){return Array.from(this._viewToStack.keys()).includes(t)}add(t){if(this.hasView(t.view))throw new m("contextualballoon-add-view-exist",[this,t]);const e=t.stackId||"main";if(!this._idToStack.has(e))return this._idToStack.set(e,new Map([[t.view,t]])),this._viewToStack.set(t.view,this._idToStack.get(e)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!t.singleViewMode||this.showStack(e));const n=this._idToStack.get(e);t.singleViewMode&&this.showStack(e),n.set(t.view,t),this._viewToStack.set(t.view,n),n===this._visibleStack&&this._showView(t)}remove(t){if(!this.hasView(t))throw new m("contextualballoon-remove-view-not-exist",[this,t]);const e=this._viewToStack.get(t);this._singleViewMode&&this.visibleView===t&&(this._singleViewMode=!1),this.visibleView===t&&(e.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(e.values())[e.size-2])),e.size===1?(this._idToStack.delete(this._getStackId(e)),this._numberOfStacks=this._idToStack.size):e.delete(t),this._viewToStack.delete(t)}updatePosition(t){t&&(this._visibleStack.get(this.visibleView).position=t),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(t){this.visibleStack=t;const e=this._idToStack.get(t);if(!e)throw new m("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==e&&this._showView(Array.from(e.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(t){return Array.from(this._idToStack.entries()).find(e=>e[1]===t)[0]}_showNextStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)+1;t[e]||(e=0),this.showStack(this._getStackId(t[e]))}_showPrevStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)-1;t[e]||(e=t.length-1),this.showStack(this._getStackId(t[e]))}_createRotatorView(){const t=new Ob(this.editor.locale),e=this.editor.locale.t;return this.view.content.add(t),t.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,o)=>!o&&n>1),t.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),t.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,o)=>{if(o<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return e("%0 of %1",[r,o])}),t.buttonNextView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),t.buttonPrevView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),t}_createFakePanelsView(){const t=new Rb(this.editor.locale,this.view);return t.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(e,n)=>!n&&e>=2?Math.min(e-1,2):0),t.listenTo(this.view,"change:top",()=>t.updatePosition()),t.listenTo(this.view,"change:left",()=>t.updatePosition()),this.editor.ui.view.body.add(t),t}_showView({view:t,balloonClassName:e="",withArrow:n=!0,singleViewMode:o=!1}){this.view.class=e,this.view.withArrow=n,this._rotatorView.showView(t),this.visibleView=t,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),o&&(this._singleViewMode=!0)}_getBalloonPosition(){let t=Array.from(this._visibleStack.values()).pop().position;return t&&(t.limiter||(t=Object.assign({},t,{limiter:this.positionLimiter})),t=Object.assign({},t,{viewportOffsetConfig:this.editor.ui.viewportOffset})),t}}class Ob extends H{constructor(t){super(t);const e=t.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new $t,this.buttonPrevView=this._createButtonView(e("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(e("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",o=>o?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(t){this.hideView(),this.content.add(t)}hideView(){this.content.clear()}_createButtonView(t,e){const n=new dt(this.locale);return n.set({label:t,icon:e,tooltip:!0}),n}}class Rb extends H{constructor(t,e){super(t);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=e,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",o=>o?"":"ck-hidden")],style:{top:n.to("top",Ho),left:n.to("left",Ho),width:n.to("width",Ho),height:n.to("height",Ho)}},children:this.content}),this.on("change:numberOfPanels",(o,r,s,a)=>{s>a?this._addPanels(s-a):this._removePanels(a-s),this.updatePosition()})}_addPanels(t){for(;t--;){const e=new H;e.setTemplate({tag:"div"}),this.content.add(e),this.registerChild(e)}}_removePanels(t){for(;t--;){const e=this.content.last;this.content.remove(e),this.deregisterChild(e),e.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:t,left:e}=this._balloonPanelView,{width:n,height:o}=new J(this._balloonPanelView.element);Object.assign(this,{top:t,left:e,width:n,height:o})}}}var ld=S(5868),jb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(ld.Z,jb),ld.Z.locals;const co=xr("px");class Fb extends H{constructor(t){super(t);const e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new Ut({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",n=>n?"block":"none"),height:e.to("isSticky",n=>n?co(this._panelRect.height):null)}}}).render(),this._contentPanel=new Ut({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",n=>n?co(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_hasViewportTopOffset",n=>n?co(this.viewportTopOffset):null),bottom:e.to("_isStickyToTheLimiter",n=>n?co(this.limiterBottomOffset):null),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(pt.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const t=this._panelRect=this._contentPanel.getBoundingClientRect();let e;this.limiterElement?(e=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&e.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<e.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=e.bottom<t.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:co(-pt.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}var dd=S(9695),Vb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(dd.Z,Vb),dd.Z.locals;var hd=S(4717),Ub={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(hd.Z,Ub),hd.Z.locals;const qo=new WeakMap;function ud(i){const{view:t,element:e,text:n,isDirectHost:o=!0,keepOnFocus:r=!1}=i,s=t.document;qo.has(s)||(qo.set(s,new Map),s.registerPostFixer(a=>gd(s,a))),qo.get(s).set(e,{text:n,isDirectHost:o,keepOnFocus:r,hostElement:o?e:null}),t.change(a=>gd(s,a))}function Hb(i,t){return!!t.hasClass("ck-placeholder")&&(i.removeClass("ck-placeholder",t),!0)}function gd(i,t){const e=qo.get(i),n=[];let o=!1;for(const[r,s]of e)s.isDirectHost&&(n.push(r),md(t,r,s)&&(o=!0));for(const[r,s]of e){if(s.isDirectHost)continue;const a=Gb(r);a&&(n.includes(a)||(s.hostElement=a,md(t,r,s)&&(o=!0)))}return o}function md(i,t,e){const{text:n,isDirectHost:o,hostElement:r}=e;let s=!1;return r.getAttribute("data-placeholder")!==n&&(i.setAttribute("data-placeholder",n,r),s=!0),(o||t.childCount==1)&&function(a,c){if(!a.isAttached()||Array.from(a.getChildren()).some(u=>!u.is("uiElement")))return!1;if(c)return!0;const d=a.document;if(!d.isFocused)return!0;const h=d.selection.anchor;return h&&h.parent!==a}(r,e.keepOnFocus)?function(a,c){return!c.hasClass("ck-placeholder")&&(a.addClass("ck-placeholder",c),!0)}(i,r)&&(s=!0):Hb(i,r)&&(s=!0),s}function Gb(i){if(i.childCount){const t=i.getChild(0);if(t.is("element")&&!t.is("uiElement")&&!t.is("attributeElement"))return t}return null}const Dr=new Map;function W(i,t,e){let n=Dr.get(i);n||(n=new Map,Dr.set(i,n)),n.set(t,e)}function qb(i){return[i]}function pd(i,t,e={}){const n=function(o,r){const s=Dr.get(o);return s&&s.has(r)?s.get(r):qb}(i.constructor,t.constructor);try{return n(i=i.clone(),t,e)}catch(o){throw o}}function Wb(i,t,e){i=i.slice(),t=t.slice();const n=new Yb(e.document,e.useRelations,e.forceWeakRemove);n.setOriginalOperations(i),n.setOriginalOperations(t);const o=n.originalOperations;if(i.length==0||t.length==0)return{operationsA:i,operationsB:t,originalOperations:o};const r=new WeakMap;for(const c of i)r.set(c,0);const s={nextBaseVersionA:i[i.length-1].baseVersion+1,nextBaseVersionB:t[t.length-1].baseVersion+1,originalOperationsACount:i.length,originalOperationsBCount:t.length};let a=0;for(;a<i.length;){const c=i[a],l=r.get(c);if(l==t.length){a++;continue}const d=t[l],h=pd(c,d,n.getContext(c,d,!0)),u=pd(d,c,n.getContext(d,c,!1));n.updateRelation(c,d),n.setOriginalOperations(h,c),n.setOriginalOperations(u,d);for(const g of h)r.set(g,l+u.length);i.splice(a,1,...h),t.splice(l,1,...u)}if(e.padWithNoOps){const c=i.length-s.originalOperationsACount,l=t.length-s.originalOperationsBCount;kd(i,l-c),kd(t,c-l)}return fd(i,s.nextBaseVersionB),fd(t,s.nextBaseVersionA),{operationsA:i,operationsB:t,originalOperations:o}}class Yb{constructor(t,e,n=!1){this.originalOperations=new Map,this._history=t.history,this._useRelations=e,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(t,e=null){const n=e?this.originalOperations.get(e):null;for(const o of t)this.originalOperations.set(o,n||o)}updateRelation(t,e){switch(t.constructor){case tt:switch(e.constructor){case _t:t.targetPosition.isEqual(e.sourcePosition)||e.movedRange.containsPosition(t.targetPosition)?this._setRelation(t,e,"insertAtSource"):t.targetPosition.isEqual(e.deletionPosition)?this._setRelation(t,e,"insertBetween"):t.targetPosition.isAfter(e.sourcePosition)&&this._setRelation(t,e,"moveTargetAfter");break;case tt:t.targetPosition.isEqual(e.sourcePosition)||t.targetPosition.isBefore(e.sourcePosition)?this._setRelation(t,e,"insertBefore"):this._setRelation(t,e,"insertAfter")}break;case ct:switch(e.constructor){case _t:t.splitPosition.isBefore(e.sourcePosition)&&this._setRelation(t,e,"splitBefore");break;case tt:if(t.splitPosition.isEqual(e.sourcePosition)||t.splitPosition.isBefore(e.sourcePosition))this._setRelation(t,e,"splitBefore");else{const n=x._createFromPositionAndShift(e.sourcePosition,e.howMany);if(t.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(t.splitPosition)){const o=n.end.offset-t.splitPosition.offset,r=t.splitPosition.offset-n.start.offset;this._setRelation(t,e,{howMany:o,offset:r})}}}break;case _t:switch(e.constructor){case _t:t.targetPosition.isEqual(e.sourcePosition)||this._setRelation(t,e,"mergeTargetNotMoved"),t.sourcePosition.isEqual(e.targetPosition)&&this._setRelation(t,e,"mergeSourceNotMoved"),t.sourcePosition.isEqual(e.sourcePosition)&&this._setRelation(t,e,"mergeSameElement");break;case ct:t.sourcePosition.isEqual(e.splitPosition)&&this._setRelation(t,e,"splitAtSource")}break;case Ot:{const n=t.newRange;if(!n)return;switch(e.constructor){case tt:{const o=x._createFromPositionAndShift(e.sourcePosition,e.howMany),r=o.containsPosition(n.start)||o.start.isEqual(n.start),s=o.containsPosition(n.end)||o.end.isEqual(n.end);!r&&!s||o.containsRange(n)||this._setRelation(t,e,{side:r?"left":"right",path:r?n.start.path.slice():n.end.path.slice()});break}case _t:{const o=n.start.isEqual(e.targetPosition),r=n.start.isEqual(e.deletionPosition),s=n.end.isEqual(e.deletionPosition),a=n.end.isEqual(e.sourcePosition);(o||r||s||a)&&this._setRelation(t,e,{wasInLeftElement:o,wasStartBeforeMergedElement:r,wasEndBeforeMergedElement:s,wasInRightElement:a});break}}break}}}getContext(t,e,n){return{aIsStrong:n,aWasUndone:this._wasUndone(t),bWasUndone:this._wasUndone(e),abRelation:this._useRelations?this._getRelation(t,e):null,baRelation:this._useRelations?this._getRelation(e,t):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(t){const e=this.originalOperations.get(t);return e.wasUndone||this._history.isUndoneOperation(e)}_getRelation(t,e){const n=this.originalOperations.get(e),o=this._history.getUndoneOperation(n);if(!o)return null;const r=this.originalOperations.get(t),s=this._relations.get(r);return s&&s.get(o)||null}_setRelation(t,e,n){const o=this.originalOperations.get(t),r=this.originalOperations.get(e);let s=this._relations.get(o);s||(s=new Map,this._relations.set(o,s)),s.set(r,n)}}function fd(i,t){for(const e of i)e.baseVersion=t++}function kd(i,t){for(let e=0;e<t;e++)i.push(new Et(0))}function bd(i,t,e){const n=i.nodes.getNode(0).getAttribute(t);if(n==e)return null;const o=new x(i.position,i.position.getShiftedBy(i.howMany));return new wt(o,t,n,e,0)}function wd(i,t){return i.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany)===null}function En(i,t){const e=[];for(let n=0;n<i.length;n++){const o=i[n],r=new tt(o.start,o.end.offset-o.start.offset,t,0);e.push(r);for(let s=n+1;s<i.length;s++)i[s]=i[s]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];t=t._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)}return e}W(wt,wt,(i,t,e)=>{if(i.key===t.key&&i.range.start.hasSameParentAs(t.range.start)){const n=i.range.getDifference(t.range).map(r=>new wt(r,i.key,i.oldValue,i.newValue,0)),o=i.range.getIntersection(t.range);return o&&e.aIsStrong&&n.push(new wt(o,t.key,t.newValue,i.newValue,0)),n.length==0?[new Et(0)]:n}return[i]}),W(wt,xt,(i,t)=>{if(i.range.start.hasSameParentAs(t.position)&&i.range.containsPosition(t.position)){const e=i.range._getTransformedByInsertion(t.position,t.howMany,!t.shouldReceiveAttributes).map(n=>new wt(n,i.key,i.oldValue,i.newValue,i.baseVersion));if(t.shouldReceiveAttributes){const n=bd(t,i.key,i.oldValue);n&&e.unshift(n)}return e}return i.range=i.range._getTransformedByInsertion(t.position,t.howMany,!1)[0],[i]}),W(wt,_t,(i,t)=>{const e=[];i.range.start.hasSameParentAs(t.deletionPosition)&&(i.range.containsPosition(t.deletionPosition)||i.range.start.isEqual(t.deletionPosition))&&e.push(x._createFromPositionAndShift(t.graveyardPosition,1));const n=i.range._getTransformedByMergeOperation(t);return n.isCollapsed||e.push(n),e.map(o=>new wt(o,i.key,i.oldValue,i.newValue,i.baseVersion))}),W(wt,tt,(i,t)=>function(n,o){const r=x._createFromPositionAndShift(o.sourcePosition,o.howMany);let s=null,a=[];r.containsRange(n,!0)?s=n:n.start.hasSameParentAs(r.start)?(a=n.getDifference(r),s=n.getIntersection(r)):a=[n];const c=[];for(let l of a){l=l._getTransformedByDeletion(o.sourcePosition,o.howMany);const d=o.getMovedRangeStart(),h=l.start.hasSameParentAs(d);l=l._getTransformedByInsertion(d,o.howMany,h),c.push(...l)}return s&&c.push(s._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany,!1)[0]),c}(i.range,t).map(n=>new wt(n,i.key,i.oldValue,i.newValue,i.baseVersion))),W(wt,ct,(i,t)=>{if(i.range.end.isEqual(t.insertionPosition))return t.graveyardPosition||i.range.end.offset++,[i];if(i.range.start.hasSameParentAs(t.splitPosition)&&i.range.containsPosition(t.splitPosition)){const e=i.clone();return e.range=new x(t.moveTargetPosition.clone(),i.range.end._getCombined(t.splitPosition,t.moveTargetPosition)),i.range.end=t.splitPosition.clone(),i.range.end.stickiness="toPrevious",[i,e]}return i.range=i.range._getTransformedBySplitOperation(t),[i]}),W(xt,wt,(i,t)=>{const e=[i];if(i.shouldReceiveAttributes&&i.position.hasSameParentAs(t.range.start)&&t.range.containsPosition(i.position)){const n=bd(i,t.key,t.newValue);n&&e.push(n)}return e}),W(xt,xt,(i,t,e)=>(i.position.isEqual(t.position)&&e.aIsStrong||(i.position=i.position._getTransformedByInsertOperation(t)),[i])),W(xt,tt,(i,t)=>(i.position=i.position._getTransformedByMoveOperation(t),[i])),W(xt,ct,(i,t)=>(i.position=i.position._getTransformedBySplitOperation(t),[i])),W(xt,_t,(i,t)=>(i.position=i.position._getTransformedByMergeOperation(t),[i])),W(Ot,xt,(i,t)=>(i.oldRange&&(i.oldRange=i.oldRange._getTransformedByInsertOperation(t)[0]),i.newRange&&(i.newRange=i.newRange._getTransformedByInsertOperation(t)[0]),[i])),W(Ot,Ot,(i,t,e)=>{if(i.name==t.name){if(!e.aIsStrong)return[new Et(0)];i.oldRange=t.newRange?t.newRange.clone():null}return[i]}),W(Ot,_t,(i,t)=>(i.oldRange&&(i.oldRange=i.oldRange._getTransformedByMergeOperation(t)),i.newRange&&(i.newRange=i.newRange._getTransformedByMergeOperation(t)),[i])),W(Ot,tt,(i,t,e)=>{if(i.oldRange&&(i.oldRange=x._createFromRanges(i.oldRange._getTransformedByMoveOperation(t))),i.newRange){if(e.abRelation){const n=x._createFromRanges(i.newRange._getTransformedByMoveOperation(t));if(e.abRelation.side=="left"&&t.targetPosition.isEqual(i.newRange.start))return i.newRange.start.path=e.abRelation.path,i.newRange.end=n.end,[i];if(e.abRelation.side=="right"&&t.targetPosition.isEqual(i.newRange.end))return i.newRange.start=n.start,i.newRange.end.path=e.abRelation.path,[i]}i.newRange=x._createFromRanges(i.newRange._getTransformedByMoveOperation(t))}return[i]}),W(Ot,ct,(i,t,e)=>{if(i.oldRange&&(i.oldRange=i.oldRange._getTransformedBySplitOperation(t)),i.newRange){if(e.abRelation){const n=i.newRange._getTransformedBySplitOperation(t);return i.newRange.start.isEqual(t.splitPosition)&&e.abRelation.wasStartBeforeMergedElement?i.newRange.start=M._createAt(t.insertionPosition):i.newRange.start.isEqual(t.splitPosition)&&!e.abRelation.wasInLeftElement&&(i.newRange.start=M._createAt(t.moveTargetPosition)),i.newRange.end.isEqual(t.splitPosition)&&e.abRelation.wasInRightElement?i.newRange.end=M._createAt(t.moveTargetPosition):i.newRange.end.isEqual(t.splitPosition)&&e.abRelation.wasEndBeforeMergedElement?i.newRange.end=M._createAt(t.insertionPosition):i.newRange.end=n.end,[i]}i.newRange=i.newRange._getTransformedBySplitOperation(t)}return[i]}),W(_t,xt,(i,t)=>(i.sourcePosition.hasSameParentAs(t.position)&&(i.howMany+=t.howMany),i.sourcePosition=i.sourcePosition._getTransformedByInsertOperation(t),i.targetPosition=i.targetPosition._getTransformedByInsertOperation(t),[i])),W(_t,_t,(i,t,e)=>{if(i.sourcePosition.isEqual(t.sourcePosition)&&i.targetPosition.isEqual(t.targetPosition)){if(e.bWasUndone){const n=t.graveyardPosition.path.slice();return n.push(0),i.sourcePosition=new M(t.graveyardPosition.root,n),i.howMany=0,[i]}return[new Et(0)]}if(i.sourcePosition.isEqual(t.sourcePosition)&&!i.targetPosition.isEqual(t.targetPosition)&&!e.bWasUndone&&e.abRelation!="splitAtSource"){const n=i.targetPosition.root.rootName=="$graveyard",o=t.targetPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&e.aIsStrong){const s=t.targetPosition._getTransformedByMergeOperation(t),a=i.targetPosition._getTransformedByMergeOperation(t);return[new tt(s,i.howMany,a,0)]}return[new Et(0)]}return i.sourcePosition.hasSameParentAs(t.targetPosition)&&(i.howMany+=t.howMany),i.sourcePosition=i.sourcePosition._getTransformedByMergeOperation(t),i.targetPosition=i.targetPosition._getTransformedByMergeOperation(t),i.graveyardPosition.isEqual(t.graveyardPosition)&&e.aIsStrong||(i.graveyardPosition=i.graveyardPosition._getTransformedByMergeOperation(t)),[i]}),W(_t,tt,(i,t,e)=>{const n=x._createFromPositionAndShift(t.sourcePosition,t.howMany);return t.type=="remove"&&!e.bWasUndone&&!e.forceWeakRemove&&i.deletionPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(i.sourcePosition)?[new Et(0)]:(i.sourcePosition.hasSameParentAs(t.targetPosition)&&(i.howMany+=t.howMany),i.sourcePosition.hasSameParentAs(t.sourcePosition)&&(i.howMany-=t.howMany),i.sourcePosition=i.sourcePosition._getTransformedByMoveOperation(t),i.targetPosition=i.targetPosition._getTransformedByMoveOperation(t),i.graveyardPosition.isEqual(t.targetPosition)||(i.graveyardPosition=i.graveyardPosition._getTransformedByMoveOperation(t)),[i])}),W(_t,ct,(i,t,e)=>{if(t.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedByDeletion(t.graveyardPosition,1),i.deletionPosition.isEqual(t.graveyardPosition)&&(i.howMany=t.howMany)),i.targetPosition.isEqual(t.splitPosition)){const n=t.howMany!=0,o=t.graveyardPosition&&i.deletionPosition.isEqual(t.graveyardPosition);if(n||o||e.abRelation=="mergeTargetNotMoved")return i.sourcePosition=i.sourcePosition._getTransformedBySplitOperation(t),[i]}if(i.sourcePosition.isEqual(t.splitPosition)){if(e.abRelation=="mergeSourceNotMoved")return i.howMany=0,i.targetPosition=i.targetPosition._getTransformedBySplitOperation(t),[i];if(e.abRelation=="mergeSameElement"||i.sourcePosition.offset>0)return i.sourcePosition=t.moveTargetPosition.clone(),i.targetPosition=i.targetPosition._getTransformedBySplitOperation(t),[i]}return i.sourcePosition.hasSameParentAs(t.splitPosition)&&(i.howMany=t.splitPosition.offset),i.sourcePosition=i.sourcePosition._getTransformedBySplitOperation(t),i.targetPosition=i.targetPosition._getTransformedBySplitOperation(t),[i]}),W(tt,xt,(i,t)=>{const e=x._createFromPositionAndShift(i.sourcePosition,i.howMany)._getTransformedByInsertOperation(t,!1)[0];return i.sourcePosition=e.start,i.howMany=e.end.offset-e.start.offset,i.targetPosition.isEqual(t.position)||(i.targetPosition=i.targetPosition._getTransformedByInsertOperation(t)),[i]}),W(tt,tt,(i,t,e)=>{const n=x._createFromPositionAndShift(i.sourcePosition,i.howMany),o=x._createFromPositionAndShift(t.sourcePosition,t.howMany);let r,s=e.aIsStrong,a=!e.aIsStrong;if(e.abRelation=="insertBefore"||e.baRelation=="insertAfter"?a=!0:e.abRelation!="insertAfter"&&e.baRelation!="insertBefore"||(a=!1),r=i.targetPosition.isEqual(t.targetPosition)&&a?i.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany):i.targetPosition._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),wd(i,t)&&wd(t,i))return[t.getReversed()];if(n.containsPosition(t.targetPosition)&&n.containsRange(o,!0))return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),En([n],r);if(o.containsPosition(i.targetPosition)&&o.containsRange(n,!0))return n.start=n.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),n.end=n.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),En([n],r);const c=St(i.sourcePosition.getParentPath(),t.sourcePosition.getParentPath());if(c=="prefix"||c=="extension")return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),En([n],r);i.type!="remove"||t.type=="remove"||e.aWasUndone||e.forceWeakRemove?i.type=="remove"||t.type!="remove"||e.bWasUndone||e.forceWeakRemove||(s=!1):s=!0;const l=[],d=n.getDifference(o);for(const u of d){u.start=u.start._getTransformedByDeletion(t.sourcePosition,t.howMany),u.end=u.end._getTransformedByDeletion(t.sourcePosition,t.howMany);const g=St(u.start.getParentPath(),t.getMovedRangeStart().getParentPath())=="same",p=u._getTransformedByInsertion(t.getMovedRangeStart(),t.howMany,g);l.push(...p)}const h=n.getIntersection(o);return h!==null&&s&&(h.start=h.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),h.end=h.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),l.length===0?l.push(h):l.length==1?o.start.isBefore(n.start)||o.start.isEqual(n.start)?l.unshift(h):l.push(h):l.splice(1,0,h)),l.length===0?[new Et(i.baseVersion)]:En(l,r)}),W(tt,ct,(i,t,e)=>{let n=i.targetPosition.clone();i.targetPosition.isEqual(t.insertionPosition)&&t.graveyardPosition&&e.abRelation!="moveTargetAfter"||(n=i.targetPosition._getTransformedBySplitOperation(t));const o=x._createFromPositionAndShift(i.sourcePosition,i.howMany);if(o.end.isEqual(t.insertionPosition))return t.graveyardPosition||i.howMany++,i.targetPosition=n,[i];if(o.start.hasSameParentAs(t.splitPosition)&&o.containsPosition(t.splitPosition)){let s=new x(t.splitPosition,o.end);return s=s._getTransformedBySplitOperation(t),En([new x(o.start,t.splitPosition),s],n)}i.targetPosition.isEqual(t.splitPosition)&&e.abRelation=="insertAtSource"&&(n=t.moveTargetPosition),i.targetPosition.isEqual(t.insertionPosition)&&e.abRelation=="insertBetween"&&(n=i.targetPosition);const r=[o._getTransformedBySplitOperation(t)];if(t.graveyardPosition){const s=o.start.isEqual(t.graveyardPosition)||o.containsPosition(t.graveyardPosition);i.howMany>1&&s&&!e.aWasUndone&&r.push(x._createFromPositionAndShift(t.insertionPosition,1))}return En(r,n)}),W(tt,_t,(i,t,e)=>{const n=x._createFromPositionAndShift(i.sourcePosition,i.howMany);if(t.deletionPosition.hasSameParentAs(i.sourcePosition)&&n.containsPosition(t.sourcePosition)){if(i.type!="remove"||e.forceWeakRemove){if(i.howMany==1)return e.bWasUndone?(i.sourcePosition=t.graveyardPosition.clone(),i.targetPosition=i.targetPosition._getTransformedByMergeOperation(t),[i]):[new Et(0)]}else if(!e.aWasUndone){const r=[];let s=t.graveyardPosition.clone(),a=t.targetPosition._getTransformedByMergeOperation(t);i.howMany>1&&(r.push(new tt(i.sourcePosition,i.howMany-1,i.targetPosition,0)),s=s._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany-1),a=a._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany-1));const c=t.deletionPosition._getCombined(i.sourcePosition,i.targetPosition),l=new tt(s,1,c,0),d=l.getMovedRangeStart().path.slice();d.push(0);const h=new M(l.targetPosition.root,d);a=a._getTransformedByMove(s,c,1);const u=new tt(a,t.howMany,h,0);return r.push(l),r.push(u),r}}const o=x._createFromPositionAndShift(i.sourcePosition,i.howMany)._getTransformedByMergeOperation(t);return i.sourcePosition=o.start,i.howMany=o.end.offset-o.start.offset,i.targetPosition=i.targetPosition._getTransformedByMergeOperation(t),[i]}),W(Rt,xt,(i,t)=>(i.position=i.position._getTransformedByInsertOperation(t),[i])),W(Rt,_t,(i,t)=>i.position.isEqual(t.deletionPosition)?(i.position=t.graveyardPosition.clone(),i.position.stickiness="toNext",[i]):(i.position=i.position._getTransformedByMergeOperation(t),[i])),W(Rt,tt,(i,t)=>(i.position=i.position._getTransformedByMoveOperation(t),[i])),W(Rt,Rt,(i,t,e)=>{if(i.position.isEqual(t.position)){if(!e.aIsStrong)return[new Et(0)];i.oldName=t.newName}return[i]}),W(Rt,ct,(i,t)=>{if(St(i.position.path,t.splitPosition.getParentPath())=="same"&&!t.graveyardPosition){const e=new Rt(i.position.getShiftedBy(1),i.oldName,i.newName,0);return[i,e]}return i.position=i.position._getTransformedBySplitOperation(t),[i]}),W(Ee,Ee,(i,t,e)=>{if(i.root===t.root&&i.key===t.key){if(!e.aIsStrong||i.newValue===t.newValue)return[new Et(0)];i.oldValue=t.newValue}return[i]}),W(ct,xt,(i,t)=>(i.splitPosition.hasSameParentAs(t.position)&&i.splitPosition.offset<t.position.offset&&(i.howMany+=t.howMany),i.splitPosition=i.splitPosition._getTransformedByInsertOperation(t),i.insertionPosition=i.insertionPosition._getTransformedByInsertOperation(t),[i])),W(ct,_t,(i,t,e)=>{if(!i.graveyardPosition&&!e.bWasUndone&&i.splitPosition.hasSameParentAs(t.sourcePosition)){const n=t.graveyardPosition.path.slice();n.push(0);const o=new M(t.graveyardPosition.root,n),r=ct.getInsertionPosition(new M(t.graveyardPosition.root,n)),s=new ct(o,0,r,null,0);return i.splitPosition=i.splitPosition._getTransformedByMergeOperation(t),i.insertionPosition=ct.getInsertionPosition(i.splitPosition),i.graveyardPosition=s.insertionPosition.clone(),i.graveyardPosition.stickiness="toNext",[s,i]}return i.splitPosition.hasSameParentAs(t.deletionPosition)&&!i.splitPosition.isAfter(t.deletionPosition)&&i.howMany--,i.splitPosition.hasSameParentAs(t.targetPosition)&&(i.howMany+=t.howMany),i.splitPosition=i.splitPosition._getTransformedByMergeOperation(t),i.insertionPosition=ct.getInsertionPosition(i.splitPosition),i.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedByMergeOperation(t)),[i]}),W(ct,tt,(i,t,e)=>{const n=x._createFromPositionAndShift(t.sourcePosition,t.howMany);if(i.graveyardPosition){const r=n.start.isEqual(i.graveyardPosition)||n.containsPosition(i.graveyardPosition);if(!e.bWasUndone&&r){const s=i.splitPosition._getTransformedByMoveOperation(t),a=i.graveyardPosition._getTransformedByMoveOperation(t),c=a.path.slice();c.push(0);const l=new M(a.root,c);return[new tt(s,i.howMany,l,0)]}i.graveyardPosition=i.graveyardPosition._getTransformedByMoveOperation(t)}const o=i.splitPosition.isEqual(t.targetPosition);if(o&&(e.baRelation=="insertAtSource"||e.abRelation=="splitBefore"))return i.howMany+=t.howMany,i.splitPosition=i.splitPosition._getTransformedByDeletion(t.sourcePosition,t.howMany),i.insertionPosition=ct.getInsertionPosition(i.splitPosition),[i];if(o&&e.abRelation&&e.abRelation.howMany){const{howMany:r,offset:s}=e.abRelation;return i.howMany+=r,i.splitPosition=i.splitPosition.getShiftedBy(s),[i]}if(i.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(i.splitPosition)){const r=t.howMany-(i.splitPosition.offset-t.sourcePosition.offset);return i.howMany-=r,i.splitPosition.hasSameParentAs(t.targetPosition)&&i.splitPosition.offset<t.targetPosition.offset&&(i.howMany+=t.howMany),i.splitPosition=t.sourcePosition.clone(),i.insertionPosition=ct.getInsertionPosition(i.splitPosition),[i]}return t.sourcePosition.isEqual(t.targetPosition)||(i.splitPosition.hasSameParentAs(t.sourcePosition)&&i.splitPosition.offset<=t.sourcePosition.offset&&(i.howMany-=t.howMany),i.splitPosition.hasSameParentAs(t.targetPosition)&&i.splitPosition.offset<t.targetPosition.offset&&(i.howMany+=t.howMany)),i.splitPosition.stickiness="toNone",i.splitPosition=i.splitPosition._getTransformedByMoveOperation(t),i.splitPosition.stickiness="toNext",i.graveyardPosition?i.insertionPosition=i.insertionPosition._getTransformedByMoveOperation(t):i.insertionPosition=ct.getInsertionPosition(i.splitPosition),[i]}),W(ct,ct,(i,t,e)=>{if(i.splitPosition.isEqual(t.splitPosition)){if(!i.graveyardPosition&&!t.graveyardPosition)return[new Et(0)];if(i.graveyardPosition&&t.graveyardPosition&&i.graveyardPosition.isEqual(t.graveyardPosition))return[new Et(0)];if(e.abRelation=="splitBefore")return i.howMany=0,i.graveyardPosition=i.graveyardPosition._getTransformedBySplitOperation(t),[i]}if(i.graveyardPosition&&t.graveyardPosition&&i.graveyardPosition.isEqual(t.graveyardPosition)){const n=i.splitPosition.root.rootName=="$graveyard",o=t.splitPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&e.aIsStrong){const s=[];return t.howMany&&s.push(new tt(t.moveTargetPosition,t.howMany,t.splitPosition,0)),i.howMany&&s.push(new tt(i.splitPosition,i.howMany,i.moveTargetPosition,0)),s}return[new Et(0)]}if(i.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedBySplitOperation(t)),i.splitPosition.isEqual(t.insertionPosition)&&e.abRelation=="splitBefore")return i.howMany++,[i];if(t.splitPosition.isEqual(i.insertionPosition)&&e.baRelation=="splitBefore"){const n=t.insertionPosition.path.slice();n.push(0);const o=new M(t.insertionPosition.root,n);return[i,new tt(i.insertionPosition,1,o,0)]}return i.splitPosition.hasSameParentAs(t.splitPosition)&&i.splitPosition.offset<t.splitPosition.offset&&(i.howMany-=t.howMany),i.splitPosition=i.splitPosition._getTransformedBySplitOperation(t),i.insertionPosition=ct.getInsertionPosition(i.splitPosition),[i]});class Kb extends Pe{constructor(t){super(t),this.domEventType="click"}onDomEvent(t){this.fire(t.type,t)}}class Wo extends Pe{constructor(t){super(t),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(t){this.fire(t.type,t)}}class Dn{constructor(t){this.document=t}createDocumentFragment(t){return new We(this.document,t)}createElement(t,e,n){return new Kt(this.document,t,e,n)}createText(t){return new it(this.document,t)}clone(t,e=!1){return t._clone(e)}appendChild(t,e){return e._appendChild(t)}insertChild(t,e,n){return n._insertChild(t,e)}removeChildren(t,e,n){return n._removeChildren(t,e)}remove(t){const e=t.parent;return e?this.removeChildren(e.getChildIndex(t),1,e):[]}replace(t,e){const n=t.parent;if(n){const o=n.getChildIndex(t);return this.removeChildren(o,1,n),this.insertChild(o,e,n),!0}return!1}unwrapElement(t){const e=t.parent;if(e){const n=e.getChildIndex(t);this.remove(t),this.insertChild(n,t.getChildren(),e)}}rename(t,e){const n=new Kt(this.document,t,e.getAttributes(),e.getChildren());return this.replace(e,n)?n:null}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){Ft(t)&&n===void 0&&(n=e),n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}createPositionAt(t,e){return N._createAt(t,e)}createPositionAfter(t){return N._createAfter(t)}createPositionBefore(t){return N._createBefore(t)}createRange(t,e){return new j(t,e)}createRangeOn(t){return j._createOn(t)}createRangeIn(t){return j._createIn(t)}createSelection(t,e,n){return new oe(t,e,n)}}class $b extends kl{constructor(t,e){super(t),this.view=e,this._toolbarConfig=ql(t.config.get("toolbar")),this._elementReplacer=new Zf}get element(){return this.view.element}init(t){const e=this.editor,n=this.view,o=e.editing.view,r=n.editable,s=o.document.getRoot();r.name=s.rootName,n.render();const a=r.element;this.setEditableElement(r.name,a),this.focusTracker.add(a),n.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(a),t&&this._elementReplacer.replace(t,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){const t=this.view,e=this.editor.editing.view;this._elementReplacer.restore(),e.detachDomRoot(t.editable.name),t.destroy(),super.destroy()}_initToolbar(){const t=this.editor,e=this.view,n=t.editing.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:o})=>o),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),function({origin:o,originKeystrokeHandler:r,originFocusTracker:s,toolbar:a,beforeFocus:c,afterBlur:l}){s.add(a.element),r.set("Alt+F10",(d,h)=>{s.isFocused&&!a.focusTracker.isFocused&&(c&&c(),a.focus(),h())}),a.keystrokes.set("Esc",(d,h)=>{a.focusTracker.isFocused&&(o.focus(),l&&l(),h())})}({origin:n,originFocusTracker:this.focusTracker,originKeystrokeHandler:t.keystrokes,toolbar:e.toolbar})}_initPlaceholder(){const t=this.editor,e=t.editing.view,n=e.document.getRoot(),o=t.sourceElement,r=t.config.get("placeholder")||o&&o.tagName.toLowerCase()==="textarea"&&o.getAttribute("placeholder");r&&ud({view:e,element:n,text:r,isDirectHost:!1,keepOnFocus:!0})}}var _d=S(3143),Qb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(_d.Z,Qb),_d.Z.locals;class Zb extends Eb{constructor(t,e,n={}){super(t),this.stickyPanel=new Fb(t),this.toolbar=new _r(t,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new Ib(t,e)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class Ir extends fl{constructor(t,e={}){if(!Ne(t)&&e.initialData!==void 0)throw new m("editor-create-initial-data",null);super(e),this.config.get("initialData")===void 0&&this.config.set("initialData",function(r){return Ne(r)?(s=r,s instanceof HTMLTextAreaElement?s.value:s.innerHTML):r;var s}(t)),Ne(t)&&(this.sourceElement=t),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),o=new Zb(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new $b(this,o),function(r){if(!Re(r.updateSourceElement))throw new m("attachtoform-missing-elementapi-interface",r);const s=r.sourceElement;if(s&&s.tagName.toLowerCase()==="textarea"&&s.form){let a;const c=s.form,l=()=>r.updateSourceElement();Re(c.submit)&&(a=c.submit,c.submit=()=>{l(),a.apply(c)}),c.addEventListener("submit",l),r.on("destroy",()=>{c.removeEventListener("submit",l),a&&(c.submit=a)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(t,e={}){return new Promise(n=>{const o=new this(t,e);n(o.initPlugins().then(()=>o.ui.init(Ne(t)?t:null)).then(()=>o.data.init(o.config.get("initialData"))).then(()=>o.fire("ready")).then(()=>o))})}}z(Ir,Qk),z(Ir,Zk);class Jb{constructor(t){this.files=function(e){const n=Array.from(e.files||[]),o=Array.from(e.items||[]);return n.length?n:o.filter(r=>r.kind==="file").map(r=>r.getAsFile())}(t),this._native=t}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}set effectAllowed(t){this._native.effectAllowed=t}get effectAllowed(){return this._native.effectAllowed}set dropEffect(t){this._native.dropEffect=t}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}class Mr extends Pe{constructor(t){super(t);const e=this.document;function n(o){return(r,s)=>{s.preventDefault();const a=s.dropRange?[s.dropRange]:null,c=new C(e,o);e.fire(c,{dataTransfer:s.dataTransfer,method:r.name,targetRanges:a,target:s.target}),c.stop.called&&s.stopPropagation()}}this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(e,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"dragover",n("dragging"),{priority:"low"})}onDomEvent(t){const e={dataTransfer:new Jb(t.clipboardData?t.clipboardData:t.dataTransfer)};t.type!="drop"&&t.type!="dragover"||(e.dropRange=function(n,o){const r=o.target.ownerDocument,s=o.clientX,a=o.clientY;let c;return r.caretRangeFromPoint&&r.caretRangeFromPoint(s,a)?c=r.caretRangeFromPoint(s,a):o.rangeParent&&(c=r.createRange(),c.setStart(o.rangeParent,o.rangeOffset),c.collapse(!0)),c?n.domConverter.domRangeToView(c):null}(this.view,t)),this.fire(t.type,t,e)}}const Ad=["figcaption","li"];function Cd(i){let t="";if(i.is("$text")||i.is("$textProxy"))t=i.data;else if(i.is("element","img")&&i.hasAttribute("alt"))t=i.getAttribute("alt");else if(i.is("element","br"))t=`
`;else{let e=null;for(const n of i.getChildren()){const o=Cd(n);e&&(e.is("containerElement")||n.is("containerElement"))&&(Ad.includes(e.name)||Ad.includes(n.name)?t+=`
`:t+=`

`),t+=o,e=n}}return t}class fe extends T{static get pluginName(){return"ClipboardPipeline"}init(){this.editor.editing.view.addObserver(Mr),this._setupPasteDrop(),this._setupCopyCut()}_setupPasteDrop(){const t=this.editor,e=t.model,n=t.editing.view,o=n.document;this.listenTo(o,"clipboardInput",r=>{t.isReadOnly&&r.stop()},{priority:"highest"}),this.listenTo(o,"clipboardInput",(r,s)=>{const a=s.dataTransfer;let c=s.content||"";var l;c||(a.getData("text/html")?c=function(h){return h.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(u,g)=>g.length==1?" ":g).replace(/<!--[\s\S]*?-->/g,"")}(a.getData("text/html")):a.getData("text/plain")&&(((l=(l=a.getData("text/plain")).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r?\n\r?\n/g,"</p><p>").replace(/\r?\n/g,"<br>").replace(/^\s/,"&nbsp;").replace(/\s$/,"&nbsp;").replace(/\s\s/g," &nbsp;")).includes("</p><p>")||l.includes("<br>"))&&(l=`<p>${l}</p>`),c=l),c=this.editor.data.htmlProcessor.toView(c));const d=new C(this,"inputTransformation");this.fire(d,{content:c,dataTransfer:a,targetRanges:s.targetRanges,method:s.method}),d.stop.called&&r.stop(),n.scrollToTheSelection()},{priority:"low"}),this.listenTo(this,"inputTransformation",(r,s)=>{if(s.content.isEmpty)return;const a=this.editor.data.toModel(s.content,"$clipboardHolder");a.childCount!=0&&(r.stop(),e.change(()=>{this.fire("contentInsertion",{content:a,method:s.method,dataTransfer:s.dataTransfer,targetRanges:s.targetRanges})}))},{priority:"low"}),this.listenTo(this,"contentInsertion",(r,s)=>{s.resultRange=e.insertContent(s.content)},{priority:"low"})}_setupCopyCut(){const t=this.editor,e=t.model.document,n=t.editing.view.document;function o(r,s){const a=s.dataTransfer;s.preventDefault();const c=t.data.toView(t.model.getSelectedContent(e.selection));n.fire("clipboardOutput",{dataTransfer:a,content:c,method:r.name})}this.listenTo(n,"copy",o,{priority:"low"}),this.listenTo(n,"cut",(r,s)=>{t.isReadOnly?s.preventDefault():o(r,s)},{priority:"low"}),this.listenTo(n,"clipboardOutput",(r,s)=>{s.content.isEmpty||(s.dataTransfer.setData("text/html",this.editor.data.htmlProcessor.toData(s.content)),s.dataTransfer.setData("text/plain",Cd(s.content))),s.method=="cut"&&t.model.deleteContent(e.selection)},{priority:"low"})}}function*vd(i,t){for(const e of t)e&&i.getAttributeProperties(e[0]).copyOnEnter&&(yield e)}class Xb extends q{execute(){const t=this.editor.model,e=t.document;t.change(n=>{(function(o,r,s,a){const c=s.isCollapsed,l=s.getFirstRange(),d=l.start.parent,h=l.end.parent;if(a.isLimit(d)||a.isLimit(h))return void(c||d!=h||o.deleteContent(s));if(c){const u=vd(r.model.schema,s.getAttributes());yd(r,l.start),r.setSelectionAttribute(u)}else{const u=!(l.start.isAtStart&&l.end.isAtEnd),g=d==h;o.deleteContent(s,{leaveUnmerged:u}),u&&(g?yd(r,s.focus):r.setSelection(h,0))}})(this.editor.model,n,e.selection,t.schema),this.fire("afterExecute",{writer:n})})}}function yd(i,t){i.split(t),i.setSelection(t.parent.nextSibling,0)}class xd extends ge{constructor(t){super(t);const e=this.document;e.on("keydown",(n,o)=>{if(this.isEnabled&&o.keyCode==G.enter){const r=new $n(e,"enter",e.selection.getFirstRange());e.fire(r,new Zi(e,o.domEvent,{isSoft:o.shiftKey})),r.stop.called&&n.stop()}})}observe(){}}class Yo extends T{static get pluginName(){return"Enter"}init(){const t=this.editor,e=t.editing.view,n=e.document;e.addObserver(xd),t.commands.add("enter",new Xb(t)),this.listenTo(n,"enter",(o,r)=>{r.preventDefault(),r.isSoft||(t.execute("enter"),e.scrollToTheSelection())},{priority:"low"})}}class Ed{constructor(t,e=20){this.model=t,this.size=0,this.limit=e,this.isLocked=!1,this._changeCallback=(n,o)=>{o.isLocal&&o.isUndoable&&o!==this._batch&&this._reset(!0)},this._selectionChangeCallback=()=>{this._reset()},this.model.document.on("change",this._changeCallback),this.model.document.selection.on("change:range",this._selectionChangeCallback),this.model.document.selection.on("change:attribute",this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=this.model.createBatch({isTyping:!0})),this._batch}input(t){this.size+=t,this.size>=this.limit&&this._reset(!0)}lock(){this.isLocked=!0}unlock(){this.isLocked=!1}destroy(){this.model.document.off("change",this._changeCallback),this.model.document.selection.off("change:range",this._selectionChangeCallback),this.model.document.selection.off("change:attribute",this._selectionChangeCallback)}_reset(t){this.isLocked&&!t||(this._batch=null,this.size=0)}}class Dd extends q{constructor(t,e){super(t),this.direction=e,this._buffer=new Ed(t.model,t.config.get("typing.undoStep"))}get buffer(){return this._buffer}execute(t={}){const e=this.editor.model,n=e.document;e.enqueueChange(this._buffer.batch,o=>{this._buffer.lock();const r=o.createSelection(t.selection||n.selection),s=t.sequence||1,a=r.isCollapsed;if(r.isCollapsed&&e.modifySelection(r,{direction:this.direction,unit:t.unit,treatEmojiAsSingleUnit:!0}),this._shouldEntireContentBeReplacedWithParagraph(s))return void this._replaceEntireContentWithParagraph(o);if(this._shouldReplaceFirstBlockWithParagraph(r,s))return void this.editor.execute("paragraph",{selection:r});if(r.isCollapsed)return;let c=0;r.getFirstRange().getMinimalFlatRanges().forEach(l=>{c+=Oi(l.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),e.deleteContent(r,{doNotResetEntireContent:a,direction:this.direction}),this._buffer.input(c),o.setSelection(r),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(t){if(t>1)return!1;const e=this.editor.model,n=e.document.selection,o=e.schema.getLimitElement(n);if(!(n.isCollapsed&&n.containsEntireContent(o))||!e.schema.checkChild(o,"paragraph"))return!1;const r=o.getChild(0);return!r||r.name!=="paragraph"}_replaceEntireContentWithParagraph(t){const e=this.editor.model,n=e.document.selection,o=e.schema.getLimitElement(n),r=t.createElement("paragraph");t.remove(t.createRangeIn(o)),t.insert(r,o),t.setSelection(r,0)}_shouldReplaceFirstBlockWithParagraph(t,e){const n=this.editor.model;if(e>1||this.direction!="backward"||!t.isCollapsed)return!1;const o=t.getFirstPosition(),r=n.schema.getLimitElement(o),s=r.getChild(0);return o.parent==s&&!!t.containsEntireContent(s)&&!!n.schema.checkChild(r,"paragraph")&&s.name!="paragraph"}}function Id(i){if(i.newChildren.length-i.oldChildren.length!=1)return;const t=function(n,o){const r=[];let s,a=0;return n.forEach(d=>{d=="equal"?(c(),a++):d=="insert"?(l("insert")?s.values.push(o[a]):(c(),s={type:"insert",index:a,values:[o[a]]}),a++):l("delete")?s.howMany++:(c(),s={type:"delete",index:a,howMany:1})}),c(),r;function c(){s&&(r.push(s),s=null)}function l(d){return s&&s.type==d}}(Be(i.oldChildren,i.newChildren,tw),i.newChildren);if(t.length>1)return;const e=t[0];return e.values[0]&&e.values[0].is("$text")?e:void 0}function tw(i,t){return i&&i.is("$text")&&t&&t.is("$text")?i.data===t.data:i===t}function Md(i,t){const e=t.selection,n=i.shiftKey&&i.keyCode===G.delete,o=!e.isCollapsed;return n&&o}class ew extends ge{constructor(t){super(t);const e=t.document;let n=0;function o(r,s,a){const c=new $n(e,"delete",e.selection.getFirstRange());e.fire(c,new Zi(e,s,a)),c.stop.called&&r.stop()}e.on("keyup",(r,s)=>{s.keyCode!=G.delete&&s.keyCode!=G.backspace||(n=0)}),e.on("keydown",(r,s)=>{if(nt.isWindows&&Md(s,e))return;const a={};if(s.keyCode==G.delete)a.direction="forward",a.unit="character";else{if(s.keyCode!=G.backspace)return;a.direction="backward",a.unit="codePoint"}const c=nt.isMac?s.altKey:s.ctrlKey;a.unit=c?"word":a.unit,a.sequence=++n,o(r,s.domEvent,a)}),nt.isAndroid&&e.on("beforeinput",(r,s)=>{if(s.domEvent.inputType!="deleteContentBackward")return;const a={unit:"codepoint",direction:"backward",sequence:1},c=s.domTarget.ownerDocument.defaultView.getSelection();c.anchorNode==c.focusNode&&c.anchorOffset+1!=c.focusOffset&&(a.selectionToRemove=t.domConverter.domSelectionToView(c)),o(r,s.domEvent,a)})}observe(){}}class ze extends T{static get pluginName(){return"Delete"}init(){const t=this.editor,e=t.editing.view,n=e.document,o=t.model.document;e.addObserver(ew),this._undoOnBackspace=!1;const r=new Dd(t,"forward");if(t.commands.add("deleteForward",r),t.commands.add("forwardDelete",r),t.commands.add("delete",new Dd(t,"backward")),this.listenTo(n,"delete",(s,a)=>{const c={unit:a.unit,sequence:a.sequence};if(a.selectionToRemove){const l=t.model.createSelection(),d=[];for(const h of a.selectionToRemove.getRanges())d.push(t.editing.mapper.toModelRange(h));l.setTo(d),c.selection=l}t.execute(a.direction=="forward"?"deleteForward":"delete",c),a.preventDefault(),e.scrollToTheSelection()},{priority:"low"}),nt.isAndroid){let s=null;this.listenTo(n,"delete",(a,c)=>{const l=c.domTarget.ownerDocument.defaultView.getSelection();s={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}},{priority:"lowest"}),this.listenTo(n,"keyup",(a,c)=>{if(s){const l=c.domTarget.ownerDocument.defaultView.getSelection();l.collapse(s.anchorNode,s.anchorOffset),l.extend(s.focusNode,s.focusOffset),s=null}})}this.editor.plugins.has("UndoEditing")&&(this.listenTo(n,"delete",(s,a)=>{this._undoOnBackspace&&a.direction=="backward"&&a.sequence==1&&a.unit=="codePoint"&&(this._undoOnBackspace=!1,t.execute("undo"),a.preventDefault(),s.stop())},{context:"$capture"}),this.listenTo(o,"change",()=>{this._undoOnBackspace=!1}))}requestUndoOnBackspace(){this.editor.plugins.has("UndoEditing")&&(this._undoOnBackspace=!0)}}class Sd{constructor(){this._stack=[]}add(t,e){const n=this._stack,o=n[0];this._insertDescriptor(t);const r=n[0];o===r||Sr(o,r)||this.fire("change:top",{oldDescriptor:o,newDescriptor:r,writer:e})}remove(t,e){const n=this._stack,o=n[0];this._removeDescriptor(t);const r=n[0];o===r||Sr(o,r)||this.fire("change:top",{oldDescriptor:o,newDescriptor:r,writer:e})}_insertDescriptor(t){const e=this._stack,n=e.findIndex(r=>r.id===t.id);if(Sr(t,e[n]))return;n>-1&&e.splice(n,1);let o=0;for(;e[o]&&nw(e[o],t);)o++;e.splice(o,0,t)}_removeDescriptor(t){const e=this._stack,n=e.findIndex(o=>o.id===t);n>-1&&e.splice(n,1)}}function Sr(i,t){return i&&t&&i.priority==t.priority&&Ko(i.classes)==Ko(t.classes)}function nw(i,t){return i.priority>t.priority||!(i.priority<t.priority)&&Ko(i.classes)>Ko(t.classes)}function Ko(i){return Array.isArray(i)?i.sort().join(","):i}z(Sd,K);const ow='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z"/><path fill-opacity=".256" d="M1 1h14v14H1z"/><g class="ck-icon__selected-indicator"><path d="M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z"/><path fill-opacity=".254" d="M1 1h14v14H1z"/></g></svg>',Td="ck-widget_selected";function ft(i){return!!i.is("element")&&!!i.getCustomProperty("widget")}function Tr(i,t,e={}){if(!i.is("containerElement"))throw new m("widget-to-widget-wrong-element-type",null,{element:i});return t.setAttribute("contenteditable","false",i),t.addClass("ck-widget",i),t.setCustomProperty("widget",!0,i),i.getFillerOffset=aw,e.label&&function(n,o,r){r.setCustomProperty("widgetLabel",o,n)}(i,e.label,t),e.hasSelectionHandle&&function(n,o){const r=o.createUIElement("div",{class:"ck ck-widget__selection-handle"},function(s){const a=this.toDomElement(s),c=new Uo;return c.set("content",ow),c.render(),a.appendChild(c.element),a});o.insert(o.createPositionAt(n,0),r),o.addClass(["ck-widget_with-selection-handle"],n)}(i,t),Nd(i,t),i}function iw(i,t,e){if(t.classes&&e.addClass(vt(t.classes),i),t.attributes)for(const n in t.attributes)e.setAttribute(n,t.attributes[n],i)}function rw(i,t,e){if(t.classes&&e.removeClass(vt(t.classes),i),t.attributes)for(const n in t.attributes)e.removeAttribute(n,i)}function Nd(i,t,e=iw,n=rw){const o=new Sd;o.on("change:top",(r,s)=>{s.oldDescriptor&&n(i,s.oldDescriptor,s.writer),s.newDescriptor&&e(i,s.newDescriptor,s.writer)}),t.setCustomProperty("addHighlight",(r,s,a)=>o.add(s,a),i),t.setCustomProperty("removeHighlight",(r,s,a)=>o.remove(s,a),i)}function sw(i){const t=i.getCustomProperty("widgetLabel");return t?typeof t=="function"?t():t:""}function Bd(i,t){return t.addClass(["ck-editor__editable","ck-editor__nested-editable"],i),t.setAttribute("contenteditable",i.isReadOnly?"false":"true",i),i.on("change:isReadOnly",(e,n,o)=>{t.setAttribute("contenteditable",o?"false":"true",i)}),i.on("change:isFocused",(e,n,o)=>{o?t.addClass("ck-editor__nested-editable_focused",i):t.removeClass("ck-editor__nested-editable_focused",i)}),Nd(i,t),i}function Pd(i,t){const e=i.getSelectedElement();if(e){const n=Le(i);if(n)return t.createRange(t.createPositionAt(e,n))}return sl(i,t)}function aw(){return null}const De="widget-type-around";function Xe(i,t,e){return i&&ft(i)&&!e.isInline(t)}function Le(i){return i.getAttribute(De)}const zd=[ue("arrowUp"),ue("arrowRight"),ue("arrowDown"),ue("arrowLeft"),9,16,17,18,19,20,27,33,34,35,36,45,91,93,144,145,173,174,175,176,177,178,179,255];for(let i=112;i<=135;i++)zd.push(i);function Ld(i){return!(!i.ctrlKey&&!i.metaKey)||zd.includes(i.keyCode)}var Od=S(4921),cw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Od.Z,cw),Od.Z.locals;const Rd=["before","after"],lw=new DOMParser().parseFromString('<svg viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg"><path d="M9.055.263v3.972h-6.77M1 4.216l2-2.038m-2 2 2 2.038"/></svg>',"image/svg+xml").firstChild,jd="ck-widget__type-around_disabled";class dw extends T{static get pluginName(){return"WidgetTypeAround"}static get requires(){return[Yo,ze]}constructor(t){super(t),this._currentFakeCaretModelElement=null}init(){const t=this.editor,e=t.editing.view;this.on("change:isEnabled",(n,o,r)=>{e.change(s=>{for(const a of e.document.roots)r?s.removeClass(jd,a):s.addClass(jd,a)}),r||t.model.change(s=>{s.removeSelectionAttribute(De)})}),this._enableTypeAroundUIInjection(),this._enableInsertingParagraphsOnButtonClick(),this._enableInsertingParagraphsOnEnterKeypress(),this._enableInsertingParagraphsOnTypingKeystroke(),this._enableTypeAroundFakeCaretActivationUsingKeyboardArrows(),this._enableDeleteIntegration(),this._enableInsertContentIntegration(),this._enableInsertObjectIntegration(),this._enableDeleteContentIntegration()}destroy(){this._currentFakeCaretModelElement=null}_insertParagraph(t,e){const n=this.editor,o=n.editing.view,r=n.model.schema.getAttributesWithProperty(t,"copyOnReplace",!0);n.execute("insertParagraph",{position:n.model.createPositionAt(t,e),attributes:r}),o.focus(),o.scrollToTheSelection()}_listenToIfEnabled(t,e,n,o){this.listenTo(t,e,(...r)=>{this.isEnabled&&n(...r)},o)}_insertParagraphAccordingToFakeCaretPosition(){const t=this.editor.model.document.selection,e=Le(t);if(!e)return!1;const n=t.getSelectedElement();return this._insertParagraph(n,e),!0}_enableTypeAroundUIInjection(){const t=this.editor,e=t.model.schema,n=t.locale.t,o={before:n("Insert paragraph before block"),after:n("Insert paragraph after block")};t.editing.downcastDispatcher.on("insert",(r,s,a)=>{const c=a.mapper.toViewElement(s.item);Xe(c,s.item,e)&&function(l,d,h){const u=l.createUIElement("div",{class:"ck ck-reset_all ck-widget__type-around"},function(g){const p=this.toDomElement(g);return function(f,b){for(const w of Rd){const _=new Ut({tag:"div",attributes:{class:["ck","ck-widget__type-around__button",`ck-widget__type-around__button_${w}`],title:b[w]},children:[f.ownerDocument.importNode(lw,!0)]});f.appendChild(_.render())}}(p,d),function(f){const b=new Ut({tag:"div",attributes:{class:["ck","ck-widget__type-around__fake-caret"]}});f.appendChild(b.render())}(p),p});l.insert(l.createPositionAt(h,"end"),u)}(a.writer,o,c)},{priority:"low"})}_enableTypeAroundFakeCaretActivationUsingKeyboardArrows(){const t=this.editor,e=t.model,n=e.document.selection,o=e.schema,r=t.editing.view;function s(a){return`ck-widget_type-around_show-fake-caret_${a}`}this._listenToIfEnabled(r.document,"arrowKey",(a,c)=>{this._handleArrowKeyPress(a,c)},{context:[ft,"$text"],priority:"high"}),this._listenToIfEnabled(n,"change:range",(a,c)=>{c.directChange&&t.model.change(l=>{l.removeSelectionAttribute(De)})}),this._listenToIfEnabled(e.document,"change:data",()=>{const a=n.getSelectedElement();a&&Xe(t.editing.mapper.toViewElement(a),a,o)||t.model.change(c=>{c.removeSelectionAttribute(De)})}),this._listenToIfEnabled(t.editing.downcastDispatcher,"selection",(a,c,l)=>{const d=l.writer;if(this._currentFakeCaretModelElement){const p=l.mapper.toViewElement(this._currentFakeCaretModelElement);p&&(d.removeClass(Rd.map(s),p),this._currentFakeCaretModelElement=null)}const h=c.selection.getSelectedElement();if(!h)return;const u=l.mapper.toViewElement(h);if(!Xe(u,h,o))return;const g=Le(c.selection);g&&(d.addClass(s(g),u),this._currentFakeCaretModelElement=h)}),this._listenToIfEnabled(t.ui.focusTracker,"change:isFocused",(a,c,l)=>{l||t.model.change(d=>{d.removeSelectionAttribute(De)})})}_handleArrowKeyPress(t,e){const n=this.editor,o=n.model,r=o.document.selection,s=o.schema,a=n.editing.view,c=function(h,u){const g=Hi(h,u);return g==="down"||g==="right"}(e.keyCode,n.locale.contentLanguageDirection),l=a.document.selection.getSelectedElement();let d;Xe(l,n.editing.mapper.toModelElement(l),s)?d=this._handleArrowKeyPressOnSelectedWidget(c):r.isCollapsed?d=this._handleArrowKeyPressWhenSelectionNextToAWidget(c):e.shiftKey||(d=this._handleArrowKeyPressWhenNonCollapsedSelection(c)),d&&(e.preventDefault(),t.stop())}_handleArrowKeyPressOnSelectedWidget(t){const e=this.editor.model,n=Le(e.document.selection);return e.change(o=>n?n!==(t?"after":"before")?(o.removeSelectionAttribute(De),!0):!1:(o.setSelectionAttribute(De,t?"after":"before"),!0))}_handleArrowKeyPressWhenSelectionNextToAWidget(t){const e=this.editor,n=e.model,o=n.schema,r=e.plugins.get("Widget"),s=r._getObjectElementNextToSelection(t);return!!Xe(e.editing.mapper.toViewElement(s),s,o)&&(n.change(a=>{r._setSelectionOverElement(s),a.setSelectionAttribute(De,t?"before":"after")}),!0)}_handleArrowKeyPressWhenNonCollapsedSelection(t){const e=this.editor,n=e.model,o=n.schema,r=e.editing.mapper,s=n.document.selection,a=t?s.getLastPosition().nodeBefore:s.getFirstPosition().nodeAfter;return!!Xe(r.toViewElement(a),a,o)&&(n.change(c=>{c.setSelection(a,"on"),c.setSelectionAttribute(De,t?"after":"before")}),!0)}_enableInsertingParagraphsOnButtonClick(){const t=this.editor,e=t.editing.view;this._listenToIfEnabled(e.document,"mousedown",(n,o)=>{const r=o.domTarget.closest(".ck-widget__type-around__button");if(!r)return;const s=function(l){return l.classList.contains("ck-widget__type-around__button_before")?"before":"after"}(r),a=function(l,d){const h=l.closest(".ck-widget");return d.mapDomToView(h)}(r,e.domConverter),c=t.editing.mapper.toModelElement(a);this._insertParagraph(c,s),o.preventDefault(),n.stop()})}_enableInsertingParagraphsOnEnterKeypress(){const t=this.editor,e=t.model.document.selection,n=t.editing.view;this._listenToIfEnabled(n.document,"enter",(o,r)=>{if(o.eventPhase!="atTarget")return;const s=e.getSelectedElement(),a=t.editing.mapper.toViewElement(s),c=t.model.schema;let l;this._insertParagraphAccordingToFakeCaretPosition()?l=!0:Xe(a,s,c)&&(this._insertParagraph(s,r.isSoft?"before":"after"),l=!0),l&&(r.preventDefault(),o.stop())},{context:ft})}_enableInsertingParagraphsOnTypingKeystroke(){const t=this.editor.editing.view,e=[G.enter,G.delete,G.backspace];this._listenToIfEnabled(t.document,"keydown",(n,o)=>{e.includes(o.keyCode)||Ld(o)||this._insertParagraphAccordingToFakeCaretPosition()},{priority:"high"})}_enableDeleteIntegration(){const t=this.editor,e=t.editing.view,n=t.model,o=n.schema;this._listenToIfEnabled(e.document,"delete",(r,s)=>{if(r.eventPhase!="atTarget")return;const a=Le(n.document.selection);if(!a)return;const c=s.direction,l=n.document.selection.getSelectedElement(),d=c=="forward";if(a==="before"===d)t.execute("delete",{selection:n.createSelection(l,"on")});else{const h=o.getNearestSelectionRange(n.createPositionAt(l,a),c);if(h)if(h.isCollapsed){const u=n.createSelection(h.start);if(n.modifySelection(u,{direction:c}),u.focus.isEqual(h.start)){const g=function(p,f){let b=f;for(const w of f.getAncestors({parentFirst:!0})){if(w.childCount>1||p.isLimit(w))break;b=w}return b}(o,h.start.parent);n.deleteContent(n.createSelection(g,"on"),{doNotAutoparagraph:!0})}else n.change(g=>{g.setSelection(h),t.execute(d?"deleteForward":"delete")})}else n.change(u=>{u.setSelection(h),t.execute(d?"deleteForward":"delete")})}s.preventDefault(),r.stop()},{context:ft})}_enableInsertContentIntegration(){const t=this.editor,e=this.editor.model,n=e.document.selection;this._listenToIfEnabled(t.model,"insertContent",(o,[r,s])=>{if(s&&!s.is("documentSelection"))return;const a=Le(n);return a?(o.stop(),e.change(c=>{const l=n.getSelectedElement(),d=e.createPositionAt(l,a),h=c.createSelection(d),u=e.insertContent(r,h);return c.setSelection(h),u})):void 0},{priority:"high"})}_enableInsertObjectIntegration(){const t=this.editor,e=this.editor.model.document.selection;this._listenToIfEnabled(t.model,"insertObject",(n,o)=>{const[,r,,s={}]=o;if(r&&!r.is("documentSelection"))return;const a=Le(e);a&&(s.findOptimalPosition=a,o[3]=s)},{priority:"high"})}_enableDeleteContentIntegration(){const t=this.editor,e=this.editor.model.document.selection;this._listenToIfEnabled(t.model,"deleteContent",(n,[o])=>{o&&!o.is("documentSelection")||Le(e)&&n.stop()},{priority:"high"})}}function hw(i){const t=i.model;return(e,n)=>{const o=n.keyCode==G.arrowup,r=n.keyCode==G.arrowdown,s=n.shiftKey,a=t.document.selection;if(!o&&!r)return;const c=r;if(s&&function(d,h){return!d.isCollapsed&&d.isBackward==h}(a,c))return;const l=function(d,h,u){const g=d.model;if(u){const p=h.isCollapsed?h.focus:h.getLastPosition(),f=Fd(g,p,"forward");if(!f)return null;const b=g.createRange(p,f),w=Vd(g.schema,b,"backward");return w?g.createRange(p,w):null}{const p=h.isCollapsed?h.focus:h.getFirstPosition(),f=Fd(g,p,"backward");if(!f)return null;const b=g.createRange(f,p),w=Vd(g.schema,b,"forward");return w?g.createRange(w,p):null}}(i,a,c);if(l){if(l.isCollapsed&&(a.isCollapsed||s))return;(l.isCollapsed||function(d,h,u){const g=d.model,p=d.view.domConverter;if(u){const I=g.createSelection(h.start);g.modifySelection(I),I.focus.isAtEnd||h.start.isEqual(I.focus)||(h=g.createRange(I.focus,h.end))}const f=d.mapper.toViewRange(h),b=p.viewRangeToDom(f),w=J.getDomRangeRects(b);let _;for(const I of w)if(_!==void 0){if(Math.round(I.top)>=_)return!1;_=Math.max(_,Math.round(I.bottom))}else _=Math.round(I.bottom);return!0}(i,l,c))&&(t.change(d=>{const h=c?l.end:l.start;if(s){const u=t.createSelection(a.anchor);u.setFocus(h),d.setSelection(u)}else d.setSelection(h)}),e.stop(),n.preventDefault(),n.stopPropagation())}}}function Fd(i,t,e){const n=i.schema,o=i.createRangeIn(t.root),r=e=="forward"?"elementStart":"elementEnd";for(const{previousPosition:s,item:a,type:c}of o.getWalker({startPosition:t,direction:e})){if(n.isLimit(a)&&!n.isInline(a))return s;if(c==r&&n.isBlock(a))return null}return null}function Vd(i,t,e){const n=e=="backward"?t.end:t.start;if(i.checkChild(n,"$text"))return n;for(const{nextPosition:o}of t.getWalker({direction:e}))if(i.checkChild(o,"$text"))return o;return null}var Ud=S(3488),uw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Ud.Z,uw),Ud.Z.locals;class lo extends T{static get pluginName(){return"Widget"}static get requires(){return[dw,ze]}init(){const t=this.editor,e=t.editing.view,n=e.document;this._previouslySelected=new Set,this.editor.editing.downcastDispatcher.on("selection",(o,r,s)=>{const a=s.writer,c=r.selection;if(c.isCollapsed)return;const l=c.getSelectedElement();if(!l)return;const d=t.editing.mapper.toViewElement(l);ft(d)&&s.consumable.consume(c,"selection")&&a.setSelection(a.createRangeOn(d),{fake:!0,label:sw(d)})}),this.editor.editing.downcastDispatcher.on("selection",(o,r,s)=>{this._clearPreviouslySelectedWidgets(s.writer);const a=s.writer,c=a.document.selection;let l=null;for(const d of c.getRanges())for(const h of d){const u=h.item;ft(u)&&!gw(u,l)&&(a.addClass(Td,u),this._previouslySelected.add(u),l=u)}},{priority:"low"}),e.addObserver(Wo),this.listenTo(n,"mousedown",(...o)=>this._onMousedown(...o)),this.listenTo(n,"arrowKey",(...o)=>{this._handleSelectionChangeOnArrowKeyPress(...o)},{context:[ft,"$text"]}),this.listenTo(n,"arrowKey",(...o)=>{this._preventDefaultOnArrowKeyPress(...o)},{context:"$root"}),this.listenTo(n,"arrowKey",hw(this.editor.editing),{context:"$text"}),this.listenTo(n,"delete",(o,r)=>{this._handleDelete(r.direction=="forward")&&(r.preventDefault(),o.stop())},{context:"$root"})}_onMousedown(t,e){const n=this.editor,o=n.editing.view,r=o.document;let s=e.target;if(function(c){for(;c;){if(c.is("editableElement")&&!c.is("rootElement"))return!0;if(ft(c))return!1;c=c.parent}return!1}(s)){if((nt.isSafari||nt.isGecko)&&e.domEvent.detail>=3){const c=n.editing.mapper,l=s.is("attributeElement")?s.findAncestor(h=>!h.is("attributeElement")):s,d=c.toModelElement(l);e.preventDefault(),this.editor.model.change(h=>{h.setSelection(d,"in")})}return}if(!ft(s)&&(s=s.findAncestor(ft),!s))return;nt.isAndroid&&e.preventDefault(),r.isFocused||o.focus();const a=n.editing.mapper.toModelElement(s);this._setSelectionOverElement(a)}_handleSelectionChangeOnArrowKeyPress(t,e){const n=e.keyCode,o=this.editor.model,r=o.schema,s=o.document.selection,a=s.getSelectedElement(),c=Hi(n,this.editor.locale.contentLanguageDirection),l=c=="down"||c=="right",d=c=="up"||c=="down";if(a&&r.isObject(a)){const u=l?s.getLastPosition():s.getFirstPosition(),g=r.getNearestSelectionRange(u,l?"forward":"backward");return void(g&&(o.change(p=>{p.setSelection(g)}),e.preventDefault(),t.stop()))}if(!s.isCollapsed&&!e.shiftKey){const u=s.getFirstPosition(),g=s.getLastPosition(),p=u.nodeAfter,f=g.nodeBefore;return void((p&&r.isObject(p)||f&&r.isObject(f))&&(o.change(b=>{b.setSelection(l?g:u)}),e.preventDefault(),t.stop()))}if(!s.isCollapsed)return;const h=this._getObjectElementNextToSelection(l);if(h&&r.isObject(h)){if(r.isInline(h)&&d)return;this._setSelectionOverElement(h),e.preventDefault(),t.stop()}}_preventDefaultOnArrowKeyPress(t,e){const n=this.editor.model,o=n.schema,r=n.document.selection.getSelectedElement();r&&o.isObject(r)&&(e.preventDefault(),t.stop())}_handleDelete(t){if(this.editor.isReadOnly)return;const e=this.editor.model.document.selection;if(!e.isCollapsed)return;const n=this._getObjectElementNextToSelection(t);return n?(this.editor.model.change(o=>{let r=e.anchor.parent;for(;r.isEmpty;){const s=r;r=s.parent,o.remove(s)}this._setSelectionOverElement(n)}),!0):void 0}_setSelectionOverElement(t){this.editor.model.change(e=>{e.setSelection(e.createRangeOn(t))})}_getObjectElementNextToSelection(t){const e=this.editor.model,n=e.schema,o=e.document.selection,r=e.createSelection(o);if(e.modifySelection(r,{direction:t?"forward":"backward"}),r.isEqual(o))return null;const s=t?r.focus.nodeBefore:r.focus.nodeAfter;return s&&n.isObject(s)?s:null}_clearPreviouslySelectedWidgets(t){for(const e of this._previouslySelected)t.removeClass(Td,e);this._previouslySelected.clear()}}function gw(i,t){return!!t&&Array.from(i.getAncestors()).includes(t)}const Hd=function(i,t,e){var n=!0,o=!0;if(typeof i!="function")throw new TypeError("Expected a function");return Z(e)&&(n="leading"in e?!!e.leading:n,o="trailing"in e?!!e.trailing:o),zo(i,t,{leading:n,maxWait:t,trailing:o})};var Gd=S(903),mw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Gd.Z,mw),Gd.Z.locals;class pw extends T{static get pluginName(){return"DragDrop"}static get requires(){return[fe,lo]}init(){const t=this.editor,e=t.editing.view;this._draggedRange=null,this._draggingUid="",this._draggableElement=null,this._updateDropMarkerThrottled=Hd(n=>this._updateDropMarker(n),40),this._removeDropMarkerDelayed=Yd(()=>this._removeDropMarker(),40),this._clearDraggableAttributesDelayed=Yd(()=>this._clearDraggableAttributes(),40),e.addObserver(Mr),e.addObserver(Wo),this._setupDragging(),this._setupContentInsertionIntegration(),this._setupClipboardInputIntegration(),this._setupDropMarker(),this._setupDraggableAttributeHandling(),this.listenTo(t,"change:isReadOnly",(n,o,r)=>{r?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")}),this.on("change:isEnabled",(n,o,r)=>{r||this._finalizeDragging(!1)}),nt.isAndroid&&this.forceDisabled("noAndroidSupport")}destroy(){return this._draggedRange&&(this._draggedRange.detach(),this._draggedRange=null),this._updateDropMarkerThrottled.cancel(),this._removeDropMarkerDelayed.cancel(),this._clearDraggableAttributesDelayed.cancel(),super.destroy()}_setupDragging(){const t=this.editor,e=t.model,n=e.document,o=t.editing.view,r=o.document;this.listenTo(r,"dragstart",(s,a)=>{const c=n.selection;if(a.target&&a.target.is("editableElement"))return void a.preventDefault();const l=a.target?Kd(a.target):null;if(l){const u=t.editing.mapper.toModelElement(l);this._draggedRange=pe.fromRange(e.createRangeOn(u)),t.plugins.has("WidgetToolbarRepository")&&t.plugins.get("WidgetToolbarRepository").forceDisabled("dragDrop")}else if(!r.selection.isCollapsed){const u=r.selection.getSelectedElement();u&&ft(u)||(this._draggedRange=pe.fromRange(c.getFirstRange()))}if(!this._draggedRange)return void a.preventDefault();this._draggingUid=v(),a.dataTransfer.effectAllowed=this.isEnabled?"copyMove":"copy",a.dataTransfer.setData("application/ckeditor5-dragging-uid",this._draggingUid);const d=e.createSelection(this._draggedRange.toRange()),h=t.data.toView(e.getSelectedContent(d));r.fire("clipboardOutput",{dataTransfer:a.dataTransfer,content:h,method:s.name}),this.isEnabled||(this._draggedRange.detach(),this._draggedRange=null,this._draggingUid="")},{priority:"low"}),this.listenTo(r,"dragend",(s,a)=>{this._finalizeDragging(!a.dataTransfer.isCanceled&&a.dataTransfer.dropEffect=="move")},{priority:"low"}),this.listenTo(r,"dragenter",()=>{this.isEnabled&&o.focus()}),this.listenTo(r,"dragleave",()=>{this._removeDropMarkerDelayed()}),this.listenTo(r,"dragging",(s,a)=>{if(!this.isEnabled)return void(a.dataTransfer.dropEffect="none");this._removeDropMarkerDelayed.cancel();const c=qd(t,a.targetRanges,a.target);this._draggedRange||(a.dataTransfer.dropEffect="copy"),nt.isGecko||(a.dataTransfer.effectAllowed=="copy"?a.dataTransfer.dropEffect="copy":["all","copyMove"].includes(a.dataTransfer.effectAllowed)&&(a.dataTransfer.dropEffect="move")),c&&this._updateDropMarkerThrottled(c)},{priority:"low"})}_setupClipboardInputIntegration(){const t=this.editor,e=t.editing.view.document;this.listenTo(e,"clipboardInput",(n,o)=>{if(o.method!="drop")return;const r=qd(t,o.targetRanges,o.target);if(this._removeDropMarker(),!r)return this._finalizeDragging(!1),void n.stop();if(this._draggedRange&&this._draggingUid!=o.dataTransfer.getData("application/ckeditor5-dragging-uid")&&(this._draggedRange.detach(),this._draggedRange=null,this._draggingUid=""),Wd(o.dataTransfer)=="move"&&this._draggedRange&&this._draggedRange.containsRange(r,!0))return this._finalizeDragging(!1),void n.stop();o.targetRanges=[t.editing.mapper.toViewRange(r)]},{priority:"high"})}_setupContentInsertionIntegration(){const t=this.editor.plugins.get(fe);t.on("contentInsertion",(e,n)=>{if(!this.isEnabled||n.method!=="drop")return;const o=n.targetRanges.map(r=>this.editor.editing.mapper.toModelRange(r));this.editor.model.change(r=>r.setSelection(o))},{priority:"high"}),t.on("contentInsertion",(e,n)=>{if(!this.isEnabled||n.method!=="drop")return;const o=Wd(n.dataTransfer)=="move",r=!n.resultRange||!n.resultRange.isCollapsed;this._finalizeDragging(r&&o)},{priority:"lowest"})}_setupDraggableAttributeHandling(){const t=this.editor,e=t.editing.view,n=e.document;this.listenTo(n,"mousedown",(o,r)=>{if(nt.isAndroid||!r)return;this._clearDraggableAttributesDelayed.cancel();let s=Kd(r.target);if(nt.isBlink&&!t.isReadOnly&&!s&&!n.selection.isCollapsed){const a=n.selection.getSelectedElement();a&&ft(a)||(s=n.selection.editableElement)}s&&(e.change(a=>{a.setAttribute("draggable","true",s)}),this._draggableElement=t.editing.mapper.toModelElement(s))}),this.listenTo(n,"mouseup",()=>{nt.isAndroid||this._clearDraggableAttributesDelayed()})}_clearDraggableAttributes(){const t=this.editor.editing;t.view.change(e=>{this._draggableElement&&this._draggableElement.root.rootName!="$graveyard"&&e.removeAttribute("draggable",t.mapper.toViewElement(this._draggableElement)),this._draggableElement=null})}_setupDropMarker(){const t=this.editor;t.conversion.for("editingDowncast").markerToHighlight({model:"drop-target",view:{classes:["ck-clipboard-drop-target-range"]}}),t.conversion.for("editingDowncast").markerToElement({model:"drop-target",view:(e,{writer:n})=>{if(t.model.schema.checkChild(e.markerRange.start,"$text"))return n.createUIElement("span",{class:"ck ck-clipboard-drop-target-position"},function(o){const r=this.toDomElement(o);return r.innerHTML="&NoBreak;<span></span>&NoBreak;",r})}})}_updateDropMarker(t){const e=this.editor,n=e.model.markers;e.model.change(o=>{n.has("drop-target")?n.get("drop-target").getRange().isEqual(t)||o.updateMarker("drop-target",{range:t}):o.addMarker("drop-target",{range:t,usingOperation:!1,affectsData:!1})})}_removeDropMarker(){const t=this.editor.model;this._removeDropMarkerDelayed.cancel(),this._updateDropMarkerThrottled.cancel(),t.markers.has("drop-target")&&t.change(e=>{e.removeMarker("drop-target")})}_finalizeDragging(t){const e=this.editor,n=e.model;this._removeDropMarker(),this._clearDraggableAttributes(),e.plugins.has("WidgetToolbarRepository")&&e.plugins.get("WidgetToolbarRepository").clearForceDisabled("dragDrop"),this._draggingUid="",this._draggedRange&&(t&&this.isEnabled&&n.deleteContent(n.createSelection(this._draggedRange),{doNotAutoparagraph:!0}),this._draggedRange.detach(),this._draggedRange=null)}}function qd(i,t,e){const n=i.model,o=i.editing.mapper;let r=null;const s=t?t[0].start:null;if(e.is("uiElement")&&(e=e.parent),r=function(l,d){const h=l.model,u=l.editing.mapper;if(ft(d))return h.createRangeOn(u.toModelElement(d));if(!d.is("editableElement")){const g=d.findAncestor(p=>ft(p)||p.is("editableElement"));if(ft(g))return h.createRangeOn(u.toModelElement(g))}return null}(i,e),r)return r;const a=function(l,d){const h=l.editing.mapper,u=l.editing.view,g=h.toModelElement(d);if(g)return g;const p=u.createPositionBefore(d),f=h.findMappedViewAncestor(p);return h.toModelElement(f)}(i,e),c=s?o.toModelPosition(s):null;return c?(r=function(l,d,h){const u=l.model;if(!u.schema.checkChild(h,"$block"))return null;const g=u.createPositionAt(h,0),p=d.path.slice(0,g.path.length),f=u.createPositionFromPath(d.root,p).nodeAfter;return f&&u.schema.isObject(f)?u.createRangeOn(f):null}(i,c,a),r||(r=n.schema.getNearestSelectionRange(c,nt.isGecko?"forward":"backward"),r||function(l,d){const h=l.model;for(;d;){if(h.schema.isObject(d))return h.createRangeOn(d);d=d.parent}}(i,c.parent))):function(l,d){const h=l.model,u=h.schema,g=h.createPositionAt(d,0);return u.getNearestSelectionRange(g,"forward")}(i,a)}function Wd(i){return nt.isGecko?i.dropEffect:["all","copyMove"].includes(i.effectAllowed)?"move":"copy"}function Yd(i,t){let e;function n(...o){n.cancel(),e=setTimeout(()=>i(...o),t)}return n.cancel=()=>{clearTimeout(e)},n}function Kd(i){if(i.is("editableElement"))return null;if(i.hasClass("ck-widget__selection-handle"))return i.findAncestor(ft);if(ft(i))return i;const t=i.findAncestor(e=>ft(e)||e.is("editableElement"));return ft(t)?t:null}class fw extends T{static get pluginName(){return"PastePlainText"}static get requires(){return[fe]}init(){const t=this.editor,e=t.model,n=t.editing.view,o=n.document,r=e.document.selection;let s=!1;n.addObserver(Mr),this.listenTo(o,"keydown",(a,c)=>{s=c.shiftKey}),t.plugins.get(fe).on("contentInsertion",(a,c)=>{(s||function(l,d){if(l.childCount>1)return!1;const h=l.getChild(0);return d.isObject(h)?!1:[...h.getAttributeKeys()].length==0}(c.content,e.schema))&&e.change(l=>{const d=Array.from(r.getAttributes()).filter(([u])=>e.schema.getAttributeProperties(u).isFormatting);r.isCollapsed||e.deleteContent(r,{doNotAutoparagraph:!0}),d.push(...r.getAttributes());const h=l.createRangeIn(c.content);for(const u of h.getItems())u.is("$textProxy")&&l.setAttributes(d,u)})})}}class $d extends T{static get pluginName(){return"Clipboard"}static get requires(){return[fe,pw,fw]}}class kw extends q{execute(){const t=this.editor.model,e=t.document;t.change(n=>{(function(o,r,s){const a=s.isCollapsed,c=s.getFirstRange(),l=c.start.parent,d=c.end.parent,h=l==d;if(a){const u=vd(o.schema,s.getAttributes());Qd(o,r,c.end),r.removeSelectionAttribute(s.getAttributeKeys()),r.setSelectionAttribute(u)}else{const u=!(c.start.isAtStart&&c.end.isAtEnd);o.deleteContent(s,{leaveUnmerged:u}),h?Qd(o,r,s.focus):u&&r.setSelection(d,0)}})(t,n,e.selection),this.fire("afterExecute",{writer:n})})}refresh(){const t=this.editor.model,e=t.document;this.isEnabled=function(n,o){if(o.rangeCount>1)return!1;const r=o.anchor;if(!r||!n.checkChild(r,"softBreak"))return!1;const s=o.getFirstRange(),a=s.start.parent,c=s.end.parent;return!((Nr(a,n)||Nr(c,n))&&a!==c)}(t.schema,e.selection)}}function Qd(i,t,e){const n=t.createElement("softBreak");i.insertContent(n,e),t.setSelection(n,"after")}function Nr(i,t){return!i.is("rootElement")&&(t.isLimit(i)||Nr(i.parent,t))}class bw extends T{static get pluginName(){return"ShiftEnter"}init(){const t=this.editor,e=t.model.schema,n=t.conversion,o=t.editing.view,r=o.document;e.register("softBreak",{allowWhere:"$text",isInline:!0}),n.for("upcast").elementToElement({model:"softBreak",view:"br"}),n.for("downcast").elementToElement({model:"softBreak",view:(s,{writer:a})=>a.createEmptyElement("br")}),o.addObserver(xd),t.commands.add("shiftEnter",new kw(t)),this.listenTo(r,"enter",(s,a)=>{a.preventDefault(),a.isSoft&&(t.execute("shiftEnter"),o.scrollToTheSelection())},{priority:"low"})}}class ww extends q{constructor(t){super(t),this.affectsData=!1}execute(){const t=this.editor.model,e=t.document.selection;let n=t.schema.getLimitElement(e);if(e.containsEntireContent(n)||!Zd(t.schema,n))do if(n=n.parent,!n)return;while(!Zd(t.schema,n));t.change(o=>{o.setSelection(n,"in")})}}function Zd(i,t){return i.isLimit(t)&&(i.checkChild(t,"$text")||i.checkChild(t,"paragraph"))}const _w=Ui("Ctrl+A");class Aw extends T{static get pluginName(){return"SelectAllEditing"}init(){const t=this.editor,e=t.editing.view.document;t.commands.add("selectAll",new ww(t)),this.listenTo(e,"keydown",(n,o)=>{ue(o)===_w&&(t.execute("selectAll"),o.preventDefault())})}}class Cw extends T{static get pluginName(){return"SelectAllUI"}init(){const t=this.editor;t.ui.componentFactory.add("selectAll",e=>{const n=t.commands.get("selectAll"),o=new dt(e),r=e.t;return o.set({label:r("Select all"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M.75 15.5a.75.75 0 0 1 .75.75V18l.008.09A.5.5 0 0 0 2 18.5h1.75a.75.75 0 1 1 0 1.5H1.5l-.144-.007a1.5 1.5 0 0 1-1.35-1.349L0 18.5v-2.25a.75.75 0 0 1 .75-.75zm18.5 0a.75.75 0 0 1 .75.75v2.25l-.007.144a1.5 1.5 0 0 1-1.349 1.35L18.5 20h-2.25a.75.75 0 1 1 0-1.5H18a.5.5 0 0 0 .492-.41L18.5 18v-1.75a.75.75 0 0 1 .75-.75zm-10.45 3c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm.45-5.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 1 1 0-1.5h8.5zM1.3 11c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM1.3 7c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 1 1 0-1.5h2.5zm-5 0a.75.75 0 1 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5h5.5zm-6.5-5a.75.75 0 0 1 0 1.5H2a.5.5 0 0 0-.492.41L1.5 2v1.75a.75.75 0 0 1-1.5 0V1.5l.007-.144A1.5 1.5 0 0 1 1.356.006L1.5 0h2.25zM18.5 0l.144.007a1.5 1.5 0 0 1 1.35 1.349L20 1.5v2.25a.75.75 0 1 1-1.5 0V2l-.008-.09A.5.5 0 0 0 18 1.5h-1.75a.75.75 0 1 1 0-1.5h2.25zM8.8 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6z"/></svg>',keystroke:"Ctrl+A",tooltip:!0}),o.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(o,"execute",()=>{t.execute("selectAll"),t.editing.view.focus()}),o})}}class vw extends T{static get requires(){return[Aw,Cw]}static get pluginName(){return"SelectAll"}}class yw extends q{constructor(t,e){super(t),this._buffer=new Ed(t.model,e)}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(t={}){const e=this.editor.model,n=e.document,o=t.text||"",r=o.length,s=t.range?e.createSelection(t.range):n.selection,a=t.resultRange;e.enqueueChange(this._buffer.batch,c=>{this._buffer.lock(),e.deleteContent(s),o&&e.insertContent(c.createText(o,n.selection.getAttributes()),s),a?c.setSelection(a):s.is("documentSelection")||c.setSelection(s),this._buffer.unlock(),this._buffer.input(r)})}}class xw{constructor(t){this.editor=t,this.editing=this.editor.editing}handle(t,e){if(function(n){if(n.length==0)return!1;for(const o of n)if(o.type==="children"&&!Id(o))return!0;return!1}(t))this._handleContainerChildrenMutations(t,e);else for(const n of t)this._handleTextMutation(n,e),this._handleTextNodeInsertion(n)}_handleContainerChildrenMutations(t,e){const n=function(Tt){const Ct=Tt.map(Ht=>Ht.node).reduce((Ht,te)=>Ht.getCommonAncestor(te,{includeSelf:!0}));if(!!Ct)return Ct.getAncestors({includeSelf:!0,parentFirst:!0}).find(Ht=>Ht.is("containerElement")||Ht.is("rootElement"))}(t);if(!n)return;const o=this.editor.editing.view.domConverter.mapViewToDom(n),r=new To(this.editor.editing.view.document),s=this.editor.data.toModel(r.domToView(o)).getChild(0),a=this.editor.editing.mapper.toModelElement(n);if(!a)return;const c=Array.from(s.getChildren()),l=Array.from(a.getChildren()),d=c[c.length-1],h=l[l.length-1],u=d&&d.is("element","softBreak"),g=h&&!h.is("element","softBreak");u&&g&&c.pop();const p=this.editor.model.schema;if(!Jd(c,p)||!Jd(l,p))return;const f=c.map(Tt=>Tt.is("$text")?Tt.data:"@").join("").replace(/\u00A0/g," "),b=l.map(Tt=>Tt.is("$text")?Tt.data:"@").join("").replace(/\u00A0/g," ");if(b===f)return;const w=Be(b,f),{firstChangeAt:_,insertions:I,deletions:P}=Xd(w);let R=null;e&&(R=this.editing.mapper.toModelRange(e.getFirstRange()));const ot=f.substr(_,I),$=this.editor.model.createRange(this.editor.model.createPositionAt(a,_),this.editor.model.createPositionAt(a,_+P));this.editor.execute("input",{text:ot,range:$,resultRange:R})}_handleTextMutation(t,e){if(t.type!="text")return;const n=t.newText.replace(/\u00A0/g," "),o=t.oldText.replace(/\u00A0/g," ");if(o===n)return;const r=Be(o,n),{firstChangeAt:s,insertions:a,deletions:c}=Xd(r);let l=null;e&&(l=this.editing.mapper.toModelRange(e.getFirstRange()));const d=this.editing.view.createPositionAt(t.node,s),h=this.editing.mapper.toModelPosition(d),u=this.editor.model.createRange(h,h.getShiftedBy(c)),g=n.substr(s,a);this.editor.execute("input",{text:g,range:u,resultRange:l})}_handleTextNodeInsertion(t){if(t.type!="children")return;const e=Id(t),n=this.editing.view.createPositionAt(t.node,e.index),o=this.editing.mapper.toModelPosition(n),r=e.values[0].data;this.editor.execute("input",{text:r.replace(/\u00A0/g," "),range:this.editor.model.createRange(o)})}}function Jd(i,t){return i.every(e=>t.isInline(e))}function Xd(i){let t=null,e=null;for(let r=0;r<i.length;r++)i[r]!="equal"&&(t=t===null?r:t,e=r);let n=0,o=0;for(let r=t;r<=e;r++)i[r]!="insert"&&n++,i[r]!="delete"&&o++;return{insertions:o,deletions:n,firstChangeAt:t}}class th extends T{static get pluginName(){return"Input"}init(){const t=this.editor,e=new yw(t,t.config.get("typing.undoStep")||20);t.commands.add("input",e),function(n){let o=null;const r=n.model,s=n.editing.view,a=n.commands.get("input");function c(d){if(nt.isWindows&&Md(d,s.document))return;const h=r.document,u=s.document.isComposing,g=o&&o.isEqual(h.selection);o=null,a.isEnabled&&(Ld(d)||h.selection.isCollapsed||u&&d.keyCode===229||!u&&d.keyCode===229&&g||l())}function l(){const d=a.buffer;d.lock();const h=d.batch;r.enqueueChange(h,()=>{r.deleteContent(r.document.selection)}),d.unlock()}nt.isAndroid?s.document.on("beforeinput",(d,h)=>c(h),{priority:"lowest"}):s.document.on("keydown",(d,h)=>c(h),{priority:"lowest"}),s.document.on("compositionstart",function(){const d=r.document,h=d.selection.rangeCount!==1||d.selection.getFirstRange().isFlat;d.selection.isCollapsed||h||l()},{priority:"lowest"}),s.document.on("compositionend",()=>{o=r.createSelection(r.document.selection)},{priority:"lowest"})}(t),function(n){n.editing.view.document.on("mutations",(o,r,s)=>{new xw(n).handle(r,s)})}(t)}}class Ew extends T{static get requires(){return[th,ze]}static get pluginName(){return"Typing"}}function eh(i,t){let e=i.start;return{text:Array.from(i.getItems()).reduce((n,o)=>o.is("$text")||o.is("$textProxy")?n+o.data:(e=t.createPositionAfter(o),""),""),range:t.createRange(e,i.end)}}class Br{constructor(t,e){this.model=t,this.testCallback=e,this.hasMatch=!1,this.set("isEnabled",!0),this.on("change:isEnabled",()=>{this.isEnabled?this._startListening():(this.stopListening(t.document.selection),this.stopListening(t.document))}),this._startListening()}_startListening(){const t=this.model.document;this.listenTo(t.selection,"change:range",(e,{directChange:n})=>{n&&(t.selection.isCollapsed?this._evaluateTextBeforeSelection("selection"):this.hasMatch&&(this.fire("unmatched"),this.hasMatch=!1))}),this.listenTo(t,"change:data",(e,n)=>{!n.isUndo&&n.isLocal&&this._evaluateTextBeforeSelection("data",{batch:n})})}_evaluateTextBeforeSelection(t,e={}){const n=this.model,o=n.document.selection,r=n.createRange(n.createPositionAt(o.focus.parent,0),o.focus),{text:s,range:a}=eh(r,n),c=this.testCallback(s);if(!c&&this.hasMatch&&this.fire("unmatched"),this.hasMatch=!!c,c){const l=Object.assign(e,{text:s,range:a});typeof c=="object"&&Object.assign(l,c),this.fire(`matched:${t}`,l)}}}z(Br,st);class nh extends T{static get pluginName(){return"TwoStepCaretMovement"}constructor(t){super(t),this.attributes=new Set,this._overrideUid=null}init(){const t=this.editor,e=t.model,n=t.editing.view,o=t.locale,r=e.document.selection;this.listenTo(n.document,"arrowKey",(s,a)=>{if(!r.isCollapsed||a.shiftKey||a.altKey||a.ctrlKey)return;const c=a.keyCode==G.arrowright,l=a.keyCode==G.arrowleft;if(!c&&!l)return;const d=o.contentLanguageDirection;let h=!1;h=d==="ltr"&&c||d==="rtl"&&l?this._handleForwardMovement(a):this._handleBackwardMovement(a),h===!0&&s.stop()},{context:"$text",priority:"highest"}),this._isNextGravityRestorationSkipped=!1,this.listenTo(r,"change:range",(s,a)=>{this._isNextGravityRestorationSkipped?this._isNextGravityRestorationSkipped=!1:this._isGravityOverridden&&(!a.directChange&&Qo(r.getFirstPosition(),this.attributes)||this._restoreGravity())})}registerAttribute(t){this.attributes.add(t)}_handleForwardMovement(t){const e=this.attributes,n=this.editor.model.document.selection,o=n.getFirstPosition();return!this._isGravityOverridden&&(!o.isAtStart||!Pr(n,e))&&(Qo(o,e)?($o(t),this._overrideGravity(),!0):void 0)}_handleBackwardMovement(t){const e=this.attributes,n=this.editor.model,o=n.document.selection,r=o.getFirstPosition();return this._isGravityOverridden?($o(t),this._restoreGravity(),zr(n,e,r),!0):r.isAtStart?!!Pr(o,e)&&($o(t),zr(n,e,r),!0):function(s,a){return Qo(s.getShiftedBy(-1),a)}(r,e)?r.isAtEnd&&!Pr(o,e)&&Qo(r,e)?($o(t),zr(n,e,r),!0):(this._isNextGravityRestorationSkipped=!0,this._overrideGravity(),!1):void 0}get _isGravityOverridden(){return!!this._overrideUid}_overrideGravity(){this._overrideUid=this.editor.model.change(t=>t.overrideSelectionGravity())}_restoreGravity(){this.editor.model.change(t=>{t.restoreSelectionGravity(this._overrideUid),this._overrideUid=null})}}function Pr(i,t){for(const e of t)if(i.hasAttribute(e))return!0;return!1}function zr(i,t,e){const n=e.nodeBefore;i.change(o=>{n?o.setSelectionAttribute(n.getAttributes()):o.removeSelectionAttribute(t)})}function $o(i){i.preventDefault()}function Qo(i,t){const{nodeBefore:e,nodeAfter:n}=i;for(const o of t){const r=e?e.getAttribute(o):void 0;if((n?n.getAttribute(o):void 0)!==r)return!0}return!1}var oh=/[\\^$.*+?()[\]{}|]/g,Dw=RegExp(oh.source);const Iw=function(i){return(i=Si(i))&&Dw.test(i)?i.replace(oh,"\\$&"):i},Mw={copyright:{from:"(c)",to:"\xA9"},registeredTrademark:{from:"(r)",to:"\xAE"},trademark:{from:"(tm)",to:"\u2122"},oneHalf:{from:/(^|[^/a-z0-9])(1\/2)([^/a-z0-9])$/i,to:[null,"\xBD",null]},oneThird:{from:/(^|[^/a-z0-9])(1\/3)([^/a-z0-9])$/i,to:[null,"\u2153",null]},twoThirds:{from:/(^|[^/a-z0-9])(2\/3)([^/a-z0-9])$/i,to:[null,"\u2154",null]},oneForth:{from:/(^|[^/a-z0-9])(1\/4)([^/a-z0-9])$/i,to:[null,"\xBC",null]},threeQuarters:{from:/(^|[^/a-z0-9])(3\/4)([^/a-z0-9])$/i,to:[null,"\xBE",null]},lessThanOrEqual:{from:"<=",to:"\u2264"},greaterThanOrEqual:{from:">=",to:"\u2265"},notEqual:{from:"!=",to:"\u2260"},arrowLeft:{from:"<-",to:"\u2190"},arrowRight:{from:"->",to:"\u2192"},horizontalEllipsis:{from:"...",to:"\u2026"},enDash:{from:/(^| )(--)( )$/,to:[null,"\u2013",null]},emDash:{from:/(^| )(---)( )$/,to:[null,"\u2014",null]},quotesPrimary:{from:In('"'),to:[null,"\u201C",null,"\u201D"]},quotesSecondary:{from:In("'"),to:[null,"\u2018",null,"\u2019"]},quotesPrimaryEnGb:{from:In("'"),to:[null,"\u2018",null,"\u2019"]},quotesSecondaryEnGb:{from:In('"'),to:[null,"\u201C",null,"\u201D"]},quotesPrimaryPl:{from:In('"'),to:[null,"\u201E",null,"\u201D"]},quotesSecondaryPl:{from:In("'"),to:[null,"\u201A",null,"\u2019"]}},ih={symbols:["copyright","registeredTrademark","trademark"],mathematical:["oneHalf","oneThird","twoThirds","oneForth","threeQuarters","lessThanOrEqual","greaterThanOrEqual","notEqual","arrowLeft","arrowRight"],typography:["horizontalEllipsis","enDash","emDash"],quotes:["quotesPrimary","quotesSecondary"]},Sw=["symbols","mathematical","typography","quotes"];function Tw(i){return typeof i=="string"?new RegExp(`(${Iw(i)})$`):i}function Nw(i){return typeof i=="string"?()=>[i]:i instanceof Array?()=>i:i}function Bw(i){return(i.textNode?i.textNode:i.nodeAfter).getAttributes()}function In(i){return new RegExp(`(^|\\s)(${i})([^${i}]*)(${i})$`)}function Mn(i,t,e,n){return n.createRange(rh(i,t,e,!0,n),rh(i,t,e,!1,n))}function rh(i,t,e,n,o){let r=i.textNode||(n?i.nodeBefore:i.nodeAfter),s=null;for(;r&&r.getAttribute(t)==e;)s=r,r=n?r.previousSibling:r.nextSibling;return s?o.createPositionAt(s,n?"before":"after"):i}class sh extends q{constructor(t){super(t),this._stack=[],this._createdBatches=new WeakSet,this.refresh(),this.listenTo(t.data,"set",(e,n)=>{n[1]={...n[1]};const o=n[1];o.batchType||(o.batchType={isUndoable:!1})},{priority:"high"}),this.listenTo(t.data,"set",(e,n)=>{n[1].batchType.isUndoable||this.clearStack()})}refresh(){this.isEnabled=this._stack.length>0}addBatch(t){const e=this.editor.model.document.selection,n={ranges:e.hasOwnRange?Array.from(e.getRanges()):[],isBackward:e.isBackward};this._stack.push({batch:t,selection:n}),this.refresh()}clearStack(){this._stack=[],this.refresh()}_restoreSelection(t,e,n){const o=this.editor.model,r=o.document,s=[],a=t.map(l=>l.getTransformedByOperations(n)),c=a.flat();for(const l of a){const d=l.filter(h=>h.root!=r.graveyard).filter(h=>!zw(h,c));d.length&&(Pw(d),s.push(d[0]))}s.length&&o.change(l=>{l.setSelection(s,{backward:e})})}_undo(t,e){const n=this.editor.model,o=n.document;this._createdBatches.add(e);const r=t.operations.slice().filter(s=>s.isDocumentOperation);r.reverse();for(const s of r){const a=s.baseVersion+1,c=Array.from(o.history.getOperations(a)),l=Wb([s.getReversed()],c,{useRelations:!0,document:this.editor.model.document,padWithNoOps:!1,forceWeakRemove:!0}).operationsA;for(const d of l)e.addOperation(d),n.applyOperation(d),o.history.setOperationAsUndone(s,d)}}}function Pw(i){i.sort((t,e)=>t.start.isBefore(e.start)?-1:1);for(let t=1;t<i.length;t++){const e=i[t-1].getJoined(i[t],!0);e&&(t--,i.splice(t,2,e))}}function zw(i,t){return t.some(e=>e!==i&&e.containsRange(i,!0))}class Lw extends sh{execute(t=null){const e=t?this._stack.findIndex(r=>r.batch==t):this._stack.length-1,n=this._stack.splice(e,1)[0],o=this.editor.model.createBatch({isUndo:!0});this.editor.model.enqueueChange(o,()=>{this._undo(n.batch,o);const r=this.editor.model.document.history.getOperations(n.batch.baseVersion);this._restoreSelection(n.selection.ranges,n.selection.isBackward,r),this.fire("revert",n.batch,o)}),this.refresh()}}class Ow extends sh{execute(){const t=this._stack.pop(),e=this.editor.model.createBatch({isUndo:!0});this.editor.model.enqueueChange(e,()=>{const n=t.batch.operations[t.batch.operations.length-1].baseVersion+1,o=this.editor.model.document.history.getOperations(n);this._restoreSelection(t.selection.ranges,t.selection.isBackward,o),this._undo(t.batch,e)}),this.refresh()}}class Rw extends T{static get pluginName(){return"UndoEditing"}constructor(t){super(t),this._batchRegistry=new WeakSet}init(){const t=this.editor;this._undoCommand=new Lw(t),this._redoCommand=new Ow(t),t.commands.add("undo",this._undoCommand),t.commands.add("redo",this._redoCommand),this.listenTo(t.model,"applyOperation",(e,n)=>{const o=n[0];if(!o.isDocumentOperation)return;const r=o.batch,s=this._redoCommand._createdBatches.has(r),a=this._undoCommand._createdBatches.has(r);this._batchRegistry.has(r)||(this._batchRegistry.add(r),r.isUndoable&&(s?this._undoCommand.addBatch(r):a||(this._undoCommand.addBatch(r),this._redoCommand.clearStack())))},{priority:"highest"}),this.listenTo(this._undoCommand,"revert",(e,n,o)=>{this._redoCommand.addBatch(o)}),t.keystrokes.set("CTRL+Z","undo"),t.keystrokes.set("CTRL+Y","redo"),t.keystrokes.set("CTRL+SHIFT+Z","redo")}}const ah='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"/></svg>',ch='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"/></svg>';class jw extends T{static get pluginName(){return"UndoUI"}init(){const t=this.editor,e=t.locale,n=t.t,o=e.uiLanguageDirection=="ltr"?ah:ch,r=e.uiLanguageDirection=="ltr"?ch:ah;this._addButton("undo",n("Undo"),"CTRL+Z",o),this._addButton("redo",n("Redo"),"CTRL+Y",r)}_addButton(t,e,n,o){const r=this.editor;r.ui.componentFactory.add(t,s=>{const a=r.commands.get(t),c=new dt(s);return c.set({label:e,icon:o,keystroke:n,tooltip:!0}),c.bind("isEnabled").to(a,"isEnabled"),this.listenTo(c,"execute",()=>{r.execute(t),r.editing.view.focus()}),c})}}class lh extends T{static get requires(){return[Rw,jw]}static get pluginName(){return"Undo"}}class dh{constructor(){const t=new window.FileReader;this._reader=t,this._data=void 0,this.set("loaded",0),t.onprogress=e=>{this.loaded=e.loaded}}get error(){return this._reader.error}get data(){return this._data}read(t){const e=this._reader;return this.total=t.size,new Promise((n,o)=>{e.onload=()=>{const r=e.result;this._data=r,n(r)},e.onerror=()=>{o("error")},e.onabort=()=>{o("aborted")},this._reader.readAsDataURL(t)})}abort(){this._reader.abort()}}z(dh,st);class Jt extends T{static get pluginName(){return"FileRepository"}static get requires(){return[bl]}init(){this.loaders=new Yt,this.loaders.on("add",()=>this._updatePendingAction()),this.loaders.on("remove",()=>this._updatePendingAction()),this._loadersMap=new Map,this._pendingAction=null,this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(t,e)=>e?t/e*100:0)}getLoader(t){return this._loadersMap.get(t)||null}createLoader(t){if(!this.createUploadAdapter)return A("filerepository-no-upload-adapter"),null;const e=new Lr(Promise.resolve(t),this.createUploadAdapter);return this.loaders.add(e),this._loadersMap.set(t,e),t instanceof Promise&&e.file.then(n=>{this._loadersMap.set(n,e)}).catch(()=>{}),e.on("change:uploaded",()=>{let n=0;for(const o of this.loaders)n+=o.uploaded;this.uploaded=n}),e.on("change:uploadTotal",()=>{let n=0;for(const o of this.loaders)o.uploadTotal&&(n+=o.uploadTotal);this.uploadTotal=n}),e}destroyLoader(t){const e=t instanceof Lr?t:this.getLoader(t);e._destroy(),this.loaders.remove(e),this._loadersMap.forEach((n,o)=>{n===e&&this._loadersMap.delete(o)})}_updatePendingAction(){const t=this.editor.plugins.get(bl);if(this.loaders.length){if(!this._pendingAction){const e=this.editor.t,n=o=>`${e("Upload in progress")} ${parseInt(o)}%.`;this._pendingAction=t.add(n(this.uploadedPercent)),this._pendingAction.bind("message").to(this,"uploadedPercent",n)}}else t.remove(this._pendingAction),this._pendingAction=null}}z(Jt,st);class Lr{constructor(t,e){this.id=v(),this._filePromiseWrapper=this._createFilePromiseWrapper(t),this._adapter=e(this),this._reader=new dh,this.set("status","idle"),this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(n,o)=>o?n/o*100:0),this.set("uploadResponse",null)}get file(){return this._filePromiseWrapper?this._filePromiseWrapper.promise.then(t=>this._filePromiseWrapper?t:null):Promise.resolve(null)}get data(){return this._reader.data}read(){if(this.status!="idle")throw new m("filerepository-read-wrong-status",this);return this.status="reading",this.file.then(t=>this._reader.read(t)).then(t=>{if(this.status!=="reading")throw this.status;return this.status="idle",t}).catch(t=>{throw t==="aborted"?(this.status="aborted","aborted"):(this.status="error",this._reader.error?this._reader.error:t)})}upload(){if(this.status!="idle")throw new m("filerepository-upload-wrong-status",this);return this.status="uploading",this.file.then(()=>this._adapter.upload()).then(t=>(this.uploadResponse=t,this.status="idle",t)).catch(t=>{throw this.status==="aborted"?"aborted":(this.status="error",t)})}abort(){const t=this.status;this.status="aborted",this._filePromiseWrapper.isFulfilled?t=="reading"?this._reader.abort():t=="uploading"&&this._adapter.abort&&this._adapter.abort():(this._filePromiseWrapper.promise.catch(()=>{}),this._filePromiseWrapper.rejecter("aborted")),this._destroy()}_destroy(){this._filePromiseWrapper=void 0,this._reader=void 0,this._adapter=void 0,this.uploadResponse=void 0}_createFilePromiseWrapper(t){const e={};return e.promise=new Promise((n,o)=>{e.rejecter=o,e.isFulfilled=!1,t.then(r=>{e.isFulfilled=!0,n(r)}).catch(r=>{e.isFulfilled=!0,o(r)})}),e}}z(Lr,st);class Fw extends H{constructor(t){super(t),this.buttonView=new dt(t),this._fileInputView=new Vw(t),this._fileInputView.bind("acceptedType").to(this),this._fileInputView.bind("allowMultipleFiles").to(this),this._fileInputView.delegate("done").to(this),this.setTemplate({tag:"span",attributes:{class:"ck-file-dialog-button"},children:[this.buttonView,this._fileInputView]}),this.buttonView.on("execute",()=>{this._fileInputView.open()})}focus(){this.buttonView.focus()}}class Vw extends H{constructor(t){super(t),this.set("acceptedType"),this.set("allowMultipleFiles",!1);const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck-hidden"],type:"file",tabindex:"-1",accept:e.to("acceptedType"),multiple:e.to("allowMultipleFiles")},on:{change:e.to(()=>{this.element&&this.element.files&&this.element.files.length&&this.fire("done",this.element.files),this.element.value=""})}})}open(){this.element.click()}}const hh="ckCsrfToken",uh="abcdefghijklmnopqrstuvwxyz0123456789";function Uw(){let i=function(n){n=n.toLowerCase();const o=document.cookie.split(";");for(const r of o){const s=r.split("=");if(decodeURIComponent(s[0].trim().toLowerCase())===n)return decodeURIComponent(s[1])}return null}(hh);var t,e;return i&&i.length==40||(i=function(n){let o="";const r=new Uint8Array(n);window.crypto.getRandomValues(r);for(let s=0;s<r.length;s++){const a=uh.charAt(r[s]%uh.length);o+=Math.random()>.5?a.toUpperCase():a}return o}(40),t=hh,e=i,document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+";path=/"),i}class Hw{constructor(t,e,n){this.loader=t,this.url=e,this.t=n}upload(){return this.loader.file.then(t=>new Promise((e,n)=>{this._initRequest(),this._initListeners(e,n,t),this._sendRequest(t)}))}abort(){this.xhr&&this.xhr.abort()}_initRequest(){const t=this.xhr=new XMLHttpRequest;t.open("POST",this.url,!0),t.responseType="json"}_initListeners(t,e,n){const o=this.xhr,r=this.loader,s=(0,this.t)("Cannot upload file:")+` ${n.name}.`;o.addEventListener("error",()=>e(s)),o.addEventListener("abort",()=>e()),o.addEventListener("load",()=>{const a=o.response;if(!a||!a.uploaded)return e(a&&a.error&&a.error.message?a.error.message:s);t({default:a.url})}),o.upload&&o.upload.addEventListener("progress",a=>{a.lengthComputable&&(r.uploadTotal=a.total,r.uploaded=a.loaded)})}_sendRequest(t){const e=new FormData;e.append("upload",t),e.append("ckCsrfToken",Uw()),this.xhr.send(e)}}function Oe(i,t,e,n){let o,r=null;typeof n=="function"?o=n:(r=i.commands.get(n),o=()=>{i.execute(n)}),i.model.document.on("change:data",(s,a)=>{if(r&&!r.isEnabled||!t.isEnabled)return;const c=yt(i.model.document.selection.getRanges());if(!c.isCollapsed||a.isUndo||!a.isLocal)return;const l=Array.from(i.model.document.differ.getChanges()),d=l[0];if(l.length!=1||d.type!=="insert"||d.name!="$text"||d.length!=1)return;const h=d.position.parent;if(h.is("element","codeBlock")||h.is("element","listItem")&&typeof n!="function"&&!["numberedList","bulletedList","todoList"].includes(n)||r&&r.value===!0)return;const u=h.getChild(0),g=i.model.createRangeOn(u);if(!g.containsRange(c)&&!c.end.isEqual(g.end))return;const p=e.exec(u.data.substr(0,c.end.offset));p&&i.model.enqueueChange(f=>{const b=f.createPositionAt(h,0),w=f.createPositionAt(h,p[0].length),_=new pe(b,w);if(o({match:p})!==!1){f.remove(_);const I=i.model.document.selection.getFirstRange(),P=f.createRangeIn(h);!h.isEmpty||P.isEqual(I)||P.containsRange(I,!0)||f.remove(h)}_.detach(),i.model.enqueueChange(()=>{i.plugins.get("Delete").requestUndoOnBackspace()})})})}function Sn(i,t,e,n){let o,r;e instanceof RegExp?o=e:r=e,r=r||(s=>{let a;const c=[],l=[];for(;(a=o.exec(s))!==null&&!(a&&a.length<4);){let{index:d,1:h,2:u,3:g}=a;const p=h+u+g;d+=a[0].length-p.length;const f=[d,d+h.length],b=[d+h.length+u.length,d+h.length+u.length+g.length];c.push(f),c.push(b),l.push([d+h.length,d+h.length+u.length])}return{remove:c,format:l}}),i.model.document.on("change:data",(s,a)=>{if(a.isUndo||!a.isLocal||!t.isEnabled)return;const c=i.model,l=c.document.selection;if(!l.isCollapsed)return;const d=Array.from(c.document.differ.getChanges()),h=d[0];if(d.length!=1||h.type!=="insert"||h.name!="$text"||h.length!=1)return;const u=l.focus,g=u.parent,{text:p,range:f}=function(I,P){let R=I.start;return{text:Array.from(I.getItems()).reduce((ot,$)=>!$.is("$text")&&!$.is("$textProxy")||$.getAttribute("code")?(R=P.createPositionAfter($),""):ot+$.data,""),range:P.createRange(R,I.end)}}(c.createRange(c.createPositionAt(g,0),u),c),b=r(p),w=gh(f.start,b.format,c),_=gh(f.start,b.remove,c);w.length&&_.length&&c.enqueueChange(I=>{if(n(I,w)!==!1){for(const P of _.reverse())I.remove(P);c.enqueueChange(()=>{i.plugins.get("Delete").requestUndoOnBackspace()})}})})}function gh(i,t,e){return t.filter(n=>n[0]!==void 0&&n[1]!==void 0).map(n=>e.createRange(i.getShiftedBy(n[0]),i.getShiftedBy(n[1])))}function Zo(i,t){return(e,n)=>{if(!i.commands.get(t).isEnabled)return!1;const o=i.model.schema.getValidRanges(n,t);for(const r of o)e.setAttribute(t,!0,r);e.removeSelectionAttribute(t)}}class mh extends q{constructor(t,e){super(t),this.attributeKey=e}refresh(){const t=this.editor.model,e=t.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,this.attributeKey)}execute(t={}){const e=this.editor.model,n=e.document.selection,o=t.forceValue===void 0?!this.value:t.forceValue;e.change(r=>{if(n.isCollapsed)o?r.setSelectionAttribute(this.attributeKey,!0):r.removeSelectionAttribute(this.attributeKey);else{const s=e.schema.getValidRanges(n.getRanges(),this.attributeKey);for(const a of s)o?r.setAttribute(this.attributeKey,o,a):r.removeAttribute(this.attributeKey,a)}})}_getValueFromFirstAllowedNode(){const t=this.editor.model,e=t.schema,n=t.document.selection;if(n.isCollapsed)return n.hasAttribute(this.attributeKey);for(const o of n.getRanges())for(const r of o.getItems())if(e.checkAttribute(r,this.attributeKey))return r.hasAttribute(this.attributeKey);return!1}}const Tn="bold";class Gw extends T{static get pluginName(){return"BoldEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:Tn}),t.model.schema.setAttributeProperties(Tn,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:Tn,view:"strong",upcastAlso:["b",e=>{const n=e.getStyle("font-weight");return n?n=="bold"||Number(n)>=600?{name:!0,styles:["font-weight"]}:void 0:null}]}),t.commands.add(Tn,new mh(t,Tn)),t.keystrokes.set("CTRL+B",Tn)}}const Or="bold";class qw extends T{static get pluginName(){return"BoldUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(Or,n=>{const o=t.commands.get(Or),r=new dt(n);return r.set({label:e("Bold"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>',keystroke:"CTRL+B",tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(r,"execute",()=>{t.execute(Or),t.editing.view.focus()}),r})}}const Nn="italic";class Ww extends T{static get pluginName(){return"ItalicEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:Nn}),t.model.schema.setAttributeProperties(Nn,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:Nn,view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),t.commands.add(Nn,new mh(t,Nn)),t.keystrokes.set("CTRL+I",Nn)}}const Rr="italic";class Yw extends T{static get pluginName(){return"ItalicUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(Rr,n=>{const o=t.commands.get(Rr),r=new dt(n);return r.set({label:e("Italic"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>',keystroke:"CTRL+I",tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(r,"execute",()=>{t.execute(Rr),t.editing.view.focus()}),r})}}class Kw extends q{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(t={}){const e=this.editor.model,n=e.schema,o=e.document.selection,r=Array.from(o.getSelectedBlocks()),s=t.forceValue===void 0?!this.value:t.forceValue;e.change(a=>{if(s){const c=r.filter(l=>Jo(l)||fh(n,l));this._applyQuote(a,c)}else this._removeQuote(a,r.filter(Jo))})}_getValue(){const t=yt(this.editor.model.document.selection.getSelectedBlocks());return!(!t||!Jo(t))}_checkEnabled(){if(this.value)return!0;const t=this.editor.model.document.selection,e=this.editor.model.schema,n=yt(t.getSelectedBlocks());return!!n&&fh(e,n)}_removeQuote(t,e){ph(t,e).reverse().forEach(n=>{if(n.start.isAtStart&&n.end.isAtEnd)return void t.unwrap(n.start.parent);if(n.start.isAtStart){const r=t.createPositionBefore(n.start.parent);return void t.move(n,r)}n.end.isAtEnd||t.split(n.end);const o=t.createPositionAfter(n.end.parent);t.move(n,o)})}_applyQuote(t,e){const n=[];ph(t,e).reverse().forEach(o=>{let r=Jo(o.start);r||(r=t.createElement("blockQuote"),t.wrap(o,r)),n.push(r)}),n.reverse().reduce((o,r)=>o.nextSibling==r?(t.merge(t.createPositionAfter(o)),o):r)}}function Jo(i){return i.parent.name=="blockQuote"?i.parent:null}function ph(i,t){let e,n=0;const o=[];for(;n<t.length;){const r=t[n],s=t[n+1];e||(e=i.createPositionBefore(r)),s&&r.nextSibling==s||(o.push(i.createRange(e,i.createPositionAfter(r))),e=null),n++}return o}function fh(i,t){const e=i.checkChild(t.parent,"blockQuote"),n=i.checkChild(["$root","blockQuote"],t);return e&&n}class $w extends T{static get pluginName(){return"BlockQuoteEditing"}static get requires(){return[Yo,ze]}init(){const t=this.editor,e=t.model.schema;t.commands.add("blockQuote",new Kw(t)),e.register("blockQuote",{inheritAllFrom:"$container"}),t.conversion.elementToElement({model:"blockQuote",view:"blockquote"}),t.model.document.registerPostFixer(s=>{const a=t.model.document.differ.getChanges();for(const c of a)if(c.type=="insert"){const l=c.position.nodeAfter;if(!l)continue;if(l.is("element","blockQuote")&&l.isEmpty)return s.remove(l),!0;if(l.is("element","blockQuote")&&!e.checkChild(c.position,l))return s.unwrap(l),!0;if(l.is("element")){const d=s.createRangeIn(l);for(const h of d.getItems())if(h.is("element","blockQuote")&&!e.checkChild(s.createPositionBefore(h),h))return s.unwrap(h),!0}}else if(c.type=="remove"){const l=c.position.parent;if(l.is("element","blockQuote")&&l.isEmpty)return s.remove(l),!0}return!1});const n=this.editor.editing.view.document,o=t.model.document.selection,r=t.commands.get("blockQuote");this.listenTo(n,"enter",(s,a)=>{!o.isCollapsed||!r.value||o.getLastPosition().parent.isEmpty&&(t.execute("blockQuote"),t.editing.view.scrollToTheSelection(),a.preventDefault(),s.stop())},{context:"blockquote"}),this.listenTo(n,"delete",(s,a)=>{if(a.direction!="backward"||!o.isCollapsed||!r.value)return;const c=o.getLastPosition().parent;c.isEmpty&&!c.previousSibling&&(t.execute("blockQuote"),t.editing.view.scrollToTheSelection(),a.preventDefault(),s.stop())},{context:"blockquote"})}}var kh=S(3062),Qw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(kh.Z,Qw),kh.Z.locals;class Zw extends T{static get pluginName(){return"BlockQuoteUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add("blockQuote",n=>{const o=t.commands.get("blockQuote"),r=new dt(n);return r.set({label:e("Block quote"),icon:Zt.quote,tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(r,"execute",()=>{t.execute("blockQuote"),t.editing.view.focus()}),r})}}class Jw extends T{static get pluginName(){return"CKBoxUI"}afterInit(){const t=this.editor;if(!t.commands.get("ckbox"))return;const e=t.t;t.ui.componentFactory.add("ckbox",n=>{const o=t.commands.get("ckbox"),r=new dt(n);return r.set({label:e("Open file manager"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>',tooltip:!0}),r.bind("isOn","isEnabled").to(o,"value","isEnabled"),r.on("execute",()=>{t.execute("ckbox")}),r})}}function bh({token:i,id:t,origin:e,width:n,extension:o}){const r=wh(i),s=function(c){const l=[10*c/100,80],d=Math.floor(Math.max(...l)),h=[Math.min(c,4e3)];let u=h[0];for(;u-d>=d;)u-=d,h.unshift(u);return h}(n),a=function(c){return c==="bmp"||c==="tiff"||c==="jpg"?"jpeg":c}(o);return{imageFallbackUrl:_h({environmentId:r,id:t,origin:e,width:n,extension:a}),imageSources:[{srcset:s.map(c=>`${_h({environmentId:r,id:t,origin:e,width:c,extension:"webp"})} ${c}w`).join(","),sizes:`(max-width: ${n}px) 100vw, ${n}px`,type:"image/webp"}]}}function wh(i){const[,t]=i.value.split(".");return JSON.parse(atob(t)).aud}function _h({environmentId:i,id:t,origin:e,width:n,extension:o}){return new URL(`${i}/assets/${t}/images/${n}.${o}`,e).toString()}class Xw extends q{constructor(t){super(t),this._chosenAssets=new Set,this._wrapper=null,this._initListeners()}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(){this.fire("ckbox:open")}_getValue(){return this._wrapper!==null}_checkEnabled(){const t=this.editor.commands.get("insertImage"),e=this.editor.commands.get("link");return!(!t.isEnabled&&!e.isEnabled)}_prepareOptions(){const t=this.editor.config.get("ckbox");return{theme:t.theme,language:t.language,tokenUrl:t.tokenUrl,serviceOrigin:t.serviceOrigin,assetsOrigin:t.assetsOrigin,dialog:{onClose:()=>this.fire("ckbox:close")},assets:{onChoose:e=>this.fire("ckbox:choose",e)}}}_initListeners(){const t=this.editor,e=t.model,n=!t.config.get("ckbox.ignoreDataId");this.on("ckbox",()=>{this.refresh()},{priority:"low"}),this.on("ckbox:open",()=>{this.isEnabled&&!this.value&&(this._wrapper=sc(document,"div",{class:"ck ckbox-wrapper"}),document.body.appendChild(this._wrapper),window.CKBox.mount(this._wrapper,this._prepareOptions()))}),this.on("ckbox:close",()=>{this.value&&(this._wrapper.remove(),this._wrapper=null)}),this.on("ckbox:choose",(o,r)=>{if(!this.isEnabled)return;const s=t.commands.get("insertImage"),a=t.commands.get("link"),c=t.plugins.get("CKBoxEditing"),l=function({assets:d,origin:h,token:u,isImageAllowed:g,isLinkAllowed:p}){return d.map(f=>({id:f.data.id,type:Ah(f)?"image":"link",attributes:t_(f,u,h)})).filter(f=>f.type==="image"?g:p)}({assets:r,origin:t.config.get("ckbox.assetsOrigin"),token:c.getToken(),isImageAllowed:s.isEnabled,isLinkAllowed:a.isEnabled});l.length!==0&&e.change(d=>{for(const h of l){const u=h===l[l.length-1];this._insertAsset(h,u,d),n&&(setTimeout(()=>this._chosenAssets.delete(h),1e3),this._chosenAssets.add(h))}})}),this.listenTo(t,"destroy",()=>{this.fire("ckbox:close"),this._chosenAssets.clear()})}_insertAsset(t,e,n){const o=this.editor.model.document.selection;n.removeSelectionAttribute("linkHref"),t.type==="image"?this._insertImage(t):this._insertLink(t,n),e||n.setSelection(o.getLastPosition())}_insertImage(t){const e=this.editor,{imageFallbackUrl:n,imageSources:o,imageTextAlternative:r}=t.attributes;e.execute("insertImage",{source:{src:n,sources:o,alt:r}})}_insertLink(t,e){const n=this.editor,o=n.model,r=o.document.selection,{linkName:s,linkHref:a}=t.attributes;if(r.isCollapsed){const c=de(r.getAttributes()),l=e.createText(s,c),d=o.insertContent(l);e.setSelection(d)}n.execute("link",a)}}function t_(i,t,e){if(Ah(i)){const{imageFallbackUrl:n,imageSources:o}=bh({token:t,origin:e,id:i.data.id,width:i.data.metadata.width,extension:i.data.extension});return{imageFallbackUrl:n,imageSources:o,imageTextAlternative:i.data.metadata.description||""}}return{linkName:i.data.name,linkHref:e_(i,t,e)}}function Ah(i){const t=i.data.metadata;return!!t&&t.width&&t.height}function e_(i,t,e){const n=wh(t),o=new URL(`${n}/assets/${i.data.id}/file`,e);return o.searchParams.set("download","true"),o.toString()}class n_ extends T{static get requires(){return["ImageUploadEditing","ImageUploadProgress",Jt,jr]}static get pluginName(){return"CKBoxUploadAdapter"}async afterInit(){const t=this.editor,e=!!t.config.get("ckbox"),n=!!window.CKBox;if(!e&&!n)return;const o=t.plugins.get(Jt),r=t.plugins.get(jr);o.createUploadAdapter=c=>new o_(c,r.getToken(),t);const s=!t.config.get("ckbox.ignoreDataId"),a=t.plugins.get("ImageUploadEditing");s&&a.on("uploadComplete",(c,{imageElement:l,data:d})=>{t.model.change(h=>{h.setAttribute("ckboxImageId",d.ckboxImageId,l)})})}}class o_{constructor(t,e,n){this.loader=t,this.token=e,this.editor=n,this.controller=new AbortController,this.serviceOrigin=n.config.get("ckbox.serviceOrigin"),this.assetsOrigin=n.config.get("ckbox.assetsOrigin")}async getAvailableCategories(t=0){const e=new URL("categories",this.serviceOrigin);return e.searchParams.set("limit",50 .toString()),e.searchParams.set("offset",t.toString()),this._sendHttpRequest({url:e}).then(async n=>{if(n.totalCount-(t+50)>0){const o=await this.getAvailableCategories(t+50);return[...n.items,...o]}return n.items}).catch(()=>{this.controller.signal.throwIfAborted(),Bt("ckbox-fetch-category-http-error")})}async getCategoryIdForFile(t){const e=Ch(t.name),n=await this.getAvailableCategories();if(!n)return null;const o=this.editor.config.get("ckbox.defaultUploadCategories");if(o){const s=Object.keys(o).find(a=>o[a].includes(e));if(s){const a=n.find(c=>c.id===s||c.name===s);return a?a.id:null}}const r=n.find(s=>s.extensions.includes(e));return r?r.id:null}async upload(){const t=this.editor.t,e=t("Cannot determine a category for the uploaded file."),n=await this.loader.file,o=await this.getCategoryIdForFile(n);if(!o)return Promise.reject(e);const r=new URL("assets",this.serviceOrigin),s=new FormData;s.append("categoryId",o),s.append("file",n);const a={method:"POST",url:r,data:s,onUploadProgress:c=>{c.lengthComputable&&(this.loader.uploadTotal=c.total,this.loader.uploaded=c.loaded)}};return this._sendHttpRequest(a).then(async c=>{const l=await this._getImageWidth(),d=Ch(n.name),h=bh({token:this.token,id:c.id,origin:this.assetsOrigin,width:l,extension:d});return{ckboxImageId:c.id,default:h.imageFallbackUrl,sources:h.imageSources}}).catch(()=>{const c=t("Cannot upload file:")+` ${n.name}.`;return Promise.reject(c)})}abort(){this.controller.abort()}_sendHttpRequest(t){const{url:e,data:n,onUploadProgress:o}=t,r=t.method||"GET",s=this.controller.signal,a=new XMLHttpRequest;a.open(r,e.toString(),!0),a.setRequestHeader("Authorization",this.token.value),a.setRequestHeader("CKBox-Version","CKEditor 5"),a.responseType="json";const c=()=>{a.abort()};return new Promise((l,d)=>{s.addEventListener("abort",c),a.addEventListener("loadstart",()=>{s.addEventListener("abort",c)}),a.addEventListener("loadend",()=>{s.removeEventListener("abort",c)}),a.addEventListener("error",()=>{d()}),a.addEventListener("abort",()=>{d()}),a.addEventListener("load",async()=>{const h=a.response;return!h||h.statusCode>=400?d(h&&h.message):l(h)}),o&&a.upload.addEventListener("progress",h=>{o(h)}),a.send(n)})}_getImageWidth(){return new Promise(t=>{const e=new Image;e.onload=()=>{URL.revokeObjectURL(e.src),t(e.width)},e.src=this.loader.data})}}function Ch(i){return i.match(/\.(?<ext>[^.]+)$/).groups.ext}class jr extends T{static get pluginName(){return"CKBoxEditing"}static get requires(){return["CloudServicesCore","LinkEditing","PictureEditing",n_]}async init(){const t=this.editor,e=!!t.config.get("ckbox"),n=!!window.CKBox;if(!e&&!n)return;this._initConfig();const o=t.plugins.get("CloudServicesCore"),r=t.config.get("ckbox.tokenUrl"),s=t.config.get("cloudServices.tokenUrl");this._token=r===s?t.plugins.get("CloudServices").token:await o.createToken(r).init(),t.config.get("ckbox.ignoreDataId")||(this._initSchema(),this._initConversion(),this._initFixers()),n&&t.commands.add("ckbox",new Xw(t))}getToken(){return this._token}_initConfig(){const t=this.editor;if(t.config.define("ckbox",{serviceOrigin:"https://api.ckbox.io",assetsOrigin:"https://ckbox.cloud",defaultUploadCategories:null,ignoreDataId:!1,language:t.locale.uiLanguage,theme:"default",tokenUrl:t.config.get("cloudServices.tokenUrl")}),!t.config.get("ckbox.tokenUrl"))throw new m("ckbox-plugin-missing-token-url",this);t.plugins.has("ImageBlockEditing")||t.plugins.has("ImageInlineEditing")||Bt("ckbox-plugin-image-feature-missing",t)}_initSchema(){const t=this.editor.model.schema;t.extend("$text",{allowAttributes:"ckboxLinkId"}),t.isRegistered("imageBlock")&&t.extend("imageBlock",{allowAttributes:["ckboxImageId","ckboxLinkId"]}),t.isRegistered("imageInline")&&t.extend("imageInline",{allowAttributes:["ckboxImageId","ckboxLinkId"]}),t.addAttributeCheck((e,n)=>{if(!e.last.getAttribute("linkHref")&&n==="ckboxLinkId")return!1})}_initConversion(){const t=this.editor;t.conversion.for("downcast").add(e=>{e.on("attribute:ckboxLinkId:imageBlock",(n,o,r)=>{const{writer:s,mapper:a,consumable:c}=r;if(!c.consume(o.item,n.name))return;const l=[...a.toViewElement(o.item).getChildren()].find(d=>d.name==="a");l&&(o.item.hasAttribute("ckboxLinkId")?s.setAttribute("data-ckbox-resource-id",o.item.getAttribute("ckboxLinkId"),l):s.removeAttribute("data-ckbox-resource-id",l))},{priority:"low"}),e.on("attribute:ckboxLinkId",(n,o,r)=>{const{writer:s,mapper:a,consumable:c}=r;if(c.consume(o.item,n.name)){if(o.attributeOldValue){const l=vh(s,o.attributeOldValue);s.unwrap(a.toViewRange(o.range),l)}if(o.attributeNewValue){const l=vh(s,o.attributeNewValue);if(o.item.is("selection")){const d=s.document.selection;s.wrap(d.getFirstRange(),l)}else s.wrap(a.toViewRange(o.range),l)}}},{priority:"low"})}),t.conversion.for("upcast").add(e=>{e.on("element:a",(n,o,r)=>{const{writer:s,consumable:a}=r;if(!o.viewItem.getAttribute("href")||!a.consume(o.viewItem,{attributes:["data-ckbox-resource-id"]}))return;const c=o.viewItem.getAttribute("data-ckbox-resource-id");if(c)if(o.modelRange)for(let l of o.modelRange.getItems())l.is("$textProxy")&&(l=l.textNode),r_(l)&&s.setAttribute("ckboxLinkId",c,l);else{const l=o.modelCursor.nodeBefore||o.modelCursor.parent;s.setAttribute("ckboxLinkId",c,l)}},{priority:"low"})}),t.conversion.for("downcast").attributeToAttribute({model:"ckboxImageId",view:"data-ckbox-resource-id"}),t.conversion.for("upcast").elementToAttribute({model:{key:"ckboxImageId",value:e=>e.getAttribute("data-ckbox-resource-id")},view:{attributes:{"data-ckbox-resource-id":/[\s\S]+/}}})}_initFixers(){const t=this.editor,e=t.model,n=e.document.selection;e.document.registerPostFixer(function(o){return r=>{let s=!1;const a=o.model,c=o.commands.get("ckbox");if(!c)return s;for(const l of a.document.differ.getChanges()){if(l.type!=="insert"&&l.type!=="attribute")continue;const d=l.type==="insert"?new x(l.position,l.position.getShiftedBy(l.length)):l.range,h=l.type==="attribute"&&l.attributeKey==="linkHref"&&l.attributeNewValue===null;for(const u of d.getItems()){if(h&&u.hasAttribute("ckboxLinkId")){r.removeAttribute("ckboxLinkId",u),s=!0;continue}const g=i_(u,c._chosenAssets);for(const p of g){const f=p.type==="image"?"ckboxImageId":"ckboxLinkId";p.id!==u.getAttribute(f)&&(r.setAttribute(f,p.id,u),s=!0)}}}return s}}(t)),e.document.registerPostFixer(function(o){return r=>{!o.hasAttribute("linkHref")&&o.hasAttribute("ckboxLinkId")&&r.removeSelectionAttribute("ckboxLinkId")}}(n))}}function i_(i,t){const e=i.is("element","imageInline")||i.is("element","imageBlock"),n=i.hasAttribute("linkHref");return[...t].filter(o=>o.type==="image"&&e?o.attributes.imageFallbackUrl===i.getAttribute("src"):o.type==="link"&&n?o.attributes.linkHref===i.getAttribute("linkHref"):void 0)}function vh(i,t){const e=i.createAttributeElement("a",{"data-ckbox-resource-id":t},{priority:5});return i.setCustomProperty("link",!0,e),e}function r_(i){return!!i.is("$text")||!(!i.is("element","imageInline")&&!i.is("element","imageBlock"))}class s_ extends T{static get pluginName(){return"CKFinderUI"}init(){const t=this.editor,e=t.ui.componentFactory,n=t.t;e.add("ckfinder",o=>{const r=t.commands.get("ckfinder"),s=new dt(o);return s.set({label:n("Insert image or file"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>',tooltip:!0}),s.bind("isEnabled").to(r),s.on("execute",()=>{t.execute("ckfinder"),t.editing.view.focus()}),s})}}class a_ extends q{constructor(t){super(t),this.stopListening(this.editor.model.document,"change"),this.listenTo(this.editor.model.document,"change",()=>this.refresh(),{priority:"low"})}refresh(){const t=this.editor.commands.get("insertImage"),e=this.editor.commands.get("link");this.isEnabled=t.isEnabled||e.isEnabled}execute(){const t=this.editor,e=this.editor.config.get("ckfinder.openerMethod")||"modal";if(e!="popup"&&e!="modal")throw new m("ckfinder-unknown-openermethod",t);const n=this.editor.config.get("ckfinder.options")||{};n.chooseFiles=!0;const o=n.onInit;n.language||(n.language=t.locale.uiLanguage),n.onInit=r=>{o&&o(r),r.on("files:choose",s=>{const a=s.data.files.toArray(),c=a.filter(h=>!h.isImage()),l=a.filter(h=>h.isImage());for(const h of c)t.execute("link",h.getUrl());const d=[];for(const h of l){const u=h.getUrl();d.push(u||r.request("file:getProxyUrl",{file:h}))}d.length&&yh(t,d)}),r.on("file:choose:resizedImage",s=>{const a=s.data.resizedUrl;if(a)yh(t,[a]);else{const c=t.plugins.get("Notification"),l=t.locale.t;c.showWarning(l("Could not obtain resized image URL."),{title:l("Selecting resized image failed"),namespace:"ckfinder"})}})},window.CKFinder[e](n)}}function yh(i,t){if(i.commands.get("insertImage").isEnabled)i.execute("insertImage",{source:t});else{const e=i.plugins.get("Notification"),n=i.locale.t;e.showWarning(n("Could not insert image at the current position."),{title:n("Inserting image failed"),namespace:"ckfinder"})}}class c_ extends T{static get pluginName(){return"CKFinderEditing"}static get requires(){return[vr,"LinkEditing"]}init(){const t=this.editor;if(!t.plugins.has("ImageBlockEditing")&&!t.plugins.has("ImageInlineEditing"))throw new m("ckfinder-missing-image-plugin",t);t.commands.add("ckfinder",new a_(t))}}class l_ extends T{static get pluginName(){return"CloudServicesUploadAdapter"}static get requires(){return["CloudServices",Jt]}init(){const t=this.editor,e=t.plugins.get("CloudServices"),n=e.token,o=e.uploadUrl;n&&(this._uploadGateway=t.plugins.get("CloudServicesCore").createUploadGateway(n,o),t.plugins.get(Jt).createUploadAdapter=r=>new d_(this._uploadGateway,r))}}class d_{constructor(t,e){this.uploadGateway=t,this.loader=e}upload(){return this.loader.file.then(t=>(this.fileUploader=this.uploadGateway.upload(t),this.fileUploader.on("progress",(e,n)=>{this.loader.uploadTotal=n.total,this.loader.uploaded=n.uploaded}),this.fileUploader.send()))}abort(){this.fileUploader.abort()}}class h_ extends q{refresh(){const t=this.editor.model,e=yt(t.document.selection.getSelectedBlocks());this.value=!!e&&e.is("element","paragraph"),this.isEnabled=!!e&&xh(e,t.schema)}execute(t={}){const e=this.editor.model,n=e.document;e.change(o=>{const r=(t.selection||n.selection).getSelectedBlocks();for(const s of r)!s.is("element","paragraph")&&xh(s,e.schema)&&o.rename(s,"paragraph")})}}function xh(i,t){return t.checkChild(i.parent,"paragraph")&&!t.isObject(i)}class u_ extends q{execute(t){const e=this.editor.model,n=t.attributes;let o=t.position;e.change(r=>{const s=r.createElement("paragraph");if(n&&e.schema.setAllowedAttributes(s,n,r),!e.schema.checkChild(o.parent,s)){const a=e.schema.findAllowedParent(o,s);if(!a)return;o=r.split(o,a).position}e.insertContent(s,o),r.setSelection(s,"in")})}}class ho extends T{static get pluginName(){return"Paragraph"}init(){const t=this.editor,e=t.model;t.commands.add("paragraph",new h_(t)),t.commands.add("insertParagraph",new u_(t)),e.schema.register("paragraph",{inheritAllFrom:"$block"}),t.conversion.elementToElement({model:"paragraph",view:"p"}),t.conversion.for("upcast").elementToElement({model:(n,{writer:o})=>ho.paragraphLikeElements.has(n.name)?n.isEmpty?null:o.createElement("paragraph"):null,view:/.+/,converterPriority:"low"})}}ho.paragraphLikeElements=new Set(["blockquote","dd","div","dt","h1","h2","h3","h4","h5","h6","li","p","td","th"]);class g_ extends q{constructor(t,e){super(t),this.modelElements=e}refresh(){const t=yt(this.editor.model.document.selection.getSelectedBlocks());this.value=!!t&&this.modelElements.includes(t.name)&&t.name,this.isEnabled=!!t&&this.modelElements.some(e=>Eh(t,e,this.editor.model.schema))}execute(t){const e=this.editor.model,n=e.document,o=t.value;e.change(r=>{const s=Array.from(n.selection.getSelectedBlocks()).filter(a=>Eh(a,o,e.schema));for(const a of s)a.is("element",o)||r.rename(a,o)})}}function Eh(i,t,e){return e.checkChild(i.parent,t)&&!e.isObject(i)}const Fr="paragraph";class m_ extends T{static get pluginName(){return"HeadingEditing"}constructor(t){super(t),t.config.define("heading",{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h2",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h3",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h4",title:"Heading 3",class:"ck-heading_heading3"}]})}static get requires(){return[ho]}init(){const t=this.editor,e=t.config.get("heading.options"),n=[];for(const o of e)o.model!==Fr&&(t.model.schema.register(o.model,{inheritAllFrom:"$block"}),t.conversion.elementToElement(o),n.push(o.model));this._addDefaultH1Conversion(t),t.commands.add("heading",new g_(t,n))}afterInit(){const t=this.editor,e=t.commands.get("enter"),n=t.config.get("heading.options");e&&this.listenTo(e,"afterExecute",(o,r)=>{const s=t.model.document.selection.getFirstPosition().parent;n.some(a=>s.is("element",a.model))&&!s.is("element",Fr)&&s.childCount===0&&r.writer.rename(s,Fr)})}_addDefaultH1Conversion(t){t.conversion.for("upcast").elementToElement({model:"heading1",view:"h1",converterPriority:E.get("low")+1})}}var Dh=S(8733),p_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Dh.Z,p_),Dh.Z.locals;class f_ extends T{static get pluginName(){return"HeadingUI"}init(){const t=this.editor,e=t.t,n=function(s){const a=s.t,c={Paragraph:a("Paragraph"),"Heading 1":a("Heading 1"),"Heading 2":a("Heading 2"),"Heading 3":a("Heading 3"),"Heading 4":a("Heading 4"),"Heading 5":a("Heading 5"),"Heading 6":a("Heading 6")};return s.config.get("heading.options").map(l=>{const d=c[l.title];return d&&d!=l.title&&(l.title=d),l})}(t),o=e("Choose heading"),r=e("Heading");t.ui.componentFactory.add("heading",s=>{const a={},c=new Yt,l=t.commands.get("heading"),d=t.commands.get("paragraph"),h=[l];for(const g of n){const p={type:"button",model:new yr({label:g.title,class:g.class,withText:!0})};g.model==="paragraph"?(p.model.bind("isOn").to(d,"value"),p.model.set("commandName","paragraph"),h.push(d)):(p.model.bind("isOn").to(l,"value",f=>f===g.model),p.model.set({commandName:"heading",commandValue:g.model})),c.add(p),a[g.model]=g.title}const u=Je(s);return Zl(u,c),u.buttonView.set({isOn:!1,withText:!0,tooltip:r}),u.extendTemplate({attributes:{class:["ck-heading-dropdown"]}}),u.bind("isEnabled").toMany(h,"isEnabled",(...g)=>g.some(p=>p)),u.buttonView.bind("label").to(l,"value",d,"value",(g,p)=>{const f=g||p&&"paragraph";return a[f]?a[f]:o}),this.listenTo(u,"execute",g=>{t.execute(g.source.commandName,g.source.commandValue?{value:g.source.commandValue}:void 0),t.editing.view.focus()}),u})}}class Xo extends T{static get requires(){return[Go]}static get pluginName(){return"WidgetToolbarRepository"}init(){const t=this.editor;if(t.plugins.has("BalloonToolbar")){const e=t.plugins.get("BalloonToolbar");this.listenTo(e,"show",n=>{(function(o){const r=o.getSelectedElement();return!(!r||!ft(r))})(t.editing.view.document.selection)&&n.stop()},{priority:"high"})}this._toolbarDefinitions=new Map,this._balloon=this.editor.plugins.get("ContextualBalloon"),this.on("change:isEnabled",()=>{this._updateToolbarsVisibility()}),this.listenTo(t.ui,"update",()=>{this._updateToolbarsVisibility()}),this.listenTo(t.ui.focusTracker,"change:isFocused",()=>{this._updateToolbarsVisibility()},{priority:"low"})}destroy(){super.destroy();for(const t of this._toolbarDefinitions.values())t.view.destroy()}register(t,{ariaLabel:e,items:n,getRelatedElement:o,balloonClassName:r="ck-toolbar-container"}){if(!n.length)return void A("widget-toolbar-no-items",{toolbarId:t});const s=this.editor,a=s.t,c=new _r(s.locale);if(c.ariaLabel=e||a("Widget toolbar"),this._toolbarDefinitions.has(t))throw new m("widget-toolbar-duplicated",this,{toolbarId:t});c.fillFromConfig(n,s.ui.componentFactory),this._toolbarDefinitions.set(t,{view:c,getRelatedElement:o,balloonClassName:r})}_updateToolbarsVisibility(){let t=0,e=null,n=null;for(const o of this._toolbarDefinitions.values()){const r=o.getRelatedElement(this.editor.editing.view.document.selection);if(this.isEnabled&&r)if(this.editor.ui.focusTracker.isFocused){const s=r.getAncestors().length;s>t&&(t=s,e=r,n=o)}else this._isToolbarVisible(o)&&this._hideToolbar(o);else this._isToolbarInBalloon(o)&&this._hideToolbar(o)}n&&this._showToolbar(n,e)}_hideToolbar(t){this._balloon.remove(t.view),this.stopListening(this._balloon,"change:visibleView")}_showToolbar(t,e){this._isToolbarVisible(t)?Ih(this.editor,e):this._isToolbarInBalloon(t)||(this._balloon.add({view:t.view,position:Mh(this.editor,e),balloonClassName:t.balloonClassName}),this.listenTo(this._balloon,"change:visibleView",()=>{for(const n of this._toolbarDefinitions.values())if(this._isToolbarVisible(n)){const o=n.getRelatedElement(this.editor.editing.view.document.selection);Ih(this.editor,o)}}))}_isToolbarVisible(t){return this._balloon.visibleView===t.view}_isToolbarInBalloon(t){return this._balloon.hasView(t.view)}}function Ih(i,t){const e=i.plugins.get("ContextualBalloon"),n=Mh(i,t);e.updatePosition(n)}function Mh(i,t){const e=i.editing.view,n=jt.defaultPositions;return{target:e.domConverter.mapViewToDom(t),positions:[n.northArrowSouth,n.northArrowSouthWest,n.northArrowSouthEast,n.southArrowNorth,n.southArrowNorthWest,n.southArrowNorthEast,n.viewportStickyNorth]}}class Sh{constructor(t){this.set("activeHandlePosition",null),this.set("proposedWidthPercents",null),this.set("proposedWidth",null),this.set("proposedHeight",null),this.set("proposedHandleHostWidth",null),this.set("proposedHandleHostHeight",null),this._options=t,this._referenceCoordinates=null}begin(t,e,n){const o=new J(e);this.activeHandlePosition=function(s){const a=["top-left","top-right","bottom-right","bottom-left"];for(const c of a)if(s.classList.contains(k_(c)))return c}(t),this._referenceCoordinates=function(s,a){const c=new J(s),l=a.split("-"),d={x:l[1]=="right"?c.right:c.left,y:l[0]=="bottom"?c.bottom:c.top};return d.x+=s.ownerDocument.defaultView.scrollX,d.y+=s.ownerDocument.defaultView.scrollY,d}(e,function(s){const a=s.split("-"),c={top:"bottom",bottom:"top",left:"right",right:"left"};return`${c[a[0]]}-${c[a[1]]}`}(this.activeHandlePosition)),this.originalWidth=o.width,this.originalHeight=o.height,this.aspectRatio=o.width/o.height;const r=n.style.width;r&&r.match(/^\d+(\.\d*)?%$/)?this.originalWidthPercents=parseFloat(r):this.originalWidthPercents=function(s,a){const c=s.parentElement,l=parseFloat(c.ownerDocument.defaultView.getComputedStyle(c).width);return a.width/l*100}(n,o)}update(t){this.proposedWidth=t.width,this.proposedHeight=t.height,this.proposedWidthPercents=t.widthPercents,this.proposedHandleHostWidth=t.handleHostWidth,this.proposedHandleHostHeight=t.handleHostHeight}}function k_(i){return`ck-widget__resizer__handle-${i}`}z(Sh,st);class b_ extends H{constructor(){super();const t=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-size-view",t.to("_viewPosition",e=>e?`ck-orientation-${e}`:"")],style:{display:t.if("_isVisible","none",e=>!e)}},children:[{text:t.to("_label")}]})}_bindToState(t,e){this.bind("_isVisible").to(e,"proposedWidth",e,"proposedHeight",(n,o)=>n!==null&&o!==null),this.bind("_label").to(e,"proposedHandleHostWidth",e,"proposedHandleHostHeight",e,"proposedWidthPercents",(n,o,r)=>t.unit==="px"?`${n}\xD7${o}`:`${r}%`),this.bind("_viewPosition").to(e,"activeHandlePosition",e,"proposedHandleHostWidth",e,"proposedHandleHostHeight",(n,o,r)=>o<50||r<50?"above-center":n)}_dismiss(){this.unbind(),this._isVisible=!1}}class Vr{constructor(t){this._options=t,this._viewResizerWrapper=null,this.set("isEnabled",!0),this.decorate("begin"),this.decorate("cancel"),this.decorate("commit"),this.decorate("updateSize"),this.on("commit",e=>{this.state.proposedWidth||this.state.proposedWidthPercents||(this._cleanup(),e.stop())},{priority:"high"}),this.on("change:isEnabled",()=>{this.isEnabled&&this.redraw()})}attach(){const t=this,e=this._options.viewElement;this._options.editor.editing.view.change(n=>{const o=n.createUIElement("div",{class:"ck ck-reset_all ck-widget__resizer"},function(r){const s=this.toDomElement(r);return t._appendHandles(s),t._appendSizeUI(s),t.on("change:isEnabled",(a,c,l)=>{s.style.display=l?"":"none"}),s.style.display=t.isEnabled?"":"none",s});n.insert(n.createPositionAt(e,"end"),o),n.addClass("ck-widget_with-resizer",e),this._viewResizerWrapper=o})}begin(t){this.state=new Sh(this._options),this._sizeView._bindToState(this._options,this.state),this._initialViewWidth=this._options.viewElement.getStyle("width"),this.state.begin(t,this._getHandleHost(),this._getResizeHost())}updateSize(t){const e=this._proposeNewSize(t);this._options.editor.editing.view.change(s=>{const a=this._options.unit||"%",c=(a==="%"?e.widthPercents:e.width)+a;s.setStyle("width",c,this._options.viewElement)});const n=this._getHandleHost(),o=new J(n);e.handleHostWidth=Math.round(o.width),e.handleHostHeight=Math.round(o.height);const r=new J(n);e.width=Math.round(r.width),e.height=Math.round(r.height),this.redraw(o),this.state.update(e)}commit(){const t=this._options.unit||"%",e=(t==="%"?this.state.proposedWidthPercents:this.state.proposedWidth)+t;this._options.editor.editing.view.change(()=>{this._cleanup(),this._options.onCommit(e)})}cancel(){this._cleanup()}destroy(){this.cancel()}redraw(t){const e=this._domResizerWrapper;if(!((n=e)&&n.ownerDocument&&n.ownerDocument.contains(n)))return;var n;const o=e.parentElement,r=this._getHandleHost(),s=this._viewResizerWrapper,a=[s.getStyle("width"),s.getStyle("height"),s.getStyle("left"),s.getStyle("top")];let c;if(o.isSameNode(r)){const l=t||new J(r);c=[l.width+"px",l.height+"px",void 0,void 0]}else c=[r.offsetWidth+"px",r.offsetHeight+"px",r.offsetLeft+"px",r.offsetTop+"px"];St(a,c)!=="same"&&this._options.editor.editing.view.change(l=>{l.setStyle({width:c[0],height:c[1],left:c[2],top:c[3]},s)})}containsHandle(t){return this._domResizerWrapper.contains(t)}static isResizeHandle(t){return t.classList.contains("ck-widget__resizer__handle")}_cleanup(){this._sizeView._dismiss(),this._options.editor.editing.view.change(t=>{t.setStyle("width",this._initialViewWidth,this._options.viewElement)})}_proposeNewSize(t){const e=this.state,n={x:(o=t).pageX,y:o.pageY};var o;const r=!this._options.isCentered||this._options.isCentered(this),s={x:e._referenceCoordinates.x-(n.x+e.originalWidth),y:n.y-e.originalHeight-e._referenceCoordinates.y};r&&e.activeHandlePosition.endsWith("-right")&&(s.x=n.x-(e._referenceCoordinates.x+e.originalWidth)),r&&(s.x*=2);const a={width:Math.abs(e.originalWidth+s.x),height:Math.abs(e.originalHeight+s.y)};a.dominant=a.width/e.aspectRatio>a.height?"width":"height",a.max=a[a.dominant];const c={width:a.width,height:a.height};return a.dominant=="width"?c.height=c.width/e.aspectRatio:c.width=c.height*e.aspectRatio,{width:Math.round(c.width),height:Math.round(c.height),widthPercents:Math.min(Math.round(e.originalWidthPercents/e.originalWidth*c.width*100)/100,100)}}_getResizeHost(){const t=this._domResizerWrapper.parentElement;return this._options.getResizeHost(t)}_getHandleHost(){const t=this._domResizerWrapper.parentElement;return this._options.getHandleHost(t)}get _domResizerWrapper(){return this._options.editor.editing.view.domConverter.mapViewToDom(this._viewResizerWrapper)}_appendHandles(t){const e=["top-left","top-right","bottom-right","bottom-left"];for(const o of e)t.appendChild(new Ut({tag:"div",attributes:{class:"ck-widget__resizer__handle "+(n=o,`ck-widget__resizer__handle-${n}`)}}).render());var n}_appendSizeUI(t){this._sizeView=new b_,this._sizeView.render(),t.appendChild(this._sizeView.element)}}z(Vr,st);var Th=S(8506),w_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Th.Z,w_),Th.Z.locals,z(class extends T{static get pluginName(){return"WidgetResize"}init(){const i=this.editor.editing,t=pt.window.document;this.set("visibleResizer",null),this.set("_activeResizer",null),this._resizers=new Map,i.view.addObserver(Wo),this._observer=Object.create(wn),this.listenTo(i.view.document,"mousedown",this._mouseDownListener.bind(this),{priority:"high"}),this._observer.listenTo(t,"mousemove",this._mouseMoveListener.bind(this)),this._observer.listenTo(t,"mouseup",this._mouseUpListener.bind(this));const e=()=>{this.visibleResizer&&this.visibleResizer.redraw()};this._redrawFocusedResizerThrottled=Hd(e,200),this.on("change:visibleResizer",e),this.editor.ui.on("update",this._redrawFocusedResizerThrottled),this.editor.model.document.on("change",()=>{for(const[o,r]of this._resizers)o.isAttached()||(this._resizers.delete(o),r.destroy())},{priority:"lowest"}),this._observer.listenTo(pt.window,"resize",this._redrawFocusedResizerThrottled);const n=this.editor.editing.view.document.selection;n.on("change",()=>{const o=n.getSelectedElement();this.visibleResizer=this.getResizerByViewElement(o)||null})}destroy(){this._observer.stopListening();for(const i of this._resizers.values())i.destroy();this._redrawFocusedResizerThrottled.cancel()}attachTo(i){const t=new Vr(i),e=this.editor.plugins;if(t.attach(),e.has("WidgetToolbarRepository")){const o=e.get("WidgetToolbarRepository");t.on("begin",()=>{o.forceDisabled("resize")},{priority:"lowest"}),t.on("cancel",()=>{o.clearForceDisabled("resize")},{priority:"highest"}),t.on("commit",()=>{o.clearForceDisabled("resize")},{priority:"highest"})}this._resizers.set(i.viewElement,t);const n=this.editor.editing.view.document.selection.getSelectedElement();return this.getResizerByViewElement(n)==t&&(this.visibleResizer=t),t}getResizerByViewElement(i){return this._resizers.get(i)}_getResizerByHandle(i){for(const t of this._resizers.values())if(t.containsHandle(i))return t}_mouseDownListener(i,t){const e=t.domTarget;Vr.isResizeHandle(e)&&(this._activeResizer=this._getResizerByHandle(e),this._activeResizer&&(this._activeResizer.begin(e),i.stop(),t.preventDefault()))}_mouseMoveListener(i,t){this._activeResizer&&this._activeResizer.updateSize(t)}_mouseUpListener(){this._activeResizer&&(this._activeResizer.commit(),this._activeResizer=null)}},st);class __ extends q{refresh(){const t=this.editor.plugins.get("ImageUtils").getClosestSelectedImageElement(this.editor.model.document.selection);this.isEnabled=!!t,this.isEnabled&&t.hasAttribute("alt")?this.value=t.getAttribute("alt"):this.value=!1}execute(t){const e=this.editor,n=e.plugins.get("ImageUtils"),o=e.model,r=n.getClosestSelectedImageElement(o.document.selection);o.change(s=>{s.setAttribute("alt",t.newValue,r)})}}function Nh(i){return i.createContainerElement("figure",{class:"image"},[i.createEmptyElement("img"),i.createSlot()])}function Bh(i,t){const e=i.plugins.get("ImageUtils"),n=i.plugins.has("ImageInlineEditing")&&i.plugins.has("ImageBlockEditing");return r=>e.isInlineImageView(r)?n&&(r.findAncestor(e.isBlockImageView)?"imageBlock":"imageInline")!==t?null:o(r):null;function o(r){const s={name:!0};return r.hasAttribute("src")&&(s.attributes=["src"]),s}}function Ur(i,t){const e=yt(t.getSelectedBlocks());return!e||i.isObject(e)||e.isEmpty&&e.name!="listItem"?"imageBlock":"imageInline"}class ae extends T{static get pluginName(){return"ImageUtils"}isImage(t){return this.isInlineImage(t)||this.isBlockImage(t)}isInlineImageView(t){return!!t&&t.is("element","img")}isBlockImageView(t){return!!t&&t.is("element","figure")&&t.hasClass("image")}insertImage(t={},e=null,n=null){const o=this.editor,r=o.model,s=r.document.selection;n=Ph(o,e||s,n),t={...Object.fromEntries(s.getAttributes()),...t};for(const a in t)r.schema.checkAttribute(n,a)||delete t[a];return r.change(a=>{const c=a.createElement(n,t);return r.insertObject(c,e,null,{setSelection:"on",findOptimalPosition:!e&&n!="imageInline"}),c.parent?c:null})}getClosestSelectedImageWidget(t){const e=t.getSelectedElement();if(e&&this.isImageWidget(e))return e;let n=t.getFirstPosition().parent;for(;n;){if(n.is("element")&&this.isImageWidget(n))return n;n=n.parent}return null}getClosestSelectedImageElement(t){const e=t.getSelectedElement();return this.isImage(e)?e:t.getFirstPosition().findAncestor("imageBlock")}isImageAllowed(){const t=this.editor.model.document.selection;return function(e,n){if(Ph(e,n)=="imageBlock"){const o=function(r,s){const a=Pd(r,s).start.parent;return a.isEmpty&&!a.is("element","$root")?a.parent:a}(n,e.model);if(e.model.schema.checkChild(o,"imageBlock"))return!0}else if(e.model.schema.checkChild(n.focus,"imageInline"))return!0;return!1}(this.editor,t)&&function(e){return[...e.focus.getAncestors()].every(n=>!n.is("element","imageBlock"))}(t)}toImageWidget(t,e,n){return e.setCustomProperty("image",!0,t),Tr(t,e,{label:()=>{const o=this.findViewImgElement(t).getAttribute("alt");return o?`${o} ${n}`:n}})}isImageWidget(t){return!!t.getCustomProperty("image")&&ft(t)}isBlockImage(t){return!!t&&t.is("element","imageBlock")}isInlineImage(t){return!!t&&t.is("element","imageInline")}findViewImgElement(t){if(this.isInlineImageView(t))return t;const e=this.editor.editing.view;for(const{item:n}of e.createRangeIn(t))if(this.isInlineImageView(n))return n}}function Ph(i,t,e){const n=i.model.schema,o=i.config.get("image.insert.type");return i.plugins.has("ImageBlockEditing")?i.plugins.has("ImageInlineEditing")?e||(o==="inline"?"imageInline":o==="block"?"imageBlock":t.is("selection")?Ur(n,t):n.checkChild(t,"imageInline")?"imageInline":"imageBlock"):"imageBlock":"imageInline"}class A_ extends T{static get requires(){return[ae]}static get pluginName(){return"ImageTextAlternativeEditing"}init(){this.editor.commands.add("imageTextAlternative",new __(this.editor))}}var zh=S(1905),C_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(zh.Z,C_),zh.Z.locals;var Lh=S(6764),v_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Lh.Z,v_),Lh.Z.locals;class y_ extends H{constructor(t){super(t);const e=this.locale.t;this.focusTracker=new $t,this.keystrokes=new Ce,this.labeledInput=this._createLabeledInputView(),this.saveButtonView=this._createButton(e("Save"),Zt.check,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(e("Cancel"),Zt.cancel,"ck-button-cancel","cancel"),this._focusables=new Ze,this._focusCycler=new xn({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"form",attributes:{class:["ck","ck-text-alternative-form","ck-responsive-form"],tabindex:"-1"},children:[this.labeledInput,this.saveButtonView,this.cancelButtonView]}),gr(this)}render(){super.render(),this.keystrokes.listenTo(this.element),mr({view:this}),[this.labeledInput,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}_createButton(t,e,n,o){const r=new dt(this.locale);return r.set({label:t,icon:e,tooltip:!0}),r.extendTemplate({attributes:{class:n}}),o&&r.delegate("execute").to(this,o),r}_createLabeledInputView(){const t=this.locale.t,e=new Ar(this.locale,Cr);return e.label=t("Text alternative"),e}}function Oh(i){const t=i.editing.view,e=jt.defaultPositions,n=i.plugins.get("ImageUtils");return{target:t.domConverter.viewToDom(n.getClosestSelectedImageWidget(t.document.selection)),positions:[e.northArrowSouth,e.northArrowSouthWest,e.northArrowSouthEast,e.southArrowNorth,e.southArrowNorthWest,e.southArrowNorthEast,e.viewportStickyNorth]}}class x_ extends T{static get requires(){return[Go]}static get pluginName(){return"ImageTextAlternativeUI"}init(){this._createButton(),this._createForm()}destroy(){super.destroy(),this._form.destroy()}_createButton(){const t=this.editor,e=t.t;t.ui.componentFactory.add("imageTextAlternative",n=>{const o=t.commands.get("imageTextAlternative"),r=new dt(n);return r.set({label:e("Change image text alternative"),icon:Zt.lowVision,tooltip:!0}),r.bind("isEnabled").to(o,"isEnabled"),this.listenTo(r,"execute",()=>{this._showForm()}),r})}_createForm(){const t=this.editor,e=t.editing.view.document,n=t.plugins.get("ImageUtils");this._balloon=this.editor.plugins.get("ContextualBalloon"),this._form=new y_(t.locale),this._form.render(),this.listenTo(this._form,"submit",()=>{t.execute("imageTextAlternative",{newValue:this._form.labeledInput.fieldView.element.value}),this._hideForm(!0)}),this.listenTo(this._form,"cancel",()=>{this._hideForm(!0)}),this._form.keystrokes.set("Esc",(o,r)=>{this._hideForm(!0),r()}),this.listenTo(t.ui,"update",()=>{n.getClosestSelectedImageWidget(e.selection)?this._isVisible&&function(o){const r=o.plugins.get("ContextualBalloon");if(o.plugins.get("ImageUtils").getClosestSelectedImageWidget(o.editing.view.document.selection)){const s=Oh(o);r.updatePosition(s)}}(t):this._hideForm(!0)}),ur({emitter:this._form,activator:()=>this._isVisible,contextElements:[this._balloon.view.element],callback:()=>this._hideForm()})}_showForm(){if(this._isVisible)return;const t=this.editor,e=t.commands.get("imageTextAlternative"),n=this._form.labeledInput;this._form.disableCssTransitions(),this._isInBalloon||this._balloon.add({view:this._form,position:Oh(t)}),n.fieldView.value=n.fieldView.element.value=e.value||"",this._form.labeledInput.fieldView.select(),this._form.enableCssTransitions()}_hideForm(t){this._isInBalloon&&(this._form.focusTracker.isFocused&&this._form.saveButtonView.focus(),this._balloon.remove(this._form),t&&this.editor.editing.view.focus())}get _isVisible(){return this._balloon.visibleView===this._form}get _isInBalloon(){return this._balloon.hasView(this._form)}}class Rh extends T{static get requires(){return[A_,x_]}static get pluginName(){return"ImageTextAlternative"}}function jh(i,t){return n=>{n.on(`attribute:srcset:${t}`,e)};function e(n,o,r){if(!r.consumable.consume(o.item,n.name))return;const s=r.writer,a=r.mapper.toViewElement(o.item),c=i.findViewImgElement(a);if(o.attributeNewValue===null){const l=o.attributeOldValue;l.data&&(s.removeAttribute("srcset",c),s.removeAttribute("sizes",c),l.width&&s.removeAttribute("width",c))}else{const l=o.attributeNewValue;l.data&&(s.setAttribute("srcset",l.data,c),s.setAttribute("sizes","100vw",c),l.width&&s.setAttribute("width",l.width,c))}}}function ti(i,t,e){return o=>{o.on(`attribute:${e}:${t}`,n)};function n(o,r,s){if(!s.consumable.consume(r.item,o.name))return;const a=s.writer,c=s.mapper.toViewElement(r.item),l=i.findViewImgElement(c);a.setAttribute(r.attributeKey,r.attributeNewValue||"",l)}}class E_ extends ge{observe(t){this.listenTo(t,"load",(e,n)=>{const o=n.target;this.checkShouldIgnoreEventFromTarget(o)||o.tagName=="IMG"&&this._fireEvents(n)},{useCapture:!0})}_fireEvents(t){this.isEnabled&&(this.document.fire("layoutChanged"),this.document.fire("imageLoaded",t))}}class D_ extends q{constructor(t){super(t);const e=t.config.get("image.insert.type");t.plugins.has("ImageBlockEditing")||e==="block"&&A("image-block-plugin-required"),t.plugins.has("ImageInlineEditing")||e==="inline"&&A("image-inline-plugin-required")}refresh(){this.isEnabled=this.editor.plugins.get("ImageUtils").isImageAllowed()}execute(t){const e=vt(t.source),n=this.editor.model.document.selection,o=this.editor.plugins.get("ImageUtils"),r=Object.fromEntries(n.getAttributes());e.forEach((s,a)=>{const c=n.getSelectedElement();if(typeof s=="string"&&(s={src:s}),a&&c&&o.isImage(c)){const l=this.editor.model.createPositionAfter(c);o.insertImage({...s,...r},l)}else o.insertImage({...s,...r})})}}class Hr extends T{static get requires(){return[ae]}static get pluginName(){return"ImageEditing"}init(){const t=this.editor,e=t.conversion;t.editing.view.addObserver(E_),e.for("upcast").attributeToAttribute({view:{name:"img",key:"alt"},model:"alt"}).attributeToAttribute({view:{name:"img",key:"srcset"},model:{key:"srcset",value:o=>{const r={data:o.getAttribute("srcset")};return o.hasAttribute("width")&&(r.width=o.getAttribute("width")),r}}});const n=new D_(t);t.commands.add("insertImage",n),t.commands.add("imageInsert",n)}}class Fh extends q{constructor(t,e){super(t),this._modelElementName=e}refresh(){const t=this.editor.plugins.get("ImageUtils"),e=t.getClosestSelectedImageElement(this.editor.model.document.selection);this._modelElementName==="imageBlock"?this.isEnabled=t.isInlineImage(e):this.isEnabled=t.isBlockImage(e)}execute(){const t=this.editor,e=this.editor.model,n=t.plugins.get("ImageUtils"),o=n.getClosestSelectedImageElement(e.document.selection),r=Object.fromEntries(o.getAttributes());return r.src||r.uploadId?e.change(s=>{const a=Array.from(e.markers).filter(d=>d.getRange().containsItem(o)),c=n.insertImage(r,e.createSelection(o,"on"),this._modelElementName);if(!c)return null;const l=s.createRangeOn(c);for(const d of a){const h=d.getRange(),u=h.root.rootName!="$graveyard"?h.getJoined(l,!0):l;s.updateMarker(d,{range:u})}return{oldElement:o,newElement:c}}):null}}class Vh extends T{static get requires(){return[Hr,ae,fe]}static get pluginName(){return"ImageBlockEditing"}init(){const t=this.editor;t.model.schema.register("imageBlock",{inheritAllFrom:"$blockObject",allowAttributes:["alt","src","srcset"]}),this._setupConversion(),t.plugins.has("ImageInlineEditing")&&(t.commands.add("imageTypeBlock",new Fh(this.editor,"imageBlock")),this._setupClipboardIntegration())}_setupConversion(){const t=this.editor,e=t.t,n=t.conversion,o=t.plugins.get("ImageUtils");n.for("dataDowncast").elementToStructure({model:"imageBlock",view:(r,{writer:s})=>Nh(s)}),n.for("editingDowncast").elementToStructure({model:"imageBlock",view:(r,{writer:s})=>o.toImageWidget(Nh(s),s,e("image widget"))}),n.for("downcast").add(ti(o,"imageBlock","src")).add(ti(o,"imageBlock","alt")).add(jh(o,"imageBlock")),n.for("upcast").elementToElement({view:Bh(t,"imageBlock"),model:(r,{writer:s})=>s.createElement("imageBlock",r.hasAttribute("src")?{src:r.getAttribute("src")}:null)}).add(function(r){return a=>{a.on("element:figure",s)};function s(a,c,l){if(!l.consumable.test(c.viewItem,{name:!0,classes:"image"}))return;const d=r.findViewImgElement(c.viewItem);if(!d||!l.consumable.test(d,{name:!0}))return;l.consumable.consume(c.viewItem,{name:!0,classes:"image"});const h=yt(l.convertItem(d,c.modelCursor).modelRange.getItems());h?(l.convertChildren(c.viewItem,h),l.updateConversionResult(h,c)):l.consumable.revert(c.viewItem,{name:!0,classes:"image"})}}(o))}_setupClipboardIntegration(){const t=this.editor,e=t.model,n=t.editing.view,o=t.plugins.get("ImageUtils");this.listenTo(t.plugins.get("ClipboardPipeline"),"inputTransformation",(r,s)=>{const a=Array.from(s.content.getChildren());let c;if(!a.every(o.isInlineImageView))return;c=s.targetRanges?t.editing.mapper.toModelRange(s.targetRanges[0]):e.document.selection.getFirstRange();const l=e.createSelection(c);if(Ur(e.schema,l)==="imageBlock"){const d=new Dn(n.document),h=a.map(u=>d.createElement("figure",{class:"image"},u));s.content=d.createDocumentFragment(h)}})}}var Uh=S(3508),I_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Uh.Z,I_),Uh.Z.locals;class M_ extends T{static get requires(){return[Vh,lo,Rh]}static get pluginName(){return"ImageBlock"}}class S_ extends T{static get requires(){return[Hr,ae,fe]}static get pluginName(){return"ImageInlineEditing"}init(){const t=this.editor,e=t.model.schema;e.register("imageInline",{inheritAllFrom:"$inlineObject",allowAttributes:["alt","src","srcset"]}),e.addChildCheck((n,o)=>{if(n.endsWith("caption")&&o.name==="imageInline")return!1}),this._setupConversion(),t.plugins.has("ImageBlockEditing")&&(t.commands.add("imageTypeInline",new Fh(this.editor,"imageInline")),this._setupClipboardIntegration())}_setupConversion(){const t=this.editor,e=t.t,n=t.conversion,o=t.plugins.get("ImageUtils");n.for("dataDowncast").elementToElement({model:"imageInline",view:(r,{writer:s})=>s.createEmptyElement("img")}),n.for("editingDowncast").elementToStructure({model:"imageInline",view:(r,{writer:s})=>o.toImageWidget(function(a){return a.createContainerElement("span",{class:"image-inline"},a.createEmptyElement("img"))}(s),s,e("image widget"))}),n.for("downcast").add(ti(o,"imageInline","src")).add(ti(o,"imageInline","alt")).add(jh(o,"imageInline")),n.for("upcast").elementToElement({view:Bh(t,"imageInline"),model:(r,{writer:s})=>s.createElement("imageInline",r.hasAttribute("src")?{src:r.getAttribute("src")}:null)})}_setupClipboardIntegration(){const t=this.editor,e=t.model,n=t.editing.view,o=t.plugins.get("ImageUtils");this.listenTo(t.plugins.get("ClipboardPipeline"),"inputTransformation",(r,s)=>{const a=Array.from(s.content.getChildren());let c;if(!a.every(o.isBlockImageView))return;c=s.targetRanges?t.editing.mapper.toModelRange(s.targetRanges[0]):e.document.selection.getFirstRange();const l=e.createSelection(c);if(Ur(e.schema,l)==="imageInline"){const d=new Dn(n.document),h=a.map(u=>u.childCount===1?(Array.from(u.getAttributes()).forEach(g=>d.setAttribute(...g,o.findViewImgElement(u))),u.getChild(0)):u);s.content=d.createDocumentFragment(h)}})}}class T_ extends T{static get requires(){return[S_,lo,Rh]}static get pluginName(){return"ImageInline"}}class N_ extends q{refresh(){const t=this.editor,e=t.plugins.get("ImageCaptionUtils");if(!t.plugins.has(Vh))return this.isEnabled=!1,void(this.value=!1);const n=t.model.document.selection,o=n.getSelectedElement();if(!o){const r=e.getCaptionFromModelSelection(n);return this.isEnabled=!!r,void(this.value=!!r)}this.isEnabled=this.editor.plugins.get("ImageUtils").isImage(o),this.isEnabled?this.value=!!e.getCaptionFromImageModelElement(o):this.value=!1}execute(t={}){const{focusCaptionOnShow:e}=t;this.editor.model.change(n=>{this.value?this._hideImageCaption(n):this._showImageCaption(n,e)})}_showImageCaption(t,e){const n=this.editor.model.document.selection,o=this.editor.plugins.get("ImageCaptionEditing");let r=n.getSelectedElement();const s=o._getSavedCaption(r);this.editor.plugins.get("ImageUtils").isInlineImage(r)&&(this.editor.execute("imageTypeBlock"),r=n.getSelectedElement());const a=s||t.createElement("caption");t.append(a,r),e&&t.setSelection(a,"in")}_hideImageCaption(t){const e=this.editor,n=e.model.document.selection,o=e.plugins.get("ImageCaptionEditing"),r=e.plugins.get("ImageCaptionUtils");let s,a=n.getSelectedElement();a?s=r.getCaptionFromImageModelElement(a):(s=r.getCaptionFromModelSelection(n),a=s.parent),o._saveCaption(a,s),t.setSelection(a,"on"),t.remove(s)}}class Hh extends T{static get pluginName(){return"ImageCaptionUtils"}static get requires(){return[ae]}getCaptionFromImageModelElement(t){for(const e of t.getChildren())if(e&&e.is("element","caption"))return e;return null}getCaptionFromModelSelection(t){const e=this.editor.plugins.get("ImageUtils"),n=t.getFirstPosition().findAncestor("caption");return n&&e.isBlockImage(n.parent)?n:null}matchImageCaptionViewElement(t){const e=this.editor.plugins.get("ImageUtils");return t.name=="figcaption"&&e.isBlockImageView(t.parent)?{name:!0}:null}}class B_ extends T{static get requires(){return[ae,Hh]}static get pluginName(){return"ImageCaptionEditing"}constructor(t){super(t),this._savedCaptionsMap=new WeakMap}init(){const t=this.editor,e=t.model.schema;e.isRegistered("caption")?e.extend("caption",{allowIn:"imageBlock"}):e.register("caption",{allowIn:"imageBlock",allowContentOf:"$block",isLimit:!0}),t.commands.add("toggleImageCaption",new N_(this.editor)),this._setupConversion(),this._setupImageTypeCommandsIntegration()}_setupConversion(){const t=this.editor,e=t.editing.view,n=t.plugins.get("ImageUtils"),o=t.plugins.get("ImageCaptionUtils"),r=t.t;t.conversion.for("upcast").elementToElement({view:s=>o.matchImageCaptionViewElement(s),model:"caption"}),t.conversion.for("dataDowncast").elementToElement({model:"caption",view:(s,{writer:a})=>n.isBlockImage(s.parent)?a.createContainerElement("figcaption"):null}),t.conversion.for("editingDowncast").elementToElement({model:"caption",view:(s,{writer:a})=>{if(!n.isBlockImage(s.parent))return null;const c=a.createEditableElement("figcaption");return a.setCustomProperty("imageCaption",!0,c),ud({view:e,element:c,text:r("Enter image caption"),keepOnFocus:!0}),Bd(c,a)}})}_setupImageTypeCommandsIntegration(){const t=this.editor,e=t.plugins.get("ImageUtils"),n=t.plugins.get("ImageCaptionUtils"),o=t.commands.get("imageTypeInline"),r=t.commands.get("imageTypeBlock"),s=a=>{if(!a.return)return;const{oldElement:c,newElement:l}=a.return;if(!c)return;if(e.isBlockImage(c)){const h=n.getCaptionFromImageModelElement(c);if(h)return void this._saveCaption(l,h)}const d=this._getSavedCaption(c);d&&this._saveCaption(l,d)};o&&this.listenTo(o,"execute",s,{priority:"low"}),r&&this.listenTo(r,"execute",s,{priority:"low"})}_getSavedCaption(t){const e=this._savedCaptionsMap.get(t);return e?X.fromJSON(e):null}_saveCaption(t,e){this._savedCaptionsMap.set(t,e.toJSON())}}class P_ extends T{static get requires(){return[Hh]}static get pluginName(){return"ImageCaptionUI"}init(){const t=this.editor,e=t.editing.view,n=t.plugins.get("ImageCaptionUtils"),o=t.t;t.ui.componentFactory.add("toggleImageCaption",r=>{const s=t.commands.get("toggleImageCaption"),a=new dt(r);return a.set({icon:Zt.caption,tooltip:!0,isToggleable:!0}),a.bind("isOn","isEnabled").to(s,"value","isEnabled"),a.bind("label").to(s,"value",c=>o(c?"Toggle caption off":"Toggle caption on")),this.listenTo(a,"execute",()=>{t.execute("toggleImageCaption",{focusCaptionOnShow:!0});const c=n.getCaptionFromModelSelection(t.model.document.selection);if(c){const l=t.editing.mapper.toViewElement(c);e.scrollToTheSelection(),e.change(d=>{d.addClass("image__caption_highlighted",l)})}}),a})}}var Gh=S(2640),z_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Gh.Z,z_),Gh.Z.locals;class L_ extends q{constructor(t,e){super(t),this._defaultStyles={imageBlock:!1,imageInline:!1},this._styles=new Map(e.map(n=>{if(n.isDefault)for(const o of n.modelElements)this._defaultStyles[o]=n.name;return[n.name,n]}))}refresh(){const t=this.editor.plugins.get("ImageUtils").getClosestSelectedImageElement(this.editor.model.document.selection);this.isEnabled=!!t,this.isEnabled?t.hasAttribute("imageStyle")?this.value=t.getAttribute("imageStyle"):this.value=this._defaultStyles[t.name]:this.value=!1}execute(t={}){const e=this.editor,n=e.model,o=e.plugins.get("ImageUtils");n.change(r=>{const s=t.value;let a=o.getClosestSelectedImageElement(n.document.selection);s&&this.shouldConvertImageType(s,a)&&(this.editor.execute(o.isBlockImage(a)?"imageTypeInline":"imageTypeBlock"),a=o.getClosestSelectedImageElement(n.document.selection)),!s||this._styles.get(s).isDefault?r.removeAttribute("imageStyle",a):r.setAttribute("imageStyle",s,a)})}shouldConvertImageType(t,e){return!this._styles.get(t).modelElements.includes(e.name)}}const{objectFullWidth:O_,objectInline:qh,objectLeft:Wh,objectRight:Gr,objectCenter:qr,objectBlockLeft:Yh,objectBlockRight:Kh}=Zt,ei={get inline(){return{name:"inline",title:"In line",icon:qh,modelElements:["imageInline"],isDefault:!0}},get alignLeft(){return{name:"alignLeft",title:"Left aligned image",icon:Wh,modelElements:["imageBlock","imageInline"],className:"image-style-align-left"}},get alignBlockLeft(){return{name:"alignBlockLeft",title:"Left aligned image",icon:Yh,modelElements:["imageBlock"],className:"image-style-block-align-left"}},get alignCenter(){return{name:"alignCenter",title:"Centered image",icon:qr,modelElements:["imageBlock"],className:"image-style-align-center"}},get alignRight(){return{name:"alignRight",title:"Right aligned image",icon:Gr,modelElements:["imageBlock","imageInline"],className:"image-style-align-right"}},get alignBlockRight(){return{name:"alignBlockRight",title:"Right aligned image",icon:Kh,modelElements:["imageBlock"],className:"image-style-block-align-right"}},get block(){return{name:"block",title:"Centered image",icon:qr,modelElements:["imageBlock"],isDefault:!0}},get side(){return{name:"side",title:"Side image",icon:Gr,modelElements:["imageBlock"],className:"image-style-side"}}},$h={full:O_,left:Yh,right:Kh,center:qr,inlineLeft:Wh,inlineRight:Gr,inline:qh},Qh=[{name:"imageStyle:wrapText",title:"Wrap text",defaultItem:"imageStyle:alignLeft",items:["imageStyle:alignLeft","imageStyle:alignRight"]},{name:"imageStyle:breakText",title:"Break text",defaultItem:"imageStyle:block",items:["imageStyle:alignBlockLeft","imageStyle:block","imageStyle:alignBlockRight"]}];function Zh(i){A("image-style-configuration-definition-invalid",i)}const Wr={normalizeStyles:function(i){return(i.configuredStyles.options||[]).map(t=>function(e){return e=typeof e=="string"?ei[e]?{...ei[e]}:{name:e}:function(n,o){const r={...o};for(const s in n)Object.prototype.hasOwnProperty.call(o,s)||(r[s]=n[s]);return r}(ei[e.name],e),typeof e.icon=="string"&&(e.icon=$h[e.icon]||e.icon),e}(t)).filter(t=>function(e,{isBlockPluginLoaded:n,isInlinePluginLoaded:o}){const{modelElements:r,name:s}=e;if(!(r&&r.length&&s))return Zh({style:e}),!1;{const a=[n?"imageBlock":null,o?"imageInline":null];if(!r.some(c=>a.includes(c)))return A("image-style-missing-dependency",{style:e,missingPlugins:r.map(c=>c==="imageBlock"?"ImageBlockEditing":"ImageInlineEditing")}),!1}return!0}(t,i))},getDefaultStylesConfiguration:function(i,t){return i&&t?{options:["inline","alignLeft","alignRight","alignCenter","alignBlockLeft","alignBlockRight","block","side"]}:i?{options:["block","side"]}:t?{options:["inline","alignLeft","alignRight"]}:{}},getDefaultDropdownDefinitions:function(i){return i.has("ImageBlockEditing")&&i.has("ImageInlineEditing")?[...Qh]:[]},warnInvalidStyle:Zh,DEFAULT_OPTIONS:ei,DEFAULT_ICONS:$h,DEFAULT_DROPDOWN_DEFINITIONS:Qh};function Jh(i,t){for(const e of t)if(e.name===i)return e}class Xh extends T{static get pluginName(){return"ImageStyleEditing"}static get requires(){return[ae]}init(){const{normalizeStyles:t,getDefaultStylesConfiguration:e}=Wr,n=this.editor,o=n.plugins.has("ImageBlockEditing"),r=n.plugins.has("ImageInlineEditing");n.config.define("image.styles",e(o,r)),this.normalizedStyles=t({configuredStyles:n.config.get("image.styles"),isBlockPluginLoaded:o,isInlinePluginLoaded:r}),this._setupConversion(o,r),this._setupPostFixer(),n.commands.add("imageStyle",new L_(n,this.normalizedStyles))}_setupConversion(t,e){const n=this.editor,o=n.model.schema,r=(s=this.normalizedStyles,(c,l,d)=>{if(!d.consumable.consume(l.item,c.name))return;const h=Jh(l.attributeNewValue,s),u=Jh(l.attributeOldValue,s),g=d.mapper.toViewElement(l.item),p=d.writer;u&&p.removeClass(u.className,g),h&&p.addClass(h.className,g)});var s;const a=function(c){const l={imageInline:c.filter(d=>!d.isDefault&&d.modelElements.includes("imageInline")),imageBlock:c.filter(d=>!d.isDefault&&d.modelElements.includes("imageBlock"))};return(d,h,u)=>{if(!h.modelRange)return;const g=h.viewItem,p=yt(h.modelRange.getItems());if(p&&u.schema.checkAttribute(p,"imageStyle"))for(const f of l[p.name])u.consumable.consume(g,{classes:f.className})&&u.writer.setAttribute("imageStyle",f.name,p)}}(this.normalizedStyles);n.editing.downcastDispatcher.on("attribute:imageStyle",r),n.data.downcastDispatcher.on("attribute:imageStyle",r),t&&(o.extend("imageBlock",{allowAttributes:"imageStyle"}),n.data.upcastDispatcher.on("element:figure",a,{priority:"low"})),e&&(o.extend("imageInline",{allowAttributes:"imageStyle"}),n.data.upcastDispatcher.on("element:img",a,{priority:"low"}))}_setupPostFixer(){const t=this.editor,e=t.model.document,n=t.plugins.get(ae),o=new Map(this.normalizedStyles.map(r=>[r.name,r]));e.registerPostFixer(r=>{let s=!1;for(const a of e.differ.getChanges())if(a.type=="insert"||a.type=="attribute"&&a.attributeKey=="imageStyle"){let c=a.type=="insert"?a.position.nodeAfter:a.range.start.nodeAfter;if(c&&c.is("element","paragraph")&&c.childCount>0&&(c=c.getChild(0)),!n.isImage(c))continue;const l=c.getAttribute("imageStyle");if(!l)continue;const d=o.get(l);d&&d.modelElements.includes(c.name)||(r.removeAttribute("imageStyle",c),s=!0)}return s})}}var tu=S(5083),R_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(tu.Z,R_),tu.Z.locals;class j_ extends T{static get requires(){return[Xh]}static get pluginName(){return"ImageStyleUI"}get localizedDefaultStylesTitles(){const t=this.editor.t;return{"Wrap text":t("Wrap text"),"Break text":t("Break text"),"In line":t("In line"),"Full size image":t("Full size image"),"Side image":t("Side image"),"Left aligned image":t("Left aligned image"),"Centered image":t("Centered image"),"Right aligned image":t("Right aligned image")}}init(){const t=this.editor.plugins,e=this.editor.config.get("image.toolbar")||[],n=eu(t.get("ImageStyleEditing").normalizedStyles,this.localizedDefaultStylesTitles);for(const r of n)this._createButton(r);const o=eu([...e.filter(Z),...Wr.getDefaultDropdownDefinitions(t)],this.localizedDefaultStylesTitles);for(const r of o)this._createDropdown(r,n)}_createDropdown(t,e){const n=this.editor.ui.componentFactory;n.add(t.name,o=>{let r;const{defaultItem:s,items:a,title:c}=t,l=a.filter(g=>e.find(({name:p})=>nu(p)===g)).map(g=>{const p=n.create(g);return g===s&&(r=p),p});a.length!==l.length&&Wr.warnInvalidStyle({dropdown:t});const d=Je(o,jl),h=d.buttonView,u=h.arrowView;return Ql(d,l),h.set({label:ou(c,r.label),class:null,tooltip:!0}),u.unbind("label"),u.set({label:c}),h.bind("icon").toMany(l,"isOn",(...g)=>{const p=g.findIndex(Ve);return p<0?r.icon:l[p].icon}),h.bind("label").toMany(l,"isOn",(...g)=>{const p=g.findIndex(Ve);return ou(c,p<0?r.label:l[p].label)}),h.bind("isOn").toMany(l,"isOn",(...g)=>g.some(Ve)),h.bind("class").toMany(l,"isOn",(...g)=>g.some(Ve)?"ck-splitbutton_flatten":null),h.on("execute",()=>{l.some(({isOn:g})=>g)?d.isOpen=!d.isOpen:r.fire("execute")}),d.bind("isEnabled").toMany(l,"isEnabled",(...g)=>g.some(Ve)),d})}_createButton(t){const e=t.name;this.editor.ui.componentFactory.add(nu(e),n=>{const o=this.editor.commands.get("imageStyle"),r=new dt(n);return r.set({label:t.title,icon:t.icon,tooltip:!0,isToggleable:!0}),r.bind("isEnabled").to(o,"isEnabled"),r.bind("isOn").to(o,"value",s=>s===e),r.on("execute",this._executeCommand.bind(this,e)),r})}_executeCommand(t){this.editor.execute("imageStyle",{value:t}),this.editor.editing.view.focus()}}function eu(i,t){for(const e of i)t[e.title]&&(e.title=t[e.title]);return i}function nu(i){return`imageStyle:${i}`}function ou(i,t){return(i?i+": ":"")+t}function iu(i){const t=i.map(e=>e.replace("+","\\+"));return new RegExp(`^image\\/(${t.join("|")})$`)}function F_(i){return new Promise((t,e)=>{const n=i.getAttribute("src");fetch(n).then(o=>o.blob()).then(o=>{const r=ru(o,n),s=r.replace("image/",""),a=new File([o],`image.${s}`,{type:r});t(a)}).catch(o=>o&&o.name==="TypeError"?function(r){return function(s){return new Promise((a,c)=>{const l=pt.document.createElement("img");l.addEventListener("load",()=>{const d=pt.document.createElement("canvas");d.width=l.width,d.height=l.height,d.getContext("2d").drawImage(l,0,0),d.toBlob(h=>h?a(h):c())}),l.addEventListener("error",()=>c()),l.src=s})}(r).then(s=>{const a=ru(s,r),c=a.replace("image/","");return new File([s],`image.${c}`,{type:a})})}(n).then(t).catch(e):e(o))})}function ru(i,t){return i.type?i.type:t.match(/data:(image\/\w+);base64/)?t.match(/data:(image\/\w+);base64/)[1].toLowerCase():"image/jpeg"}class V_ extends T{static get pluginName(){return"ImageUploadUI"}init(){const t=this.editor,e=t.t,n=o=>{const r=new Fw(o),s=t.commands.get("uploadImage"),a=t.config.get("image.upload.types"),c=iu(a);return r.set({acceptedType:a.map(l=>`image/${l}`).join(","),allowMultipleFiles:!0}),r.buttonView.set({label:e("Insert image"),icon:Zt.image,tooltip:!0}),r.buttonView.bind("isEnabled").to(s),r.on("done",(l,d)=>{const h=Array.from(d).filter(u=>c.test(u.type));h.length&&t.execute("uploadImage",{file:h})}),r};t.ui.componentFactory.add("uploadImage",n),t.ui.componentFactory.add("imageUpload",n)}}var su=S(3689),U_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(su.Z,U_),su.Z.locals;var au=S(4036),H_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(au.Z,H_),au.Z.locals;var cu=S(3773),G_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(cu.Z,G_),cu.Z.locals;class q_ extends T{static get pluginName(){return"ImageUploadProgress"}constructor(t){super(t),this.placeholder="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}init(){const t=this.editor;t.plugins.has("ImageBlockEditing")&&t.editing.downcastDispatcher.on("attribute:uploadStatus:imageBlock",(...e)=>this.uploadStatusChange(...e)),t.plugins.has("ImageInlineEditing")&&t.editing.downcastDispatcher.on("attribute:uploadStatus:imageInline",(...e)=>this.uploadStatusChange(...e))}uploadStatusChange(t,e,n){const o=this.editor,r=e.item,s=r.getAttribute("uploadId");if(!n.consumable.consume(e.item,t.name))return;const a=o.plugins.get("ImageUtils"),c=o.plugins.get(Jt),l=s?e.attributeNewValue:null,d=this.placeholder,h=o.editing.mapper.toViewElement(r),u=n.writer;if(l=="reading")return lu(h,u),void du(a,d,h,u);if(l=="uploading"){const g=c.loaders.get(s);return lu(h,u),void(g?(hu(h,u),function(p,f,b,w){const _=function(I){const P=I.createUIElement("div",{class:"ck-progress-bar"});return I.setCustomProperty("progressBar",!0,P),P}(f);f.insert(f.createPositionAt(p,"end"),_),b.on("change:uploadedPercent",(I,P,R)=>{w.change(ot=>{ot.setStyle("width",R+"%",_)})})}(h,u,g,o.editing.view),function(p,f,b,w){if(w.data){const _=p.findViewImgElement(f);b.setAttribute("src",w.data,_)}}(a,h,u,g)):du(a,d,h,u))}l=="complete"&&c.loaders.get(s)&&function(g,p,f){const b=p.createUIElement("div",{class:"ck-image-upload-complete-icon"});p.insert(p.createPositionAt(g,"end"),b),setTimeout(()=>{f.change(w=>w.remove(w.createRangeOn(b)))},3e3)}(h,u,o.editing.view),function(g,p){gu(g,p,"progressBar")}(h,u),hu(h,u),function(g,p){p.removeClass("ck-appear",g)}(h,u)}}function lu(i,t){i.hasClass("ck-appear")||t.addClass("ck-appear",i)}function du(i,t,e,n){e.hasClass("ck-image-upload-placeholder")||n.addClass("ck-image-upload-placeholder",e);const o=i.findViewImgElement(e);o.getAttribute("src")!==t&&n.setAttribute("src",t,o),uu(e,"placeholder")||n.insert(n.createPositionAfter(o),function(r){const s=r.createUIElement("div",{class:"ck-upload-placeholder-loader"});return r.setCustomProperty("placeholder",!0,s),s}(n))}function hu(i,t){i.hasClass("ck-image-upload-placeholder")&&t.removeClass("ck-image-upload-placeholder",i),gu(i,t,"placeholder")}function uu(i,t){for(const e of i.getChildren())if(e.getCustomProperty(t))return e}function gu(i,t,e){const n=uu(i,e);n&&t.remove(t.createRangeOn(n))}class W_ extends q{refresh(){const t=this.editor,e=t.plugins.get("ImageUtils"),n=t.model.document.selection.getSelectedElement();this.isEnabled=e.isImageAllowed()||e.isImage(n)}execute(t){const e=vt(t.file),n=this.editor.model.document.selection,o=this.editor.plugins.get("ImageUtils"),r=Object.fromEntries(n.getAttributes());e.forEach((s,a)=>{const c=n.getSelectedElement();if(a&&c&&o.isImage(c)){const l=this.editor.model.createPositionAfter(c);this._uploadImage(s,r,l)}else this._uploadImage(s,r)})}_uploadImage(t,e,n){const o=this.editor,r=o.plugins.get(Jt).createLoader(t),s=o.plugins.get("ImageUtils");r&&s.insertImage({...e,uploadId:r.id},n)}}class Y_ extends T{static get requires(){return[Jt,vr,fe,ae]}static get pluginName(){return"ImageUploadEditing"}constructor(t){super(t),t.config.define("image",{upload:{types:["jpeg","png","gif","bmp","webp","tiff"]}}),this._uploadImageElements=new Map}init(){const t=this.editor,e=t.model.document,n=t.conversion,o=t.plugins.get(Jt),r=t.plugins.get("ImageUtils"),s=iu(t.config.get("image.upload.types")),a=new W_(t);t.commands.add("uploadImage",a),t.commands.add("imageUpload",a),n.for("upcast").attributeToAttribute({view:{name:"img",key:"uploadId"},model:"uploadId"}),this.listenTo(t.editing.view.document,"clipboardInput",(c,l)=>{if(d=l.dataTransfer,Array.from(d.types).includes("text/html")&&d.getData("text/html")!=="")return;var d;const h=Array.from(l.dataTransfer.files).filter(u=>!!u&&s.test(u.type));h.length&&(c.stop(),t.model.change(u=>{l.targetRanges&&u.setSelection(l.targetRanges.map(g=>t.editing.mapper.toModelRange(g))),t.model.enqueueChange(()=>{t.execute("uploadImage",{file:h})})}))}),this.listenTo(t.plugins.get("ClipboardPipeline"),"inputTransformation",(c,l)=>{const d=Array.from(t.editing.view.createRangeIn(l.content)).filter(u=>function(g,p){return!(!g.isInlineImageView(p)||!p.getAttribute("src"))&&(p.getAttribute("src").match(/^data:image\/\w+;base64,/g)||p.getAttribute("src").match(/^blob:/g))}(r,u.item)&&!u.item.getAttribute("uploadProcessed")).map(u=>({promise:F_(u.item),imageElement:u.item}));if(!d.length)return;const h=new Dn(t.editing.view.document);for(const u of d){h.setAttribute("uploadProcessed",!0,u.imageElement);const g=o.createLoader(u.promise);g&&(h.setAttribute("src","",u.imageElement),h.setAttribute("uploadId",g.id,u.imageElement))}}),t.editing.view.document.on("dragover",(c,l)=>{l.preventDefault()}),e.on("change",()=>{const c=e.differ.getChanges({includeChangesInGraveyard:!0}).reverse(),l=new Set;for(const d of c)if(d.type=="insert"&&d.name!="$text"){const h=d.position.nodeAfter,u=d.position.root.rootName=="$graveyard";for(const g of K_(t,h)){const p=g.getAttribute("uploadId");if(!p)continue;const f=o.loaders.get(p);f&&(u?l.has(p)||f.abort():(l.add(p),this._uploadImageElements.set(p,g),f.status=="idle"&&this._readAndUpload(f)))}}}),this.on("uploadComplete",(c,{imageElement:l,data:d})=>{const h=d.urls?d.urls:d;this.editor.model.change(u=>{u.setAttribute("src",h.default,l),this._parseAndSetSrcsetAttributeOnImage(h,l,u)})},{priority:"low"})}afterInit(){const t=this.editor.model.schema;this.editor.plugins.has("ImageBlockEditing")&&t.extend("imageBlock",{allowAttributes:["uploadId","uploadStatus"]}),this.editor.plugins.has("ImageInlineEditing")&&t.extend("imageInline",{allowAttributes:["uploadId","uploadStatus"]})}_readAndUpload(t){const e=this.editor,n=e.model,o=e.locale.t,r=e.plugins.get(Jt),s=e.plugins.get(vr),a=e.plugins.get("ImageUtils"),c=this._uploadImageElements;return n.enqueueChange({isUndoable:!1},d=>{d.setAttribute("uploadStatus","reading",c.get(t.id))}),t.read().then(()=>{const d=t.upload(),h=c.get(t.id);if(nt.isSafari){const u=e.editing.mapper.toViewElement(h),g=a.findViewImgElement(u);e.editing.view.once("render",()=>{if(!g.parent)return;const p=e.editing.view.domConverter.mapViewToDom(g.parent);if(!p)return;const f=p.style.display;p.style.display="none",p._ckHack=p.offsetHeight,p.style.display=f})}return n.enqueueChange({isUndoable:!1},u=>{u.setAttribute("uploadStatus","uploading",h)}),d}).then(d=>{n.enqueueChange({isUndoable:!1},h=>{const u=c.get(t.id);h.setAttribute("uploadStatus","complete",u),this.fire("uploadComplete",{data:d,imageElement:u})}),l()}).catch(d=>{if(t.status!=="error"&&t.status!=="aborted")throw d;t.status=="error"&&d&&s.showWarning(d,{title:o("Upload failed"),namespace:"upload"}),n.enqueueChange({isUndoable:!1},h=>{h.remove(c.get(t.id))}),l()});function l(){n.enqueueChange({isUndoable:!1},d=>{const h=c.get(t.id);d.removeAttribute("uploadId",h),d.removeAttribute("uploadStatus",h),c.delete(t.id)}),r.destroyLoader(t)}}_parseAndSetSrcsetAttributeOnImage(t,e,n){let o=0;const r=Object.keys(t).filter(s=>{const a=parseInt(s,10);if(!isNaN(a))return o=Math.max(o,a),!0}).map(s=>`${t[s]} ${s}w`).join(", ");r!=""&&n.setAttribute("srcset",{data:r,width:o},e)}}function K_(i,t){const e=i.plugins.get("ImageUtils");return Array.from(i.model.createRangeOn(t)).filter(n=>e.isImage(n.item)).map(n=>n.item)}class $_ extends T{static get pluginName(){return"IndentEditing"}init(){const t=this.editor;t.commands.add("indent",new Bs(t)),t.commands.add("outdent",new Bs(t))}}const mu='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"/></svg>',pu='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"/></svg>';class Q_ extends T{static get pluginName(){return"IndentUI"}init(){const t=this.editor,e=t.locale,n=t.t,o=e.uiLanguageDirection=="ltr"?mu:pu,r=e.uiLanguageDirection=="ltr"?pu:mu;this._defineButton("indent",n("Increase indent"),o),this._defineButton("outdent",n("Decrease indent"),r)}_defineButton(t,e,n){const o=this.editor;o.ui.componentFactory.add(t,r=>{const s=o.commands.get(t),a=new dt(r);return a.set({label:e,icon:n,tooltip:!0}),a.bind("isOn","isEnabled").to(s,"value","isEnabled"),this.listenTo(a,"execute",()=>{o.execute(t),o.editing.view.focus()}),a})}}class Z_{constructor(){this._definitions=new Set}get length(){return this._definitions.size}add(t){Array.isArray(t)?t.forEach(e=>this._definitions.add(e)):this._definitions.add(t)}getDispatcher(){return t=>{t.on("attribute:linkHref",(e,n,o)=>{if(!o.consumable.test(n.item,"attribute:linkHref")||!n.item.is("selection")&&!o.schema.isInline(n.item))return;const r=o.writer,s=r.document.selection;for(const a of this._definitions){const c=r.createAttributeElement("a",a.attributes,{priority:5});a.classes&&r.addClass(a.classes,c);for(const l in a.styles)r.setStyle(l,a.styles[l],c);r.setCustomProperty("link",!0,c),a.callback(n.attributeNewValue)?n.item.is("selection")?r.wrap(s.getFirstRange(),c):r.wrap(o.mapper.toViewRange(n.range),c):r.unwrap(o.mapper.toViewRange(n.range),c)}},{priority:"high"})}}getDispatcherForLinkedImage(){return t=>{t.on("attribute:linkHref:imageBlock",(e,n,{writer:o,mapper:r})=>{const s=r.toViewElement(n.item),a=Array.from(s.getChildren()).find(c=>c.name==="a");for(const c of this._definitions){const l=de(c.attributes);if(c.callback(n.attributeNewValue)){for(const[d,h]of l)d==="class"?o.addClass(h,a):o.setAttribute(d,h,a);c.classes&&o.addClass(c.classes,a);for(const d in c.styles)o.setStyle(d,c.styles[d],a)}else{for(const[d,h]of l)d==="class"?o.removeClass(h,a):o.removeAttribute(d,a);c.classes&&o.removeClass(c.classes,a);for(const d in c.styles)o.removeStyle(d,a)}}})}}}const J_=function(i,t,e){var n=i.length;return e=e===void 0?n:e,!t&&e>=n?i:ka(i,t,e)};var X_=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");const fu=function(i){return X_.test(i)},tA=function(i){return i.split("")};var eA="[\\ud800-\\udfff]",Yr="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Kr="\\ud83c[\\udffb-\\udfff]",ku="[^\\ud800-\\udfff]",bu="(?:\\ud83c[\\udde6-\\uddff]){2}",wu="[\\ud800-\\udbff][\\udc00-\\udfff]",_u="(?:"+Yr+"|"+Kr+")?",Au="[\\ufe0e\\ufe0f]?",nA=Au+_u+("(?:\\u200d(?:"+[ku,bu,wu].join("|")+")"+Au+_u+")*"),oA="(?:"+[ku+Yr+"?",Yr,bu,wu,eA].join("|")+")",iA=RegExp(Kr+"(?="+Kr+")|"+oA+nA,"g");const rA=function(i){return i.match(iA)||[]},sA=function(i){return fu(i)?rA(i):tA(i)},aA=function(i){return function(t){t=Si(t);var e=fu(t)?sA(t):void 0,n=e?e[0]:t.charAt(0),o=e?J_(e,1).join(""):t.slice(1);return n[i]()+o}}("toUpperCase"),cA=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,lA=/^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i,dA=/^[\S]+@((?![-_])(?:[-\w\u00a1-\uffff]{0,63}[^-_]\.))+(?:[a-z\u00a1-\uffff]{2,})$/i,hA=/^((\w+:(\/{2,})?)|(\W))/i,$r="Ctrl+K";function Cu(i,{writer:t}){const e=t.createAttributeElement("a",{href:i},{priority:5});return t.setCustomProperty("link",!0,e),e}function vu(i){return function(t){return t.replace(cA,"").match(lA)}(i=String(i))?i:"#"}function Qr(i,t){return!!i&&t.checkAttribute(i.name,"linkHref")}function yu(i,t){const e=(n=i,dA.test(n)?"mailto:":t);var n;const o=!!e&&!hA.test(i);return i&&o?e+i:i}function xu(i){window.open(i,"_blank","noopener")}class uA extends q{constructor(t){super(t),this.manualDecorators=new Yt,this.automaticDecorators=new Z_}restoreManualDecoratorStates(){for(const t of this.manualDecorators)t.value=this._getDecoratorStateFromModel(t.id)}refresh(){const t=this.editor.model,e=t.document.selection,n=e.getSelectedElement()||yt(e.getSelectedBlocks());Qr(n,t.schema)?(this.value=n.getAttribute("linkHref"),this.isEnabled=t.schema.checkAttribute(n,"linkHref")):(this.value=e.getAttribute("linkHref"),this.isEnabled=t.schema.checkAttributeInSelection(e,"linkHref"));for(const o of this.manualDecorators)o.value=this._getDecoratorStateFromModel(o.id)}execute(t,e={}){const n=this.editor.model,o=n.document.selection,r=[],s=[];for(const a in e)e[a]?r.push(a):s.push(a);n.change(a=>{if(o.isCollapsed){const c=o.getFirstPosition();if(o.hasAttribute("linkHref")){const l=Mn(c,"linkHref",o.getAttribute("linkHref"),n);a.setAttribute("linkHref",t,l),r.forEach(d=>{a.setAttribute(d,!0,l)}),s.forEach(d=>{a.removeAttribute(d,l)}),a.setSelection(a.createPositionAfter(l.end.nodeBefore))}else if(t!==""){const l=de(o.getAttributes());l.set("linkHref",t),r.forEach(h=>{l.set(h,!0)});const{end:d}=n.insertContent(a.createText(t,l),c);a.setSelection(d)}["linkHref",...r,...s].forEach(l=>{a.removeSelectionAttribute(l)})}else{const c=n.schema.getValidRanges(o.getRanges(),"linkHref"),l=[];for(const h of o.getSelectedBlocks())n.schema.checkAttribute(h,"linkHref")&&l.push(a.createRangeOn(h));const d=l.slice();for(const h of c)this._isRangeToUpdate(h,l)&&d.push(h);for(const h of d)a.setAttribute("linkHref",t,h),r.forEach(u=>{a.setAttribute(u,!0,h)}),s.forEach(u=>{a.removeAttribute(u,h)})}})}_getDecoratorStateFromModel(t){const e=this.editor.model,n=e.document.selection,o=n.getSelectedElement();return Qr(o,e.schema)?o.getAttribute(t):n.getAttribute(t)}_isRangeToUpdate(t,e){for(const n of e)if(n.containsRange(t))return!1;return!0}}class gA extends q{refresh(){const t=this.editor.model,e=t.document.selection,n=e.getSelectedElement();Qr(n,t.schema)?this.isEnabled=t.schema.checkAttribute(n,"linkHref"):this.isEnabled=t.schema.checkAttributeInSelection(e,"linkHref")}execute(){const t=this.editor,e=this.editor.model,n=e.document.selection,o=t.commands.get("link");e.change(r=>{const s=n.isCollapsed?[Mn(n.getFirstPosition(),"linkHref",n.getAttribute("linkHref"),e)]:e.schema.getValidRanges(n.getRanges(),"linkHref");for(const a of s)if(r.removeAttribute("linkHref",a),o)for(const c of o.manualDecorators)r.removeAttribute(c.id,a)})}}class Eu{constructor({id:t,label:e,attributes:n,classes:o,styles:r,defaultValue:s}){this.id=t,this.set("value"),this.defaultValue=s,this.label=e,this.attributes=n,this.classes=o,this.styles=r}_createPattern(){return{attributes:this.attributes,classes:this.classes,styles:this.styles}}}z(Eu,st);var Du=S(9773),mA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Du.Z,mA),Du.Z.locals;const Iu="automatic",pA=/^(https?:)?\/\//;class fA extends T{static get pluginName(){return"LinkEditing"}static get requires(){return[nh,th,fe]}constructor(t){super(t),t.config.define("link",{addTargetToExternalLinks:!1})}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:"linkHref"}),t.conversion.for("dataDowncast").attributeToElement({model:"linkHref",view:Cu}),t.conversion.for("editingDowncast").attributeToElement({model:"linkHref",view:(n,o)=>Cu(vu(n),o)}),t.conversion.for("upcast").elementToAttribute({view:{name:"a",attributes:{href:!0}},model:{key:"linkHref",value:n=>n.getAttribute("href")}}),t.commands.add("link",new uA(t)),t.commands.add("unlink",new gA(t));const e=function(n,o){const r={"Open in a new tab":n("Open in a new tab"),Downloadable:n("Downloadable")};return o.forEach(s=>(s.label&&r[s.label]&&(s.label=r[s.label]),s)),o}(t.t,function(n){const o=[];if(n)for(const[r,s]of Object.entries(n)){const a=Object.assign({},s,{id:`link${aA(r)}`});o.push(a)}return o}(t.config.get("link.decorators")));this._enableAutomaticDecorators(e.filter(n=>n.mode===Iu)),this._enableManualDecorators(e.filter(n=>n.mode==="manual")),t.plugins.get(nh).registerAttribute("linkHref"),function(n,o,r,s){const a=n.editing.view,c=new Set;a.document.registerPostFixer(l=>{const d=n.model.document.selection;let h=!1;if(d.hasAttribute(o)){const u=Mn(d.getFirstPosition(),o,d.getAttribute(o),n.model),g=n.editing.mapper.toViewRange(u);for(const p of g.getItems())p.is("element",r)&&!p.hasClass(s)&&(l.addClass(s,p),c.add(p),h=!0)}return h}),n.conversion.for("editingDowncast").add(l=>{function d(){a.change(h=>{for(const u of c.values())h.removeClass(s,u),c.delete(u)})}l.on("insert",d,{priority:"highest"}),l.on("remove",d,{priority:"highest"}),l.on("attribute",d,{priority:"highest"}),l.on("selection",d,{priority:"highest"})})}(t,"linkHref","a","ck-link_selected"),this._enableLinkOpen(),this._enableInsertContentSelectionAttributesFixer(),this._enableClickingAfterLink(),this._enableTypingOverLink(),this._handleDeleteContentAfterLink()}_enableAutomaticDecorators(t){const e=this.editor,n=e.commands.get("link").automaticDecorators;e.config.get("link.addTargetToExternalLinks")&&n.add({id:"linkIsExternal",mode:Iu,callback:o=>pA.test(o),attributes:{target:"_blank",rel:"noopener noreferrer"}}),n.add(t),n.length&&e.conversion.for("downcast").add(n.getDispatcher())}_enableManualDecorators(t){if(!t.length)return;const e=this.editor,n=e.commands.get("link").manualDecorators;t.forEach(o=>{e.model.schema.extend("$text",{allowAttributes:o.id}),o=new Eu(o),n.add(o),e.conversion.for("downcast").attributeToElement({model:o.id,view:(r,{writer:s,schema:a},{item:c})=>{if(a.isInline(c)&&r){const l=s.createAttributeElement("a",o.attributes,{priority:5});o.classes&&s.addClass(o.classes,l);for(const d in o.styles)s.setStyle(d,o.styles[d],l);return s.setCustomProperty("link",!0,l),l}}}),e.conversion.for("upcast").elementToAttribute({view:{name:"a",...o._createPattern()},model:{key:o.id}})})}_enableLinkOpen(){const t=this.editor,e=t.editing.view.document,n=t.model.document;this.listenTo(e,"click",(o,r)=>{if(!(nt.isMac?r.domEvent.metaKey:r.domEvent.ctrlKey))return;let s=r.domTarget;if(s.tagName.toLowerCase()!="a"&&(s=s.closest("a")),!s)return;const a=s.getAttribute("href");a&&(o.stop(),r.preventDefault(),xu(a))},{context:"$capture"}),this.listenTo(e,"enter",(o,r)=>{const s=n.selection,a=s.getSelectedElement(),c=a?a.getAttribute("linkHref"):s.getAttribute("linkHref");c&&r.domEvent.altKey&&(o.stop(),xu(c))},{context:"a"})}_enableInsertContentSelectionAttributesFixer(){const t=this.editor.model,e=t.document.selection;this.listenTo(t,"insertContent",()=>{const n=e.anchor.nodeBefore,o=e.anchor.nodeAfter;e.hasAttribute("linkHref")&&n&&n.hasAttribute("linkHref")&&(o&&o.hasAttribute("linkHref")||t.change(r=>{Zr(r,Jr(t.schema))}))},{priority:"low"})}_enableClickingAfterLink(){const t=this.editor,e=t.model;t.editing.view.addObserver(Wo);let n=!1;this.listenTo(t.editing.view.document,"mousedown",()=>{n=!0}),this.listenTo(t.editing.view.document,"selectionChange",()=>{if(!n)return;n=!1;const o=e.document.selection;if(!o.isCollapsed||!o.hasAttribute("linkHref"))return;const r=o.getFirstPosition(),s=Mn(r,"linkHref",o.getAttribute("linkHref"),e);(r.isTouching(s.start)||r.isTouching(s.end))&&e.change(a=>{Zr(a,Jr(e.schema))})})}_enableTypingOverLink(){const t=this.editor,e=t.editing.view;let n,o;this.listenTo(e.document,"delete",()=>{o=!0},{priority:"high"}),this.listenTo(t.model,"deleteContent",()=>{const r=t.model.document.selection;r.isCollapsed||(o?o=!1:Mu(t)&&function(s){const a=s.document.selection,c=a.getFirstPosition(),l=a.getLastPosition(),d=c.nodeAfter;if(!d||!d.is("$text")||!d.hasAttribute("linkHref"))return!1;const h=l.textNode||l.nodeBefore;return d===h?!0:Mn(c,"linkHref",d.getAttribute("linkHref"),s).containsRange(s.createRange(c,l),!0)}(t.model)&&(n=r.getAttributes()))},{priority:"high"}),this.listenTo(t.model,"insertContent",(r,[s])=>{o=!1,Mu(t)&&n&&(t.model.change(a=>{for(const[c,l]of n)a.setAttribute(c,l,s)}),n=null)},{priority:"high"})}_handleDeleteContentAfterLink(){const t=this.editor,e=t.model,n=e.document.selection,o=t.editing.view;let r=!1,s=!1;this.listenTo(o.document,"delete",(a,c)=>{s=c.domEvent.keyCode===G.backspace},{priority:"high"}),this.listenTo(e,"deleteContent",()=>{r=!1;const a=n.getFirstPosition(),c=n.getAttribute("linkHref");if(!c)return;const l=Mn(a,"linkHref",c,e);r=l.containsPosition(a)||l.end.isEqual(a)},{priority:"high"}),this.listenTo(e,"deleteContent",()=>{s&&(s=!1,r||t.model.enqueueChange(a=>{Zr(a,Jr(e.schema))}))},{priority:"low"})}}function Zr(i,t){i.removeSelectionAttribute("linkHref");for(const e of t)i.removeSelectionAttribute(e)}function Mu(i){return i.model.change(t=>t.batch).isTyping}function Jr(i){return i.getDefinition("$text").allowAttributes.filter(t=>t.startsWith("link"))}var Su=S(7754),kA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Su.Z,kA),Su.Z.locals;class bA extends H{constructor(t,e){super(t);const n=t.t;this.focusTracker=new $t,this.keystrokes=new Ce,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(n("Save"),Zt.check,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(n("Cancel"),Zt.cancel,"ck-button-cancel","cancel"),this._manualDecoratorSwitches=this._createManualDecoratorSwitches(e),this.children=this._createFormChildren(e.manualDecorators),this._focusables=new Ze,this._focusCycler=new xn({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}});const o=["ck","ck-link-form","ck-responsive-form"];e.manualDecorators.length&&o.push("ck-link-form_layout-vertical","ck-vertical-form"),this.setTemplate({tag:"form",attributes:{class:o,tabindex:"-1"},children:this.children}),gr(this)}getDecoratorSwitchesState(){return Array.from(this._manualDecoratorSwitches).reduce((t,e)=>(t[e.name]=e.isOn,t),{})}render(){super.render(),mr({view:this}),[this.urlInputView,...this._manualDecoratorSwitches,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}_createUrlInput(){const t=this.locale.t,e=new Ar(this.locale,Cr);return e.label=t("Link URL"),e}_createButton(t,e,n,o){const r=new dt(this.locale);return r.set({label:t,icon:e,tooltip:!0}),r.extendTemplate({attributes:{class:n}}),o&&r.delegate("execute").to(this,o),r}_createManualDecoratorSwitches(t){const e=this.createCollection();for(const n of t.manualDecorators){const o=new kr(this.locale);o.set({name:n.id,label:n.label,withText:!0}),o.bind("isOn").toMany([n,t],"value",(r,s)=>s===void 0&&r===void 0?n.defaultValue:r),o.on("execute",()=>{n.set("value",!o.isOn)}),e.add(o)}return e}_createFormChildren(t){const e=this.createCollection();if(e.add(this.urlInputView),t.length){const n=new H;n.setTemplate({tag:"ul",children:this._manualDecoratorSwitches.map(o=>({tag:"li",children:[o],attributes:{class:["ck","ck-list__item"]}})),attributes:{class:["ck","ck-reset","ck-list"]}}),e.add(n)}return e.add(this.saveButtonView),e.add(this.cancelButtonView),e}}var Tu=S(2347),wA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Tu.Z,wA),Tu.Z.locals;class _A extends H{constructor(t){super(t);const e=t.t;this.focusTracker=new $t,this.keystrokes=new Ce,this.previewButtonView=this._createPreviewButton(),this.unlinkButtonView=this._createButton(e("Unlink"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zm4.919 10.562-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></svg>',"unlink"),this.editButtonView=this._createButton(e("Edit link"),Zt.pencil,"edit"),this.set("href"),this._focusables=new Ze,this._focusCycler=new xn({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-link-actions","ck-responsive-form"],tabindex:"-1"},children:[this.previewButtonView,this.editButtonView,this.unlinkButtonView]})}render(){super.render(),[this.previewButtonView,this.editButtonView,this.unlinkButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}_createButton(t,e,n){const o=new dt(this.locale);return o.set({label:t,icon:e,tooltip:!0}),o.delegate("execute").to(this,n),o}_createPreviewButton(){const t=new dt(this.locale),e=this.bindTemplate,n=this.t;return t.set({withText:!0,tooltip:n("Open link in new tab")}),t.extendTemplate({attributes:{class:["ck","ck-link-actions__preview"],href:e.to("href",o=>o&&vu(o)),target:"_blank",rel:"noopener noreferrer"}}),t.bind("label").to(this,"href",o=>o||n("This link has no URL")),t.bind("isEnabled").to(this,"href",o=>!!o),t.template.tag="a",t.template.eventListeners={},t}}const ke="link-ui";class AA extends T{static get requires(){return[Go]}static get pluginName(){return"LinkUI"}init(){const t=this.editor;t.editing.view.addObserver(Kb),this.actionsView=this._createActionsView(),this.formView=this._createFormView(),this._balloon=t.plugins.get(Go),this._createToolbarLinkButton(),this._enableUserBalloonInteractions(),t.conversion.for("editingDowncast").markerToHighlight({model:ke,view:{classes:["ck-fake-link-selection"]}}),t.conversion.for("editingDowncast").markerToElement({model:ke,view:{name:"span",classes:["ck-fake-link-selection","ck-fake-link-selection_collapsed"]}})}destroy(){super.destroy(),this.formView.destroy()}_createActionsView(){const t=this.editor,e=new _A(t.locale),n=t.commands.get("link"),o=t.commands.get("unlink");return e.bind("href").to(n,"value"),e.editButtonView.bind("isEnabled").to(n),e.unlinkButtonView.bind("isEnabled").to(o),this.listenTo(e,"edit",()=>{this._addFormView()}),this.listenTo(e,"unlink",()=>{t.execute("unlink"),this._hideUI()}),e.keystrokes.set("Esc",(r,s)=>{this._hideUI(),s()}),e.keystrokes.set($r,(r,s)=>{this._addFormView(),s()}),e}_createFormView(){const t=this.editor,e=t.commands.get("link"),n=t.config.get("link.defaultProtocol"),o=new bA(t.locale,e);return o.urlInputView.fieldView.bind("value").to(e,"value"),o.urlInputView.bind("isReadOnly").to(e,"isEnabled",r=>!r),o.saveButtonView.bind("isEnabled").to(e),this.listenTo(o,"submit",()=>{const{value:r}=o.urlInputView.fieldView.element,s=yu(r,n);t.execute("link",s,o.getDecoratorSwitchesState()),this._closeFormView()}),this.listenTo(o,"cancel",()=>{this._closeFormView()}),o.keystrokes.set("Esc",(r,s)=>{this._closeFormView(),s()}),o}_createToolbarLinkButton(){const t=this.editor,e=t.commands.get("link"),n=t.t;t.keystrokes.set($r,(o,r)=>{r(),e.isEnabled&&this._showUI(!0)}),t.ui.componentFactory.add("link",o=>{const r=new dt(o);return r.isEnabled=!0,r.label=n("Link"),r.icon='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"/></svg>',r.keystroke=$r,r.tooltip=!0,r.isToggleable=!0,r.bind("isEnabled").to(e,"isEnabled"),r.bind("isOn").to(e,"value",s=>!!s),this.listenTo(r,"execute",()=>this._showUI(!0)),r})}_enableUserBalloonInteractions(){const t=this.editor.editing.view.document;this.listenTo(t,"click",()=>{this._getSelectedLinkElement()&&this._showUI()}),this.editor.keystrokes.set("Tab",(e,n)=>{this._areActionsVisible&&!this.actionsView.focusTracker.isFocused&&(this.actionsView.focus(),n())},{priority:"high"}),this.editor.keystrokes.set("Esc",(e,n)=>{this._isUIVisible&&(this._hideUI(),n())}),ur({emitter:this.formView,activator:()=>this._isUIInPanel,contextElements:[this._balloon.view.element],callback:()=>this._hideUI()})}_addActionsView(){this._areActionsInPanel||this._balloon.add({view:this.actionsView,position:this._getBalloonPositionData()})}_addFormView(){if(this._isFormInPanel)return;const t=this.editor.commands.get("link");this.formView.disableCssTransitions(),this._balloon.add({view:this.formView,position:this._getBalloonPositionData()}),this._balloon.visibleView===this.formView&&this.formView.urlInputView.fieldView.select(),this.formView.enableCssTransitions(),this.formView.urlInputView.fieldView.element.value=t.value||""}_closeFormView(){const t=this.editor.commands.get("link");t.restoreManualDecoratorStates(),t.value!==void 0?this._removeFormView():this._hideUI()}_removeFormView(){this._isFormInPanel&&(this.formView.saveButtonView.focus(),this._balloon.remove(this.formView),this.editor.editing.view.focus(),this._hideFakeVisualSelection())}_showUI(t=!1){this._getSelectedLinkElement()?(this._areActionsVisible?this._addFormView():this._addActionsView(),t&&this._balloon.showStack("main")):(this._showFakeVisualSelection(),this._addActionsView(),t&&this._balloon.showStack("main"),this._addFormView()),this._startUpdatingUI()}_hideUI(){if(!this._isUIInPanel)return;const t=this.editor;this.stopListening(t.ui,"update"),this.stopListening(this._balloon,"change:visibleView"),t.editing.view.focus(),this._removeFormView(),this._balloon.remove(this.actionsView),this._hideFakeVisualSelection()}_startUpdatingUI(){const t=this.editor,e=t.editing.view.document;let n=this._getSelectedLinkElement(),o=s();const r=()=>{const a=this._getSelectedLinkElement(),c=s();n&&!a||!n&&c!==o?this._hideUI():this._isUIVisible&&this._balloon.updatePosition(this._getBalloonPositionData()),n=a,o=c};function s(){return e.selection.focus.getAncestors().reverse().find(a=>a.is("element"))}this.listenTo(t.ui,"update",r),this.listenTo(this._balloon,"change:visibleView",r)}get _isFormInPanel(){return this._balloon.hasView(this.formView)}get _areActionsInPanel(){return this._balloon.hasView(this.actionsView)}get _areActionsVisible(){return this._balloon.visibleView===this.actionsView}get _isUIInPanel(){return this._isFormInPanel||this._areActionsInPanel}get _isUIVisible(){return this._balloon.visibleView==this.formView||this._areActionsVisible}_getBalloonPositionData(){const t=this.editor.editing.view,e=this.editor.model,n=t.document;let o=null;if(e.markers.has(ke)){const r=Array.from(this.editor.editing.mapper.markerNameToElements(ke)),s=t.createRange(t.createPositionBefore(r[0]),t.createPositionAfter(r[r.length-1]));o=t.domConverter.viewRangeToDom(s)}else o=()=>{const r=this._getSelectedLinkElement();return r?t.domConverter.mapViewToDom(r):t.domConverter.viewRangeToDom(n.selection.getFirstRange())};return{target:o}}_getSelectedLinkElement(){const t=this.editor.editing.view,e=t.document.selection,n=e.getSelectedElement();if(e.isCollapsed||n&&ft(n))return Xr(e.getFirstPosition());{const o=e.getFirstRange().getTrimmed(),r=Xr(o.start),s=Xr(o.end);return r&&r==s&&t.createRangeIn(r).getTrimmed().isEqual(o)?r:null}}_showFakeVisualSelection(){const t=this.editor.model;t.change(e=>{const n=t.document.selection.getFirstRange();if(t.markers.has(ke))e.updateMarker(ke,{range:n});else if(n.start.isAtEnd){const o=n.start.getLastMatchingPosition(({item:r})=>!t.schema.isContent(r),{boundaries:n});e.addMarker(ke,{usingOperation:!1,affectsData:!1,range:e.createRange(o,n.end)})}else e.addMarker(ke,{usingOperation:!1,affectsData:!1,range:n})})}_hideFakeVisualSelection(){const t=this.editor.model;t.markers.has(ke)&&t.change(e=>{e.removeMarker(ke)})}}function Xr(i){return i.getAncestors().find(t=>{return(e=t).is("attributeElement")&&!!e.getCustomProperty("link");var e})}const CA=new RegExp("(^|\\s)(((?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(((?!www\\.)|(www\\.))(?![-_])(?:[-_a-z0-9\\u00a1-\\uffff]{1,63}\\.)+(?:[a-z\\u00a1-\\uffff]{2,63})))(?::\\d{2,5})?(?:[/?#]\\S*)?)|((www.|(\\S+@))((?![-_])(?:[-_a-z0-9\\u00a1-\\uffff]{1,63}\\.))+(?:[a-z\\u00a1-\\uffff]{2,63})))$","i");class vA extends T{static get requires(){return[ze]}static get pluginName(){return"AutoLink"}init(){const t=this.editor.model.document.selection;t.on("change:range",()=>{this.isEnabled=!t.anchor.parent.is("element","codeBlock")}),this._enableTypingHandling()}afterInit(){this._enableEnterHandling(),this._enableShiftEnterHandling()}_enableTypingHandling(){const t=this.editor,e=new Br(t.model,n=>{if(!function(r){return r.length>4&&r[r.length-1]===" "&&r[r.length-2]!==" "}(n))return;const o=Nu(n.substr(0,n.length-1));return o?{url:o}:void 0});e.on("matched:data",(n,o)=>{const{batch:r,range:s,url:a}=o;if(!r.isTyping)return;const c=s.end.getShiftedBy(-1),l=c.getShiftedBy(-a.length),d=t.model.createRange(l,c);this._applyAutoLink(a,d)}),e.bind("isEnabled").to(this)}_enableEnterHandling(){const t=this.editor,e=t.model,n=t.commands.get("enter");n&&n.on("execute",()=>{const o=e.document.selection.getFirstPosition();if(!o.parent.previousSibling)return;const r=e.createRangeIn(o.parent.previousSibling);this._checkAndApplyAutoLinkOnRange(r)})}_enableShiftEnterHandling(){const t=this.editor,e=t.model,n=t.commands.get("shiftEnter");n&&n.on("execute",()=>{const o=e.document.selection.getFirstPosition(),r=e.createRange(e.createPositionAt(o.parent,0),o.getShiftedBy(-1));this._checkAndApplyAutoLinkOnRange(r)})}_checkAndApplyAutoLinkOnRange(t){const e=this.editor.model,{text:n,range:o}=eh(t,e),r=Nu(n);if(r){const s=e.createRange(o.end.getShiftedBy(-r.length),o.end);this._applyAutoLink(r,s)}}_applyAutoLink(t,e){const n=this.editor.model,o=this.editor.plugins.get("Delete");this.isEnabled&&function(r,s){return s.schema.checkAttributeInSelection(s.createSelection(r),"linkHref")}(e,n)&&n.enqueueChange(r=>{const s=this.editor.config.get("link.defaultProtocol"),a=yu(t,s);r.setAttribute("linkHref",a,e),n.enqueueChange(()=>{o.requestUndoOnBackspace()})})}}function Nu(i){const t=CA.exec(i);return t?t[2]:null}class Bu extends q{constructor(t,e){super(t),this.type=e}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(t={}){const e=this.editor.model,n=e.document,o=Array.from(n.selection.getSelectedBlocks()).filter(s=>zu(s,e.schema)),r=t.forceValue!==void 0?!t.forceValue:this.value;e.change(s=>{if(r){let a=o[o.length-1].nextSibling,c=Number.POSITIVE_INFINITY,l=[];for(;a&&a.name=="listItem"&&a.getAttribute("listIndent")!==0;){const d=a.getAttribute("listIndent");d<c&&(c=d);const h=d-c;l.push({element:a,listIndent:h}),a=a.nextSibling}l=l.reverse();for(const d of l)s.setAttribute("listIndent",d.listIndent,d.element)}if(!r){let a=Number.POSITIVE_INFINITY;for(const c of o)c.is("element","listItem")&&c.getAttribute("listIndent")<a&&(a=c.getAttribute("listIndent"));a=a===0?1:a,Pu(o,!0,a),Pu(o,!1,a)}for(const a of o.reverse())r&&a.name=="listItem"?s.rename(a,"paragraph"):r||a.name=="listItem"?r||a.name!="listItem"||a.getAttribute("listType")==this.type||s.setAttribute("listType",this.type,a):(s.setAttributes({listType:this.type,listIndent:0},a),s.rename(a,"listItem"));this.fire("_executeCleanup",o)})}_getValue(){const t=yt(this.editor.model.document.selection.getSelectedBlocks());return!!t&&t.is("element","listItem")&&t.getAttribute("listType")==this.type}_checkEnabled(){if(this.value)return!0;const t=this.editor.model.document.selection,e=this.editor.model.schema,n=yt(t.getSelectedBlocks());return!!n&&zu(n,e)}}function Pu(i,t,e){const n=t?i[0]:i[i.length-1];if(n.is("element","listItem")){let o=n[t?"previousSibling":"nextSibling"],r=n.getAttribute("listIndent");for(;o&&o.is("element","listItem")&&o.getAttribute("listIndent")>=e;)r>o.getAttribute("listIndent")&&(r=o.getAttribute("listIndent")),o.getAttribute("listIndent")==r&&i[t?"unshift":"push"](o),o=o[t?"previousSibling":"nextSibling"]}}function zu(i,t){return t.checkChild(i.parent,"listItem")&&!t.isObject(i)}class Lu extends q{constructor(t,e){super(t),this._indentBy=e=="forward"?1:-1}refresh(){this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=t.document;let n=Array.from(e.selection.getSelectedBlocks());t.change(o=>{const r=n[n.length-1];let s=r.nextSibling;for(;s&&s.name=="listItem"&&s.getAttribute("listIndent")>r.getAttribute("listIndent");)n.push(s),s=s.nextSibling;this._indentBy<0&&(n=n.reverse());for(const a of n){const c=a.getAttribute("listIndent")+this._indentBy;c<0?o.rename(a,"paragraph"):o.setAttribute("listIndent",c,a)}this.fire("_executeCleanup",n)})}_checkEnabled(){const t=yt(this.editor.model.document.selection.getSelectedBlocks());if(!t||!t.is("element","listItem"))return!1;if(this._indentBy>0){const e=t.getAttribute("listIndent"),n=t.getAttribute("listType");let o=t.previousSibling;for(;o&&o.is("element","listItem")&&o.getAttribute("listIndent")>=e;){if(o.getAttribute("listIndent")==e)return o.getAttribute("listType")==n;o=o.previousSibling}return!1}return!0}}function yA(i,t){const e=t.mapper,n=t.writer,o=i.getAttribute("listType")=="numbered"?"ol":"ul",r=function(a){const c=a.createContainerElement("li");return c.getFillerOffset=xA,c}(n),s=n.createContainerElement(o,null);return n.insert(n.createPositionAt(s,0),r),e.bindElements(i,r),r}function Ou(i,t,e,n){const o=t.parent,r=e.mapper,s=e.writer;let a=r.toViewPosition(n.createPositionBefore(i));const c=ju(i.previousSibling,{sameIndent:!0,smallerIndent:!0,listIndent:i.getAttribute("listIndent")}),l=i.previousSibling;if(c&&c.getAttribute("listIndent")==i.getAttribute("listIndent")){const d=r.toViewElement(c);a=s.breakContainer(s.createPositionAfter(d))}else if(l&&l.name=="listItem"){a=r.toViewPosition(n.createPositionAt(l,"end"));const d=r.findMappedViewAncestor(a),h=function(u){for(const g of u.getChildren())if(g.name=="ul"||g.name=="ol")return g;return null}(d);a=h?s.createPositionBefore(h):s.createPositionAt(d,"end")}else a=r.toViewPosition(n.createPositionBefore(i));if(a=Ru(a),s.insert(a,o),l&&l.name=="listItem"){const d=r.toViewElement(l),h=s.createRange(s.createPositionAt(d,0),a).getWalker({ignoreElementEnd:!0});for(const u of h)if(u.item.is("element","li")){const g=s.breakContainer(s.createPositionBefore(u.item)),p=u.item.parent,f=s.createPositionAt(t,"end");Xt(s,f.nodeBefore,f.nodeAfter),s.move(s.createRangeOn(p),f),h.position=g}}else{const d=o.nextSibling;if(d&&(d.is("element","ul")||d.is("element","ol"))){let h=null;for(const u of d.getChildren()){const g=r.toModelElement(u);if(!(g&&g.getAttribute("listIndent")>i.getAttribute("listIndent")))break;h=u}h&&(s.breakContainer(s.createPositionAfter(h)),s.move(s.createRangeOn(h.parent),s.createPositionAt(t,"end")))}}Xt(s,o,o.nextSibling),Xt(s,o.previousSibling,o)}function Xt(i,t,e){return!t||!e||t.name!="ul"&&t.name!="ol"||t.name!=e.name||t.getAttribute("class")!==e.getAttribute("class")?null:i.mergeContainers(i.createPositionAfter(t))}function Ru(i){return i.getLastMatchingPosition(t=>t.item.is("uiElement"))}function ju(i,t){const e=!!t.sameIndent,n=!!t.smallerIndent,o=t.listIndent;let r=i;for(;r&&r.name=="listItem";){const s=r.getAttribute("listIndent");if(e&&o==s||n&&o>s)return r;r=t.direction==="forward"?r.nextSibling:r.previousSibling}return null}function Fu(i,t,e,n){i.ui.componentFactory.add(t,o=>{const r=i.commands.get(t),s=new dt(o);return s.set({label:e,icon:n,tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(r,"value","isEnabled"),s.on("execute",()=>{i.execute(t),i.editing.view.focus()}),s})}function xA(){const i=!this.isEmpty&&(this.getChild(0).name=="ul"||this.getChild(0).name=="ol");return this.isEmpty||i?0:_a.call(this)}function Vu(i){return(t,e,n)=>{const o=n.consumable;if(!o.test(e.item,"insert")||!o.test(e.item,"attribute:listType")||!o.test(e.item,"attribute:listIndent"))return;o.consume(e.item,"insert"),o.consume(e.item,"attribute:listType"),o.consume(e.item,"attribute:listIndent");const r=e.item;Ou(r,yA(r,n),n,i)}}function EA(i,t,e){if(!e.consumable.test(t.item,i.name))return;const n=e.mapper.toViewElement(t.item),o=e.writer;o.breakContainer(o.createPositionBefore(n)),o.breakContainer(o.createPositionAfter(n));const r=n.parent,s=t.attributeNewValue=="numbered"?"ol":"ul";o.rename(s,r)}function DA(i,t,e){e.consumable.consume(t.item,i.name);const n=e.mapper.toViewElement(t.item).parent,o=e.writer;Xt(o,n,n.nextSibling),Xt(o,n.previousSibling,n)}function Uu(i,t,e){if(e.consumable.test(t.item,i.name)&&t.item.name!="listItem"){let n=e.mapper.toViewPosition(t.range.start);const o=e.writer,r=[];for(;(n.parent.name=="ul"||n.parent.name=="ol")&&(n=o.breakContainer(n),n.parent.name=="li");){const s=n,a=o.createPositionAt(n.parent,"end");if(!s.isEqual(a)){const c=o.remove(o.createRange(s,a));r.push(c)}n=o.createPositionAfter(n.parent)}if(r.length>0){for(let s=0;s<r.length;s++){const a=n.nodeBefore;if(n=o.insert(n,r[s]).end,s>0){const c=Xt(o,a,a.nextSibling);c&&c.parent==a&&n.offset--}}Xt(o,n.nodeBefore,n.nodeAfter)}}}function IA(i,t,e){const n=e.mapper.toViewPosition(t.position),o=n.nodeBefore,r=n.nodeAfter;Xt(e.writer,o,r)}function MA(i,t,e){if(e.consumable.consume(t.viewItem,{name:!0})){const n=e.writer,o=n.createElement("listItem"),r=function(c){let l=0,d=c.parent;for(;d;){if(d.is("element","li"))l++;else{const h=d.previousSibling;h&&h.is("element","li")&&l++}d=d.parent}return l}(t.viewItem);n.setAttribute("listIndent",r,o);const s=t.viewItem.parent&&t.viewItem.parent.name=="ol"?"numbered":"bulleted";if(n.setAttribute("listType",s,o),!e.safeInsert(o,t.modelCursor))return;const a=function(c,l,d){const{writer:h,schema:u}=d;let g=h.createPositionAfter(c);for(const p of l)if(p.name=="ul"||p.name=="ol")g=d.convertItem(p,g).modelCursor;else{const f=d.convertItem(p,h.createPositionAt(c,"end")),b=f.modelRange.start.nodeAfter;b&&b.is("element")&&!u.checkChild(c,b.name)&&(c=f.modelCursor.parent.is("element","listItem")?f.modelCursor.parent:NA(f.modelCursor),g=h.createPositionAfter(c))}return g}(o,t.viewItem.getChildren(),e);t.modelRange=n.createRange(t.modelCursor,a),e.updateConversionResult(o,t)}}function Hu(i,t,e){if(e.consumable.test(t.viewItem,{name:!0})){const n=Array.from(t.viewItem.getChildren());for(const o of n)!(o.is("element","li")||Bn(o))&&o._remove()}}function SA(i,t,e){if(e.consumable.test(t.viewItem,{name:!0})){if(t.viewItem.childCount===0)return;const n=[...t.viewItem.getChildren()];let o=!1;for(const r of n)o&&!Bn(r)&&r._remove(),Bn(r)&&(o=!0)}}function Gu(i){return(t,e)=>{if(e.isPhantom)return;const n=e.modelPosition.nodeBefore;if(n&&n.is("element","listItem")){const o=e.mapper.toViewElement(n),r=o.getAncestors().find(Bn),s=i.createPositionAt(o,0).getWalker();for(const a of s){if(a.type=="elementStart"&&a.item.is("element","li")){e.viewPosition=a.previousPosition;break}if(a.type=="elementEnd"&&a.item==r){e.viewPosition=a.nextPosition;break}}}}}function TA(i,[t,e]){let n,o=t.is("documentFragment")?t.getChild(0):t;if(n=e?this.createSelection(e):this.document.selection,o&&o.is("element","listItem")){const r=n.getFirstPosition();let s=null;if(r.parent.is("element","listItem")?s=r.parent:r.nodeBefore&&r.nodeBefore.is("element","listItem")&&(s=r.nodeBefore),s){const a=s.getAttribute("listIndent");if(a>0)for(;o&&o.is("element","listItem");)o._setAttribute("listIndent",o.getAttribute("listIndent")+a),o=o.nextSibling}}}function NA(i){const t=new ve({startPosition:i});let e;do e=t.next();while(!e.value.item.is("element","listItem"));return e.value.item}function qu(i,t,e,n,o,r){const s=ju(t.nodeBefore,{sameIndent:!0,smallerIndent:!0,listIndent:i,foo:"b"}),a=o.mapper,c=o.writer,l=s?s.getAttribute("listIndent"):null;let d;if(s)if(l==i){const h=a.toViewElement(s).parent;d=c.createPositionAfter(h)}else{const h=r.createPositionAt(s,"end");d=a.toViewPosition(h)}else d=e;d=Ru(d);for(const h of[...n.getChildren()])Bn(h)&&(d=c.move(c.createRangeOn(h),d).end,Xt(c,h,h.nextSibling),Xt(c,h.previousSibling,h))}function Bn(i){return i.is("element","ol")||i.is("element","ul")}class BA extends T{static get pluginName(){return"ListEditing"}static get requires(){return[Yo,ze]}init(){const t=this.editor;t.model.schema.register("listItem",{inheritAllFrom:"$block",allowAttributes:["listType","listIndent"]});const e=t.data,n=t.editing;var o;t.model.document.registerPostFixer(s=>function(a,c){const l=a.document.differ.getChanges(),d=new Map;let h=!1;for(const f of l)if(f.type=="insert"&&f.name=="listItem")u(f.position);else if(f.type=="insert"&&f.name!="listItem"){if(f.name!="$text"){const b=f.position.nodeAfter;b.hasAttribute("listIndent")&&(c.removeAttribute("listIndent",b),h=!0),b.hasAttribute("listType")&&(c.removeAttribute("listType",b),h=!0),b.hasAttribute("listStyle")&&(c.removeAttribute("listStyle",b),h=!0),b.hasAttribute("listReversed")&&(c.removeAttribute("listReversed",b),h=!0),b.hasAttribute("listStart")&&(c.removeAttribute("listStart",b),h=!0);for(const w of Array.from(a.createRangeIn(b)).filter(_=>_.item.is("element","listItem")))u(w.previousPosition)}u(f.position.getShiftedBy(f.length))}else f.type=="remove"&&f.name=="listItem"?u(f.position):(f.type=="attribute"&&f.attributeKey=="listIndent"||f.type=="attribute"&&f.attributeKey=="listType")&&u(f.range.start);for(const f of d.values())g(f),p(f);return h;function u(f){const b=f.nodeBefore;if(b&&b.is("element","listItem")){let w=b;if(d.has(w))return;for(let _=w.previousSibling;_&&_.is("element","listItem");_=w.previousSibling)if(w=_,d.has(w))return;d.set(b,w)}else{const w=f.nodeAfter;w&&w.is("element","listItem")&&d.set(w,w)}}function g(f){let b=0,w=null;for(;f&&f.is("element","listItem");){const _=f.getAttribute("listIndent");if(_>b){let I;w===null?(w=_-b,I=b):(w>_&&(w=_),I=_-w),c.setAttribute("listIndent",I,f),h=!0}else w=null,b=f.getAttribute("listIndent")+1;f=f.nextSibling}}function p(f){let b=[],w=null;for(;f&&f.is("element","listItem");){const _=f.getAttribute("listIndent");if(w&&w.getAttribute("listIndent")>_&&(b=b.slice(0,_+1)),_!=0)if(b[_]){const I=b[_];f.getAttribute("listType")!=I&&(c.setAttribute("listType",I,f),h=!0)}else b[_]=f.getAttribute("listType");w=f,f=f.nextSibling}}}(t.model,s)),n.mapper.registerViewToModelLength("li",ts),e.mapper.registerViewToModelLength("li",ts),n.mapper.on("modelToViewPosition",Gu(n.view)),n.mapper.on("viewToModelPosition",(o=t.model,(s,a)=>{const c=a.viewPosition,l=c.parent,d=a.mapper;if(l.name=="ul"||l.name=="ol"){if(c.isAtEnd){const h=d.toModelElement(c.nodeBefore),u=d.getModelLength(c.nodeBefore);a.modelPosition=o.createPositionBefore(h).getShiftedBy(u)}else{const h=d.toModelElement(c.nodeAfter);a.modelPosition=o.createPositionBefore(h)}s.stop()}else if(l.name=="li"&&c.nodeBefore&&(c.nodeBefore.name=="ul"||c.nodeBefore.name=="ol")){const h=d.toModelElement(l);let u=1,g=c.nodeBefore;for(;g&&Bn(g);)u+=d.getModelLength(g),g=g.previousSibling;a.modelPosition=o.createPositionBefore(h).getShiftedBy(u),s.stop()}})),e.mapper.on("modelToViewPosition",Gu(n.view)),t.conversion.for("editingDowncast").add(s=>{s.on("insert",Uu,{priority:"high"}),s.on("insert:listItem",Vu(t.model)),s.on("attribute:listType:listItem",EA,{priority:"high"}),s.on("attribute:listType:listItem",DA,{priority:"low"}),s.on("attribute:listIndent:listItem",function(a){return(c,l,d)=>{if(!d.consumable.consume(l.item,"attribute:listIndent"))return;const h=d.mapper.toViewElement(l.item),u=d.writer;u.breakContainer(u.createPositionBefore(h)),u.breakContainer(u.createPositionAfter(h));const g=h.parent,p=g.previousSibling,f=u.createRangeOn(g);u.remove(f),p&&p.nextSibling&&Xt(u,p,p.nextSibling),qu(l.attributeOldValue+1,l.range.start,f.start,h,d,a),Ou(l.item,h,d,a);for(const b of l.item.getChildren())d.consumable.consume(b,"insert")}}(t.model)),s.on("remove:listItem",function(a){return(c,l,d)=>{const h=d.mapper.toViewPosition(l.position).getLastMatchingPosition(w=>!w.item.is("element","li")).nodeAfter,u=d.writer;u.breakContainer(u.createPositionBefore(h)),u.breakContainer(u.createPositionAfter(h));const g=h.parent,p=g.previousSibling,f=u.createRangeOn(g),b=u.remove(f);p&&p.nextSibling&&Xt(u,p,p.nextSibling),qu(d.mapper.toModelElement(h).getAttribute("listIndent")+1,l.position,f.start,h,d,a);for(const w of u.createRangeIn(b).getItems())d.mapper.unbindViewElement(w);c.stop()}}(t.model)),s.on("remove",IA,{priority:"low"})}),t.conversion.for("dataDowncast").add(s=>{s.on("insert",Uu,{priority:"high"}),s.on("insert:listItem",Vu(t.model))}),t.conversion.for("upcast").add(s=>{s.on("element:ul",Hu,{priority:"high"}),s.on("element:ol",Hu,{priority:"high"}),s.on("element:li",SA,{priority:"high"}),s.on("element:li",MA)}),t.model.on("insertContent",TA,{priority:"high"}),t.commands.add("numberedList",new Bu(t,"numbered")),t.commands.add("bulletedList",new Bu(t,"bulleted")),t.commands.add("indentList",new Lu(t,"forward")),t.commands.add("outdentList",new Lu(t,"backward"));const r=n.view.document;this.listenTo(r,"enter",(s,a)=>{const c=this.editor.model.document,l=c.selection.getLastPosition().parent;c.selection.isCollapsed&&l.name=="listItem"&&l.isEmpty&&(this.editor.execute("outdentList"),a.preventDefault(),s.stop())},{context:"li"}),this.listenTo(r,"delete",(s,a)=>{if(a.direction!=="backward")return;const c=this.editor.model.document.selection;if(!c.isCollapsed)return;const l=c.getFirstPosition();if(!l.isAtStart)return;const d=l.parent;d.name==="listItem"&&(d.previousSibling&&d.previousSibling.name==="listItem"||(this.editor.execute("outdentList"),a.preventDefault(),s.stop()))},{context:"li"}),this.listenTo(t.editing.view.document,"tab",(s,a)=>{const c=a.shiftKey?"outdentList":"indentList";this.editor.commands.get(c).isEnabled&&(t.execute(c),a.stopPropagation(),a.preventDefault(),s.stop())},{context:"li"})}afterInit(){const t=this.editor.commands,e=t.get("indent"),n=t.get("outdent");e&&e.registerChildCommand(t.get("indentList")),n&&n.registerChildCommand(t.get("outdentList"))}}function ts(i){let t=1;for(const e of i.getChildren())if(e.name=="ul"||e.name=="ol")for(const n of e.getChildren())t+=ts(n);return t}class PA extends T{static get pluginName(){return"ListUI"}init(){const t=this.editor.t;Fu(this.editor,"numberedList",t("Numbered List"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>'),Fu(this.editor,"bulletedList",t("Bulleted List"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"/></svg>')}}function Wu(i,t){return n=>{n.on("attribute:url:media",e)};function e(n,o,r){if(!r.consumable.consume(o.item,n.name))return;const s=o.attributeNewValue,a=r.writer,c=r.mapper.toViewElement(o.item),l=[...c.getChildren()].find(h=>h.getCustomProperty("media-content"));a.remove(l);const d=i.getMediaViewElement(a,s,t);a.insert(a.createPositionAt(c,0),d)}}function Yu(i,t,e,n){return i.createContainerElement("figure",{class:"media"},[t.getMediaViewElement(i,e,n),i.createSlot()])}function Ku(i){const t=i.getSelectedElement();return t&&t.is("element","media")?t:null}function $u(i,t,e,n){i.change(o=>{const r=o.createElement("media",{url:t});i.insertObject(r,e,null,{setSelection:"on",findOptimalPosition:n})})}class zA extends q{refresh(){const t=this.editor.model,e=t.document.selection,n=Ku(e);this.value=n?n.getAttribute("url"):null,this.isEnabled=function(o){const r=o.getSelectedElement();return!!r&&r.name==="media"}(e)||function(o,r){let s=Pd(o,r).start.parent;return s.isEmpty&&!r.schema.isLimit(s)&&(s=s.parent),r.schema.checkChild(s,"media")}(e,t)}execute(t){const e=this.editor.model,n=e.document.selection,o=Ku(n);o?e.change(r=>{r.setAttribute("url",t,o)}):$u(e,t,n,!0)}}class LA{constructor(t,e){const n=e.providers,o=e.extraProviders||[],r=new Set(e.removeProviders),s=n.concat(o).filter(a=>{const c=a.name;return c?!r.has(c):(A("media-embed-no-provider-name",{provider:a}),!1)});this.locale=t,this.providerDefinitions=s}hasMedia(t){return!!this._getMedia(t)}getMediaViewElement(t,e,n){return this._getMedia(e).getViewElement(t,n)}_getMedia(t){if(!t)return new Qu(this.locale);t=t.trim();for(const e of this.providerDefinitions){const n=e.html,o=vt(e.url);for(const r of o){const s=this._getUrlMatches(t,r);if(s)return new Qu(this.locale,t,s,n)}}return null}_getUrlMatches(t,e){let n=t.match(e);if(n)return n;let o=t.replace(/^https?:\/\//,"");return n=o.match(e),n||(o=o.replace(/^www\./,""),n=o.match(e),n||null)}}class Qu{constructor(t,e,n,o){this.url=this._getValidUrl(e),this._t=t.t,this._match=n,this._previewRenderer=o}getViewElement(t,e){const n={};let o;if(e.renderForEditingView||e.renderMediaPreview&&this.url&&this._previewRenderer){this.url&&(n["data-oembed-url"]=this.url),e.renderForEditingView&&(n.class="ck-media__wrapper");const r=this._getPreviewHtml(e);o=t.createRawElement("div",n,(s,a)=>{a.setContentOf(s,r)})}else this.url&&(n.url=this.url),o=t.createEmptyElement(e.elementName,n);return t.setCustomProperty("media-content",!0,o),o}_getPreviewHtml(t){return this._previewRenderer?this._previewRenderer(this._match):this.url&&t.renderForEditingView?this._getPlaceholderHtml():""}_getPlaceholderHtml(){const t=new Nl,e=new Uo;return t.text=this._t("Open media in new tab"),e.content='<svg viewBox="0 0 64 42" xmlns="http://www.w3.org/2000/svg"><path d="M47.426 17V3.713L63.102 0v19.389h-.001l.001.272c0 1.595-2.032 3.43-4.538 4.098-2.506.668-4.538-.083-4.538-1.678 0-1.594 2.032-3.43 4.538-4.098.914-.244 2.032-.565 2.888-.603V4.516L49.076 7.447v9.556A1.014 1.014 0 0 0 49 17h-1.574zM29.5 17h-8.343a7.073 7.073 0 1 0-4.657 4.06v3.781H3.3a2.803 2.803 0 0 1-2.8-2.804V8.63a2.803 2.803 0 0 1 2.8-2.805h4.082L8.58 2.768A1.994 1.994 0 0 1 10.435 1.5h8.985c.773 0 1.477.448 1.805 1.149l1.488 3.177H26.7c1.546 0 2.8 1.256 2.8 2.805V17zm-11.637 0H17.5a1 1 0 0 0-1 1v.05A4.244 4.244 0 1 1 17.863 17zm29.684 2c.97 0 .953-.048.953.889v20.743c0 .953.016.905-.953.905H19.453c-.97 0-.953.048-.953-.905V19.89c0-.937-.016-.889.97-.889h28.077zm-4.701 19.338V22.183H24.154v16.155h18.692zM20.6 21.375v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616V37.53H20.6zm24.233-16.155v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615V37.53h-1.615zM29.485 25.283a.4.4 0 0 1 .593-.35l9.05 4.977a.4.4 0 0 1 0 .701l-9.05 4.978a.4.4 0 0 1-.593-.35v-9.956z"/></svg>',e.viewBox="0 0 64 42",new Ut({tag:"div",attributes:{class:"ck ck-reset_all ck-media__placeholder"},children:[{tag:"div",attributes:{class:"ck-media__placeholder__icon"},children:[e]},{tag:"a",attributes:{class:"ck-media__placeholder__url",target:"_blank",rel:"noopener noreferrer",href:this.url},children:[{tag:"span",attributes:{class:"ck-media__placeholder__url__text"},children:[this.url]},t]}]}).render().outerHTML}_getValidUrl(t){return t?t.match(/^https?/)?t:"https://"+t:null}}var Zu=S(7442),OA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Zu.Z,OA),Zu.Z.locals;class ni extends T{static get pluginName(){return"MediaEmbedEditing"}constructor(t){super(t),t.config.define("mediaEmbed",{elementName:"oembed",providers:[{name:"dailymotion",url:/^dailymotion\.com\/video\/(\w+)/,html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; "><iframe src="https://www.dailymotion.com/embed/video/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" width="480" height="270" allowfullscreen allow="autoplay"></iframe></div>`},{name:"spotify",url:[/^open\.spotify\.com\/(artist\/\w+)/,/^open\.spotify\.com\/(album\/\w+)/,/^open\.spotify\.com\/(track\/\w+)/],html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;"><iframe src="https://open.spotify.com/embed/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`},{name:"youtube",url:[/^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/,/^(?:m\.)?youtube\.com\/v\/([\w-]+)/,/^youtube\.com\/embed\/([\w-]+)/,/^youtu\.be\/([\w-]+)/],html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"><iframe src="https://www.youtube.com/embed/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`},{name:"vimeo",url:[/^vimeo\.com\/(\d+)/,/^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/album\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/channels\/[^/]+\/(\d+)/,/^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/,/^vimeo\.com\/ondemand\/[^/]+\/(\d+)/,/^player\.vimeo\.com\/video\/(\d+)/],html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"><iframe src="https://player.vimeo.com/video/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>`},{name:"instagram",url:/^instagram\.com\/p\/(\w+)/},{name:"twitter",url:/^twitter\.com/},{name:"googleMaps",url:[/^google\.com\/maps/,/^goo\.gl\/maps/,/^maps\.google\.com/,/^maps\.app\.goo\.gl/]},{name:"flickr",url:/^flickr\.com/},{name:"facebook",url:/^facebook\.com/}]}),this.registry=new LA(t.locale,t.config.get("mediaEmbed"))}init(){const t=this.editor,e=t.model.schema,n=t.t,o=t.conversion,r=t.config.get("mediaEmbed.previewsInData"),s=t.config.get("mediaEmbed.elementName"),a=this.registry;t.commands.add("mediaEmbed",new zA(t)),e.register("media",{inheritAllFrom:"$blockObject",allowAttributes:["url"]}),o.for("dataDowncast").elementToStructure({model:"media",view:(c,{writer:l})=>{const d=c.getAttribute("url");return Yu(l,a,d,{elementName:s,renderMediaPreview:d&&r})}}),o.for("dataDowncast").add(Wu(a,{elementName:s,renderMediaPreview:r})),o.for("editingDowncast").elementToStructure({model:"media",view:(c,{writer:l})=>{const d=c.getAttribute("url");return function(h,u,g){return u.setCustomProperty("media",!0,h),Tr(h,u,{label:g})}(Yu(l,a,d,{elementName:s,renderForEditingView:!0}),l,n("media widget"))}}),o.for("editingDowncast").add(Wu(a,{elementName:s,renderForEditingView:!0})),o.for("upcast").elementToElement({view:c=>["oembed",s].includes(c.name)&&c.getAttribute("url")?{name:!0}:null,model:(c,{writer:l})=>{const d=c.getAttribute("url");if(a.hasMedia(d))return l.createElement("media",{url:d})}}).elementToElement({view:{name:"div",attributes:{"data-oembed-url":!0}},model:(c,{writer:l})=>{const d=c.getAttribute("data-oembed-url");if(a.hasMedia(d))return l.createElement("media",{url:d})}}).add(c=>{c.on("element:figure",function(l,d,h){if(!h.consumable.consume(d.viewItem,{name:!0,classes:"media"}))return;const{modelRange:u,modelCursor:g}=h.convertChildren(d.viewItem,d.modelCursor);d.modelRange=u,d.modelCursor=g,yt(u.getItems())||h.consumable.revert(d.viewItem,{name:!0,classes:"media"})})})}}const RA=/^(?:http(s)?:\/\/)?[\w-]+\.[\w-.~:/?#[\]@!$&'()*+,;=%]+$/;class jA extends T{static get requires(){return[$d,ze,lh]}static get pluginName(){return"AutoMediaEmbed"}constructor(t){super(t),this._timeoutId=null,this._positionToInsert=null}init(){const t=this.editor,e=t.model.document;this.listenTo(t.plugins.get("ClipboardPipeline"),"inputTransformation",()=>{const n=e.selection.getFirstRange(),o=It.fromPosition(n.start);o.stickiness="toPrevious";const r=It.fromPosition(n.end);r.stickiness="toNext",e.once("change:data",()=>{this._embedMediaBetweenPositions(o,r),o.detach(),r.detach()},{priority:"high"})}),t.commands.get("undo").on("execute",()=>{this._timeoutId&&(pt.window.clearTimeout(this._timeoutId),this._positionToInsert.detach(),this._timeoutId=null,this._positionToInsert=null)},{priority:"high"})}_embedMediaBetweenPositions(t,e){const n=this.editor,o=n.plugins.get(ni).registry,r=new pe(t,e),s=r.getWalker({ignoreElementEnd:!0});let a="";for(const c of s)c.item.is("$textProxy")&&(a+=c.item.data);if(a=a.trim(),!a.match(RA)||!o.hasMedia(a))return void r.detach();n.commands.get("mediaEmbed").isEnabled?(this._positionToInsert=It.fromPosition(t),this._timeoutId=pt.window.setTimeout(()=>{n.model.change(c=>{let l;this._timeoutId=null,c.remove(r),r.detach(),this._positionToInsert.root.rootName!=="$graveyard"&&(l=this._positionToInsert),$u(n.model,a,l,!1),this._positionToInsert.detach(),this._positionToInsert=null}),n.plugins.get("Delete").requestUndoOnBackspace()},100)):r.detach()}}var Ju=S(9292),FA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Ju.Z,FA),Ju.Z.locals;class VA extends H{constructor(t,e){super(e);const n=e.t;this.focusTracker=new $t,this.keystrokes=new Ce,this.set("mediaURLInputValue",""),this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(n("Save"),Zt.check,"ck-button-save"),this.saveButtonView.type="submit",this.saveButtonView.bind("isEnabled").to(this,"mediaURLInputValue",o=>!!o),this.cancelButtonView=this._createButton(n("Cancel"),Zt.cancel,"ck-button-cancel","cancel"),this._focusables=new Ze,this._focusCycler=new xn({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this._validators=t,this.setTemplate({tag:"form",attributes:{class:["ck","ck-media-form","ck-responsive-form"],tabindex:"-1"},children:[this.urlInputView,this.saveButtonView,this.cancelButtonView]}),gr(this)}render(){super.render(),mr({view:this}),[this.urlInputView,this.saveButtonView,this.cancelButtonView].forEach(e=>{this._focusables.add(e),this.focusTracker.add(e.element)}),this.keystrokes.listenTo(this.element);const t=e=>e.stopPropagation();this.keystrokes.set("arrowright",t),this.keystrokes.set("arrowleft",t),this.keystrokes.set("arrowup",t),this.keystrokes.set("arrowdown",t),this.listenTo(this.urlInputView.element,"selectstart",(e,n)=>{n.stopPropagation()},{priority:"high"})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}get url(){return this.urlInputView.fieldView.element.value.trim()}set url(t){this.urlInputView.fieldView.element.value=t.trim()}isValid(){this.resetFormStatus();for(const t of this._validators){const e=t(this);if(e)return this.urlInputView.errorText=e,!1}return!0}resetFormStatus(){this.urlInputView.errorText=null,this.urlInputView.infoText=this._urlInputViewInfoDefault}_createUrlInput(){const t=this.locale.t,e=new Ar(this.locale,Cr),n=e.fieldView;return this._urlInputViewInfoDefault=t("Paste the media URL in the input."),this._urlInputViewInfoTip=t("Tip: Paste the URL into the content to embed faster."),e.label=t("Media URL"),e.infoText=this._urlInputViewInfoDefault,n.on("input",()=>{e.infoText=n.element.value?this._urlInputViewInfoTip:this._urlInputViewInfoDefault,this.mediaURLInputValue=n.element.value.trim()}),e}_createButton(t,e,n,o){const r=new dt(this.locale);return r.set({label:t,icon:e,tooltip:!0}),r.extendTemplate({attributes:{class:n}}),o&&r.delegate("execute").to(this,o),r}}class UA extends T{static get requires(){return[ni]}static get pluginName(){return"MediaEmbedUI"}init(){const t=this.editor,e=t.commands.get("mediaEmbed"),n=t.plugins.get(ni).registry;t.ui.componentFactory.add("mediaEmbed",o=>{const r=Je(o),s=new VA(function(a,c){return[l=>{if(!l.url.length)return a("The URL must not be empty.")},l=>{if(!c.hasMedia(l.url))return a("This media URL is not supported.")}]}(t.t,n),t.locale);return this._setUpDropdown(r,s,e,t),this._setUpForm(r,s,e),r})}_setUpDropdown(t,e,n){const o=this.editor,r=o.t,s=t.buttonView;function a(){o.editing.view.focus(),t.isOpen=!1}t.bind("isEnabled").to(n),t.panelView.children.add(e),s.set({label:r("Insert media"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18.68 3.03c.6 0 .59-.03.59.55v12.84c0 .59.01.56-.59.56H1.29c-.6 0-.59.03-.59-.56V3.58c0-.58-.01-.55.6-.55h17.38zM15.77 15V5H4.2v10h11.57zM2 4v1h1V4H2zm0 2v1h1V6H2zm0 2v1h1V8H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zM17 4v1h1V4h-1zm0 2v1h1V6h-1zm0 2v1h1V8h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zM7.5 7.177a.4.4 0 0 1 .593-.351l5.133 2.824a.4.4 0 0 1 0 .7l-5.133 2.824a.4.4 0 0 1-.593-.35V7.176v.001z"/></svg>',tooltip:!0}),s.on("open",()=>{e.disableCssTransitions(),e.url=n.value||"",e.urlInputView.fieldView.select(),e.focus(),e.enableCssTransitions()},{priority:"low"}),t.on("submit",()=>{e.isValid()&&(o.execute("mediaEmbed",e.url),a())}),t.on("change:isOpen",()=>e.resetFormStatus()),t.on("cancel",()=>a())}_setUpForm(t,e,n){e.delegate("submit","cancel").to(t),e.urlInputView.bind("value").to(n,"value"),e.urlInputView.bind("isReadOnly").to(n,"isEnabled",o=>!o)}}var Xu=S(4652),HA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Xu.Z,HA),Xu.Z.locals;function GA(i,t){if(!i.childCount)return;const e=new Dn(i.document),n=function(s,a){const c=a.createRangeIn(s),l=new he({name:/^p|h\d+$/,styles:{"mso-list":/.*/}}),d=[];for(const h of c)if(h.type==="elementStart"&&l.match(h.item)){const u=WA(h.item);d.push({element:h.item,id:u.id,order:u.order,indent:u.indent})}return d}(i,e);if(!n.length)return;let o=null,r=1;n.forEach((s,a)=>{const c=function(p,f){if(!p)return!0;if(p.id!==f.id)return f.indent-p.indent!=1;const b=f.element.previousSibling;if(!b)return!0;return w=b,!(w.is("element","ol")||w.is("element","ul"));var w}(n[a-1],s),l=c?null:n[a-1],d=(u=s,(h=l)?u.indent-h.indent:u.indent-1);var h,u;if(c&&(o=null,r=1),!o||d!==0){const p=function(f,b){const w=new RegExp(`@list l${f.id}:level${f.indent}\\s*({[^}]*)`,"gi"),_=/mso-level-number-format:([^;]{0,100});/gi,I=/mso-level-start-at:\s{0,100}([0-9]{0,10})\s{0,100};/gi,P=w.exec(b);let R="decimal",ot="ol",$=null;if(P&&P[1]){const Tt=_.exec(P[1]);if(Tt&&Tt[1]&&(R=Tt[1].trim(),ot=R!=="bullet"&&R!=="image"?"ol":"ul"),R==="bullet"){const Ct=function(Ht){const te=function(Ie){if(Ie.getChild(0).is("$text"))return null;for(const Me of Ie.getChildren()){if(!Me.is("element","span"))continue;const zn=Me.getChild(0);return zn.is("$text")?zn:zn.getChild(0)}}(Ht);if(!te)return null;const ee=te._data;return ee==="o"?"circle":ee==="\xB7"?"disc":ee==="\xA7"?"square":null}(f.element);Ct&&(R=Ct)}else{const Ct=I.exec(P[1]);Ct&&Ct[1]&&($=parseInt(Ct[1]))}}return{type:ot,startIndex:$,style:qA(R)}}(s,t);if(o){if(s.indent>r){const f=o.getChild(o.childCount-1),b=f.getChild(f.childCount-1);o=tg(p,b,e),r+=1}else if(s.indent<r){const f=r-s.indent;o=function(b,w){const _=b.getAncestors({parentFirst:!0});let I=null,P=0;for(const R of _)if(R.name!=="ul"&&R.name!=="ol"||P++,P===w){I=R;break}return I}(o,f),r=parseInt(s.indent)}}else o=tg(p,s.element,e);s.indent<=r&&(o.is("element",p.type)||(o=e.rename(p.type,o)))}const g=function(p,f){return function(b,w){const _=new he({name:"span",styles:{"mso-list":"Ignore"}}),I=w.createRangeIn(b);for(const P of I)P.type==="elementStart"&&_.match(P.item)&&w.remove(P.item)}(p,f),f.rename("li",p)}(s.element,e);e.appendChild(g,o)})}function qA(i){if(i.startsWith("arabic-leading-zero"))return"decimal-leading-zero";switch(i){case"alpha-upper":return"upper-alpha";case"alpha-lower":return"lower-alpha";case"roman-upper":return"upper-roman";case"roman-lower":return"lower-roman";case"circle":case"disc":case"square":return i;default:return null}}function tg(i,t,e){const n=t.parent,o=e.createElement(i.type),r=n.getChildIndex(t)+1;return e.insertChild(r,o,n),i.style&&e.setStyle("list-style-type",i.style,o),i.startIndex&&i.startIndex>1&&e.setAttribute("start",i.startIndex,o),o}function WA(i){const t={},e=i.getStyle("mso-list");if(e){const n=e.match(/(^|\s{1,100})l(\d+)/i),o=e.match(/\s{0,100}lfo(\d+)/i),r=e.match(/\s{0,100}level(\d+)/i);n&&o&&r&&(t.id=n[2],t.order=o[1],t.indent=r[1])}return t}const YA=/id=("|')docs-internal-guid-[-0-9a-f]+("|')/i;class KA{constructor(t){this.document=t}isActive(t){return YA.test(t)}execute(t){const e=new Dn(this.document),{body:n}=t._parsedData;(function(o,r){for(const s of o.getChildren())if(s.is("element","b")&&s.getStyle("font-weight")==="normal"){const a=o.getChildIndex(s);r.remove(s),r.insertChild(a,s.getChildren(),o)}})(n,e),function(o,r){for(const s of r.createRangeIn(o)){const a=s.item;if(a.is("element","li")){const c=a.getChild(0);c&&c.is("element","p")&&r.unwrapElement(c)}}}(n,e),t.content=n}}function $A(i,t){if(!i.childCount)return;const e=new Dn,n=function(r,s){const a=s.createRangeIn(r),c=new he({name:/v:(.+)/}),l=[];for(const d of a){if(d.type!="elementStart")continue;const h=d.item,u=h.previousSibling&&h.previousSibling.name||null;c.match(h)&&h.getAttribute("o:gfxdata")&&u!=="v:shapetype"&&l.push(d.item.getAttribute("id"))}return l}(i,e);(function(r,s,a){const c=a.createRangeIn(s),l=new he({name:"img"}),d=[];for(const h of c)if(l.match(h.item)){const u=h.item,g=u.getAttribute("v:shapes")?u.getAttribute("v:shapes").split(" "):[];g.length&&g.every(p=>r.indexOf(p)>-1)?d.push(u):u.getAttribute("src")||d.push(u)}for(const h of d)a.remove(h)})(n,i,e),function(r,s){const a=s.createRangeIn(r),c=new he({name:/v:(.+)/}),l=[];for(const d of a)d.type=="elementStart"&&c.match(d.item)&&l.push(d.item);for(const d of l)s.remove(d)}(i,e);const o=function(r,s){const a=s.createRangeIn(r),c=new he({name:"img"}),l=[];for(const d of a)c.match(d.item)&&d.item.getAttribute("src").startsWith("file://")&&l.push(d.item);return l}(i,e);o.length&&function(r,s,a){if(r.length===s.length)for(let c=0;c<r.length;c++){const l=`data:${s[c].type};base64,${QA(s[c].hex)}`;a.setAttribute("src",l,r[c])}}(o,function(r){if(!r)return[];const s=/{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/,a=new RegExp("(?:("+s.source+"))([\\da-fA-F\\s]+)\\}","g"),c=r.match(a),l=[];if(c)for(const d of c){let h=!1;d.includes("\\pngblip")?h="image/png":d.includes("\\jpegblip")&&(h="image/jpeg"),h&&l.push({hex:d.replace(s,"").replace(/[^\da-fA-F]/g,""),type:h})}return l}(t),e)}function QA(i){return btoa(i.match(/\w{2}/g).map(t=>String.fromCharCode(parseInt(t,16))).join(""))}const ZA=/<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/i,JA=/xmlns:o="urn:schemas-microsoft-com/i;class XA{constructor(t){this.document=t}isActive(t){return ZA.test(t)||JA.test(t)}execute(t){const{body:e,stylesString:n}=t._parsedData;GA(e,n),$A(e,t.dataTransfer.getData("text/rtf")),t.content=e}}function eg(i){return i.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(t,e)=>e.length===1?" ":Array(e.length+1).join("\xA0 ").substr(0,e.length))}function tC(i,t){const e=new DOMParser,n=function(c){return eg(eg(c)).replace(/(<span\s+style=['"]mso-spacerun:yes['"]>[^\S\r\n]*?)[\r\n]+([^\S\r\n]*<\/span>)/g,"$1$2").replace(/<span\s+style=['"]mso-spacerun:yes['"]><\/span>/g,"").replace(/ <\//g,"\xA0</").replace(/ <o:p><\/o:p>/g,"\xA0<o:p></o:p>").replace(/<o:p>(&nbsp;|\u00A0)<\/o:p>/g,"").replace(/>([^\S\r\n]*[\r\n]\s*)</g,"><")}(function(c){const l="</body>",d="</html>",h=c.indexOf(l);if(h<0)return c;const u=c.indexOf(d,h+l.length);return c.substring(0,h+l.length)+(u>=0?c.substring(u):"")}(i=i.replace(/<!--\[if gte vml 1]>/g,""))),o=e.parseFromString(n,"text/html");(function(c){c.querySelectorAll("span[style*=spacerun]").forEach(l=>{const d=l.innerText.length||0;l.innerHTML=Array(d+1).join("\xA0 ").substr(0,d)})})(o);const r=o.body.innerHTML,s=function(c,l){const d=new Zn(l),h=new To(d,{renderingMode:"data"}),u=c.createDocumentFragment(),g=c.body.childNodes;for(;g.length>0;)u.appendChild(g[0]);return h.domToView(u,{skipComments:!0})}(o,t),a=function(c){const l=[],d=[],h=Array.from(c.getElementsByTagName("style"));for(const u of h)u.sheet&&u.sheet.cssRules&&u.sheet.cssRules.length&&(l.push(u.sheet),d.push(u.innerHTML));return{styles:l,stylesString:d.join(" ")}}(o);return{body:s,bodyString:r,styles:a.styles,stylesString:a.stylesString}}function bt(i,t,e,n,o=1){t>o?n.setAttribute(i,t,e):n.removeAttribute(i,e)}function tn(i,t,e={}){const n=i.createElement("tableCell",e);return i.insertElement("paragraph",n),i.insert(n,t),n}function es(i,t){const e=t.parent.parent,n=parseInt(e.getAttribute("headingColumns")||0),{column:o}=i.getCellLocation(t);return!!n&&o<n}function eC(){return i=>{i.on("element:table",(t,e,n)=>{const o=e.viewItem;if(!n.consumable.test(o,{name:!0}))return;const{rows:r,headingRows:s,headingColumns:a}=function(d){const h={headingRows:0,headingColumns:0},u=[],g=[];let p;for(const f of Array.from(d.getChildren()))if(f.name==="tbody"||f.name==="thead"||f.name==="tfoot"){f.name!=="thead"||p||(p=f);const b=Array.from(f.getChildren()).filter(w=>w.is("element","tr"));for(const w of b)if(w.parent.name==="thead"&&w.parent===p)h.headingRows++,u.push(w);else{g.push(w);const _=nC(w);_>h.headingColumns&&(h.headingColumns=_)}}return h.rows=[...u,...g],h}(o),c={};a&&(c.headingColumns=a),s&&(c.headingRows=s);const l=n.writer.createElement("table",c);if(n.safeInsert(l,e.modelCursor)){if(n.consumable.consume(o,{name:!0}),r.forEach(d=>n.convertItem(d,n.writer.createPositionAt(l,"end"))),n.convertChildren(o,n.writer.createPositionAt(l,"end")),l.isEmpty){const d=n.writer.createElement("tableRow");n.writer.insert(d,n.writer.createPositionAt(l,"end")),tn(n.writer,n.writer.createPositionAt(d,"end"))}n.updateConversionResult(l,e)}})}}function ng(i){return t=>{t.on(`element:${i}`,(e,n,o)=>{if(n.modelRange&&n.viewItem.isEmpty){const r=n.modelRange.start.nodeAfter,s=o.writer.createPositionAt(r,0);o.writer.insertElement("paragraph",s)}},{priority:"low"})}}function nC(i){let t=0,e=0;const n=Array.from(i.getChildren()).filter(o=>o.name==="th"||o.name==="td");for(;e<n.length&&n[e].name==="th";){const o=n[e];t+=parseInt(o.getAttribute("colspan")||1),e++}return t}class et{constructor(t,e={}){this._table=t,this._startRow=e.row!==void 0?e.row:e.startRow||0,this._endRow=e.row!==void 0?e.row:e.endRow,this._startColumn=e.column!==void 0?e.column:e.startColumn||0,this._endColumn=e.column!==void 0?e.column:e.endColumn,this._includeAllSlots=!!e.includeAllSlots,this._skipRows=new Set,this._row=0,this._rowIndex=0,this._column=0,this._cellIndex=0,this._spannedCells=new Map,this._nextCellAtColumn=-1}[Symbol.iterator](){return this}next(){const t=this._table.getChild(this._rowIndex);if(!t||this._isOverEndRow())return{done:!0};if(!t.is("element","tableRow"))return this._rowIndex++,this.next();if(this._isOverEndColumn())return this._advanceToNextRow();let e=null;const n=this._getSpanned();if(n)this._includeAllSlots&&!this._shouldSkipSlot()&&(e=this._formatOutValue(n.cell,n.row,n.column));else{const o=t.getChild(this._cellIndex);if(!o)return this._advanceToNextRow();const r=parseInt(o.getAttribute("colspan")||1),s=parseInt(o.getAttribute("rowspan")||1);(r>1||s>1)&&this._recordSpans(o,s,r),this._shouldSkipSlot()||(e=this._formatOutValue(o)),this._nextCellAtColumn=this._column+r}return this._column++,this._column==this._nextCellAtColumn&&this._cellIndex++,e||this.next()}skipRow(t){this._skipRows.add(t)}_advanceToNextRow(){return this._row++,this._rowIndex++,this._column=0,this._cellIndex=0,this._nextCellAtColumn=-1,this.next()}_isOverEndRow(){return this._endRow!==void 0&&this._row>this._endRow}_isOverEndColumn(){return this._endColumn!==void 0&&this._column>this._endColumn}_formatOutValue(t,e=this._row,n=this._column){return{done:!1,value:new oC(this,t,e,n)}}_shouldSkipSlot(){const t=this._skipRows.has(this._row),e=this._row<this._startRow,n=this._column<this._startColumn,o=this._endColumn!==void 0&&this._column>this._endColumn;return t||e||n||o}_getSpanned(){const t=this._spannedCells.get(this._row);return t&&t.get(this._column)||null}_recordSpans(t,e,n){const o={cell:t,row:this._row,column:this._column};for(let r=this._row;r<this._row+e;r++)for(let s=this._column;s<this._column+n;s++)r==this._row&&s==this._column||this._markSpannedCell(r,s,o)}_markSpannedCell(t,e,n){this._spannedCells.has(t)||this._spannedCells.set(t,new Map),this._spannedCells.get(t).set(e,n)}}class oC{constructor(t,e,n,o){this.cell=e,this.row=t._row,this.column=t._column,this.cellAnchorRow=n,this.cellAnchorColumn=o,this._cellIndex=t._cellIndex,this._rowIndex=t._rowIndex,this._table=t._table}get isAnchor(){return this.row===this.cellAnchorRow&&this.column===this.cellAnchorColumn}get cellWidth(){return parseInt(this.cell.getAttribute("colspan")||1)}get cellHeight(){return parseInt(this.cell.getAttribute("rowspan")||1)}get rowIndex(){return this._rowIndex}getPositionBefore(){return this._table.root.document.model.createPositionAt(this._table.getChild(this.row),this._cellIndex)}}function og(i,t={}){return(e,{writer:n})=>{const o=e.getAttribute("headingRows")||0,r=[];o>0&&r.push(n.createContainerElement("thead",null,n.createSlot(a=>a.is("element","tableRow")&&a.index<o))),o<i.getRows(e)&&r.push(n.createContainerElement("tbody",null,n.createSlot(a=>a.is("element","tableRow")&&a.index>=o)));const s=n.createContainerElement("figure",{class:"table"},[n.createContainerElement("table",null,r),n.createSlot(a=>!a.is("element","tableRow"))]);return t.asWidget?function(a,c){return c.setCustomProperty("table",!0,a),Tr(a,c,{hasSelectionHandle:!0})}(s,n):s}}function ig(i={}){return(t,{writer:e})=>{const n=t.parent,o=n.parent,r=o.getChildIndex(n),s=new et(o,{row:r}),a=o.getAttribute("headingRows")||0,c=o.getAttribute("headingColumns")||0;for(const l of s)if(l.cell==t){const d=l.row<a||l.column<c?"th":"td";return i.asWidget?Bd(e.createEditableElement(d),e):e.createContainerElement(d)}}}function rg(i={}){return(t,{writer:e,consumable:n,mapper:o})=>{if(t.parent.is("element","tableCell")&&sg(t))return i.asWidget?e.createContainerElement("span",{class:"ck-table-bogus-paragraph"}):(n.consume(t,"insert"),void o.bindElements(t,o.toViewElement(t.parent)))}}function sg(i){return i.parent.childCount==1&&![...i.getAttributeKeys()].length}class iC extends q{refresh(){const t=this.editor.model,e=t.document.selection,n=t.schema;this.isEnabled=function(o,r){const s=o.getFirstPosition().parent,a=s===s.root?s:s.parent;return r.checkChild(a,"table")}(e,n)}execute(t={}){const e=this.editor.model,n=this.editor.plugins.get("TableUtils"),o=this.editor.config.get("table"),r=o.defaultHeadings.rows,s=o.defaultHeadings.columns;t.headingRows===void 0&&r&&(t.headingRows=r),t.headingColumns===void 0&&s&&(t.headingColumns=s),e.change(a=>{const c=n.createTable(a,t);e.insertObject(c,null,null,{findOptimalPosition:"auto"}),a.setSelection(a.createPositionAt(c.getNodeByPath([0,0,0]),0))})}}class ag extends q{constructor(t,e={}){super(t),this.order=e.order||"below"}refresh(){const t=this.editor.model.document.selection,e=!!this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(t).length;this.isEnabled=e}execute(){const t=this.editor,e=t.model.document.selection,n=t.plugins.get("TableUtils"),o=this.order==="above",r=n.getSelectionAffectedTableCells(e),s=n.getRowIndexes(r),a=o?s.first:s.last,c=r[0].findAncestor("table");n.insertRows(c,{at:o?a:a+1,copyStructureFromAbove:!o})}}class cg extends q{constructor(t,e={}){super(t),this.order=e.order||"right"}refresh(){const t=this.editor.model.document.selection,e=!!this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(t).length;this.isEnabled=e}execute(){const t=this.editor,e=t.model.document.selection,n=t.plugins.get("TableUtils"),o=this.order==="left",r=n.getSelectionAffectedTableCells(e),s=n.getColumnIndexes(r),a=o?s.first:s.last,c=r[0].findAncestor("table");n.insertColumns(c,{columns:1,at:o?a:a+1})}}class lg extends q{constructor(t,e={}){super(t),this.direction=e.direction||"horizontally"}refresh(){const t=this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(this.editor.model.document.selection);this.isEnabled=t.length===1}execute(){const t=this.editor.plugins.get("TableUtils"),e=t.getSelectionAffectedTableCells(this.editor.model.document.selection)[0];this.direction==="horizontally"?t.splitCellHorizontally(e,2):t.splitCellVertically(e,2)}}function dg(i,t,e){const{startRow:n,startColumn:o,endRow:r,endColumn:s}=t,a=e.createElement("table"),c=r-n+1;for(let d=0;d<c;d++)e.insertElement("tableRow",a,"end");const l=[...new et(i,{startRow:n,endRow:r,startColumn:o,endColumn:s,includeAllSlots:!0})];for(const{row:d,column:h,cell:u,isAnchor:g,cellAnchorRow:p,cellAnchorColumn:f}of l){const b=d-n,w=a.getChild(b);if(g){const _=e.cloneElement(u);e.append(_,w),pg(_,d,h,r,s,e)}else(p<n||f<o)&&tn(e,e.createPositionAt(w,"end"))}return function(d,h,u,g,p){const f=parseInt(h.getAttribute("headingRows")||0);f>0&&bt("headingRows",f-u,d,p,0);const b=parseInt(h.getAttribute("headingColumns")||0);b>0&&bt("headingColumns",b-g,d,p,0)}(a,i,n,o,e),a}function hg(i,t,e=0){const n=[],o=new et(i,{startRow:e,endRow:t-1});for(const r of o){const{row:s,cellHeight:a}=r,c=s+a-1;s<t&&t<=c&&n.push(r)}return n}function ug(i,t,e){const n=i.parent,o=n.parent,r=n.index,s=t-r,a={},c=parseInt(i.getAttribute("rowspan"))-s;c>1&&(a.rowspan=c);const l=parseInt(i.getAttribute("colspan")||1);l>1&&(a.colspan=l);const d=r+s,h=[...new et(o,{startRow:r,endRow:d,includeAllSlots:!0})];let u,g=null;for(const p of h){const{row:f,column:b,cell:w}=p;w===i&&u===void 0&&(u=b),u!==void 0&&u===b&&f===d&&(g=tn(e,p.getPositionBefore(),a))}return bt("rowspan",s,i,e),g}function gg(i,t){const e=[],n=new et(i);for(const o of n){const{column:r,cellWidth:s}=o,a=r+s-1;r<t&&t<=a&&e.push(o)}return e}function mg(i,t,e,n){const o=e-t,r={},s=parseInt(i.getAttribute("colspan"))-o;s>1&&(r.colspan=s);const a=parseInt(i.getAttribute("rowspan")||1);a>1&&(r.rowspan=a);const c=tn(n,n.createPositionAfter(i),r);return bt("colspan",o,i,n),c}function pg(i,t,e,n,o,r){const s=parseInt(i.getAttribute("colspan")||1),a=parseInt(i.getAttribute("rowspan")||1);e+s-1>o&&bt("colspan",o-e+1,i,r,1),t+a-1>n&&bt("rowspan",n-t+1,i,r,1)}function ns(i,t){const e=t.getColumns(i),n=new Array(e).fill(0);for(const{column:r}of new et(i))n[r]++;const o=n.reduce((r,s,a)=>s?r:[...r,a],[]);if(o.length>0){const r=o[o.length-1];return t.removeColumns(i,{at:r}),!0}return!1}function os(i,t){const e=[],n=t.getRows(i);for(let o=0;o<n;o++)i.getChild(o).isEmpty&&e.push(o);if(e.length>0){const o=e[e.length-1];return t.removeRows(i,{at:o}),!0}return!1}function is(i,t){ns(i,t)||os(i,t)}function fg(i,t){const e=Array.from(new et(i,{startColumn:t.firstColumn,endColumn:t.lastColumn,row:t.lastRow}));if(e.every(({cellHeight:o})=>o===1))return t.lastRow;const n=e[0].cellHeight-1;return t.lastRow+n}function kg(i,t){const e=Array.from(new et(i,{startRow:t.firstRow,endRow:t.lastRow,column:t.lastColumn}));if(e.every(({cellWidth:o})=>o===1))return t.lastColumn;const n=e[0].cellWidth-1;return t.lastColumn+n}class oi extends q{constructor(t,e){super(t),this.direction=e.direction,this.isHorizontal=this.direction=="right"||this.direction=="left"}refresh(){const t=this._getMergeableCell();this.value=t,this.isEnabled=!!t}execute(){const t=this.editor.model,e=t.document,n=this.editor.plugins.get("TableUtils").getTableCellsContainingSelection(e.selection)[0],o=this.value,r=this.direction;t.change(s=>{const a=r=="right"||r=="down",c=a?n:o,l=a?o:n,d=l.parent;(function(f,b,w){bg(f)||(bg(b)&&w.remove(w.createRangeIn(b)),w.move(w.createRangeIn(f),w.createPositionAt(b,"end"))),w.remove(f)})(l,c,s);const h=this.isHorizontal?"colspan":"rowspan",u=parseInt(n.getAttribute(h)||1),g=parseInt(o.getAttribute(h)||1);s.setAttribute(h,u+g,c),s.setSelection(s.createRangeIn(c));const p=this.editor.plugins.get("TableUtils");is(d.findAncestor("table"),p)})}_getMergeableCell(){const t=this.editor.model.document,e=this.editor.plugins.get("TableUtils"),n=e.getTableCellsContainingSelection(t.selection)[0];if(!n)return;const o=this.isHorizontal?function(a,c,l){const d=a.parent.parent,h=c=="right"?a.nextSibling:a.previousSibling,u=(d.getAttribute("headingColumns")||0)>0;if(!h)return;const g=c=="right"?a:h,p=c=="right"?h:a,{column:f}=l.getCellLocation(g),{column:b}=l.getCellLocation(p),w=parseInt(g.getAttribute("colspan")||1),_=es(l,g),I=es(l,p);if(!(u&&_!=I))return f+w===b?h:void 0}(n,this.direction,e):function(a,c,l){const d=a.parent,h=d.parent,u=h.getChildIndex(d);if(c=="down"&&u===l.getRows(h)-1||c=="up"&&u===0)return;const g=parseInt(a.getAttribute("rowspan")||1),p=h.getAttribute("headingRows")||0,f=c=="down"&&u+g===p,b=c=="up"&&u===p;if(p&&(f||b))return;const w=parseInt(a.getAttribute("rowspan")||1),_=c=="down"?u+w:u,I=[...new et(h,{endRow:_})],P=I.find(ot=>ot.cell===a).column,R=I.find(({row:ot,cellHeight:$,column:Tt})=>Tt===P&&(c=="down"?ot===_:_===ot+$));return R&&R.cell}(n,this.direction,e);if(!o)return;const r=this.isHorizontal?"rowspan":"colspan",s=parseInt(n.getAttribute(r)||1);return parseInt(o.getAttribute(r)||1)===s?o:void 0}}function bg(i){return i.childCount==1&&i.getChild(0).is("element","paragraph")&&i.getChild(0).isEmpty}class rC extends q{refresh(){const t=this.editor.plugins.get("TableUtils"),e=t.getSelectionAffectedTableCells(this.editor.model.document.selection),n=e[0];if(n){const o=n.findAncestor("table"),r=this.editor.plugins.get("TableUtils").getRows(o)-1,s=t.getRowIndexes(e),a=s.first===0&&s.last===r;this.isEnabled=!a}else this.isEnabled=!1}execute(){const t=this.editor.model,e=this.editor.plugins.get("TableUtils"),n=e.getSelectionAffectedTableCells(t.document.selection),o=e.getRowIndexes(n),r=n[0],s=r.findAncestor("table"),a=e.getCellLocation(r).column;t.change(c=>{const l=o.last-o.first+1;e.removeRows(s,{at:o.first,rows:l});const d=function(h,u,g,p){const f=h.getChild(Math.min(u,p-1));let b=f.getChild(0),w=0;for(const _ of f.getChildren()){if(w>g)return b;b=_,w+=parseInt(_.getAttribute("colspan")||1)}return b}(s,o.first,a,e.getRows(s));c.setSelection(c.createPositionAt(d,0))})}}class sC extends q{refresh(){const t=this.editor.plugins.get("TableUtils"),e=t.getSelectionAffectedTableCells(this.editor.model.document.selection),n=e[0];if(n){const o=n.findAncestor("table"),r=t.getColumns(o),{first:s,last:a}=t.getColumnIndexes(e);this.isEnabled=a-s<r-1}else this.isEnabled=!1}execute(){const t=this.editor.plugins.get("TableUtils"),[e,n]=function(c,l){const d=l.getSelectionAffectedTableCells(c),h=d[0],u=d.pop(),g=[h,u];return h.isBefore(u)?g:g.reverse()}(this.editor.model.document.selection,t),o=e.parent.parent,r=[...new et(o)],s={first:r.find(c=>c.cell===e).column,last:r.find(c=>c.cell===n).column},a=function(c,l,d,h){return parseInt(d.getAttribute("colspan")||1)>1?d:l.previousSibling||d.nextSibling?d.nextSibling||l.previousSibling:h.first?c.reverse().find(({column:u})=>u<h.first).cell:c.reverse().find(({column:u})=>u>h.last).cell}(r,e,n,s);this.editor.model.change(c=>{const l=s.last-s.first+1;this.editor.plugins.get("TableUtils").removeColumns(o,{at:s.first,columns:l}),c.setSelection(c.createPositionAt(a,0))})}}class aC extends q{refresh(){const t=this.editor.plugins.get("TableUtils"),e=this.editor.model,n=t.getSelectionAffectedTableCells(e.document.selection),o=n.length>0;this.isEnabled=o,this.value=o&&n.every(r=>this._isInHeading(r,r.parent.parent))}execute(t={}){if(t.forceValue===this.value)return;const e=this.editor.plugins.get("TableUtils"),n=this.editor.model,o=e.getSelectionAffectedTableCells(n.document.selection),r=o[0].findAncestor("table"),{first:s,last:a}=e.getRowIndexes(o),c=this.value?s:a+1,l=r.getAttribute("headingRows")||0;n.change(d=>{if(c){const h=hg(r,c,c>l?l:0);for(const{cell:u}of h)ug(u,c,d)}bt("headingRows",c,r,d,0)})}_isInHeading(t,e){const n=parseInt(e.getAttribute("headingRows")||0);return!!n&&t.parent.index<n}}class cC extends q{refresh(){const t=this.editor.model,e=this.editor.plugins.get("TableUtils"),n=e.getSelectionAffectedTableCells(t.document.selection),o=n.length>0;this.isEnabled=o,this.value=o&&n.every(r=>es(e,r))}execute(t={}){if(t.forceValue===this.value)return;const e=this.editor.plugins.get("TableUtils"),n=this.editor.model,o=e.getSelectionAffectedTableCells(n.document.selection),r=o[0].findAncestor("table"),{first:s,last:a}=e.getColumnIndexes(o),c=this.value?s:a+1;n.change(l=>{if(c){const d=gg(r,c);for(const{cell:h,column:u}of d)mg(h,u,c,l)}bt("headingColumns",c,r,l,0)})}}class Mt extends T{static get pluginName(){return"TableUtils"}init(){this.decorate("insertColumns"),this.decorate("insertRows")}getCellLocation(t){const e=t.parent,n=e.parent,o=n.getChildIndex(e),r=new et(n,{row:o});for(const{cell:s,row:a,column:c}of r)if(s===t)return{row:a,column:c}}createTable(t,e){const n=t.createElement("table"),o=parseInt(e.rows)||2,r=parseInt(e.columns)||2;return rs(t,n,0,o,r),e.headingRows&&bt("headingRows",Math.min(e.headingRows,o),n,t,0),e.headingColumns&&bt("headingColumns",Math.min(e.headingColumns,r),n,t,0),n}insertRows(t,e={}){const n=this.editor.model,o=e.at||0,r=e.rows||1,s=e.copyStructureFromAbove!==void 0,a=e.copyStructureFromAbove?o-1:o,c=this.getRows(t),l=this.getColumns(t);if(o>c)throw new m("tableutils-insertrows-insert-out-of-range",this,{options:e});n.change(d=>{const h=t.getAttribute("headingRows")||0;if(h>o&&bt("headingRows",h+r,t,d,0),!s&&(o===0||o===c))return void rs(d,t,o,r,l);const u=s?Math.max(o,a):o,g=new et(t,{endRow:u}),p=new Array(l).fill(1);for(const{row:f,column:b,cellHeight:w,cellWidth:_,cell:I}of g){const P=f+w-1,R=f<=a&&a<=P;f<o&&o<=P?(d.setAttribute("rowspan",w+r,I),p[b]=-_):s&&R&&(p[b]=_)}for(let f=0;f<r;f++){const b=d.createElement("tableRow");d.insert(b,t,o);for(let w=0;w<p.length;w++){const _=p[w],I=d.createPositionAt(b,"end");_>0&&tn(d,I,_>1?{colspan:_}:null),w+=Math.abs(_)-1}}})}insertColumns(t,e={}){const n=this.editor.model,o=e.at||0,r=e.columns||1;n.change(s=>{const a=t.getAttribute("headingColumns");o<a&&s.setAttribute("headingColumns",a+r,t);const c=this.getColumns(t);if(o===0||c===o){for(const d of t.getChildren())d.is("element","tableRow")&&Pn(r,s,s.createPositionAt(d,o?"end":0));return}const l=new et(t,{column:o,includeAllSlots:!0});for(const d of l){const{row:h,cell:u,cellAnchorColumn:g,cellAnchorRow:p,cellWidth:f,cellHeight:b}=d;if(g<o){s.setAttribute("colspan",f+r,u);const w=p+b-1;for(let _=h;_<=w;_++)l.skipRow(_)}else Pn(r,s,d.getPositionBefore())}})}removeRows(t,e){const n=this.editor.model,o=e.rows||1,r=this.getRows(t),s=e.at,a=s+o-1;if(a>r-1)throw new m("tableutils-removerows-row-index-out-of-range",this,{table:t,options:e});n.change(c=>{const{cellsToMove:l,cellsToTrim:d}=function(h,u,g){const p=new Map,f=[];for(const{row:b,column:w,cellHeight:_,cell:I}of new et(h,{endRow:g})){const P=b+_-1;if(b>=u&&b<=g&&P>g){const R=_-(g-b+1);p.set(w,{cell:I,rowspan:R})}if(b<u&&P>=u){let R;R=P>=g?g-u+1:P-u+1,f.push({cell:I,rowspan:_-R})}}return{cellsToMove:p,cellsToTrim:f}}(t,s,a);l.size&&function(h,u,g,p){const f=[...new et(h,{includeAllSlots:!0,row:u})],b=h.getChild(u);let w;for(const{column:_,cell:I,isAnchor:P}of f)if(g.has(_)){const{cell:R,rowspan:ot}=g.get(_),$=w?p.createPositionAfter(w):p.createPositionAt(b,0);p.move(p.createRangeOn(R),$),bt("rowspan",ot,R,p),w=R}else P&&(w=I)}(t,a+1,l,c);for(let h=a;h>=s;h--)c.remove(t.getChild(h));for(const{rowspan:h,cell:u}of d)bt("rowspan",h,u,c);(function(h,u,g,p){const f=h.getAttribute("headingRows")||0;u<f&&bt("headingRows",g<f?f-(g-u+1):u,h,p,0)})(t,s,a,c),ns(t,this)||os(t,this)})}removeColumns(t,e){const n=this.editor.model,o=e.at,r=e.columns||1,s=e.at+r-1;n.change(a=>{(function(c,l,d){const h=c.getAttribute("headingColumns")||0;if(h&&l.first<h){const u=Math.min(h-1,l.last)-l.first+1;d.setAttribute("headingColumns",h-u,c)}})(t,{first:o,last:s},a);for(let c=s;c>=o;c--)for(const{cell:l,column:d,cellWidth:h}of[...new et(t)])d<=c&&h>1&&d+h>c?bt("colspan",h-1,l,a):d===c&&a.remove(l);os(t,this)||ns(t,this)})}splitCellVertically(t,e=2){const n=this.editor.model,o=t.parent.parent,r=parseInt(t.getAttribute("rowspan")||1),s=parseInt(t.getAttribute("colspan")||1);n.change(a=>{if(s>1){const{newCellsSpan:c,updatedSpan:l}=wg(s,e);bt("colspan",l,t,a);const d={};c>1&&(d.colspan=c),r>1&&(d.rowspan=r),Pn(s>e?e-1:s-1,a,a.createPositionAfter(t),d)}if(s<e){const c=e-s,l=[...new et(o)],{column:d}=l.find(({cell:p})=>p===t),h=l.filter(({cell:p,cellWidth:f,column:b})=>p!==t&&b===d||b<d&&b+f>d);for(const{cell:p,cellWidth:f}of h)a.setAttribute("colspan",f+c,p);const u={};r>1&&(u.rowspan=r),Pn(c,a,a.createPositionAfter(t),u);const g=o.getAttribute("headingColumns")||0;g>d&&bt("headingColumns",g+c,o,a)}})}splitCellHorizontally(t,e=2){const n=this.editor.model,o=t.parent,r=o.parent,s=r.getChildIndex(o),a=parseInt(t.getAttribute("rowspan")||1),c=parseInt(t.getAttribute("colspan")||1);n.change(l=>{if(a>1){const d=[...new et(r,{startRow:s,endRow:s+a-1,includeAllSlots:!0})],{newCellsSpan:h,updatedSpan:u}=wg(a,e);bt("rowspan",u,t,l);const{column:g}=d.find(({cell:f})=>f===t),p={};h>1&&(p.rowspan=h),c>1&&(p.colspan=c);for(const f of d){const{column:b,row:w}=f,_=b===g,I=(w+s+u)%h==0;w>=s+u&&_&&I&&Pn(1,l,f.getPositionBefore(),p)}}if(a<e){const d=e-a,h=[...new et(r,{startRow:0,endRow:s})];for(const{cell:p,cellHeight:f,row:b}of h)if(p!==t&&b+f>s){const w=f+d;l.setAttribute("rowspan",w,p)}const u={};c>1&&(u.colspan=c),rs(l,r,s+1,d,1,u);const g=r.getAttribute("headingRows")||0;g>s&&bt("headingRows",g+d,r,l)}})}getColumns(t){return[...t.getChild(0).getChildren()].reduce((e,n)=>e+parseInt(n.getAttribute("colspan")||1),0)}getRows(t){return Array.from(t.getChildren()).reduce((e,n)=>n.is("element","tableRow")?e+1:e,0)}createTableWalker(t,e={}){return new et(t,e)}getSelectedTableCells(t){const e=[];for(const n of this.sortRanges(t.getRanges())){const o=n.getContainedElement();o&&o.is("element","tableCell")&&e.push(o)}return e}getTableCellsContainingSelection(t){const e=[];for(const n of t.getRanges()){const o=n.start.findAncestor("tableCell");o&&e.push(o)}return e}getSelectionAffectedTableCells(t){const e=this.getSelectedTableCells(t);return e.length?e:this.getTableCellsContainingSelection(t)}getRowIndexes(t){const e=t.map(n=>n.parent.index);return this._getFirstLastIndexesObject(e)}getColumnIndexes(t){const e=t[0].findAncestor("table"),n=[...new et(e)].filter(o=>t.includes(o.cell)).map(o=>o.column);return this._getFirstLastIndexesObject(n)}isSelectionRectangular(t){if(t.length<2||!this._areCellInTheSameTableSection(t))return!1;const e=new Set,n=new Set;let o=0;for(const s of t){const{row:a,column:c}=this.getCellLocation(s),l=parseInt(s.getAttribute("rowspan")||1),d=parseInt(s.getAttribute("colspan")||1);e.add(a),n.add(c),l>1&&e.add(a+l-1),d>1&&n.add(c+d-1),o+=l*d}return function(s,a){const c=Array.from(s.values()),l=Array.from(a.values()),d=Math.max(...c),h=Math.min(...c),u=Math.max(...l),g=Math.min(...l);return(d-h+1)*(u-g+1)}(e,n)==o}sortRanges(t){return Array.from(t).sort(lC)}_getFirstLastIndexesObject(t){const e=t.sort((n,o)=>n-o);return{first:e[0],last:e[e.length-1]}}_areCellInTheSameTableSection(t){const e=t[0].findAncestor("table"),n=this.getRowIndexes(t),o=parseInt(e.getAttribute("headingRows")||0);if(!this._areIndexesInSameSection(n,o))return!1;const r=parseInt(e.getAttribute("headingColumns")||0),s=this.getColumnIndexes(t);return this._areIndexesInSameSection(s,r)}_areIndexesInSameSection({first:t,last:e},n){return t<n==e<n}}function rs(i,t,e,n,o,r={}){for(let s=0;s<n;s++){const a=i.createElement("tableRow");i.insert(a,t,e),Pn(o,i,i.createPositionAt(a,"end"),r)}}function Pn(i,t,e,n={}){for(let o=0;o<i;o++)tn(t,e,n)}function wg(i,t){if(i<t)return{newCellsSpan:1,updatedSpan:1};const e=Math.floor(i/t);return{newCellsSpan:e,updatedSpan:i-e*t+e}}function lC(i,t){const e=i.start,n=t.start;return e.isBefore(n)?-1:1}class dC extends q{refresh(){const t=this.editor.plugins.get(Mt),e=t.getSelectedTableCells(this.editor.model.document.selection);this.isEnabled=t.isSelectionRectangular(e,this.editor.plugins.get(Mt))}execute(){const t=this.editor.model,e=this.editor.plugins.get(Mt);t.change(n=>{const o=e.getSelectedTableCells(t.document.selection),r=o.shift(),{mergeWidth:s,mergeHeight:a}=function(c,l,d){let h=0,u=0;for(const f of l){const{row:b,column:w}=d.getCellLocation(f);h=Ag(f,w,h,"colspan"),u=Ag(f,b,u,"rowspan")}const{row:g,column:p}=d.getCellLocation(c);return{mergeWidth:h-p,mergeHeight:u-g}}(r,o,e);bt("colspan",s,r,n),bt("rowspan",a,r,n);for(const c of o)hC(c,r,n);is(r.findAncestor("table"),e),n.setSelection(r,"in")})}}function hC(i,t,e){_g(i)||(_g(t)&&e.remove(e.createRangeIn(t)),e.move(e.createRangeIn(i),e.createPositionAt(t,"end"))),e.remove(i)}function _g(i){return i.childCount==1&&i.getChild(0).is("element","paragraph")&&i.getChild(0).isEmpty}function Ag(i,t,e,n){const o=parseInt(i.getAttribute(n)||1);return Math.max(e,t+o)}class uC extends q{constructor(t){super(t),this.affectsData=!1}refresh(){const t=this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(this.editor.model.document.selection);this.isEnabled=t.length>0}execute(){const t=this.editor.model,e=this.editor.plugins.get("TableUtils"),n=e.getSelectionAffectedTableCells(t.document.selection),o=e.getRowIndexes(n),r=n[0].findAncestor("table"),s=[];for(let a=o.first;a<=o.last;a++)for(const c of r.getChild(a).getChildren())s.push(t.createRangeOn(c));t.change(a=>{a.setSelection(s)})}}class gC extends q{constructor(t){super(t),this.affectsData=!1}refresh(){const t=this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(this.editor.model.document.selection);this.isEnabled=t.length>0}execute(){const t=this.editor.plugins.get("TableUtils"),e=this.editor.model,n=t.getSelectionAffectedTableCells(e.document.selection),o=n[0],r=n.pop(),s=o.findAncestor("table"),a=t.getCellLocation(o),c=t.getCellLocation(r),l=Math.min(a.column,c.column),d=Math.max(a.column,c.column),h=[];for(const u of new et(s,{startColumn:l,endColumn:d}))h.push(e.createRangeOn(u.cell));e.change(u=>{u.setSelection(h)})}}function mC(i){i.document.registerPostFixer(t=>function(e,n){const o=n.document.differ.getChanges();let r=!1;const s=new Set;for(const a of o){let c;a.name=="table"&&a.type=="insert"&&(c=a.position.nodeAfter),a.name!="tableRow"&&a.name!="tableCell"||(c=a.position.findAncestor("table")),kC(a)&&(c=a.range.start.findAncestor("table")),c&&!s.has(c)&&(r=pC(c,e)||r,r=fC(c,e)||r,s.add(c))}return r}(t,i))}function pC(i,t){let e=!1;const n=function(o){const r=parseInt(o.getAttribute("headingRows")||0),s=Array.from(o.getChildren()).reduce((c,l)=>l.is("element","tableRow")?c+1:c,0),a=[];for(const{row:c,cell:l,cellHeight:d}of new et(o)){if(d<2)continue;const h=c<r?r:s;if(c+d>h){const u=h-c;a.push({cell:l,rowspan:u})}}return a}(i);if(n.length){e=!0;for(const o of n)bt("rowspan",o.rowspan,o.cell,t,1)}return e}function fC(i,t){let e=!1;const n=function(a){const c=new Array(a.childCount).fill(0);for(const{rowIndex:l}of new et(a,{includeAllSlots:!0}))c[l]++;return c}(i),o=[];for(const[a,c]of n.entries())!c&&i.getChild(a).is("element","tableRow")&&o.push(a);if(o.length){e=!0;for(const a of o.reverse())t.remove(i.getChild(a)),n.splice(a,1)}const r=n.filter((a,c)=>i.getChild(c).is("element","tableRow")),s=r[0];if(!r.every(a=>a===s)){const a=r.reduce((c,l)=>l>c?l:c,0);for(const[c,l]of r.entries()){const d=a-l;if(d){for(let h=0;h<d;h++)tn(t,t.createPositionAt(i.getChild(c),"end"));e=!0}}}return e}function kC(i){const t=i.type==="attribute",e=i.attributeKey;return t&&(e==="headingRows"||e==="colspan"||e==="rowspan")}function bC(i){i.document.registerPostFixer(t=>function(e,n){const o=n.document.differ.getChanges();let r=!1;for(const s of o)s.type=="insert"&&s.name=="table"&&(r=wC(s.position.nodeAfter,e)||r),s.type=="insert"&&s.name=="tableRow"&&(r=Cg(s.position.nodeAfter,e)||r),s.type=="insert"&&s.name=="tableCell"&&(r=ss(s.position.nodeAfter,e)||r),_C(s)&&(r=ss(s.position.parent,e)||r);return r}(t,i))}function wC(i,t){let e=!1;for(const n of i.getChildren())n.is("element","tableRow")&&(e=Cg(n,t)||e);return e}function Cg(i,t){let e=!1;for(const n of i.getChildren())e=ss(n,t)||e;return e}function ss(i,t){if(i.childCount==0)return t.insertElement("paragraph",i),!0;const e=Array.from(i.getChildren()).filter(n=>n.is("$text"));for(const n of e)t.wrap(t.createRangeOn(n),"paragraph");return!!e.length}function _C(i){return!(!i.position||!i.position.parent.is("element","tableCell"))&&(i.type=="insert"&&i.name=="$text"||i.type=="remove")}function AC(i,t){if(!i.is("element","paragraph"))return!1;const e=t.toViewElement(i);return!!e&&sg(i)!==e.is("element","span")}var vg=S(3881),CC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(vg.Z,CC),vg.Z.locals;class vC extends T{static get pluginName(){return"TableEditing"}static get requires(){return[Mt]}init(){const t=this.editor,e=t.model,n=e.schema,o=t.conversion,r=t.plugins.get(Mt);n.register("table",{inheritAllFrom:"$blockObject",allowAttributes:["headingRows","headingColumns"]}),n.register("tableRow",{allowIn:"table",isLimit:!0}),n.register("tableCell",{allowContentOf:"$container",allowIn:"tableRow",allowAttributes:["colspan","rowspan"],isLimit:!0,isSelectable:!0}),o.for("upcast").add(s=>{s.on("element:figure",(a,c,l)=>{if(!l.consumable.test(c.viewItem,{name:!0,classes:"table"}))return;const d=function(u){for(const g of u.getChildren())if(g.is("element","table"))return g}(c.viewItem);if(!d||!l.consumable.test(d,{name:!0}))return;l.consumable.consume(c.viewItem,{name:!0,classes:"table"});const h=yt(l.convertItem(d,c.modelCursor).modelRange.getItems());h?(l.convertChildren(c.viewItem,l.writer.createPositionAt(h,"end")),l.updateConversionResult(h,c)):l.consumable.revert(c.viewItem,{name:!0,classes:"table"})})}),o.for("upcast").add(eC()),o.for("editingDowncast").elementToStructure({model:{name:"table",attributes:["headingRows"]},view:og(r,{asWidget:!0})}),o.for("dataDowncast").elementToStructure({model:{name:"table",attributes:["headingRows"]},view:og(r)}),o.for("upcast").elementToElement({model:"tableRow",view:"tr"}),o.for("upcast").add(s=>{s.on("element:tr",(a,c)=>{c.viewItem.isEmpty&&c.modelCursor.index==0&&a.stop()},{priority:"high"})}),o.for("downcast").elementToElement({model:"tableRow",view:(s,{writer:a})=>s.isEmpty?a.createEmptyElement("tr"):a.createContainerElement("tr")}),o.for("upcast").elementToElement({model:"tableCell",view:"td"}),o.for("upcast").elementToElement({model:"tableCell",view:"th"}),o.for("upcast").add(ng("td")),o.for("upcast").add(ng("th")),o.for("editingDowncast").elementToElement({model:"tableCell",view:ig({asWidget:!0})}),o.for("dataDowncast").elementToElement({model:"tableCell",view:ig()}),o.for("editingDowncast").elementToElement({model:"paragraph",view:rg({asWidget:!0}),converterPriority:"high"}),o.for("dataDowncast").elementToElement({model:"paragraph",view:rg(),converterPriority:"high"}),o.for("downcast").attributeToAttribute({model:"colspan",view:"colspan"}),o.for("upcast").attributeToAttribute({model:{key:"colspan",value:yg("colspan")},view:"colspan"}),o.for("downcast").attributeToAttribute({model:"rowspan",view:"rowspan"}),o.for("upcast").attributeToAttribute({model:{key:"rowspan",value:yg("rowspan")},view:"rowspan"}),t.data.mapper.on("modelToViewPosition",(s,a)=>{const c=a.modelPosition.parent,l=a.modelPosition.nodeBefore;if(!c.is("element","tableCell")||!l||!l.is("element","paragraph"))return;const d=a.mapper.toViewElement(l),h=a.mapper.toViewElement(c);d===h&&(a.viewPosition=a.mapper.findPositionIn(h,l.maxOffset))}),t.config.define("table.defaultHeadings.rows",0),t.config.define("table.defaultHeadings.columns",0),t.commands.add("insertTable",new iC(t)),t.commands.add("insertTableRowAbove",new ag(t,{order:"above"})),t.commands.add("insertTableRowBelow",new ag(t,{order:"below"})),t.commands.add("insertTableColumnLeft",new cg(t,{order:"left"})),t.commands.add("insertTableColumnRight",new cg(t,{order:"right"})),t.commands.add("removeTableRow",new rC(t)),t.commands.add("removeTableColumn",new sC(t)),t.commands.add("splitTableCellVertically",new lg(t,{direction:"vertically"})),t.commands.add("splitTableCellHorizontally",new lg(t,{direction:"horizontally"})),t.commands.add("mergeTableCells",new dC(t)),t.commands.add("mergeTableCellRight",new oi(t,{direction:"right"})),t.commands.add("mergeTableCellLeft",new oi(t,{direction:"left"})),t.commands.add("mergeTableCellDown",new oi(t,{direction:"down"})),t.commands.add("mergeTableCellUp",new oi(t,{direction:"up"})),t.commands.add("setTableColumnHeader",new cC(t)),t.commands.add("setTableRowHeader",new aC(t)),t.commands.add("selectTableRow",new uC(t)),t.commands.add("selectTableColumn",new gC(t)),mC(e),bC(e),this.listenTo(e.document,"change:data",()=>{(function(s,a){const c=s.document.differ;for(const l of c.getChanges()){let d,h=!1;if(l.type=="attribute"){const f=l.range.start.nodeAfter;if(!f||!f.is("element","table")||l.attributeKey!="headingRows"&&l.attributeKey!="headingColumns")continue;d=f,h=l.attributeKey=="headingRows"}else l.name!="tableRow"&&l.name!="tableCell"||(d=l.position.findAncestor("table"),h=l.name=="tableRow");if(!d)continue;const u=d.getAttribute("headingRows")||0,g=d.getAttribute("headingColumns")||0,p=new et(d);for(const f of p){const b=f.row<u||f.column<g?"th":"td",w=a.mapper.toViewElement(f.cell);w&&w.is("element")&&w.name!=b&&a.reconvertItem(h?f.cell.parent:f.cell)}}})(e,t.editing),function(s,a){const c=s.document.differ,l=new Set;for(const d of c.getChanges()){const h=d.type=="attribute"?d.range.start.parent:d.position.parent;h.is("element","tableCell")&&l.add(h)}for(const d of l.values()){const h=Array.from(d.getChildren()).filter(u=>AC(u,a.mapper));for(const u of h)a.reconvertItem(u)}}(e,t.editing)})}}function yg(i){return t=>{const e=parseInt(t.getAttribute(i));return Number.isNaN(e)||e<=0?null:e}}var xg=S(1613),yC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(xg.Z,yC),xg.Z.locals;class xC extends H{constructor(t){super(t);const e=this.bindTemplate;this.items=this._createGridCollection(),this.set("rows",0),this.set("columns",0),this.bind("label").to(this,"columns",this,"rows",(n,o)=>`${o} \xD7 ${n}`),this.setTemplate({tag:"div",attributes:{class:["ck"]},children:[{tag:"div",attributes:{class:["ck-insert-table-dropdown__grid"]},on:{"mouseover@.ck-insert-table-dropdown-grid-box":e.to("boxover")},children:this.items},{tag:"div",attributes:{class:["ck-insert-table-dropdown__label"]},children:[{text:e.to("label")}]}],on:{mousedown:e.to(n=>{n.preventDefault()}),click:e.to(()=>{this.fire("execute")})}}),this.on("boxover",(n,o)=>{const{row:r,column:s}=o.target.dataset;this.set({rows:parseInt(r),columns:parseInt(s)})}),this.on("change:columns",()=>{this._highlightGridBoxes()}),this.on("change:rows",()=>{this._highlightGridBoxes()})}focus(){}focusLast(){}_highlightGridBoxes(){const t=this.rows,e=this.columns;this.items.map((n,o)=>{const r=Math.floor(o/10)<t&&o%10<e;n.set("isOn",r)})}_createGridCollection(){const t=[];for(let e=0;e<100;e++){const n=Math.floor(e/10),o=e%10;t.push(new EC(this.locale,n+1,o+1))}return this.createCollection(t)}}class EC extends H{constructor(t,e,n){super(t);const o=this.bindTemplate;this.set("isOn",!1),this.setTemplate({tag:"div",attributes:{class:["ck-insert-table-dropdown-grid-box",o.if("isOn","ck-on")],"data-row":e,"data-column":n}})}}class DC extends T{static get pluginName(){return"TableUI"}init(){const t=this.editor,e=this.editor.t,n=t.locale.contentLanguageDirection==="ltr";t.ui.componentFactory.add("insertTable",o=>{const r=t.commands.get("insertTable"),s=Je(o);let a;return s.bind("isEnabled").to(r),s.buttonView.set({icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z"/></svg>',label:e("Insert table"),tooltip:!0}),s.on("change:isOpen",()=>{a||(a=new xC(o),s.panelView.children.add(a),a.delegate("execute").to(s),s.buttonView.on("open",()=>{a.rows=0,a.columns=0}),s.on("execute",()=>{t.execute("insertTable",{rows:a.rows,columns:a.columns}),t.editing.view.focus()}))}),s}),t.ui.componentFactory.add("tableColumn",o=>{const r=[{type:"switchbutton",model:{commandName:"setTableColumnHeader",label:e("Header column"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:n?"insertTableColumnLeft":"insertTableColumnRight",label:e("Insert column left")}},{type:"button",model:{commandName:n?"insertTableColumnRight":"insertTableColumnLeft",label:e("Insert column right")}},{type:"button",model:{commandName:"removeTableColumn",label:e("Delete column")}},{type:"button",model:{commandName:"selectTableColumn",label:e("Select column")}}];return this._prepareDropdown(e("Column"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M18 7v1H2V7h16zm0 5v1H2v-1h16z" opacity=".6"/><path d="M14 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-2 1H8v4h4V2zm0 6H8v4h4V8zm0 6H8v4h4v-4z"/></svg>',r,o)}),t.ui.componentFactory.add("tableRow",o=>{const r=[{type:"switchbutton",model:{commandName:"setTableRowHeader",label:e("Header row"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"insertTableRowAbove",label:e("Insert row above")}},{type:"button",model:{commandName:"insertTableRowBelow",label:e("Insert row below")}},{type:"button",model:{commandName:"removeTableRow",label:e("Delete row")}},{type:"button",model:{commandName:"selectTableRow",label:e("Select row")}}];return this._prepareDropdown(e("Row"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v16h-1V2z" opacity=".6"/><path d="M1 6h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 2v4h4V8H2zm6 0v4h4V8H8zm6 0v4h4V8h-4z"/></svg>',r,o)}),t.ui.componentFactory.add("mergeTableCells",o=>{const r=[{type:"button",model:{commandName:"mergeTableCellUp",label:e("Merge cell up")}},{type:"button",model:{commandName:n?"mergeTableCellRight":"mergeTableCellLeft",label:e("Merge cell right")}},{type:"button",model:{commandName:"mergeTableCellDown",label:e("Merge cell down")}},{type:"button",model:{commandName:n?"mergeTableCellLeft":"mergeTableCellRight",label:e("Merge cell left")}},{type:"separator"},{type:"button",model:{commandName:"splitTableCellVertically",label:e("Split cell vertically")}},{type:"button",model:{commandName:"splitTableCellHorizontally",label:e("Split cell horizontally")}}];return this._prepareMergeSplitButtonDropdown(e("Merge cells"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v7h-1V2zm6 5v1H2V7h16zM8 12v1H2v-1h6z" opacity=".6"/><path d="M7 7h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v9h10V9H8z"/></svg>',r,o)})}_prepareDropdown(t,e,n,o){const r=this.editor,s=Je(o),a=this._fillDropdownWithListOptions(s,n);return s.buttonView.set({label:t,icon:e,tooltip:!0}),s.bind("isEnabled").toMany(a,"isEnabled",(...c)=>c.some(l=>l)),this.listenTo(s,"execute",c=>{r.execute(c.source.commandName),r.editing.view.focus()}),s}_prepareMergeSplitButtonDropdown(t,e,n,o){const r=this.editor,s=Je(o,jl),a="mergeTableCells",c=r.commands.get(a),l=this._fillDropdownWithListOptions(s,n);return s.buttonView.set({label:t,icon:e,tooltip:!0,isEnabled:!0}),s.bind("isEnabled").toMany([c,...l],"isEnabled",(...d)=>d.some(h=>h)),this.listenTo(s.buttonView,"execute",()=>{r.execute(a),r.editing.view.focus()}),this.listenTo(s,"execute",d=>{r.execute(d.source.commandName),r.editing.view.focus()}),s}_fillDropdownWithListOptions(t,e){const n=this.editor,o=[],r=new Yt;for(const s of e)IC(s,n,o,r);return Zl(t,r,n.ui.componentFactory),o}}function IC(i,t,e,n){const o=i.model=new yr(i.model),{commandName:r,bindIsOn:s}=i.model;if(i.type==="button"||i.type==="switchbutton"){const a=t.commands.get(r);e.push(a),o.set({commandName:r}),o.bind("isEnabled").to(a),s&&o.bind("isOn").to(a,"value")}o.set({withText:!0}),n.add(i)}var Eg=S(6945),MC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Eg.Z,MC),Eg.Z.locals;class en extends T{static get pluginName(){return"TableSelection"}static get requires(){return[Mt,Mt]}init(){const t=this.editor.model;this.listenTo(t,"deleteContent",(e,n)=>this._handleDeleteContent(e,n),{priority:"high"}),this._defineSelectionConverter(),this._enablePluginDisabling()}getSelectedTableCells(){const t=this.editor.plugins.get(Mt),e=this.editor.model.document.selection,n=t.getSelectedTableCells(e);return n.length==0?null:n}getSelectionAsFragment(){const t=this.editor.plugins.get(Mt),e=this.getSelectedTableCells();return e?this.editor.model.change(n=>{const o=n.createDocumentFragment(),{first:r,last:s}=t.getColumnIndexes(e),{first:a,last:c}=t.getRowIndexes(e),l=e[0].findAncestor("table");let d=c,h=s;if(t.isSelectionRectangular(e)){const g={firstColumn:r,lastColumn:s,firstRow:a,lastRow:c};d=fg(l,g),h=kg(l,g)}const u=dg(l,{startRow:a,startColumn:r,endRow:d,endColumn:h},n);return n.insert(u,o,0),o}):null}setCellSelection(t,e){const n=this._getCellsToSelect(t,e);this.editor.model.change(o=>{o.setSelection(n.cells.map(r=>o.createRangeOn(r)),{backward:n.backward})})}getFocusCell(){const t=[...this.editor.model.document.selection.getRanges()].pop().getContainedElement();return t&&t.is("element","tableCell")?t:null}getAnchorCell(){const t=yt(this.editor.model.document.selection.getRanges()).getContainedElement();return t&&t.is("element","tableCell")?t:null}_defineSelectionConverter(){const t=this.editor,e=new Set;t.conversion.for("editingDowncast").add(n=>n.on("selection",(o,r,s)=>{const a=s.writer;(function(d){for(const h of e)d.removeClass("ck-editor__editable_selected",h);e.clear()})(a);const c=this.getSelectedTableCells();if(!c)return;for(const d of c){const h=s.mapper.toViewElement(d);a.addClass("ck-editor__editable_selected",h),e.add(h)}const l=s.mapper.toViewElement(c[c.length-1]);a.setSelection(l,0)},{priority:"lowest"}))}_enablePluginDisabling(){const t=this.editor;this.on("change:isEnabled",()=>{if(!this.isEnabled){const e=this.getSelectedTableCells();if(!e)return;t.model.change(n=>{const o=n.createPositionAt(e[0],0),r=t.model.schema.getNearestSelectionRange(o);n.setSelection(r)})}})}_handleDeleteContent(t,e){const n=this.editor.plugins.get(Mt),[o,r]=e,s=this.editor.model,a=!r||r.direction=="backward",c=n.getSelectedTableCells(o);c.length&&(t.stop(),s.change(l=>{const d=c[a?c.length-1:0];s.change(u=>{for(const g of c)s.deleteContent(u.createSelection(g,"in"))});const h=s.schema.getNearestSelectionRange(l.createPositionAt(d,0));o.is("documentSelection")?l.setSelection(h):o.setTo(h)}))}_getCellsToSelect(t,e){const n=this.editor.plugins.get("TableUtils"),o=n.getCellLocation(t),r=n.getCellLocation(e),s=Math.min(o.row,r.row),a=Math.max(o.row,r.row),c=Math.min(o.column,r.column),l=Math.max(o.column,r.column),d=new Array(a-s+1).fill(null).map(()=>[]),h={startRow:s,endRow:a,startColumn:c,endColumn:l};for(const{row:p,cell:f}of new et(t.findAncestor("table"),h))d[p-s].push(f);const u=r.row<o.row,g=r.column<o.column;return u&&d.reverse(),g&&d.forEach(p=>p.reverse()),{cells:d.flat(),backward:u||g}}}class SC extends T{static get pluginName(){return"TableClipboard"}static get requires(){return[en,Mt]}init(){const t=this.editor,e=t.editing.view.document;this.listenTo(e,"copy",(n,o)=>this._onCopyCut(n,o)),this.listenTo(e,"cut",(n,o)=>this._onCopyCut(n,o)),this.listenTo(t.model,"insertContent",(n,o)=>this._onInsertContent(n,...o),{priority:"high"}),this.decorate("_replaceTableSlotCell")}_onCopyCut(t,e){const n=this.editor.plugins.get(en);if(!n.getSelectedTableCells()||t.name=="cut"&&this.editor.isReadOnly)return;e.preventDefault(),t.stop();const o=this.editor.data,r=this.editor.editing.view.document,s=o.toView(n.getSelectionAsFragment());r.fire("clipboardOutput",{dataTransfer:e.dataTransfer,content:s,method:t.name})}_onInsertContent(t,e,n){if(n&&!n.is("documentSelection"))return;const o=this.editor.model,r=this.editor.plugins.get(Mt);let s=Dg(e,o);if(!s)return;const a=r.getSelectionAffectedTableCells(o.document.selection);a.length?(t.stop(),o.change(c=>{const l={width:r.getColumns(s),height:r.getRows(s)},d=function(b,w,_,I){const P=b[0].findAncestor("table"),R=I.getColumnIndexes(b),ot=I.getRowIndexes(b),$={firstColumn:R.first,lastColumn:R.last,firstRow:ot.first,lastRow:ot.last},Tt=b.length===1;return Tt&&($.lastRow+=w.height-1,$.lastColumn+=w.width-1,function(Ct,Ht,te,ee){const Ie=ee.getColumns(Ct),Me=ee.getRows(Ct);te>Ie&&ee.insertColumns(Ct,{at:Ie,columns:te-Ie}),Ht>Me&&ee.insertRows(Ct,{at:Me,rows:Ht-Me})}(P,$.lastRow+1,$.lastColumn+1,I)),Tt||!I.isSelectionRectangular(b)?function(Ct,Ht,te){const{firstRow:ee,lastRow:Ie,firstColumn:Me,lastColumn:zn}=Ht,Pg={first:ee,last:Ie},zg={first:Me,last:zn};cs(Ct,Me,Pg,te),cs(Ct,zn+1,Pg,te),as(Ct,ee,zg,te),as(Ct,Ie+1,zg,te,ee)}(P,$,_):($.lastRow=fg(P,$),$.lastColumn=kg(P,$)),$}(a,l,c,r),h=d.lastRow-d.firstRow+1,u=d.lastColumn-d.firstColumn+1,g={startRow:0,startColumn:0,endRow:Math.min(h,l.height)-1,endColumn:Math.min(u,l.width)-1};s=dg(s,g,c);const p=a[0].findAncestor("table"),f=this._replaceSelectedCellsWithPasted(s,l,p,d,c);if(this.editor.plugins.get("TableSelection").isEnabled){const b=r.sortRanges(f.map(w=>c.createRangeOn(w)));c.setSelection(b)}else c.setSelection(f[0],0)})):is(s,r)}_replaceSelectedCellsWithPasted(t,e,n,o,r){const{width:s,height:a}=e,c=function(b,w,_){const I=new Array(_).fill(null).map(()=>new Array(w).fill(null));for(const{column:P,row:R,cell:ot}of new et(b))I[R][P]=ot;return I}(t,s,a),l=[...new et(n,{startRow:o.firstRow,endRow:o.lastRow,startColumn:o.firstColumn,endColumn:o.lastColumn,includeAllSlots:!0})],d=[];let h;for(const b of l){const{row:w,column:_}=b;_===o.firstColumn&&(h=b.getPositionBefore());const I=w-o.firstRow,P=_-o.firstColumn,R=c[I%a][P%s],ot=R?r.cloneElement(R):null,$=this._replaceTableSlotCell(b,ot,h,r);$&&(pg($,w,_,o.lastRow,o.lastColumn,r),d.push($),h=r.createPositionAfter($))}const u=parseInt(n.getAttribute("headingRows")||0),g=parseInt(n.getAttribute("headingColumns")||0),p=o.firstRow<u&&u<=o.lastRow,f=o.firstColumn<g&&g<=o.lastColumn;if(p){const b=as(n,u,{first:o.firstColumn,last:o.lastColumn},r,o.firstRow);d.push(...b)}if(f){const b=cs(n,g,{first:o.firstRow,last:o.lastRow},r);d.push(...b)}return d}_replaceTableSlotCell(t,e,n,o){const{cell:r,isAnchor:s}=t;return s&&o.remove(r),e?(o.insert(e,n),e):null}getTableIfOnlyTableInContent(t,e){return Dg(t,e)}}function Dg(i,t){if(!i.is("documentFragment")&&!i.is("element"))return null;if(i.is("element","table"))return i;if(i.childCount==1&&i.getChild(0).is("element","table"))return i.getChild(0);const e=t.createRangeIn(i);for(const n of e.getItems())if(n.is("element","table")){const o=t.createRange(e.start,t.createPositionBefore(n));if(t.hasContent(o,{ignoreWhitespaces:!0}))return null;const r=t.createRange(t.createPositionAfter(n),e.end);return t.hasContent(r,{ignoreWhitespaces:!0})?null:n}return null}function as(i,t,e,n,o=0){if(!(t<1))return hg(i,t,o).filter(({column:r,cellWidth:s})=>Ig(r,s,e)).map(({cell:r})=>ug(r,t,n))}function cs(i,t,e,n){if(!(t<1))return gg(i,t).filter(({row:o,cellHeight:r})=>Ig(o,r,e)).map(({cell:o,column:r})=>mg(o,r,t,n))}function Ig(i,t,e){const n=i+t-1,{first:o,last:r}=e;return i>=o&&i<=r||i<o&&n>=o}class TC extends T{static get pluginName(){return"TableKeyboard"}static get requires(){return[en,Mt]}init(){const t=this.editor.editing.view.document;this.listenTo(t,"arrowKey",(...e)=>this._onArrowKey(...e),{context:"table"}),this.listenTo(t,"tab",(...e)=>this._handleTabOnSelectedTable(...e),{context:"figure"}),this.listenTo(t,"tab",(...e)=>this._handleTab(...e),{context:["th","td"]})}_handleTabOnSelectedTable(t,e){const n=this.editor,o=n.model.document.selection.getSelectedElement();o&&o.is("element","table")&&(e.preventDefault(),e.stopPropagation(),t.stop(),n.model.change(r=>{r.setSelection(r.createRangeIn(o.getChild(0).getChild(0)))}))}_handleTab(t,e){const n=this.editor,o=this.editor.plugins.get(Mt),r=n.model.document.selection,s=!e.shiftKey;let a=o.getTableCellsContainingSelection(r)[0];if(a||(a=this.editor.plugins.get("TableSelection").getFocusCell()),!a)return;e.preventDefault(),e.stopPropagation(),t.stop();const c=a.parent,l=c.parent,d=l.getChildIndex(c),h=c.getChildIndex(a),u=h===0;if(!s&&u&&d===0)return void n.model.change(b=>{b.setSelection(b.createRangeOn(l))});const g=h===c.childCount-1,p=d===o.getRows(l)-1;if(s&&p&&g&&(n.execute("insertTableRowBelow"),d===o.getRows(l)-1))return void n.model.change(b=>{b.setSelection(b.createRangeOn(l))});let f;if(s&&g)f=l.getChild(d+1).getChild(0);else if(!s&&u){const b=l.getChild(d-1);f=b.getChild(b.childCount-1)}else f=c.getChild(h+(s?1:-1));n.model.change(b=>{b.setSelection(b.createRangeIn(f))})}_onArrowKey(t,e){const n=this.editor,o=Hi(e.keyCode,n.locale.contentLanguageDirection);this._handleArrowKeys(o,e.shiftKey)&&(e.preventDefault(),e.stopPropagation(),t.stop())}_handleArrowKeys(t,e){const n=this.editor.plugins.get(Mt),o=this.editor.model,r=o.document.selection,s=["right","down"].includes(t),a=n.getSelectedTableCells(r);if(a.length){let l;return l=e?this.editor.plugins.get("TableSelection").getFocusCell():s?a[a.length-1]:a[0],this._navigateFromCellInDirection(l,t,e),!0}const c=r.focus.findAncestor("tableCell");if(!c)return!1;if(!r.isCollapsed)if(e){if(r.isBackward==s&&!r.containsEntireContent(c))return!1}else{const l=r.getSelectedElement();if(!l||!o.schema.isObject(l))return!1}return!!this._isSelectionAtCellEdge(r,c,s)&&(this._navigateFromCellInDirection(c,t,e),!0)}_isSelectionAtCellEdge(t,e,n){const o=this.editor.model,r=this.editor.model.schema,s=n?t.getLastPosition():t.getFirstPosition();if(!r.getLimitElement(s).is("element","tableCell"))return o.createPositionAt(e,n?"end":0).isTouching(s);const a=o.createSelection(s);return o.modifySelection(a,{direction:n?"forward":"backward"}),s.isEqual(a.focus)}_navigateFromCellInDirection(t,e,n=!1){const o=this.editor.model,r=t.findAncestor("table"),s=[...new et(r,{includeAllSlots:!0})],{row:a,column:c}=s[s.length-1],l=s.find(({cell:f})=>f==t);let{row:d,column:h}=l;switch(e){case"left":h--;break;case"up":d--;break;case"right":h+=l.cellWidth;break;case"down":d+=l.cellHeight}if(d<0||d>a||h<0&&d<=0||h>c&&d>=a)return void o.change(f=>{f.setSelection(f.createRangeOn(r))});h<0?(h=n?0:c,d--):h>c&&(h=n?c:0,d++);const u=s.find(f=>f.row==d&&f.column==h).cell,g=["right","down"].includes(e),p=this.editor.plugins.get("TableSelection");if(n&&p.isEnabled){const f=p.getAnchorCell()||t;p.setCellSelection(f,u)}else{const f=o.createPositionAt(u,g?0:"end");o.change(b=>{b.setSelection(f)})}}}class NC extends Pe{constructor(t){super(t),this.domEventType=["mousemove","mouseleave"]}onDomEvent(t){this.fire(t.type,t)}}class BC extends T{static get pluginName(){return"TableMouse"}static get requires(){return[en,Mt]}init(){this.editor.editing.view.addObserver(NC),this._enableShiftClickSelection(),this._enableMouseDragSelection()}_enableShiftClickSelection(){const t=this.editor,e=t.plugins.get(Mt);let n=!1;const o=t.plugins.get(en);this.listenTo(t.editing.view.document,"mousedown",(r,s)=>{const a=t.model.document.selection;if(!this.isEnabled||!o.isEnabled||!s.domEvent.shiftKey)return;const c=o.getAnchorCell()||e.getTableCellsContainingSelection(a)[0];if(!c)return;const l=this._getModelTableCellFromDomEvent(s);l&&Mg(c,l)&&(n=!0,o.setCellSelection(c,l),s.preventDefault())}),this.listenTo(t.editing.view.document,"mouseup",()=>{n=!1}),this.listenTo(t.editing.view.document,"selectionChange",r=>{n&&r.stop()},{priority:"highest"})}_enableMouseDragSelection(){const t=this.editor;let e,n,o=!1,r=!1;const s=t.plugins.get(en);this.listenTo(t.editing.view.document,"mousedown",(a,c)=>{this.isEnabled&&s.isEnabled&&(c.domEvent.shiftKey||c.domEvent.ctrlKey||c.domEvent.altKey||(e=this._getModelTableCellFromDomEvent(c)))}),this.listenTo(t.editing.view.document,"mousemove",(a,c)=>{if(!c.domEvent.buttons||!e)return;const l=this._getModelTableCellFromDomEvent(c);l&&Mg(e,l)&&(n=l,o||n==e||(o=!0)),o&&(r=!0,s.setCellSelection(e,n),c.preventDefault())}),this.listenTo(t.editing.view.document,"mouseup",()=>{o=!1,r=!1,e=null,n=null}),this.listenTo(t.editing.view.document,"selectionChange",a=>{r&&a.stop()},{priority:"highest"})}_getModelTableCellFromDomEvent(t){const e=t.target,n=this.editor.editing.view.createPositionAt(e,0);return this.editor.editing.mapper.toModelPosition(n).parent.findAncestor("tableCell",{includeSelf:!0})}}function Mg(i,t){return i.parent.parent==t.parent.parent}var Sg=S(6306),PC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(Sg.Z,PC),Sg.Z.locals;function zC(i){const t=i.getSelectedElement();return t&&Tg(t)?t:null}function LC(i){let t=i.getFirstPosition().parent;for(;t;){if(t.is("element")&&Tg(t))return t;t=t.parent}return null}function Tg(i){return!!i.getCustomProperty("table")&&ft(i)}const ls={autoRefresh:!0},Ng=36e5;class ii{constructor(t,e=ls){if(!t)throw new m("token-missing-token-url",this);e.initValue&&this._validateTokenValue(e.initValue),this.set("value",e.initValue),this._refresh=typeof t=="function"?t:()=>{return n=t,new Promise((o,r)=>{const s=new XMLHttpRequest;s.open("GET",n),s.addEventListener("load",()=>{const a=s.status,c=s.response;return a<200||a>299?r(new m("token-cannot-download-new-token",null)):o(c)}),s.addEventListener("error",()=>r(new Error("Network Error"))),s.addEventListener("abort",()=>r(new Error("Abort"))),s.send()});var n},this._options=Object.assign({},ls,e)}init(){return new Promise((t,e)=>{this.value?(this._options.autoRefresh&&this._registerRefreshTokenTimeout(),t(this)):this.refreshToken().then(t).catch(e)})}refreshToken(){return this._refresh().then(t=>{this._validateTokenValue(t),this.set("value",t),this._options.autoRefresh&&this._registerRefreshTokenTimeout()}).then(()=>this)}destroy(){clearTimeout(this._tokenRefreshTimeout)}_validateTokenValue(t){const e=typeof t=="string",n=!/^".*"$/.test(t),o=e&&t.split(".").length===3;if(!n||!o)throw new m("token-not-in-jwt-format",this)}_registerRefreshTokenTimeout(){const t=this._getTokenRefreshTimeoutTime();clearTimeout(this._tokenRefreshTimeout),this._tokenRefreshTimeout=setTimeout(()=>{this.refreshToken()},t)}_getTokenRefreshTimeoutTime(){try{const[,t]=this.value.split("."),{exp:e}=JSON.parse(atob(t));return e?Math.floor((1e3*e-Date.now())/2):Ng}catch{return Ng}}static create(t,e=ls){return new ii(t,e).init()}}z(ii,st);const OC=ii,ds=/^data:(\S*?);base64,/;class Bg{constructor(t,e,n){if(!t)throw new m("fileuploader-missing-file",null);if(!e)throw new m("fileuploader-missing-token",null);if(!n)throw new m("fileuploader-missing-api-address",null);this.file=function(o){if(typeof o!="string")return!1;const r=o.match(ds);return!(!r||!r.length)}(t)?function(o,r=512){try{const s=o.match(ds)[1],a=atob(o.replace(ds,"")),c=[];for(let l=0;l<a.length;l+=r){const d=a.slice(l,l+r),h=new Array(d.length);for(let u=0;u<d.length;u++)h[u]=d.charCodeAt(u);c.push(new Uint8Array(h))}return new Blob(c,{type:s})}catch{throw new m("fileuploader-decoding-image-data-error",null)}}(t):t,this._token=e,this._apiAddress=n}onProgress(t){return this.on("progress",(e,n)=>t(n)),this}onError(t){return this.once("error",(e,n)=>t(n)),this}abort(){this.xhr.abort()}send(){return this._prepareRequest(),this._attachXHRListeners(),this._sendRequest()}_prepareRequest(){const t=new XMLHttpRequest;t.open("POST",this._apiAddress),t.setRequestHeader("Authorization",this._token.value),t.responseType="json",this.xhr=t}_attachXHRListeners(){const t=this,e=this.xhr;function n(o){return()=>t.fire("error",o)}e.addEventListener("error",n("Network Error")),e.addEventListener("abort",n("Abort")),e.upload&&e.upload.addEventListener("progress",o=>{o.lengthComputable&&this.fire("progress",{total:o.total,uploaded:o.loaded})}),e.addEventListener("load",()=>{const o=e.status,r=e.response;if(o<200||o>299)return this.fire("error",r.message||r.error)})}_sendRequest(){const t=new FormData,e=this.xhr;return t.append("file",this.file),new Promise((n,o)=>{e.addEventListener("load",()=>{const r=e.status,s=e.response;return r<200||r>299?s.message?o(new m("fileuploader-uploading-data-failed",this,{message:s.message})):o(s.error):n(s)}),e.addEventListener("error",()=>o(new Error("Network Error"))),e.addEventListener("abort",()=>o(new Error("Abort"))),e.send(t)})}}z(Bg,K);class RC{constructor(t,e){if(!t)throw new m("uploadgateway-missing-token",null);if(!e)throw new m("uploadgateway-missing-api-address",null);this._token=t,this._apiAddress=e}upload(t){return new Bg(t,this._token,this._apiAddress)}}class jC extends Kn{static get pluginName(){return"CloudServicesCore"}createToken(t,e){return new OC(t,e)}createUploadGateway(t,e){return new RC(t,e)}}class hs extends Ir{}hs.builtinPlugins=[class extends T{static get requires(){return[$d,Yo,vw,bw,Ew,lh]}static get pluginName(){return"Essentials"}},class extends T{static get requires(){return[Jt]}static get pluginName(){return"CKFinderUploadAdapter"}init(){const i=this.editor.config.get("ckfinder.uploadUrl");i&&(this.editor.plugins.get(Jt).createUploadAdapter=t=>new Hw(t,i,this.editor.t))}},class extends T{static get requires(){return[ze]}static get pluginName(){return"Autoformat"}afterInit(){this._addListAutoformats(),this._addBasicStylesAutoformats(),this._addHeadingAutoformats(),this._addBlockQuoteAutoformats(),this._addCodeBlockAutoformats(),this._addHorizontalLineAutoformats()}_addListAutoformats(){const i=this.editor.commands;i.get("bulletedList")&&Oe(this.editor,this,/^[*-]\s$/,"bulletedList"),i.get("numberedList")&&Oe(this.editor,this,/^1[.|)]\s$/,"numberedList"),i.get("todoList")&&Oe(this.editor,this,/^\[\s?\]\s$/,"todoList"),i.get("checkTodoList")&&Oe(this.editor,this,/^\[\s?x\s?\]\s$/,()=>{this.editor.execute("todoList"),this.editor.execute("checkTodoList")})}_addBasicStylesAutoformats(){const i=this.editor.commands;if(i.get("bold")){const t=Zo(this.editor,"bold");Sn(this.editor,this,/(?:^|\s)(\*\*)([^*]+)(\*\*)$/g,t),Sn(this.editor,this,/(?:^|\s)(__)([^_]+)(__)$/g,t)}if(i.get("italic")){const t=Zo(this.editor,"italic");Sn(this.editor,this,/(?:^|\s)(\*)([^*_]+)(\*)$/g,t),Sn(this.editor,this,/(?:^|\s)(_)([^_]+)(_)$/g,t)}if(i.get("code")){const t=Zo(this.editor,"code");Sn(this.editor,this,/(`)([^`]+)(`)$/g,t)}if(i.get("strikethrough")){const t=Zo(this.editor,"strikethrough");Sn(this.editor,this,/(~~)([^~]+)(~~)$/g,t)}}_addHeadingAutoformats(){const i=this.editor.commands.get("heading");i&&i.modelElements.filter(t=>t.match(/^heading[1-6]$/)).forEach(t=>{const e=t[7],n=new RegExp(`^(#{${e}})\\s$`);Oe(this.editor,this,n,()=>{if(!i.isEnabled||i.value===t)return!1;this.editor.execute("heading",{value:t})})})}_addBlockQuoteAutoformats(){this.editor.commands.get("blockQuote")&&Oe(this.editor,this,/^>\s$/,"blockQuote")}_addCodeBlockAutoformats(){const i=this.editor,t=i.model.document.selection;i.commands.get("codeBlock")&&Oe(i,this,/^```$/,()=>{if(t.getFirstPosition().parent.is("element","listItem"))return!1;this.editor.execute("codeBlock",{usePreviousLanguageChoice:!0})})}_addHorizontalLineAutoformats(){this.editor.commands.get("horizontalLine")&&Oe(this.editor,this,/^---$/,"horizontalLine")}},class extends T{static get requires(){return[Gw,qw]}static get pluginName(){return"Bold"}},class extends T{static get requires(){return[Ww,Yw]}static get pluginName(){return"Italic"}},class extends T{static get requires(){return[$w,Zw]}static get pluginName(){return"BlockQuote"}},class extends T{static get pluginName(){return"CKBox"}static get requires(){return[jr,Jw]}},class extends T{static get pluginName(){return"CKFinder"}static get requires(){return["Link","CKFinderUploadAdapter",c_,s_]}},class extends Kn{static get pluginName(){return"CloudServices"}static get requires(){return[jC]}init(){const i=this.context.config.get("cloudServices")||{};for(const t in i)this[t]=i[t];if(this._tokens=new Map,this.tokenUrl)return this.token=this.context.plugins.get("CloudServicesCore").createToken(this.tokenUrl),this._tokens.set(this.tokenUrl,this.token),this.token.init();this.token=null}registerTokenUrl(i){if(this._tokens.has(i))return Promise.resolve(this.getTokenFor(i));const t=this.context.plugins.get("CloudServicesCore").createToken(i);return this._tokens.set(i,t),t.init()}getTokenFor(i){const t=this._tokens.get(i);if(!t)throw new m("cloudservices-token-not-registered",this);return t}destroy(){super.destroy();for(const i of this._tokens.values())i.destroy()}},class extends T{static get requires(){return[l_,"ImageUpload"]}init(){const i=this.editor;i.plugins.has("ImageBlockEditing")||i.plugins.has("ImageInlineEditing")||A("easy-image-image-feature-missing",i)}static get pluginName(){return"EasyImage"}},class extends T{static get requires(){return[m_,f_]}static get pluginName(){return"Heading"}},class extends T{static get requires(){return[M_,T_]}static get pluginName(){return"Image"}},class extends T{static get requires(){return[B_,P_]}static get pluginName(){return"ImageCaption"}},class extends T{static get requires(){return[Xh,j_]}static get pluginName(){return"ImageStyle"}},class extends T{static get requires(){return[Xo,ae]}static get pluginName(){return"ImageToolbar"}afterInit(){const i=this.editor,t=i.t,e=i.plugins.get(Xo),n=i.plugins.get("ImageUtils");var o;e.register("image",{ariaLabel:t("Image toolbar"),items:(o=i.config.get("image.toolbar")||[],o.map(r=>Z(r)?r.name:r)),getRelatedElement:r=>n.getClosestSelectedImageWidget(r)})}},class extends T{static get pluginName(){return"ImageUpload"}static get requires(){return[Y_,V_,q_]}},class extends T{static get pluginName(){return"Indent"}static get requires(){return[$_,Q_]}},class extends T{static get requires(){return[fA,AA,vA]}static get pluginName(){return"Link"}},class extends T{static get requires(){return[BA,PA]}static get pluginName(){return"List"}},class extends T{static get requires(){return[ni,UA,jA,lo]}static get pluginName(){return"MediaEmbed"}},ho,class extends T{static get pluginName(){return"PasteFromOffice"}static get requires(){return[fe]}init(){const i=this.editor,t=i.editing.view.document,e=[];e.push(new XA(t)),e.push(new KA(t)),i.plugins.get("ClipboardPipeline").on("inputTransformation",(n,o)=>{if(o._isTransformedWithPasteFromOffice||i.model.document.selection.getFirstPosition().parent.is("element","codeBlock"))return;const r=o.dataTransfer.getData("text/html"),s=e.find(a=>a.isActive(r));s&&(o._parsedData=tC(r,t.stylesProcessor),s.execute(o),o._isTransformedWithPasteFromOffice=!0)},{priority:"high"})}},class extends T{static get requires(){return[Hr,ae]}static get pluginName(){return"PictureEditing"}afterInit(){const i=this.editor;i.plugins.has("ImageBlockEditing")&&i.model.schema.extend("imageBlock",{allowAttributes:["sources"]}),i.plugins.has("ImageInlineEditing")&&i.model.schema.extend("imageInline",{allowAttributes:["sources"]}),this._setupConversion(),this._setupImageUploadEditingIntegration()}_setupConversion(){const i=this.editor,t=i.conversion,e=i.plugins.get("ImageUtils");t.for("upcast").add(function(n){const o=["srcset","media","type","sizes"];return s=>{s.on("element:picture",r)};function r(s,a,c){const l=a.viewItem;if(!c.consumable.test(l,{name:!0}))return;const d=new Map;for(const g of l.getChildren())if(g.is("element","source")){const p={};for(const f of o)g.hasAttribute(f)&&c.consumable.test(g,{attributes:f})&&(p[f]=g.getAttribute(f));Object.keys(p).length&&d.set(g,p)}const h=n.findViewImgElement(l);if(!h)return;let u=a.modelCursor.parent;if(!u.is("element","imageBlock")){const g=c.convertItem(h,a.modelCursor);a.modelRange=g.modelRange,a.modelCursor=g.modelCursor,u=yt(g.modelRange.getItems())}c.consumable.consume(l,{name:!0});for(const[g,p]of d)c.consumable.consume(g,{attributes:Object.keys(p)});d.size&&c.writer.setAttribute("sources",Array.from(d.values()),u),c.convertChildren(l,u)}}(e)),t.for("downcast").add(function(n){return r=>{r.on("attribute:sources:imageBlock",o),r.on("attribute:sources:imageInline",o)};function o(r,s,a){if(!a.consumable.consume(s.item,r.name))return;const c=a.writer,l=a.mapper.toViewElement(s.item),d=n.findViewImgElement(l);if(s.attributeNewValue&&s.attributeNewValue.length){const h=c.createContainerElement("picture",null,s.attributeNewValue.map(p=>c.createEmptyElement("source",p))),u=[];let g=d.parent;for(;g&&g.is("attributeElement");){const p=g.parent;c.unwrap(c.createRangeOn(d),g),u.unshift(g),g=p}c.insert(c.createPositionBefore(d),h),c.move(c.createRangeOn(d),c.createPositionAt(h,"end"));for(const p of u)c.wrap(c.createRangeOn(h),p)}else if(d.parent.is("element","picture")){const h=d.parent;c.move(c.createRangeOn(d),c.createPositionBefore(h)),c.remove(h)}}}(e))}_setupImageUploadEditingIntegration(){const i=this.editor;i.plugins.has("ImageUploadEditing")&&this.listenTo(i.plugins.get("ImageUploadEditing"),"uploadComplete",(t,{imageElement:e,data:n})=>{const o=n.sources;o&&i.model.change(r=>{r.setAttributes({sources:o},e)})})}},class extends T{static get requires(){return[vC,DC,en,BC,TC,SC,lo]}static get pluginName(){return"Table"}},class extends T{static get requires(){return[Xo]}static get pluginName(){return"TableToolbar"}afterInit(){const i=this.editor,t=i.t,e=i.plugins.get(Xo),n=i.config.get("table.contentToolbar"),o=i.config.get("table.tableToolbar");n&&e.register("tableContent",{ariaLabel:t("Table toolbar"),items:n,getRelatedElement:LC}),o&&e.register("table",{ariaLabel:t("Table toolbar"),items:o,getRelatedElement:zC})}},class extends T{static get requires(){return["Delete","Input"]}static get pluginName(){return"TextTransformation"}constructor(i){super(i),i.config.define("typing",{transformations:{include:Sw}})}init(){const i=this.editor.model.document.selection;i.on("change:range",()=>{this.isEnabled=!i.anchor.parent.is("element","codeBlock")}),this._enableTransformationWatchers()}_enableTransformationWatchers(){const i=this.editor,t=i.model,e=i.plugins.get("Delete"),n=function(r){const s=r.extra||[],a=r.remove||[],c=l=>!a.includes(l);return function(l){const d=new Set;for(const h of l)if(ih[h])for(const u of ih[h])d.add(u);else d.add(h);return Array.from(d)}(r.include.concat(s).filter(c)).filter(c).map(l=>Mw[l]||l).filter(l=>typeof l=="object").map(l=>({from:Tw(l.from),to:Nw(l.to)}))}(i.config.get("typing.transformations")),o=new Br(i.model,r=>{for(const s of n)if(s.from.test(r))return{normalizedTransformation:s}});o.on("matched:data",(r,s)=>{if(!s.batch.isTyping)return;const{from:a,to:c}=s.normalizedTransformation,l=a.exec(s.text),d=c(l.slice(1)),h=s.range;let u=l.index;t.enqueueChange(g=>{for(let p=1;p<l.length;p++){const f=l[p],b=d[p-1];if(b==null){u+=f.length;continue}const w=h.start.getShiftedBy(u),_=t.createRange(w,w.getShiftedBy(f.length)),I=Bw(w);t.insertContent(g.createText(b,I),_),u+=b.length}t.enqueueChange(()=>{e.requestUndoOnBackspace()})})}),o.bind("isEnabled").to(this)}}],hs.defaultConfig={toolbar:{items:["heading","|","bold","italic","link","bulletedList","numberedList","|","outdent","indent","|","uploadImage","blockQuote","insertTable","mediaEmbed","undo","redo"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:side","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}})(),ne=ne.default})())})(us,us.exports);const $C=GC(us.exports);class QC{constructor(L){this.loader=L}upload(){const L=new FormData,gt=`${{VITE_GOOGLE_SHEET_URL:"https://script.google.com/macros/s/AKfycbxftWfxvDnCeDfSU1HZn-msTWyzvxjo3SWC5gPCQkD3y-K1e9ocdZgtxxra2fn7Z78X/exec",VITE_GOOGLE_MAPS_URL:"https://maps.googleapis.com/maps/api/place/nearbysearch/json?",VITE_GOOGLE_MAPS_TOKEN:"AIzaSyB5Uu6P8LdPv6rjHMb1ZzbbKcl1giT9Lvg",VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"found_houses_v2",VITE_CORS_ANYWHERE_URL:"https://cors-anywhere.herokuapp.com/",VITE_RANDOMUSER_URL:"https://randomuser.me/api/?nat=us,ch",VITE_FAKENAME_URL:"https://api.namefake.com/chinese-taiwan/random",BASE_URL:"/found_houses/",MODE:"production",DEV:!1,PROD:!0}.VUE_APP_API}/api/${{VITE_GOOGLE_SHEET_URL:"https://script.google.com/macros/s/AKfycbxftWfxvDnCeDfSU1HZn-msTWyzvxjo3SWC5gPCQkD3y-K1e9ocdZgtxxra2fn7Z78X/exec",VITE_GOOGLE_MAPS_URL:"https://maps.googleapis.com/maps/api/place/nearbysearch/json?",VITE_GOOGLE_MAPS_TOKEN:"AIzaSyB5Uu6P8LdPv6rjHMb1ZzbbKcl1giT9Lvg",VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"found_houses_v2",VITE_CORS_ANYWHERE_URL:"https://cors-anywhere.herokuapp.com/",VITE_RANDOMUSER_URL:"https://randomuser.me/api/?nat=us,ch",VITE_FAKENAME_URL:"https://api.namefake.com/chinese-taiwan/random",BASE_URL:"/found_houses/",MODE:"production",DEV:!1,PROD:!0}.VUE_APP_PATH}/admin/upload`;return new Promise(Nt=>{this.loader.file.then(S=>(L.append("file-to-upload",S),qC.post(gt,L,{headers:{"Content-Type":"multipart/form-data"}}))).then(S=>{Nt({default:S.data.imageUrl})})})}abort(){this.xhr&&this.xhr.abort()}_sendRequest(L){const gt=new FormData;gt.append("upload",L),this.xhr.send(gt)}}function ZC(Y){Y.plugins.get("FileRepository").createUploadAdapter=L=>new QC(L)}const JC={props:{news:{type:Object,default(){return{}}},isNew:{type:Boolean,default:!1},btnLoading:{type:Boolean,default:!1}},data(){return{status:{},modal:"",editor:$C,editorConfig:{toolbar:["heading","bold","italic","link","|","numberedList","bulletedList","|","undo","redo"],extraPlugins:[ZC]},tempNews:{}}},emits:["update-news"],mixins:[VC],inject:["emitter"],watch:{news(){this.tempNews=this.news}},mounted(){console.log(this.editorConfig.toolbar)}},XC={class:"modal fade productModal",id:"productModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},t0={class:"modal-dialog modal-xl"},e0={class:"modal-content border-0"},n0={class:"modal-header bg-dark text-white"},o0={class:"modal-title",id:"exampleModalLabel"},i0={key:0},r0={key:1},s0=B("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),a0={class:"modal-body"},c0={class:"row"},l0={class:"col-md-4"},d0={class:"mb-3"},h0=B("label",{for:"image",class:"form-label fw-bold"},"\u5C01\u9762\u5716\u7247",-1),u0={class:"mb-3"},g0=["src","alt","title"],m0={class:"col-md-8"},p0={class:"row"},f0={class:"col-12"},k0={class:"mb-3"},b0=B("label",{for:"",class:"form-label fw-bold"},"\u986F\u793A\u72C0\u6CC1",-1),w0={class:"form-check form-switch"},_0={key:0,class:"form-check-label",for:"isPublic"},A0={key:1,class:"form-check-label",for:"isPublic"},C0={class:"mb-3"},v0=B("label",{for:"title",class:"form-label fw-bold"},"\u6A19\u984C",-1),y0={class:"row"},x0={class:"col-sm-6"},E0={class:"mb-3"},D0=B("label",{for:"author",class:"form-label fw-bold"},"\u4F5C\u8005\u59D3\u540D",-1),I0={class:"col-sm-6"},M0={class:"mb-3"},S0=B("label",{for:"category",class:"form-label fw-bold"},"\u5206\u985E",-1),T0={class:"row"},N0={class:"mb-3"},B0=B("label",{for:"description",class:"form-label fw-bold"},"\u6587\u7AE0\u7C21\u8FF0",-1),P0={class:"row"},z0={class:"mb-3"},L0=B("label",{for:"description",class:"form-label fw-bold"},"\u6587\u7AE0\u5167\u5BB9",-1),O0={class:"modal-footer"},R0=B("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," \u53D6\u6D88 ",-1),j0={class:"spinner-border spinner-border-sm"};function F0(Y,L,gt,Nt,S,ne){const D=on("ckeditor");return be(),we("div",XC,[B("div",t0,[B("div",e0,[B("div",n0,[B("h5",o0,[gt.isNew?(be(),we("span",i0,"\u65B0\u589E\u623F\u8A0A\u6587\u7AE0")):Lg("",!0),gt.isNew?Lg("",!0):(be(),we("span",r0,"\u7DE8\u8F2F\u623F\u8A0A\u6587\u7AE0"))]),s0]),B("div",a0,[B("div",c0,[B("div",l0,[B("div",d0,[h0,nn(B("input",{type:"text",class:"form-control",id:"image",placeholder:"\u8ACB\u8F38\u5165\u5716\u7247\u7DB2\u5740","onUpdate:modelValue":L[0]||(L[0]=C=>S.tempNews.image=C)},null,512),[[uo,S.tempNews.image]])]),B("div",u0,[B("img",{class:"img-fluid",src:S.tempNews.image,alt:S.tempNews.title,title:S.tempNews.title},null,8,g0)])]),B("div",m0,[B("div",p0,[B("div",f0,[B("div",k0,[b0,B("div",w0,[nn(B("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":L[1]||(L[1]=C=>S.tempNews.isPublic=C),"true-value":!0,"false-value":!1,id:"isPublic"},null,512),[[WC,S.tempNews.isPublic]]),S.tempNews.isPublic?(be(),we("label",A0,"\u4FEE\u6539\u70BA\u4E0D\u986F\u793A ")):(be(),we("label",_0,"\u4FEE\u6539\u70BA\u986F\u793A "))])])]),B("div",C0,[v0,nn(B("input",{type:"text",class:"form-control",id:"title",placeholder:"\u8ACB\u8F38\u5165\u6A19\u984C","onUpdate:modelValue":L[2]||(L[2]=C=>S.tempNews.title=C)},null,512),[[uo,S.tempNews.title]])])]),B("div",y0,[B("div",x0,[B("div",E0,[D0,nn(B("input",{type:"text",class:"form-control",id:"author",placeholder:"\u8ACB\u8F38\u5165\u4F5C\u8005\u59D3\u540D","onUpdate:modelValue":L[3]||(L[3]=C=>S.tempNews.author=C)},null,512),[[uo,S.tempNews.author]])])]),B("div",I0,[B("div",M0,[S0,nn(B("input",{type:"text",class:"form-control",id:"category",placeholder:"\u8ACB\u8F38\u5165\u5206\u985E","onUpdate:modelValue":L[4]||(L[4]=C=>S.tempNews.category=C)},null,512),[[uo,S.tempNews.category]])])])]),B("div",T0,[B("div",N0,[B0,nn(B("input",{type:"text",class:"form-control",id:"description",placeholder:"\u8ACB\u8F38\u5165\u6587\u7AE0\u7C21\u8FF0","onUpdate:modelValue":L[5]||(L[5]=C=>S.tempNews.description=C)},null,512),[[uo,S.tempNews.description]])])]),B("div",P0,[B("div",z0,[L0,rn(D,{id:"editor",class:"form-control",modelValue:S.tempNews.content,"onUpdate:modelValue":L[6]||(L[6]=C=>S.tempNews.content=C),editor:S.editor,config:S.editorConfig},null,8,["modelValue","editor","config"])])])])])]),B("div",O0,[R0,B("button",{type:"button",class:"btn btn-primary",onClick:L[7]||(L[7]=C=>Y.$emit("update-news",S.tempNews))},[On(" \u78BA\u8A8D "),nn(B("span",j0,null,512),[[YC,gt.btnLoading]])])])])])],512)}const V0=jg(JC,[["render",F0]]),U0={components:{AdminBreadcrumb:FC,NewsEditModal:V0,DelConfirmModal:UC,Pagination:HC},data(){return{isLoading:!1,submitBtnLoading:!1,isNew:!1,tempNews:{},news:[],pagination:{}}},methods:{openModal(Y,L){Y?(this.tempNews={isPublic:!1,create_at:new Date().getTime()/1e3},this.isNew=!0):(this.tempNews={...L},this.isNew=!1),this.$refs.newsModal.openModal()},updateNews(Y){this.tempNews={...Y},this.isLoading=!0,this.submitBtnLoading=!0;let L="https://vue3-course-api.hexschool.io/v2//api/found_houses_v2/admin/article",gt="post",Nt="\u65B0\u589E\u623F\u8A0A";this.isNew||(L=`https://vue3-course-api.hexschool.io/v2//api/found_houses_v2/admin/article/${this.tempNews.id}`,gt="put",Nt="\u66F4\u65B0\u623F\u8A0A"),this.$http[gt](L,{data:this.tempNews}).then(S=>{this.isLoading=!1,this.submitBtnLoading=!1,this.$httpMessageState(S,Nt),this.$refs.newsModal.closeModal(),this.getNewsList(this.currentPage)}).catch(S=>{this.isLoading=!1,this.submitBtnLoading=!1,this.$httpMessageState(S.response,Nt)})},getNewsList(Y=1){this.isLoading=!0,this.currentPage=Y,this.$http.get(`https://vue3-course-api.hexschool.io/v2//api/found_houses_v2/admin/articles/?page=${Y}`).then(L=>{this.news=L.data.articles,this.pagination=L.data.pagination,this.isLoading=!1}).catch(L=>{this.isLoading=!1,this.$httpMessageState(L.response,"\u932F\u8AA4\u8A0A\u606F")})},getNews(Y){const L=`https://vue3-course-api.hexschool.io/v2//api/found_houses_v2/admin/article/${Y}`;this.$http.get(L).then(gt=>{gt.data.success&&(this.openModal(!1,gt.data.article),this.isNew=!1)}).catch(gt=>{this.isLoading=!1,this.$httpMessageState(gt,"\u522A\u9664\u623F\u8A0A")})},openDelModal(Y){this.tempNews={...Y},this.$refs.delModal.openModal()},deleteNews(){this.isLoading=!0,this.submitBtnLoading=!0,this.$http.delete(`https://vue3-course-api.hexschool.io/v2//api/found_houses_v2/admin/article/${this.tempNews.id}`).then(Y=>{this.isLoading=!1,this.submitBtnLoading=!1,this.$httpMessageState(Y,"\u522A\u9664\u623F\u8A0A"),this.$refs.delModal.closeModal(),this.getNewsList(this.currentPage)}).catch(Y=>{this.isLoading=!1,this.submitBtnLoading=!1,this.$httpMessageState(Y.response,"\u522A\u9664\u623F\u8A0A")})}},mounted(){this.getNewsList()}},H0={class:"main-content container-fluid px-4 bg-light"},G0=B("h3",{class:"mt-4 fw-bold"},"\u623F\u8A0A\u7BA1\u7406",-1),q0={class:"text-end my-2"},W0=B("i",{class:"bi bi-plus-square"},null,-1),Y0={class:"table table-hover table-striped table-bordered mt-4 text-center shadow-sm"},K0=B("thead",{class:"table-dark"},[B("tr",null,[B("th",{width:"5%"},"\u9806\u5E8F"),B("th",{width:"10%"},"\u5C01\u9762\u5716\u7247"),B("th",{width:"40%",class:"text-start"},"\u6A19\u984C"),B("th",{width:"10%"},"\u5206\u985E"),B("th",{width:"10%"},"\u767C\u5E03\u8005"),B("th",{width:"10%"},"\u767C\u5E03\u6642\u9593"),B("th",{width:"5%"},"\u662F\u5426\u986F\u793A"),B("th",{width:"10%"},"\u64CD\u4F5C")])],-1),$0=["src"],Q0={class:"text-start"},Z0={key:0,class:"text-success"},J0={key:1,class:"text-danger"},X0={class:"btn-group"},tv=["onClick"],ev=B("i",{class:"bi bi-pencil-square"},null,-1),nv=["onClick"],ov=B("i",{class:"bi bi-trash3"},null,-1);function iv(Y,L,gt,Nt,S,ne){const D=on("LoadingComponent"),C=on("AdminBreadcrumb"),k=on("RouterLink"),v=on("Pagination"),E=on("NewsEditModal"),y=on("DelConfirmModal");return be(),we(Og,null,[B("div",H0,[rn(D,{isLoading:S.isLoading},null,8,["isLoading"]),G0,rn(C),B("div",q0,[B("button",{type:"button",class:"btn btn-success text-white shadow-sm",onClick:L[0]||(L[0]=m=>ne.openModal(!0))},[W0,On(" \u65B0\u589E\u623F\u8A0A ")])]),B("table",Y0,[K0,B("tbody",null,[(be(!0),we(Og,null,KC(S.news,(m,A)=>(be(),we("tr",{key:m.id,style:{"vertical-align":"middle"}},[B("td",null,Ln(A+1),1),B("td",null,[B("img",{class:"img-fluid",src:m.image},null,8,$0)]),B("td",Q0,[rn(k,{to:`/news/${m.id}`,target:"_blank"},{default:Rg(()=>[On(Ln(m.title),1)]),_:2},1032,["to"])]),B("td",null,Ln(m.category),1),B("td",null,Ln(m.author),1),B("td",null,Ln(Y.$moment.moment(m.create_at*1e3).format("YYYY-MM-DD")),1),B("td",null,[m.isPublic===!0?(be(),we("span",Z0,"\u986F\u793A")):(be(),we("span",J0,"\u4E0D\u986F\u793A"))]),B("td",null,[B("div",X0,[B("button",{type:"button",class:"btn btn-primary btn-sm",onClick:Bt=>ne.getNews(m.id)},[ev,On(" \u7DE8\u8F2F ")],8,tv),B("button",{type:"button",class:"btn btn-danger btn-sm",onClick:Bt=>ne.openDelModal(m)},[ov,On(" \u522A\u9664 ")],8,nv)])])]))),128))])]),rn(v,{pages:S.pagination,onEmitPages:ne.getNewsList},null,8,["pages","onEmitPages"])]),rn(E,{news:S.tempNews,isNew:S.isNew,btnLoading:S.submitBtnLoading,onUpdateNews:ne.updateNews,ref:"newsModal"},null,8,["news","isNew","btnLoading","onUpdateNews"]),rn(y,{item:S.tempNews,btnLoading:S.submitBtnLoading,onDelItem:ne.deleteNews,ref:"delModal"},{"modal-text":Rg(()=>[On(" \u623F\u8A0A\u540D\u7A31\uFF1A"+Ln(S.tempNews.title),1)]),_:1},8,["item","btnLoading","onDelItem"])],64)}const dv=jg(U0,[["render",iv]]);export{dv as default};
