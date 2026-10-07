export const SocialButton = ({ icon: Icon, iconColor, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
            <Icon className={iconColor} size={24} />
        </button>
    );
};