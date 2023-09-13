export const canAddEvent = (selectedList, newObj) => {
  const newStartTime = new Date(newObj.start_time).getTime();
  const newEndTime = new Date(newObj.end_time).getTime();

  const overlapArray = selectedList.map((event) => {
    const eventStartTime = new Date(event.start_time).getTime();
    const eventEndTime = new Date(event.end_time).getTime();

    return (
      (newStartTime >= eventStartTime && newStartTime < eventEndTime) ||
      (newEndTime > eventStartTime && newEndTime <= eventEndTime)
    );
  });

  return !overlapArray.includes(true);
};

export const getFormattedTime = (timeString) => {
  const dateTimeString = timeString;
  const parts = dateTimeString.split(' ');
  const time = parts[1];

  const [hours, minutes] = time.split(':');

  const hoursNum = parseInt(hours, 10);
  const minutesNum = parseInt(minutes, 10);

  const period = hoursNum >= 12 ? 'PM' : 'AM';

  let formattedHours = hoursNum % 12;
  if (formattedHours === 0) {
    formattedHours = 12;
  }

  const formattedTime = `${formattedHours}:${
    minutesNum < 10 ? '0' : ''
  }${minutesNum} ${period}`;

  return formattedTime;
};
