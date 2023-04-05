import Link from "next/link";
import Image from "next/image";

const Events_Page = ({data}) => {
  return (
      <div className="events_page">
        <h1>Events Page</h1>  
        <div className="card-container">
        {data.map((ev) => {
            return(
                <Link className="card"  key={ev.id} href={`/events/${ev.id}`}>
                  <div className="card-content">
                      <Image className="image" width={400} height={400} alt={ev.title} src={ev.image} />
                      <h2>{ev.title}</h2>
                  </div>

                </Link>
            )
            })}   
        </div>
      </div>
  )
}

export default Events_Page;