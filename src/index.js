import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import BLOCKKIT from './blockkit';

export function registerBlock( namespace, options ) {

    const { supports: { blockkit } } = options;

    // There is nothing to extend
    if ( ! blockkit ) {
        registerBlockType( namespace, options );
    }

    const newOptions = Object.keys( blockkit ).reduce( (final ,setting) => {

        return BLOCKKIT.get( setting )( final )

    }, options );

    registerBlockType( namespace, newOptions );
}