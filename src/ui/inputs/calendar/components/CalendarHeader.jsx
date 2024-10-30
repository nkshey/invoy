import ArrowIcon from "../../../icons/ArrowIcon";

function CalendarHeader({
  prevMonthOrYear,
  nextMonthOrYear,
  handleYearClick,
  yearSelectionMode,
  yearRange,
  displayDate,
}) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <button type="button" onClick={prevMonthOrYear} className="select-none">
        <ArrowIcon direction="left" />
      </button>

      <span onClick={handleYearClick} className="cursor-pointer select-none">
        {yearSelectionMode ? yearRange : displayDate.format("MMM YYYY")}
      </span>

      <button type="button" onClick={nextMonthOrYear} className="select-none">
        <ArrowIcon direction="right" />
      </button>
    </div>
  );
}

export default CalendarHeader;
