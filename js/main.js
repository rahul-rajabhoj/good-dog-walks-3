function CreateAccountViewModel() {
    var self = this;

    self.firstName = ko.observable('').extend({
        required: true,
        minLength: 2,
    });

    self.emailAddress = ko.observable('').extend({
        email: true,
        required: true,
    });

    self.subscriptionType = ko.observable('standard');

    self.handleSubmit = function() {

        var errors = ko.validation.group(self);

        if(errors().length > 0) {
            errors.showAllMessages();

            return;
        }

        console.log('SUBMIT FORM');

        var payload = {
            firstName: self.firstName(),
            email: self.emailAddress(),
            subscription: self.subscriptionType(),
        }

        console.log(payload);
    }
}

ko.applyBindings(new CreateAccountViewModel(), document.querySelector("#knockout-app"));