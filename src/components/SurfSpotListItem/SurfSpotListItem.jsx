import React from 'react';
import { Link } from 'react-router-dom';
import './SurfSpotListItem.css';

function SurfSpotListItem({ SurfSpot, handleDeleteSurfSpot }) {
	return (
		<div className='panel panel-default'>
			<div className='panel-heading'>
				<h3 className='panel-title'>{SurfSpot.name}</h3>
			</div>
			<div className='panel-footer SurfSpotListItem-action-panel'>
				<Link
					className='btn btn-xs btn-info'
					to={{
						pathname: 'surfspots/details',
						state: { SurfSpot },
					}}
				>
					DETAILS
				</Link>
				<Link
					className='btn btn-xs btn-warning'
					to={{
						pathname: 'surfspots/edit',
						state: { SurfSpot },
					}}
				>
					EDIT
				</Link>
				<button
					className='btn btn-xs btn-danger margin-left-10'
					onClick={() => handleDeleteSurfSpot(SurfSpot._id)}
				>
					DELETE
				</button>
			</div>
		</div>
	);
}

export default SurfSpotListItem;