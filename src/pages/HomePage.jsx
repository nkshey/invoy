import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useInvoiceStore } from "../store/invoiceStore";

import Form from "../components/Form";
import InvoiceList from "../features/invoice/InvoiceList";
import EmptyContainer from "../components/EmptyContainer";
import InvoiceToolbar from "../features/invoice/InvoiceToolbar";

function HomePage() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const { invoicesData, selectedOptions } = useInvoiceStore();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const filteredInvoices = selectedOptions.length
    ? invoicesData.filter((invoice) => selectedOptions.includes(invoice.status))
    : invoicesData;

  return (
    <>
      {isFormOpen && <Form type="create" setIsFormOpen={setIsFormOpen} />}

      {isMobile && !isFormOpen && (
        <section className="px-6 py-8 md:px-12 md:py-[3.875rem] lg:p-0 lg:py-[4.875rem]">
          <InvoiceToolbar
            filteredInvoices={filteredInvoices}
            setIsFormOpen={setIsFormOpen}
          />

          {!filteredInvoices.length ? (
            <EmptyContainer />
          ) : (
            <InvoiceList filteredInvoices={filteredInvoices} />
          )}
        </section>
      )}

      {!isMobile && (
        <section className="px-6 py-8 md:px-12 md:py-[3.875rem] lg:p-0 lg:py-[4.875rem]">
          <InvoiceToolbar
            filteredInvoices={filteredInvoices}
            setIsFormOpen={setIsFormOpen}
          />

          {!filteredInvoices.length ? (
            <EmptyContainer />
          ) : (
            <InvoiceList filteredInvoices={filteredInvoices} />
          )}
        </section>
      )}
    </>
  );
}

export default HomePage;
