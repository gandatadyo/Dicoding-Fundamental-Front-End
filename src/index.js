import "./style/style.css";
import "./component/customelement-card-items.js";
import "./component/customelement-card-news.js";

const SwitchMenu = (idmenu) => {
    let x = document.querySelectorAll(".div_menu");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    if (idmenu != '') {
        if (idmenu == 'menu_sembako') {
            alert('Maaf menu ini belum tersedia');
        } else {
            document.getElementById(idmenu).style.display = 'block';
        }
    }
}


SwitchMenu('menu_pemeteaan');

window.SwitchMenu = SwitchMenu;


// data info covid indonesia
fetch("https://my-json-server.typicode.com/gandatadyo/data-dummy/covid-indonesia")
    .then(response => {
        return response.json();
    })
    .then(responseJson => {
        document.getElementById('lbl_total').innerHTML = responseJson[0].positif;
        document.getElementById('lbl_positif').innerHTML = responseJson[0].dirawat;
        document.getElementById('lbl_sembuh').innerHTML = responseJson[0].sembuh;
        document.getElementById('lbl_meninggal').innerHTML = responseJson[0].meninggal;
        console.log(responseJson);
    })
    .catch(error => {
        console.log(error);
    });



// data layanan
fetch("https://my-json-server.typicode.com/gandatadyo/data-dummy/layanan")
    .then(response => {
        return response.json();
    })
    .then(responseJson => {
        for (let i = 0; i < responseJson.length; i++) {
            let element = document.createElement('customelement-card-item');
            element.setAttribute("src", responseJson[i].cover);
            element.setAttribute("caption", responseJson[i].caption);
            element.setAttribute("desc", responseJson[i].desc);
            element.className = "col-md-3 mb-2";
            document.getElementById('main_data_layanan').appendChild(element);
        }
    })
    .catch(error => {
        console.log(error);
    });

// data berita
fetch("https://my-json-server.typicode.com/gandatadyo/data-dummy/berita")
    .then(response => {
        return response.json();
    })
    .then(responseJson => {
        for (let i = 0; i < responseJson.length; i++) {
            let element = document.createElement('customelement-card-news');
            element.setAttribute("src", responseJson[i].img);
            element.setAttribute("caption", responseJson[i].title);
            element.setAttribute("desc", responseJson[i].desc);
            element.className = "col-md-3 mb-2";
            document.getElementById('main_data_berita').appendChild(element);
        }
    })
    .catch(error => {
        console.log(error);
    });

// data tips
fetch("https://my-json-server.typicode.com/gandatadyo/data-dummy/tips")
    .then(response => {
        return response.json();
    })
    .then(responseJson => {
        let data_gejala = responseJson.gejala;
        for (let i = 0; i < data_gejala.length; i++) {
            let element = document.createElement('customelement-card-item');
            element.setAttribute("src", data_gejala[i].img);
            element.setAttribute("caption", data_gejala[i].title);
            element.setAttribute("desc", data_gejala[i].desc);
            element.className = "col-md-3 mb-4";
            // element.style.height = "300px";
            document.getElementById('main_data_gejala').appendChild(element);
        }

        let data_jenis_pasien = responseJson.jenis_pasien;
        for (let i = 0; i < data_jenis_pasien.length; i++) {
            let element = document.createElement('customelement-card-news');
            element.setAttribute("src", data_jenis_pasien[i].img);
            element.setAttribute("caption", data_jenis_pasien[i].title);
            element.setAttribute("desc", data_jenis_pasien[i].desc);
            element.className = "col-md-3 mb-2";
            document.getElementById('main_data_jenis_pasien').appendChild(element);
        }
    })
    .catch(error => {
        console.log(error);
    });

