import { useState } from "react"

const App = () => {
	const anecdotes = [
		"Wenn es weh tut, mach es öfter.",
		"Die Hinzunahme von Arbeitskräften zu einem spät fertiggestellten Softwareprojekt verzögert es noch weiter!",
		"Die ersten 90 Prozent des Codes machen 10 Prozent der Entwicklungszeit aus... Die verbleibenden 10 Prozent des Codes machen die anderen 90 Prozent der Entwicklungszeit aus.",
		"Jeder Dummkopf kann Code schreiben, den ein Computer verstehen kann. Gute Programmierer schreiben Code, den Menschen verstehen können.",
		"Vorzeitige Optimierung ist die Wurzel allen Übels.",
		"Das Debuggen ist doppelt so schwer wie das Schreiben des Codes. Wenn du den Code also so clever wie möglich schreibst, bist du per Definition nicht schlau genug, um ihn zu debuggen.",
		"Programmieren ohne eine extrem häufige Verwendung von console.log ist das Gleiche, als würde ein Arzt sich weigern, Röntgenaufnahmen oder Bluttests bei der Diagnose von Patienten zu verwenden.",
	]

	let arrayVotes = new Uint8Array(anecdotes.length)

	const [selected, setSelected] = useState(0)
	const [votes, setVotes] = useState(arrayVotes)
	const [mostVotedIndex, setMostVotedIndex] = useState(0)

	const handleNextAnecdote = () => {
		let randomIndex = Math.floor(Math.random() * anecdotes.length)
		setSelected(randomIndex)
	}

	const handleVote = () => {
		const updatedVotes = [...votes]
		updatedVotes[selected] += 1
		setVotes(updatedVotes)

		let maxVotes = 0
		let maxVotesIndex = 0
		for (let i = 0; i < updatedVotes.length; i++) {
			if (updatedVotes[i] > maxVotes) {
				maxVotes = updatedVotes[i]
				maxVotesIndex = i
			}
		}
		setMostVotedIndex(maxVotesIndex)
	}

	return (
		<div>
			<h2>Anekdote des Tages</h2>
			{anecdotes[selected]}
			<div>hat {votes[selected]} Stimmen</div>
			<div>
				<button onClick={handleVote}>Abstimmen</button>
				<button onClick={handleNextAnecdote}>Nächste Anekdote</button>
			</div>
			<h2>Anekdote mit den meisten Stimmen</h2>
			{anecdotes[mostVotedIndex]}
		</div>
	)
}

export default App;