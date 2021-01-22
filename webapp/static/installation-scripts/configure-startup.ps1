Write-Host "CloudScend Foresight Windows Report Service Configure Startup Script"

$installDir = "C:\AMaaS"
$batchFile = "$($installDir)\start-report-service.bat"
$gitLabDir = "$($installDir)\gitlab"
$gitLabUrl = Read-Host "Enter the GitLab Server URL"
$gitLabUser = Read-Host "Enter the Gitlab Username"
$gitLabUserEmail = Read-Host "Enter the Gitlab Username's email address"
$gitLabPassword = Read-Host "Enter the Gitlab Username's token/password"

$sonarQubeUrl = Read-Host "Enter the SonarQube URL"
$sonarQubeAuthType = Read-Host "Enter SonarQube's Auth Type. Example: TOKEN"
$sonarQubeLogin = Read-Host "Enter the SonarQube Username"
$sonarQubePassword = Read-Host "Enter the SonarQube Username's token/password"


if(!(Test-Path $gitLabDir -PathType Container)) {
    Write-Output "Creating directory $($gitLabDir)"
    $null = New-Item -ItemType Directory -Force -Path $gitLabDir
}

Copy-Item -Path "reportservice.jar" -Destination $installDir


Write-Host "Creating $($batchFile)"
Set-Content $batchFile "
set JAVA_HOME=$($installDir)\openjdk\openjdk-11.0.9.1_1

:init
set JAVA_EXE=%JAVA_HOME%\bin\java.exe
%JAVA_EXE% ^
 %JAVA_OPTS% ^
 -Dserver.port=8080 ^
 -DGIT_SERVER_URL=$($gitLabUrl) ^
 -DGIT_USER=$($gitLabUser) ^
 -DGIT_PASSWORD=$($gitLabPassword) ^
 -DGIT_USER_EMAIL=$($gitLabUserEmail) ^
 -DGIT_LOCAL_DIR=$($gitLabDir) ^
 -DSONAR_AUTHTYPE=$($sonarQubeAuthType) ^
 -DSONAR_IPADDR=$($sonarQubeUrl) ^
 -DSONAR_URL=$($sonarQubeUrl) ^
 -DSONAR_LOGIN=$($sonarQubeLogin) ^
 -DSONAR_PASSWORD=$($sonarQubePassword) ^
 -DSONARQUBE_DIR=$($installDir)\sonar-scanner-msbuild-net46\sonar-scanner-4.4.0.2170\bin ^
 -DSAGE_URL=https://NotUsedInWindowsReportServiceButMustBePresent ^
 -DSAGE_PORT=443 ^
 -DWINDOWS_SONARSCANNER_MSBUILD_DIR=$($installDir)\sonar-scanner-msbuild-net46 ^
 -DWINDOWS_MSBUILD_DIR=$($installDir)\BuildTools\msbuild\current\bin ^
 -DWINDOWS_NUGETEXE_DIR=$($installDir) ^
 -jar ^
 reportservice.jar
 "

Write-Host "configure-startup.ps1 finished."
