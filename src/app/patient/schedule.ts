export interface Schedule
{
    scheduleId:number;
    bookingAppointmentId:number;
    dateStart:string;
    dateEnd:string;
    timeStart:string;
    timeEnd:string;
    status:string;
    patientFirstName:string;
    doctorFirstName:string;
    patientId:number
    
}