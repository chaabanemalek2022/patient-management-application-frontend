import {Patient} from '@/interfaces/Patient';
import DeleteIcon from "@/components/icons/DeleteIcon";
import EditIcon from "@/components/icons/EditIcon";

interface PatientTableProps {
    patients: Patient[];
    onDelete: (id: number) => void;
    onUpdate: (id: number) => void;
}

export default function PatientTable({patients, onDelete, onUpdate}: PatientTableProps) {


    return (

            <table className="min-w-full bg-white border border-gray-300 shadow-md divide-y divide-gray-200">
                <thead>
                <tr className="bg-gray-100 text-left">
                    <th className="p-2">ID</th>
                    <th className="p-2">First Name</th>
                    <th className="p-2">Last Name</th>
                    <th className="p-2">Date of Birth</th>
                    <th className="p-2">Gender</th>
                    <th className="p-2">Address</th>
                    <th className="p-2">Phone Number</th>
                    <th className="p-2">Email</th>
                    <th className="p-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {patients.map((patient: Patient) => (
                    <tr key={patient.id} className="hover:bg-gray-50">
                        <td className="p-2">{patient.id}</td>
                        <td className="p-2">{patient.firstName}</td>
                        <td className="p-2">{patient.lastName}</td>
                        <td className="p-2">{patient.dateOfBirth.toString()}</td>
                        <td className="p-2">{patient.gender}</td>
                        <td className="p-2">{patient.address}</td>
                        <td className="p-2">{patient.phoneNumber}</td>
                        <td className="p-2">{patient.email}</td>
                        <td>
                            <button onClick={() => onDelete(patient.id)} className="text-blue-500 hover:text-blue-700 mr-2">
                            <DeleteIcon/>
                            </button>
                            <button onClick={() => onUpdate(patient.id)} className="text-red-500 hover:text-red-700">
                                <EditIcon/></button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
    );
};
