import React from 'react';
import Card from '../../components/UI/Card/Card';
import CardBody from '../../components/UI/Card/CardBody';
import CardHeader from '../../components/UI/Card/CardHeader';
import Navbar from '../../Layout/NavBar/Navbar'

const Home = () => {

    return (
        <>
            <Navbar />
            <div className='container col-5'>
                <Card>
                    <CardHeader>
                        <h5 className='font-weight-bold'>User details</h5>
                    </CardHeader>
                    <CardBody>
                        <h5 class="card-title">{'Full name'}</h5>
                    </CardBody>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </Card>
            </div>
        </>
    );
};

export default Home;