/*
 * File: app/view/FormPanel.js
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

Ext.define('ExtJs6ExamplesWorld.view.FormPanel', {
    extend: 'Ext.container.Container',
    alias: 'widget.FormPanel',

    requires: [
        'ExtJs6ExamplesWorld.view.aboutViewModel17',
        'Ext.form.Panel'
    ],

    viewModel: {
        type: 'formpanel'
    },
    id: 'FormPanel',
    itemId: 'FormPanel',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [
        {
            xtype: 'form',
            height: 386,
            width: 406,
            bodyPadding: 10,
            title: 'Form Panel'
        }
    ]

});