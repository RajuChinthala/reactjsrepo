<h1>React components</h1>
<div>
<p>
<h2> Components <h2><br/>
    React component names must start with a capital letter
<p>
<h2>Model types data</h2>
    State
    Props
<h2>State vs Props</h2>
<h2>Hook</h2><br/>
<p>
    Hooks are special functions that let you “hook into” React
    Hook names always start with use
    Ex:
      const [filterText, setFilterText] = useState('');
      const [inStockOnly, setInStockOnly] = useState(false);
    React applications are built from components
    Components are built from Hooks, whether built-in or custom
    Custom Hooks let you share stateful logic but not state itself. 
    Each call to a Hook is completely independent from every other call to the same Hook.
</p>
<h2>State</h2><br/>
<p>
    A component’s memory.
    The minimal set of changing data that your app needs to remember
    DRY (Don’t Repeat Yourself)
    Changes over time 
    Can’t be computed from anything
    Keep track of some information and change it in response to interactions
    Ex: For example, a Button might keep track of isHovered state.
</p>
<h2>Props</h2><br/>
<p> 
    Arguments you pass to a function. 
    They let a parent component pass data to a child component and customize its appearance. For example, a Form can pass a color prop to a Button.
</p>

<h2>Commands:</h2>
    npx create-react-app basic-react-app
    npm start
    npm run build
    npm install -g serve
    serve -s build

To includ the type scripts
    npm install @types/react @types/react-dom
</p>
<div>