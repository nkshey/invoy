function InvoiceClientAddress({ street, city, postCode, country }) {
  return (
    <div className="text-body">
      <p>
        {street || <span className="text-lavender-indigo">Street Address</span>}
      </p>
      <p>{city || <span className="text-lavender-indigo">City</span>}</p>
      <p>
        {postCode || <span className="text-lavender-indigo">Post Code</span>}
      </p>
      <p>{country || <span className="text-lavender-indigo">Country</span>}</p>
    </div>
  );
}

export default InvoiceClientAddress;
