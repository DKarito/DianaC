function calcularAnios(day, month, year){
    let actual = new Date();
    let actual_anio = actual.getFullYear();
    let actual_mes = actual.getMonth() +1;
    let actual_dia = actual.getDate();
    let edad = actual_anio - year;

    if(actual_mes < month){
        edad--;
    }
    if(month == actual_mes && actual_dia < day){
        edad--;
    }
    return edad;
}

function calcular_meses(day, month){
    let actual = new Date();
    let actual_anio = actual.getFullYear();
    let actual_mes = actual.getMonth() +1;
    let actual_dia = actual. getDate();
    let meses =0;

    if(actual_mes > month){
        meses = actual_mes - month;
    }
    if(actual_mes < month){
        meses = 12 - (month - actual_mes);
    }
    if(actual_mes == month && day > actual_dia){
        meses = 11;
    }
    return meses;
}

function calcular_dia(day){
    let actual = new Date();
    let actual_anio = actual.getFullYear();
    let actual_mes = actual.getMonth() +1;
    let actual_dia = actual.getDate();
    let dias =0;

    if(actual_dia > day){
        dias = actual_dia - day;
    }else{
        ultia_dia_mes= new Date(actual_dia, actual_mes, 0);
        dias = ultia_dia_mes.getDate() - (day - actual_dia);
    }
    return dias;
}

function presentar(){

    let dia = document.getElementById(`dia`);
    let mes = document.getElementById(`mes`);
    let anio = document.getElementById(`anio`);

    const edad_anios = calcularAnios(dia.value, mes.value, anio.value);
    const meses = calcular_meses(dia.value, mes.value);
    const dias = calcular_dia(dia.value);
    //alert(`Tienes ${edad_anios} años, ${meses} meses, ${dias} dias`)

    let ubicacion = document.getElementById(`resultado`)
    ubicacion.innerHTML = `<p> Tienes ${edad_anios} años, ${meses} meses, ${dias} dias </p>`
    
    dia.value = ``;
    mes.value = ``;
    anio.value = ``;
}