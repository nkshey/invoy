import { useNavigate } from "react-router-dom";

import ArrowIcon from "../icons/ArrowIcon";

function GoBackButton({ btnFor, setIsFormOpen }) {
  const navigate = useNavigate();

  return (
    <button
      className="flex items-center gap-4 text-small-heading-alt hover:text-dusty-purple dark:text-white"
      onClick={() => {
        if (btnFor === "form") return setIsFormOpen(false);
        navigate("/");
      }}
    >
      <ArrowIcon direction="left" />
      Go back
    </button>
  );
}

export default GoBackButton;
