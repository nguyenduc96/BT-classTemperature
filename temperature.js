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
    let text;
    let celcuis = parseInt(document.getElementById('input').value);
    let change = new Temperature(celcuis);
    let select = document.getElementById('change').value;
    if (celcuis < -273){
        text = "Nhiệt độ bạn nhập nhỏ hơn -273 " + "<sup>o</sup>" + "C";
    }
    else {
        if (select == "kenvin"){
            console.log(change.getKenvin())
            text = celcuis + "<sup>o</sup>"
                + "C = " + change.getKenvin() + "<sup>o</sup>" + "K";
        }
        else {
            console.log(change.getFahrenheit())
            text =celcuis + "<sup>o</sup>"
                + "C = " + change.getFahrenheit() + "<sup>o</sup>" + "F";
        }
    }
    document.getElementById('output').innerHTML = text;
}