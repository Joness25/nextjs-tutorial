import Events_Page from "@/src/events/Events_Page";
import Image from "next/image";
import Link from "next/link";

const EventsPage = ({data}) => {

    return(
        <Events_Page data={data}/>
    )
}

export default EventsPage;

export async function getStaticProps() {

    const { events_categories } = await import("/data/data.json");
  
    return {
        props : {
            data : events_categories,
        },
    };
  }