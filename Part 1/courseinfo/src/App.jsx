const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.title} {props.num}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part title={props.parts[0].title} num={props.parts[0].num} />
      <Part title={props.parts[1].title} num={props.parts[1].num} />
      <Part title={props.parts[2].title} num={props.parts[2].num} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.parts[0].num + props.parts[1].num + props.parts[2].num}
      </p>
    </div>
  )
}

const App = () => {
  const parts = [
    { title: 'Fundamentals of React', num: 10 },
    { title: 'Using props to pass data', num: 7 },
    { title: 'State of a component', num: 14}
  ]
  return (
    <div>
      <Header name='Half Stack application development' />
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

export default App