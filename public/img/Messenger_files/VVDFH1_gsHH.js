if (self.CavalryLogger) { CavalryLogger.start_js(["lRjr+"]); }

__d("MessengerReplyIconSVGM4React.bs",["React"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("React").createElement("svg",{height:"22px",width:"22px",viewBox:"0 0 36 36"},b("React").createElement("g",{id:"reply",fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1"},b("React").createElement("polygon",{id:"Fill-20",points:"0 36 36 36 36 0 0 0"}),b("React").createElement("path",{id:"Fill-19",d:"M16.2785894,26.6946832 C17.4409207,27.4920577 18.9988647,26.6347303 18.9988647,25.197358 L18.9988647,21.9938712 C23.9932881,21.9938712 26.8856124,22.9656089 27.8513876,25.9083002 C28.119464,26.7256589 28.5055741,26.989452 28.9662054,26.989452 C29.5883827,26.989452 30,26.5722793 30,25.9782453 C29.9989997,18.2243286 26.1404,14.0011418 18.9988647,14.0011418 L18.9988647,10.8021516 C18.9988647,9.36527885 17.4409207,8.50795146 16.2785894,9.30532589 L5.77909704,16.5026793 C4.74030099,17.2146207 4.74030099,18.7843892 5.77909704,19.4968303 L16.2785894,26.6946832 Z",fill:a})))}f.make=a}),null);
__d("MessengerMessageReplyAction.react",["ix","cssVar","cx","fbt","Bootloader","CurrentUser","Image.react","MessengerDotComAndInboxM4Check.bs","MessengerReplyIconSVGM4React.bs","React","asset","tooltipPropsFor"],(function(a,b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"MessengerMessageReplyAction",propTypes:{isActive:a.bool,message:a.object.isRequired,onReplyToMessage:a.func},getDefaultProps:function(){return{isDeletable:!0}},getInitialState:function(){return{shown:!1,hover:!1}},render:function(){var a=b("MessengerDotComAndInboxM4Check.bs").yes?b("MessengerReplyIconSVGM4React.bs").make(this.state.hover?"black":"rgba(0, 0, 0, 0.34)"):b("React").createElement(b("Image.react"),{src:b("CurrentUser").isWorkUser()?g("559673"):g("559672")}),c=j._("Beantwoorden");c=b("tooltipPropsFor")(c,"above","center");return this.props.isActive?b("React").createElement("span",babelHelpers["extends"]({},c,{className:"_3-wv"+(b("MessengerDotComAndInboxM4Check.bs").yes?" _7i2n":""),onClick:this._handleReplyToMessage,onMouseEnter:function(a){return this.setState({hover:!0})}.bind(this),onMouseLeave:function(a){return this.setState({hover:!1})}.bind(this),role:"presentation",ref:"button"}),a):null},_renderReplyToMessage:function(){return j._("Beantwoorden")},_handleReplyToMessage:function(){this._logReply(),this.props.onReplyToMessage&&this.props.onReplyToMessage(this.props.message)},_logReply:function(){b("Bootloader").loadModules(["MessageReplyTypedLogger","MessageReplyEntryPoint","MessageReplyEvent"],function(a,c,d){a=new a();a.setEvent(d.REPLY_INITIATED).setIsWorkplace(b("CurrentUser").isWorkUser()).setEntryPoint(c.MESSENGER_UI_HOVER_BUTTON).log()},"MessengerMessageReplyAction.react")}});e.exports=c}),null);