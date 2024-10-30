import { useMediaQuery } from "react-responsive";

import FilterMenu from "../../ui/inputs/FilterMenu";
import NewInvoiceButton from "../../ui/buttons/NewInvoiceButton";

function InvoiceToolbar({ filteredInvoices, setIsFormOpen }) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="flex items-center justify-between gap-3.5">
      <div className="flex flex-col gap-[0.1875rem] md:gap-1.5">
        <h1 className="text-medium-heading dark:text-white md:text-large-heading">
          Invoices
        </h1>
        <p className="text-body-alt text-cool-gray dark:text-pale-blue">
          {isMobile
            ? !filteredInvoices.length
              ? "No invoices"
              : filteredInvoices.length === 1
                ? "1 Invoice"
                : `${filteredInvoices.length} Invoices`
            : !filteredInvoices.length
              ? "No invoices"
              : filteredInvoices.length === 1
                ? "There is only 1 invoice"
                : `There are ${filteredInvoices.length} total invoices`}
        </p>
      </div>

      <div className="flex items-center gap-[1.125rem] md:gap-10">
        <FilterMenu />
        <NewInvoiceButton setIsFormOpen={setIsFormOpen} />
      </div>
    </div>
  );
}

export default InvoiceToolbar;
