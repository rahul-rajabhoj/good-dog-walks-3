function CreateAccountViewModel() {
    var self = this;

    self.firstName = ko.observable();

    self.firstName.subscribe(function(newValue) {
        console.log(newValue);
    })

    self.handleSubmit = function() {
        console.log('SUBMIT FORM');

        var payload = {
            firstName: self.firstName()
        }

        console.log(payload);
    }
}

ko.applyBindings(new CreateAccountViewModel(), document.querySelector("#knockout-app"));