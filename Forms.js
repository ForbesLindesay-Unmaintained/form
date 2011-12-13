var Forms = (function () {
    var Validation = [];
    var Submission = [];
    document.addEventListener('submit', function (e) {
        var form = e.srcElement;
        var name = form.name;
        if (Validation[name] === undefined || Validation[name](form)) {
            if (Submission[name] !== undefined) {
                Submission[name](form);
                e.returnValue = false;//Submit with Javascript so don't submit any other way
            }else {
                e.returnValue = true;//Submit using normal method
            }
        }else {
            e.returnValue = false;//Failed validation so don't submit
        }
    });
    return {
        Validate: function (FormName, Method) {
            Validation[FormName] = Method;
            return Forms;
        },
        Submit: function (FormName, Method) {
            Submission[FormName] = Method;
            return Forms;
        }
    };
})();
