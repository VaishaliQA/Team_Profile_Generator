// Generate Manager card
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-info text-white">
                <h4>${manager.empName}</h4>
                <h4> <i class="material-icons">content_paste</i> Manager</h4>
            </div>
            <div class="card-body">
            <div class="card">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.empId}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.empEmail}">${manager.empEmail}</a></a></li>
            <li class="list-group-item">Office Number: ${manager.officeNo}</li>
            </ul>
            </div>
            </div>
        </div>
    </div>
    `;
};

// export module
module.exports = generateManager;