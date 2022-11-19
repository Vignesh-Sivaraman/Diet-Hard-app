import React, { useState } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 10, 30),
    end: new Date(2022, 10, 30),
  },
  {
    title: "Vacation",
    start: new Date(2022, 11, 31),
    end: new Date(2022, 11, 31),
  },
  {
    title: "Conference",
    start: new Date(2022, 11, 20),
    end: new Date(2022, 11, 23),
  },
];

const selectEvent = (e) => {
  console.log(e);
};

const CALENDAR = () => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        onSelectEvent={selectEvent}
      />
    </div>
  );
};

export default CALENDAR;
