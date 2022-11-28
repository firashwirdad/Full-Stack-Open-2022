import CountryInfo from './CountryInfo'
import Countries from './Countries'

const List = ({ query, onClick }) => {

  const showList = query.length > 10
    ? "Too many matches, specify another filter"
    : query.length === 1
    ? <CountryInfo query={query} />
    : query.map((c, i) => 
        <Countries key={i} name={c.name.common} value={i} onClick={onClick} />)
  
  return showList
}

export default List