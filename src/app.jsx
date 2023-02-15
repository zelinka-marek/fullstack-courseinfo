import { CourseDetails } from "./components/course-details";

export function App() {
  const course = {
    id: 1,
    name: "Half Stack app development",
    parts: [
      { id: 1, name: "Fundamentals of React", exercies: 10 },
      { id: 2, name: "Using props to pass data", exercies: 7 },
      { id: 3, name: "State of a component", exercies: 14 },
      { id: 4, name: "Rendering collections", exercies: 12 },
    ],
  };

  return <CourseDetails course={course} />;
}
