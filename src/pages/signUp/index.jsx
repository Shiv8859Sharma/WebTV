// import { popupOpen } from "@/globalStates/actions/PopupAction"
// import { useDispatch, useSelector } from "react-redux"
// import { useState } from "react";
// import { getFormValues } from "@/utills/formValidation";
// import countryList from "@/utills/countryStateCity";
// import { setFormFieldErrors } from '@/globalStates/actions/formAction';

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

// let tabs = ['Hire for Project', "Work as Cloud Expert"]

const SignUpPage = () => {
  // const dispatch = useDispatch();
  // const formDetails = useSelector(state => state?.FormDetails)
  // const [activeTab, setActiveTab] = useState('Hire for Project')
  // const [userRole, setUserRole] = useState()
  // const [submitForm, setSubmitForm] = useState(false)

  // const handleGoToLoginPage = () => {
  //     dispatch(popupOpen({
  //         type: 'login',
  //         open: true,
  //         className: 'w-[95%] md:w-[90%] xl:w-[80%] 3xl:w-[70%]'
  //     }))
  // }

  // const handleTabChange = (name) => {
  //     let role = name === 'Hire for Project' ? 'Project Manager' : 'Freelancer'
  //     setActiveTab('')
  //     setUserRole(role)
  //     setTimeout(() => {
  //         setActiveTab(name)
  //     }, 100)
  // }

  // const setError = (errors) => {
  //     dispatch(setFormFieldErrors(errors))
  //     if (!errors.length) {
  //         setSubmitForm(false)
  //     }
  // }

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     let { isValid, data, errors } = getFormValues(e, 'sign_up')
  //     setSubmitForm(true)
  //     if (isValid) {
  //         if ((data.password !== data.confirm_password)) {
  //             setError([{
  //                 field: 'confirm_password',
  //                 message: `Password doesn't match`
  //             }])
  //         } else {
  //             let location = countryList.find(country => country.name === data.location)
  //             console.log("data: ", data);
  //             let userDetails = new FormData()
  //             userDetails.append("first_name", data.first_name)
  //             userDetails.append("last_name", data.last_name)
  //             userDetails.append("email", data.email)
  //             userDetails.append("password", data.password)
  //             userDetails.append("country", location.name)
  //             userDetails.append("role", userRole)
  //             userDetails.append("country_id", location.id)
  //         }

  //     } else {
  //         setError(errors)
  //     }

  // }

  // const handleChange = (e) => {
  //     let { name } = e.target
  //     if (formDetails.errors.length) {
  //         let errorFieldName = formDetails.errors.map(item => item.field)
  //         if (errorFieldName.includes(name)) {
  //             let remaingErrors = formDetails.errors.filter(errorField => errorField.field !== name)
  //             setError(remaingErrors)
  //         }

  //     }
  // }
  return (
    <div className="content_box relative m-auto  h-[80vh]  border border-[#BBBDC8] rounded-[14px] bg-white overflow-hidden  flex flex-col lg:flex-row"></div>
  );
};

export default SignUpPage;
