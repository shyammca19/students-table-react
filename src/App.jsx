import React, { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import Loader from "./components/Loader";
import studentsData from "./data/students.json";
import { exportToExcel } from "./utils/exportExcel";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setStudents(studentsData);
      setLoading(false);
    }, 1000);
  }, []);

  const addStudent = (student) => {
    student.id = Date.now();
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const startEdit = (student) => {
    setSelectedStudent(student);
  };

  const editStudent = (updated) => {
    setStudents(
      students.map((s) => (s.id === updated.id ? updated : s))
    );
  };

  const clearEdit = () => {
    setSelectedStudent(null);
  };

  if (loading) return <Loader />;

  return (
    <div className="container">
      <h1>Students Table</h1>

      <button
        onClick={() => exportToExcel(students, "students")}
      >
        Download Excel
      </button>

      <StudentForm
        addStudent={addStudent}
        editStudent={editStudent}
        selectedStudent={selectedStudent}
        clearEdit={clearEdit}
      />

      <StudentTable
        students={students}
        deleteStudent={deleteStudent}
        startEdit={startEdit}
      />
    </div>
  );
}

export default App;