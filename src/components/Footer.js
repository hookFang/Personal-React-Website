export default function Footer() {
  return (
    <footer
      className="text-center d-flex flex-row justify-content-center align-items-center align-content-center"
      style={{
        fontFamily: "Roboto Mono",
        color: "var(--gray)",
        bottom: 0,
        width: "100%",
      }}
    >
      <i className="fa fa-copyright" />
      <span>2019-2021 Edwin Christie.</span>
    </footer>
  );
}
