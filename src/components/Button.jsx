export const Button = ({ children, isLoading, variant = 'primary', ...props }) => {
    const baseStyles = "w-full py-3 rounded-lg font-semibold transition-all flex justify-center items-center";
    const variants = {
        primary: "bg-[#DC2626] text-white hover:bg-red-700 disabled:bg-red-400",
        ghost: "bg-transparent text-gray-600 hover:text-gray-900 underline underline-offset-2"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]}`}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : children}
        </button>
    );
};