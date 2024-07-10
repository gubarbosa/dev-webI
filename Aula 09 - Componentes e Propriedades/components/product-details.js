app.component('product-details', { 
    props: {
        details: {
            required: true
        }
    },
    template: 
    /*html*/ 
    `<div>
        <ul>
                <li v-for="detail in details">{{ detail }}</li>
        </ul>
    </div>
    `,
  })