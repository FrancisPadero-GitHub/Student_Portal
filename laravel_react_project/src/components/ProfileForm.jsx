import { useRef, useState } from "react";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/contextprovider";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
    const lastNameRef = useRef(null);
    const firstNameRef = useRef(null);
    const middleNameRef = useRef(null);
    const middleInitialRef = useRef(null);
    const extRef = useRef(null);
    const genderRef = useRef(null);
    const ageRef = useRef(null);
    const dateOfBirthRef = useRef(null);
    const placeOfBirthRef = useRef(null);
    const civilStatusRef = useRef(null);
    const nationalityRef = useRef(null);
    const religionRef = useRef(null);
    const emailRef1 = useRef(null);
    const contactNumberRef = useRef(null);
    const heightRef = useRef(null);
    const weightRef = useRef(null);
    const bloodTypeRef = useRef(null);
    const ethnicityRef = useRef(null);
    const addressRef = useRef(null);
    const provinceRef = useRef(null);
    const municipalityRef = useRef(null);
    const barangayRef = useRef(null);
    const zipCodeRef = useRef(null);
    const emergencyContactPersonRef = useRef(null);
    const emergencyAddressRef = useRef(null);
    const emergencyMobileNumberRef = useRef(null);


    const generateInformation = () => {
        const payload = {
            last_name: 'Padero',
            first_name: 'Francis',
            middle_name: 'Sevilla',
            middle_initial: 'S',
            ext: 'none',
            gender: 'Male',
            age: '23',
            date_of_birth: '2001-10-20',
            place_of_birth: 'CDO',
            civil_status: 'Single',
            nationality: 'Filipino',
            religion: 'Catholic',
            email: 'francispadero2001@gmail.com',
            contact_number: '09262503126',
            height: 23,
            weight: 23,
            blood_type: 'B',
            ethnicity: 'Visayan',
            address: 'Tablon Purok 7, Tablon',
            province: 'Misamis Oriental',
            municipality: 'Cagayan de Oro City',
            barangay: 'Tablon Nestle',
            zip_code: '9000',
            emergency_contact_person: 'Mom',
            emergency_address: 'Tablon Nestle',
            emergency_mobile_number: '09262503126',
        }
        // Send POST request to your server using Axios
        try {
            axiosClient.post("/personalInfo", payload)
                .then(() => {
                    window.alert("Form submitted. Please wait for updates from the administrators or visit them at school.");
                    navigate('/login');
                    console.log("Form submission successful:");
                })
                .catch(err => {
                    console.error("Form submission failed:", err);
                });
        } catch (error) {
            console.error("An error occurred while submitting the form:", error);
        }

    }

    const generateButton = (ev) => {
        if (isConfirmed) {

        } else {
            const userConfirmed = window.confirm("Are you sure? After saving, some of your personal information will be retained for verification and cannot be edited.");
            if (userConfirmed) {
                setIsConfirmed(true); // Update the state to indicate user confirmation
                // Prevent default form submission behavior
                ev.preventDefault();

                // Call the first function
                generateInformation(ev);

            } else {
                console.log("Form submission canceled by user.");
                ev.preventDefault();
            }
        }
    }

    const handleSubmit = () => {
        const payload = {
            last_name: lastNameRef.current.value,
            first_name: firstNameRef.current.value,
            middle_name: middleNameRef.current.value,
            middle_initial: middleInitialRef.current.value,
            ext: extRef.current.value,
            gender: genderRef.current.value,
            age: ageRef.current.value,
            date_of_birth: dateOfBirthRef.current.value,
            place_of_birth: placeOfBirthRef.current.value,
            civil_status: civilStatusRef.current.value,
            nationality: nationalityRef.current.value,
            religion: religionRef.current.value,
            email: emailRef1.current.value,
            contact_number: contactNumberRef.current.value,
            height: heightRef.current.value,
            weight: weightRef.current.value,
            blood_type: bloodTypeRef.current.value,
            ethnicity: ethnicityRef.current.value,
            address: addressRef.current.value,
            province: provinceRef.current.value,
            municipality: municipalityRef.current.value,
            barangay: barangayRef.current.value,
            zip_code: zipCodeRef.current.value,
            emergency_contact_person: emergencyContactPersonRef.current.value,
            emergency_address: emergencyAddressRef.current.value,
            emergency_mobile_number: emergencyMobileNumberRef.current.value,
        };

        // Send POST request to your server using Axios
        try {
            axiosClient.post("/personalInfo", payload)
                .then(() => {
                    window.alert("Form submitted. Please wait for updates from the administrators or visit them at school.");
                    navigate('/login');
                    console.log("Form submission successful:");
                })
                .catch(err => {
                    console.error("Form submission failed:", err);
                });
        } catch (error) {
            console.error("An error occurred while submitting the form:", error);
        }

    };

    const navigate = useNavigate();

    const [isConfirmed, setIsConfirmed] = useState(false);
    const combinedSubmit = (ev) => {
        if (isConfirmed) {

        } else {
            const userConfirmed = window.confirm("Are you sure? After saving, some of your personal information will be retained for verification and cannot be edited.");
            if (userConfirmed) {
                setIsConfirmed(true); // Update the state to indicate user confirmation
                // Prevent default form submission behavior
                ev.preventDefault();

                // Call the first function
                handleSubmit(ev);

            } else {
                console.log("Form submission canceled by user.");
                ev.preventDefault();
            }
        }
    };

    return (
        <main className="content px-4 py-2 mt-3 d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
            <form onSubmit={combinedSubmit}>
                <div className="card">
                    <div className="card-body" id="regisForm">
                        <p className="text-center mb-2" id="header">Registration Form</p>
                        <div className="row mb-2 justify-content-center">
                            <div className="col-sm-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input ref={lastNameRef} type="text" className="form-control form-control-md" id="lastName" name="last_name" required />
                            </div>
                            <div className="col-sm-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input ref={firstNameRef} type="text" className="form-control form-control-md" id="firstName" name="first_name" required />
                            </div>
                            <div className="col-sm-3">
                                <label htmlFor="middleName" className="form-label">Middle Name</label>
                                <input ref={middleNameRef} type="text" className="form-control form-control-md" id="middleName" name="middle_name" required />
                            </div>
                            <div className="col-sm-1">
                                <label htmlFor="middle_initial" className="form-label">M.I</label>
                                <input ref={middleInitialRef} type="text" className="form-control form-control-md" id="middle_initial" name="middle_initial" maxLength="1" />
                            </div>
                            <div className="col-sm-1">
                                <label htmlFor="ext" className="form-label">Ext.</label>
                                <input ref={extRef} type="text" className="form-control form-control-md" id="ext" name="ext" />
                            </div>
                            <div className="col-sm-1">
                                <label htmlFor="age" className="form-label">Age</label>
                                <input ref={ageRef} type="number" className="form-control form-control-md" id="age" name="age" required />
                            </div>
                        </div>

                        <div className="row mb-2 justify-content-center">
                            <div className="col-sm-3">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <select ref={genderRef} className="form-select form-select-md" id="gender" name="gender" required>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="col-sm-3">
                                <label htmlFor="date_of_birth" className="form-label">Date of Birth</label>
                                <input ref={dateOfBirthRef} type="date" className="form-control form-control-md" id="date_of_birth" name="date_of_birth" required />
                            </div>

                            <div className="col-sm-3">
                                <label htmlFor="place_of_birth" className="form-label">Place of Birth</label>
                                <input ref={placeOfBirthRef} type="text" className="form-control form-control-md" id="place_of_birth" name="place_of_birth" required />
                            </div>

                            <div className="col-sm-3">
                                <label htmlFor="civilStatus" className="form-label">Civil Status</label>
                                <select ref={civilStatusRef} className="form-select form-select-md" id="civilStatus" required>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                    <option value="Complicated">Complicated</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="row mb-2 justify-content-center">
                            <div className="col-sm-3">
                                <label htmlFor="nationality" className="form-label">Nationality</label>
                                <select ref={nationalityRef} className="form-select form-select-md" id="nationality" name="nationality" required >
                                    <option value="Filipino">Filipino</option>
                                    <option value="Japanese">Japanese</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="col-sm-3">
                                <label htmlFor="phone" className="form-label">Contact #</label>
                                <input ref={contactNumberRef} type="text" className="form-control form-control-md" id="contact_number" name="contact_number" required />
                            </div>

                            <div className="col-sm-3">
                                <label htmlFor="text" className="form-label">Email</label>
                                <input ref={emailRef1} type="text" className="form-control form-control-md" id="text" name="text" required />
                            </div>

                            <div className="col-sm-3">
                                <label htmlFor="religion" className="form-label">Religion</label>
                                <input ref={religionRef} className="form-control form-control-md" id="religion" name="religion" required />

                            </div>

                        </div>


                        <div className="row mb-2 justify-content-center">
                            <div className="col-sm-3">
                                <label htmlFor="ethnicity" className="form-label">Ethnicity</label>
                                <input ref={ethnicityRef} type="text" className="form-control form-control-md" id="ethnicity" name="ethnicity" required />
                            </div>
                            <div className="col-sm-2">
                                <label htmlFor="height" className="form-label">Height (m)</label>
                                <input ref={heightRef} type="number" step="0.1" className="form-control form-control-md" id="height" name="height" required />
                            </div>
                            <div className="col-sm-2">
                                <label htmlFor="weight" className="form-label">Weight (kg)</label>
                                <input ref={weightRef} type="number" step="0.1" className="form-control form-control-md" id="weight" name="weight" required />
                            </div>
                            <div className="col-sm-2">
                                <label htmlFor="bloodType" className="form-label">Blood Type</label>
                                <input ref={bloodTypeRef} type="text" className="form-control form-control-md" id="bloodType" name="blood_type" required />
                            </div>

                            <div className="col-sm-3">
                                <label htmlFor="address" className="form-label">Address(House#/Block/Street)</label>
                                <input ref={addressRef} type="text" className="form-control form-control-md" id="address" name="address" required />
                            </div>

                        </div>

                        <div className="row mb-2 justify-content-center">

                            <div className="col-sm-3">
                                <label htmlFor="province" className="form-label">Province</label>
                                <input ref={provinceRef} type="text" className="form-control form-control-md" id="province" name="province" required />
                            </div>
                            <div className="col-sm-3">
                                <label htmlFor="municipality" className="form-label">Municipality</label>
                                <input ref={municipalityRef} type="text" className="form-control form-control-md" id="municipality" name="municipality" required />
                            </div>

                            <div className="col-sm-3">
                                <label htmlFor="barangay" className="form-label">Barangay</label>
                                <input ref={barangayRef} type="text" className="form-control form-control-md" id="barangay" name="barangay" required />
                            </div>
                            <div className="col-sm-3">
                                <label htmlFor="zip_code" className="form-label">Zip Code</label>
                                <input ref={zipCodeRef} type="text" className="form-control form-control-md" id="zip_code" name="zip_code" required />
                            </div>

                        </div>

                        <div className="row mb-4 justify-content-center">
                            <div className="col-sm-3">
                                <label htmlFor="emergency_contact_person" className="form-label">Emergency Contact Person</label>
                                <input ref={emergencyContactPersonRef} type="text" className="form-control form-control-md" id="emergency_contact_person" name="emergency_contact_person" required />
                            </div>
                            <div className="col-sm-3">
                                <label htmlFor="emergency_address" className="form-label">Emergency Address</label>
                                <input ref={emergencyAddressRef} type="text" className="form-control form-control-md" id="emergency_address" name="emergency_address" required />
                            </div>
                            <div className="col-sm-3">
                                <label htmlFor="emergency_mobile_number" className="form-label">Emergency Mobile Number</label>
                                <input ref={emergencyMobileNumberRef} type="text" className="form-control form-control-md" id="emergency_mobile_number" name="emergency_mobile_number" required />
                            </div>
                        </div>

                        <div className="text-start">
                            <button className="btn btn-secondary btn-sm" onClick={generateButton}>Generate Demo</button>
                        </div>


                        <div className="text-end">
                            <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                        </div>
                        <p className="text-center mb-0">Already Have An Account? <Link to='/login'>Login</Link></p>
                    </div>
                </div>
            </form>
        </main>
    );
}

export default ProfileForm;