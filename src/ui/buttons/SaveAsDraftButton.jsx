function SaveAsDraftButton({ onClick }) {
  return (
    <button
      className="h-12 w-full max-w-[7.25rem] rounded-full bg-[#373B53] px-2 text-small-heading-alt text-cool-gray hover:bg-black-blue dark:border-2 dark:border-[#373B53] dark:text-pale-blue dark:hover:bg-deep-midnight md:w-[8.25rem] md:dark:hover:bg-dark-slate"
      onClick={onClick}
    >
      Save as Draft
    </button>
  );
}

export default SaveAsDraftButton;
