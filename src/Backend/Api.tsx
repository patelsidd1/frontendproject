import axios, { AxiosError } from "axios";
import Admin from './Models/Admin';
import Institute from "./Models/Institute";
const BASE_URL = 'https://e28c-2405-201-600d-d107-d05d-5460-8a8b-bdf0.ngrok-free.app/attendance-backend';

const api = axios.create({
  baseURL: BASE_URL,
});

export const loginAdmin = async (firebaseId: string) => {
  try {
   const response = await api.post('/admin/login', {
     firebaseId,
   });
   const admin=Admin.parse(response.data);
   return admin;
 } catch (error) {
   console.error('Error occurred while logging in:', error);
   throw error;
 }
 };


 export const getAllAdmins = async () => {
  try {
   const response = await api.get('/admin/getAdminList');
   return response.data;
 } catch (error) {
   console.error('Error occurred while logging in:', error);
   throw error;
 }
 };


 export const registerAdmin = async (data: any) => {
  try {
    console.log("axios");
    
    console.log(data)
   const response = await api.post('/admin/registerNewAdmin', 
     data,
   );
   const admin=Admin.parse(response.data);
   return admin;
 } catch (error) {
   console.error('Error occurred while logging in:', error);
   throw error;
 }
 };



 export const registerInstitute = async (data: any) => {
  try {
    console.log("axios");
    
    console.log(data)
   const response = await api.post('/admin/registerInstitute', 
     data,
   );
    const institue =Institute.parse(response.data)
    return institue;
  } catch (error) {
    console.error('Error occurred while logging in:', error);
    throw error;
  }
 };


 export const getAllInstitutes = async () => {
  try {
    console.log("axios");
    
   const response = await api.get('/admin/getAllInstitutes');
   return response.data
  } catch (error) {
    console.error('Error occurred while logging in:', error);
    throw error;
  }
 };


 export const getAllStaffs = async () => {
  try {
    console.log("axios");
    
   const response = await api.get('/admin/getAllStaffs');
   return response.data
  } catch (error) {
    console.error('Error occurred while logging in:', error);
    throw error;
  }
 };

 export const getAllInstitutes = async () => {
  try {
    console.log("axios");
    
   const response = await api.get('/admin/getAllInstitutes');
   return response.data
  } catch (error) {
    console.error('Error occurred while logging in:', error);
    throw error;
  }
 };
 export const getAllStaffs = async () => {
  try {
    console.log("axios");
    
   const response = await api.get('/admin/getAllStaffs');
   return response.data
  } catch (error) {
    console.error('Error occurred while logging in:', error);
    throw error;
  }
 };



 export const getAllDevices = async () => {
  try {
   const response = await api.get('/admin/getAllDevices');
   console.log(response.data)
    return response.data
 } catch (error) {
   console.error('Error occurred while logging in:', error);
   throw error;
 }
 };
