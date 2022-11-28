import Person from './Person'

const Persons = ({ query, persons, onClick }) => {
  const showAll = query === ('')
    ? persons
    : persons.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()))

  return showAll.map(p =>
    <Person key={p.id} person={p} removePerson={() => onClick(p.id)} />)
}

export default Persons