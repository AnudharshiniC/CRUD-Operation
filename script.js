var selectedRow=null
function onFormSubmit(e){

    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null){
        insertNewRecord(formData);
    }
    else{
           updateRecord(formData);
    }
    resetForm();

}
//retrieve the data
function readFormData(){
    var formData={};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perprice"] = document.getElementById("perprice").value;
    return formData;

}
//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

     cell1=newRow.insertCell(0);
         cell1.innerHTML = data.productCode;
     cell2=newRow.insertCell(1);
         cell2.innerHTML = data.product;
    cell3=newRow.insertCell(2);
         cell3.innerHTML = data.qty;
     cell4=newRow.insertCell(3);
         cell4.innerHTML = data.perprice;
         
    cell4=newRow.insertCell(4);
         cell4.innerHTML = `<button onClick='onEdit(this)'class="on">Edit</button> 
                            <button onClick='onDelete(this)'class="onn">Delete</button>`;
                            

}
//edit data
function onEdit(td) {
    selectedRow=td.parentElement.parentElement;
    document.getElementById('productCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('product').value = selectedRow.cells[1].innerHTML;
    document.getElementById('qty').value= selectedRow.cells[2].innerHTML;
    document.getElementById('perprice').value=selectedRow.cells[3].innerHTML;


}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML=  formData.productCode;
    selectedRow.cells[1].innerHTML=  formData.product;
    selectedRow.cells[2].innerHTML=  formData.qty;
    selectedRow.cells[3].innerHTML=  formData.perprice;

}
//delete data
function  onDelete(td){
    if(confirm('Do you want to delete  this record?')){
    row=td.parentElement.parentElement;
    document.getElementById('storelist').deleteRow(row.rowIndex);

    }
 resetForm();
}
//reset data
function resetForm(){
    document.getElementById('productCode').value='';
    document.getElementById('product').value='';
    document.getElementById('qty').value='';
    document.getElementById('perprice').value='';

}