/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {

  				"name" : "Grey Grissom",
            	"role" : "Web Developer",
  			"contacts" :

  				{

             	 "mobile"	: "415-304-5679",
             	"email"		: "grey.grissom@aya.yale.edu",
             	"github"	: "1gitGrey",
             	"twitter"	: "@greynoir",
              	"location"  : "San Francisco, CA"

            	},

       "welcomeMessage": "Everyday is a ripe opprotunity to grow.",

  			"skills":

  				[

          	"Fluency in 5 Foreign Languages", "Information Sponge", "Diverse Viewpoints", "Critical Abstract Thinker"

        		],


  		"bioPic": "images/grey.jpg",

  			"display":

  										function(){
            								//


          							 }
};

var education = {


			"schools" 	: 		[

			{
				"name":"",
				"location":"",
				"degree":"",
				"majors":["", ""],
				"dates": "2009-2013",
				"url": ""

			},{
				"name":"",
				"location":"",
				"degree":"",
				"majors":["", ""],
				"dates": "2009-2013",
				"url": ""

			}],
			"onlineCourses": [
			{"title" : "",
			"school": "",
			"dates" : "2016-2017",
			"url": ""},
{"title" : "",
			"school": "",
			"dates" : "2016-2017",
			"url": ""}],
			"display": function(){
				//
			}
};

var work = {

	"jobs" : [ {

		"employer" : "",
		"title"   : "",
		"location" : "",
		"dates" : "",
		"description" : ""
	}, {

		"employer" : "",
		"title"   : "",
		"location" : "",
		"dates" : "",
		"description" : ""
	}, {

		"employer" : "",
		"title"   : "",
		"location" : "",
		"dates" : "",
		"description" : ""
	}

	], "display" : function(){
		//
	}


};

var projects = {

	"projects" : [

		{

			"title" : "Sample Project A",
			"dates" : "2014-2015",
			"description" : "Lorem ipsum Pariatur laboris dolor sint in irure magna laborum ut minim id cupidatat sint magna ut dolor anim incididunt in in amet cupidatat pariatur eiusmod ex et irure fugiat ad aliquip. Lorem ipsum Aliqua ad aliqua dolore Excepteur aliqua aliqua in officia Ut irure quis do id nulla dolor do quis laborum culpa sunt tempor Ut aliqua sint incididunt exercitation culpa commodo cupidatat non ea est aliqua.",
			"images" : [ "https://cdn-images-1.medium.com/max/400/1*A7Jt7rwibqxL9wn2FrfcWA.jpeg", "https://cdn-images-1.medium.com/max/400/1*XczJF_uWtQvHbvO5sbjjgw.jpeg"]

		},{

			"title" : "Sample Project B",
			"dates" : "2012-2014",
			"description" : "Lorem ipsum In quis ea ad Duis officia reprehenderit esse consectetur nostrud laboris est sed aliquip ut id qui nostrud id eu amet consectetur cupidatat Ut Ut fugiat minim ea est reprehenderit cillum ea laborum velit veniam adipisicing non eiusmod nostrud qui aliqua nisi laborum ut exercitation Duis cupidatat est ut tempor sit mollit quis Ut qui nulla sed non sed exercitation ea enim culpa pariatur eu dolore ut Excepteur adipisicing aliqua laboris est occaecat dolor in dolore enim pariatur Ut Duis esse Excepteur consequat officia officia aute ut anim sunt laborum deserunt ad dolore dolor nostrud in do ex dolore esse esse tempor in sit mollit elit ullamco proident eiusmod aliquip et aute est dolor reprehenderit pariatur velit fugiat nulla ullamco sit commodo non in ad nostrud non occaecat in deserunt sed cupidatat enim do eu ad adipisicing occaecat nostrud voluptate sit anim esse enim proident aliqua sit eiusmod Duis dolor dolore commodo eu aliquip qui veniam minim pariatur incididunt adipisicing in nostrud velit in eu.",
			"images" : [ "images/proj_b_1.jpg", "images/proj_b_2.jpg"]

		},{

			"title" : "Sample Project C",
			"dates" : "2013",
			"description" : "Lorem ipsum Deserunt pariatur ea ullamco aute quis quis esse esse ex Ut cillum pariatur nostrud reprehenderit in Excepteur eu et mollit non Duis pariatur aute dolor sit ut aliqua ad pariatur proident qui occaecat non deserunt dolore enim veniam Ut irure eiusmod incididunt dolore non non culpa minim sunt sit cupidatat deserunt in pariatur elit ut occaecat occaecat ex fugiat ad laborum qui occaecat dolor deserunt tempor fugiat magna ad Ut tempor Excepteur sunt id tempor culpa magna commodo nostrud et esse nostrud deserunt est do exercitation in elit aliqua quis incididunt tempor ex Ut ex proident deserunt esse ut enim labore reprehenderit ut ullamco minim nostrud laboris eu Excepteur consequat consequat consequat cupidatat voluptate ullamco non veniam irure irure magna cupidatat sit dolore deserunt occaecat eiusmod Ut reprehenderit ea Excepteur nostrud cupidatat cillum nulla Ut cillum dolore proident dolor sint fugiat ea id nostrud ad esse est cillum qui nisi ut reprehenderit fugiat incididunt quis aliqua veniam ex dolor dolor Ut occaecat tempor aliquip dolor labore quis aliquip Excepteur et ut non magna sed officia esse culpa nulla voluptate mollit Duis in magna.",
			"images" : [ "images/proj_c_1.jpg", "images/proj_c_2.jpg"]
		}
	], "display" : function() {
		//
	}

};




// google maps
$('#mapDiv').append(googleMap);