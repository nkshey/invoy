import InvoiceDate from "../invoice-details/components/InvoiceDate";
import InvoiceHeader from "../invoice-details/components/InvoiceHeader";
import InvoiceItemsList from "../invoice-details/components/InvoiceItemsList";
import InvoiceClientName from "../invoice-details/components/InvoiceClientName";
import InvoiceClientEmail from "../invoice-details/components/InvoiceClientEmail";
import InvoiceSenderAddress from "../invoice-details/components/InvoiceSenderAddress";
import InvoiceClientAddress from "../invoice-details/components/InvoiceClientAddress";
import InvoiceStatusContainer from "../invoice-details/components/InvoiceStatusContainer";

function InvoiceDetails({ openedInvoice, setIsFormOpen }) {
  return (
    <>
      <InvoiceStatusContainer
        status={openedInvoice.status}
        invoiceId={openedInvoice.id}
        setIsFormOpen={setIsFormOpen}
      />

      <div className="rounded-lg bg-white p-6 text-dusty-purple shadow-card dark:bg-deep-midnight dark:text-pale-blue md:p-8 lg:p-12">
        <div className="mb-[1.875rem] flex flex-col gap-[1.875rem] md:mb-5 md:flex-row md:justify-between">
          <InvoiceHeader
            id={openedInvoice.id}
            description={openedInvoice.description}
          />

          <InvoiceSenderAddress
            street={openedInvoice.senderAddress.street}
            city={openedInvoice.senderAddress.city}
            postCode={openedInvoice.senderAddress.postCode}
            country={openedInvoice.senderAddress.country}
          />
        </div>

        <div className="mb-[2.375rem] flex flex-col gap-8 text-body-alt md:mb-12">
          <div className="flex max-w-[22rem] flex-wrap justify-between gap-x-5 gap-y-8 md:w-full md:max-w-none md:justify-normal md:gap-[7.375rem]">
            <InvoiceDate
              createdAt={openedInvoice.createdAt}
              paymentDue={openedInvoice.paymentDue}
            />

            <div className="pr-[3.375rem] md:pr-0">
              <InvoiceClientName name={openedInvoice.clientName} />

              <InvoiceClientAddress
                street={openedInvoice.clientAddress.street}
                city={openedInvoice.clientAddress.city}
                postCode={openedInvoice.clientAddress.postCode}
                country={openedInvoice.clientAddress.country}
              />
            </div>

            <InvoiceClientEmail email={openedInvoice.clientEmail} />
          </div>
        </div>

        <InvoiceItemsList openedInvoice={openedInvoice} />
      </div>
    </>
  );
}

export default InvoiceDetails;
