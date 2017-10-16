

var institutionArray = [];

function openCreateInstitiutionDlg() {
    $('#dlg').dialog('open').dialog('center').dialog('setTitle','Cоздание Заведения');
    $('#fm').form('clear');
}

function openCreateCategoryDlg() {
    $('#dlgСategory').dialog('open').dialog('center').dialog('setTitle','Cоздать Категорию');
    $('#fmCreateCategory').form('clear');
}

function saveInstitution() {
    $('#fmCreateInstitution').form('submit', {
        success: function(data){
            var myData = $("#fmCreateInstitution").serialize();
            console.log("success data" + myData);

            $.ajax({
                url: "/admin/createInstitution",
                method: "POST",
                data: myData,
                statusCode: {
                    200: function(institution) {
                        console.log("result" + JSON.stringify(institution));
                        var instItem = {
                            name: institution.name,
                            address: institution.address,
                            phone: institution.phone,
                            type: ''
                        }
                        institutionArray.push(instItem);
                        $("#dgInstitution").datagrid('loadData', institutionArray);
                        $('#dgInstitution').datagrid('reload');
                    },
                    403: function(error) {
                        console.log("error" + error);
                    }
                }
            });
            return false;
        }
    });
}


function loadInstitutionToGrid(institutions) {
    var resultArray = [];
    if (institution) {
        for (var index in logs) {
            var log = {
                type: logs[index].type,
                actionName: logs[index].actionName,
                infoMessage: logs[index].infoMessage
            }
            // var log = {
            //     type: 'test',
            //     actionName: 'test',
            //     infoMessage: 'test'
            // }
            resultArray.push(log);
        }
        //  var log = {
        //     type: 'test',
        //      actionName: 'test',
        //     infoMessage: 'test'
        // }
        resultArray.push(log);
        console.log("load data" + JSON.stringify(resultArray));
        $("#idLogsGrid").datagrid('loadData', resultArray);
        $('#idLogsGrid').datagrid('reload');
    }
}


function saveCategory() {
    $('#fmCreateCategory').form('submit', {
        success: function(data){
            var myData = $("#fmCreateCategory").serialize();
            console.log("success data" + myData);

            $.ajax({
                url: "/admin/createCategory",
                method: "POST",
                data: myData,
                statusCode: {
                    200: function(institution) {
                        console.log("result" + JSON.stringify(institution));
                        var instItem = {
                            name: institution.name,
                            address: institution.address,
                            phone: institution.phone,
                            type: ''
                        }
                        institutionArray.push(instItem);
                        $("#dgInstitution").datagrid('loadData', institutionArray);
                        $('#dgInstitution').datagrid('reload');
                    },
                    403: function(error) {
                        console.log("error" + error);
                    }
                }
            });
            return false;
        }
    });
}