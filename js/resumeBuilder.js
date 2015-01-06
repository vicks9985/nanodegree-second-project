//formatting index.html using javascript, project two by Victoria Jeffrey

//prepend role, then name
var role = "Front End Architect";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);

var name = "Victoria Daphnee Jeffrey";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedName);

//include bio pic
var bioPic = "images/pic.jpg";
var bio = "bioPic";
var formattedbioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").prepend(formattedbioPic);

//create bio object -- json lint validated
var bio = {
    "name": "Vicky",
    "role": "Student",
    "welcomeMsg": "Welcome to the beginnings of my resume.",
    "skills": ["HTML", "CSS", "Python", "French", "Spanish"],
    "contacts":
        {
        "mobile": "602.300.6981",
        "email": "victoria.daphnee.jeffrey@gmail.com",
        "github": "github.com/vicks9985",
        "location": "phoenix, az"
        }
  }

//display bio information
bio.display = function() {
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  $("#footerContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  $("#footerContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGithub);
  $("#footerContacts").append(formattedGithub);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);
  $("#footerContacts").append(formattedLocation);
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
  $("#header").append(formattedWelcomeMsg);  

  //if info in skills section, display (if statement)
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills [1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills [2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills [3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills [4]);
    $("#skills").append(formattedSkill);
  }
};
  
  //display bio info
  bio.display();

//create work object -- json lint validated
var work = {
  "jobs": [
  {
  "employer": "Awakening Seed School",
  "role": "Assistant Teacher",
  "location": "Phoenix, AZ",
  "dates": "August 2012 - present",
  "description": "Implement curriculum, aid lead teacher, help children navigate"
  },
  {
  "employer": "Language Works",
  "role": "English Teacher",
  "location": "La Paz, Bolivia",
  "dates": "2008-2009",
  "description": "Help various professionals with their working & conversational English skills"
  },
  {
  "employer": "Cornucopia",
  "role": "Customer Service",
  "location": "Montreal, Canada",
  "dates": "Summer 2008",
  "description": "Aid with daily activities, provide bilingual English/French customer service, organize and categorize inventory"
  },
  {
  "employer": "Schwartz Law Firm",
  "role": "Legal Assistant",
  "location": "New York City, NY",
  "dates": "July 2007 - May 2008",
  "description": "Manage daily activities, maintain website, keep track of A/P & A/R, proofread documents, keep an open line with clients"
  }  
  ]
}

//display work object
work.display = function() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].role);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedworkLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
    }
}

  //call work function
  work.display();

//create project object
var projects = {
  "projects": [
    {
    "title":"TherapyConnect.net",
    "dates":"2014",
    "description":"Website dedicated to providing secure communications between therapy providers and caregivers",
    "images": "http://dummyimage.com/125"
    },
    {
    "title":"MYOG, coming soon",
    "dates": 2015,
    "description":"Website created to allow children & parents to create their own educational games",
    "images": "http://dummyimage.com/125"
    },
    {
    "title":"Website Mockup",
    "dates": 2014,
    "description":"Udacity Nanodegree Project 1 Portfolio",
    "images":"http://dummyimage.com/125"
    }
    ]
}


//display projects info
projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
    $(".project-entry:last").append(formattedImage);
  }
}

  //call display function
  projects.display();


  //create education object, ok on jsonlint
  var education = {
    "schools": [
        {
          "name": "Hobart & William Smith Colleges",
          "degree": "Bachelor of Arts",
          "dates": "2003-2007",
          "url": "http://www.hws.edu",
          "major": "Linguistics, with a minor in Ancient Greek"
          }
        ],
   
    "onlineCourses": [
        {
        "title": "Front-End Web Development Nanodegree",
        "school": "Udacity",
        "dates": "2014-2015",
        "url": "http://www.udacity.com"
        },
        {
        "title": "Introduction to Python",
        "school": "Udacity",
        "dates": "2014",
        "url": "http://www.udacity.com"
        },
        {
        "title": "Java for Beginners",
        "school": "Udemy",
        "dates": "2014",
        "url": "http://www.udemy.com"
        }
      ]
}

  education.display = function (){
    for (var school in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name).replace("#", education.schools.url);
      $(".education-entry:last").append(formattedSchoolName);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
      $(".education-entry:last").append(formattedSchoolDegree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
      $(".education-entry:last").append(formattedSchoolDates);
      var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
      $(".education-entry:last").append(formattedMajor);
    }
  
    $(".education-entry:last").append(HTMLonlineClasses);

    for(var onlineCourse in education.onlineCourses) {
      formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title).replace("#", education.onlineCourses[onlineCourse].url);
      formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
      $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
      formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
      $(".education-entry:last").append(formattedOnlineDates);
      formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url).replace("#", education.onlineCourses[onlineCourse].url);
      $(".education-entry:last").append(formattedOnlineURL);
    }
  }

  //display education
  education.display();


  //internationalize name display
  function inName(name) {
    var name_var = name.trim().split(" ");
    name_var[0] = name_var[0].slice(0,1).toUpperCase() + name_var[0].slice(1).toLowerCase();
    name_var[1] = name_var[1].toUpperCase();
    return name_var[0] + " " + name_var[1];
  };

   //display international name
  inName(name);

  //append internationalize button
  $("#main").append(internationalizeButton);
  
  //append google map
  $("#mapDiv").append(googleMap);
