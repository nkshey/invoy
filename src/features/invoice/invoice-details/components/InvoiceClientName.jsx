function InvoiceClientName({ name }) {
  return (
    <div className="flex flex-col gap-3">
      <span>Bill To</span>
      <p className="mb-2 text-small-heading text-black-blue dark:text-white">
        {name || <span className="text-lavender-indigo">Client Name</span>}
      </p>
    </div>
  );
}

export default InvoiceClientName;
