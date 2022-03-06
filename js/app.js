let user = document.querySelector('#userName')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let confirmPw = document.querySelector('#confirmPw')

let form = document.querySelector('form')



function showError(input, message) {

    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message;
}

function showSuccess(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.add('success')
    small.innerText = '';
}

function rendershow(input, message) {
    input.forEach((element) => {
        if (element.value === '') {
            console.log(element.value)
            element.parentElement.classList.remove('success')
            element.parentElement.querySelector('small').innerText = '';
            showError(element, message)
        } else {
            element.parentElement.classList.remove('error')
            showSuccess(element, message)
        }
    });
}

function checkGmail(input, message) {
    let rex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let resultRex = rex.test(input.value);
    console.log(resultRex)
    if (!resultRex && input.value !== '') {
        console.log(resultRex)
        console.log(typeof input.value)
        showError(input, 'gmail bi loi')
    } else if (!resultRex && input.value == '') {
        showError(input, 'Không được để trống')
    } else {
        showSuccess(input, '')
        return true;
    }
}

function checkPassword(pass1, pass2) {
    let check = pass1.value === pass2.value;
    console.log(check)

    if (check && pass1.value !== '' && pass2.value != '') {
        showSuccess(pass1, '')
        return true;

    } else if (!check && pass1.value == '' && pass2.value != '') {
        showError(pass1, 'Không được để trống')
        showError(pass2, 'Bạn chưa nhập password')

    } else if (!check && pass2.value == '' && pass1.value != '') {
        showError(pass2, 'Không được để trống')
        showError(pass1, 'Bạn chưa nhập confirm password')

    } else if (!check && pass2.value == '' && pass1.value == '') {
        showError(pass1, 'Không được để trống')
        showError(pass2, 'Không được để trống')
    } else if (!check && pass2.value !== '' && pass1.value !== '') {
        showError(pass1, 'Password không khớp nhau')
        showError(pass2, 'Password không khớp nhau')

    }
}

function checkUserName(input, min, max) {
    input.value = input.value.trim();
    let regexUser = /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){5,15}[a-zA-Z0-9]$/
    let resultCheck = regexUser.test(input.value)
    console.log(resultCheck)
    if (input.value.length < min && input.value.length !== 0) {
        showError(input, 'user name khong duoc it hon 8 ky tu')
        
    } else if (input.value.length >= max) {
        showError(input, 'user name khong duoc nhieu hon 20 ky tu')
    } else if (min > input.value.length && input.value.length <= max) {
        showError(input, 'Không được để trống!')
    } else if (!resultCheck) {
        console.log(resultCheck)
        showError(input, 'Lỗi ký tự khi nhập User Name')
    } else {
        showSuccess(input, '')
        return true;
    }
}

function all(

    checkGmail1,
    checkUserName1,
    checkPassword1) {
        let wrapp = document.querySelector('.wrapp')
        console.log(wrapp.querySelector('h2'))
    if (
        checkGmail1 === true &&
        checkUserName1 === true &&
        checkPassword1 === true) {
            wrapp.classList.add('blockWrapp')
            console.log(wrapp.querySelector('h2'))
            wrapp.querySelector('h2').innerText= 'CHÚC MỪNG BẠN ĐÃ ĐĂNG KÝ THÀNH CÔNG TÀI KHOẢN'
            // wrapp.childElementCount
            rendershow([user, email, password, confirmPw], 'Khong duoc de trong!')
    }

}



form.addEventListener('submit', (e) => {
    e.preventDefault()
    rendershow([user, email, password, confirmPw], 'Khong duoc de trong!')
    let checkGmail1 = checkGmail(email)
    let checkUserName1 = checkUserName(user, 8, 20)
    let checkPassword1 = checkPassword(password, confirmPw)
    all(
        checkGmail1,
        checkUserName1,
        checkPassword1)


    console.log(checkGmail1)
    console.log(checkUserName1)
    console.log(checkPassword1)

})










