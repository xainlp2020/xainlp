# dependencies
1. Bootstrap UI

```shell
ng add @ng-bootstrap/ng-bootstrap
```

2. Angular material
```shell
ng add @angular/material
```

# If deploy via angular-cli-ghpage
need to first add localize package:

```shell
ng add @angular/localize
```

How to deploy an angular app
1. use Angular CLI to create a new app (e.g., ng new my-app —routing)
2. setup GitHub remote repo, for example, create a repo “xainlp” under username “xainlp2020”, 
3. setup remote repo origin: git remote set-url “git@hostname:xainlp2020/xainlp”, check your ~/.ssh/config to figure out your hostname
4. build angular project with: ng build --prod --base-href “/xainlp/“ (note, there is no need to add the https://xainlp2020.github.io prefix)
5. deploy with ng build --prod --base-href "xainlp"
6. go to your GitHub repo setting and choose gh-page branch as GitHub page
