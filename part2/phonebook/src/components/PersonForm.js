const PersonForm = ({ onSubmit, value, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
        <div>name: 
          <input 
            name='name'
            value={value.name}
            onChange={onChange}
          />
        </div>
        <div>number:
          <input
            name='number'
            value={value.number}
            onChange={onChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm