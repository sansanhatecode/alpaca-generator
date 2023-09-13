import React from "react";


const featureButton = (props, featureButtonOnClickHandler) => {
	return ( props.map(()=>
		<button
			className={`bg-white px-5 py-2 m-1 text-blue-300 font-medium rounded-3xl border-2 border-blue-300 hover:text-blue-400 hover:border-blue-400 hover:shadow-md relative ${props.id === feature ? "bg-blue-800 text-white hover:text-white hover:border-blue-800" : ""}`}
			key={props.id}
			onClick={() => featureButtonOnClickHandler(props)}
		>
			{props.label}
		</button>
	)
		
	);
};

export default featureButton;