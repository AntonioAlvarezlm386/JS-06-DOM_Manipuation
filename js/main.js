const profilesContainer = document.getElementById('perfiles');			/*contenedor total, div vacio en el html*/
/*Array de usuarios */
const users = [
    {
        id: 1,
        user_name: 'Zabdiel Diaz',
        description: 'Me gustan los conejos',
        age: '25',
        fav_music: {
            bands: [
                'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Fernando Aguilar',
        description: 'Me gusta el calor',
        age: '22',
        fav_music: {
            bands: [
                'Los Temerarios', 'Grupo Frontera', 'Conjunto Primavera', 'Tigres del Norte'
            ]
        }
    }
]

/*Crea un objeto de elementos html vacios para cada dato que se mostrará */
const createDescription = () => {
    const htmlElements = {
        user_name: document.createElement('h2'),
        age : document.createElement('h3'),
        description : document.createElement('p'),
        bands : document.createElement('ul')
    };

    return htmlElements;
};


/*Agregamos los datos a cada elemento html creado en createDescription*/
const populate = (user, htmlElements) => {
    htmlElements.user_name.textContent = user.user_name;
    htmlElements.age.textContent = user.age;
    htmlElements.description.textContent = user.description;

    user.fav_music.bands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        htmlElements.bands.appendChild(li);	
    });
    
    return htmlElements;
};


/* Crea card y agrega los elemntos html con contenido a card, uno por uno */
const renderElements = (elements) => {
    const card = document.createElement('div');
    card.classList.add('profile', 'container');
    card.append(elements.user_name, elements.age, elements.description, elements.bands);
    return card;
};


users.forEach(user => {
    const htmlStructure = createDescription();
    const elementsWithData = populate(user, htmlStructure);
    const profileCard = renderElements(elementsWithData);

    profilesContainer.append(profileCard);
})




/**Ejercicio 2 -------------------------------------------------------------------------------------------------------------
 * Formulario de registro de usuarios
 */

let registeredUsers = [];

const newUsersContainer = document.getElementById('newUsers');
const registerBtn = document.getElementById('registeredBtn');

const inputName = document.getElementById('nameInput');
const inputAge = document.getElementById('ageInput');
const inputDesc = document.getElementById('description');

/**Agrega y muestra los datos del nuevo usuario a partir de un evento */
registerBtn.addEventListener('click', () => {
    registerUsers(inputName, inputAge, inputDesc);
    const form = newHtmlUserCard(registeredUsers[registeredUsers.length - 1]);
    newUsersContainer.append(form);
});


/**CREA UN USUARIO NUEVO Y LO GUARDA, LIMPIA EL FORMULARIO*/
function registerUsers(name, age, description){
    const newUser = {
        name : name.value,
        age : age.value,
        description : description.value,
    };
    registeredUsers.push(newUser);
    name.value = age.value = description.value = '';
};


/**Crea la la tarjeta donde se mostrara el nuevo usuario */
function newHtmlUserCard(userData){
    const card = document.createElement('div');
    card.classList.add('profile', 'container');
    
    const htmlCard = {
        username : document.createElement('h2'),
        age : document.createElement('h3'),
        description : document.createElement('p'),
        btn : document.createElement('button'),
    };
    htmlCard.btn.setAttribute('id', 'rmbtn');

    htmlCard.username.textContent = userData.name;
    htmlCard.age.textContent = userData.age;
    htmlCard.description.textContent = userData.description;
    htmlCard.btn.textContent = 'Eliminar usuario';
    card.append(htmlCard.username, htmlCard.age, htmlCard.description, htmlCard.btn);

    return card;
};