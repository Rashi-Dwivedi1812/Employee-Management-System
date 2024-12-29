localStorage.clear()

const employees = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Quarterly Report",
        taskDate: "2024-01-10",
        description: "Compile and analyze quarterly sales data.",
        category: "Reporting"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Organize Team Meeting",
        taskDate: "2024-01-05",
        description: "Schedule and organize the January team meeting.",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update CRM Records",
        taskDate: "2023-12-20",
        description: "Ensure all client records are up-to-date in the CRM.",
        category: "Data Entry"
      }
    ]
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design Marketing Brochure",
        taskDate: "2023-12-15",
        description: "Create a brochure for the new marketing campaign.",
        category: "Design"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop Social Media Calendar",
        taskDate: "2024-01-03",
        description: "Plan social media posts for the next quarter.",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Submit Project Proposal",
        taskDate: "2023-12-18",
        description: "Prepare and submit the proposal for the client project.",
        category: "Project Management"
      }
    ]
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Conduct Market Analysis",
        taskDate: "2024-01-07",
        description: "Research competitors and market trends.",
        category: "Research"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Onboard New Clients",
        taskDate: "2024-01-05",
        description: "Guide new clients through the onboarding process.",
        category: "Client Relations"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Finalize Budget Plan",
        taskDate: "2023-12-22",
        description: "Review and finalize the annual budget.",
        category: "Finance"
      }
    ]
  },
  {
    name: "Bob Brown",
    email: "bob.brown@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update IT Systems",
        taskDate: "2023-12-12",
        description: "Install updates to internal systems and software.",
        category: "IT"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Monitor Network Security",
        taskDate: "2024-01-02",
        description: "Ensure network security protocols are followed.",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Server Downtime Issue",
        taskDate: "2023-12-18",
        description: "Investigate and resolve server outages.",
        category: "IT"
      }
    ]
  },
  {
    name: "Rashi Dwivedi",
    email: "rashidwivedi1812@gmail.com",
    password: "1812",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Training Session",
        taskDate: "2024-01-06",
        description: "Organize materials for the employee training session.",
        category: "Training"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Draft HR Policy Update",
        taskDate: "2024-01-08",
        description: "Review and update HR policies.",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Respond to Employee Queries",
        taskDate: "2023-12-23",
        description: "Address questions submitted by employees.",
        category: "Support"
      }
    ]
  }
];

  
  const admin = [
    {
      "name": "Admin User",
      "email": "admin@example.com",
      "password": "123"
    }
  ];


export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return{employees,admin}
}