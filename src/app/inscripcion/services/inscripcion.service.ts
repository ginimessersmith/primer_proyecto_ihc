import { Injectable } from '@angular/core';
import { DataStudent } from '../interfaces/data-student.interface';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  private listStudent?:DataStudent[]
  constructor() { }

  private insertParents(fullname:string,ci:number,phone:number,type:string){
    if(type=='father'){
      const newStudent:DataStudent={
          fullname_f:fullname,
          ci_f:ci,
          phone_f:phone
      }
      this.listStudent?.unshift(newStudent)
    }

    if(type=='mother'){
      const newStudent:DataStudent={
          fullname_m:fullname,
          ci_m:ci,
          phone_m:phone
      }
      this.listStudent?.unshift(newStudent)
    }

    if(type=='parent'){
      const newStudent:DataStudent={
          fullname_t:fullname,
          ci_t:ci,
          phone_t:phone
      }
      this.listStudent?.unshift(newStudent)
    }
  }

  private insertDataStudents(lastnameFather:string, lastnameMother:string,nameStudent:string,birthStudent:string, dep:string, prov:string, sexoStudent:string){

  }
}
