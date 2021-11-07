const modal = $.modal({
    title: 'Modal',
    closable: true,
    content: `
        <p>Modal is working</p>
        <p> Lorem ipsum <p>
    `,
    width: '400px' ,
    footerButtons: [
        {text: 'Ok', type: 'primary', handler() {
            console.log('Primary btn clicked')
            modal.close()
        }},
        {text: 'Cancel', type: 'danger', handler() {
            console.log('Danger btn clicked')
            modal.close()
        }},
    ]
})