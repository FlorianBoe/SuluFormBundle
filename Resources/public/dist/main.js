require.config({paths:{l91suluform:"../../l91suluform/dist","type/formSelect":"../../l91suluform/dist/validation/types/formSelect"}}),define({name:"L91SuluFormBundle",initialize:function(a){"use strict";function b(){return c.sulu.getUserSetting("contentLanguage")||c.sulu.user.locale}var c=a.sandbox;a.components.addSource("l91suluform","/bundles/l91suluform/dist/components"),c.mvc.routes.push({route:"l91/forms",callback:function(){var a=b();c.emit("sulu.router.navigate","l91/forms/"+a)}}),c.mvc.routes.push({route:"l91/forms/:language",callback:function(a){return'<div data-aura-component="forms@l91suluform" data-aura-language="'+a+'" data-aura-display="list"/>'}}),c.mvc.routes.push({route:"l91/forms/:language/add/:content",callback:function(a,b){return'<div data-aura-component="forms/tabs@l91suluform" data-aura-language="'+a+'" data-aura-content="'+b+'"/>'}}),c.mvc.routes.push({route:"l91/forms/:language/edit::id/:content",callback:function(a,b,c){return'<div data-aura-component="forms/tabs@l91suluform" data-aura-language="'+a+'" data-aura-id="'+b+'" data-aura-content="'+c+'"/>'}})}});