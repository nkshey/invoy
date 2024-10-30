import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useInvoiceStore } from "../../store/invoiceStore";
import { handleClickOutside } from "../../utils/helpers";

import ArrowIcon from "../icons/ArrowIcon";

const filterOptions = [
  {
    label: "Draft",
  },
  {
    label: "Pending",
  },
  {
    label: "Paid",
  },
];

function FilterMenu() {
  const filterRef = useRef(null);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const { selectedOptions, setSelectedOptions } = useInvoiceStore();

  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  function toggleDropdown() {
    setIsOpen((cur) => !cur);
    setHasInteracted(true);
  }

  function handleStatusChange(status) {
    if (selectedOptions.includes(status)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== status));
    } else {
      setSelectedOptions([...selectedOptions, status]);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", (event) =>
      handleClickOutside(event, filterRef, setIsOpen),
    );
    return () => {
      document.removeEventListener("mousedown", (event) =>
        handleClickOutside(event, filterRef, setIsOpen),
      );
    };
  }, []);

  return (
    <div
      ref={filterRef}
      className="relative select-none text-small-heading-alt text-black-blue dark:text-white"
    >
      <button className="flex items-center gap-3" onClick={toggleDropdown}>
        <span>{isMobile ? "Filter" : "Filter by status"}</span>
        <ArrowIcon
          direction="down"
          hasInteracted={hasInteracted}
          isOpen={isOpen}
        />
      </button>

      {isOpen && (
        <ul className="absolute left-1/2 top-[calc(100%+1.375rem)] flex w-[calc(100%+4.5rem)] -translate-x-1/2 flex-col gap-3 rounded-lg bg-white p-4 shadow-dropdown-light dark:bg-dark-navy dark:shadow-dropdown-dark md:gap-[0.9375rem] md:p-6">
          {filterOptions.map((option) => (
            <li key={option.label} className="flex">
              <label
                htmlFor={option.label}
                className="flex w-full cursor-pointer items-center gap-[0.8125rem]"
              >
                <input
                  type="checkbox"
                  name="status"
                  id={option.label}
                  checked={selectedOptions.includes(option.label.toLowerCase())}
                  onChange={() =>
                    handleStatusChange(option.label.toLowerCase())
                  }
                  className="grid h-4 w-4 cursor-pointer appearance-none place-items-center rounded-sm border border-pale-blue bg-pale-blue checked:border-lavender-indigo checked:bg-lavender-indigo checked:after:content-checkIcon hover:border-lavender-indigo dark:border-deep-midnight dark:bg-deep-midnight dark:checked:border-lavender-indigo dark:checked:bg-lavender-indigo dark:hover:border-lavender-indigo"
                />
                {option.label}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilterMenu;
