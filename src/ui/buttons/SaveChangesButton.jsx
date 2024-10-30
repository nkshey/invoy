function SaveChangesButton({ onClick }) {
  return (
    <button
      className="h-12 rounded-full bg-lavender-indigo px-7 text-small-heading-alt text-white hover:bg-soft-violet"
      onClick={onClick}
    >
      Save Changes
    </button>
  );
}

export default SaveChangesButton;
