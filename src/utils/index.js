export const getPostedAtLabel = (dateString) => {
  const dateObj = new Date(dateString);
  
  if (isNaN(dateObj)) {
    return "";
  }
  
  const steps = [{ value: 60 * 60, label: "hours" }, { value: 60, label: "minutes" }, { value: 1, label: "seconds" }];
  const milliseconds = dateObj.getTime();
  const nowMilliseconds = new Date().getTime();
  const diff = Math.floor((nowMilliseconds - milliseconds) / 1000);

  for (let i = 0; i < steps.length; i++) {
    const { value, label } = steps[i];

    const numInterval = Math.floor(diff / value);
    if (numInterval > 0) {
      return `${numInterval} ${label}`;
    }
  }
};
