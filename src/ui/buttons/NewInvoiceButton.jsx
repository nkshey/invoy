import { useMediaQuery } from "react-responsive";

import PlusIcon from "../icons/PlusIcon";

function NewInvoiceButton({ setIsFormOpen }) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <button
      className="group flex h-11 items-center gap-2 rounded-full bg-lavender-indigo p-1.5 pr-4 text-small-heading-alt text-white hover:bg-soft-violet md:h-12 md:gap-4 md:p-2 md:pr-4"
      onClick={() => setIsFormOpen(true)}
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white">
        <PlusIcon />
      </span>

      <span>{isMobile ? "New" : "New Invoice"}</span>
    </button>
  );
}

export default NewInvoiceButton;
