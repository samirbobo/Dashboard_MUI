import { formatDate } from "@fullcalendar/core/index.js";

export default function CalendarSidebarEvent({ event }) {
  return (
    <li key={event.id}>
      <b>
        {/* بتشوف التاسك اتسجلت بتاريخ كام وضيفه */}
        {formatDate(event.start, {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        })}
      </b>
      {/* اسم التاسك */}
      <i>{event.title}</i>
    </li>
  );
}
