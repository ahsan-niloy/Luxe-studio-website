import { useEffect } from "react";
import Button from "./Button";

export default function MailerLiteForm() {
  useEffect(() => {
    // Load external CSS
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.type = "text/css";
    style.href = "https://assets.mlcdn.com/fonts.css?version=1719836";
    document.head.appendChild(style);

    // Load webforms.min.js
    const webformScript = document.createElement("script");
    webformScript.src =
      "https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127";
    webformScript.type = "text/javascript";
    document.body.appendChild(webformScript);

    // Custom JavaScript for success handler
    window.ml_webform_success_16351600 = function () {
      const form = document.querySelector(".ml-subscribe-form-16351600");
      if (form) {
        form.querySelector(".row-success").style.display = "block";
        form.querySelector(".row-form").style.display = "none";
      }
    };

    return () => {
      // Cleanup: Remove injected scripts and styles
      document.head.removeChild(style);
      document.body.removeChild(webformScript);
    };
  }, []);

  return (
    <div
      id="mlb2-16351600"
      className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-16351600 ml-none"
    >
      <div className="ml-form-align-center w-full md:max-w-[400px] px-[5vw] md:ml-[5vw]">
        <div className="ml-form-embedWrapper embedForm">
          {/* Form Header */}
          <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
            <div className="ml-form-embedContent">
              <p className="mt-[-1.5rem] mb-4">We will reach out to you ASAP</p>
            </div>

            {/* Form */}
            <form
              className="ml-block-form"
              action="https://assets.mailerlite.com/jsonp/1021706/forms/126583598754039497/subscribe"
              method="post"
              target="_blank"
            >
              <div className="ml-form-formContent">
                {/* Name Field */}
                <div className="ml-form-fieldRow">
                  <div className="ml-field-group ml-field-name">
                    <input
                      aria-label="name"
                      type="text"
                      className="form-control p-4 w-full md:min-w-[400px] mb-4 rounded-xl"
                      name="fields[name]"
                      placeholder="Name"
                      autoComplete="given-name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="ml-form-fieldRow">
                  <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                    <input
                      aria-label="email"
                      aria-required="true"
                      type="email"
                      className="form-control p-4 w-full md:min-w-[400px] mb-4 rounded-xl"
                      name="fields[email]"
                      placeholder="Email"
                      autoComplete="email"
                    />
                  </div>
                </div>

                {/* City Field */}
                <div className="ml-form-fieldRow ml-last-item">
                  <div className="ml-field-group ml-field-city ml-validate-required">
                    <input
                      aria-label="city"
                      aria-required="true"
                      type="text"
                      className="form-control p-4 w-full md:min-w-[400px] mb-4 rounded-xl"
                      name="fields[city]"
                      placeholder="City"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <input type="hidden" name="ml-submit" value="1" />
              <div className="ml-form-embedSubmit">
                <button
                  type="submit"
                  className="primary primary-button button-content w-full md:min-w-[400px]"
                >
                  Subscribe
                </button>

                <button
                  disabled="disabled"
                  style={{ display: "none" }}
                  type="button"
                  className="loading"
                >
                  <div className="ml-form-embedSubmitLoad"></div>
                  <span className="sr-only">Loading...</span>
                </button>
              </div>

              <input type="hidden" name="anticsrf" value="true" />
            </form>
          </div>

          {/* Success Message */}
          <div
            className="ml-form-successBody row-success"
            style={{ display: "none" }}
          >
            <div className="ml-form-successContent">
              <h4>Thank you!</h4>
              <p>You have successfully joined our subscriber list.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
