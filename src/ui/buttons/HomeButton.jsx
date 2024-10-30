import { Link, useNavigate } from "react-router-dom";

import ArrowIcon from "../icons/ArrowIcon";

function HomeButton() {
  const navigate = useNavigate();

  return (
    <Link
      className="inline-flex items-center gap-4 text-small-heading-alt leading-tight hover:text-lavender-indigo hover:underline hover:underline-offset-2 dark:text-white dark:hover:text-lavender-indigo dark:hover:underline dark:hover:underline-offset-2 lg:text-lg"
      onClick={() => navigate("/")}
    >
      <ArrowIcon direction="left" />
      Home
    </Link>
  );
}

export default HomeButton;
