$presentations = $PSScriptRoot + "\presentations\"
$dist = $PSScriptRoot + "\dist\"
$directories = dir $presentations | ?{$_.PSISContainer}

foreach ($d in $directories) {
    $name = $d.Name
    $path = Join-Path -Path $d.FullName -ChildPath ""
    $buildFolder = $path + "build"
    $distFolder = $dist + $name

    Push-Location $path
    Invoke-Expression "yarn"
    Invoke-Expression "yarn run build"

    if (Test-Path -Path $distFolder) {
        Remove-Item $distFolder -Force -Recurse
    }

    Copy-Item $buildFolder -Destination $distFolder -Recurse -Force

    Write-Output $buildFolder
}