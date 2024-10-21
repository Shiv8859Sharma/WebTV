import { memo } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// import { Transition } from '@headlessui/react';
// import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

// import SocialButton from '@/pages/socialButton';
// import LoginSignUpLeftLayout from '@/layouts/loginSignUpLeftLayout';
// import { getFormValues } from '@/utills/formValidation';
// import { setFormFieldErrors } from '@/globalStates/actions/formAction';
// import { setAuthToken, loginUser } from '@/globalStates/actions/authAction';
// import { popupClose, popupOpen } from '@/globalStates/actions/PopupAction';
// import { InputField, CheckboxField } from '@/components/formFields';
// import { SpinLoader } from '@/components/loader';
// import { GradientButton } from '@/components/buttons';

function LoginPage() {
  // const formDetails = useSelector(state => state?.FormDetails)
  // const isLoading = useSelector(state => state?.loader?.isLoading)

  // const dispatch = useDispatch();
  // let navigate = useNavigate()

  // const [showPassword, setShowPassword] = useState(false)
  // const [error, setError] = useState('')
  // const [captcha, setCaptcha] = useState({
  //     verified: false,
  //     error: false
  // })

  // const login = (details) => {
  //     dispatch(setAuthToken(details))
  //     navigate('/')
  //     setTimeout(() => {
  //         dispatch(popupClose())
  //     }, 100)
  // }

  // const handleSwichPopup = (e) => {
  //     let { name } = e.target
  //     let classNames = {
  //         signUp: 'w-[95%] md:w-[90%] xl:w-[80%] 3xl:w-[70%]',
  //         FORGET_PASSWORD: 'w-[95%] md:w-[50%] xl:w-[40%] 3xl:w-[20%]'
  //     }
  //     dispatch(popupOpen({
  //         type: name,
  //         open: true,
  //         className: classNames[name]
  //     }))
  // }

  // const toggleIcon = () => {
  //     setShowPassword((pre) => !pre)
  // }

  // const handleLogin = (e) => {
  //     let { isValid, data, errors } = getFormValues(e, 'login')

  //     if (isValid && captcha.verified) {
  //         let userDetails = new FormData();
  //         Object.keys(data).forEach(key => {
  //             userDetails.append(key, data[key]);
  //         });
  //         dispatch(loginUser(userDetails)).then((response) => {
  //             if (response.status === 200) {
  //                 let details = {
  //                     token: response.data.token,
  //                     role: response.data?.user?.role
  //                 }
  //                 login(details)
  //             } else {
  //                 e.target.scrollIntoView({ top: 0, behavior: 'smooth' });
  //                 setError(response.response.data.message)

  //             }
  //         })
  //     } else {
  //         setCaptcha((pre) => ({
  //             ...pre,
  //             error: !pre.verified
  //         }))
  //         dispatch(setFormFieldErrors(errors))
  //     }
  // }

  // const handleChange = (e) => {
  //     let { name } = e.target
  //     if (formDetails.errors.length) {
  //         let errorFieldName = formDetails.errors.map(item => item.field)
  //         if (errorFieldName.includes(name)) {
  //             let remaingErrors = formDetails.errors.filter(errorField => errorField.field !== name)
  //             dispatch(setFormFieldErrors(remaingErrors))
  //         }
  //     }
  // }



  return (
    <div className="content_box relative m-auto  h-[80vh] border border-[#BBBDC8] rounded-lg me-0.5 bg-white overflow-x-hidden flex flex-col lg:flex-row">

    </div>
  );
}

export default memo(LoginPage);
