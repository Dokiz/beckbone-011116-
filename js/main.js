var Person = Backbone.Model.extend({
    defaults: {
        name: 'Evgeniy',
        age: 19,
        job: 'president',
        hobbies: 'php',
		words: 'Hello world'
    }
});

var PersonView = Backbone.View.extend({
    tagName: 'li', 
	
	

template: _.template('Меня зовут <%= name %> ,мне  <%= age %> лет, я работаю <%=  job %>, моё хобби <%= hobbies %>, я сказал <%= words %>'),

initialize: function(){
	this.render();
},


    render: function () {
		
        this.$el.html(this.template(this.model.toJSON() ) );
          
	}
	
});

var person = new Person;
var personView = new PersonView({model: person});