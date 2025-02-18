export const addHoursToDate = (n : number) => {
    const d = new Date();
    const timezone: number = d.getTimezoneOffset();
    d.setTime(d.getTime() + n * 3600000 + timezone * 60000);
    return d;
  };