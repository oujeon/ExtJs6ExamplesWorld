/*
 * File: app/view/ComboBox.js
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

Ext.define('ExtJs6ExamplesWorld.view.ComboBox', {
    extend: 'Ext.container.Container',
    alias: 'widget.ComboBox',

    requires: [
        'ExtJs6ExamplesWorld.view.aboutViewModel5',
        'Ext.form.field.ComboBox'
    ],

    viewModel: {
        type: 'combobox'
    },
    id: 'ComboBox',
    itemId: 'ComboBox',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [
        {
            xtype: 'combobox',
            fieldLabel: 'Combobox',
            displayField: 'abbr',
            queryMode: 'local',
            store: 'ComboBox'
        }
    ]

});