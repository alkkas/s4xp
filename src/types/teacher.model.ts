import { TestBasic } from './common.model'

export interface TeacherTest extends TestBasic {
  questions: { title: string }[]
  table: { name: string; points: number; date: string }[]
}
export interface CourseBasic {
  id: string
  title: string
  author: string
  date: string
}

export interface Course extends CourseBasic {
  file: Blob | undefined
  tests: TestBasic[]
}
