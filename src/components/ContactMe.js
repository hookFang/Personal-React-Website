export default function ContactMe() {
  return (
    <section
      className="getintouch"
      style={{ marginTop: "5em", fontFamily: "Roboto Mono" }}
    >
      <div className="container modern-form">
        <div className="text-center">
          <h4 style={{ color: "white", fontSize: "45px" }}>Get in touch</h4>
        </div>
        <hr className="modern-form__hr" />
        <div className="modern-form__form-container">
          <form action="/contactUs" method="post">
            <div className="form-row">
              <div className="col col-contact">
                <div className="form-group modern-form__form-group--padding-r">
                  <input
                    className="form-control input input-tr"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                  />
                  <div className="line-box">
                    <div className="line" />
                  </div>
                </div>
              </div>
              <div className="col col-contact">
                <div className="form-group modern-form__form-group--padding-l">
                  <input
                    className="form-control input input-tr"
                    type="text"
                    placeholder="Email"
                    name="email"
                  />
                  <div className="line-box">
                    <div className="line" />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <div className="form-group modern-form__form-group--padding-t">
                  <textarea
                    className="form-control input modern-form__form-control--textarea"
                    placeholder="Message"
                    name="message"
                    defaultValue={""}
                  />
                  <div className="line-box">
                    <div className="line" />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col text-center">
                <button className="btn btn-primary submit-now" type="submit">
                  Submit Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
