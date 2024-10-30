import { useMediaQuery } from "react-responsive";

import StatusBox from "../../../../components/StatusBox";
import InvoiceActionButtonsContainer from "../../../invoice/InvoiceActionButtonsContainer";

function InvoiceStatusContainer({ status, invoiceId, setIsFormOpen }) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="mb-4 mt-[2rem] rounded-lg bg-white p-6 shadow-card dark:bg-deep-midnight md:flex md:items-center md:justify-between md:px-8 md:py-5 lg:mb-6">
      <div className="flex w-full items-center justify-between gap-4 md:justify-normal md:gap-5">
        <p className="text-body-alt text-[#858BB2] dark:text-pale-blue">
          Status
        </p>

        <StatusBox status={status} />
      </div>

      {!isMobile && (
        <InvoiceActionButtonsContainer
          status={status}
          invoiceId={invoiceId}
          setIsFormOpen={setIsFormOpen}
        />
      )}
    </div>
  );
}

export default InvoiceStatusContainer;
