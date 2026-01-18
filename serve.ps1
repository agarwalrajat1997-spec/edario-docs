# serve.ps1 (run from edario-docs)
Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

cd "C:\Users\agarw\edario-docs"

$port = 8080
$mime = @{
  ".html"="text/html"
  ".css" ="text/css"
  ".js"  ="application/javascript"
  ".png" ="image/png"
  ".jpg" ="image/jpeg"
  ".jpeg"="image/jpeg"
  ".svg" ="image/svg+xml"
  ".gif" ="image/gif"
  ".json"="application/json"
  ".ico" ="image/x-icon"
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

Write-Host "Serving folder: $((Get-Location).Path)"
Write-Host "Open: http://localhost:$port/#start   (Ctrl+C to stop)"

while ($listener.IsListening) {
  $ctx = $null
  try {
    $ctx = $listener.GetContext()

    $path = $ctx.Request.Url.LocalPath.TrimStart("/")
    if ([string]::IsNullOrWhiteSpace($path)) { $path = "index.html" }

    # normalize slashes and block .. traversal
    $path = $path -replace "/", "\"
    if ($path -match "^\.\." -or $path -match "\\\.\.") { throw "Blocked path traversal" }

    $file = Join-Path (Get-Location) $path

    if (Test-Path $file) {
      $ext = [System.IO.Path]::GetExtension($file).ToLower()
      $ct = $mime[$ext]
      if ([string]::IsNullOrWhiteSpace($ct)) { $ct = "application/octet-stream" }
      $ctx.Response.ContentType = $ct
      $ctx.Response.StatusCode = 200

      $bytes = [System.IO.File]::ReadAllBytes($file)
      $ctx.Response.ContentLength64 = $bytes.Length

      try {
        $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
      } catch {
        # client disconnected (refresh/tab closed) — ignore
      }
    }
    else {
      $ctx.Response.StatusCode = 404
      $ctx.Response.ContentType = "text/plain"
      $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $path")
      $ctx.Response.ContentLength64 = $msg.Length

      try {
        $ctx.Response.OutputStream.Write($msg, 0, $msg.Length)
      } catch {
        # ignore disconnect
      }
    }
  }
  catch {
    # keep server alive on listener hiccups
  }
  finally {
    if ($ctx -and $ctx.Response) {
      try { $ctx.Response.OutputStream.Close() } catch {}
      try { $ctx.Response.Close() } catch {}
    }
  }
}
