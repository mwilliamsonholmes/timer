//no number provided = end immediately
//input is a negative number = skip this number
//input is NaN = skip this


let alarmTimeArray = process.argv.slice(2);
const alarmFunc = function (timesArr) {
  if (timesArr.length === 0) {
    return;
  }
  for (const time of timesArr) {
    if (time > 0 && typeof time === "string" && !isNaN(time)) {
      setTimeout(() => {
        console.log(time);
      }, time * 1000);
    }
  }
};
alarmFunc(alarmTimeArray);