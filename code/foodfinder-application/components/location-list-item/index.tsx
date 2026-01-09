import Link from "next/link";
// import styles from "./index.module.css";
import { LocationType } from "mongoose/locations/schema";
//import React, { JSX } from "react";

interface PropsInterface {
    location: LocationType;
}

const LocationsListItem = (props: PropsInterface): React.ReactElement => {
    const location = props.location;
    return (
        <>
            {location && (
                <li className="border-b p-4">
                    <Link href={`/location/${location.location_id}`}>
                        <h2>
                            {location.name}
                            <small className="text-gray-600">
                                {location.cuisine} in {location.borough}
                            </small>
                        </h2>
                    </Link>
                </li>
            )}
        </>
    );
};
export default LocationsListItem;