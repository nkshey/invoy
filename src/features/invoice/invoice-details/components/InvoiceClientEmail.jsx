function InvoiceClientEmail({ email }) {
  return (
    <div className="flex flex-col gap-3">
      <span>Sent to</span>
      <p className="text-small-heading text-black-blue dark:text-white">
        {email || <span className="text-lavender-indigo">Client Email</span>}
      </p>
    </div>
  );
}

export default InvoiceClientEmail;
