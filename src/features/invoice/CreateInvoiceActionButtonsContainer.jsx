import DiscardButton from "../../ui/buttons/DiscardButton";
import SaveAsDraftButton from "../../ui/buttons/SaveAsDraftButton";
import SaveAndSendButton from "../../ui/buttons/SaveAndSendButton";

function CreateInvoiceActionButtonsContainer({
  onDiscard,
  onSaveAsDraft,
  onSaveAndSend,
}) {
  return (
    <div className="shadow-buttons-container absolute -bottom-2 left-0 z-[999] flex w-full items-center justify-between gap-2 bg-white px-6 py-[1.375rem] dark:bg-deep-midnight md:bottom-0 md:max-w-[38.5rem] md:rounded-r-[1.25rem] md:px-14 md:py-8 md:dark:bg-dark-slate lg:max-w-[39.75rem] lg:pl-[4.75rem]">
      <DiscardButton onClick={onDiscard} />
      <div className="flex w-full min-w-[10.25rem] max-w-[14.75rem] gap-2">
        <SaveAsDraftButton onClick={onSaveAsDraft} />
        <SaveAndSendButton onClick={onSaveAndSend} />
      </div>
    </div>
  );
}

export default CreateInvoiceActionButtonsContainer;
