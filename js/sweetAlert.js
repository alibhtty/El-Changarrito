Swal.fire({
    title: 'Nuevo Servicio a domicilio!',
    text: 'También puedes reserva tu mesa, adelanta tu orden o recoger en  el local.',
    color: '#222',
    confirmButtonText: 'Adelante',
    /* width: '90%',
    heigth: '90%', */
    /* padding: '1rem', */
    /* position: 'center', */
    /* background: '#FFFFFF', */
    /* grow: 'fullscreen', */

    backdrop: `
      rgba(0,0,0,0.95)
      url("https://sweetalert2.github.io/images/nyan-cat.gif")
      left top
      no-repeat
    `,

    allowOutsideClick: false,
	allowEscapeKey: false,
	allowEnterKey: false,
	stopKeydownPropagation: false,

    /* input: 'select',
	inputPlaceholder: 'Seleccionar Restaurante',
	inputValue: '',
	inputOptions: {
        avcalabria: 'Av. Calabria',
        poblesec: 'Poble Sec',
    }, */

    /* backdrop: true, */
    /* timer: 6000, */
    /* timerProgressBar: true, */

    customClass: {
        container: 'alerta-container',
	// 	popup:
	// 	header:
	// 	title:
	// 	closeButton:
	// 	icon:
	// 	image:
	// 	content:
	// 	input:
	// 	actions:
	    confirmButton: 'alerta-button',
	// 	cancelButton:
	// 	footer:	
    },

	showConfirmButton: 'true',
	confirmButtonColor: '#FF00FF',
	confirmButtonAriaLabel: 'Adelante',

    showCancelButton: false,
	cancelButtonText: 'Cancelar',
	cancelButtonColor: '#FF0066',
	cancelButtonAriaLabel: 'Cancelar',

    imageUrl: 'https://alibhtty.github.io/elchangarrito/favicon/android-chrome-192x192.png',
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Logo',
    /* footer: '<span>Hey!</span>', */
  })