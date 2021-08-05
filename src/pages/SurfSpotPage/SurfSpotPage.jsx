import SurfSpotListItem from "../../components/SurfSpotListItem/SurfSpotListItem";
export default function SurfSpotPage(props) {
	return (
		<>
			<h1>Surf Spot List</h1>
			<div className='SurfSpotListPage-grid'>
				{props.surfspots.map(SurfSpot => (
					<SurfSpotListItem
						SurfSpot={SurfSpot}
						key={SurfSpot._id}
						handleDeleteSurfSpot={props.handleDeleteSurfSpot}
					/>
				))}
			</div>
		</>
	);
}



