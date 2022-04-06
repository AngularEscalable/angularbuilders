echo "🔥 Uses version 13 of Nx and ng CLI";
echo "🚧 init nx-workspace";
npx create-nx-workspace angularbuilders --appName=www --interactive=false --nxCloud=false --preset=angular --style=css
cd angularbuilders
# git remote add origin https://github.com/AngularEscalable/angularbuilders.git
git add *
git commit -m 'chore: init nx-workspace'
echo " generate core module with routing "
ng g module core --module=app --routing --routingScope=Root --no-interactive
git add *
git commit -m 'feat: generate core module with routing'
echo "🏠 init nx-workspace";

