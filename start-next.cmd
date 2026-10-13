@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is required. Install Node.js, then run this file again.
  pause
  exit /b 1
)
if not exist "node_modules\next" (
  echo Installing project dependencies...
  call npm install
  if errorlevel 1 (
    echo Dependency installation failed. Check that npm can reach registry.npmjs.org.
    pause
    exit /b 1
  )
)
echo Starting the Next.js development server at http://localhost:3000
call npm run dev
endlocal
