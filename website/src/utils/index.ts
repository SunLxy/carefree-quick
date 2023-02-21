export const throttle = (callBack: Function, time: number = 500) => {
  let timer: NodeJS.Timeout | undefined = undefined;
  clearTimeout(timer);
  timer = setTimeout(() => {
    callBack();
    clearTimeout(timer);
  }, time);
};
