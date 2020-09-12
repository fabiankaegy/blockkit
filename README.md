# blockkit
This is an exploratory repository to explore the options for creating a wrapper of the wordpress registerBlockType function to add defaults

## Idea

The Idea behind this exploration is to create a wrapper around the `registerBlockType` function. Under the namespace `blockkit` you can add options to the `supports` object. Tho start with I will explore to add settings for colors that will then automatically add the attributes and Inspector / Toolbar settings. 

```js
import { registerBlock } from 'blockkit';

registerBlock( 'blockkit/block', {
    supports: {
        colors: [
            'background'
            'text'
        ]
    }
} );
```

## Example

An example of how to use this can be found in the `example` directory.