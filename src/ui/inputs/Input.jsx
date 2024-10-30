import { disallowFirstCharacterToBeBlankSpace } from "../../utils/helpers";

function Input({
  label = null,
  id,
  error,
  register,
  onKeyDown,
  onPaste,
  name,
}) {
  return (
    <label
      htmlFor={id}
      className={`flex min-w-0 flex-col gap-2 md:gap-4 ${name === "sender-country" || name === "client-country" || name === "item-name" ? "col-span-full md:col-span-1" : ""}`}
    >
      <div className="flex justify-between">
        {label && (
          <span
            className={`${error ? "text-coral-red" : "text-dusty-purple dark:text-pale-blue"} text-body-alt`}
          >
            {label}
          </span>
        )}
        {error && (
          <span className="mr-4 text-[0.625rem] leading-[0.9375rem] tracking-[-0.21px] text-coral-red">
            {error.message}
          </span>
        )}
      </div>
      <input
        autoComplete="off"
        id={id}
        {...register}
        onKeyDown={onKeyDown}
        onPaste={onPaste}
        onInput={disallowFirstCharacterToBeBlankSpace}
        className={`h-12 rounded-[0.25rem] border bg-white px-5 text-small-heading-alt text-black-blue caret-soft-violet outline-none dark:bg-deep-midnight dark:text-white ${error ? "border-coral-red" : "border-pale-blue focus:border-soft-violet dark:border-dark-navy dark:focus:border-soft-violet"} ${name === "item-quantity" ? "md:px-2 md:text-center" : ""}`}
      />
    </label>
  );
}

export default Input;
