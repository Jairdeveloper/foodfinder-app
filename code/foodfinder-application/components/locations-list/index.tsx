import LocationsListItem from "../location-list-item";
// import styles from "./index.module.css";
import { LocationType } from "mongoose/locations/schema";
import React, { JSX } from "react";
interface PropsInterface {
    locations: LocationType[];
}
const LocationsList = (props: PropsInterface): JSX.Element => {
    return (
        <ul className="list-none">
            { props.locations.map((location) => {
                return (
                    <LocationsListItem
                        location={location}
                        key={location.location_id}
                    />
                );
            })}
        </ul>
    );
};
export default LocationsList;