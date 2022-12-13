var arryApps = {
    data: [{
        appName: 'PRODUCT DEVELOPMENT ',
        descApp: 'Proses Percampuranbahan baku untuk membuat Bahan jadi dari berbagai kadar, warna dan item melalui proses Metal facrications'
    }, {
        appName: 'PRODCUTION',
        descApp: 'Proses Percampuranbahan baku untuk membuat Bahan jadi dari berbagai kadar, warna dan item melalui proses Metal facrications'
    }, {
        appName: 'METAL FABRICATIONS ',
        descApp: 'Proses Percampuranbahan baku untuk membuat Bahan jadi dari berbagai kadar, warna dan item melalui proses Metal facrications'
    }, {
        appName: 'CASTING',
        descApp: 'Proses Percampuranbahan baku untuk membuat Bahan jadi dari berbagai kadar, warna dan item melalui proses Metal facrications'
    }, {
        appName: 'METAL PREPARTIONS ',
        descApp: 'Proses Percampuranbahan baku untuk membuat Bahan jadi dari berbagai kadar, warna dan item melalui proses Metal facrications'
    }]
};

var listApps = document.getElementById("card-apps");
var dataApps = ""

listApps.innerHTML = "";

for (var i = 0; i < arryApps.data.length; i++) {
    console.log(" Data ke " + arryApps.data[i].appName)

    dataApps += '<div class="col-12 col-lg-4 py-3">' +
        '<div class="card shadow-sm">' +
        '<div class="card-body">' +
        '<h5 class="card-title mb-3">' +
        '<span class="theme-icon-holder card-icon-holder me-2">' +
        '<i class="fas fa-desktop"></i>' +
        '</span>' +
        '<span class="card-title-text">' + arryApps.data[i].appName + '</span>' +
        '</h5>' +
        '<div class="card-text">' +
        'Section overview goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.' +
        '</div>' +
        '<a class="card-link-mask" href="docs-page.html#section-1"></a>' +
        '</div>' +
        '</div>' +
        '</div>';
}
listApps.innerHTML = dataApps;