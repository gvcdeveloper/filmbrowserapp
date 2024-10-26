import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import { sliderItemsMock } from './__mocks__/sliderItemsMock';

function App() {
  return (
    <Layout>
      <Header />

      <Carousel
        carouselTitle="Horror Movies"
        items={sliderItemsMock}
        handleOnClick={() => {}}
      />
      <Carousel
        carouselTitle="Horror Movies"
        items={sliderItemsMock}
        handleOnClick={() => {}}
      />
      <Carousel
        carouselTitle="Horror Movies"
        items={sliderItemsMock}
        handleOnClick={() => {}}
      />
    </Layout>
  );
}

export default App;
