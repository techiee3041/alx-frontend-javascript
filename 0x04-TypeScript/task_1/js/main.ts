export interface Teacher {
  readonly firstName: string
  readonly lastName: string
  fullTimeEmployee: boolean
  yearsOfExperience?: number
  location: string
  [index: string]: any
}

export interface Directors extends Teacher {
  numberOfReports: number
}

export type printTeacherFunction = (firstName: string, lastName: string) => string

export function printTeacher (firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`
}

export type IStudentClassConstructor = new (firstName: string, lastName: string) => IStudentClass

export interface IStudentClass {
  workOnHomework: () => string
  displayName: () => string
}

export class StudentClass implements IStudentClass {
  private readonly _firstName!: string
  private readonly _lastName!: string

  constructor (firstName: string, lastName: string) {
    this._firstName = firstName
    this._lastName = lastName
  }

  workOnHomework () {
    return 'Currently working'
  }

  displayName () {
    return this._firstName
  }
}

export function createStudent (ctor: IStudentClassConstructor, firstName: string, lastName: string): IStudentClass {
  return new ctor(firstName, lastName)
}
