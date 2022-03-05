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





