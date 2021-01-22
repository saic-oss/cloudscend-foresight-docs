Write-Output "This script will install CloudScend Foresight Windows Report Service prerequisites to the C:\AMaaS folder. "
Write-Output "Installation consists of .Net Framework v4.8, Java 11.0.9.1 JDK, the Visual Studio 2019 Build Tools, and SonarScanner for .NET Framework 4.6+."
Write-Output "In addition, this script will modify the system's PATH to add the JDK folder."
Write-Output "Internet access to download the software is required if the files are not present and the script needs to run under an Administrator account."
Write-Output " "
Write-Output "Beginning install."

$amaasInstallDir = "C:\AMaaS"
$tempDir = "$($amaasInstallDir)\temp"
$javaInstallDir = "$($amaasInstallDir)\openjdk"
$java11JdkInstaller = "$($tempDir)\OpenJDK11U-jdk_x64_windows_11.0.9.1_1.zip"
$net48Installer = "$($tempDir)\ndp48-x86-x64-allos-enu.exe"
$buildInstallDir = "$($amaasInstallDir)\BuildTools"
$vsBuildToolsInstaller = "$($tempDir)\vs_buildtools.exe"
$net48DevPack = "$($tempDir)\ndp48-devpack-enu.exe"
$gitInstaller = "$($tempDir)\Git-2.30.0-64-bit.exe"
$sonarScannerInstallDir = "$($amaasInstallDir)\sonar-scanner-msbuild-net46"
$sonarScannerInstaller = "$($tempDir)\sonar-scanner-msbuild-net46.zip"

if(!(Test-Path $tempDir -PathType Container)) {
    Write-Output "Creating directory $($tempDir)"
    $null = New-Item -ItemType Directory -Force -Path $tempDir
}


# Begin Java 11 JDK install
Write-Host "Testing if the JDK is installed at $($javaInstallDir)."
if(!(Test-Path $javaInstallDir -PathType Container)) {
    Write-Host "JDK is not installed."
    Write-Host "Testing if the JDK installer is present."
    if(!(Test-Path $java11JdkInstaller -PathType Leaf)) {
        Write-Host "JDK installer is not present. Downloading Java 11 JDK installer to $($java11JdkInstaller)"

        Invoke-WebRequest -Uri "https://github.com/AdoptOpenJDK/openjdk11-upstream-binaries/releases/download/jdk-11.0.9.1%2B1/OpenJDK11U-jdk_x64_windows_11.0.9.1_1.zip" `
            -OutFile $java11JdkInstaller
    }
    Write-Host "Extracting the JDK archive."
    Expand-Archive -Path $java11JdkInstaller -DestinationPath $javaInstallDir

    Write-Host "Testing if the JDK is in the system PATH."
    $oldEnvPath = (Get-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager\Environment' -Name PATH).path
    #-match/-notmatch uses regular expressions, so double backslashes are required.
    if($oldEnvPath -notmatch "C:\\AMaaS\\openjdk\\openjdk-11.0.9.1_1") {
        Write-Host "Adding $($javaInstallDir)\openjdk-11.0.9.1_1 to the System PATH."
        $newEnvPath = "$($javaInstallDir)\openjdk-11.0.9.1_1\bin;$($oldEnvPath)"
        Set-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager\Environment' -Name PATH -Value $newEnvPath
        Write-Host 'Verifying java install ...'

        #Update current running environment's PATH in order to test that javac and java are configured properly
        $env:Path =  [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
        Write-Host '  javac --version'
        javac --version
        Write-Host '  java --version';
        java --version;
    }
    Write-Host "Java 11 JDK install finished."
}
else {
    Write-Host "  Found."
}
# End Java 11 JDK install



# Begin .NET Framework 4.8 install
Write-Host "Testing if the .NET Framework 4.8 is installed by inspecting the registry at HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\Full"
# Refer to https://docs.microsoft.com/en-us/dotnet/framework/deployment/deployment-guide-for-developers
$runNetInstall = "false";
if(Test-Path "Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\Full" -PathType Container) {

    Write-Host "  Found .NET has been installed. Checking the version."
    $netRelease = (Get-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\Full' -Name Release).Release
    #Check to make sure .net 4.8 (release 528040) or greater is installed.  If not, then install.
    if($netRelease -lt 528040) {
        Write-Host "  Found old version of .NET 4. Will install 4.8."
        $runNetInstall = "true";
    }
}
else {
    Write-Host "  Registry key not found, will install .NET."
    $runNetInstall = "true";
}

if($runNetInstall -eq "true") {
    Write-Host "Testing if the .NET Framework 4.8 installer is present."
    if(!(Test-Path $net48Installer -PathType Leaf)) {
        Write-Output "Downloading .NET Framework 4.8 to $($net48Installer)"
        #https://go.microsoft.com/fwlink/?linkid=2088631
        Invoke-WebRequest -Uri "https://download.visualstudio.microsoft.com/download/pr/014120d7-d689-4305-befd-3cb711108212/0fd66638cde16859462a6243a4629a50/ndp48-x86-x64-allos-enu.exe" `
            -OutFile $net48Installer
    }

    Write-Output "Installing .NET Framework 4.8"

    Start-Process -FilePath $net48Installer -Wait -ArgumentList "/q", "/restart"
    Write-Output ".NET Framework 4.8 install finished."

}
else {
    Write-Host "  Found."
}
# End .NET Framework 4.8 install




# Begin VS 2019 Build Tools install
Write-Host "Testing if VS 2019 Build Tools are installed at $($buildInstallDir)."
if(!(Test-Path $buildInstallDir -PathType Container)) {
    Write-Host "Build Tools are not installed."
    Write-Host "Testing if build tools are downloaded."
    if(!(Test-Path $vsBuildToolsInstaller -PathType Leaf)) {
        Write-Output "Build tools are not downloaded. Downloading Visual Studio 2019 build tools to $($vsBuildToolsInstaller)."
        Invoke-WebRequest -Uri "https://download.visualstudio.microsoft.com/download/pr/9b3476ff-6d0a-4ff8-956d-270147f21cd4/ccfb9355f4f753315455542f966025f96de734292d3908c8c3717e9685b709f0/vs_BuildTools.exe" `
            -OutFile $vsBuildToolsInstaller
    }

    Write-Output "Installing VS Build Tools."

    #Install the Visual Studio 2019 Build Tools
    #Refer to https://docs.microsoft.com/en-us/visualstudio/install/workload-component-id-vs-build-tools?view=vs-2019
    #for the various workload/package IDs and the components they include.
    Start-Process -FilePath $vsBuildToolsInstaller -Wait -ArgumentList "--wait --norestart --nocache --quiet --installPath $($buildInstallDir) --add Microsoft.VisualStudio.Workload.AzureBuildTools --add Microsoft.VisualStudio.Workload.VisualStudioExtensionBuildTools --add Microsoft.VisualStudio.Workload.WebBuildTools --remove Microsoft.VisualStudio.Component.Windows10SDK.10240 --remove Microsoft.VisualStudio.Component.Windows10SDK.10586 --remove Microsoft.VisualStudio.Component.Windows10SDK.14393 --remove Microsoft.VisualStudio.Component.Windows81SDK"
<#
        "--wait", "--norestart", "--quiet", "--nocache", "--installPath $($buildInstallDir)", `
        "--add Microsoft.VisualStudio.Workload.AzureBuildTools", `
        "--add Microsoft.VisualStudio.Workload.VisualStudioExtensionBuildTools", `
        "--add Microsoft.VisualStudio.Workload.WebBuildTools", `
        "--remove Microsoft.VisualStudio.Component.Windows10SDK.10240", `
        "--remove Microsoft.VisualStudio.Component.Windows10SDK.10586", `
        "--remove Microsoft.VisualStudio.Component.Windows10SDK.14393", `
        "--remove Microsoft.VisualStudio.Component.Windows81SDK"
#>
    Write-Host "VS 2019 Build Tools finished."
}
else {
    Write-Host "  Found."
}
# End VS 2019 Build Tools install



# Begin SonarScanner for .NET Framework 4.6+ install for SonarQube integration
Write-Host "Testing if SonarScanner for .NET Framework 4.6+ is installed at $($sonarScannerInstallDir)."
if(!(Test-Path $sonarScannerInstallDir -PathType Container)) {
    Write-Host "SonarScanner is not installed."
    Write-Host "Testing if SonarScanner is downloaded."
    if(!(Test-Path $sonarScannerInstaller -PathType Leaf)) {
        Write-Output "SonarScanner for .NET 4.6+ is not downloaded. Downloading to $($sonarScannerInstaller)."
        Invoke-WebRequest -Uri "https://github.com/SonarSource/sonar-scanner-msbuild/releases/download/5.0.4.24009/sonar-scanner-msbuild-5.0.4.24009-net46.zip" `
            -OutFile $sonarScannerInstaller
    }
    Write-Host "Extracting the SonarScanner for .NET  archive."
    Expand-Archive -Path $sonarScannerInstaller -DestinationPath $sonarScannerInstallDir

    Write-Host "SonarScanner for .NET Framework 4.6+ finished."
}
else {
    Write-Host "  Found."
}
# End SonarScanner for .NET Framework 4.6+ install for SonarQube integration



# Begin nuget install for MSBuild integration
Write-Host "Testing if nuget for MSBuild integration is installed at $($amaasInstallDir)."
if(!(Test-Path "$($amaasInstallDir)\nuget.exe" -PathType Leaf)) {
    Write-Host "nuget is not installed. Downloading to $($amaasInstallDir)."

    Invoke-WebRequest -Uri "https://dist.nuget.org/win-x86-commandline/latest/nuget.exe" `
        -OutFile "$($amaasInstallDir)\nuget.exe"

    Write-Host "SonarScanner for .NET Framework 4.6+ finished."
}
else {
    Write-Host "  Found."
}
# End nuget install for MSBuild integration


# Begin Git install
Write-Host "Testing if Git is downloaded at $($gitInstaller)."
if(!(Test-Path $gitInstaller -PathType Leaf)) {
    Write-Output "Git installer not downloaded. Downloading to $($gitInstaller)."
    Invoke-WebRequest -Uri "https://github.com/git-for-windows/git/releases/download/v2.30.0.windows.1/Git-2.30.0-64-bit.exe" `
        -OutFile $gitInstaller

    Write-Output "Installing Git"

    Start-Process -FilePath $gitInstaller -Wait -ArgumentList "/silent /log /norestart "

    Write-Host "Git installer finished."
}
else {
    Write-Host "  Found."
}
# End Git install


# Begin .Net 4.8 DevPack install
Write-Host "Testing if .Net 4.8 DevPack is downloaded at $($net48DevPack)."
if(!(Test-Path $net48DevPack -PathType Leaf)) {
    Write-Output ".NET 4.8 DevPack not downloaded. Downloading to $($net48DevPack)."
    Invoke-WebRequest -Uri "https://download.visualstudio.microsoft.com/download/pr/014120d7-d689-4305-befd-3cb711108212/0307177e14752e359fde5423ab583e43/ndp48-devpack-enu.exe" `
        -OutFile $net48DevPack

    Write-Output "Installing .Net 4.8 Devpack."

    Start-Process -FilePath $net48DevPack -Wait -ArgumentList "/install /quiet /norestart "

    Write-Host ".Net 4.8 Devpack installation started. Please wait for 15 minutes before rebooting."
}
else {
    Write-Host "  Found."
}
# End .Net 4.8 DevPack install


Write-Host "install-preqs.ps1 finished executing."
