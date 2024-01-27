
document.querySelector('.responsiveBar').addEventListener('click', showSideBar)

function showSideBar(){
    let navSidebar = document.querySelector('.navLinks.sideBar');

    if (!navSidebar){
        navSidebar = document.createElement('ul');
        navSidebar.classList.add('navLinks', 'sideBar');

        let button = document.createElement('button');
        button.classList.add('closeBar');
        button.innerText = "x";
        button.onclick = function() {
            document.body.removeChild(navSidebar);
        };

        let schedule = document.createElement('li');
        schedule.innerHTML = '<a href="eventSchedule.html">Schedule</a>';
        let vendorInfo = document.createElement('li');
        vendorInfo.innerHTML = '<a href="vendorInfo.html">Vendor Information</a>';
        let contact = document.createElement('li');
        contact.innerHTML = '<a href="contact.html">Contact</a>';

        navSidebar.appendChild(button);
        navSidebar.appendChild(schedule);
        navSidebar.appendChild(vendorInfo);
        navSidebar.appendChild(contact);
        document.body.appendChild(navSidebar);
    } else {
        navSidebar.style.display = 'none';
    }
}
