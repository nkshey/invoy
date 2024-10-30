import InvoiceCard from "./InvoiceCard";

function InvoiceList({ filteredInvoices, setOpenedInvoiceId }) {
  return (
    <ul className={`mt-8 flex flex-col-reverse gap-4 md:mt-14 lg:mt-16`}>
      {filteredInvoices.map((invoice) => (
        <InvoiceCard
          key={invoice.id}
          invoice={invoice}
          setOpenedInvoiceId={setOpenedInvoiceId}
        />
      ))}
    </ul>
  );
}

export default InvoiceList;
