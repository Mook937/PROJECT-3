import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function EditSurfSpotPage(props) {
	const location = useLocation();

	const [invalidForm, setValidForm] = useState(true);
	const [formData, setFormData] = useState(location.state.SurfSpot);

	const formRef = useRef();

	useEffect(() => {
		formRef.current.checkValidity()
			? setValidForm(false)
			: setValidForm(true);
	}, [formData]);

	const handleSubmit = e => {
		e.preventDefault();
		props.handleUpdateSurfSpot(formData);
	};

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<h1>Edit</h1>
			<form ref={formRef} autoComplete='off' onSubmit={handleSubmit}>
				<div className='form-group'>
					<label>SurfSpot (required)</label>
					<input
						className='form-control'
						name='name'
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label>Difficulty (required)</label>
					<input
						className='form-control'
						name='difficulty'
						value={formData.difficulty}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label>Location</label>
					<input
						className='form-control'
						name='location'
						value={formData.age}
						onChange={handleChange}
					/>
				</div>
				<button
					type='submit'
					className='btn btn-xs'
					disabled={invalidForm}
				>
					SAVE SPOT
				</button>
				&nbsp;&nbsp;
				<Link to='/'>CANCEL</Link>
			</form>
		</>
	);
}
