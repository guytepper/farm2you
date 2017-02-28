// Prompts the user to give it's current location & commits the value
export const getPosition = new Promise((resolve, reject) => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  navigator.geolocation.getCurrentPosition(pos => {
    resolve(pos);
  }, null, options);
});
