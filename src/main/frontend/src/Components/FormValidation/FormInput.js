export const FormInput = ({ name, label, type = 'text', error, ...props }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
                {label}:
                <input
                    type={type}
                    name={name}
                    className={`mt-1 block w-full rounded-md shadow-sm 
            ${error ? 'border-red-500' : 'border-gray-300'}`}
                    {...props}
                />
            </label>
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
};