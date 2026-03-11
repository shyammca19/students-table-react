import React from "react";

function StudentTable({ students, deleteStudent, startEdit }) {
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteStudent(id);
    }
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.name}</td>
            <td>{s.email}</td>
            <td>{s.age}</td>

            <td>
              <button onClick={() => startEdit(s)}>Edit</button>
              <button onClick={() => handleDelete(s.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;