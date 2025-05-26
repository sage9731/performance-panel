// only works on windows
import { execSync } from 'child_process';

const deployDir = process.env.DEPLOY_DIR;

try {
  if (!deployDir) throw new Error('DEPLOY_DIR not defined in .env file');
  
  // Force remove target directory
  execSync(`rd /s /q "${deployDir}"`, { stdio: 'inherit' });
  
  // Copy files with Windows native xcopy
  execSync(`xcopy "dist\\*" "${deployDir}\\" /E /Y /I`, { stdio: 'inherit' });
  
  console.log(`[Success] Files deployed to: ${deployDir}`);
} catch (error) {
  console.error(`[Error] Deployment failed: ${error.message}`);
  process.exit(1);
}