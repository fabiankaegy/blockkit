import { registerBlock } from '../../../index';

registerBlock( 'blockkit/accordion', {
    title: 'Accordion',
    category: 'common',
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
