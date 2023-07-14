const dataElements = [];
import axios from "axios";
import Icon from '../images/test.jpg'




const slidesObjects = [
  {
    src: Icon,
    alt: "Test slider 1",
    btnTitle: 'check',
    slideTitle: 'Discounts'
  },
  {
    src: dataElements[1],
    alt: "Test slider 2 ",
    btnTitle: 'buy',
    slideTitle: 'New products'
  },
  {
    src: dataElements[2],
    alt: "Test slider 3",
    btnTitle: 'News',
    slideTitle: 'Just look'
  },
];

export { slidesObjects };
