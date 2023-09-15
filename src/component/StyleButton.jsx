import React from "react";

const StylesButton = (props) => {
	const { hair
		, ears
		, eyes
		, mouth
		, neck
		, leg
		, nose
		, accessories
		, background,feature, styles , featureId } = props

	const checkIsActive = () => {
		let isActive = false
		switch (featureId) {
			case 0:
				if(styles == hair)
					isActive = true
				break;
			case 1:
				if(styles == ears)
					isActive = true
				break;
			case 2:
				if(styles == eyes)
					isActive = true
				break;
			case 3:
				if(styles == mouth)
					isActive = true
				break;
			case 4:
				if(styles == neck)
					isActive = true
				break;
			case 5:
				if(styles == leg)
					isActive = true
				break;
			case 6:
				if(styles == nose)
					isActive = true
				break;
			case 7:
				if(styles == accessories)
					isActive = true
				break;
			case 8:
				if(styles == background)
					isActive = true
				break;
		}

		return isActive
	}

	return (props.styles.map((styleItem, id) =>
		<button
			className={`bg-white px-10 py-2 m-1 text-blue-300 font-medium rounded-3xl border-2 
						border-blue-300 hover:text-blue-400 hover:border-blue-400 hover:shadow-md relative 
						${checkIsActive() ?
					"bg-blue-800 text-white border-blue-800 hover:text-white hover:border-blue-800"
					: ""}`}
			key={id}
			onClick={() => props.onClickHandler(props.featureId, id)}
		>
			{styleItem.label}
		</button>
	)
	);
};

export default StylesButton;