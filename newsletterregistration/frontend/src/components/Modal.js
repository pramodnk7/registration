import React, { Component } from 'react';
import {
	Button, Modal, ModalHeader, ModalFooter, Form,
	FormGroup, Input, Label, ModalBody
} from 'reactstrap';


export default class CustomModal extends Component{
	constructor(props){
		super(props);
		this.state = {
			activeItem:this.props.activeItem
		};
	}


	handleChange = e => {
		let {name, value} = e.target;
		if (e.target.type === 'checkbox'){
			value = e.target.checked;
		}
		const activeItem = { ...this.state.activeItem, [name]:value};
		this.setState({activeItem});
	};

	render() {
		const {toggle, onSave} = this.props;
		return (
			<Modal isOpen={true} toggle={toggle}>
				<ModalHeader toggle={toggle}>Todo item </ModalHeader>
				<ModalBody>
					<Form>
						<FormGroup>
							<Label for="name"> Name </Label>
							<Input type="text"
									name="name"
									value={this.state.activeItem.title}
									onChange={this.handleChange}
									placeholder="Enter name" />
						</FormGroup>
						<FormGroup>
							<Label for="email"> Email </Label>
							<Input type="text"
									name="email"
									value={this.state.activeItem.title}
									onChange={this.handleChange}
									placeholder="Enter Email" />
						</FormGroup>
						<FormGroup>
							<Label for="phone"> Phone number </Label>
							<Input type="text"
									name="phone"
									value={this.state.activeItem.title}
									onChange={this.handleChange}
									placeholder="Enter Phone number" />
						</FormGroup>
						<FormGroup check>
							<Label for="completed">
								<Input 	type="checkbox"
									name="completed"
									checked={this.state.activeItem.completed}
									onChange={this.handleChange} />
								complete
							</Label>
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button color="success" onClick={() => onSave(this.state.activeItem)}>
						Save
					</Button>
				</ModalFooter>
			</Modal>
		);
	}
}
