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
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],

    viewModel: {
        type: 'myviewport'
    },
    height: 250,
    width: 400,
    layout: 'fit',

    items: [
        {
            xtype: 'tabpanel',
            activeTab: 0,
            items: [
                {
                    xtype: 'panel',
                    title: 'Behaviors'
                },
                {
                    xtype: 'panel',
                    title: 'Buttons'
                },
                {
                    xtype: 'panel',
                    title: 'Charts'
                }
            ]
        }
    ]

});