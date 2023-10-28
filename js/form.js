const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    
    e.preventDefault();

    const nombre = document.getElementById('nombre');
    const mail = document.getElementById('mail');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('textareaMensaje')
    const checkNoRobot = document.getElementById('checkNoSoyRobot');
    const checkTermYPol = document.getElementById('checkTermYPolPriv');

    const validMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!nombre.value) {
        nombre.value = ' ';
        document.getElementById('nombre').focus();
        alert('Debe ingresar un nombre valido...');
        return;
    }

    if (!validMail.test(mail.value)) {
        console.log(mail.value);
        mail.value = ' ';
        document.getElementById('mail').focus();
        alert('Correo no valido...');
        return;
    }

    if (!asunto.value) {
        document.getElementById('asunto').focus();
        alert('Asunto del correo electronico no valido...');
        return;
    }

    if (!mensaje.value) {
        document.getElementById('textareaMensaje').focus();
        alert('Ingrese un mensaje valido...');
        return;
    }
    if (!checkNoRobot.checked) {
        document.getElementById('checkNoSoyRobot').focus();
        alert('Es Ud un robot??...');
        return;
    }
    if (!checkTermYPol.checked) {
        document.getElementById('checkTermYPolPriv').focus();
        alert('Debe aceptar los terminos y condiciones...');
        return;
    }

    formulario.submit()
} )
