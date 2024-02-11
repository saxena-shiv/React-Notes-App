import { useEffect } from "react"
import Foreground from "./component/Foreground"
import Header from "./component/Header"

// import React from 'react'

function App() {
<<<<<<< HEAD
	
    const farFutureDate = new Date('2038-01-01T00:00:00Z');
=======
	const farFutureDate = new Date('2038-01-01T00:00:00Z');
>>>>>>> eecf2bb66a769665376673b2b2d2f9953f7832e7
	useEffect(() => {
		const cookie = () => {
			window.onload = () => {
				if (document.cookie === '')
				{
					document.cookie = `i = 0; expires = ${farFutureDate.toUTCString()}; priority = high`;
				}
			}
			
		}
		cookie();
	}, [])
<<<<<<< HEAD
	
=======
>>>>>>> eecf2bb66a769665376673b2b2d2f9953f7832e7
	return (
		<>
			<div className="relative text-white bg-zinc-800 w-full h-screen">
				<Header />
				<Foreground/>
			</div>
		</>
	)
}

export default App 
