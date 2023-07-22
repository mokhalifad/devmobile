document.addEventListener('deviceready', rechercherContacts);

function rechercherContacts() {
    const options = new ContactFindOptions();
    //options.filter = 'resp';
    options.multiple = true;
    options.hasPhoneNumber = true;
    let fields = ['name'];

    navigator.contacts.find(fields, afficherContacts, gererErreur, options);

}

function afficherContacts(contacts) {
    let code = '';

    for (let i = 0; i < contacts.length; i++) {
        code += `
            <li>
                <a href="#">
                    <img src="${contacts[i].photos ? contacts[i].photos[0].value : 'img/md-contact-16.png'}">
                    <hi>${contacts[i].displayName}</hi>   
                    <p>${contacts[i].phoneNumbers[0].value}</p>
                </a>
            </li>
        `;   
    }

    const contactList = document.getElementById('contactList');
    contactList.innerHTML = code;
    $(contactList).listview('refresh');
}

function gererErreur(error) {
    console.log("Erreur : ");
    console.log(error);
}