const Countries = ({ name, value, onClick }) => {
  
  return (
    <div>
      {name}
      <button value={value} onClick={onClick} >show</button>
    </div>
  )
}

export default Countries