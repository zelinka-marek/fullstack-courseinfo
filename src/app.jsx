function Header(props) {
  const { course } = props;

  return <h1>{course}</h1>;
}

function ExerciseItem(props) {
  const { part, exercies } = props;

  return (
    <p>
      {part} <strong>{exercies}</strong>
    </p>
  );
}

function ExerciseList(props) {
  const { part1, exercies1, part2, exercies2, part3, exercies3 } = props;

  return (
    <div>
      <ExerciseItem part={part1} exercies={exercies1} />
      <ExerciseItem part={part2} exercies={exercies2} />
      <ExerciseItem part={part3} exercies={exercies3} />
    </div>
  );
}

function Total(props) {
  const { exercies1, exercies2, exercies3 } = props;
  const totalExercises = exercies1 + exercies2 + exercies3;

  return (
    <p>
      Number of exercies <strong>{totalExercises}</strong>
    </p>
  );
}

export function App() {
  const course = "Half Stack app development";

  const part1 = "Fundamentals of React";
  const exercies1 = 10;
  const part2 = "Using props to pass data";
  const exercies2 = 7;
  const part3 = "State of a component";
  const exercies3 = 14;

  return (
    <>
      <Header course={course} />
      <ExerciseList
        part1={part1}
        exercies1={exercies1}
        part2={part2}
        exercies2={exercies2}
        part3={part3}
        exercies3={exercies3}
      />
      <Total
        exercies1={exercies1}
        exercies2={exercies2}
        exercies3={exercies3}
      />
    </>
  );
}
