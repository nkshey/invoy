function DiscardButton({ onClick }) {
  return (
    <>
      <button
        type="button"
        className="h-12 w-full max-w-[5.25rem] rounded-full bg-[#F9FAFE] px-2 text-small-heading-alt text-dusty-purple hover:bg-[#DFE3FA] dark:bg-dark-navy dark:text-pale-blue dark:hover:bg-white md:w-24 md:max-w-none"
        onClick={onClick}
      >
        Discard
      </button>
    </>
  );
}

export default DiscardButton;
