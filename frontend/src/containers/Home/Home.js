import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/UI/Card/Card';
import CardBody from '../../components/UI/Card/CardBody';
import CardHeader from '../../components/UI/Card/CardHeader';
import Navbar from '../../Layout/NavBar/Navbar';

import { AuthContext } from '../../core/context/authContext';
import { UserAction } from '../../core/entities/user/action';

const Home = () => {
    const dispatch = useDispatch();
    const auth = useContext(AuthContext)

    const user = useSelector(state => state.user.user.data)

    useEffect(() => {
        dispatch(UserAction.details(auth.token))
    }, [])

    return (
        <>
            <Navbar />
            <div className='container col-6'>
                <Card>
                    <CardHeader>
                        <h5 className='font-weight-bold'>User details</h5>
                    </CardHeader>
                    <CardBody>
                        <h5 class="card-title">{user.name}</h5>
                    </CardBody>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <table class="table" style={{ tableLayout: 'fixed', width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Activity</th>
                                        <th scope="col">Token</th>
                                        <th scope="col">Token Deleted</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user !== undefined && user.history !== undefined && user.history.map(h => (
                                        <tr>
                                            <th scope="row">{h.tokenDeleted === true ? h.loggedOutAt : h.loggedInAt}</th>
                                            <td>{h.tokenDeleted === true ? 'Logged Out' : 'Logged In'}</td>
                                            <td style={{ wordWrap: 'break-word' }}>{h.token}</td>
                                            <td>{h.tokenDeleted === true ? 'Yes' : 'No'}</td>
                                        </tr>

                                    ))}

                                </tbody>
                            </table>
                        </li>
                    </ul>
                </Card>
            </div>
        </>
    );
};

export default Home;