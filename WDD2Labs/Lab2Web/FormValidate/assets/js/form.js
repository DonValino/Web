$(document).ready(function () {

    $('#register').validate({ // initialize the plugin
        rules: {
            fName: {
                required: true,
            },
            lName: {
                required: true,
                minlength: 5
            },
			email: {
				required: true,
				email: true
			},
			pwd: {
				required: true,
				minlength: 7
			},
			pwdConfirm: {
				required: true,
				minlength: 7,
				equalTo: "#pwd"		
			}
        }, // end of rules
		messages: {
			fName: {
				required: "Please enter your first name"
			},
			lName: {
				required: "Please enter your last name"
			},
			email: {
				required: "Please enter your email address",
				email: "Please enter a valid email address"			
			},
			pwd: {
				required: "Please enter a password",
				minlength: "Minimum lenght is 7 characters"			
			},
			pwdConfirm: {
				equalTo: "The passwords entered don't match"
			}
		} // end of messages
    });
	// After validation
});