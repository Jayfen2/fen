import './styles/test.css'
import './styles/test.less'

import img from './images/3.jpeg'
import img1 from 'dist/5.[hash:8].png';

const instimg = (img) => {
    const imgs = document.createElement('img')
    imgs.src = img
    document.body.appendChild(imgs)
}
instimg(img)
instimg(img1)

// es6
const demo = () => {
    console.log(2131);
}
demo()


