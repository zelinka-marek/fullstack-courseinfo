function Header(props) {
  const { name } = props;

  return <h2>{name}</h2>;
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
      {parts.map((part) => (
        <ExerciseItem key={part.id} part={part} />
      ))}
    </div>
  );
}

function Total(props) {
  const { parts } = props;
  const totalExercises = parts.reduce(
    (total, part) => total + part.exercies,
    0
  );

  return (
    <p>
      Total of <strong>{totalExercises}</strong> exercies
    </p>
  );
}

export function CourseDetails(props) {
  const { course } = props;

  return (
    <div>
      <Header name={course.name} />
      <ExerciseList parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}
