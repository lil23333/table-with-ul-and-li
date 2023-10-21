let employees = [
	{name: 'employee1', age: 30, salary: 
		400}, 
	{name: 'employee2', age: 31, salary: 
		500}, 
	{name: 'employee3', age: 32, salary: 
		600}, 
];

let table = document.querySelector('table');

function getUl (table, employees) {
        for (let i = 0; i < employees.length; i++) {
        let ul = document.createElement('ul');
        for (let j = 0; j < Object.values(employees[i]).length; j++) {
            let li = document.createElement('li');
            li.innerHTML = Object.values(employees[i])[j];

            li.addEventListener('click', function f () {
            let input = document.createElement('input');
            input.value = li.textContent;

            li.textContent = '';
            li.appendChild(input);

            input.addEventListener('blur', ()=> {
            li.textContent = input.value;
            li.addEventListener('click', f);
            });
            li.removeEventListener('click', f);
            });

            ul.appendChild(li);
            }
            let a = document.createElement('a');
            a.href = '';
            a.textContent = 'remove';
            ul.appendChild(a);
                
            a.addEventListener('click', function (e) {
            ul.remove ();
            e.preventDefault();
            }); 
            
            
            table.appendChild(ul);
            }
            }


getUl (table, employees)