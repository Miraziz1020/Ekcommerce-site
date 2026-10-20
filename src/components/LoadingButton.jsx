function LoadingButton({ isLoading, children, onClick }) {
  return (
    <button
      className="bg-[#DB4444] w-58.5 h-14 rounded-sm pl-12 pb-4 pr-12 pt-4 hover:bg-[#d53434] cursor-pointer items-center flex justify-center gap-2 text-[#FAFAFA]"
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading && (
        <span className="text-[16px] h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
      )}
      <span>{isLoading ? "Loading..." : children}</span>
    </button>
  );
}

export default LoadingButton;

// inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg
//          shadow-md hover:bg-blue-700 active:scale-95
//          transition-all duration-200
//          focus:outline-none focus:ring-2
//          focus:ring-blue-500 focus:ring-offset-2
//          disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100
