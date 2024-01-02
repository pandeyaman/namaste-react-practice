const heading = React.createElement("h1", { id: 'heading', class: 'heading', xyz: 'abc' }, 'Hello World From React');
const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(heading);