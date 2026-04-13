# ============================================
# Script di build per deploy su Plesk
# Genera la cartella "deploy" pronta da caricare
# ============================================

$ErrorActionPreference = "Stop"

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  Build Next.js Standalone per Plesk" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# 1. Pulisci build precedente
Write-Host "[1/5] Pulizia build precedente..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
}
if (Test-Path "deploy") {
    Remove-Item -Recurse -Force "deploy"
}
Write-Host "  -> Pulito!" -ForegroundColor Green

# 2. Esegui la build
Write-Host "[2/5] Esecuzione npm run build..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "  -> ERRORE: La build e' fallita!" -ForegroundColor Red
    exit 1
}
Write-Host "  -> Build completata!" -ForegroundColor Green

# 3. Copia standalone nella cartella deploy
Write-Host "[3/5] Copia standalone in /deploy..." -ForegroundColor Yellow
if (-not (Test-Path ".next\standalone")) {
    Write-Host "  -> ERRORE: Cartella .next/standalone non trovata. Verifica output: 'standalone' in next.config.mjs" -ForegroundColor Red
    exit 1
}
Copy-Item -Recurse ".next\standalone" "deploy"
Write-Host "  -> Copiato!" -ForegroundColor Green

# 4. Copia .next/static dentro deploy/.next/static
Write-Host "[4/5] Copia .next/static..." -ForegroundColor Yellow
if (Test-Path ".next\static") {
    New-Item -ItemType Directory -Path "deploy\.next\static" -Force | Out-Null
    Copy-Item -Recurse -Force ".next\static\*" "deploy\.next\static\"
    Write-Host "  -> Copiato!" -ForegroundColor Green
} else {
    Write-Host "  -> ATTENZIONE: .next/static non trovato (potrebbe non essere necessario)" -ForegroundColor Yellow
}

# 5. Copia public dentro deploy/public
Write-Host "[5/5] Copia public/..." -ForegroundColor Yellow
if (Test-Path "public") {
    New-Item -ItemType Directory -Path "deploy\public" -Force | Out-Null
    Copy-Item -Recurse -Force "public\*" "deploy\public\"
    Write-Host "  -> Copiato!" -ForegroundColor Green
} else {
    Write-Host "  -> ATTENZIONE: cartella public/ non trovata" -ForegroundColor Yellow
}

# Riepilogo
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  BUILD COMPLETATA!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "La cartella 'deploy/' e' pronta." -ForegroundColor White
Write-Host "Carica TUTTO il contenuto di 'deploy/' sul server Plesk." -ForegroundColor White
Write-Host ""
Write-Host "Su Plesk imposta:" -ForegroundColor Yellow
Write-Host "  - Application Startup File: server.js" -ForegroundColor White
Write-Host "  - Node.js version: 18+" -ForegroundColor White
Write-Host "  - NODE_ENV = production" -ForegroundColor White
Write-Host ""

# Mostra dimensione cartella deploy
$size = (Get-ChildItem -Recurse "deploy" | Measure-Object -Property Length -Sum).Sum / 1MB
Write-Host "Dimensione totale: $([math]::Round($size, 1)) MB" -ForegroundColor Cyan
Write-Host ""
