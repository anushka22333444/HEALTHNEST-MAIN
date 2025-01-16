import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AppointmentForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [department, setDepartment] = useState("Pediatrics");
    const [doctorFirstName, setDoctorFirstName] = useState("");
    const [doctorLastName, setDoctorLastName] = useState("");
    const [address, setAddress] = useState("");
    const [hasVisited, setHasVisited] = useState(false);
    const [doctors, setDoctors] = useState([]);
    const [meetingType, setMeetingType] = useState(""); // state for meeting type

    const departmentsArray = [
        "Nausea","Nosebleed"," Severe Headache","Stomachache","Periods Issue","Fever and Cold","Others"
    ];

    useEffect(() => {
        const fetchDoctors = async () => {
            const { data } = await axios.get(
                "http://localhost:4000/api/v1/user/doctors",
                { withCredentials: true }
            );
            setDoctors(data.doctors);
        };
        fetchDoctors();
    }, []);

    const handleAppointment = async (e) => {
        e.preventDefault();
        try {
            const hasVisitedBool = Boolean(hasVisited);
            const { data } = await axios.post(
                "http://localhost:4000/api/v1/appointment/post",
                {
                    firstName,
                    lastName,
                    email,
                    phone,
                    dob,
                    gender,
                    appointment_date: appointmentDate,
                    department,
                    doctor_firstName: doctorFirstName,
                    doctor_lastName: doctorLastName,
                    hasVisited: hasVisitedBool,
                    address,
                    meeting_type: meetingType, // added meeting type field
                },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                }
            );
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setDob("");
            setGender("");
            setAppointmentDate("");
            setDepartment("Pediatrics");
            setDoctorFirstName("");
            setDoctorLastName("");
            setHasVisited(false);
            setAddress("");
            setMeetingType(""); // reset meeting type
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-6 bg-sky-100 shadow-lg rounded-lg">
            <h2 className="text-4xl font-bold text-center mb-6 text-sky-900">Appointment Form</h2>
            <form onSubmit={handleAppointment} className="space-y-4">
                {/* Name Fields */}
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                {/* Contact Information */}
                <div className="flex gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <div className="relative w-full">
                        <input
                            type="date"
                            placeholder="Appointment"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Mobile Number */}
                <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />

                {/* Gender and Appointment Date */}
                <div className="flex gap-4">
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <div className="relative w-full">
                        <input
                            type="date"
                            placeholder="Appointment Date"
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Department and Doctor */}
                <div className="flex gap-4">
                    <select
                        value={department}
                        onChange={(e) => {
                            setDepartment(e.target.value);
                            setDoctorFirstName("");
                            setDoctorLastName("");
                        }}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <option value="" disabled>
                            Our Services
                        </option>
                        {departmentsArray.map((depart, index) => (
                            <option value={depart} key={index}>
                                {depart}
                            </option>
                        ))}
                    </select>
                    <select
                        value={`${doctorFirstName} ${doctorLastName}`}
                        onChange={(e) => {
                            const [firstName, lastName] = e.target.value.split(" ");
                            setDoctorFirstName(firstName);
                            setDoctorLastName(lastName);
                        }}
                        disabled={!department}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <option value="">Select Doctor</option>
                        {doctors
                            .filter((doctor) => doctor.doctorDepartment === department)
                            .map((doctor, index) => (
                                <option
                                    value={`${doctor.firstName} ${doctor.lastName}`}
                                    key={index}
                                >
                                    {doctor.firstName} {doctor.lastName}
                                </option>
                            ))}
                    </select>
                </div>


                {/* Meeting Type */}
                <div className="flex gap-4">
                    <select
                        value={meetingType}
                        onChange={(e) => setMeetingType(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <option value="">Meeting Type</option>
                        <option value="Audio Call">Audio Call - 30 Rs</option>
                        
                    </select>
                </div>

                {/* Address */}
                <textarea
                    rows="4"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter Address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>

                {/* Visited Before */}
                <div className="flex items-center gap-4">
                    <p className="text-gray-700">Have you visited before?</p>
                    <input
                        type="checkbox"
                        checked={hasVisited}
                        onChange={(e) => setHasVisited(e.target.checked)}
                        className="w-5 h-5 border-gray-300 rounded"
                    />
                </div>


                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full p-3 bg-gradient-to-r from-sky-900 to-sky-700 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Book Appointment
                </button>
            </form>
        </div>
    );
};

export default AppointmentForm;
