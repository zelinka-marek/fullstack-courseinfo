function Header(props) {
  const { course } = props;

  return <h1>{course}</h1>;
}

function ExerciseItem(props) {
  const { part } = props;

  return (
    <p>
      {part.name} <strong>{part.exercies}</strong>
    </p>
  );
}

function ExerciseList(props) {
  const { parts } = props;

  return (
    <div>
      <ExerciseItem part={parts[0]} />
      <ExerciseItem part={parts[1]} />
      <ExerciseItem part={parts[2]} />
    </div>
  );
}

function Total(props) {
  const { parts } = props;
  const totalExercises =
    parts[0].exercies + parts[1].exercies + parts[2].exercies;

  return (
    <p>
      Number of exercies <strong>{totalExercises}</strong>
    </p>
  );
}

export function App() {
  const course = "Half Stack app development";

  const parts = [
    { name: "Fundamentals of React", exercies: 10 },
    { name: "Using props to pass data", exercies: 7 },
    { name: "State of a component", exercies: 14 },
  ];

  return (
    <>
      <Header course={course} />
      <ExerciseList parts={parts} />
      <Total parts={parts} />
    </>
  );
}
