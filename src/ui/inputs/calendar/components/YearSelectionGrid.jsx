function YearSelectionGrid({ years, handleYearSelect, selectedDate }) {
  return (
    <div className="grid grid-cols-3 place-items-center gap-2">
      {years.map((year) => (
        <button
          type="button"
          key={year}
          onClick={() => handleYearSelect(year)}
          className={`cursor-pointer rounded p-2 ${
            year === selectedDate.year()
              ? "text-lavender-indigo"
              : "hover:text-lavender-indigo"
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  );
}

export default YearSelectionGrid;
