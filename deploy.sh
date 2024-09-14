echo "Swithching to branch master"
git checkeout master

echo "Building app....."
npm run build


echo "Deploy files to server..."
scp -r build/* -i "universe.pem" ubuntu@ec2-13-60-22-151.eu-north-1.compute.amazonaws.com:/var/www/therkkeshri.xyz

echo "Done"