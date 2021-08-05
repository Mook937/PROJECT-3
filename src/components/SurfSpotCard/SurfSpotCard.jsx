import React from 'react';
import { Link } from 'react-router-dom';

function SurfSpotCard({ SurfSpot }) {
	return (
		<div className='panel panel-default'>
			<div className='panel-heading'>
				<h3 className='panel-title'>{SurfSpot.name}</h3>
			</div>
			<div className='panel-body'>
				<dl>
					<dt>Name</dt>
					<dd>{SurfSpot.difficulty}</dd>
					<dt>Location</dt>
					<dd>{SurfSpot.age}</dd>
				</dl>
			</div>
			<div className='panel-footer'>
				<Link to='/'>RETURN TO LIST</Link>
			</div>
		</div>
	);
}

export default SurfSpotCard;
