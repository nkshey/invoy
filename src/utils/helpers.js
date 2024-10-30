// Dates
export function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function calculatePaymentDue(createdAt, paymentTerms) {
  const date = new Date(createdAt);
  date.setDate(date.getDate() + paymentTerms);
  return date.toISOString().split("T")[0];
}

// Formatting
export function formatDate(dateString) {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return new Date(dateString)
    .toLocaleDateString("en-GB", options)
    .replace(/ /g, " ");
}

export function formatMoney(moneyString) {
  const amount = parseFloat(moneyString);
  return amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

// Generating
export function generateUniqueId(existingIds) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";

  let uniqueId;
  do {
    const randomLetters = Array.from(
      { length: 2 },
      () => letters[Math.floor(Math.random() * letters.length)],
    ).join("");
    const randomDigits = Array.from(
      { length: 4 },
      () => digits[Math.floor(Math.random() * digits.length)],
    ).join("");
    uniqueId = randomLetters + randomDigits;
  } while (existingIds.has(uniqueId));

  return uniqueId;
}

// Input Restrictions
export function allowOnlyNumbers(e, allowDot = true) {
  const { key, target, ctrlKey } = e;
  const value = target.value;

  if (
    !/[0-9.]/.test(key) &&
    key !== "Tab" &&
    key !== "Backspace" &&
    key !== "Delete" &&
    key !== "ArrowLeft" &&
    key !== "ArrowRight" &&
    !(ctrlKey && (key === "a" || key === "c" || key === "v" || key === "x"))
  ) {
    e.preventDefault();
  }

  if (key === "." && (!allowDot || value.includes("."))) {
    e.preventDefault();
  }
}

export function allowToPasteOnlyNumbers(e, allowDot = true) {
  const paste = (e.clipboardData || window.ClipboardEvent).getData("text");
  const targetValue = e.target.value;

  if (
    !/^\d*\.?\d*$/.test(paste) ||
    (!allowDot && paste.includes(".")) ||
    (allowDot && targetValue.includes(".") && paste.includes("."))
  ) {
    e.preventDefault();
  }
}

export function disallowFirstCharacterToBeBlankSpace(e) {
  if (e.target.value[0] === " ") {
    e.target.value = e.target.value.trimStart();
  }
}

// Handlers
export function handleClickOutside(event, ref, fn) {
  if (ref?.current && !ref?.current.contains(event.target)) {
    fn(false);
  }
}
