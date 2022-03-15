const defaultTimer = 179;
let countDownTime = 180;
let countDownTimer = $('.time');
let timerInterval;
let isStopped = false;

const OTPSwitch = document.getElementById('OTPswitch');
let OTPgenerated;
let OTP;
let otpInterval;


function OTPchecker(){
    if(OTPSwitch.checked){
        $('.countdown-timer').removeClass('hidden');
        $('.otp-bar').removeClass('hidden');
        $('.recent-student').removeClass('hidden');
        $('#attendance-record-section').addClass('hidden');
        OTPgenerator();
        otpInterval = setInterval(OTPgenerator, 180000);
        timerInterval = setInterval(runTimer, 1000);
    }else{
        clearInterval(otpInterval);
        clearInterval(timerInterval);
        isStopped = true;
        $('.countdown-timer').addClass('hidden');
        $('.otp-bar').addClass('hidden');
        $('.recent-student').addClass('hidden');
        $('#attendance-record-section').removeClass('hidden');
    }
}

function OTPgenerator(){
    OTPgenerated = Math.floor(Math.random() * 1000);
        if(OTPgenerated <100){
            OTP = '0'+ String(OTPgenerated);
        }
        else if(OTPgenerated < 10){
            OTP = '00' + String(OTPgenerated);
        }else{
            OTP = String(OTPgenerated);
        }
        console.log(OTP);
        // .each() is forEach which auto pass the 
        $('.otp-code').each(function(index){
            // this referring to refer to the current DOM element
            $(this).children().html(String(OTP).charAt(index)); 
        });
}

function timeString(){
    let minutes = String(Math.trunc(countDownTime/60));
    let seconds = String(countDownTime % 60 );
    if(minutes.length === 1){
        minutes = "0" + minutes;
    }
    if(seconds.length == 1){
        seconds = "0" + seconds;
    }
    return minutes + seconds;
}

function showTimer(){
    let time = timeString();
    countDownTimer.each(function(index){
        $(this).html(time.charAt(index));
    });
}

function runTimer(){
    countDownTime--;
    if (isStopped){
        countDownTime = defaultTimer;
        isStopped = false;
    }            
    if(countDownTime === 0){
        // clearInterval(timerInterval);
        countDownTime = defaultTimer;
    }
    showTimer();
}

let table = document.getElementById('attendance-record');
let rows = table.getElementsByTagName('tr');
let presentBtn = document.getElementsByClassName('btn-present');
let absentBtn = document.getElementsByClassName('btn-absent');
Array.from(rows).forEach((element, index) => {
    console.log(element.cells[2].innerHTML);
    if(element.cells[2].innerHTML === "Present"){
        element.classList.add('bg-present');
        presentBtn[index-1].classList.add('present');
    }else if(element.cells[2].innerHTML === 'Absent'){
        element.classList.add('bg-absent');
        absentBtn[index-1].classList.add('absent');
    }
});