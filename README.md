# Testcafe Course Practices for Test Automation  🚀
This is a course produced by QA mind Lab to enhance our knowledge in software test automation, using testcafe as the main tool.
This course is taught by Professor Saida Yurishi Reyes With more than 10 years of experience in the world of tests. 
## Prerequisites 📋
### Install Visual Studio Code
for the Windows operating systems version, there is an executable that you only have to download on the main page of Vs
```
https://code.visualstudio.com/
```
#### Debian and Ubuntu based distributions
The easiest way to install Visual Studio Code for Debian/Ubuntu based distributions is to download and install the .deb package (64-bit), either through the graphical software center if it's available,
or through the command line with:
```
sudo apt install ./<file>.deb

# If you're on an older Linux distribution, you will need to run this instead:
# sudo dpkg -i <file>.deb
# sudo apt-get install -f # Install dependencies
```
Then update the package cache and install the package using:
```
sudo apt-get install apt-transport-https
sudo apt-get update
sudo apt-get install code # or code-insiders
```
#### RHEL, Fedora, and CentOS based distributions
We currently ship the stable 64-bit VS Code in a yum repository, the following script will install the key and repository:
```
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
```
```
sudo sh -c 'echo -e "[code] \ nname = Visual Studio Code \ nbaseurl = https: //packages.microsoft.com/yumrepos/vscode \ nenabled = 1 \ ngpgcheck = 1 \ ngpgkey = https: //packages.microsoft.com/keys/microsoft.asc "> /etc/yum.repos .d / vscode.repo '
```
Then update the package cache and install the package using dnf (Fedora 22 and above):
```
sudo dnf check-update
sudo dnf install code
```
Or on older versions using yum:
```
yum check-update
sudo yum install code
```
Due to the manual signing process and the system we use to publish, the yum repo may lag behind and not get the latest version of VS Code immediately.

#### openSUSE and SLE-based distributions

The yum repository above also works for openSUSE and SLE-based systems, the following script will install the key and repository:
```
sudo rpm --import https://packages.microsoft.com/keys/microsoft. asc
sudo sh -c 'echo -e "[code] \ nname = Visual Studio Code \ nbaseurl = https: //packages.microsoft.com/yumrepos/vscode \ nenabled = 1 \ ntype = rpm-md \ ngpgcheck = 1 \ ngpgkey = https: //packages.microsoft.com/keys/microsoft.asc "> /etc/zypp/repos.d/vscode.repo '
```
Then update the package cache and install the package using:
```
sudo zypper refresh
sudo zypper install code
```
#### AUR package for Arch Linux
There is a community maintained Arch User Repository package for VS Code.

To get more information about the installation from the AUR, please consult the following wiki entry: Install AUR Packages.

Nix package for NixOS (or any Linux distribution using Nix package manager)

There is a community maintained VS Code Nix package in the nixpkgs repository. In order to install it using Nix, set allowUnfree option to true in your config.nix and execute:
```
nix-env -i vscode
```
Installing .rpm package manually
The VS Code .rpm package (64-bit) can also be manually downloaded and installed, however auto-updating won't work unless the repository above is installed. 
Once downloaded it can be installed using your package manager, for example with dnf:
```
sudo dnf install <file> .rpm
```
Note that other binaries are also available on the VS Code download page

#### Install node js on windows
for windows you just have to go to the page node js and click on the windows button to download the executable installer for your operating system
```
https://nodejs.org/es/download/
```
#### Install node js on Mac

We open our terminal and write:
```
brew install node
```
To ensure that have installed correctly we will write in the terminal:
```
node -v or npm -v
```
#### To install it in fedora 
```
sudo dnf install nodejs npm
```
#### To install it in Ubuntu
```
sudo apt-get install nodejs npm
```
#### To install it in Arch linux
```
sudo pacman -S nodejs npm
```
#### Once you have installed nodejs you can proceed to install Tescafe 
```
npm install -g testcafe
```
As a prerequisite you will also need a web browser to run the test

# Project installation 🔧
Download the project in a zip or you can is to clone it in the following way

HTTP 
```
https://github.com/fernandofedora/Testcafe_Bootcamp.git
```
SSH
```
git@github.com: fernandofedora / Testcafe_Bootcamp.git
```
# Running the tests ⚙️
Once the project is downloaded or cloned, you can open it with your favorite text editor , in this case we recommend that you use visual studio code.
Go into the root directory from your terminal and run the following code to run a test.
```
testcafe chrome practica1.js
```
# Built with 🛠️
* [Dropwizard](https://www.javascript.com/)JavaScript- Programming language used
* [Dropwizard](https://devexpress.github.io/testcafe/)Tescafe- The web framework used
# Versioning 📌
Version 1.0.2




