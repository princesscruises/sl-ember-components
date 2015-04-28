import Ember from 'ember';
import layout from '../templates/components/sl-pagination';

/**
 * @module components
 * @class sl-pagination
 * @augments Ember.Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNames: [ 'pagination', 'sl-pagination' ],

    layout,

    tagName: 'ul',

    // -------------------------------------------------------------------------
    // Actions

    actions: {

        /**
         * Progress forward one page
         *
         * @function actions.nextPage
         * @returns {undefined}
         */
        nextPage() {
            if ( this.get( 'busy' ) ) {
                return;
            }

            if ( this.get( 'currentPage' ) < this.get( 'totalPages' ) ) {
                this.incrementProperty( 'currentPage' );

                if ( this.get( 'nextPage' ) ) {
                    this.sendAction( 'nextPage', this.get( 'currentPage' ) );
                }
            }
        },

        /**
         * Progress back one page
         *
         * @function actions.previousPage
         * @returns {undefined}
         */
        previousPage() {
            if ( this.get( 'busy' ) ) {
                return;
            }

            if ( this.get( 'currentPage' ) > 1 ) {
                this.decrementProperty( 'currentPage' );

                if ( this.get( 'previousPage' ) ) {
                    this.sendAction( 'previousPage', this.get( 'currentPage' ) );
                }
            }
        }

    },
    
    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the pagination is in a busy/working state
     *
     * @property {Boolean} busy
     * @default false
     */
    busy: false,

    /**
     * The current page number
     *
     * @property {Number} currentPage
     * @default 1
     */
    currentPage: 1,

    /**
     * The total number of pages
     *
     * @property {?Number} totalPages
     * @default null
     */
    totalPages: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Whether the current page is the first page
     *
     * @function onFirstPage
     * @observes currentPage
     * @returns {Boolean}
     */
    onFirstPage: Ember.computed( 'currentPage', function() {
        return this.get( 'currentPage' ) === 1;
    }),

    /**
     * Whether the current page is the last page
     *
     * @function onLastPage
     * @observes currentPage, totalPages
     * @returns {Boolean}
     */
    onLastPage: Ember.computed( 'currentPage', 'totalPages', function() {
        return this.get( 'currentPage' ) === this.get( 'totalPages' );
    }),

    /**
     * Fires bound "pageChange" action when the currentPage is changed
     *
     * @function pageChanged
     * @observes currentPage
     * @returns {undefined}
     */
    pageChanged: Ember.observer( 'currentPage', function() {
        this.sendAction( 'changePage', this.get( 'currentPage' ) );
    })

    // -------------------------------------------------------------------------
    // Methods

});
