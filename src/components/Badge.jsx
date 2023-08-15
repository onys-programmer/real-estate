import RentalStatusBadge from "./badges/RentalStatusBadge";
import VacantAdvertisingBadge from "./badges/VacantAdvertisingBadge";

export default function Badge({type}) {
  const badges = {
    rentalStatus: <RentalStatusBadge />,
    vacantAdvertising: <VacantAdvertisingBadge />,
  };
  return (
    badges[type]
  );
};
