import React, { useState, useEffect } from "react";

function StudentForm({ addStudent, editStudent, selectedStudent, clearEdit }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    if (selectedStudent) {
      setStudent(selectedStudent);
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!student.name || !student.email || !student.age) {
      alert("All fields are mandatory");
      return false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(student.email)) {
      alert("Invalid email format");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (selectedStudent) {
      editStudent(student);
    } else {
      addStudent(student);
    }

    setStudent({ name: "", email: "", age: "" });
    clearEdit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedStudent ? "Edit Student" : "Add Student"}</h2>

      <input
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={student.email}
        onChange={handleChange}
      />

      <input
        name="age"
        type="number"
        placeholder="Age"
        value={student.age}
        onChange={handleChange}
      />

      <button type="submit">
        {selectedStudent ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default StudentForm;