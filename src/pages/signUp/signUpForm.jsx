import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { getCurrentLocation } from "@/utills/currentLocation";
import { useEffect, useState } from 'react';
import countryList from '@/utills/countryStateCity';
import { InputField, AutocompleteField } from '@/components/formFields';
import { GradientButton } from "@/components/buttons";
import { SpinLoader } from "@/components/loader";
import { useSelector } from "react-redux";

const SignUpForm = () => {
  const isLoading = useSelector(state => state?.loader?.isLoading)
  const [showPassword, setShowPassword] = useState()
  const [currentLocation, setCurrentLocation] = useState('')

  const toggleIcon = (type) => {
    setShowPassword((pre) => ({
      ...pre,
      [type]: !pre?.[type]
    }))
  }
  useEffect(() => {
    location()
  }, [])

  const location = async () => {
    let data = await getCurrentLocation()
    let country = await data.country
    setCurrentLocation(data.success ? country : '')
    return await data.success ? country : ''
  }

  return (
    <div className="credentials flex flex-col gap-4 md:gap-6">
      <div className="name w-full flex flex-col md:flex-row gap-4">
        <InputField
          label='First Name'
          name='first_name'
          type='text'
        />
        <InputField
          label='Last Name'
          name='last_name'
          type='text'
        />
      </div>

      <InputField
        label='Work Email Address'
        name='email'
        type='email'
      />

      <AutocompleteField
        label='Location'
        name='location'
        options={countryList.map(country => country.name)}
        title='name'
        value='name'
        defaultOption={true}
        defaultOptionLabel="Select location"
        defaultValue={currentLocation}
        showCheck={false}
      />

      <InputField
        label='Password'
        rightIcon={showPassword?.password ? <EyeIcon className="cursor-pointer" onClick={() => toggleIcon('password')} /> : <EyeSlashIcon className="cursor-pointer" onClick={() => toggleIcon('password')} />}
        name='password'
        type={showPassword?.password ? 'text' : 'password'}
      />
      <InputField
        label='Confirm Password'
        rightIcon={showPassword?.confirm_password ? <EyeIcon className="cursor-pointer" onClick={() => toggleIcon('confirm_password')} /> : <EyeSlashIcon id='confirm_password' className="cursor-pointer" onClick={() => toggleIcon('confirm_password')} />}
        name='confirm_password'
        type={showPassword?.confirm_password ? 'text' : 'password'}
      />

      <div className="submit_btn">
        <GradientButton type='submit' disabled={isLoading} className='w-full flex items-center text-center justify-center gap-4 font-semibold'>
          <SpinLoader isLoading={isLoading} />
          Sign up
        </GradientButton>
      </div>
    </div>
  )

}

export default SignUpForm