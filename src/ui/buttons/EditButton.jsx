function EditButton({ onClick }) {
  return (
    <button
      type="button"
      className="h-12 w-[4.5rem] rounded-full bg-[#F9FAFE] text-small-heading-alt text-dusty-purple hover:bg-[#DFE3FA] dark:bg-dark-navy dark:text-pale-blue dark:hover:bg-white"
      onClick={onClick}
    >
      Edit
    </button>
  );
}

export default EditButton;
