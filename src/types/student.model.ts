import { TestBasic } from './common.model'

export interface StudentTest extends TestBasic {
  questions: { title: string }[]
}

export interface Answer {
  title: string
  answer: string
}
