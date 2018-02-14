import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'react-redux';

class BookList extends Component{
	renderList(){
		return this.props.books.map((book) => {
			return(
					<li 
						key={book.title} 
						onClick = {() => this.props.selectBook(book)}
						className="list-group-item">
						{book.title}
					</li>
				);
		});
	}

	render(){
		return(
				<ul className="list-group col-sm-4">
					{this.renderList()}
				</ul>
			)
	}
}

function mapStateToProps(state){
	/* whatever will return will show as props inside of book-list*/
	return{
		books : state.books
	};
}

function mapDispatchToProps(dispatch){
	/* whatever will return will end up as props on the booklist container*/
	return bindActionCreators({selectBook : selectBook}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);