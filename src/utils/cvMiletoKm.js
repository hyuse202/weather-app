

export function cvMiletoKm(miles){
    const km = miles * 1.60934
    return Math.floor(km); // Removes decimal part and keeps integer part
  }