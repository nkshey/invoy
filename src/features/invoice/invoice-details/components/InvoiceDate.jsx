import { formatDate } from "../../../../utils/helpers";

function InvoiceDate({ createdAt, paymentDue }) {
  return (
    <div className="flex flex-col gap-[1.875rem]">
      <div className="flex flex-col gap-3">
        <span>Invoice Date</span>
        <p className="text-small-heading text-black-blue dark:text-white">
          {formatDate(createdAt)}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <span>Payment Due</span>
        <p className="text-small-heading text-black-blue dark:text-white">
          {formatDate(paymentDue)}
        </p>
      </div>
    </div>
  );
}

export default InvoiceDate;
