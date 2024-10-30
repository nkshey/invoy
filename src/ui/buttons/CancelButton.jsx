function CancelButton({ children, onClick }) {
  return (
    <button
      type="button"
      className="h-12 rounded-full bg-[#F9FAFE] px-6 text-small-heading-alt text-dusty-purple hover:bg-[#DFE3FA] dark:bg-dark-navy dark:text-pale-blue dark:hover:bg-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CancelButton;
