import React, { useId } from 'react';

const Input = React.forwardRef(function Input(
    {
        label,
        type = 'text',
        className = '',
        ...props
    },
    ref
) {
    const id = useId();

    return (
        <div className="w-full">
            {label && (
                <label
                    htmlFor={id}
                    className="block mb-1 text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 w-full ${className}`}
                {...props}
            />
        </div>
    );
});

export default Input;
