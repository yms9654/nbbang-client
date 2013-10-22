Ext.define('NbbangClient.view.Main', {
    extend: 'Ext.Carousel',
    xtype: 'main',
    
    config: {
        fullscreen: true,
    
        defaults: {
            styleHtmlContent: true
        },
        
        items: [
            {
                html: 'Item 1',
                style: 'background-color: #5E99CC'
            },
            {
                html: 'Item 2',
                style: 'background-color: #759E60'
            },
            {
                html: 'Item 3'
            }
        ]
    }    
});
