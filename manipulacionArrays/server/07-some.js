

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newApointment = {
      startDate: new Date(2021,1,1,10),
      endDate: new Date(2021,1,1,11, 30)
  }

  const areIntervalsOverSlapping = require('date-fns/areIntervalsOverlapping');

  const isOverlap = (newDate) => {
      return dates.some(date => {
        areIntervalsOverSlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate}
        );
      });
  }

  console.log('isOverlap');
  console.log(isOverlap(newApointment));