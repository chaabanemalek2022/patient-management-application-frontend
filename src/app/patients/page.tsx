"use client";

import {
    useEffect,
    useState
} from 'react';
import {deletePatient, getAllPatients} from '@/services/patients';
import PatientTable from "@/components/PatientTable";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Patients() {
    const router = useRouter();
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        const data = await getAllPatients();
        // @ts-ignore
        setPatients(data);
    };

    const handleDelete = async (id: number) => {
        await deletePatient(id);
        await fetchPatients()
        alert('Patient deleted successfully!');
    }
    const handleUpdate = (id: number) => {
        router.push(`/patients/${id}`)
    }

    return (
        <div className="p-4">
            <div className="flex justify-center items-center">
                <h1 className="text-4xl font-bold mb-4">Patients List</h1>
            </div>

            <PatientTable patients={patients} onDelete={handleDelete} onUpdate={handleUpdate} />
            <div className="p-4 float-right">
                <Link href="/patients/add">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-md text-center max-w-md hover:bg-blue-600 focus:outline-none">Add New Patient</div>
                </Link>
            </div>
        </div>
    );
};
