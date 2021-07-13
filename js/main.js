function CreateAccountViewModel() {
    var self = this;

    self.firstName = ko.observable('').extend({
        validation: {
            message: 'Please enter at least 2 characters',
            validator: function(value) {
                return value.length > 1
            }
        }
    });

    self.handleSubmit = function() {
        console.log('SUBMIT FORM');

        var payload = {
            firstName: self.firstName()
        }

        console.log(payload);
    }
}

ko.applyBindings(new CreateAccountViewModel(), document.querySelector("#knockout-app"));