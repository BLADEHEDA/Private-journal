import React from 'react'

const InputFields = (props) => {
  return (
    <div>
   <section className="main-section-right mt-[0.5em] ]  ">
         <div className='mb-3'>
            <label >{props.label}</label>
            <input 
            type={props.type}
            name={props.name}
            className={`block form-input w-full rounded border py-1 px-2 ${props.touched&& props.errors.firstname ? 'border-red-400' : 'border-gray-300'}`}
              onChange={props.handleChange} onBlur={props.handleBlur} value={props.values} />
            {props.touched && props.errors && (
              <span className='text-red-400'>{props.error}</span>
            )}
          </div>
        </section>
    </div>
  )
}

export default InputFields