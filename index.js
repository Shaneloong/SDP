document.getElementById("sidebar-toggler").addEventListener("click", ()=>{
    document.querySelector(".sidebar-menu").classList.toggle("show-sidebar");
    document.querySelector('main').classList.toggle('default-main');
    document.querySelector('footer').classList.toggle('default-footer');
});

window.onscroll = () => {
    if (window.pageYOffset > 50) {
        document.querySelector('.sidebar-menu').style.top = 0;
        document.querySelector('.sidebar-menu').style.height = "100%";
    }
    else{
        document.querySelector('.sidebar-menu').style.top = "75px";
        document.querySelector('.sidebar-menu').style.height = "calc(100% - 75px)";
    }
};
try {
    document.getElementById('roles').addEventListener('change', ()=>{
        if(document.getElementById('roles').value == 'Lecturer'){
            document.getElementById('hidden-form').classList.remove('hidden');
        }else{
            document.getElementById('hidden-form').classList.add('hidden');
        }
    });
} catch (error) {
    console.log(error);
}

try {
    document.getElementById('numberOfStudent').addEventListener('keyup', ()=>{

        let numberOfStudent = document.getElementById('numberOfStudent').value;
        if(numberOfStudent >= 0){
            document.getElementById('student-form').innerHTML = '';
            for (let i = 1; i <= numberOfStudent; i++) {
                let student = 'students' + i;
                document.getElementById('student-form').innerHTML += `<div class="col input-group w-25 my-2">
                                                                        <span class="input-group-text">Student's TP</span>
                                                                        <input type="text" class="form-control student-tp" name="${student}" placeholder="Student's TP" maxlength="8">
                                                                    </div>`;
            }
        }

        let inputField = document.getElementsByClassName('student-tp');
        Array.from(inputField).forEach(element => {
            element.addEventListener('blur', ()=>{
                console.log(element.value);
            })
        });

    });


} catch (error) {
    console.log(error);
}
