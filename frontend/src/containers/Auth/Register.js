import React from 'react';
import { Link } from 'react-router-dom';

import FormGroup from '../../components/Form/FormGroup';
import FormLabel from '../../components/Form/FormLabel';
import TextInput from '../../components/Form/TextInput';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/UI/Card/Card';
import CardBody from '../../components/UI/Card/CardBody';
import CardHeader from '../../components/UI/Card/CardHeader';

const Register = () => {
    return (
        <div className='section-login'>
            <Card className='card-login'>
                <CardHeader>
                    <h5 className='font-weight-bold'>Register</h5>
                </CardHeader>
                <CardBody>
                    <form>
                        <FormGroup>
                            <FormLabel label='Fullname' />
                            <TextInput
                                type='text'
                                name='name'
                            />
                        </FormGroup>
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
                        <Button className='btn-primary btn-success btn-block' title='Login' />
                        <div className='d-flex justify-content-center mt-3'>
                            <span className='mr-1'>
                                Already registered?
                            </span>
                            <Link to={'/'}>
                                Login
                            </Link>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default Register;