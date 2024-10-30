import { useEffect, useRef, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import { useInvoiceStore } from "../store/invoiceStore";
import {
  allowOnlyNumbers,
  allowToPasteOnlyNumbers,
  calculatePaymentDue,
  formatMoney,
  generateUniqueId,
  getCurrentDate,
} from "../utils/helpers";

import Input from "../ui/inputs/Input";
import Calendar from "../ui/inputs/calendar/Calendar";
import AlertBox from "./AlertBox";
import TrashIcon from "../ui/icons/TrashIcon";
import GoBackButton from "../ui/buttons/GoBackButton";
import DropdownMenu from "../ui/inputs/DropdownMenu";
import AddNewItemButton from "../ui/buttons/AddNewItemButton";
import EditInvoiceActionButtonsContainer from "../features/invoice/EditInvoiceActionButtonsContainer";
import CreateInvoiceActionButtonsContainer from "../features/invoice/CreateInvoiceActionButtonsContainer";

const INITIAL_PAYMENT_TERM = 1;
const CURRENT_DATE = getCurrentDate();
const PAYMENT_DUE_DATE = calculatePaymentDue(
  CURRENT_DATE,
  INITIAL_PAYMENT_TERM,
);
const INITIAL_FORM_DATA = {
  id: "",
  createdAt: CURRENT_DATE,
  paymentDue: PAYMENT_DUE_DATE,
  description: "",
  paymentTerms: INITIAL_PAYMENT_TERM,
  clientName: "",
  clientEmail: "",
  status: "pending",
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  items: [
    {
      name: "",
      quantity: "",
      price: "",
      total: 0,
    },
  ],
  total: 0,
};

function Form({ type, setIsFormOpen, openedInvoice }) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const formRef = useRef(null);
  const overlayRef = useRef(null);
  const { addInvoice, updateInvoice } = useInvoiceStore();
  const [generatedIds, setGeneratedIds] = useState(new Set());
  const [isAlertBoxOpen, setIsAlertBoxOpen] = useState();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
    reset,
  } = useForm({
    defaultValues:
      type?.toLowerCase() === "create" ? INITIAL_FORM_DATA : openedInvoice,
  });

  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  const paymentTerms = watch("paymentTerms");
  const createdAt = watch("createdAt");

  useEffect(() => {
    if (createdAt && paymentTerms) {
      const updatedPaymentDue = calculatePaymentDue(createdAt, paymentTerms);
      setValue("paymentDue", updatedPaymentDue);
    }
  }, [createdAt, paymentTerms, setValue]);

  // Show confirmation dialog on refresh
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  function animateAndCloseForm() {
    if (overlayRef.current && formRef.current) {
      overlayRef.current.classList.remove("md:animate-fadeIn");
      overlayRef.current.classList.add("md:animate-fadeOut");
      formRef.current.classList.remove("md:animate-slideRight");
      formRef.current.classList.add("md:animate-slideLeft");

      setTimeout(
        () => {
          setIsFormOpen(false);
          reset();
        },
        isMobile ? 0 : 250,
      ); // duration of the animations
    }
  }

  function areAllItemFieldsFilled() {
    return fields.every((item, index) => {
      const name = watch(`items.${index}.name`);
      const quantity = watch(`items.${index}.quantity`);
      const price = watch(`items.${index}.price`);
      return name && quantity && price;
    });
  }

  function handleSaveAsDraft() {
    const data = getValues();
    const uniqueId = generateUniqueId(generatedIds);
    setGeneratedIds((prevIds) => {
      prevIds.add(uniqueId);
      return new Set(prevIds);
    });

    const updatedFormData = {
      ...data,
      id: uniqueId,
      status: "draft",
      items: data.items.map((item) => ({
        ...item,
        quantity: isNaN(item.quantity) ? "" : item.quantity,
        price: isNaN(item.price) ? "" : item.price,
      })),
      total: data.items.reduce((acc, item) => acc + item.total, 0),
    };

    addInvoice(updatedFormData);
    animateAndCloseForm();
  }

  function handleSaveAndSend() {
    handleSubmit((data) => {
      const uniqueId = generateUniqueId(generatedIds);
      setGeneratedIds((prevIds) => {
        prevIds.add(uniqueId);
        return new Set(prevIds);
      });

      const updatedFormData = {
        ...data,
        id: uniqueId,
        total: data.items.reduce((acc, item) => acc + item.total, 0),
      };

      addInvoice(updatedFormData);
      animateAndCloseForm();
    })();
  }

  function handleSaveChanges() {
    handleSubmit((data) => {
      const updatedFormData = {
        ...data,
        status: data.status !== "paid" ? "pending" : data.status,
        total: data.items.reduce((acc, item) => acc + item.total, 0),
      };

      updateInvoice(updatedFormData);
      animateAndCloseForm();
    })();
  }

  function onSubmit() {
    if (type === "create") handleSaveAndSend;
    if (type === "edit") handleSaveChanges;
  }

  return (
    <>
      <section
        ref={formRef}
        className="relative left-0 z-[9999] h-[calc(100dvh-5rem)] w-full bg-white pb-0 pl-6 pr-4 pt-8 dark:bg-dark-slate dark:text-white md:fixed md:w-[38.5rem] md:animate-slideRight md:rounded-r-[1.25rem] md:pl-14 md:pr-8 md:pt-[3.75rem] lg:left-[5.25rem] lg:h-dvh lg:w-[39.75rem] lg:pl-[4.75rem]"
      >
        {isMobile && (
          <GoBackButton btnFor="form" setIsFormOpen={setIsFormOpen} />
        )}

        <h2 className="mb-[1.375rem] mt-[1.625rem] text-medium-heading leading-8 md:mb-[2.875rem] md:mt-0">
          {type?.toLowerCase() === "create" ? (
            "New Invoice"
          ) : (
            <>
              Edit
              {openedInvoice && <span className="text-cool-gray"> #</span>}
              {openedInvoice.id}
            </>
          )}
        </h2>

        <form
          className="flex max-h-[calc(100dvh-18.1875rem)] flex-col overflow-y-auto pb-[5.5rem] pr-2 md:max-h-[calc(100dvh-19.375rem)] md:pb-5 md:pr-4 lg:max-h-[calc(100dvh-13.875rem)]"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          noValidate
        >
          {/* Bill From */}
          <div className="mb-10 md:mb-[3.125rem]">
            <h3 className="mb-6 text-small-heading-alt text-lavender-indigo">
              Bill From
            </h3>

            <div className="flex flex-col gap-6">
              <Input
                label="Street Address"
                id="sender-street-address"
                error={errors.senderAddress?.street}
                register={{
                  ...register("senderAddress.street", {
                    required: "can't be empty",
                  }),
                }}
              />

              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                <Input
                  label="City"
                  id="sender-city"
                  error={errors.senderAddress?.city}
                  register={{
                    ...register("senderAddress.city", {
                      required: "can't be empty",
                    }),
                  }}
                />

                <Input
                  label="Post Code"
                  id="sender-post-code"
                  error={errors.senderAddress?.postCode}
                  register={{
                    ...register("senderAddress.postCode", {
                      required: "can't be empty",
                    }),
                  }}
                />

                <Input
                  label="Country"
                  id="sender-country"
                  name="sender-country"
                  error={errors.senderAddress?.country}
                  register={{
                    ...register("senderAddress.country", {
                      required: "can't be empty",
                    }),
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bill To */}
          <div className="mb-10 md:mb-[3.125rem]">
            <h2 className="mb-6 text-small-heading-alt text-lavender-indigo">
              Bill To
            </h2>

            <div className="flex flex-col gap-6">
              <Input
                label="Client's Name"
                id="client-name"
                error={errors.clientName}
                register={{
                  ...register("clientName", {
                    required: "can't be empty",
                  }),
                }}
              />

              <div>
                <Input
                  label="Client's Email"
                  id="client-email"
                  error={errors.clientEmail}
                  register={{
                    ...register("clientEmail", {
                      required: "can't be empty",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email format",
                      },
                    }),
                  }}
                />
              </div>

              <Input
                label="Street Address"
                id="client-street-address"
                error={errors.clientAddress?.street}
                register={{
                  ...register("clientAddress.street", {
                    required: "can't be empty",
                  }),
                }}
              />

              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                <Input
                  label="City"
                  id="client-city"
                  error={errors.clientAddress?.city}
                  register={{
                    ...register("clientAddress.city", {
                      required: "can't be empty",
                    }),
                  }}
                />

                <Input
                  label="Post Code"
                  id="client-post-code"
                  error={errors.clientAddress?.postCode}
                  register={{
                    ...register("clientAddress.postCode", {
                      required: "can't be empty",
                    }),
                  }}
                />

                <Input
                  label="Country"
                  id="client-country"
                  name="client-country"
                  error={errors.clientAddress?.country}
                  register={{
                    ...register("clientAddress.country", {
                      required: "can't be empty",
                    }),
                  }}
                />
              </div>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="mb-[4.375rem] flex flex-col gap-6 md:mb-7">
            <Calendar label="Invoice Date" setValue={setValue} />

            <DropdownMenu
              label="Payment Terms"
              setValue={setValue}
              getValues={getValues}
            />

            <Input
              label="Project Description"
              id="description"
              error={errors.description}
              register={{
                ...register("description", {
                  required: "can't be empty",
                }),
              }}
            />
          </div>

          {/* Items */}
          <div
            className={`${Object.keys(errors).length > 0 ? "mb-8" : "md:mb-12"}`}
          >
            <h3 className="mb-[1.375rem] text-lg font-bold leading-8 tracking-[-0.38px] text-[#777F98] md:mb-3.5">
              Item List
            </h3>

            <ul className="flex flex-col gap-12 md:gap-[1.125rem]">
              {fields.map((item, index) => {
                const quantity = watch(
                  `items.${index}.quantity`,
                  item.quantity,
                );
                const price = watch(`items.${index}.price`, item.price);

                const itemTotal = isNaN(quantity * price)
                  ? "0.00"
                  : (quantity * price).toFixed(2);

                setValue(`items.${index}.total`, Number(itemTotal));

                return (
                  <li
                    key={item.id}
                    className="grid grid-cols-[11fr_17fr_22fr] gap-x-4 gap-y-[1.625rem] md:mt-0 md:grid-cols-[13.375rem_2.875rem_6.25rem_1fr]"
                  >
                    <Input
                      index={index}
                      label={!isMobile && index !== 0 ? "" : "Item Name"}
                      id={`item-name-${index}`}
                      name="item-name"
                      error={errors.items?.[index]?.name}
                      register={{
                        ...register(`items.${index}.name`, {
                          required: true,
                        }),
                      }}
                    />

                    <Input
                      index={index}
                      label={!isMobile && index !== 0 ? "" : "Qty."}
                      id={`item-quantity-${index}`}
                      name="item-quantity"
                      error={errors.items?.[index]?.quantity}
                      register={{
                        ...register(`items.${index}.quantity`, {
                          required: true,
                          valueAsNumber: true,
                        }),
                      }}
                      onKeyDown={(e) => allowOnlyNumbers(e, false)}
                      onPaste={(e) => allowToPasteOnlyNumbers(e, false)}
                    />
                    <Input
                      index={index}
                      label={!isMobile && index !== 0 ? "" : "Price"}
                      id={`item-price-${index}`}
                      name="item-price"
                      error={errors.items?.[index]?.price}
                      register={{
                        ...register(`items.${index}.price`, {
                          required: true,
                          valueAsNumber: true,
                        }),
                      }}
                      onKeyDown={allowOnlyNumbers}
                      onPaste={allowToPasteOnlyNumbers}
                    />

                    <div className="flex flex-col gap-2 md:gap-4">
                      {index === 0 && (
                        <span className="text-body-alt text-dusty-purple dark:text-pale-blue">
                          Total
                        </span>
                      )}
                      <div className="flex h-12 items-center justify-between text-small-heading-alt text-cool-gray">
                        <p>{formatMoney(itemTotal)}</p>

                        <button
                          type="button"
                          disabled={fields.length <= 1}
                          onClick={() => remove(index)}
                          className={`${fields.length <= 1 ? "cursor-not-allowed opacity-30" : "group"}`}
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}

              <AddNewItemButton
                disabled={!areAllItemFieldsFilled()}
                onClick={() => areAllItemFieldsFilled() && append()}
              />
            </ul>
          </div>

          {type?.toLowerCase() === "create" && (
            <>
              <CreateInvoiceActionButtonsContainer
                onDiscard={() => setIsAlertBoxOpen(true)}
                onSaveAsDraft={handleSaveAsDraft}
                onSaveAndSend={handleSaveAndSend}
              />
              {isAlertBoxOpen && (
                <AlertBox
                  type="discard"
                  onCancel={() => setIsAlertBoxOpen(false)}
                  onAccept={animateAndCloseForm}
                />
              )}
            </>
          )}

          {type?.toLowerCase() === "edit" && (
            <>
              <EditInvoiceActionButtonsContainer
                onDiscard={() => setIsAlertBoxOpen(true)}
                onSaveChanges={handleSaveChanges}
              />
              {isAlertBoxOpen && (
                <AlertBox
                  type="cancel"
                  invoiceId={openedInvoice?.id}
                  onCancel={() => setIsAlertBoxOpen(false)}
                  onAccept={animateAndCloseForm}
                />
              )}
            </>
          )}

          {Object.keys(errors).length > 0 && (
            <p className="text-[0.625rem] leading-[0.9375rem] tracking-[-0.21px] text-coral-red md:mb-[2.625rem]">
              - All fields must be added
            </p>
          )}
        </form>
      </section>

      {/* OVERLAY BEHIND THE FORM */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9998] min-h-dvh bg-[#000] md:animate-fadeIn"
        onClick={() => setIsAlertBoxOpen(true)}
      ></div>
    </>
  );
}

export default Form;
