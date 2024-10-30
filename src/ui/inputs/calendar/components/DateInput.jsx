import CalendarIcon from "../../../icons/CalendarIcon";

function DateInput({ label, toggleCalendar, showCalendar, selectedDate }) {
  return (
    <>
      {label && (
        <span className="mb-2 inline-block text-body-alt text-dusty-purple dark:text-pale-blue">
          {label}
        </span>
      )}

      <label
        onClick={toggleCalendar}
        className={`group flex h-12 w-full cursor-pointer items-center justify-between rounded-[0.25rem] border bg-white p-3 pl-5 pr-4 hover:border-lavender-indigo dark:border-dark-navy dark:bg-deep-midnight dark:text-white dark:hover:border-lavender-indigo ${
          showCalendar
            ? "border-lavender-indigo dark:border-lavender-indigo"
            : "border-pale-blue"
        }`}
      >
        <span>{selectedDate.format("DD MMM YYYY")}</span>
        <CalendarIcon showCalendar={showCalendar} />
      </label>
    </>
  );
}

export default DateInput;
