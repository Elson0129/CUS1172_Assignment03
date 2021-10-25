const app_stage = {
    current_stage : '',
    current_correct: 0,
    current_incorrect: 0, 
    questions_left: 20
}

document.addEventListener('DOMContentLoaded', ()  => {
    create_user_view(1)

});


const create_user_view = async (stage) => {
    const data = await fetch("https://my-json-server.typicode.com/Elson0129/CUS1172_Assignment03/db")
    const model = await data.json()
    const html_element = render_widget(model, "#init_view")
    document.querySelector("#app_widget").innerHTML = html_element;
}

const render_widget = (model, view) => {
    template_source = document.querySelector(view).innerHTML

    var template = Handlebars.compile(template_source);

    console.log(model)

    var html_widget_element = template(model)
    return html_widget_element
}