/* eslint-disable react/prop-types */
function Button({ text, action }) {
  return <button onClick={action}>{text}</button>;
}

export default Button;
