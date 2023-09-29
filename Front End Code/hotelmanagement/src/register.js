import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
// import { isEmail } from 'validator';

class Register extends Component {

    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="firstName">Full Name</Label>
                    <Input id="firstName" value={data.firstName} invalid={errors.firstName ? true : false} refs="fullName" onChange={this.handleChange} />
                    <FormFeedback>{errors.firstName}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input id="email" value={data.email} invalid={errors.email ? true : false} refs="email" onChange={this.handleChange} />
                    <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>



                <FormGroup>
                    <Label for="contact">contact</Label>
                    <Input id="contact" value={data.contact} type="^[0-9]{10}$" refs="contact" invalid={errors.contact ? true : false} onChange={this.handleChange} />
                    <FormFeedback>{errors.contact}</FormFeedback>
                </FormGroup>


                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input id="password" value={data.password} type="password" refs="password" invalid={errors.password ? true : false} onChange={this.handleChange} />
                    <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" value={data.confirmPassword} type="password" refs="confirmPassword" invalid={errors.confirmPassword ? true : false} onChange={this.handleChange} />
                    <FormFeedback>{errors.confirmPassword}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="age">Age</Label>
                    <Input id="age" value={data.age} type="password" refs="confirmPassword" invalid={errors.age ? true : false} onChange={this.handleChange} />
                    <FormFeedback>{errors.age}</FormFeedback>
                    
                </FormGroup>
                <Button type="submit" color="primary">Register</Button>
            </Form>
        );
    }
}

export default Register;