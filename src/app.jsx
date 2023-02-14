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
  const { part1, part2, part3 } = props;

  return (
    <div>
      <ExerciseItem part={part1} />
      <ExerciseItem part={part2} />
      <ExerciseItem part={part3} />
    </div>
  );
}

function Total(props) {
  const { part1, part2, part3 } = props;
  const totalExercises = part1.exercies + part2.exercies + part3.exercies;

  return (
    <p>
      Number of exercies <strong>{totalExercises}</strong>
    </p>
  );
}

export function App() {
  const course = "Half Stack app development";

  const part1 = { name: "Fundamentals of React", exercies: 10 };
  const part2 = { name: "Using props to pass data", exercies: 7 };
  const part3 = { name: "State of a component", exercies: 14 };

  return (
    <>
      <Header course={course} />
      <ExerciseList part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </>
  );
}
