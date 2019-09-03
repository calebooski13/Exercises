import makeJournalEntryComponent from "./singleJournalEntry.js"

const entryLog = document.querySelector(".entry-log")

const renderJournalEntries = arrayOfAllEntries => {
    let journalEntryContainer = "";
    for (let i = 0; i < arrayOfAllEntries.length; i++) {
        journalEntryContainer += makeJournalEntryComponent(arrayOfAllEntries[i]);
    }
    entryLog.innerHTML = journalEntryContainer;
  };


//   _______________________ Button ____________________
//   const submitButton = document.querySelector("#submit-btn");
// console.log(submitButton);

// // __________________ Submit Button __________________

// submitButton.addEventListener("click", function() {
//     // Once they click the button, do the these things:
//     const dateValue = document.querySelector("#journalDate").value;
//     const conceptsValue = document.querySelector("#conceptsCovered").value;
//     const journalEntryValue = document.querySelector("#journalEntry").value;
//     const moodValue = document.querySelector("#moodOfTheDay").value;
// // 2. Turn them into an object
// const newJournalEntryObject = {
//     dateOfEntry: "dateValue",
//     conceptsCovered: "conceptsValue",
//     journalEntry: "journalEntryValue",
//     moodOfEntry: "moodValue"
// };

// journalEntryContainer.push(newJournalEntryObject)

// console.log(journalEntries)

// // 4. Call the function that prints the entire array to the DOM
// // renderJournalEntries(journalEntries);
// });

export default renderJournalEntries