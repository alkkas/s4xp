export interface TestBasic {
  id: string
  title: string
  date: string
}

export interface LoginObj {
  email: string
  password: string
}
export type jwt = { jwt: string }
export interface RegObj {
  name: string
  surname: string
  email: string
  password: string
}

export interface Person {
  type: 'student' | 'teacher'
  name: string
  surname: string
  id: string
}
