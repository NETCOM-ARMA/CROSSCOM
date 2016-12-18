# CROSSCOM

CROSSCOM is the web platform that powers the ARMA III Network Command. 

It is designed to be an easy to use web platform that supports tracking, analytics and organization of multiunit combined operations inside ARMA III.

## Motivation

We found that when starting units there was a lack of easy to use software that would allow units to collaborate together and organize shared operations.

Given the massive common ground amongst our community we decided to focus on the common aspects of Military and Tactical Simulation groups to help units 
to run bigger and better operations more effectively.

## How to Use

Units are not required or intended to run CROSSCOM for themselves - instead they should use the hosted version found at https://netcom-arma.net.

Interest units can signup by completing the unit application process and becoming a certified simulation community.

At this time NETCOM is not designed for individual unaffiliated players. 
We recommend heading over to the [units directory](https://netcom-arma.net) to find a supported simulation group to play with.

CROSSCOM is not designed to be run on production outside of our hosted environment however the instructions for development servers will work for dedicated web runtimes with minor modications.

## File Structure

CROSSCOM is a standalone application written in Typescript. As such it does not use any particular framework or functionality to achieve it's goals. 

This can make the project a little confusing at first however we hope you will find it is an easy and enjoyable platform to work with once you familiarize yourself with it nuances.

    .
    ├── .tmp                    # This is a temporary and ignored compiled directory holding binaries and assets related to the final runtime of the system.
    ├── .vscode                 # IDE settings for the suggested editor of the project VSCode
    ├── node_modules            # Installed libraries used by the project. This is ignored and will not be checked into git. All files should be installed with NPM. 
    ├── resources               # Resources are non code assets such as stylesheets, images or templates. These will be checked into source control.
    ├── source                  # Code source files that comprise the actual application itself.
    ├──── client                # Client code for the React.js application that makes up the system
    ├──── server                # Server side code for both the API and the frontend web server
    ├──── shared                # Shared Typescript code that is used by multiple applications - or hold no particular ties with any subsystem.
    ├────── jobs                # Background processed tasks that are handled by an async queue
    ├── tests                   # Automated tests which map 1 to 1 with the source directory.
    ├── .travis.yml             # The Travis CI configuration of the project.
    ├── package.json            # The npm package.json which contains the projects dependcy specification
    └── README.md               # Information about the project

## Tests

All tests are written in mocha and can be run simply using the ```npm test``` command.

Primary development is done using wallaby.js - which is a paid tool - however it is still possible to run the test suites manually with mocha to avoid this charge.

## Contributors

The ARMA Network Command is a shared community platform from the ground up. We strive to work with any talented members of our community from wherever they might originate
and as such all contributors are welcome.

All contributions are pursuant to our chosen license, which is detailed below, and we do enforce moderate code quality standards to keep the project at the highest standards.

If you are interested in contributing but are not quite sure where to start we recommend checking out the issues page for ideas on smaller problems that you could solve in a Pull Request.

## License

We have selected the CC-BY-ND-4.0 License from Creative Commons to prevent multiple competing networks from being created.

We understand the burden of fair management that this leaves us as a community however we believe that this is a worthwhile sacrifice to prevent player segregation.
This is pursuant to our overall aim of creating a complete and simple network for simulation players to track their progress and play together.