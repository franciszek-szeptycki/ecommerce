const dataElements = [];
import axios from "axios";
const getDataElements =  () => {
  //axios.get('/api/categories/').then(res => {console.log(res)})
};

getDataElements();

const slidesObjects = [
  {
    src: dataElements[0],
    alt: "First image slider",
    btnTitle: 'check',
    slideTitle: ''
  },
  {
    src: dataElements[1],
    alt: "Second image slider",
    btnTitle: 'buy',
    slideTitle: ''
  },
  {
    src: dataElements[2],
    alt: "Third image slider",
    btnTitle: 'news',
    slideTitle: ''
  },
];

export { slidesObjects };
