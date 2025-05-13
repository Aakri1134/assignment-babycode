declare type Students = studen[]

declare type student = {
  name: string
  email: string
  year: number
  roll: string
  department: "ECE" | "CSE" | "ME"
  courses: courses[]
}

declare type courses = {
  name: string
  code: string
  mode: "compulsary" | "elective"
}

declare type err = {
    err : string
}
