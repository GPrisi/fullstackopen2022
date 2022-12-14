const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (prop) => {
  return (
    <p>{prop.name} {prop.exercises}</p>
  )
}

const Content = (prop) => {
  let parts = prop.parts
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises}/>
      <Part name={parts[1].name} exercises={parts[1].exercises}/>
      <Part name={parts[2].name} exercises={parts[2].exercises}/>
    </div>
  )
}

const sum = (p1, p2, p3) => {
  return p1 + p2 + p3
}

const Total = prop => {
  let pts = prop.parts
  let result = sum(pts[0].exercises, pts[1].exercises, pts[2].exercises)
  return (
    <p>Number of exercises {result}</p>
  )
}

export const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App