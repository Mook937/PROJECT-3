import React from "react";
import { useLocation } from "react-router-dom";
import SurfSpotCard from '../../components/SurfSpotCard/SurfSpotCard';

function SurfSpotDetailPage(props) {
  // Refer to SurfSpotListItem to see how SurfSpot is being passed via the <Link>
  // using the useLocation hook from react-router dom, to grab the
  // state, desctructering the SurfSpot variable attached to state
  const {
    state: { SurfSpot },
  } = useLocation();

  return (
    <>
      <h1>SurfSpot Details</h1>
      <SurfSpotCard SurfSpot={SurfSpot} key={SurfSpot._id} />
    </>
  );
}

export default SurfSpotDetailPage;
