export default function manageCelebs(
	state = {
		celeb: {}, //exists to separate managePatient.state.in_view to just for cc later
		allCelebs: []
	},
	action
) {
	switch (action.type) {
		case 'SELECT_CELEB':
			return {...state,
				celeb: action.payload
			};
		case 'ADD_CELEBS':
			return {...state,
				allCelebs: action.payload
			};

		default:
			return state;
	}
}
