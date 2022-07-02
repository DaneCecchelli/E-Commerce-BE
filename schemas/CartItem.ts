/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/indent */
import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { isSignedIn, rules } from '../access';

export const CartItem = list({
    access:{
        create: isSignedIn,
        read: rules.canOrder,
        update: rules.canOrder, 
        delete: rules.canOrder
    },
    ui: {
        listView: {
            initialColumns: ['product', 'quantity', 'user']
        }
    },
    fields: {
        // eslint-disable-next-line prettier/prettier
        quantity: integer({
            defaultValue: 1,
            isRequired: true,
        }),
        product: relationship({ ref: 'Product' }),
        user: relationship({ ref: 'User.cart' }),
    },
});
