type Nivel='Inicia' | 'Primaria' |'Secundaria'

export interface DataStudent{

  fullname_f?:string,
  ci_f?:number,
  phone_f?:number,
  fullname_m?:string,
  ci_m?:number,
  phone_m?:number,
  fullname_t?:string,
  ci_t?:number,
  phone_t?:number,
  son?:Student[]


}

export interface School{
  nombre?:string,
  direccion?:string,
  cursos?:string[],
  nivel?:Nivel
}

export interface Student{
  name?:string,
  lastNameStudent_f?:string,
  lastNameStudent_m?:string,
  data_birth?:string,
  departamento?:string,
  provincia?:string,
  ciudad?:string,
  school?:string,
  sexo?:string,
  data_school?:School
}
