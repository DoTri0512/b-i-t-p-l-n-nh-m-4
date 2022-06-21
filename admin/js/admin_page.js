var data = [];
/**Chức năng thêm nhân viên
 */
function addItem(){
    var id_nv = document.getElementById("id").value;
    var name = document.getElementById("fullname").value;
    var account = document.getElementById("account").value;
    var pwd = document.getElementById("password").value;

    var item = {
        "ID": id_nv,
        "Name": name,
        "Account": account,
        "Password": pwd
    }
    console.log(data);
    let index = data.findIndex((c)=>c.ID==item.ID)
    if(index>=0){
      data.splice(index,1,item)
    }
    else{
      data.push(item)
    }
    render()
    clear()
}
/**Hiển thị  */
function render(){
    table =  
    `<tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Account</th>
        <th scope="col">Password</th>
        <th scope="col">Action</th>
    </tr>`
   
  for(let i =0;i<data.length;i++){
    table +=
    `<tr>
      <th scope="col">${data[i].ID}</th>
      <th scope="col">${data[i].Name}</th>
      <th scope="col">${data[i].Account}</th>
      <th scope="col">${data[i].Password}</th>
      <th> <button onclick="deleteItem(${data[i].ID})">Delete</button>
            <button onclick="editItem(${data[i].ID})">Edit</button>
      </th>
    </tr>`
  }
  document.getElementById("render").innerHTML=table;

} 
function clear(){
  document.getElementById("id").value = "";
  document.getElementById("fullname").value = "";
  document.getElementById("account").value = "";
  document.getElementById("password").value = "";
}
/**Sửa thông tin */
function editItem(x){
  for(let i =0;i<data.length;i++){
    if(data[i].ID==x){
      document.getElementById("id").value = data[i].ID;
      document.getElementById("fullname").value = data[i].Name;
      document.getElementById("account").value = data[i].Account;
      document.getElementById("password").value = data[i].Password;
    }
  }
}
/**Xóa thông tin */
function deleteItem(x){
  for(let i =0;i<data.length;i++){
    if(data[i].ID==x){
      data.splice(i,1)
      render()
    }
  }
}
