"use client";

import {
    useEffect,
    useState
} from 'react';

import {useRouter} from "next/navigation";
import {NewPatient} from "@/interfaces/Patient";
import {getPatientById, updatePatient} from "@/services/patients";

export default function UpdatePatient({params}: {params: {id: string}}) {
    const router = useRouter();
    const [patient, setPatient] = useState<NewPatient>({
        firstName: '',
        lastName: '',
        dateOfBirth: new Date(),
        gender: '',
        address: null,
        phoneNumber: null,
        email: ''
    });

    useEffect(() => {
        fetchPatient();
    }, []);

    const fetchPatient = async () => {
        const data = await getPatientById(parseInt(params.id));
        // @ts-ignore
        setPatient(data);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setPatient((prevPatient: NewPatient) => ({
            ...prevPatient,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updatePatient(parseInt(params.id, 10),  patient).then(r => router.push('/patients'));
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Update Patient</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-600 text-sm font-medium mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={patient.firstName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-600 text-sm font-medium mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={patient.lastName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="dateOfBirth" className="block text-gray-600 text-sm font-medium mb-2">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={patient.dateOfBirth.toString().split('T')[0]}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="gender" className="block text-gray-600 text-sm font-medium mb-2">
                        Gender
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        value={patient.gender}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-600 text-sm font-medium mb-2">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={patient.address || ''}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-gray-600 text-sm font-medium mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={patient.phoneNumber || ''}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={patient.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Update Patient
                    </button>
                </div>
            </form>
        </div>
    );
};
