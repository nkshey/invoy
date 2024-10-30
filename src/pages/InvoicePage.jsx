import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useInvoiceStore } from "../store/invoiceStore";

import Form from "../components/Form";
import GoBackButton from "../ui/buttons/GoBackButton";
import InvoiceDetails from "../features/invoice/invoice-details/InvoiceDetails";
import InvoiceActionButtonsContainer from "../features/invoice/InvoiceActionButtonsContainer";

function InvoicePage() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const { invoiceId } = useParams();
  const { invoicesData } = useInvoiceStore();
  const [openedInvoice] = invoicesData.filter(
    (invoice) => invoice?.id === invoiceId,
  );
  const [isFormOpen, setIsFormOpen] = useState(false);

  if (!openedInvoice) {
    throw new Error("Invoice not found");
  }

  return (
    <>
      {isFormOpen && (
        <Form
          type="edit"
          setIsFormOpen={setIsFormOpen}
          openedInvoice={openedInvoice}
        />
      )}

      {isMobile && !isFormOpen && (
        <section className="px-6 pb-[9.25rem] pt-8">
          <GoBackButton />
          <InvoiceDetails openedInvoice={openedInvoice} />
          <InvoiceActionButtonsContainer
            setIsFormOpen={setIsFormOpen}
            invoiceId={openedInvoice.id}
            status={openedInvoice.status}
          />
        </section>
      )}

      {!isMobile && (
        <section className="lg:pt px-10 py-12 lg:px-0 lg:pt-16">
          <GoBackButton />
          <InvoiceDetails
            openedInvoice={openedInvoice}
            setIsFormOpen={setIsFormOpen}
          />
        </section>
      )}
    </>
  );
}

export default InvoicePage;
