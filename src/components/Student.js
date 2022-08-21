const Student = (props) => {
  const { id, name, remove, editInput, editId, toggle } = props;

  return (
    <div className='student'>
      <h4 className='student-name'>{name}</h4>

      <div>
        <button
          className='btn edit'
          type='button'
          onClick={() => {
            editInput(name);
            editId(id);
            toggle(true);
          }}
        >
          edit
        </button>

        <button className='btn' type='button' onClick={() => remove(id)}>
          remove
        </button>
      </div>
    </div>
  );
};

export default Student;
