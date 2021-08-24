import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../core/context/authContext';
import { AuthAction } from '../../core/entities/auth/action';

const Logout = () => {
	const dispatch = useDispatch();
	const auth = useContext(AuthContext);
	const history = useHistory();

	const logoutData = useSelector((state) => state.auth.logout);

	useEffect(() => {
		if (logoutData !== undefined && logoutData.success) {
			auth.logout();
			history.push('/');
		}
	}, [dispatch, logoutData]);

	useEffect(() => {
		dispatch(AuthAction.logout(auth.token));

	}, [])

	return (
		<>
			<p>{'Logging you out. Please wait...'}</p>
		</>
	);
};

export default Logout;
