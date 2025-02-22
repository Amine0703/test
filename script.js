humbrgers = document.querySelector('.humbrgers');
humbrgers.onclick = function() {
    navRsps = document.querySelector('.nav-bar')
    navRsps.classList.toggle('active');
}

ulREmove = document.querySelector('ul');
ulREmove.onclick = function() {
    navRsps.classList.remove('active');
}


function selectProduct(productName){
    document.getElementById('selectedProduct').value = productName;

    alert('تم اختيار  ${productName} الرجاء اكمال معلوماتك الشخصية.')
}

function submitForm(event){
    event.preventDefault();



    const form = document.getElementById('orderForm');
    const formData = new FormData(form);

    const data = {
        fullName : formData.get('fullName'),
        phone : formData.get('phone'),
        address : formData.get('address'),
        product : formData.get('selectedProduct')
    };

    fetch('https://script.google.com/macros/s/AKfycbwDN1dFwpmeX6MP9HkV2aBBZWHnWB0m0lDdALEoQ32lGXs1f4z_lStAMLM42LxL5Rzv/exec', 
     {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams(data),
        
    })
    .then(response => response.json())
    .then(data => {
       if (data.result === 'success'){
        alert('! تم ارسال الطلبية بنجاح شكرا ');
        form.reset();
    }else{
        alert('حدث خطأ ما الرجاء المحاولة مرة اخرى' + data.message);
    }
    })
    .catch(error => {
        alert('حدث خطأ ما الرجاء المحاولة مرة اخرى');
        console.error('Error:', error);
    });

    // const formData = new FormData(document.getElementById('orderForm'));

    // const fullName = formData.get('fullName');
    // const phone = formData.get('phone');
    // const address = formData.get('address');
    // const product = formData.get('selectedProduct');

    // console.log('الاسم الكامل :',fullName);
    // console.log('رقم الهاتف :' ,phone);
    // console.log('العنوان :' ,address);
    // console.log('المنتج :' ,product);
    
    // if(!product){
    //     alert('الرجاء اختيار المنتج قبل ارسال الطلب')
    //     return;
    // }
    // alert('! تم ارسال الطلبية بنجاح شكرا ');
    // document.getElementById('orderForm').reset();
}



// function doPost(e) {
//     const sheet = SpreadsheetApp.openById("1fqW3CEsR9Wjlnyxpkdth-yIBzotOZEeXN5etD7P-dYU").getSheetByName("Sheet1");
  
//     const fullName = e.parameter.fullName;
//     const phone = e.parameter.phone;
//     const address = e.parameter.address;
//     const product = e.parameter.selectedProduct;
  
//     sheet.appendRow([new Dat(), fullName, phone, address, product]);
  
//     return
  
//     ContentService.createTextOutput(JSON.stringify({"result" : "success"})).setMimeType(ContentService.MimeType.JSON);
    
//   }

  
//   https://script.google.com/macros/s/AKfycbzRRzFgyxPy51gfricDPV1ViCHsc1uVSNSnXUfg04EPUirslWaHtrximMUQzQXUrrfC/exec