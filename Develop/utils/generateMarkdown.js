// Created a function that inputs the correct badge and returns a empty string.
function renderLicenseBadge(license) {
  if(license[0]!="None"){
    return `<img src = 'https://img.shields.io/badge/${license}-%20License-inactive'>`
  } else{
    return ''
  }
}; 

// Created a function that made the links in the READme appear and if there was not a license selected it returns a empty string.
function renderLicenseLink(license) {
  let yourLicense = '';

  if(license === 'MIT'){
    return yourLicense = '[MIT license](https://opensource.org/licenses/MIT)'
  } else if(license === 'Apache'){
    return yourLicense = '[Apahce License](https://opensource.org/licenses/Apache-2.0)';
  } else if(license === 'Boost'){
    return yourLicense = '[Boost License](https://www.boost.org/LICENSE_1_0.txt)';
  } else {
    return yourLicense = ''
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return  `The license this application is covered under is: ${renderLicenseLink(license)}`  
  } else{
    return '';
  }
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${renderLicenseBadge(data.license)}

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
  

  ## Contribution
  ${data.credit}

  ## Tests
  ${data.tests}

  ## Questions
  For any further questions visit my GitHub:  <a href='github.com/${data.github}'>www.github.com/${data.github}</a>
  Or email me: ${data.email}
  
`;
}

module.exports = generateMarkdown;
