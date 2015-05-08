Ext.define('FileApp.view.Main', {
    extend: 'Ext.form.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {

        items: [
             {
                xtype: 'fieldset',
                title: 'My Uploader',
                items: [
                    {
                        xtype: 'filefield',
                        label: "MyPhoto:",
                        name: 'photo',
                        accept: 'image'
                    },
                    {
                        xtype: 'button',
                        text: "upload:",
                        id: 'uploadbtn'
                    }
                ]
            }
            
        ]
    }
});
