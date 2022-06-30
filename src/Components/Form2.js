import React, { Component } from 'react';
import { Form, Label, FormGroup, Input, Button } from 'reactstrap'
import alertify from 'alertifyjs';

import './form.css'



export default class Form2 extends Component {

    state = {
        email: '',
        password: '',
        city: '',
        description: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alertify.set('notifier', 'position', 'top-center');
        alertify.notify(this.state.email + '  added to db !', 'success')
        alertify.notify(this.state.password + '  added to db !', 'success')
        alertify.notify(this.state.description + '  added to db !', 'success')
        alertify.notify(this.state.city + '  added to db !', 'success')


        // alertify.alert(this.state.email + 'added to db !');

    }
    render() {
        return (
            <div className='form'>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input type='email' name='email' id='email'
                            placeholder='Please type your email...' onChange={this.handleChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input type='password' name='password' id='password'
                            placeholder='Please type your password...' onChange={this.handleChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for='description'>Description</Label>
                        <Input type='textarea' name='description' id='description'
                            placeholder='Please type your description...' onChange={this.handleChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for='city'>City</Label>
                        <Input type='select' name='city' id='city'
                            placeholder='Please type your city...' onChange={this.handleChange}>
                            <option>Baku</option>
                            <option>Ganja</option>
                            <option>Shaki</option>
                            <option>Ankara</option>
                            <option>Istanbul</option>
                        </Input>
                    </FormGroup>
                    <Button color="success" type='submit' outline>Submit</Button>


                </Form>
            </div>
        )
    }
}
