import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import logo192 from '../assets/logo192.png'
import logo from '../assets/logo.png'

import AuthService from '../service/auth.service'

const required = (value) => {
  if (!value) {
    return (
      <div className='invalid-feedback d-block'>This field is required!</div>
    )
  }
}


const Login = () => {
  const form = useRef()
  const checkBtn = useRef()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const onChangeUsername = (e) => {
    const email = e.target.value
    setEmail(email)
  }

  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }

  const handleLogin = (e) => {
    // debugger
    e.preventDefault()

    setMessage('')
    setLoading(true)

    form.current.validateAll()

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, password).then(
        () => {
          AuthService.getLoggedInUserDetails().then(() => {
            navigate('/home')
          })
          AuthService.getAllUserDetails()
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()

          setLoading(false)
          setMessage(resMessage)
        }
      )
    } else {
      setLoading(false)
    }
  }

  return (
    <div className=' bg-sky-200 min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <img
          className='mx-auto w-auto rounded-3xl'
          src={logo}
          alt='Workflow'
        />
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Log in
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600 max-w'>
          New User ?
          <Link to="/register" >
            <button href="#" className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500' >
              Create Account
          </button>
          </Link>
        </p>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
          <Form className="mb-0 space-y-6" onSubmit={handleLogin} ref={form}>
            <div>
              <label htmlFor='email' className="block text-sm font-medium text-gray-700">Email Address</label>
              <div className='mt-1'>
                <Input
                type='text'
                name='email'
                value={email}
                onChange={onChangeUsername}
                validations={[required]}
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              />
              </div>
            </div>

            <div>
              <label  className="block text-sm font-medium text-gray-700" htmlFor='password'>Password</label>
              <div className="mt-1">
              <input
                type='password'
                name='password'
                value={password}
                onChange={onChangePassword}
                validations={[required]}
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              />
              </div>
            </div>

            <div>
              <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled={loading}>
                {loading && (
                  <span className='spinner-border spinner-border-sm'></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {message && (
              <div className='form-group'>
                <div className='alert alert-danger' role='alert'>
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

export default Login
