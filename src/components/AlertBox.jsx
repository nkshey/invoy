import CancelButton from "../ui/buttons/CancelButton";
import AcceptButton from "../ui/buttons/AcceptButton";

function AlertBox({ type, invoiceId, onCancel, onAccept }) {
  return (
    <div className="absolute">
      <div
        role="dialog"
        aria-labelledby="title"
        aria-describedby="description"
        className="fixed left-1/2 top-1/2 z-[9999] w-[calc(100%-3rem)] max-w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8 dark:bg-deep-midnight dark:text-white md:p-12"
      >
        <h2 id="title" className="mb-2 text-medium-heading leading-8 md:mb-3">
          {type?.toLowerCase() === "discard" && "Confirm Discard"}
          {type?.toLowerCase() === "delete" && "Confirm Deletion"}
          {type?.toLowerCase() === "cancel" && "Confirm Cancel"}
        </h2>
        <p
          id="description"
          className="mb-[1.375rem] text-body leading-[1.375rem] text-cool-gray dark:text-pale-blue md:mb-3.5"
        >
          {type?.toLowerCase() === "discard" &&
            "Are you sure you want to discard this invoice? Any unsaved changes will be lost"}

          {type?.toLowerCase() === "delete" &&
            invoiceId &&
            `Are you sure you want to delete invoice #${invoiceId}? This action cannot be undone.`}

          {type?.toLowerCase() === "delete" &&
            !invoiceId &&
            "Are you sure you want to delete this? This action cannot be undone."}

          {type?.toLowerCase() === "cancel" &&
            invoiceId &&
            `Are you sure you want to cancel editing invoice #${invoiceId}? This action cannot be undone.`}

          {type?.toLowerCase() === "cancel" &&
            !invoiceId &&
            `Are you sure you want to cancel editing this? This action cannot be undone.`}
        </p>

        <div className="flex flex-wrap justify-end gap-2">
          <CancelButton onClick={onCancel}>
            {type?.toLowerCase() === "cancel" ? "No" : "Cancel"}
          </CancelButton>
          <AcceptButton onClick={onAccept}>
            {type?.toLowerCase() === "discard" && "Discard"}
            {type?.toLowerCase() === "delete" && "Delete"}
            {type?.toLowerCase() === "cancel" && "Yes"}
          </AcceptButton>
        </div>
      </div>

      <div
        className="fixed inset-0 z-[9998] bg-black-blue opacity-50 md:rounded-r-[1.25rem]"
        onClick={onCancel}
      ></div>
    </div>
  );
}

export default AlertBox;
