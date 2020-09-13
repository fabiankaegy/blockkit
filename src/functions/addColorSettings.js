import { PanelColorSettings } from "@wordpress/block-editor";
import { assign } from 'lodash';
import { InspectorControls } from '@wordpress/block-editor';

export function addColorSettings( options ) {
    const { 
        supports: { 
            blockkit: { 
                colors
            }
        },
        textDomain
    } = options;

    return assign(
        {},
        options,
        ...colors.map( color => {
            const colorAttribute = {}
            colorAttribute[color] = {
                type: 'string'
            }
            return {
                attributes: colorAttribute
            }
        } ),
        {
            edit: ( props ) => {

                const { setAttributes } = props;
                return (
                    <>
                        <InspectorControls>
                            <PanelColorSettings 
                                title={ __( 'Color Settings', textDomain ) }
                                colorSettings={ colors.map( color => {
                                    return {
                                        label: __(),
                                        value: props.attributes[color],
                                        onChange: ( newValue ) => {
                                            const colorObject = {};
                                            colorObject[color] = newValue
                                            setAttributes( colorObject )
                                        } 
                                    } 
                                } ) }
                            />
                        </InspectorControls>
                        { options.edit( props ) }
                    </>
                );
    
            }
        }
    );
}

