const createManager = function (Manager) {
    return `
            <li>
              <div class="space-y-4">
                <div class="aspect-w-3 aspect-h-2">
                  <img class="object-cover shadow-lg rounded-lg" src="https://qph.fs.quoracdn.net/main-qimg-9b55be751c77a26bafa5b6aa9c34c87c" alt="">
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
                  <img class="object-cover shadow-lg rounded-lg" src="https://i.redd.it/faa6jn891ce61.jpg" alt="Engineer Img">
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
                  <img class="object-cover shadow-lg rounded-lg" src="https://assets.popbuzz.com/2018/30/lana-condor--4-1532928959-view-1.jpg" alt="">
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

<!-- footer -->
  <footer class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-6 md:order-2">
        <a href="https://www.facebook.com/anthony.zamora.9678067" target="_blank"
          class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Facebook</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd" />
          </svg>
        </a>

        <a href="https://www.instagram.com/xb0boyx/" target="_blank" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Instagram</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clip-rule="evenodd" />
          </svg>
        </a>

        <a href="https://github.com/xBOBOYx" target="_blank" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">GitHub</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd" />
          </svg>
        </a>

        <a href="https://www.linkedin.com/in/anthony-zamora-42585a42/" target="_blank"
          class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">LinkedIn</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div>
      <div class="mt-8 md:mt-0 md:order-1">
        <p class="text-center text-base text-gray-400">
          &copy; 2021 xBOBOYx, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</body>
</html>

`;
}

module.exports = createHTML;