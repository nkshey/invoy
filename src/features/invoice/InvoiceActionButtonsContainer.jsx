import EditButton from "../../ui/buttons/EditButton";
import DeleteButton from "../../ui/buttons/DeleteButton";
import MarkAsPaidButton from "../../ui/buttons/MarkAsPaidButton";

function InvoiceActionButtonsContainer({ setIsFormOpen, invoiceId, status }) {
  return (
    <div className="shadow-buttons-container fixed bottom-0 left-0 flex w-full items-center justify-end gap-2 bg-white px-6 py-[1.375rem] dark:bg-deep-midnight md:static md:p-0 md:shadow-none">
      <EditButton onClick={() => setIsFormOpen(true)} />
      <DeleteButton invoiceId={invoiceId} />
      {status !== "paid" && <MarkAsPaidButton invoiceId={invoiceId} />}
    </div>
  );
}

export default InvoiceActionButtonsContainer;
