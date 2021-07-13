function CreateAccountViewModel() {
    var self = this;

    self.firstName = ko.observable('').extend({
        validation: {
            message: 'This is not good enough',
            validator: function(value) {
                return value.length > 1
            }
        }
    });

    self.emailAddress = ko.observable('').extend({
        email: true,
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