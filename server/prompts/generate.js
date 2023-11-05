// Function to generate license badge based on the provided license
const getLicenseBadge = (license) => {
    const licenseMap = {
    'Apache License 2.0': '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'ISC License': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    'GNU AGPLv3': '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    'GNU GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'GNU LGPLv3': '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    'The Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    'Boost Software License 1.0': '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    };
    return licenseMap[license] || '';
};
  // Function to render the license section of README
const renderLicenseSection = (data) => {
    return getLicenseBadge(data.license);
};
  // Function to generate markdown for README
const generateFile = (data) => {
    return `# ${data.title}
## Table of contents

1. [Licensing](#licensing)
2. [Description](#description)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Packages](#packages)
6. [Features](#features)
7. [Resources](#resources)
8. [Tests](#tests)
9. [How to contribute](#how-to-contribute)
10. [Questions](#questions)
11. [Video Demonstration](#video-demonstration)

## Licensing

Refer to <https://choosealicense.com/> for licensing information
${renderLicenseSection(data)}

## Description

    1. Application description: ${data.description}
    2. I built this app ${data.motivation}
    3. This app ${data.problems}

## Installation

    ${data.installation}
    Refer to https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository for information on cloning a repository

## Usage
    ${data.usage}
## Packages
    ${data.packages}
## Features
    ${data.features}
## Resources
    ${data.resources}
## Tests
    ${data.tests}
## How to Contribute
    ${data.contribute}
## Questions

For any further questions, I'm available at ${data.email}
To view and clone this project's repository as well as view other projects I'm working on, visit ${data.github}

## Video Demonstration
`;;
}

export default generateFile;