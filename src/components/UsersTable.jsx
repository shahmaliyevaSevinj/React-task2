import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Loading from './Loading'
import axios from "axios";

class UsersTable extends Component {
	async componentDidMount() {
		const users = await axios.get("https://jsonplaceholder.typicode.com/users");
		this.props.setUsers(users.data);
	}

	renderResult = () => {
		if (this.props.users === null) {
			return < Loading title="User"/>;
		}

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
	};

	deleteUser(e, index){
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
	return { users: state.users };
};


const mapDispatchToProps = (dispatch) => {
	return {
		setUsers: users => dispatch(actions.setUsers(users)),
		deleteUser: index =>dispatch(actions.deleteUser(index))
	}
};

export default connect(
	mapStateToProps, mapDispatchToProps)(UsersTable);
