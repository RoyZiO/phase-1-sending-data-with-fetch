// Add your code here
function submitData() {

    const data = {
        name: 'Steve',
        email: 'steve@steve.com',
    }

    const userObject = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },

        body: JSON.stringify(data),
    };

    let bigFetch = fetch('http://localhost:3000/users', userObject)

    .then (function(response) {
        return response.json();
    })
    .then( function(object) {
        document.body.innerHTML = object['id'];
    }) 

    .catch( function ( error ) {

        document.body.innerHTML = error.message

    } );

    return bigFetch;

   
}

