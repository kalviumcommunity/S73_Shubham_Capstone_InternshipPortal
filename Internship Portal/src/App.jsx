import { useEffect, useState } from "react";

function App() {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/internships")
      .then(res => res.json())
      .then(data => setInternships(data));
  }, []);

  const addInternship = async () => {
    await fetch("http://localhost:4000/api/internships", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Backend Intern",
        company: "Amazon",
        location: "Remote",
        description: "Node.js work",
        userId: "user1"
      }),
    });

    const res = await fetch("http://localhost:4000/api/internships");
    setInternships(await res.json());
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Internship Portal</h1>
      <button onClick={addInternship}>Add Internship</button>

      {internships.map(i => (
        <div key={i.id}>
          <b>{i.title}</b> - {i.company}
        </div>
      ))}
    </div>
  );
}

export default App;
