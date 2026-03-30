# Deploy to Netlify with proper configuration
$token = "nfp_VZpU1dMQWMsZ52ms3dcG2JnLpt9rMTgA0bf8"
$siteName = "soufianeasrih"
$distDir = "dist/soufiane-portfolio"
$projectRoot = Get-Location

Write-Host "🔨 Building production..." -ForegroundColor Cyan
npm run build:prod

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "📦 Deploying to Netlify..." -ForegroundColor Cyan
$env:NETLIFY_AUTH_TOKEN = $token

# Deploy to Netlify
npx netlify-cli deploy --prod --dir $distDir --message "Angular Portfolio Deploy"

Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "🌐 Visit: https://$siteName.netlify.app" -ForegroundColor Green
