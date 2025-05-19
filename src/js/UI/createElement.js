export function createElement(tagName, options, children = []) {
  const element = document.createElement(tagName);
  for (const key in options) {
    if (Object.prototype.hasOwnProperty.call(options, key)) {
      element.setAttribute(key, options[key]);
    }
  }
  children.forEach((child) => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });
  return element;
}
