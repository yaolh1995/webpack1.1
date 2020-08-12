import x from './x.js'
console.log('Hi')
console.log(x)
import png from './1.png'
const demo=document.getElementById('demo')
demo.innerHTML=`<img src="${png}">`

const button =document.createElement('button')
button.innerText='懒加载'
button.onclick=()=>{
    const promise=import('./lazy')//点击加载js，promise返回结果
    promise.then((module)=>{
         module.default()
    },()=>{console.log('懒加载错误')})
}

demo.appendChild(button);