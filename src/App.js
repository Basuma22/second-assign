import NavBar from "./componet/NavBar";
import Hero from "./componet/Hero";
import Counter from "./componet/Counter";
import Form from "./componet/Form";
import Footer from "./componet/Footer";
import Image from "./componet/Image";
import Body from "./componet/Body";
function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Counter></Counter>
        <Form />
        <Footer/>
        <Image/>
        <Body/>
      </main>
    </>
  );
}

export default App;
