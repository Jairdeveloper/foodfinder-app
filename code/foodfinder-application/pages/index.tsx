import Head from "next/head";
import type { GetStaticProps, InferGetStaticPropsType, NextPage, GetServerSideProps, InferGetServerSidePropsType } from "next";
import LocationsList from "components/locations-list";
import dbConnect from "middleware/db-connect";
import { findAllLocations } from "mongoose/locations/services";
import { LocationType } from "mongoose/locations/schema";
const Home: NextPage = (
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
const locations: LocationType[] = JSON.parse(props.data?.locations);
    console.log("Props data:", props.data);
    let title = `The Food Finder - Home`;
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="The Food Finder - Home" />
            </Head>
            <h1>Welcome to the Food Finder!</h1>
            <LocationsList locations={locations} />
        </div>
    );
};
export const getServerSideProps: GetServerSideProps = async () => {
    let locations: LocationType[] | [];
    try {
        console.log("➡ Connecting to DB...");
        await dbConnect();
        console.log("✅ Connected");
        locations = await findAllLocations();
        console.log("📦 Locations from DB:", locations);
    } catch (err: any) {
        console.error("❌ DB ERROR:", err);
        return { notFound: true };
    }
    return {
        props: {
            data: { locations: JSON.stringify(locations) },
        },
    };
};
export default Home;