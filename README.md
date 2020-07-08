# dependencies
1. Bootstrap UI

```shell
ng add @ng-bootstrap/ng-bootstrap
```

2. Angular material
```shell
ng add @angular/material
```


3. [ngx-echarts]{https://xieziyu.github.io/ngx-echarts/#/welcome}
```
see installation details at: https://xieziyu.github.io/ngx-echarts/#/welcome
```

4. [Echart-wordcloud]{https://github.com/ecomfe/echarts-wordcloud}
```
see installation details at https://github.com/ecomfe/echarts-wordcloud
```

5. [Org-chart]{https://www.npmjs.com/package/orgchart}
```
see installation details at https://www.npmjs.com/package/orgchart
```

6. [ng5-slider]{https://www.npmjs.com/package/ng5-slider}
```
see installation details at https://www.npmjs.com/package/ng5-slider
```


# If deploy via angular-cli-ghpage
need to first add localize package:

```shell
ng add @angular/localize
```

How to deploy an angular app
1. build angular project with: 
```
ng build --prod dist/xainlp --base-href "/xainlp/"
```
2. deploy with (possibly run the following with `sudo`)
```
ngh --dir=dist/xainlp
```
