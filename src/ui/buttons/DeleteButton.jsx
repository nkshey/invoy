import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInvoiceStore } from "../../store/invoiceStore";

import AlertBox from "../../components/AlertBox";

function DeleteButton({ invoiceId }) {
  const navigate = useNavigate();
  const { deleteInvoice } = useInvoiceStore();
  const [isAlertBoxOpen, setIsAlertBoxOpen] = useState(false);

  return (
    <>
      <button
        className="h-12 w-[5.625rem] rounded-full bg-coral-red text-small-heading-alt text-white hover:bg-light-red"
        onClick={() => setIsAlertBoxOpen(true)}
      >
        Delete
      </button>

      {isAlertBoxOpen && (
        <AlertBox
          type="delete"
          onCancel={() => setIsAlertBoxOpen(false)}
          onAccept={() => {
            navigate("/");
            deleteInvoice(invoiceId);
          }}
        />
      )}
    </>
  );
}

export default DeleteButton;
