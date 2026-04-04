const schemas = {
    Item: {
        type:'object',
        properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            price: { type: 'number' },
            quantity: { type: 'number' },
            category: { type: 'string' },
            store: { type: 'string' },
            list: { type: 'string' },
            notes: { type: 'string' },
            createdAt: { type: 'string' },
            updatedAt: { type: 'string' }
        }
    },

    List: {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            user: { type: 'string' },
            items: {
                type: 'array',
                items: { type: 'string' },
            },
            notes: { type: 'string' },
            createdAt: { type: 'string' },
            updatedAt: { type: 'string' }
        }
    },

    Store: {
        type: 'object',
        properties:{
            _id: { type: 'string' },
            name: { type: 'string' },
            address: { type: 'string' },
            category: { type: 'string' },
            notes: { type: 'string' },
            createdAt: { type: 'string' },
            updatedAt: { type: 'string' }
        }
    },

    User: {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            githubId: { type: 'string' },
            username: { type: 'string' },
            displayName: { type: 'string' },
            email: { type: 'string' },
            createdAt: { type: 'string' },
            updatedAt: { type: 'string' },
        }
    }
};

module.exports = schemas;