import { About, Brands, Contact, Footer, Header, Hero, News, Stats, Steps, Testimonial, Work } from "./sections";

function App() {
  return (
    <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">
     <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 right-0 left-0" />
     <Header />
      <Hero />
      <Steps />
      <About />
      <Testimonial />
      <Brands />
      <Work />
      <Stats />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
