function solution(dates) {
  let newDates = {};
  let noOfDays = 0;

  for (let key in dates) {
    const value = dates[key];
    const day = new Date(key).toLocaleString("default", { weekday: "short" });

    if (newDates.hasOwnProperty(day)) {
      newDates[day] = newDates[day] + value;
    } else {
      newDates[day] = value;
      noOfDays++;
    }
  }

  if (noOfDays < 7) {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    for (let i = 0; i < days.length; i++) {
      const day = days[i];

      if (!newDates.hasOwnProperty(day)) {
        let consecutiveMissingDays = 0;

        while (!newDates.hasOwnProperty(days.at(i)) && i < 7) {
          i++;
          consecutiveMissingDays++;
        }

        // TODO: Handle more than 2 days missing cases
        switch (consecutiveMissingDays) {
          case 1:
            newDates[day] =
              (newDates[days.at(i)] + newDates[days.at(i - 2)]) / 2;
            break;

          case 2:
            newDates[days.at(i - 1)] =
              (newDates[days.at(i - 3)] + 2 * newDates[days.at(i)]) / 3;
            newDates[days.at(i - 2)] =
              (newDates[days.at(i - 1)] + newDates[days.at(i - 3)]) / 2;

          default:
            break;
        }
      }
    }
  }

  return newDates;
}

module.exports = solution;
