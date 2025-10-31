export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    description?: string;
  }
  
  export const education: Education[] = [
  {
    "id": "msruas",
    "degree": "Bachelor of Technology in Mechanical Engineering",
    "institution": "M. S. Ramaiah University of Applied Sciences",
    "location": "Bangalore, India",
    "startDate": "2018",
    "endDate": "2022",
    "gpa": "7.3/10.0"
  },
  {
    "id": "sri-chaitanya",
    "degree": "Senior Secondary (Science - PCM)",
    "institution": "Sri Chaitanya Vidya Niketan",
    "location": "Visakhapatnam, India",
    "startDate": "2017",
    "endDate": "2018",
    "gpa": "7.2/10.0"
  },
  {
    "id": "dav",
    "degree": "Secondary Education",
    "institution": "D.A.V. Public School",
    "location": "Godda, India",
    "startDate": "2015",
    "endDate": "2016",
    "gpa": "8.0/10.0"
  }
];