import { useFormValidation } from './FormValidation/useFormValidation';
import { FormInput } from './FormValidation/FormInput';
import { API_URL } from '../config';

export const UserRegistrationForm = () => {
    const initialState = {
        firstName: '',
        lastName: '',
        email: ''
    };

    const {
        values,
        errors,
        handleChange,
        validateForm,
        setErrors
    } = useFormValidation(initialState);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await fetch(`${API_URL}/api/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            const data = await response.json();

            if (response.ok) {
                // Success case
                alert('Registration successful!');
                // Reset form
                Object.keys(values).forEach(key => {
                    values[key] = '';
                });
            } else {
                // Handle backend validation errors
                if (data.fieldErrors) {
                    // If the backend returns field-specific errors
                    setErrors(data.fieldErrors);
                } else {
                    // If the backend returns a general error
                    setErrors(prev => ({
                        ...prev,
                        server: data.message || 'Registration failed. Please try again.'
                    }));
                }
            }
        } catch (error) {
            setErrors(prev => ({
                ...prev,
                server: 'Unable to connect to the server. Please try again later.'
            }));
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-6">User Registration</h1>

            {errors.server && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {errors.server}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <FormInput
                    name="firstName"
                    label="First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                />

                <FormInput
                    name="lastName"
                    label="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                />

                <FormInput
                    name="email"
                    label="Email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Register
                </button>
            </form>
        </div>
    );
};
