Ext.application({
    launch: function () {
        Ext.create('Ext.Container', {
            fullscreen: true,
            layout: 'vbox',
			style: 'background-color: white;',
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
                style: 'background-color: #96BFFE; color: white; vertical-align: middle; font-size: 28px;',
                flex: 0.6
            }, {
                xtype: 'label',
				html: '받을 금액',
                style: 'background-color: white; height: 25px; background-image: url(resources/images/right.png); background-repeat: no-repeat; padding: 10; padding-left: 20px;',
                flex: 0.1
			}, {
				xtype: 'fieldset',
				padding: '0 0 0 50',
				items: [
				{
					xtype: 'textfield',
					name: 'money',
					label: '김동환',
					value: '+6000'
				}]
            }, {
                html: 'view 4',
                style: 'background-color: white;',
                flex: 2 
            }]
        });
    } // launch
}); // application()