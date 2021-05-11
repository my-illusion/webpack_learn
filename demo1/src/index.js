import helloWorld from "./helloWorld";

const helloWorldStr = helloWorld();

function render() {
  function component() {
    const element = document.createElement("div");
  
    element.innerHTML = helloWorldStr;
  
    return element;
  }
  
  document.body.appendChild(component());
}

render()
console.log(module.hot)
if(module.hot) {
  module.hot.accept(() => {
    console.log(11)
    render()
  })
}