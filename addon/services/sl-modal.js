import Ember from 'ember';

/**
 * @module
 * @augments ember/Service
 */
export default Ember.Service.extend({

    /**
     * Object used to store modal references
     *
     * @type {Object}
     */
    modals: {},

    /**
     * Find modal by name
     *
     * @function
     * @param {String} name - The unique name of the component to find
     * @returns {?ember/Component}
     */
    find( name ) {
       return this.get( `modals.${name}` );
    },


    /**
     * Register a modal component
     *
     * @param {ember/Component} modal
     * @function
     * @returns {undefined}
     */
    register( modal ) {
        let name = modal.get( 'name' );

        Ember.assert(
            `Error: Component with name "${name}" has already been registered`,
            !this.find( name )
        );

        this.set( `modals.${name}`, modal );
    },

    /**
     * Unregister a modal component
     *
     * @param {ember/Component} modal
     * @function
     * @returns {undefined}
     */
    unregister( modal ) {
        let modals = this.get( 'modals' );
        let name = modal.get( 'name' );

        if ( name in modals ) {
            delete modals[ name ];
        }
    }
});
