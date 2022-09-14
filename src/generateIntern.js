// Generate Intern card
const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-info text-white">
                <h4>${intern.empName}</h4>
                <h4> <i class="material-icons">assignment_ind</i> Intern</h4>
            </div>
            <div class="card-body">
            <div class="card">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.empId}</li>
            <li class="list-group-item">Email:<a href="mailto:${intern.empEmail}">${intern.empEmail}</a></a></li>
            <li class="list-group-item">School: ${intern.school}</li>
            </ul>
            </div>
            </div>
    </div>
</div>
    `
};

// export module
module.exports = generateIntern;