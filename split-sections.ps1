# split-sections.ps1
# Run this from inside C:\Users\agarw\edario-docs
# It extracts each <section id="...">...</section> from index.html into sections\*.html

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$Root = (Get-Location).Path
$IndexPath = Join-Path $Root "index.html"
if (!(Test-Path $IndexPath)) {
  throw "index.html not found at: $IndexPath"
}

$OutDir = Join-Path $Root "sections"
New-Item -ItemType Directory -Path $OutDir -Force | Out-Null

$html = Get-Content $IndexPath -Raw

$ids = @(
  "start",
  "school-setup",
  "schedule-structure",
  "uploading-data",
  "department-supervisors",
  "data-cleaning",
  "edit-constraints",
  "create-sections",
  "place-sections",
  "schedule-students",
  "report-a-bug",
  "data-courses",
  "data-teachers",
  "data-classrooms",
  "data-students",
  "data-requests",
  "data-sections",
  "magnetboard"
)

function Get-SectionHtml([string]$id, [string]$fullHtml) {
  $escaped = [regex]::Escape($id)
  $pattern = "(?is)<section\b[^>]*\bid\s*=\s*['""]$escaped['""][^>]*>.*?</section>"
  return [regex]::Match($fullHtml, $pattern)
}

$written = 0
foreach ($id in $ids) {
  $m = Get-SectionHtml -id $id -fullHtml $html
  if (!$m.Success) {
    Write-Warning "Section not found in index.html for id='$id' (skipping)"
    continue
  }

  $content = $m.Value

  # Fix image paths to match your folder: assets/images/...
  $content = $content -replace 'src="teachers-empty\.png"', 'src="assets/images/teachers-empty.png"'
  $content = $content -replace 'src="student-requests-empty\.png"', 'src="assets/images/student-requests-empty.png"'

  $filePath = Join-Path $OutDir ($id + ".html")
  Set-Content -Path $filePath -Value $content -Encoding UTF8
  $written++
  Write-Host "Wrote: sections\$($id).html"
}

Write-Host ""
Write-Host "Done. Files written: $written"
Write-Host "Output folder: $OutDir"
