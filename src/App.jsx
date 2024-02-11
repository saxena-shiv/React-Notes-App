import { useEffect } from "react"
import Foreground from "./component/Foreground"
import Header from "./component/Header"

// import React from 'react'

function App() {
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
