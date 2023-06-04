import axios, { AxiosError } from "axios";
import Admin from './Models/Admin';
import Institute from "./Models/Institute";
const BASE_URL = 'http://localhost:8080/attendance-backend';

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
   console.log(response.data)
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
 export const resetPassword = async (email:string) => {
  try {
   const response = await api.post('/admin/resetPassword', {
    firebaseid:1,
    email,
  });
   console.log(response.data)
    return response.data
 } catch (error) {
   console.error('Error occurred while logging in:', error);
   throw error;
 }
 };
 export const addDevice = async (data:any) => {
  try {
   const response = await api.post('/admin/addDevice', data);
   console.log(response.data)
    return response.data
 } catch (error) {
   console.error('Error occurred while logging in:', error);
   throw error;
 }
 };
 export const clearFirebase = async () => {
  try {
   const response = await api.get('/admin/deleteAll');
   console.log(response.data)
    return response.data
 } catch (error) {
   console.error('Error occurred while logging in:', error);
   throw error;
 }
 };

//  -------------Institue-------------
export const instituteLogin = async (firebaseId: string) => {
  try {
   const response = await api.post('/institute/login', {
     firebaseId,
   });
   const admin=Institute.parse(response.data);
   return admin;
 } catch (error) {
   console.error('Error occurred while logging in:', error);
   throw error;
 }
 };

 export const registerStaff = async (data: any) => {
  try {
    console.log("axios");
    
    console.log(data)
   const response = await api.post('/institute/createNewStaff', 
     data,
   );
   const admin=Admin.parse(response.data);
   return admin;
 } catch (error) {
   console.error('Error occurred while logging in:', error);
   throw error;
 }
 };

 export const getAllStaffs = async () => {
  try {
    console.log("axios");
    
   const response = await api.post('/institute/getAllStaffs',{
    id:1
   });
   console.log(response.data)
   return response.data
  } catch (error) {
    console.error('Error occurred while logging in:', error);
    throw error;
  }

 };
 export const registerNewCourse = async (data: any) => {
  try {
    console.log("axios");
    
    console.log(data)
   const response = await api.post('/institute/registerNewCourse', 
     data,
   );
   const admin=Admin.parse(response.data);
   return admin;
 } catch (error) {
   console.error('Error occurred while logging in:', error);
   throw error;
 }
 };
 export const getAllCourses = async (id:number) => {
  try {
   const response = await api.post('/institute/getAllCourses',{id:id});
   return response.data;
 } catch (error) {
   console.error('Error occurred while logging in:', error);
   throw error;
 }
 };

 export const registerStudent = async (data: any) => {
  try {
    console.log("axios");
    
    console.log(data)
   const response = await api.post('/institute/registerNewStudent', 
     data,
   );
    const institue =Institute.parse(response.data)
    return institue;
  } catch (error) {
    console.error('Error occurred while logging in:', error);
    throw error;
  }
 };
 export const createNewSubject = async (data: any) => {
  try {
    console.log("axios");
    
    console.log(data)
   const response = await api.post('/institute/createNewSubject', 
     data,
   );
    const institue =Institute.parse(response.data)
    return institue;
  } catch (error) {
    console.error('Error occurred while logging in:', error);
    throw error;
  }
 };
 export const getInstituteWithCoursesAndSubjects = async (id:number) => {
  try {
   const response = await api.post('/institute/getInstituteWithCoursesAndSubjects',{id:id});
   return response.data;
 } catch (error) {
   console.error('Error occurred while logging in:', error);
   throw error;
 }
 };
 export const getAttendaceBySubject = async (data:any) => {
  try {
   const response = await api.post('/institute/getAttendaceBySubject',data);
   return response.data;
 } catch (error) {
   console.error('Error occurred while logging in:', error);
   throw error;
  }
 };
 export const getAttendanceByInstitute = async (data:any) => {
  try {
   const response = await api.post('/institute/getAttendanceByInstitute',data);
   return response.data;
 } catch (error) {
   console.error('Error occurred while logging in:', error);
   throw error;
  }
 };