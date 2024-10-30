function SaveAndSendButton({ onClick }) {
  return (
    <button
      className="h-12 w-full max-w-28 rounded-full bg-lavender-indigo px-2 text-small-heading-alt text-white hover:bg-soft-violet md:w-32"
      onClick={onClick}
    >
      Save & Send
    </button>
  );
}

export default SaveAndSendButton;
