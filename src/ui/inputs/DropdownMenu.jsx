import { useEffect, useRef, useState } from "react";
import { handleClickOutside } from "../../utils/helpers";

import ArrowIcon from "../icons/ArrowIcon";

const options = [
  {
    id: 1,
    label: "Net 1 Day",
    value: 1,
  },
  {
    id: 2,
    label: "Net 7 Days",
    value: 7,
  },
  {
    id: 3,
    label: "Net 14 Days",
    value: 14,
  },
  {
    id: 4,
    label: "Net 30 Days",
    value: 30,
  },
];

function DropdownMenu({ label, getValues, setValue }) {
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const selectedPaymentTerm = getValues("paymentTerms");

  function toggleDropdown() {
    setIsOpen((cur) => !cur);
    setHasInteracted(true);
  }

  function handleSelect(selected) {
    setValue("paymentTerms", selected);
    setIsOpen(false);
  }

  useEffect(() => {
    document.addEventListener("mousedown", (event) =>
      handleClickOutside(event, dropdownRef, setIsOpen),
    );
    return () => {
      document.removeEventListener("mousedown", (event) =>
        handleClickOutside(event, dropdownRef, setIsOpen),
      );
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      {label && (
        <span className="mb-2 inline-block text-body-alt text-dusty-purple dark:text-pale-blue">
          {label}
        </span>
      )}
      <button
        type="button"
        className={`flex h-12 w-full items-center justify-between rounded-[0.25rem] border bg-white pl-5 pr-4 text-small-heading-alt hover:border-lavender-indigo dark:border-dark-navy dark:bg-deep-midnight dark:text-white dark:hover:border-lavender-indigo ${isOpen ? "border-lavender-indigo dark:border-lavender-indigo" : "border-pale-blue"}`}
        onClick={toggleDropdown}
      >
        <span>
          {selectedPaymentTerm === 1
            ? "Net 1 Day"
            : `Net ${selectedPaymentTerm} Days`}
        </span>
        <ArrowIcon
          direction="down"
          hasInteracted={hasInteracted}
          isOpen={isOpen}
        />
      </button>

      {isOpen && (
        <ol className="absolute left-0 top-[calc(100%+1.5rem)] flex w-full flex-col divide-y divide-pale-blue rounded-lg bg-white text-start shadow-dropdown-light dark:divide-deep-midnight dark:bg-dark-navy dark:text-pale-blue dark:shadow-dropdown-dark">
          {options.map((option) => (
            <li key={option.id}>
              <button
                className="w-full px-6 py-4 text-start text-small-heading-alt hover:text-lavender-indigo dark:hover:text-soft-violet"
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default DropdownMenu;
