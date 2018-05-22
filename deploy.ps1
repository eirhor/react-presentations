$presentations = $PSScriptRoot + "\presentations\"
$dist = $PSScriptRoot + "\dist\"
$directories = dir $presentations | ?{$_.PSISContainer}

foreach ($d in $directories) {
    $name = $d.Name
    $path = Join-Path -Path $d.FullName -ChildPath ""
    $buildFolder = $path + "build"
    $buildIndex = $buildFolder + "\index.html"
    $distFolder = $dist + $name

    Push-Location $path
    Invoke-Expression "yarn"
    Invoke-Expression "yarn run build"

    if (Test-Path -Path $distFolder) {
        Remove-Item $distFolder -Force -Recurse
    }

    Copy-Item $buildFolder -Destination $distFolder -Force -Recurse
    Remove-Item $buildFolder -Force -Recurse
}

foreach ($d in $directories) {
    $msg = "Created release for: " + $d.Name
    Write-Output $msg
}