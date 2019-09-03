const makeJournalEntryComponent = (journalEntry) => {
    return `<h1>Entry</h1?>
    <section>
    <div>${journalEntry.date}</div>
    <div>${journalEntry.conceptsCovered}</div>
    <div>${journalEntry.entry}</div>
    <div>${journalEntry.mood}</div>
    </section>
    `
}
export default makeJournalEntryComponent