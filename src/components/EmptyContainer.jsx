import EmptyIllustration from "../ui/icons/EmptyIllustration";

function EmptyContainer() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-[2.625rem] text-center md:mt-14 md:gap-[4.125rem] lg:mt-16">
      <EmptyIllustration />

      <div>
        <h2 className="mb-6 text-medium-heading dark:text-white">
          There is nothing here
        </h2>

        <p className="text-body-alt text-cool-gray dark:text-pale-blue">
          Create an invoice by clicking the
          <br />
          <strong> New</strong> button and get started
        </p>
      </div>
    </div>
  );
}

export default EmptyContainer;
