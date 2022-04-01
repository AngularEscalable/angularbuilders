echo "🚧 page libraries ";
echo " ✍ generate home page";
ng g library home --buildable --simpleModuleName --directory=domain --importPath=@ab/home --prefix=ab --routing --lazy --parentModule='apps\www\src\app\core\core-routing.module.ts' --tags='domain, page'
ng g c home --project=domain-home --flat --skipTests=false --skipSelector --type=Page
ng g c category-list  --project=domain-home
ng g s home --project=domain-home
ng g interface models/category --project=domain-home
git add *
git commit -m 'feat: generate home page'
echo " ✍ generate not-found page";
ng g library not-found --buildable --simpleModuleName --directory=domain --importPath=@ab/not-found --prefix=ab --routing --lazy --parentModule='apps\www\src\app\core\core-routing.module.ts' --tags='domain, page'
ng g c not-found --project=domain-not-found --flat --skipSelector --type=Page
git add *
git commit -m 'feat: generate not-found page'
echo " ✍ generate resource page";
ng g library resource --buildable --simpleModuleName --directory=domain --importPath=@ab/resource --prefix=ab --routing --lazy --parentModule='apps\www\src\app\core\core-routing.module.ts' --tags='domain, page'
ng g c resource --project=domain-resource --flat --skipTests=false --skipSelector --type=Page
ng g resolver resource --project domain-resource --skip-tests=true
ng g s resource --project=domain-resource
ng g interface models/resource --project=domain-resource
echo " ✍ generate category page";
ng g library category --buildable --simpleModuleName --directory=domain --importPath=@ab/category --prefix=ab --routing --lazy --parentModule='apps\www\src\app\core\core-routing.module.ts' --tags='domain, page'
ng g c category --project=domain-category --flat --skipTests=false --skipSelector --type=Page
ng g c resource-list  --project=domain-category
ng g s category --project=domain-category
ng g interface models/category --project=domain-category
ng g interface models/resource --project=domain-category
echo " generate resource-new page";
ng g library resource-new --buildable --simpleModuleName --directory=domain --importPath=@ab/resource-new --prefix=ab --routing --lazy --parentModule='apps\www\src\app\core\core-routing.module.ts' --tags='domain, page'
ng g c resource-new --project=domain-resource-new --flat --skipTests=false --skipSelector --type=Page
ng g c resource-new --project=domain-resource-new --type=Form
ng g s resource-new --project=domain-resource-new --flat
ng g interface models/category --project=domain-resource-new
ng g interface models/resource --project=domain-resource-new
git add *
git commit -m 'feat: generate resource-new page'
echo " ✍ generate search page";
ng g library search --buildable --simpleModuleName --directory=domain --importPath=@ab/search --prefix=ab --routing --lazy --parentModule='apps\www\src\app\core\core-routing.module.ts' --tags='domain, page'
ng g c search --project=domain-search --flat --skipTests=false --skipSelector --type=Page
ng g c results --project=domain-search
ng g s search --project=domain-search
ng g interface models/resource --project=domain-search
git add *
git commit -m 'feat: generate search page'
echo "🏠 page libraries";
echo "🚧 widget libraries ";
echo " ✍ generate search-box widget";
ng g library search-box --buildable --simpleModuleName --directory=domain --importPath=@ab/search-box --prefix=ab --tags='domain, widget'
nx g c search-box --project=domain-search-box --flat --skipTests=false --type=Widget --export=true
nx g c search-box --project=domain-search-box
nx g s search-box --project=domain-search-box
git add *
git commit -m 'feat: generate search-box widget'
echo "🏠 widget libraries";
