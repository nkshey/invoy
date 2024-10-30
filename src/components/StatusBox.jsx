function StatusBox({ status }) {
  return (
    <div
      className={`flex h-10 w-[6.5rem] items-center justify-center gap-2 rounded-md text-center text-small-heading-alt ${
        status === "paid"
          ? "bg-[#33D69F]/[0.057] text-[#33D69F]"
          : status === "pending"
            ? "bg-[#FF8F00]/[0.057] text-[#FF8F00]"
            : "bg-[#373B53]/[0.057] text-[#373B53] dark:bg-pale-blue/[0.057] dark:text-pale-blue"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          status === "paid"
            ? "bg-[#33D69F]"
            : status === "pending"
              ? "bg-[#FF8F00]"
              : "bg-[#373B53] dark:bg-pale-blue"
        }`}
      ></span>

      <p>{status.at(0).toUpperCase() + status.slice(1)}</p>
    </div>
  );
}

export default StatusBox;
