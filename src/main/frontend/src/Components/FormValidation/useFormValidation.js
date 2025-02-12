import { useState } from 'react';
import { validationRules } from './ValidationRules';

export const useFormValidation = (initialState) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});

    const validate = (name, value) => {
        const rules = validationRules[name];
        if (!rules) return '';

        if (rules.required && !value.trim()) {
            return rules.required;
        }

        if (rules.minLength && value.length < rules.minLength.value) {
            return rules.minLength.message;
        }

        if (rules.pattern && !rules.pattern.value.test(value)) {
            return rules.pattern.message;
        }

        return '';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }));

        const error = validate(name, value);
        setErrors(prev => ({
            ...prev,
            [name]: error
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        Object.keys(values).forEach(name => {
            const error = validate(name, values[name]);
            if (error) {
                newErrors[name] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    return {
        values,
        errors,
        handleChange,
        validateForm,
        setErrors
    };
};