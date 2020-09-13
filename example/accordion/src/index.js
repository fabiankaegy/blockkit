import { registerBlock } from 'blockkit';

registerBlock( 'blockkit/accordion', {
    title: 'Accordion',
    category: 'common',
    supports: {
        blockkit: {
            colors: [ 
                'background',
                'text'
            ]
        }
    },
    edit: (props) => {

        const { className } = props;

        return ( <div className={ className }>
            <h1>Hello World!</h1>
        </div> )
    },
    save: (props) => {
        const { className } = props;

        return ( <div className={ className }>
            <h1>Hello World!</h1>
        </div> )
    }
} );
