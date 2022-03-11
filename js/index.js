document.getElementById("sidebar-toggler").addEventListener("click", ()=>{
    document.querySelector(".sidebar-menu").classList.toggle("show-sidebar");
    document.querySelector('main').classList.toggle('default-main');
    document.querySelector('footer').classList.toggle('default-footer');
});


try {
    document.getElementById('roles').addEventListener('change', ()=>{
        fieldChange();
    });
    document.getElementById('creationType').addEventListener('change', ()=>{
        fieldChange();
    })
} catch (error) {
    console.log(error);
}

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
                
            // document.querySelector('.student-form').classList.add('hidden');
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
    })
}

try {
    const todayDate = new Date("March 6, 2022");
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
        document.querySelector(".flx-date1").style.backgroundColor ="lightblue"
        document.querySelector(".flx-date2").style.backgroundColor ="inherit"
        document.querySelector(".flx-date3").style.backgroundColor ="inherit"
        document.querySelector(".flx-date4").style.backgroundColor ="inherit"
        document.querySelector(".flx-date5").style.backgroundColor ="inherit"
        document.querySelector(".table1").style.display = "flex"
        document.querySelector(".table2").style.display = "none"
        document.querySelector(".table3").style.display = "none"
        document.querySelector(".table4").style.display = "none"
        document.querySelector(".table5").style.display = "none"
    }else if (t == 2){
        document.querySelector(".flx-date1").style.backgroundColor ="inherit"
        document.querySelector(".flx-date2").style.backgroundColor ="lightblue"
        document.querySelector(".flx-date3").style.backgroundColor ="inherit"
        document.querySelector(".flx-date4").style.backgroundColor ="inherit"
        document.querySelector(".flx-date5").style.backgroundColor ="inherit"
        document.querySelector(".table1").style.display = "none"
        document.querySelector(".table2").style.display = "flex"
        document.querySelector(".table3").style.display = "none"
        document.querySelector(".table4").style.display = "none"
        document.querySelector(".table5").style.display = "none"
    }else if(t == 3){
        document.querySelector(".flx-date1").style.backgroundColor ="inherit"
        document.querySelector(".flx-date2").style.backgroundColor ="inherit"
        document.querySelector(".flx-date3").style.backgroundColor ="lightblue"
        document.querySelector(".flx-date4").style.backgroundColor ="inherit"
        document.querySelector(".flx-date5").style.backgroundColor ="inherit"
        document.querySelector(".table1").style.display = "none"
        document.querySelector(".table2").style.display = "none"
        document.querySelector(".table3").style.display = "flex"
        document.querySelector(".table4").style.display = "none"
        document.querySelector(".table5").style.display = "none"
    }else if (t == 4){
        document.querySelector(".flx-date1").style.backgroundColor ="inherit"
        document.querySelector(".flx-date2").style.backgroundColor ="inherit"
        document.querySelector(".flx-date3").style.backgroundColor ="inherit"
        document.querySelector(".flx-date4").style.backgroundColor ="lightblue"
        document.querySelector(".flx-date5").style.backgroundColor ="inherit"
        document.querySelector(".table1").style.display = "none"
        document.querySelector(".table2").style.display = "none"
        document.querySelector(".table3").style.display = "none"
        document.querySelector(".table4").style.display = "flex"
        document.querySelector(".table5").style.display = "none"
    }else if (t == 5){
        document.querySelector(".flx-date1").style.backgroundColor ="inherit"
        document.querySelector(".flx-date2").style.backgroundColor ="inherit"
        document.querySelector(".flx-date3").style.backgroundColor ="inherit"
        document.querySelector(".flx-date4").style.backgroundColor ="inherit"
        document.querySelector(".flx-date5").style.backgroundColor ="lightblue"
        document.querySelector(".table1").style.display = "none"
        document.querySelector(".table2").style.display = "none"
        document.querySelector(".table3").style.display = "none"
        document.querySelector(".table4").style.display = "none"
        document.querySelector(".table5").style.display = "flex"
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
    let realotp = (""+ q + w + e)
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
//Add Folder
$(function () {
    $("#Add-folder").on("click", function () {
        $(".title-name").each(function (i, v) {
            if (i == 0) {
                $(this).after("<div class=\"accordion-item\">\n" +
                    "                <h2 class=\"accordion-header\" id=\"headingOne\">\n" +
                    "                    <button id=\"folder-butt\" class=\"accordion-button\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n" +
                    "                        <div class=\"folder-name\">\n" +
                    "                            <i class=\"uil uil-folder\"></i>\n" +
                    "                            <div class=\"file-name\">Tutorial week 1</div>\n" +
                    "                        </div>\n" +
                    "                    </button>\n" +
                    "                </h2>\n" +
                    "                <div id=\"collapseOne\" class=\"accordion-collapse collapse show\" aria-labelledby=\"headingOne\" data-bs-parent=\"#accordionExample\">\n" +
                    "                    <div class=\"accordion-body\">\n" +
                    "                        <ul class=\"list-group\">\n" +
                    "                            <li class=\"list-group-item\" style=\"justify-content: space-between\">\n" +
                    "                                <div style=\"display: flex;align-items: center;gap: 1rem\">\n" +
                    "                                    <i class=\"uil uil-file-download-alt\"></i>\n" +
                    "                                    <div class=\"file-name\">An item</div>\n" +
                    "                                </div>\n" +
                    "                                <div>\n" +
                    "                                    <i class=\"uil uil-trash-alt\"></i>\n" +
                    "                                </div>\n" +
                    "                            </li>\n" +
                    "                        </ul>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "            </div>")
            }
        })
    })
})
//Display Submission Material Name
function ShowFilename(){
    let number = document.getElementById("sub-material").files.length
    let input = document.getElementById("sub-material")
    let output = "";
    for (let i = 0; i <number; i++){
        output+= input.files.item(i).name + " | ";
    }
    document.getElementById("file-name").textContent ="Selected File:"+output
}