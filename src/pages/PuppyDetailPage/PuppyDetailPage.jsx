import React from "react";
import { useLocation } from "react-router-dom";
import PuppyCard from '../../components/PuppyCard/PuppyCard';

function PuppyDetailPage(props) {
  // Refer to PuppyListItem to see how puppy is being passed via the <Link>
  // using the useLocation hook from react-router dom, to grab the
  // state, desctructering the puppy variable attached to state
  const {
    state: { puppy },
  } = useLocation();

  return (
    <>
      <h1>Puppy Details</h1>
      <PuppyCard puppy={puppy} key={puppy._id} />
    </>
  );
}

export default PuppyDetailPage;
