// Generate Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-info text-white">
                <h4>${engineer.empName}</h4>
                <h4><i class="material-icons">laptop_mac</i> Engineer</h4>
            </div>
            <div class="card-body">
            <div class="card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.empId}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.empEmail}">${engineer.empEmail}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${engineer.gitHub}" target="_blank">${engineer.gitHub}</a></li>
            </ul>
            </div>
            </div>
        </div>
    </div>
    `
};

// export module
module.exports = generateEngineer;