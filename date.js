// Define and export a function named getDate
exports.getDate = function() { 
  // Create a new Date object representing the current date and time
  let today = new Date();
  
  // Define options to format the date
  let options = {
    weekday: 'long', // Include the full name of the weekday (e.g., Monday)
    day: 'numeric', // Include the day of the month (e.g., 31)
    month: "long" // Include the full name of the month (e.g., December)
  };

  // Return the formatted date string in English (US) locale
  return today.toLocaleDateString("en-US", options);
}
