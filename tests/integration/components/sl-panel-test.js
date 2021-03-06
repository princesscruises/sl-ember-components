import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-panel', 'Integration | Component | sl panel', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.render( hbs`
        {{sl-panel}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-ember-components-panel' ),
        'Default rendered component has class "sl-ember-components-panel"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'panel' ),
        'Default rendered component has class "panel"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'panel-default' ),
        'Default rendered component has class "panel-default"'
    );

    const panelBody = this.$( '>:first-child' ).find( '> .panel-body' );

    assert.strictEqual(
        panelBody.length,
        1,
        'Default rendered component has child with class "panel-body"'
    );
});

test( 'Valid heading value renders panel-heading', function( assert ) {
    this.render( hbs`
        {{sl-panel heading="Test"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.panel-heading' ).length,
        1,
        'Rendered component has panel-heading text'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.panel-heading' ).text(),
        'Test',
        'Text of rendered heading is equal to value passed to it'
    );
});

test( 'Loading state applies class name', function( assert ) {
    this.render( hbs`
        {{sl-panel loading=true}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).find( '> .panel-body' ).hasClass( 'sl-loading' ),
        'Rendered component body has class "sl-loading"'
    );
});

test( 'Content is yielded', function( assert ) {
    this.render( hbs`
        {{#sl-panel}}
            <div class="yield-test"></div>
        {{/sl-panel}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.yield-test' ).length,
        1,
        'Content yields successfully'
    );
});
