import { useInvoiceStore } from "../../store/invoiceStore";

function MarkAsPaidButton({ invoiceId }) {
  const { updateInvoiceStatus } = useInvoiceStore();

  return (
    <button
      className="h-12 w-[9.25rem] rounded-full bg-lavender-indigo text-small-heading-alt text-white"
      onClick={() => updateInvoiceStatus(invoiceId)}
    >
      Mark As Paid
    </button>
  );
}

export default MarkAsPaidButton;
