import { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FormControlLabel, Paper, Stack, styled, Switch } from "@mui/material";
import "../styles/calendar.css";

// الفانكشن دي بتعرض البيانات الي جواها علي الكلاندر نفسه
function renderEventContent(eventInfo) {
  return (
    <>
      {/* 
        - timeText بتعبر عن  وقت التاسك بالساعه ع حسب الساعه الي اختارتها
        - event.title عنوان المهمه الي ضفتها في يوم او ساعه معينه
      */}
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

// الفانكشن دي بتعرض البيانات الي جواها علي السيد بار نفسه
function SidebarEvent({ event }) {
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

let eventGuid = 0;

export default function Calendar() {
  // عشان لو حبيت اضهر الايام بتاعت الاجازه خلال شهر معين ولا لا
  const [weekendsVisible, setWeekendsVisible] = useState(true);

  // عشان تحدد اخر تاسك انا واقف عليها
  const [currentEvents, setCurrentEvents] = useState([]);

  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible);
  }

  // عشان تعمل اي ديه لكل تاسك مختلف
  function createEventId() {
    return String(eventGuid++);
  }

  // في حاله اختيار يوم معين بيظهر ليا بوب احط فيها اسم التاسك وي وقته ومعظم بياناته
  function handleDateSelect(selectInfo) {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  // هنا في حاله اني ضفت تاسك معين ودوست عليه تاني هيمسحه
  function handleEventClick(clickInfo) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  function handleEvents(events) {
    setCurrentEvents(events);
  }

  return (
    <Stack className="calendar" direction={"row"}>
      <Sidebar
        weekendsVisible={weekendsVisible}
        handleWeekendsToggle={handleWeekendsToggle}
        currentEvents={currentEvents}
      />

      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        />
      </div>
    </Stack>
  );
}

// عشان نعمل اسوتش جديده باستخدام مكتبه ماتريال يو اي
const CalendarSwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&::before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&::after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

function Sidebar({ weekendsVisible, handleWeekendsToggle, currentEvents }) {
  return (
    <Paper className="demo-app-sidebar" variant="elevation">
      <div className="demo-app-sidebar-section">
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          All Events ({currentEvents.length})
        </h2>

        <FormControlLabel
          control={
            <CalendarSwitch
              checked={weekendsVisible}
              onChange={handleWeekendsToggle}
            />
          }
          label="Weekends"
        />

        <ul>
          {currentEvents.map((event) => (
            <SidebarEvent key={event.id} event={event} />
          ))}
        </ul>
      </div>
    </Paper>
  );
}
