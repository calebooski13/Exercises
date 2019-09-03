// In your JavaScript file, define an object that will represent a journal entry in your code.

/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
// const journalEntry = {
//     date: "08/12/2019",
//     conceptsCovered: "Variables and Objects",
//     entry:"We learned about objects and other data types today.A lot to take in",
//     mood:"confused",
// }

// const journalEntry1 = {
//     date: "08/16/2019",
//     conceptsCovered: "Basic DOM Components",
//     entry:"I am slowly starting to catch on, I don't want to fall behind",
//     mood:"In-between",
// }

// const journalEntry2 = {
//     date: "8/20/2019",
//     conceptsCovered: "Event Delegation",
//     entry:"Understanding more each day but need to do more research outside of class",
//     mood:"in-between",
// }

// const journalEntryContainer = []

// journalEntryContainer.push(journalEntry)
// journalEntryContainer.push(journalEntry1)
// journalEntryContainer.push(journalEntry2)

// _____________________________API section________________________________

// fetch("http://localhost:3000/entries") // Fetch from the API
//     .then(entries => entries.json())  // Parse as JSON
//     .then(entries => {
//         // What should happen when we finally have the array?
//         // entries.forEach(singleEntry => 
//             // document.querySelector(".entry-log").innerHTML+=makeJournalEntryComponent(singleEntry))
//             renderJournalEntries(entries)
//     })

// _____________________ Journal Entry _________________________

// Create your own HTML structure for a journal entry
// const makeJournalEntryComponent = (journalEntry) => {
//     return `<h1>Entry</h1?>
//     <section>
//     <div>${journalEntry.date}</div>
//     <div>${journalEntry.conceptsCovered}</div>
//     <div>${journalEntry.entry}</div>
//     <div>${journalEntry.mood}</div>
//     </section>
//     `
// }

// _________________ DOM Component __________________

// const entryLog = document.querySelector(".entry-log")

// const renderJournalEntries = arrayOfAllEntries => {
//     let journalEntryContainer = "";
//     for (let i = 0; i < arrayOfAllEntries.length; i++) {
//         journalEntryContainer += makeJournalEntryComponent(arrayOfAllEntries[i]);
//     }
//     entryLog.innerHTML = journalEntryContainer;
//   };

// Invoke the render function
// renderJournalEntries(journalEntryContainer);
// 1. Get the values of the inputs

// add event listener on submit button

// _________________ DOM Component __________________

// const submitButton = document.querySelector("#submit-btn");
// console.log(submitButton);

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

  // 3. Push the object into my journalEntries array

// journalEntryContainer.push(newJournalEntryObject)

// console.log(journalEntries)

// // 4. Call the function that prints the entire array to the DOM
// // renderJournalEntries(journalEntries);
// });
import APIManager from "./apiManager.js"

APIManager.getJournalEntries()