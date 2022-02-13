var config = {
    // should be same as the id of the container created on 3rd step
    containerID: "sawo-container",
    // can be one of 'email' or 'phone_number_sms'
    identifierType: "email",
    // Add the API key copied from 2nd step
    apiKey: "677cfc2f-5b50-442e-abe8-93bc83e7a770",
    // Add a callback here to handle the payload sent by sdk
    onSuccess: (payload) => {
        document.cookie = `email=${payload.identifier}`
        window.open("file:///home/kaiwalya/Documents/Work/GitHub/at_Aura/motivation-site/index.html")
    },
};
var sawo = new Sawo(config);
sawo.showForm();