function shadowizard(options) {
    let componets  = document.querySelectorAll('.shadowizard');

    if (options.shadow_type === "hard") {
        options.shadow_type = "0px";
    }
    else{
        options.shadow_type = "15px";
    }

    componets.forEach(componet => {
        componet.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

        if( options.padding) {
            component.style.padding= "1em";
        }
    })
}

module.exports.shadowizard = shadowizard;