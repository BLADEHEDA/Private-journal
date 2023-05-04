import { useFormik } from 'formik';
import * as Yup from 'yup';

function App() {
    const professions = ['Developer', 'Designer', 'Other'];
    //TODO create formik instance
    const formik = useFormik({
      initialValues: {
        firstname: '',
        lastname: '',
        email: '',
        profession: professions[0],
        age: '',
      },
      validationSchema: Yup.object({
        name: Yup.string()
                .label('Full Name')
                .required(),
        email: Yup.string()
                .email()
                .required(),
        profession: Yup.string()
                    .oneOf(professions, 'The profession you chose does not exist'),
        age: Yup.number()
              .min(15, 'You need to be older than 15 to register')
              .required()
      }),
      onSubmit: function (values) {
        alert(`You are registered! Name: ${values.name}. 
        Email: ${values.email}.
         Profession: ${values.profession}. 
          Age: ${values.age}`);
      }
    })
    
    return (
      <main className="main-section">
        <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto bg-white rounded shadow-lg mt-7 p-3">
        {/* <h1 className='text-3xl mb-3 text-center'>Register</h1> */}
          <div className='mb-4'>
            <label for="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" 
              className={`block w-full rounded border py-1 px-2 ${formik.touched.firstname && formik.errors.firstname ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} />
            {formik.touched.firstname && formik.errors.firstname && (
              <span className='text-red-400'>{formik.errors.firstname}</span>
            )}
          </div>
          <div className='mb-4'>
            <label for="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname" 
              className={`block w-full rounded border py-1 px-2 ${formik.touched.lastname && formik.errors.lastname ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} />
            {formik.touched.lastname && formik.errors.lastname && (
              <span className='text-red-400'>{formik.errors.lastname}</span>
            )}
          </div>

          <div className='mb-4'>
            <label for="email">Email</label>
            <input type="email" name="email" id="email"
              className={`block w-full rounded border py-1 px-2 ${formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            {formik.touched.email && formik.errors.email && (
              <span className='text-red-400'>{formik.errors.email}</span>
            )}
          </div>

          <div className='mb-4'>
            <label for="age">Age</label>
            <input type="number" name="age" id="age"
              className={`block w-full rounded border py-1 px-2 ${formik.touched.age && formik.errors.age ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.age} />
            {formik.touched.age && formik.errors.age && (
              <span className='text-red-400'>{formik.errors.age}</span>
            )}
          </div>
          <div className='text-center'>
            <button className='bg-blue-500 rounded p-3 text-white' type='submit'>Submit</button>
          </div>
        </form>
        {/* <section className="form-names">
        {values.name}
        </section> */}
      </main>
    );
}

export default App;