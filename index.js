import { registerBlockType } from '@wordpress/bocks';
import { assign } from 'lodash';

import { InspectorControls } from '@wordpress/blockEditor';

export function registerBlock( namespace, options ) {

    assign( { 
        supports: { html: false },
        edit: ( props ) => {

            // the approach is taking the output from the original block and adding our own custom output on top of that
            const Original = options.edit( props );

            console.log( Original );
            return (
                <>
                    <InspectorControls>
                        <h1>This is a Test</h1>
                    </InspectorControls>
                    <Original />
                </>
            );

        }
    }, options );

    registerBlockType( namespace, options );
}