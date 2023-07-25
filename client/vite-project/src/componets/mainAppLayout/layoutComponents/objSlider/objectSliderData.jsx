const dataElements = [];
import axios from "axios";
import Test1 from '../images/test.jpg'
import Test2 from '../images/test2.jpg'
import Test3 from '../images/test3.jpg'


const getDataSliders = () => {
  axios.get('/api/slider/').then(res => console.log(res))
}
getDataSliders()

const slidesObjects = [
  {
    src: Test1,
    alt: "Test slider 1",
    btnTitle: 'Take advantage now',
    slideTitle: 'Cool discounts'
  },
  {
    src: Test2,
    alt: "Test slider 2 ",
    btnTitle: 'Perfectly refined',
    slideTitle: 'New products'
  },
  {
    src: Test3,
    alt: "Test slider 3",
    btnTitle: 'Cool new events',
    slideTitle: 'Events'
  },
];

export { slidesObjects };
