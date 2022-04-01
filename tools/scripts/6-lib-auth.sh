echo "🚧 auth shared feature";
ng g library auth --buildable --directory=shared --importPath=@ab/auth --prefix=ab --routing --lazy --parentModule='apps\www\src\app\core\core-routing.module.ts' --tags='shared, page'
ng g c auth --project=shared-auth --flat --type=Widget --skipTests=false --export=true
ng g c login --project=shared-auth --flat --type=Page --skipSelector --skipTests=false
ng g c login --project=shared-auth --type=Form
ng g s auth --project=shared-auth --flat
ng g interceptor auth --project=shared-auth --flat
ng g guard auth --implements='CanActivate,CanLoad' --no-interactive --project=shared-auth --flat
git add *
git commit -m 'feat: generate auth feature'
echo "🏠 auth shared feature";
