import { Course } from "./components/course";

export function App() {
  const courses = [
    {
      id: 1,
      name: "Half Stack app development",
      parts: [
        { id: 1, name: "Fundamentals of React", exercies: 10 },
        { id: 2, name: "Using props to pass data", exercies: 7 },
        { id: 3, name: "State of a component", exercies: 14 },
        { id: 4, name: "Rendering collections", exercies: 12 },
        { id: 5, name: "Redux", exercies: 11 },
      ],
    },
    {
      id: 2,
      name: "Node.js",
      parts: [
        { id: 1, name: "Routing using Express", exercies: 7 },
        { id: 2, name: "Express middleware", exercies: 9 },
      ],
    },
  ];

  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map((course) => (
        <Course key={course.id} name={course.name} parts={course.parts} />
      ))}
    </>
  );
}
