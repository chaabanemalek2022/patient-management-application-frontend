import axios, { AxiosResponse } from 'axios';
import {Patient} from "@/interfaces/Patient";



const API_BASE_URL = process.env.API_BASE_URL;

export const getAllPatients = async (): Promise<Patient[]> => {
    const response: AxiosResponse<Patient[]> = await axios.get(`${API_BASE_URL}/patients`, {headers: {
            'Content-Type': 'application/json',
        },});
    return response.data;
};

export const getPatientById = async (id: number): Promise<Patient> => {
    const response: AxiosResponse<Patient> = await axios.get(`${API_BASE_URL}/patients/${id}`);
    return response.data;
};

export const addPatient = async (patientData: Partial<Patient>): Promise<Patient> => {
    const response: AxiosResponse<Patient> = await axios.post(`${API_BASE_URL}/patients`, patientData);
    return response.data;
};

export const updatePatient = async (id: number, patientData: Partial<Patient>): Promise<Patient> => {
    const response: AxiosResponse<Patient> = await axios.patch(`${API_BASE_URL}/patients/${id}`, patientData);
    return response.data;
};

export const deletePatient = async (id: number): Promise<void> => {
    const response: AxiosResponse<void> = await axios.delete(`${API_BASE_URL}/patients/${id}`);
    return response.data;
};
