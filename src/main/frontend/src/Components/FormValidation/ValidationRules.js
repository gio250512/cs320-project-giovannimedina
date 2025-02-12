export const validationRules = {
    firstName: {
        required: 'First name is required',
        minLength: {
            value: 2,
            message: 'First name must be at least 2 characters'
        },
        pattern: {
            value: /^[a-zA-Z\s-]+$/,
            message: 'First name can only contain letters, spaces, and hyphens'
        }
    },
    lastName: {
        required: 'Last name is required',
        minLength: {
            value: 2,
            message: 'Last name must be at least 2 characters'
        },
        pattern: {
            value: /^[a-zA-Z\s-]+$/,
            message: 'Last name can only contain letters, spaces, and hyphens'
        }
    },
    email: {
        required: 'Email is required',
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please enter a valid email address'
        }
    }
};
