"use client";

import {
    useState
} from 'react';

import {NewPatient} from "@/interfaces/Patient";
import { useRouter } from 'next/navigation'
import {addPatient} from "@/services/patients";

export default function Add() {
    const router = useRouter();
    const [newPatient, setNewPatient] = useState<NewPatient>({
        firstName: '',
        lastName: '',
        dateOfBirth: new Date(),
        gender: '',
        address: null,
        phoneNumber: null,
        email: '',
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewPatient((prevPatient: NewPatient) => ({
            ...prevPatient,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addPatient(newPatient).then(r => router.push('/patients'));

    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Add New Patient</h2>
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
                            value={newPatient.firstName}
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
                            value={newPatient.lastName}
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
                        value={newPatient.dateOfBirth.toString().split('T')[0]} // Format the date to match the input format
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
                        value={newPatient.gender}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
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
                        value={newPatient.address || ''}
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
                        value={newPatient.phoneNumber || ''}
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
                        value={newPatient.email}
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
                        Add Patient
                    </button>
                </div>
            </form>
        </div>
    );
};
