/*
 * File: app/view/HtmlEditor.js
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

Ext.define('ExtJs6ExamplesWorld.view.HtmlEditor', {
    extend: 'Ext.container.Container',
    alias: 'widget.HtmlEditor',

    requires: [
        'ExtJs6ExamplesWorld.view.aboutViewModel13',
        'Ext.form.field.HtmlEditor'
    ],

    viewModel: {
        type: 'htmleditor'
    },
    id: 'HtmlEditor',
    itemId: 'HtmlEditor',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [
        {
            xtype: 'htmleditor',
            height: 150,
            fieldLabel: 'Label'
        }
    ]

});