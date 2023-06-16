/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 4.1.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.2.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.2.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ExtJs6ExamplesWorld.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'ExtJs6ExamplesWorld.view.MyViewportViewModel',
        'Ext.toolbar.Toolbar',
        'Ext.button.Cycle',
        'Ext.menu.Menu',
        'Ext.menu.CheckItem'
    ],

    viewModel: {
        type: 'myviewport'
    },
    height: 250,
    padding: 10,
    width: 400,

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [
        {
            xtype: 'toolbar',
            dock: 'top',
            width: 1024,
            items: [
                {
                    xtype: 'cycle',
                    showText: true,
                    menu: {
                        xtype: 'menu',
                        width: 120,
                        items: [
                            {
                                xtype: 'menucheckitem',
                                handler: function(item, e) {
                                    var workspace = Ext.ComponentQuery.query('container[itemId=workspace]')[0];

                                    var work = Ext.create('ExtJs6ExamplesWorld.view.work');

                                    console.log(workspace);
                                    console.log(work);
                                    //
                                    workspace.remove();
                                    workspace.add(work);
                                },
                                text: 'Add'
                            }
                        ]
                    }
                }
            ]
        },
        {
            xtype: 'container',
            flex: 1,
            id: 'workspace',
            itemId: 'workspace',
            width: 1024,
            layout: 'fit'
        }
    ]

});