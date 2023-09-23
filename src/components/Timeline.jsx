import starW from '../assets/images/star-1.png'
import starP from '../assets/images/star-p.png'

const Timeline = () => {

  const data = [
    {
      event: "Hackathon Announcement",
      details: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      date: "November 18, 2023",
    },
    {
      event: "Teams Registration begins",
      details: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
      date: "November 18, 2023",
    },
    {
      event: "Teams Registration ends",
      details: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      date: "November 18, 2023",
    },
    {
      event: "Announcement of the accepted teams and ideas",
      details: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
      date: "November 18, 2023",
    },
    {
      event: "Getlinked Hackathon 1.0 Offically Begins",
      details: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
      date: "November 18, 2023",
    },
    {
      event: "Demo Day",
      details: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
      date: "November 18, 2023",
    },
  ]

  const body = data.map((data, key) => {
    return (
      <div className='timelines' key={key}>
        <div className="bullet">
          <hr />
          <p>{key + 1}</p>
        </div>
        <div className="content">
          <p className="emp">
          {data.event}
          </p>
          <p>{data.details}</p>
          <p className="emp">
          {data.date}
          </p>
        </div>
      </div>
    )
  })
  return (
    <div className="timeline">
      <img src={starP} alt="" className="starP" />
      <img src={starW} alt="" className="starW" />
      <img src={starW} alt="" className="starWs" />
      <section className="timeline1">
        <h2>Timeline</h2>
        <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
      </section>

      <section className="timeline2">
        {body}
      </section>
    </div>
  )
}

export default Timeline