import { useForm } from 'react-hook-form';

const FormNew = ({ update }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    update((oldVal) => [
      ...oldVal,
      { id: new Date().valueOf(), name: data.newStudentName },
    ]);

    setValue('newStudentName', '');
  };

  return (
    <>
      <form className='form-new' onSubmit={handleSubmit(onSubmit)}>
        <h3>Add New Student</h3>

        <input
          {...register(
            'newStudentName',
            { pattern: /^[A-Za-z]+$/i },
            { required: true }
          )}
        />

        <button className='btn' type='submit'>
          Add
        </button>

        {/* errors will return when field validation fails  */}
        {errors.newStudentName && (
          <p className='error'>You must enter a valid name</p>
        )}
      </form>
    </>
  );
};

export default FormNew;
