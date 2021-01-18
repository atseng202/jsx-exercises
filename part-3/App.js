"use strict";

function App() {
  const people = [
    {
      name: "kellen",
      age: 32,
      hobbies: ["knitting", "selling"],
    },
    {
      name: "alan",
      age: 12,
      hobbies: ["knitting", "buying"],
    },
    {
      name: "u3",
      age: 100,
      hobbies: ["eating", "sleeping"],
    },
  ];
  return (
    <div>
      {people.map((p) => (
        <Person
          name={p.name}
          age={p.age}
          hobbies={p.hobbies}
        />
      ))}
    </div>
  );
}
