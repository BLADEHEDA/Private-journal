import { useFormik } from 'formik';
import * as Yup from 'yup';

function App() {
    //TODO create formik instance
    const formik = useFormik({
      initialValues: {
        firstname: '',
        lastname: '',
        email: '',
       password: '',
        age: '',
        phonenumber: '',
        city: '',
        invitecode:''
      },
      validationSchema: Yup.object({
        firstname: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Firstname is required"),
    
      lastname: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Lastname is required"),              
        email: Yup.string()
                .email()
                .required(),

         password: Yup.string()
         .required("Password is required")
          .min(6, "Password is too short - should be 6 chars minimum"),

        phonenumber: Yup.string()
        .required("Phone number is required")
        .matches(
    /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
          "Invalid phone number"
        ),
        city:Yup.string()    
        .label('city')
        .required(),
        invitecode:Yup.string()    
        .label('invite code')
        .optional()

      }),
      onSubmit: function (values) {
        alert(values.firstname);
        alert(`You are registered! 
        firstnaame: ${values.firstname}. 
        lastnaame: ${values.lastname}.
        Email: ${values.email}.
        password: ${values.password}.
        phonenumber: ${values.phonenumber}.
        city: ${values.city}.
        invitecode: ${values.invitecode}
         `);
        //  display on the console
         console.log(`You are registered! 
         firstnaame: ${values.firstname}. 
         lastnaame: ${values.lastname}.
         Email: ${values.email}.
         password: ${values.password}.
         phonenumber: ${values.phonenumber}.
         city: ${values.city}.
         invitecode: ${values.invitecode}
          `);
         
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
            <label for="password">Password</label>
            <input type="password" name="password" id="password"
              className={`block w-full rounded border py-1 px-2 ${formik.touched.password && formik.errors.password ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
            {formik.touched.password && formik.errors.password && (
              <span className='text-red-400'>{formik.errors.password}</span>
            )}
          </div>
          <div className='mb-4'>
            <label for="email">phone number</label>
            <input type="tel" name="phonenumber" id="phonenumber"
              className={`block w-full rounded border py-1 px-2 ${formik.touched.phonenumber && formik.errors.phonenumber ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phonenumber} />
            {formik.touched.phonenumber && formik.errors.phonenumber && (
              <span className='text-red-400'>{formik.errors.phonenumber}</span>
            )}
          </div>
          <div className='mb-4'>
            <label for="text">city you'll drive in </label>
            <input type="text" name="city" id="city"
              className={`block w-full rounded border py-1 px-2 ${formik.touched.city && formik.errors.city ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} />
            {formik.touched.city && formik.errors.city && (
              <span className='text-red-400'>{formik.errors.city}</span>
            )}
          </div>
          <div className='mb-4'>
            <label for="text">invite code </label>
            <input type="text" name="invitecode" id="city"
              className={`block w-full rounded border py-1 px-2 ${formik.touched.invitecode && formik.errors.invitecode ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.invitecode} />
            {formik.touched.invitecode && formik.errors.invitecode && (
              <span className='text-red-400'>{formik.errors.invitecode}</span>
            )}
          </div>


          <div className='text-center'>
            <button className='bg-blue-500 rounded p-3 text-white' type='submit'>Submit</button>
          </div>
        </form>
      </main>
    );
}

export default App;