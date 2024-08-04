import {
  About,
  Footer,
  Header,
  Skills,
  Projects,
  Contact
} from "../components/index";

function Home() {
  return (
    <div className="text-gray-100 bg-blue-950 font-sans ">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
