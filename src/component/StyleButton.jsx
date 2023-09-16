import React from "react";

const StylesButton = (props) => {
	const {
		hair,
		ears,
		eyes,
		mouth,
		neck,
		leg,
		nose,
		accessories,
		background,
		styles,
		featureId,
	} = props;

	const checkIsActive = (id) => {
		let isActive = false;
		switch (featureId) {
			case 0:
				if (id === hair) isActive = true;
				break;
			case 1:
				if (id === ears) isActive = true;
				break;
			case 2:
				if (id === eyes) isActive = true;
				break;
			case 3:
				if (id === mouth) isActive = true;
				break;
			case 4:
				if (id === neck) isActive = true;
				break;
			case 5:
				if (id === leg) isActive = true;
				break;
			case 6:
				if (id === nose) isActive = true;
				break;
			case 7:
				if (id === accessories) isActive = true;
				break;
			case 8:
				if (id === background) isActive = true;
				break;
			default:
				break;
		}
		return isActive;
	};

	// console.log('checkIsActive', checkIsActive(), props.styles, props.featureId, )

	return props.styles.map((styleItem, id) => (
		<button
			className={`px-10 py-2 m-1 text-blue-300 font-medium rounded-3xl border-2 font-poppin
				border-blue-300 hover:text-blue-400 hover:border-blue-400 hover:shadow-md relative 
				${checkIsActive(styleItem.id)
					? "bg-blue-900 text-white border-blue-900 hover:text-white hover:border-blue-900"
					: "bg-white hover:font-bold"
				}`}
			key={id}
			onClick={() => props.onClickHandler(props.featureId, id)}
		>
			{styleItem.label}
		</button>
	));
};

export default StylesButton;
