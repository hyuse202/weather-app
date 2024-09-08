

export function cvFtoC(tempInF){
  const tempInCelsius = (tempInF - 32) * 5 / 9;
  return Math.floor(tempInCelsius); // Removes decimal part and keeps integer part
}