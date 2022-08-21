import { useState } from 'react';
import { data } from './db/data';
import Student from './components/Student';
import FormNew from './components/FormNew';
import EditStudent from './components/EditStudent';

function App() {
  const [toggleForm, setToggleForm] = useState(false);

  const [toggleEdit, setToggleEdit] = useState(false);

  const [editId, setEditId] = useState(null);

  const [editInput, setEditInput] = useState('');

  const [students, setStudents] = useState(data);

  const removeStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const editStudentName = (id, editedName) => {
    const newStudents = students.map((elm) =>
      elm.id === id ? { ...elm, name: editedName } : elm
    );

    setStudents(newStudents);

    // setEditInput(editedName);
    setToggleEdit(false);
  };

  return (
    <div className='App'>
      <header>
        <h1>Class 101</h1>
      </header>

      {toggleForm && <FormNew update={setStudents} />}

      <section className='students-list'>
        {students.map((person) => (
          <Student
            key={person.id}
            {...person}
            editInput={setEditInput}
            editId={setEditId}
            toggle={setToggleEdit}
            remove={removeStudent}
          />
        ))}
      </section>

      {toggleEdit && (
        <EditStudent
          id={editId}
          name={editInput}
          editName={editStudentName}
          close={() => setToggleEdit(false)}
        />
      )}

      <button
        className={'btn add' + (toggleForm ? ' cancel' : '')}
        onClick={() => setToggleForm(!toggleForm)}
      >
        {toggleForm ? 'Cancel' : 'Add New'}
      </button>
    </div>
  );
}

export default App;
