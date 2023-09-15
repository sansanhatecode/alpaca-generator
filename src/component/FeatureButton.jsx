import React from "react";

const FeatureButton = (props) => {
	return ( props.data.map((item,id)=>
		<button
			className = {`px-5 py-2 m-1 text-blue-300 font-medium rounded-3xl border-2 
						border-blue-300 hover:text-blue-400 hover:border-blue-400 hover:shadow-md relative
						${id === props.feature ? 
							"bg-blue-900 text-white border-blue-900 hover:text-white hover:border-blue-900" 
							: "bg-white hover:font-bold"}`}
			key = {id}
			onClick = {() => props.onClickHandler(id)}
		>
			{item.label}
		</button>
	)
	);
};

export default FeatureButton;