# Getting Started with Create React App

## Object updates using spread operator(...) and Immer
Treat all state in React as immutable.
When you store objects in state, mutating them will not trigger renders and will change the state in previous render “snapshots”.
Instead of mutating an object, create a new version of it, and trigger a re-render by setting state to it.
You can use the {...obj, something: 'newValue'} object spread syntax to create copies of objects.
Spread syntax is shallow: it only copies one level deep.
To update a nested object, you need to create copies all the way up from the place you’re updating.
To reduce repetitive copying code, use Immer.


## To try Immer:
Run npm install use-immer to add Immer as a dependency
Then replace import { useState } from 'react' with import { useImmer } from 'use-immer'