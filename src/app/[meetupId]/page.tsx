export default function MeetupPage({ params }: any) {
    const { meetupId } = params;
  
    return (
      <div>
        <h1>Meetup Details</h1>
        <p>Meetup ID: {meetupId}</p>
      </div>
    );
  }