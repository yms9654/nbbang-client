Ext.define('NbbangClient.view.Main', {
    extend: 'Ext.Container',
	layout: 'vbox',
    xtype: 'main',
    
    config: {
        fullscreen: true,
        items: [
            {
				xtype: 'panel',
                html: 'Item 1',
				flex: 1
            },
            {
				xtype: 'panel',
                html: 'Item 2',
				flex: 2
            }
        ]
    }    
});
