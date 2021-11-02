let trow = $('.trow');
loadProductsData();
function loadProductsData() {
    $.ajax({
        type: "GET",
        url: "http://206.189.124.254:9000/products",
        error: (err) => {
            alert(err)
        },
        success: function (res) {
            let row = '';
            for (let i = 0; i < res.length; i++) {
                if (res[i].category == "CHINWE") {



                    row += `
                <div class="row" >
                    <div class="col1"><img src="http://206.189.124:9000${res[i].image} alt=""></div>
                    <div class="col2">${res[i].name}</div>
                    <div class="col3">${res[i].category}</div>
                    <div class="col4">${res[i].price}</div>
                    <div class="col5">${res[i].quantity}</div>
                    <div class="col6">${res[i].description}</div>
                </div>`;
                }
            }
            trow.html(row);
        }
    })
}

