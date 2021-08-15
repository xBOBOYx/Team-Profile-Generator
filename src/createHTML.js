const createManager = function (Manager) {
    return `
            <li>
              <div class="space-y-4">
                <div class="aspect-w-3 aspect-h-2">
                  <img class="object-cover shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
                </div>
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3>${Manager.name}</h3>
                  <h4>Office - ${Manager.officeNumber}</h4>
                  <h4>ID - ${Manager.id}</h4>

                  <p class="text-indigo-600">Manager</p>
                </div>
                <div class="text-lg">
                  <p class="text-gray-500">You can contact ${Manager.name} via email at ${Manager.email} or with the email link below.</p>
                </div>
  
                <ul class="flex space-x-5">
                  <li>
                    <a href="mailto:${Manager.email}" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">Email</span>
                      <svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </li>
                  </ul>
                </div>
                </li>
  `;
};

const createEngineer = function (Engineer) {
    return `
            <li>
              <div class="space-y-4">
                <div class="aspect-w-3 aspect-h-2">
                  <img class="object-cover shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
                </div>
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3>${Engineer.name}</h3>
                  <h4>ID - ${Engineer.id}</h4>
                  <p class="text-indigo-600">Engineer</p>
                </div>
                <div class="text-lg">
                  <p class="text-gray-500">Check out some of ${Engineer.name}\'s latest work on Gitub @${Engineer.github}. contact ${Engineer.name} via email, ${Engineer.email}  </p>
                </div>
  
                <ul class="flex space-x-5">
                  <li>
                    <a href="mailto:${Engineer.email}" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">Email</span>
                      <svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/${Engineer.github}" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">GitHub</span>
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
  `;
};

const createIntern = function (Intern) {
    return `
            <li>
              <div class="space-y-4">
                <div class="aspect-w-3 aspect-h-2">
                  <img class="object-cover shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
                </div>
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3>${Intern.name}</h3>
                  <h4>ID - ${Intern.id}</h4>
            

                  <p class="text-indigo-600">${Intern.school} Intern</p>
                </div>
                <div class="text-lg">
                  <p class="text-gray-500">${Intern.name} is an intern from ${Intern.school}. ${Intern.name} can be reached via email, ${Intern.email}. </p>
                </div>
  
                <ul class="flex space-x-5">
                  <li>
                    <a href="mailto:${Intern.email}" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">Email</span>
                      <svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </li>
                  </ul>
                </div>
                </li>
            
  `;
};

createHTML = (data) => {

    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerHtml = createManager(employee);
            pageArray.push(managerHtml);
        } else if (role === 'Intern') {
            const internHtml = createIntern(employee);
            pageArray.push(internHtml);
        } else if (role === 'Engineer') {
            const engineerHtml = createEngineer(employee);
            pageArray.push(engineerHtml);
        }
    }
    const xmenCards = pageArray.join('');
    const createXmen = createXmenPage(xmenCards);
    return createXmen;
};

const createXmenPage = function (xmenCards) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <title>Team Profile</title>
</head>
<body>
<div class="bg-white">
  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
      <div class="space-y-5 sm:space-y-4">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
        <p class="text-xl text-gray-500">Our coding team will be your one stop shop to make your ideas come to life. We have a manager to see that the project will meet exceend your expectations. An engineer for coding and in intern to help with all areas of the project.</p>
      </div>
      <div class="lg:col-span-2">
        <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
<!-- X-Men Cards -->
${xmenCards}
</ul>
</div>
</div>
</div>
</div> 
</body>
<script src="jquery-3.5.1.min.js"></script>
</html>

`;
}

module.exports = createHTML;