import React from 'react';

import FormGroup from '../../components/Form/FormGroup';
import FormLabel from '../../components/Form/FormLabel';
import TextInput from '../../components/Form/TextInput';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/UI/Card/Card';
import CardBody from '../../components/UI/Card/CardBody';
import CardHeader from '../../components/UI/Card/CardHeader';

import './Login.css';

const Login = () => {
	return (
		<div className='section-login'>
			<Card className='card-login'>
				<CardHeader>
					<h5 className='font-weight-bold'>Log In</h5>
				</CardHeader>
				<CardBody>
					<form>
						<FormGroup>
							<FormLabel label='Email address' />
							<TextInput
								type='email'
								name='email'
							/>
						</FormGroup>
						<FormGroup>
							<FormLabel label='Password' />
							<TextInput
								type='password'
								name='password'
							/>
						</FormGroup>
						<div className='d-flex justify-content-between'>
							<span className='mt-2'>
								Forgot password?
							</span>
							<Button className='btn-primary btn-success px-3' title='Login' />
						</div>
					</form>
				</CardBody>
			</Card>
		</div>
	);
};

export default Login;
