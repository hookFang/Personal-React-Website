import "./App.css";
import Header from "./components/Header";
import IndexContent from "./components/IndexContent";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Header />
      <IndexContent />
      <Footer />
    </>
  );
};

const ContactMePage = () => {
  return (
    <>
      <Header />
      <ContactMe />
      <Footer />
    </>
  );
};

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <Projects />
      <Footer />
    </>
  );
};
export { App, ContactMePage, ProjectsPage };
