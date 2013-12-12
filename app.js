Ext.application({
    launch: function () {
        Ext.create('Ext.Container', {
            fullscreen: true,
            layout: 'vbox',
            items: [{
				xtype: 'container',
				layout: 'hbox',
                style: 'background-color: #96BFFE;',
				padding: 10,
                flex: 0.5,
				items: [{
					html: 'total',
					style: 'color: white; font-size: 22px'
				}, {
					xtype: 'button',
					cls: 'btnPlus',
					docked: 'right',
					padding: 10,
					handler: function() {
						Ext.Msg.alert("알림", "버튼누름", Ext.EmptyFn);
					}
				}]
            }, {
                html: '+12,000',
				padding: 8,
                style: 'background-color: #96BFFE; color: white; vertical-align: middle; font-size: 28px',
                flex: 0.6
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