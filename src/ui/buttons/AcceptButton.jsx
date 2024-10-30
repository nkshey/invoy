function AcceptButton({ onClick, children }) {
  return (
    <button
      type="button"
      className="h-12 w-full max-w-[5.25rem] rounded-full bg-coral-red px-2 text-small-heading-alt text-white hover:bg-light-red"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default AcceptButton;
