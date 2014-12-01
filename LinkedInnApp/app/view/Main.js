Ext.define('LinkdInnApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,
                items:[
                    {
                        xtype:'button',
                        text:'Sign with LinkedIn',
                        id:'signinlikedin',
                        handler:function(){

                                IN.User.isAuthorized(); //check if users is authorized

                                IN.User.authorize(function callbackFunction(a,b){
                                    console.info(a,b);
                                });

                                IN.API.Profile("me")
                                .fields(["firstName","headline","positions:(company)"])
                                .result(function(result) {
                                   alert (JSON.stringify(result))
                                });
                        }
                    }
                    ,{
                        xtype:'button',
                        text:'Sign out',
                        // id:'signinlikedin',
                        handler:function(){
                                IN.User.logout(callbackFunction)
                                function callbackFunction(a,b){
                                    console.info(a,b);
                                }

                        }
                    }
                ]
            }
        ]
    }
});
