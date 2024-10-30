import { useMediaQuery } from "react-responsive";
import { formatMoney } from "../../../../utils/helpers";

function InvoiceItemsList({ openedInvoice }) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div>
      <div className="flex flex-col gap-6 rounded-t-lg bg-[#F9FAFE] p-6 text-black-blue dark:bg-dark-navy dark:text-white md:p-8 md:pb-10">
        {isMobile ? (
          openedInvoice.items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-small-heading-alt"
            >
              <div className="flex flex-col gap-2">
                <p>
                  {item.name || (
                    <span className="text-lavender-indigo">Item Name</span>
                  )}
                </p>
                <span className="text-dusty-purple dark:text-cool-gray">
                  {item.quantity || 0} x € {formatMoney(item.price || 0)}
                </span>
              </div>

              <p>€ {formatMoney(item.total)}</p>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-between text-small-heading-alt">
            <div className="flex flex-col gap-8">
              <span className="inline-block text-body text-dusty-purple dark:text-pale-blue">
                Item Name
              </span>
              {openedInvoice.items.map((item, index) => (
                <p
                  key={index}
                  className={!item.name ? "text-lavender-indigo" : ""}
                >
                  {item.name || "Item Name"}
                </p>
              ))}
            </div>

            <div className="flex items-center gap-20">
              <div className="flex items-center gap-16">
                <div className="flex flex-col gap-8 text-center">
                  <span className="inline-block text-body text-dusty-purple dark:text-pale-blue">
                    QTY.
                  </span>
                  {openedInvoice.items.map((item, index) => (
                    <p
                      key={index}
                      className={
                        !item.quantity
                          ? "text-lavender-indigo"
                          : "text-dusty-purple dark:text-pale-blue"
                      }
                    >
                      {item.quantity || 0}
                    </p>
                  ))}
                </div>

                <div className="flex flex-col gap-8 text-end">
                  <span className="inline-block text-body text-dusty-purple dark:text-pale-blue">
                    Price
                  </span>
                  {openedInvoice.items.map((item, index) => (
                    <p
                      key={index}
                      className={
                        !item.price
                          ? "text-lavender-indigo"
                          : "text-dusty-purple dark:text-pale-blue"
                      }
                    >
                      € {formatMoney(item.price || 0)}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-8 text-end">
                <span className="inline-block text-body text-dusty-purple dark:text-pale-blue">
                  Total
                </span>
                {openedInvoice.items.map((item, index) => (
                  <p
                    key={index}
                    className={!item.total ? "text-lavender-indigo" : ""}
                  >
                    € {formatMoney(item.total || 0)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between rounded-b-lg bg-[#373B53] p-6 text-white dark:bg-black-blue md:px-8">
        <span className="text-body">Grand Total</span>
        <h2 className="text-medium-heading leading-8">
          € {formatMoney(openedInvoice.total)}
        </h2>
      </div>
    </div>
  );
}

export default InvoiceItemsList;
