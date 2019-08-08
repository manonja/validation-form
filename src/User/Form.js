import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Required'
    } else if (values.name.length < 2) {
      errors.name = 'Minimum be 2 characters or more'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
      } else if (values.password.length < 9) {
        errors.password = 'Minimum be 8 characters or more'
      }
    return errors
  }

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} 
          placeholder={label} 
          type={type} 
          className="form-control" 
        />
        {
          touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))
        }
      </div>
    </div>
  )

let Form = props => {

  const { handleSubmit } = props;
  
  return (
    <form onSubmit={ handleSubmit }>
      <div className="form-group">
        <Field name="name" component={renderField} label="Name" />
      </div>
      <div className="form-group">
        <Field name="role" component={renderField} label="Role" />
      </div>
      <div className="form-group">
        <Field name="email" component={renderField} label="Email" />
      </div>
      <div className="form-group">
        <Field name="password" component={renderField} label="Password" />
      </div>
      <div className="form-group">
        <button type="submit"  className="btn btn-primary">Submit</button>
      </div>
    </form>
  )
}

Form = reduxForm({
  form: 'contact',
  validate,
})(Form);

export default Form;