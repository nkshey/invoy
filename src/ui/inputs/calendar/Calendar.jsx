import { useEffect, useRef, useState } from "react";
import { handleClickOutside } from "../../../utils/helpers";

import dayjs from "dayjs";

import DateInput from "./components/DateInput";
import MonthViewGrid from "./components/MonthViewGrid";
import CalendarHeader from "./components/CalendarHeader";
import YearSelectionGrid from "./components/YearSelectionGrid";

function Calendar({ label, disabled = false, setValue }) {
  const calendarRef = useRef(null);

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [displayDate, setDisplayDate] = useState(dayjs());
  const [tempDisplayDate, setTempDisplayDate] = useState(dayjs());
  const [yearSelectionMode, setYearSelectionMode] = useState(false);

  const daysInMonth = displayDate.daysInMonth();
  const startDay = displayDate.startOf("month").day();
  const endDay = displayDate.endOf("month").day();

  const previousMonth = displayDate.subtract(1, "month");
  const daysInPrevMonth = previousMonth.daysInMonth();

  const years = Array.from(
    { length: 9 },
    (_, i) => tempDisplayDate.year() - 4 + i,
  );
  const yearRange = `${years[0]} - ${years[years.length - 1]}`;

  const toggleCalendar = () => {
    if (!showCalendar) {
      setDisplayDate(selectedDate);
      setYearSelectionMode(false);
    }
    setShowCalendar(!showCalendar);
  };

  const handleDateSelect = (day) => {
    const newSelectedDate = displayDate.date(day);
    setSelectedDate(newSelectedDate);
    setShowCalendar(false);

    const newSelectedDateFormatted = `${newSelectedDate.$y}-${newSelectedDate.$M < 9 ? `0${newSelectedDate.$M + 1}` : newSelectedDate.$M + 1}-${newSelectedDate.$D < 10 ? `0${newSelectedDate.$D}` : newSelectedDate.$D}`;
    setValue("createdAt", newSelectedDateFormatted);
  };

  const prevMonthOrYear = () => {
    if (yearSelectionMode) {
      setTempDisplayDate(tempDisplayDate.subtract(9, "year"));
    } else {
      setDisplayDate(displayDate.subtract(1, "month"));
    }
  };

  const nextMonthOrYear = () => {
    if (yearSelectionMode) {
      setTempDisplayDate(tempDisplayDate.add(9, "year"));
    } else {
      setDisplayDate(displayDate.add(1, "month"));
    }
  };

  const handleYearClick = () => {
    if (yearSelectionMode) {
      setTempDisplayDate(displayDate);
    } else {
      setTempDisplayDate(displayDate);
    }
    setYearSelectionMode(!yearSelectionMode);
  };

  const handleYearSelect = (year) => {
    setSelectedDate(selectedDate.year(year));
    setDisplayDate(displayDate.year(year));
    setYearSelectionMode(false);
  };

  const daysFromNextMonth = 6 - endDay;

  const handlePreviousMonthDayClick = (day) => {
    const newDisplayDate = displayDate.subtract(1, "month").date(day);
    setDisplayDate(newDisplayDate);
    setSelectedDate(newDisplayDate);
  };

  const handleNextMonthDayClick = (day) => {
    const newDisplayDate = displayDate.add(1, "month").date(day);
    setDisplayDate(newDisplayDate);
    setSelectedDate(newDisplayDate);
  };

  useEffect(() => {
    document.addEventListener("mousedown", (event) =>
      handleClickOutside(event, calendarRef, setShowCalendar),
    );
    return () => {
      document.removeEventListener("mousedown", (event) =>
        handleClickOutside(event, calendarRef, setShowCalendar),
      );
    };
  }, []);

  return (
    <div
      ref={calendarRef}
      className={`relative text-small-heading-alt text-black-blue dark:text-pale-blue ${disabled ? "pointer-events-none opacity-50" : ""}`}
    >
      <DateInput
        toggleCalendar={toggleCalendar}
        showCalendar={showCalendar}
        selectedDate={selectedDate}
        label={label}
      />

      {showCalendar && (
        <div className="shadow-dropdown absolute top-[calc(100%+1.5rem)] z-50 w-full rounded-lg bg-white px-5 pb-[1.875rem] pt-[1.625rem] dark:bg-dark-navy">
          <CalendarHeader
            prevMonthOrYear={prevMonthOrYear}
            nextMonthOrYear={nextMonthOrYear}
            handleYearClick={handleYearClick}
            yearSelectionMode={yearSelectionMode}
            yearRange={yearRange}
            displayDate={displayDate}
          />

          {yearSelectionMode ? (
            <YearSelectionGrid
              years={years}
              selectedDate={selectedDate}
              handleYearSelect={handleYearSelect}
            />
          ) : (
            <MonthViewGrid
              startDay={startDay}
              daysInPrevMonth={daysInPrevMonth}
              daysInMonth={daysInMonth}
              daysFromNextMonth={daysFromNextMonth}
              handlePreviousMonthDayClick={handlePreviousMonthDayClick}
              handleDateSelect={handleDateSelect}
              handleNextMonthDayClick={handleNextMonthDayClick}
              selectedDate={selectedDate}
              displayDate={displayDate}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Calendar;
