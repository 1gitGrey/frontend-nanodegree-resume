var bio = {
    "name": "Grey Grissom",
    "role": "Web Developer",
    "contacts": {
        "mobile": "415-304-5679",
        "email": "grey.grissom@aya.yale.edu",
        "github": "1gitGrey",
        "twitter": "@greynoir",
        "location": "San Francisco, CA"
    },
    "welcomeMessage": "Everyday is a ripe opprotunity to grow.",
    "skills": [
        "Fluency in 5 Foreign Languages",
        "Information Sponge",
        "Diverse Viewpoints",
        "Critical Abstract Thinker"
    ],
    "biopic": "images/grey.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        var formattedContactArray = [];
        formattedContactArray.push(HTMLemail.replace("%data%", bio.contacts.email));
        formattedContactArray.push(HTMLgithub.replace("%data%", bio.contacts.github));
        formattedContactArray.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        formattedContactArray.push(HTMLlocation.replace("%data%", bio.contacts.location));


        $("#header").prepend(formattedRole, formattedName);
        $("#header").append(formattedBioPic, formattedWelcomeMsg);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            //for(i in bio.skills) {
            //	$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
            //}

            var bioSkillsArray = bio.skills;
            for (var index = 0; index < bioSkillsArray.length; index++) {

                $("#skills").append(HTMLskills.replace("%data%", bioSkillsArray[index]));
            }


        }

        for (var indexCount = 0; indexCount < formattedContactArray.length; indexCount++) {
            $("#topContacts").append(formattedContactArray[indexCount]);
            $("#footerContacts").append(formattedContactArray[indexCount]);
        }

    }
};


var education = {

    "schools": [

        {
            "name": "Yale University",
            "location": "New Haven, CT",
            "degree": "Bachelor Fine Arts",
            "majors": ["Fine Art Photography", "Film Production"],
            "dates": "2009-2013",
            "url": "http://yale.edu"

        }, {
            "name": "Campbell High School",
            "location": "Smyrna, GA",
            "degree": "Georgia HS Diploma",
            "majors": ["HL Visual Arts ", "HL Mathematics "],
            "dates": "2009-2013",
            "url": "http://www.cobbk12.org/campbellhs/"

        }, {
            "name": "International Baccalaureate Programme",
            "location": "Augsburg, Germany",
            "degree": "Arbitur Exams",
            "majors": ["SL Physics", "Ethik", "Kunst", "Juristerei"],
            "dates": "2008-2010",
            "url": "http://ibo.edu"
        }
    ],
    "onlineCourses": [{
        "title": "NanoDegree Program -- Introduction to CS",
                //  for(img in projects.projects[i].images) {
                //      var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                //      $(".project-entry:last").append(formattedProjectImage);
                //  }

        "school": "Udacity",
        "dates": "2016-2017",
        "url": "https://classroom.udacity.com/nanodegrees/nd000"
    }, {
        "title": "NanoDegree Program -- Front-End Web Development",
        "school": "Udacity",
        "dates": "2016-Current",
        "url": "https://classroom.udacity.com/nanodegrees/nd200"
    }],

    "display": function() {
        if (education.schools.length > 0 || education.onlineCourses.length > 0) {
            for (var i = 0; i < education.schools.length; i++) {
                $("#education").append(HTMLschoolStart);

                var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
                var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
                var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
                var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

                $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
                $(".education-entry:last").append(formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajors);
            }

            if (education.onlineCourses.length > 0) {
                $("#education").append(HTMLonlineClasses);
                for (var place = 0; place < education.onlineCourses.length; place++) {
                    $("#education").append(HTMLschoolStart);
                    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[place].title).replace("#", education.onlineCourses[place].url);
                    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[place].school).replace("#", education.schools[place].url);
                    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[place].dates);
                    //var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                    $(".education-entry:last").append(formattedOnlineDates);
                    //$(".education-entry:last").append(formattedOnlineURL);
                }
            }

        }
    }
};

var work = {

    "jobs": [{

            "employer": "PepsiCo",
            "title": "Brand Marketing Analyst",
            "location": "Purchase, NY",
            "dates": "2008-2010",
            "description": "Lorem ipsum Sit in labore Excepteur adipisicing aute aliquip dolore nostrud non anim ea dolore magna culpa irure reprehenderit adipisicing laboris reprehenderit in cillum aliqua eiusmod ex reprehenderit voluptate."
        }, {

            "employer": "Imaginity Seragini",
            "title": "Regional Brand Consultant",
            "location": "Buenos Aires, Argentina",
            "dates": "2008",
            "description": "Lorem ipsum Culpa sit nisi Ut incididunt mollit aliqua non magna ea veniam nulla anim culpa aute eiusmod enim velit incididunt ea occaecat ex cillum Ut officia enim labore commodo in."
        }, {

            "employer": "Education First",
            "title": "EF360 Business Analyst",
            "location": "London, UK",
            "dates": "2013-2015",
            "description": "Lorem ipsum Fugiat consectetur et pariatur sit sed cillum cillum fugiat officia dolor dolore id pariatur veniam non proident irure labore Duis nulla consectetur proident esse Ut cillum quis in nisi pariatur amet labore cupidatat."
        }

    ],
    "display": function() {
        for (var i = 0; i < work.jobs.length; i++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }


    }
};

var projects = {

    "projects": [

        {

            "title": "Sample Project A",
            "dates": "2014-2015",
            "description": "Lorem ipsum Pariatur laboris dolor sint in irure magna laborum ut minim id cupidatat sint magna ut dolor anim incididunt in in amet cupidatat pariatur eiusmod ex et irure fugiat ad aliquip. Lorem ipsum Aliqua ad aliqua dolore Excepteur aliqua aliqua in officia Ut irure quis do id nulla dolor do quis laborum culpa sunt tempor Ut aliqua sint incididunt exercitation culpa commodo cupidatat non ea est aliqua.",
            "images": ["https://cdn-images-1.medium.com/max/400/1*A7Jt7rwibqxL9wn2FrfcWA.jpeg", "https://cdn-images-1.medium.com/max/400/1*XczJF_uWtQvHbvO5sbjjgw.jpeg"]

        }, {

            "title": "Sample Project B",
            "dates": "2012-2014",
            "description": "Lorem ipsum In quis ea ad Duis officia reprehenderit esse consectetur nostrud laboris est sed aliquip ut id qui nostrud id eu amet consectetur cupidatat Ut Ut fugiat minim ea est reprehenderit cillum ea laborum velit veniam adipisicing non eiusmod nostrud qui aliqua nisi laborum ut exercitation Duis cupidatat est ut tempor sit mollit quis Ut qui nulla sed non sed exercitation ea enim culpa pariatur eu dolore ut Excepteur adipisicing aliqua laboris est occaecat dolor in dolore enim pariatur Ut Duis esse Excepteur consequat officia officia aute ut anim sunt laborum deserunt ad dolore dolor nostrud in do ex dolore esse esse tempor in sit mollit elit ullamco proident eiusmod aliquip et aute est dolor reprehenderit pariatur velit fugiat nulla ullamco sit commodo non in ad nostrud non occaecat in deserunt sed cupidatat enim do eu ad adipisicing occaecat nostrud voluptate sit anim esse enim proident aliqua sit eiusmod Duis dolor dolore commodo eu aliquip qui veniam minim pariatur incididunt adipisicing in nostrud velit in eu.",
            "images": ["images/proj_b_1.jpg", "images/proj_b_2.jpg"]

        }, {

            "title": "Sample Project C",
            "dates": "2013",
            "description": "Lorem ipsum Deserunt pariatur ea ullamco aute quis quis esse esse ex Ut cillum pariatur nostrud reprehenderit in Excepteur eu et mollit non Duis pariatur aute dolor sit ut aliqua ad pariatur proident qui occaecat non deserunt dolore enim veniam Ut irure eiusmod incididunt dolore non non culpa minim sunt sit cupidatat deserunt in pariatur elit ut occaecat occaecat ex fugiat ad laborum qui occaecat dolor deserunt tempor fugiat magna ad Ut tempor Excepteur sunt id tempor culpa magna commodo nostrud et esse nostrud deserunt est do exercitation in elit aliqua quis incididunt tempor ex Ut ex proident deserunt esse ut enim labore reprehenderit ut ullamco minim nostrud laboris eu Excepteur consequat consequat consequat cupidatat voluptate ullamco non veniam irure irure magna cupidatat sit dolore deserunt occaecat eiusmod Ut reprehenderit ea Excepteur nostrud cupidatat cillum nulla Ut cillum dolore proident dolor sint fugiat ea id nostrud ad esse est cillum qui nisi ut reprehenderit fugiat incididunt quis aliqua veniam ex dolor dolor Ut occaecat tempor aliquip dolor labore quis aliquip Excepteur et ut non magna sed officia esse culpa nulla voluptate mollit Duis in magna.",
            "images": ["images/proj_c_1.jpg", "images/proj_c_2.jpg"]
        }
    ],
    "display": function() {
        if (projects.projects.length > 0) {
            for (var i = 0; i < projects.projects.length; i++) {
                $("#projects").append(HTMLprojectStart);

                var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
                var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
                var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

                $(".project-entry:last").append(formattedProjectTitle);
                $(".project-entry:last").append(formattedProjectDates);
                $(".project-entry:last").append(formattedProjectDescription);

                for (var img = 0; img < projects.projects[i].images.length; img++) {
                    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                    $(".project-entry:last").append(formattedProjectImage);
                }
            }

        }
    }
};


function inName(name) {

    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase(); + name[0].slice[1].toLowerCase();
    return name[0] + " " + name[1];
}


bio.display();
work.display();
education.display();
projects.display();


// google maps
$('#mapDiv').append(googleMap);
$('#main').append(internationalizeButton);