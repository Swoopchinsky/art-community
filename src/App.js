import Header from "./commponents/Header";
import Footer from "./commponents/Footer";
import Info from "./commponents/Info";
import Zima from "./commponents/Zima";
import Vavilon from "./commponents/Vavilon";
import Zaliv from "./commponents/Zaliv";
import Lego from "./commponents/Lego";

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Info />
      <Lego />
      <Zima />
      <Vavilon />
      <Zaliv />
      <Footer />

    </div>
  );
}

export default App;
