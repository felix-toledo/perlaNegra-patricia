export function button(container, text){
// create button
let button = document.createElement("button");
button.classList.add("cta");

// create span
let span = document.createElement("span");
span.textContent = text;

// create svg
let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("viewBox", "0 0 13 10");
svg.setAttribute("height", "10px");
svg.setAttribute("width", "15px");

// create path
let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", "M1,5 L11,5");

// create polyline
let polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
polyline.setAttribute("points", "8 1 12 5 8 9");

// append span, path, and polyline to svg
svg.appendChild(path);
svg.appendChild(polyline);

// append span and svg to button
button.appendChild(span);
button.appendChild(svg);
container.appendChild(button);

return button;

}

