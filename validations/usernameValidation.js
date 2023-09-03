export default function(username) {
    let error = ''

    if(/[^a-zA-Z]/.test(username)) {
      error = 'El nombre solo debe contener letras'
    }

    if(username.length < 4) {
      error = 'Debe contener al menos 4 letras'
    }

    if(username.length > 20) {
      error = 'No puede contener más de 20 letras'
    }

    return error
}