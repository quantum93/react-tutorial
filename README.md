## JSX Prevents Injection Attacks

It is safe to embed user input in JSX:

const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;

By default, React DOM escapes any values embedded in JSX before rendering them.
Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered.
This helps prevent XSS (cross-site-scripting) attacks.

ex.)this might be a bed practice....

const element = <h1>"something to be title"</h1>;

## meaning of props
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

is equivalent to

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

and React.createElement creates object like this:

const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};

##
