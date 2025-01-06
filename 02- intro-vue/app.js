
const { createApp,  ref} = Vue;

const app = createApp({
    template: `
    <h1>{{message}}</h1>
    <p>{{author}}</p>
    `,

    setup(){

       const message  = ref ("I'm Batman" );

       const author =  ref ('Bruce Wayne');

       setTimeout(() => {
        message.value = 'Hola soy Goku';
        author.value = 'Goku'
       },1000);

        return {
            message,
            author
        }

    }

});

app.mount('#myApp');