echo "🚧 shared libraries ";
echo " ✍ generate global library";
ng g library global --buildable --simpleModuleName --directory=shared --importPath=@ab/global --tags='shared, core'
ng g class store --project=shared-global
ng g interface models/action --project shared-global
ng g interface models/tracker-entry --project shared-global
ng g s TrackerStore --project=shared-global
ng g s ErrorHandler --project=shared-global
git add *
git commit -m 'feat: generate global library'
echo " ✍ generate data library";
ng g library data --buildable --simpleModuleName --directory=shared --importPath=@ab/data  --tags='shared, core'
ng g interceptor adapter --project=shared-data
ng g interceptor tracker --project=shared-data
git add *
git commit -m 'feat: generate data library'
echo " ✍ generate ui library";
ng g library ui --buildable --simpleModuleName --directory=shared --importPath=@ab/ui --prefix=ab-ui  --tags='shared, ui'
ng g c components/header  --project=shared-ui --export=true
ng g interface models/header --project shared-ui
ng g c components/notification --project=shared-ui --export=true
ng g c templates/box --project=shared-ui --export=true --type=Template
ng g c templates/card --project=shared-ui --export=true --type=Template
ng g interface models/card --project shared-ui
ng g directive directives/track --project=shared-ui --export=true
ng g pipe pipes/truncate --project=shared-ui --export=true
git add *
git commit -m 'feat: generate ui library'
echo " ✍ generate form library";
ng g library form --buildable --simpleModuleName --directory=shared --importPath=@ab/form --prefix=ab-form  --tags='shared, ui'
ng g c components/control --project=shared-form --export=true
ng g class ab-validators --project=shared-form
git add *
git commit -m 'feat: generate form library'
echo " generate layout library";
ng g library layout --buildable --simpleModuleName --directory=shared --importPath=@ab/layout --prefix=ab --tags='shared, ui'
ng g c navbar --project=shared-layout --export=true --type=Widget
ng g c footer --project=shared-layout --export=true
git add *
git commit -m 'feat: generate layout library'
echo "🏠 shared libraries ";
