import React, { Component, useState, useRef, useEffect } from 'react';

export default function NewSurfSpotPage(props) {
	const [invalidForm, setValidForm] = useState(true);
	const [formData, setFormData] = useState({
		name: '',
		difficulty: '0',
		age: '',
	});

	const formRef = useRef();

	useEffect(() => {
		formRef.current.checkValidity()
			? setValidForm(false)
			: setValidForm(true);
	}, [formData]);

	const handleSubmit = e => {
		e.preventDefault();
		props.handleAddSurfSpot(formData);
	};

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<h1>Add Surf Spot</h1>
			<form autoComplete='off' ref={formRef} onSubmit={handleSubmit}>
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
						name='age'
						value={formData.age}
						onChange={handleChange}
					/>
				</div>
				<button type='submit' className='btn' disabled={invalidForm}>
					Add SurfSpot
				</button>
			</form>
		</>
	);
}
