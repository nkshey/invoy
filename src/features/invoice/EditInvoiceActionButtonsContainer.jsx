import CancelButton from "../../ui/buttons/CancelButton";
import SaveChangesButton from "../../ui/buttons/SaveChangesButton";

function EditInvoiceActionButtonsContainer({ onDiscard, onSaveChanges }) {
  return (
    <div className="shadow-buttons-container absolute -bottom-2 left-0 right-0 z-[999] flex w-full items-center justify-between gap-2 bg-white px-6 py-[1.375rem] dark:bg-deep-midnight md:bottom-0 md:max-w-[38.5rem] md:rounded-r-[1.25rem] md:px-14 md:py-8 md:dark:bg-dark-slate lg:max-w-[39.75rem] lg:pl-[4.75rem]">
      <CancelButton onClick={onDiscard}>Cancel</CancelButton>
      <SaveChangesButton onClick={onSaveChanges} />
    </div>
  );
}

export default EditInvoiceActionButtonsContainer;
