Ext.ns("Ext.ux");Ext.ux.MessageSlider=Ext.extend(Ext.util.Observable,{items:[],renderTo:document.body,displayIndex:0,intervalTime:4,msgContainerCls:"ux-msg-slider-container",msgInnerCls:"ux-msg-slider-inner",msgOverCls:"ux-msg-slider-over",constructor:function(a){Ext.apply(this,a);Ext.ux.MessageSlider.superclass.constructor.call(this);this.addEvents("change");this.init()},init:function(){this.el=Ext.get(this.renderTo);this.activeItem=this.items[this.displayIndex];this.initMarkup();this.initEvents()},initMarkup:function(){this.containerEl=this.el.createChild({tag:"div",cls:this.msgContainerCls});this.innerEl=this.containerEl.createChild({tag:"div",cls:this.msgInnerCls});var a=this.activeItem;this.innerEl.createChild({tag:"a",href:a.url||"#",html:a.content,title:a.tip||a.content,target:a.target||"_blank"})},initEvents:function(){var a=this.msgOverCls;this.innerEl.hover(function(){Ext.fly(this).addClass(a)},function(){Ext.fly(this).removeClass(a)});this.containerEl.on("click",function(c,b){if(b.href.slice(-1)=="#"){c.preventDefault()}this.fireEvent("change",this.activeItem,this.displayIndex)},this,{delegate:"a"});this.showMsg(this.displayIndex);window.setInterval(function(){if(!this.innerEl.hasClass(a)){this.displayIndex=this.items[this.displayIndex+1]?this.displayIndex+1:0;this.showMsg(this.displayIndex)}}.createDelegate(this),this.intervalTime*1000)},showMsg:function(a){if(!this.innerEl.hasClass(this.msgOverCls)){this.displayIndex=a;this.activeItem=this.items[a];if(this.containerEl.isVisible()){this.containerEl.slideOut("b",{callback:this.updateMsg,scope:this})}else{this.updateMsg()}}},updateMsg:function(){var a=this.activeItem,b=this.innerEl.child("a");b.update(a.content);b.dom.href=a.url||"#";b.dom.title=a.tip||a.content;b.dom.target=a.target||"_blank";this.containerEl.slideIn("b",{duration:0.2})}});