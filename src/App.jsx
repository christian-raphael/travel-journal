import Header from './components/Header'
import Entry from  './components/Entry'
import data from './data'

export default function App() {
  const entryElements = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        {...entry}
      />

      //Another ways
    
      // <Entry
      //   key={entry.id}
      //   entry={entry}
      // />
      // Then in component.jsx props should be like props.entry.img

      // OR

      // <Entry
      //   key={entry.id}
      //   img={entry.img}
      //   and goes for each item in object...
      // />
    )
  })

  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  )
}