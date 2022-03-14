document.getElementById("sidebar-toggler").addEventListener("click", ()=>{
    document.querySelector(".sidebar-menu").classList.toggle("show-sidebar");
    document.querySelector('main').classList.toggle('default-main');
    document.querySelector('footer').classList.toggle('default-footer');
});


function fieldChange(){
        let sharedForm = document.getElementsByClassName('shared-form');
        let creationType = document.getElementById('creationType');
        let lecturerForm = document.getElementsByClassName('hidden-form');
        if(document.getElementById('roles').value === 'Lecturer'){
            if(creationType.value === "Single"){
                showForm(sharedForm);
                showForm(lecturerForm);
                document.querySelector('.bulk-hidden-form').classList.add('hidden');
                document.querySelector('.bulk-student-form').classList.add('hidden');
            }else if(creationType.value === 'Bulk'){
                document.querySelector('.bulk-hidden-form').classList.remove('hidden');
                hideForm(sharedForm);
                hideForm (lecturerForm);
                document.querySelector('.bulk-student-form').classList.add('hidden');
            }
        }
        else if (document.getElementById('roles').value === 'Student'){
            if(creationType.value === "Single"){
                showForm(sharedForm);
                hideForm (lecturerForm);
                document.querySelector('.bulk-hidden-form').classList.add('hidden');
                document.querySelector('.bulk-student-form').classList.add('hidden');
            }
            else if(creationType.value === "Bulk"){
                hideForm(sharedForm);
                hideForm (lecturerForm);
                document.querySelector('.bulk-hidden-form').classList.add('hidden');
                document.querySelector('.bulk-student-form').classList.remove('hidden');
            }
        }
}

function hideForm (lecturerForm){
    Array.from(lecturerForm).forEach(field =>{
        field.classList.add('hidden');
    });
}

function showForm(form){
    Array.from(form).forEach(element=>{
        element.classList.remove('hidden');
    });
}

try {
    const todayDate = new Date();
    const day = todayDate.getDay();
    const different = todayDate.getDate() - day + (day === 0 ? -6 : 1);
    let dayName;

    const firstDayOfWeek = new Date(todayDate.setDate(different));

    for(let i=0; i <= 4; i++){
        if(i===0){
            firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 0);
        }else{
            firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1);
        }
        switch (firstDayOfWeek.getDay()) {
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            default:
                break;
        }
        // console.log(firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1));
        document.getElementById('timetable').innerHTML += `<thead>
                                                                <th colspan="5" >${firstDayOfWeek.toDateString()}</th>
                                                            </thead>
                                                            <tr class="table-borderless">
                                                                <td colspan="5">
                                                                    <table id="${dayName}" class="table table-responsive table-hover mb-0 align-middle">
                                                                        <tr>
                                                                        <td>
                                                                            <div class="flex-group flex-column">
                                                                                <div>Class ID</div>
                                                                                <div>Module Name</div>
                                                                                <div>Intake</div>
                                                                            </div>
                                                                        </td>
                                                                        <td>Location</td>
                                                                        <td>
                                                                            <div class="flex-group flex-column">
                                                                                <div>Start Time - End Time</div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            Lecturer Name
                                                                        </td>
                                                                        <td>
                                                                            <a href="" class="btn btn-outline-secondary"><i class="uil uil-edit"></i></a>
                                                                            <a href="" class="btn btn-outline-secondary"><i class="uil uil-trash-alt"></i></a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div class="flex-group flex-column">
                                                                                <div>Class ID</div>
                                                                                <div>Module Name</div>
                                                                                <div>Intake</div>
                                                                            </div>
                                                                        </td>
                                                                        <td>Location</td>
                                                                        <td>
                                                                            <div class="flex-group flex-column">
                                                                                <div>Start Time - End Time</div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            Lecturer Name
                                                                        </td>
                                                                        <td>
                                                                            <a href="" class="btn btn-outline-secondary"><i class="uil uil-edit"></i></a>
                                                                            <a href="" class="btn btn-outline-secondary"><i class="uil uil-trash-alt"></i></a>
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                </td>
                                                            </tr`;
    }

} catch (error) {
    console.log(error);
}
function timetable(t){
    if (t == 1){
        document.querySelectorAll(".flx-date1").forEach(el => el.style.backgroundColor ="burlywood");
        document.querySelectorAll(".flx-date2").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".flx-date3").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".flx-date4").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".flx-date5").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".table1").forEach(el => el.style.display = "flex");
        document.querySelectorAll(".table2").forEach(el => el.style.display = "none");
        document.querySelectorAll(".table3").forEach(el => el.style.display = "none");
        document.querySelectorAll(".table4").forEach(el => el.style.display = "none");
        document.querySelectorAll(".table5").forEach(el => el.style.display = "none");
    }else if (t == 2){
        document.querySelectorAll(".flx-date1").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".flx-date2").forEach(el => el.style.backgroundColor ="#B8DFD8");
        document.querySelectorAll(".flx-date3").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".flx-date4").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".flx-date5").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".table1").forEach(el => el.style.display = "none");
        document.querySelectorAll(".table2").forEach(el => el.style.display = "flex");
        document.querySelectorAll(".table3").forEach(el => el.style.display = "none");
        document.querySelectorAll(".table4").forEach(el => el.style.display = "none");
        document.querySelectorAll(".table5").forEach(el => el.style.display = "none");
    }else if(t == 3){
        document.querySelectorAll(".flx-date1").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".flx-date2").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".flx-date3").forEach(el => el.style.backgroundColor ="rosybrown");
        document.querySelectorAll(".flx-date4").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".flx-date5").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".table1").forEach(el => el.style.display = "none");
        document.querySelectorAll(".table2").forEach(el => el.style.display = "none");
        document.querySelectorAll(".table3").forEach(el => el.style.display = "flex");
        document.querySelectorAll(".table4").forEach(el => el.style.display = "none");
        document.querySelectorAll(".table5").forEach(el => el.style.display = "none");
    }else if (t == 4){
        document.querySelectorAll(".flx-date1").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".flx-date2").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".flx-date3").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".flx-date4").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".flx-date5").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".table1").forEach(el => el.style.display = "none");
        document.querySelectorAll(".table2").forEach(el => el.style.display = "none");
        document.querySelectorAll(".table3").forEach(el => el.style.display = "none");
        document.querySelectorAll(".table4").forEach(el => el.style.display = "flex");
        document.querySelectorAll(".table5").forEach(el => el.style.display = "none");
    }else if (t == 5){
        document.querySelectorAll(".flx-date1").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".flx-date2").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".flx-date3").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".flx-date4").forEach(el => el.style.backgroundColor ="#ADADAD");
        document.querySelectorAll(".flx-date5").forEach(el => el.style.backgroundColor ="lavenderblush");
        document.querySelectorAll(".table1").forEach(el => el.style.display = "none");
        document.querySelectorAll(".table2").forEach(el => el.style.display = "none");
        document.querySelectorAll(".table3").forEach(el => el.style.display = "none");
        document.querySelectorAll(".table4").forEach(el => el.style.display = "none");
        document.querySelectorAll(".table5").forEach(el => el.style.display = "flex");
    }
}
function checkOTP(y){
    if (y == 1){
        let otp1 = document.getElementById("otp1").value;
        if (otp1.length == 1){
            document.getElementById("otp1").blur();
            document.getElementById("otp1").readOnly = true;
            document.getElementById("otp2").focus();
        }
    }else if (y == 2){
        let otp2 = document.getElementById("otp2").value;
        if (otp2.length == 1){
            document.getElementById("otp2").blur();
            document.getElementById("otp2").readOnly = true;
            document.getElementById("otp3").focus();
        }
    }else if (y == 3){
        let otp3 = document.getElementById("otp3").value;
        if (otp3.length == 1){
            document.getElementById("otp3").blur();
            document.getElementById("otp3").readOnly = true;
        }
}}
function get_OTP(){
    let q = document.getElementById("otp1").value;
    let w = document.getElementById("otp2").value;
    let e = document.getElementById("otp3").value;
    let realotp = (""+ q + w + e);
}
//Remove the student submission value
$(function (){
    $("#remove").on("click",function (){
        $(".name-submission").next().empty()
    })
})
//Change the attendance record colour according to Present or Absent
$(function() {
    let abs = $(".present-type").text()
    if (abs == "Present") {
        $(".present-type").parent().css("background-color", "green");
    } else if (abs == "Absent") {
        $(".present-type").parent().css("background-color", "red");
    }
})
//Display Submission Material Name
function ShowSubmissionFilename(){
    let number = document.getElementById("sub-material").files.length
    let input = document.getElementById("sub-material")
    let output = "";
    for (let i = 0; i <number; i++){
        output+= "<div>" + "<b>" + input.files.item(i).name + "</b>" +"</div>";
    }
    document.getElementById("file-name").innerHTML ="Selected File:"+output
}
// Display Learning Material Name
function ShowMaterialFilename(){
    let number = document.getElementById("formFile").files.length
    let input = document.getElementById("formFile")
    let output = "";
    for (let i = 0; i <number; i++){
        output+= "<div>" + "<b>" + input.files.item(i).name + "</b>" +"</div>";
    }
    document.getElementById("material-name").innerHTML ="Selected File:"+output
}
//Delete Learning Materials
$("#remove-material").click(function (){
    $(this).parentsUntil(".list-group").remove()
})
// Set current time when create submission
$(document).ready(function(){
    let now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    $('#visible-date').val(now.toISOString().slice(0,16));
});
//Toggle Due date
$("#toggle-duedate").click(function (){
    $("#Due-Date").parent().toggle();
})

//Display Current week Timetable according to the dropdown
$("[id=First]").click(function (){
    let x = $(this).text();
    $("[id=Timetable-dropdown]").text("" + x);
    $("[id=First-week]").fadeIn("slow");
    $("[id=Second-week]").hide();
})
//Display Next week Timetable according to the dropdown
$("[id=Second]").click(function (){
    let x = $(this).text();
    $("[id=Timetable-dropdown]").text("" + x);
    $("[id=First-week]").hide();
    $("[id=Second-week]").fadeIn("slow");
})