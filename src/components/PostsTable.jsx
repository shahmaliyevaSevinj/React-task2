import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Loading from './Loading'

class PostsTable extends Component {
	componentDidMount() {
		this.props.setPosts();
	}

	renderResult() {
		if (this.props.postLoading || !this.props.posts) {
			return < Loading title="Post" />;
		} else {
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
	}

	deletePost(e, index) {
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

const mapStateToProps = (state) => {
	return {
		posts: state.posts,
		loading: state.postLoading
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setPosts: () => dispatch(actions.setPosts()),
		deletePost: index => dispatch(actions.deletePost(index))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsTable);
