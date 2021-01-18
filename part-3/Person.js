"use strict";

function Person({name, age, hobbies}) {
  return (
    <div>
      <p>
        Learn some information about this person
      </p>
      <h3>{ age > 18 ? "please go vote!" : "you must be 18" }</h3>
      <i> { name.length > 8 ? name.slice(0, 6) : name  }</i>

      <ul>
        { hobbies.map( (hobby, idx) => <li key={idx}>{hobby}</li>)}
      </ul>

    </div>
    
  );
}