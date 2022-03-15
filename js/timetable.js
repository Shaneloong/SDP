document.getElementById('timetable-type').addEventListener('change', ()=>{
    if(document.getElementById('timetable-type').value === 'Current Week'){
        document.getElementById('accordionTimetable').classList.remove('hidden');
        document.getElementById('accordionTimetable2').classList.add('hidden');
    }else{
        document.getElementById('accordionTimetable2').classList.remove('hidden');
        document.getElementById('accordionTimetable').classList.add('hidden');
    }
})