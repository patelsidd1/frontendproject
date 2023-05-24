import axios, { AxiosError } from "axios";
import Admin from './Models/Admin';
const BASE_URL = 'https://bfb9-2405-201-600d-d107-29e3-9193-62da-7375.ngrok-free.app/attendance-backend';

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
  //  
  console.log(response.data)
  //  return institute;
 } catch (error) {
   console.error('Error occurred while logging in:', error);
   throw error;
 }
 };
