function InvoiceHeader({ id, description }) {
  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <p className="text-small-heading-alt text-black-blue dark:text-white md:w-[5.375rem] lg:w-[6.375rem]">
        <span className="text-dusty-purple">#</span>
        {id}
      </p>
      <p className="text-body-alt">
        {description || (
          <span className="text-lavender-indigo">Project Description</span>
        )}
      </p>
    </div>
  );
}

export default InvoiceHeader;
