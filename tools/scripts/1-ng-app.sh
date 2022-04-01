echo "🚧 app intitial configuration ";
echo " configure .eslintrc.json rules and start script";
npx json -I -f .eslintrc.json -e "this.overrides[0].rules['@angular-eslint/component-class-suffix'] = ['error',{'suffixes': ['Component','Control','Dialog','Form','List','Page','Template','Widget']}];"
npx json -I -f .eslintrc.json -e "this.overrides[1].rules['@typescript-eslint/no-empty-function'] = ['off'];"
echo "this.scripts.start = 'ng serve -o'"
npx json -I -f package.json -e "this.scripts.start = 'ng serve -o';"
git add *
git commit -m 'chore: configure .eslintrc.json rules and start script'
echo " generate core module with routing "
npx nx g module core --module=app --routing --routingScope=Root --no-interactive
git add *
git commit -m 'feat: generate core module with routing'
echo "🏠 app intitial configuration";
