import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Stack } from "@mui/material";
import "../styles/calendar.css";
import CalendarSidebar from "../components/CalendarSidebar";

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
      <CalendarSidebar
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