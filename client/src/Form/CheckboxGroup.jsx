import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function CheckboxGroup (props) {
  const { label, name, options, ...rest } = props
  return (
    <div className='form-control'>
      <label>{label}</label><br />
      <Field name={name}>
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type='checkbox'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  selected={field.value === option.value}
                  
                />
                <label className="checkboxlabel" htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            )
          })
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default CheckboxGroup