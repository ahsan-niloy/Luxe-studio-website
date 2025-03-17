const TermsAndCondition = () => {
  return (
    <div className="container mx-auto p-6 max-w-4xl px-[5vw] md:px-[10vw]">
      <div className="w-full h-[100px]"></div>
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="text-gray-600 mb-6">Last Updated: March 16, 2025</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Booking and Payment</h2>
        <h3 className="text-lg font-medium">1.1 Reservation & Deposits</h3>
        <p>
          A non-refundable deposit of 50% is required to secure your booking.
          The remaining balance is due 3 days before the event date. Bookings
          are confirmed only after payment of the deposit and signing of the
          contract.
        </p>

        <h3 className="text-lg font-medium mt-4">1.2 Cancellation & Refunds</h3>
        <p>
          Cancellations made 15 days before the event are eligible for a partial
          refund (excluding the deposit). Cancellations made within 7 days of
          the event are non-refundable. Rescheduling is subject to availability
          and may incur additional charges.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Services and Deliverables
        </h2>
        <h3 className="text-lg font-medium">2.1 Coverage & Timelines</h3>
        <p>
          Luxe Studios will provide photography and/or videography services as
          per the agreed package. Additional hours can be requested at an extra
          cost.
        </p>

        <h3 className="text-lg font-medium mt-4">2.2 Editing & Delivery</h3>
        <p>
          Edited images and videos will be delivered within 6 weeks after the
          event. Luxe Studios reserves the right to choose the best shots for
          editing and delivery. Raw files are not included unless specifically
          agreed upon.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. Copyright & Usage Rights
        </h2>
        <p>
          Luxe Studios retains full copyright ownership of all images and videos
          taken. Clients are granted personal usage rights for sharing and
          printing. Commercial usage requires prior approval and may be subject
          to additional fees. Luxe Studios reserves the right to use
          images/videos for portfolio, marketing, and promotional purposes
          unless explicitly requested otherwise in writing.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Liability & Force Majeure
        </h2>
        <h3 className="text-lg font-medium">4.1 Limitation of Liability</h3>
        <p>
          In the unlikely event of equipment failure, unforeseen circumstances,
          or illness, Luxe Studios will make every reasonable effort to
          reschedule or provide an alternative photographer. Luxe Studios is not
          liable for circumstances beyond our control, including venue
          restrictions, weather conditions, or interference from guests.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. Privacy & Confidentiality
        </h2>
        <p>
          Luxe Studios values your privacy and will not share your personal
          information with third parties without consent. If you do not wish
          your images to be used for promotional purposes, please notify us in
          writing.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Governing Law</h2>
        <p>
          These terms are governed by the laws of British Columbia, Canada. Any
          disputes shall be resolved through mediation or legal proceedings in
          British Columbia courts.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Contact Information</h2>
        <p>
          If you have any questions regarding these Terms and Conditions, please
          contact us at:
        </p>
        <ul className="list-disc list-inside pl-6">
          <li>Email: luxestudioca@gmail.com</li>
          <li>Phone: +16728330055</li>
          <li>Website: luxestudios.ca</li>
        </ul>
      </section>
    </div>
  );
};

export default TermsAndCondition;
