export interface Patient {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;
    address?: string | null;
    phoneNumber?: string | null;
    email: string;
}

export interface NewPatient {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;
    address?: string | null;
    phoneNumber?: string | null;
    email: string;
}
