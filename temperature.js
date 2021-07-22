class Temperature {
    celcuis;
    constructor(celcuis) {
        this.celcuis = celcuis;
    }
    getKenvin(){
        return this.celcuis + 273.15;
    }
    getFahrenheit(){
        return  (this.celcuis * 1.8) +  32;
    }
}
function changeTemperature() {
    let celcuis = parseInt(document.getElementById('input').value);
    let change = new Temperature(celcuis);
    let select = document.getElementById('change').value;
    if (select == "kenvin"){
            console.log(change.getKenvin())
            document.getElementById('output').innerHTML = celcuis + "<sup>o</sup>"
                + "C = " + change.getKenvin() + "<sup>o</sup>" + "K";
    }
    else {
        console.log(change.getFahrenheit())
        document.getElementById('output').innerHTML =celcuis + "<sup>o</sup>"
            + "C = " + change.getFahrenheit() + "<sup>o</sup>" + "F";
        }
}