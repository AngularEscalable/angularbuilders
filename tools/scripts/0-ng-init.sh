echo "🚧 init nx-workspace";
npx create-nx-workspace angularbuilders --appName=www --interactive=false --nxCloud=false --preset=angular --style=css
cd angularbuilders
git remote add origin https://github.com/AngularEscalable/angularbuilders.git
git add *
git commit -m 'chore: init nx-workspace'
echo "🏠 init nx-workspace";

