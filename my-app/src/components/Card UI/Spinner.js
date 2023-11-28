export const Spinner = () => {
    return (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-75 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
        </div>
    );
};
