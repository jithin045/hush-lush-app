import { forwardRef } from 'react';

export const Input = forwardRef(({ label, error, rightIcon, ...props }, ref) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label className="text-sm font-semibold text-gray-900">{label}</label>
            <div className="relative">
                <input
                    ref={ref}
                    className={`w-full px-4 py-3 rounded-lg border ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-gray-800'
                        } outline-none transition-all`}
                    {...props}
                />
                {rightIcon && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                        {rightIcon}
                    </div>
                )}
            </div>
            {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
        </div>
    );
});

Input.displayName = 'Input';