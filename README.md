# How to update an Oracle JET template

## Create a project from the template

Download the .zip template file and use it as a starter template for a new project, using the following command:

ojet create <project name> --template="<path to file>/template.zip"

## Update the template

After creating a new project modify and update it as needed.

After modifying and updating it, run the following command from the root of the project.

ojet strip

Zip up the contents of the /src directory. It should not have the /src director at the root of the .zip. Just the contents of that folder.

## Use the updated template as new template for future projects

Now you can use that .zip file as a new starter template for new projects, using the following command:

ojet create newProject --template="<path to file>/MyProjectTemplate.zip"