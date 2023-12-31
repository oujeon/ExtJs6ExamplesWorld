/*
 * File: app/view/Window.js
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

Ext.define('ExtJs6ExamplesWorld.view.Window', {
    extend: 'Ext.container.Container',
    alias: 'widget.Window',

    requires: [
        'ExtJs6ExamplesWorld.view.aboutViewModel30'
    ],

    viewModel: {
        type: 'window'
    },
    id: 'Window',
    itemId: 'Window',
    defaultListenerScope: true,

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    listeners: {
        afterrender: 'onWindowAfterRender'
    },

    onWindowAfterRender: function(component, eOpts) {
        var workspace = Ext.ComponentQuery.query('container[itemId=Window]')[0];



        var o = Ext.create('ExtJs6ExamplesWorld.view.MyWindow');

        //
        workspace.removeAll();
        workspace.add(o);
        o.show();
    }

});