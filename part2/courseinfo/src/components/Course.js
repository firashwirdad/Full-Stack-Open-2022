const Header = ({ name }) => <h2>{name}</h2>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Total = ({ total }) => <b>total of {total} exercises</b> 

const Content = ({ parts }) => {
  const sum = 
    parts.reduce((s, p) => s + p.exercises,0)
    
  return (
    <>
      {parts.map(part => 
      <Part key={part.id} part={part} />)}
      <Total total={sum} />
    </>
  ) 
}

const Course = ({ course }) => 
  <>
    <Header name={course.name} />
    <Content parts={course.parts} />
  </>

export default Course