function shadowizzar(options) {
    let components  = document.querySelectorAll('.shadowizzar');

    if (options.shadow_type === "hard") {
        options.shadow_type = "0px";
    }
    else{
        options.shadow_type = "15px";
    }

    components.forEach(component => {
        component.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

        if( options.padding) {
            component.style.padding= "1em";
        }
    })
}

module.exports.shadowizzar = shadowizzar;