function MonthViewGrid({
  startDay,
  daysInPrevMonth,
  daysInMonth,
  daysFromNextMonth,
  handlePreviousMonthDayClick,
  handleDateSelect,
  handleNextMonthDayClick,
  selectedDate,
  displayDate,
}) {
  return (
    <div className="grid grid-cols-7 gap-x-[0.875rem] gap-y-4">
      {/* Days of the previous month */}
      {Array.from({ length: startDay }).map((_, idx) => (
        <button
          type="button"
          key={idx}
          className="cursor-pointer text-black-blue/[0.08] hover:text-black-blue/[0.2] dark:text-pale-blue/[0.08] dark:hover:text-pale-blue/[0.2]"
          onClick={() =>
            handlePreviousMonthDayClick(daysInPrevMonth - startDay + idx + 1)
          }
        >
          {daysInPrevMonth - startDay + idx + 1}
        </button>
      ))}

      {/* Days of the current month */}
      {Array.from({ length: daysInMonth }).map((_, idx) => (
        <button
          type="button"
          key={idx}
          className={`cursor-pointer hover:text-lavender-indigo ${
            idx + 1 === selectedDate.date() &&
            displayDate.isSame(selectedDate, "month")
              ? "text-lavender-indigo"
              : ""
          }`}
          onClick={() => handleDateSelect(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}

      {/* Days from the next month */}
      {Array.from({ length: daysFromNextMonth }).map((_, idx) => (
        <button
          type="button"
          key={idx}
          className="cursor-pointer text-black-blue/[0.08] hover:text-black-blue/[0.2] dark:text-pale-blue/[0.08] dark:hover:text-pale-blue/[0.2]"
          onClick={() => handleNextMonthDayClick(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
}

export default MonthViewGrid;
