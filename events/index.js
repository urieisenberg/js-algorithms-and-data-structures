// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    // on is a method that takes in an event name and a callback
    if (this.events[eventName]) {
      // if the event name exists in the events object
      this.events[eventName].push(callback); // push the callback into the array
    } else {
      // if the event name does not exist in the events object
      this.events[eventName] = [callback]; // create a new array with the callback
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      // if the event name exists in the events object
      for (let cb of this.events[eventName]) {
        // iterate through the array of callbacks
        cb(); // invoke the callback
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName]; // delete the event name from the events object
  }
}

module.exports = Events;
