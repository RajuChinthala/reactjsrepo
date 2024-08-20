Components

Model types data
    State
    Props
State vs Props
Hook
    Hooks are special functions that let you “hook into” React
    Ex:
      const [filterText, setFilterText] = useState('');
      const [inStockOnly, setInStockOnly] = useState(false);
State
    A component’s memory.
    The minimal set of changing data that your app needs to remember
    DRY (Don’t Repeat Yourself)
    Changes over time 
    Can’t be computed from anything
    Keep track of some information and change it in response to interactions
    Ex: For example, a Button might keep track of isHovered state.
Props 
    Arguments you pass to a function. 
    They let a parent component pass data to a child component and customize its appearance. For example, a Form can pass a color prop to a Button.


Commands:
    npx create-react-app basic-react-app
    npm start
    npm run build
    npm install -g serve
    serve -s build

To includ the type scripts
    npm install @types/react @types/react-dom
