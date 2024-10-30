function AddNewItemButton({ disabled, onClick }) {
  return (
    <button
      type="button"
      className={`h-12 w-full rounded-full bg-[#F9FAFE] text-center text-small-heading-alt text-dusty-purple hover:bg-[#DFE3FA] dark:bg-dark-navy dark:text-cool-gray ${disabled ? "cursor-not-allowed opacity-50" : "opacity-100"}`}
      disabled={disabled}
      onClick={onClick}
    >
      + Add New Item
    </button>
  );
}

export default AddNewItemButton;
