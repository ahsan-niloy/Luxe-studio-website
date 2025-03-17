const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6 max-w-4xl px-[5vw] md:px-[10vw]">
      <div className="w-full h-[100px]"></div>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-600 mb-6">Last Updated: [Insert Date]</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Luxe Studios respects your privacy and is committed to protecting your
          personal data. This Privacy Policy outlines how we collect, use, and
          safeguard your information when you use our website and services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Information We Collect
        </h2>
        <h3 className="text-lg font-medium">2.1 Personal Information</h3>
        <p>
          When you book a service, contact us, or subscribe to our newsletter,
          we may collect the following details:
        </p>
        <ul className="list-disc pl-6">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
        </ul>

        <h3 className="text-lg font-medium mt-4">
          2.2 Non-Personal Information
        </h3>
        <p>
          We may also collect anonymous data such as browser type, device
          information, and usage analytics to improve our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. How We Use Your Information
        </h2>
        <p>We use the collected data to:</p>
        <ul className="list-disc pl-6">
          <li>Process bookings and payments</li>
          <li>Communicate with you regarding your services</li>
          <li>Improve our website and customer experience</li>
          <li>Send marketing promotions (you can opt out anytime)</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Sharing of Information
        </h2>
        <p>
          We do not sell or rent your personal data. However, we may share your
          information with:
        </p>
        <ul className="list-disc pl-6">
          <li>Payment processors to complete transactions</li>
          <li>Service providers assisting in operations</li>
          <li>Legal authorities when required by law</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
        <p>
          We take reasonable measures to protect your data from unauthorized
          access, alteration, or disclosure. However, no method of transmission
          over the internet is 100% secure.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6">
          <li>Access, correct, or delete your personal data</li>
          <li>Withdraw consent for marketing communications</li>
          <li>Request a copy of the data we hold about you</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Cookies & Tracking</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your
          browsing experience. You can adjust your browser settings to disable
          cookies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          8. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the updated date.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Contact Information</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy,
          please contact us at:
        </p>
        <ul className="list-disc pl-6">
          <li>Email: [Your Email]</li>
          <li>Phone: [Your Phone Number]</li>
          <li>Website: [Your Website URL]</li>
        </ul>
      </section>
    </div>
  );
};
export default PrivacyPolicy;
