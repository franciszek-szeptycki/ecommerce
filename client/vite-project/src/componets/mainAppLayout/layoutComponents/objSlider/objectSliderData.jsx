const dataElements = [];
import axios from "axios";
import Test1 from '../images/test.jpg'
import Test2 from '../images/test2.jpg'
import Test3 from '../images/test3.jpg'




const slidesObjects = [
  {
    src: Test1,
    alt: "Test slider 1",
    btnTitle: 'check',
    slideTitle: 'Discounts'
  },
  {
    src: Test2,
    alt: "Test slider 2 ",
    btnTitle: 'buy',
    slideTitle: 'New products'
  },
  {
    src: Test3,
    alt: "Test slider 3",
    btnTitle: 'News',
    slideTitle: 'Just look'
  },
];

export { slidesObjects };
