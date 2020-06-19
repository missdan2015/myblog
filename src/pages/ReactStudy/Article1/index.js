import React, { useState, useEffect } from 'react';
export default function Greeting() {

  const [firstName, setFirstName] = useState(() =>
    window.localStorage.getItem('hooksFirstName') || ''
  );
  const [lastName, setLastName] = useState(() =>
    window.localStorage.getItem('hooksLastName') || ''
  );
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);

  useEffect(() => {
    window.localStorage.setItem('hooksFirstName', firstName);
    window.localStorage.setItem('hooksLastName', lastName);
  }, [firstName, lastName]);

  return (
    <div>
        <form>
            <label for="name">中文名：</label>
            <input id="name" value={firstName} onChange={handleFirstNameChange}/>
            <br />
            <br />
            <label for="enName">英文名：</label>
            <input id="enName"  value={lastName} onChange={handleLastNameChange} />
        </form>
      <p>
        Hello, <span>{firstName} {lastName}</span>
      </p>
    </div>
  )
}