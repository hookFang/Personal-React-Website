export default function IndexContent() {
  return (
    <div
      style={{
        marginTop: "10em",
        color: "white",
        fontFamily: "Roboto Mono",
      }}
    >
      <div className="container">
        <div className="row flex-column-reverse flex-sm-column-reverse flex-md-row flex-lg-row flex-xl-row">
          <div className="col-md-6 col-xl-7">
            <p
              className="text-center"
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                lineHeight: "25px",
              }}
            >
              <br />
              <span style={{ fontWeight: "bold", fontSize: "35px" }}>
                Howdy.
              </span>
              &nbsp;
              <br />
              <br />I am Full Stack Developer based in Toronto.
              <br />
              Interested in solving real life problems with the help of
              programming.
              <br />
              Creating a bright future putting in more dedication and effort.
              <br />
              Aiming to automate multiple process with different powerful
              programming languages.
            </p>
          </div>
          <div
            className="col-md-6 col-xl-5 text-center d-flex justify-content-center align-items-center align-content-center"
            style={{ marginBottom: "2em" }}
          >
            <img
              src="assets/img/SHAJU_1861.jpg"
              style={{ borderRadius: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
