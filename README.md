# primebit
what is primebit you may ask? well **primebit** is a logging npm package that give the users ability, to log anything in a fancy way!

There's also 2 types of logging types you can use:

```
error
success

```

using these, will change the logging type to the one you prefer above.

# Installation

to install primebit You can do the following:

```

npm install primebit.js

```

# Implentation

After you've installed primebit, you can add your text, and implement the logging types like this:

```js

const prime = require("primebit.js")

prime.log("a regular message (default log)")
prime.log("a error message", "error")
prime.log("a success message", "success")

```

After you've customized your prefered logs, your good to go!