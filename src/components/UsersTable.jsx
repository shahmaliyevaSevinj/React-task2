import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Loading from './Loading'

class UsersTable extends Component {
	componentDidMount() {
		this.props.setUsers();
	}

	renderResult = () => {
		if (this.props.loading || !this.props.users) {
			return < Loading title="User" />;
		} else {
			return (
				<table className="ui inverted blue table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Username</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Operation</th>
						</tr>
					</thead>
					<tbody>
						{this.props.users.map(user => {
							return (
								<tr key={user.id}>
									<td>{user.name}</td>
									<td>{user.username}</td>
									<td>{user.email}</td>
									<td>{user.phone}</td>
									<td><button className="ui primary button" onClick={(e) => this.deleteUser(e, user.id)}>Delete</button></td>
								</tr>
							);
						})}
					</tbody>
				</table>
			);
		}
	};

	deleteUser(e, index) {
		e.preventDefault();
		this.props.deleteUser(index);
	}

	render() {
		return (
			<div className="ui segment">
				<h3 className="ui header">Users</h3>
				{this.renderResult()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		users: state.users,
		loading : state.userLoading
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUsers: () => dispatch(actions.setUsers()),
		deleteUser: index => dispatch(actions.deleteUser(index))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
