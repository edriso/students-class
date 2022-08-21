import { useForm } from 'react-hook-form';

const EditStudent = ({ id, name, editName, close }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  if (!errors.newName) {
    setValue('newName', name);
  }

  const onSubmit = (data) => {
    editName(id, data.newName);
  };

  return (
    <>
      <form className='form-edit' onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register(
            'newName',
            { pattern: /^[A-Za-z]+$/i },
            { required: true }
          )}
        />

        <div>
          <button type='button' className='btn close' onClick={close}>
            Close
          </button>

          <button type='submit' className='btn save'>
            Save
          </button>
        </div>
      </form>

      {/* errors will return when field validation fails  */}
      {errors.newName && <p className='error'>You must enter a valid name</p>}
    </>
  );
};

export default EditStudent;
