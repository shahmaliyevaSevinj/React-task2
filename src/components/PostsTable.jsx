import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Loading from './Loading'
import axios from "axios";

class PostsTable extends Component {
	async componentDidMount() {
		const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");

		this.props.setPosts(posts.data);
	}

	renderResult() {
		if (this.props.posts === null) {
			return < Loading title="Post"/>;
		}

		return (
			<table className="ui inverted blue table">
				<thead>
					<tr>
						<th>Title</th>
						<th>Body</th>
						<th>Operation</th>
					</tr>
				</thead>
				<tbody>
					{this.props.posts.map(post => {
						return (
							<tr key={post.id}>
								<td>{post.title}</td>
								<td>{post.body}</td>
								<td><button className="ui primary button" onClick={(e) => this.deletePost(e, post.id)}> Delete</button></td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}

	deletePost(e, index){
		e.preventDefault();
			this.props.deletePost(index);
	  }

	render() {
		return (
			<div className="ui segment">
				<h3 className="ui header">Posts</h3>
				{this.renderResult()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { posts: state.posts };
};

const mapDispatchToProps = (dispatch) => {
	return {
		setPosts: users => dispatch(actions.setPosts(users)),
		deletePost: index =>dispatch(actions.deletePost(index))
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(PostsTable);
