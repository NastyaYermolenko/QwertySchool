import $ from 'jquery';
import * as firebase from 'firebase';

document.title = "Task4";
var config = {
    apiKey: "AIzaSyA3Ysve_TbV95u6Xxne8Nb7fFnwCjfcRVE",
    authDomain: "qwertyschoollab.firebaseapp.com",
    databaseURL: "https://qwertyschoollab.firebaseio.com",
    projectId: "qwertyschoollab",
    storageBucket: "",
    messagingSenderId: "510817454286"
};
firebase.initializeApp(config);

CheckUser();

$(document).ready(function () {
    var paragraphsInContenet = $('.content p');

    $('#deleteP').on("click touch", function () {
        $('.content p').last().remove();
    });

    $('#user_fontsize').bind("keyup mouseup", function () {
        var fontSizeValue = $(this).val();
        if (fontSizeValue >= 8 && fontSizeValue <= 24) {
            paragraphsInContenet.css("font-size", Math.round(fontSizeValue) + 'px');
        }

    });

    $('#user_background').on('input', function () {
        paragraphsInContenet.css("background-color", $(this).val());
    });

    $('#user_fontfamily').bind('change', function () {
        paragraphsInContenet.css('font-family', $(this).val());
    });

    $('#auth').on("click touch", function () {
        var email = document.getElementById('auth_login').value;
        var password = document.getElementById('auth_password').value;
        SignIn(email, password);
        $('#auth_form').css('display', 'none');
    });

    $('#register').on("click touch", function () {
        var email = document.getElementById('register_login').value;
        var password = document.getElementById('register_password').value;
        var username = document.getElementById("username").value;
        var confirmPassword = document.getElementById("register_confirmation").value;

        if (password !== confirmPassword) {
            $('#register_form').modal('toggle');
            DisplayError("Passwords do not match.");
            return false;
        }

        SignUp(email, password, username);
        $('#register_form').css('display', 'none');
    });

    $("#SignOutButton").on("click touch", function () {
        SignOut();
    });
});

function SignIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function (error) {
            // Handle Errors here.
            var errorMessage = error.message;
            console.log(errorMessage);
            DisplayError(errorMessage);
            console.log(error);
        });
}

function SignUp(email, password, displayName) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
        function (user) {
            return user.updateProfile({
                displayName: displayName
            }).then(function (data) {
                update_user_info(firebase.auth().currentUser);
            });
        }).catch(function (error) {
        // Handle Errors here.
        //var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        DisplayError(errorMessage);
    });
}

function SignOut() {
    firebase.auth().signOut().then(function () {
        console.log('Signed Out');
    }, function (error) {
        console.error('Sign Out Error', error);
    });
}

function CheckUser() {
    firebase.auth().onAuthStateChanged(function (user) {
        update_user_info(user);
    });
}

function DisplayError(message) {
    var $alert = $('<div class="alert alert-danger"></div>');
    $alert.text(message);
    $alert.hide();
    $('.content').prepend($alert);
    $alert.fadeTo(5000, 500).slideUp(500, function () {
        $alert.slideUp(500);
    });
}

function update_user_info(user) {
    if (user) {
        // User is signed in.
        $("#sign_buttons").css('display', 'none');
        $("#greeting_for_user").css('display', 'flex');
        $("#greeting_for_user h2").text("Hi, " + user.displayName + "!");
        $("#sidebar").css('display', 'block');
    } else {
        // No user is signed in.
        $("#sign_buttons").css('display', 'flex');
        $("#greeting_for_user").css('display', 'none');
        $("#sidebar").css('display', 'none');
    }
}