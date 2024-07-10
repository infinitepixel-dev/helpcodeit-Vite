function EventAlert({event}) {
  return (
      <div className="bg-red-600 text-center font-semibold text-white py-2">
          <a href={event.link}>
              <span className="text-2xl">{event.title}</span> <br />{event.date} at {event.time}.{' '}
              <br /> Registration is open now - Click to register!
          </a>
      </div>
  )
}
export default EventAlert;
