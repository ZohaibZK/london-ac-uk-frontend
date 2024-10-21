const validate = (values) => {
    let errors = {};

    if (!values.email && !values.password) {
        errors.general = `Email and Password are required.`
    } else if (!values.email) {
        errors.email = "Email is required."
    } else if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/.test(
            values.email
        )
    ) {
        errors.email = "Invalid email address.";
    } else if (!values.password) {
        errors.password = "Enter your password.";
    }

    return errors;
};

export default validate;
