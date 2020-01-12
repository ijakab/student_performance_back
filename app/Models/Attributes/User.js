module.exports = [
    {
        name: 'id',
        addToResponse: true,
        userWritable: false,
        canSortBy: true,
        canFilterBy: true,
        canSearchBy: false,
        isJSON: false,
        validateRule: 'number',
        sanitizeRule: '',
        required: false
    },
    {
        name: 'username',
        addToResponse: true,
        userWritable: true,
        canSortBy: true,
        canFilterBy: true,
        canSearchBy: true,
        isJSON: false,
        validateRule: 'string',
        sanitizeRule: '',
        required: true
    },
    {
        name: 'email',
        addToResponse: true,
        userWritable: true,
        canSortBy: true,
        canFilterBy: true,
        canSearchBy: true,
        isJSON: false,
        validateRule: 'string',
        sanitizeRule: '',
        required: true
    },
    {
        name: 'firstname',
        addToResponse: true,
        userWritable: true,
        canSortBy: true,
        canFilterBy: true,
        canSearchBy: true,
        isJSON: false,
        validateRule: 'string',
        sanitizeRule: '',
        required: true
    },
    {
        name: 'lastname',
        addToResponse: true,
        userWritable: true,
        canSortBy: true,
        canFilterBy: true,
        canSearchBy: true,
        isJSON: false,
        validateRule: 'string',
        sanitizeRule: '',
        required: true
    },
    {
        name: 'role',
        addToResponse: true,
        userWritable: true,
        canSortBy: true,
        canFilterBy: true,
        canSearchBy: true,
        isJSON: false,
        validateRule: 'string',
        sanitizeRule: '',
        required: true
    },
    {
        name: 'created_at',
        addToResponse: true,
        userWritable: false,
        canSortBy: true,
        canFilterBy: true,
        canSearchBy: true,
        isJSON: false,
        validateRule: 'date',
        sanitizeRule: '',
        required: false
    }
]
