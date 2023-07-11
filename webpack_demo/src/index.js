import './styles/test.css'
import './styles/test.less'

// import img from 'dist/3.[hash:5].jpeg'
import img1 from '/dist/img1.[hash:8].png';

const instimg = (img) => {
    const imgs = document.createElement('img')
    imgs.src = img
    document.body.appendChild(imgs)
}
// instimg(img)
instimg(img1)

// es6
const demo = () => {
    console.log(2131);
}
demo()


