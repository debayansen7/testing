//js files for debayansen.com
$(document).ready(function(){pageObject.init();});

var pageObject = {
    init: function(){
        pageObject.about();
        pageObject.skills();
        pageObject.experience();
        pageObject.projects();
        pageObject.artworks();
        pageObject.mycourses();
        pageObject.contact();
        console.log("Loading Complete");
        // console.clear();
    },
    about: function(){
        $('.about > p').html(ds.summary);
    },
    skills: function() {

    },
    experience: function(){

    },
    projects: function(){

    },
    artworks: function(){
        var arts = '';
        for(var i=0; i<ds.artworks.length; i++){
            arts += '<div class="imgBox col-sm-3 col-xs-12">';
            arts += '<a href="'+ds.artworks[i].artname+'" class="thumbnail">';
            arts += '<img src='+ds.artworks[i].url+' alt='+ds.artworks[i].artname+' />';
            arts += '</a></div>';
        }
        console.log(arts);
        $('.artwork > .artGallery').html(arts);
    },
    mycourses: function(){

    },
    contact:function(){
        $('.contact > .email').attr('href','mailto:'+ds.contact.Email).html(ds.contact.Email);
        var $contact = ds.contact.connections;
        var links = "";
        var $contactLength = $contact.length;
        for(var i =0; i< $contactLength; i++){
            links += "<div class='col-xm-12 col-sm-3 col-lg-3'><a href="+$contact[i].url+"><img src="+$contact[i].icon+" /></a></div>";
        }
        // console.log(links);
        $(".contact > .connections").html(links);
    }
}

var ds = {
    "contact":{
        "Address":"AE-302, Sector-1, Salt Lake, Kolkata-700064, India",
        "Mobile":"9674308102",
        "Email":"debayansen7@gmail.com",
        "Website":"www.debayansen.com",
        "connections":[
            {
                "name":"facebook",
                "url":"https://m.facebook.com/debayan.sen1",
                "icon":"images/facebook.png"
            },
            {
                "name":"googleplus",
                "url":"https://plus.google.com/u/0/+DebayanSen7",
                "icon":"images/google.png"
            },
            {
                "name":"linkedin",
                "url":"https://in.linkedin.com/in/debayansen7",
                "icon":"images/linkedin.png"
            }

        ]
    },
    "summary":"3 + years’ experience in the Information Technology domain. Been a part of development team(s) as software engineer on different projects using technologies like HTML5, CSS3, JavaScript, JQuery,  JSXGraph, JSON, XML, SQL, Bootstrap, AngularJS, NodeJS, etc.<br>I am hard working, determined, proactive, and focused. I understand the business domain well and the roles required for its success. I am interested to work and accept challenging roles that will allow me to diversify and grow.<br>My career objective is utilizes and sharpens my skill sets and allows me to grow to my full potential. I am seeking a challenging role in a company that provides opportunities to be creative and to participate in ground-breaking projects.",
    "skills":[
        {
            "Type":"FrontEnd Web development",
            "tech":[
                {
                    "name":"HTML",
                    "rating":"5"
                },
                {
                    "name":"CSS",
                    "rating":"5"
                },
                {
                    "name":"JavaScript",
                    "rating":"5"
                }
            ]
        }


    ],
    "experience":[
        {
            "Current":"true",
            "SDate":"01.03.2016",
            "EndDate":"",
            "Company":"Emami Frank Ross",
            "Role": "Software Developer" ,
            "Description": ""
        },
        {
            "Current":"false",
            "SDate":"01.03.2016",
            "EndDate":"",
            "Company":"Emami Frank Ross",
            "Role": "Software Developer" ,
            "Description": ""
        },
        {
            "Current":"false",
            "SDate":"01.03.2016",
            "EndDate":"",
            "Company":"Emami Frank Ross",
            "Role": "Software Developer" ,
            "Description": ""
        }
    ],
    "projects":[],
    "artworks":[
        {
            "artname":"1",
            "startdate":"07/01/1989",
            "price": "",
            "url":"1"
        },
        {
            "artname":"2",
            "startdate":"07/01/1989",
            "price": "",
            "url":"2"
        },
        {
            "artname":"3",
            "startdate":"07/01/1989",
            "price": "",
            "url":"3"
        },
        {
            "artname":"4",
            "startdate":"07/01/1989",
            "price": "",
            "url":"4"
        },
        {
            "artname":"5",
            "startdate":"07/01/1989",
            "price": "",
            "url":"5"
        }
    ],
    "mycourses":[
        {
        "name":"Become exceptional in HTML and HMTL5",
        "url":""
        }
    ]

}
