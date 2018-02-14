//state argument is not a application state only a state responsible for this reducer

export default function(state=null, action){
	switch(action.type){
		case 'BOOK_SELECTED':
			return action.payload
	}

	return state;
}