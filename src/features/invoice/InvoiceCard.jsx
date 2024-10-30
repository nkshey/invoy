import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { formatDate, formatMoney } from "../../utils/helpers";

import ArrowIcon from "../../ui/icons/ArrowIcon";
import StatusBox from "../../components/StatusBox";

function InvoiceCard({ invoice }) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <li>
      <Link
        to={`/${invoice.id}`}
        className="group flex w-full cursor-pointer flex-col gap-y-6 rounded-lg border border-white bg-white px-6 pb-[1.375rem] pt-[1.5625rem] shadow-card transition-transform duration-75 hover:border hover:border-lavender-indigo dark:border-deep-midnight dark:bg-deep-midnight dark:text-white dark:hover:border-lavender-indigo md:flex-row md:justify-between md:py-[0.9375rem]"
      >
        <div className="flex items-center justify-between">
          <p className="text-small-heading-alt md:w-[5.375rem] lg:w-[6.375rem]">
            <span className="text-dusty-purple">#</span>
            {invoice.id}
          </p>

          {isMobile ? (
            <p className="text-body-alt text-[#858BB2] dark:text-white">
              {invoice.clientName || (
                <span className="text-lavender-indigo">Client Name</span>
              )}
            </p>
          ) : (
            <p className="text-body-alt text-dusty-purple dark:text-pale-blue">
              <span className="text-cool-gray dark:text-pale-blue">
                Due&nbsp;&nbsp;
              </span>
              {formatDate(invoice.paymentDue)}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between md:gap-10">
          <div className="md:flex md:w-[14.125rem] md:items-center md:justify-between lg:w-[15.75rem]">
            {isMobile ? (
              <p className="mb-[0.5625rem] text-body-alt text-dusty-purple dark:text-pale-blue">
                <span className="text-cool-gray dark:text-pale-blue">
                  Due&nbsp;&nbsp;
                </span>
                {formatDate(invoice.paymentDue)}
              </p>
            ) : (
              <p className="text-body-alt text-[#858BB2] dark:text-white">
                {invoice.clientName || (
                  <span className="text-lavender-indigo">Client Name</span>
                )}
              </p>
            )}
            <p className="text-small-heading">€ {formatMoney(invoice.total)}</p>
          </div>

          <div className="flex items-center gap-5">
            <StatusBox status={invoice.status} />

            {!isMobile && (
              <ArrowIcon
                direction="right"
                moveOnHover="group-hover:translate-x-1.5 transition-transform duration-75"
              />
            )}
          </div>
        </div>
      </Link>
    </li>
  );
}

export default InvoiceCard;
