Ext.application({
    launch: function () {
        Ext.create('Ext.Container', {
            fullscreen: true,
            layout: 'vbox',
            items: [{
				xtype: 'container',
				layout: 'hbox',
                style: 'background-color: #7DB9F5;',
				padding: 10,
                flex: 1,
				items: [{
					html: 'total',
					style: 'color: white; font-size:22px'
				}, {
					html: 'test2',
					docked: 'right',
					padding: 10
				}]
            }, {
                html: 'view 2',
                style: 'background-color: #7DB9F5;',
                flex: 1
            }, {
                html: 'view 3',
                style: 'background-color: white;',
                flex: 2 
            }, {
                html: 'view 4',
                style: 'background-color: white;',
                flex: 2 
            }]
        });
    } // launch
}); // application()