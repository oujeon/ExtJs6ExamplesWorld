/*
 * File: app/view/FieldSet.js
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

Ext.define('ExtJs6ExamplesWorld.view.FieldSet', {
    extend: 'Ext.container.Container',
    alias: 'widget.FieldSet',

    requires: [
        'ExtJs6ExamplesWorld.view.aboutViewModel16',
        'Ext.form.FieldSet'
    ],

    viewModel: {
        type: 'fieldset'
    },
    id: 'FieldSet',
    itemId: 'FieldSet',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [
        {
            xtype: 'fieldset',
            height: 294,
            width: 311,
            title: 'FieldSet'
        }
    ]

});