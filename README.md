#Forms.js

##Introduction

Forms.js is a simple Javascript library to handle form submission and validation on the client.

1. When you create a form, don't define a postback url, instead just give the name property a value.
2. Use Forms.Submit(FormName, Method) and Forms.Validate(FormName, Method)

The methods for form and submit will both be passed a reference to the form element.

##Example
    <form name="SayHello">
    <input type="text" name="Name" />
    <input type="submit" />
    </form>

    Forms.Submit('SayHello', function (Form) {
        alert('Hello ' + Form.Name.value);
    });

