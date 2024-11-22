

const users = [
  { id: "1", username: "admin1", email: "admin1@example.com", password: "password123", role: "ADMIN" },
];

const promos = [
  { 
    id: "1", 
    name: "Promo 2024", 
    students: [], 
    createdAt: new Date("2024-01-01"), 
    updatedAt: new Date("2024-06-01") 
  },
  { 
    id: "2", 
    name: "Promo 2023", 
    students: [], 
    createdAt: new Date("2023-01-01"), 
    updatedAt: new Date("2023-12-31") 
  },
];

const students = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    contacts: ["+123456789", "johndoe@example.com"],
    birthDate: "2000-05-20",
    email: "johndoe@example.com",
    registrationDate: new Date("2024-02-01"),
    evaluations: [],
    promo: promos[0],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Smith",
    contacts: ["+987654321", "janesmith@example.com"],
    birthDate: "1998-10-10",
    email: "janesmith@example.com",
    registrationDate: new Date("2024-03-01"),
    evaluations: [],
    promo: promos[0],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const competences = [
  { 
    id: "1", 
    name: "JavaScript", 
    description: "Mastery of JavaScript basics", 
    type: "BACKEND", 
    evaluations: [] 
  },
  { 
    id: "2", 
    name: "React", 
    description: "Building interfaces with React", 
    type: "FRONTEND", 
    evaluations: [] 
  },
];

const evaluations  = [
  {
    id: "1",
    student: students[0],
    competence: competences[0],
    level: "IMITATION",
    date: new Date("2024-05-15"),
    comment: "Good understanding of JavaScript basics",
  },
  {
    id: "2",
    student: students[1],
    competence: competences[1],
    level: "ADAPTATION",
    date: new Date("2024-05-20"),
    comment: "Demonstrates ability to build simple React apps",
  },
];

export { users, promos, students, competences, evaluations}
