echo "🚧 add CSS";
echo "add bulma";
npm i bulma
echo "this.targets.build.options.styles[1] = 'node_modules/bulma/css/bulma.css';"
json -I -f apps/www/project.json -e "this.targets.build.options.styles[1] = 'node_modules/bulma/css/bulma.css';"
git add *
git commit -m 'chore: add bulma'
echo "🏠 add CSS";
