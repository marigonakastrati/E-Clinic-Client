export interface Patient
{
    id: number;
    firstname: string;
    lastname: string;
    newPassword: string;
    currentPassword: string;
    confirmPassword: string;
    genderId: number;
    martialStatusId: number;
    birthCityId: number;
    cityId: number;
    countryId: number;
    religionId: number;
    addressName: string;
    gender: string;
    martialStatus: string;
    birthCity: string
    religion: string;
    country: string;
    city: string;
    email: string;
    buildingNumber: string;
    dateOfBirth:Date;
}