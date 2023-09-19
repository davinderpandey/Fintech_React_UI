import React, { useState, useRef } from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { isEmail } from 'validator'
import logo192 from '../assets/logo192.png'
import logo from '../assets/logo.png'

import AuthService from '../service/auth.service'
import { Link, useNavigate } from 'react-router-dom'

const required = (value) => {
  if (!value) {
    return (
      <div className='invalid-feedback d-block'>This field is required!</div>
    )
  }
}

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className='invalid-feedback d-block'>This is not a valid email.</div>
    )
  }
}

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className='invalid-feedback d-block'>
        The username must be between 3 and 20 characters.
      </div>
    )
  }
}

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className='invalid-feedback d-block'>
        The password must be between 6 and 40 characters.
      </div>
    )
  }
}

const Register = (props) => {
  const form = useRef()
  const checkBtn = useRef()
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [about, setAbout] = useState('')
  const [successful, setSuccessful] = useState(false)
  const [message, setMessage] = useState('')

  const onChangeFirstName = (e) => {
    const firstName = e.target.value
    setFirstName(firstName)
  }

  const onChangeLastName = (e) => {
    const lastName = e.target.value
    setLastName(lastName)
  }

  const onChangeEmail = (e) => {
    const email = e.target.value
    setEmail(email)
  }

  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }

  const onChangeAbout = (e) => {
    const about = e.target.value
    setAbout(about)
  }

  const handleRegister = (e) => {
    e.preventDefault()

    setMessage('')
    setSuccessful(false)

    form.current.validateAll()

    if (checkBtn.current.context._errors.length === 0) {
      // TODO: Please creat data model in future.
      // create user object
      let userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        about: about,
      }

      AuthService.register(userData).then(
        (response) => {
          setMessage(response.data.message)
          setSuccessful(true)
          navigate('/')
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()

          setMessage(resMessage)
          setSuccessful(false)
        }
      )
    }
  }

  return (
    <div className='bg-sky-200 min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
      <img
          className='mx-auto w-auto rounded-3xl'
          src={logo}
          alt='Workflow'
        />
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Create your account
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600 max-w'>
          Already registered?
          <Link to='/'>
            <button
              href="#" 
              className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              Sign in
            </button>
          </Link>
        </p>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
          <Form onSubmit={handleRegister} ref={form}>
            {!successful && (
              <div className='mt-4'>
                  <label className="block text-sm font-medium text-gray-700" htmlFor='firstname'>FirstName</label>
                  <Input
                    type='text'
                    name='firstname'
                    value={firstName}
                    onChange={onChangeFirstName}
                    validations={[required, vusername]}
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
                  />
                <div className='mt-4'>
                  <label className="block text-sm font-medium text-gray-700" htmlFor='lastname'>Last Name</label>
                  <Input
                    type='text'
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
                    name='lastname'
                    value={lastName}
                    onChange={onChangeLastName}
                    validations={[required, vusername]}
                  />
                </div>

                <div className='mt-4'>
                  <label  className="block text-sm font-medium text-gray-700" htmlFor='email'>Email</label>
                  <Input
                    type='text'
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
                    name='email'
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, validEmail]}
                  />
                </div>

                <div className='mt-4'>
                  <label  className="block text-sm font-medium text-gray-700" htmlFor='password'>Password</label>
                  <Input
                    type='password'
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
                    name='password'
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className='mt-4 mb-4'>
                  <label className="block text-sm font-medium text-gray-700" htmlFor='about'>About</label>
                  <Input
                    type='text'
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
                    name='about'
                    value={about}
                    onChange={onChangeAbout}
                    validations={[required, vusername]}
                  />
                </div>

                <div>
                  <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >Sign Up</button>
                </div>
              </div>
            )}

            {message && (
              <div className='form-group'>
                <div
                  className={
                    successful ? 'alert alert-success' : 'alert alert-danger'
                  }
                  role='alert'
                >
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: 'none' }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Register
