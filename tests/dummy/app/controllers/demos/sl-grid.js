import Ember from 'ember';

export default Ember.Controller.extend({
    sortProperties: [ 'fruit' ],
    sortedModel: Ember.computed.sort( 'model', 'sortProperties' ),

    actions: {
        rowClick( row ) {
            window.console.log( 'Clicked', row );
        },

        logName( row ) {
            window.console.log( 'Record:', Ember.get( row, 'name' ) );
        },

        sortColumn( column, sortAscending ) {
            let columnString = column[ 'valuePath' ];

            if ( !sortAscending ) {
                columnString = `${columnString}:desc`;
            }

            this.set( 'sortProperties', [ columnString ] );
        },
        requestData(){
            this.set( 'model', Ember.A([
            {
                name: 'Red',
                fruit: 'Apple',
                hexCode: '#FF0000'
            }
            ]));
        }

    },

    columns: Ember.A([
        {
            primary: true,
            size: 'small',
            title: 'Color',
            valuePath: 'name',
            align: 'right'
        },
        {
            size: 'small',
            sortable: true,
            title: 'Fruit',
            valuePath: 'fruit'
        },
        {
            size: 'small',
            sortable: true,
            title: 'Hex Code',
            valuePath: 'hexCode'
        }
    ]),

    rowActions: [
        {
            label: 'Log',
            action: 'sendLog'
        }
    ],

    totalCount: 6
});
