import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

const planetsInHTML = planets.map((planetsInHTML, i) => {
	return (
		<li className="list-group-item" key={i}>
			{planetsInHTML}
		</li>
	);
});

const content = (
	<ul className="list-group m-5">
		{planetsInHTML}
	</ul>
);

ReactDOM.render(content, document.querySelector("#myDiv"));
