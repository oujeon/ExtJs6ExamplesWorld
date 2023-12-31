/*
 * File: app/view/Toast.js
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

Ext.define('ExtJs6ExamplesWorld.view.Toast', {
    extend: 'Ext.container.Container',
    alias: 'widget.Toast',

    requires: [
        'ExtJs6ExamplesWorld.view.aboutViewModel32',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'toast'
    },
    id: 'Toast',
    itemId: 'Toast',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [
        {
            xtype: 'button',
            itemId: 'mybutton5',
            text: 'Toast'
        }
    ]

});