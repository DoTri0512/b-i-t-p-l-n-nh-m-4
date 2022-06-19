function checkLogin(){
    adminName = document.getElementById('name').value
    adminPass = document.getElementById('password').value 
    if(adminName === 'admin' && adminPass === 'admin'){
        alert('Logged in successfully')
        sessionStorage.setItem('name', adminName)
        sessionStorage.setItem('password', adminPass)
        window.location = './Admin_home.html'
    }else{
        alert('Wrong username or password, please re-enter')
    }
}