echo "🚧 global prepare";
npm i -g @angular/cli@latest
npm i -g @nrwl/cli@latest
npm i -g json
echo "🏠 global prepare";
echo "🚧 init nx-workspace";
npm init nx-workspace angularbuilders --appName=www --defaultBase=main --interactive=false --linter=eslint --nxCloud=false --npmScope=ab --prefix=ab --preset=angular --style=css
cd angularbuilders
git branch -M main
git remote add origin https://github.com/AngularEscalable/angularbuilders.git
git add *
git commit -m 'chore: init nx-workspace'
echo "🏠 init nx-workspace";
