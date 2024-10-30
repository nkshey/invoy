function ArrowIcon({ hasInteracted, isOpen, direction, moveOnHover = "" }) {
  const styles = {
    down: "rotate-0",
    left: "rotate-90",
    right: "-rotate-90",
    up: "rotate-180",
  };

  return (
    <svg
      width="11"
      height="7"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles[direction]} ${hasInteracted ? (isOpen ? "animate-rotateUp" : "animate-rotateDown") : ""} ${moveOnHover}`}
    >
      <path
        d="M1 1l4.228 4.228L9.456 1"
        stroke="#7C5DFA"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default ArrowIcon;
