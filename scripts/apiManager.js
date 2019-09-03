import renderJournalEntries from "./DOMPrinter.js"

// ______________________ First Entry ________________________

// fetch("http://localhost:3000/entries") // Fetch from the API
//     .then(entries => entries.json())  // Parse as JSON
//     .then(entries => {
//         renderJournalEntries(entries)
//     })

    const APIManager = {
        getJournalEntries () {
            return fetch("http://localhost:8088/entries")
                .then(response => response.json())
                .then(arrayOfJounrnalEntries => renderJournalEntries(arrayOfJounrnalEntries))
        }
    }
    export default APIManager
