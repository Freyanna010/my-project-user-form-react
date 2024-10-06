export type FormError = {
    lastName: boolean;
    firstName: boolean;
    birthDate: boolean; //TODO: null для кал.
    phone: boolean;
    email: boolean;
  };
  
  export type FormValues = {
    lastName: string;
    firstName: string;
    fatherName: string;
    birthDate: string;
    gender: string; 
    phone: string;
    email: string;
    address: string;
    nameEmployer: string;
  };
  