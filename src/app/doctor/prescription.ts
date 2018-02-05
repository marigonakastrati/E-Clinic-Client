import { Medicine } from "./medicine";

export interface Prescription
{
    diagnoses:string;
    medicines:Medicine[];    
    bookingAppointmentId:number;
    dateStart:string;
    dateEnd:string;
    timeStart:string;
    timeEnd:string;
}